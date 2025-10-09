// Netlify Function: /.netlify/functions/telegram
// Receives POST JSON: { name, email, niche, message, _honey }
// Uses env vars TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
// NOTE: Set environment variables in Netlify UI for security

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

exports.handler = async function(event) {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json',
	};

	if (event.httpMethod === 'OPTIONS') {
		return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
	}
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, headers, body: JSON.stringify({ ok: false, error: 'Method not allowed' }) };
	}

	if (!token || !chatId) {
		return { statusCode: 500, headers, body: JSON.stringify({ ok: false, error: 'Server not configured - missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' }) };
	}

	try {
		const body = event.body ? JSON.parse(event.body) : {};
		const { name = '', email = '', niche = '', message = '', honeypot = '', _honey = '' } = body;

		// Honey pot (spam)
		if (honeypot || _honey) {
			return { statusCode: 200, headers, body: JSON.stringify({ ok: true, skipped: true }) };
		}

		const textLines = [
			'<b>New Portfolio Inquiry</b>',
			name ? `\n<b>Name:</b> ${escapeHtml(name)}` : '',
			email ? `\n<b>Email:</b> ${escapeHtml(email)}` : '',
			niche ? `\n<b>Niche:</b> ${escapeHtml(niche)}` : '',
			message ? `\n<b>Message:</b>\n${escapeHtml(message)}` : '',
		].filter(Boolean);

		const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: textLines.join(''),
				parse_mode: 'HTML',
				disable_web_page_preview: true,
			}),
		});
		const data = await res.json().catch(() => ({}));
		if (!res.ok || data.ok === false) {
			return { statusCode: 502, headers, body: JSON.stringify({ ok: false, error: 'Telegram API error', detail: data }) };
		}
		return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
	} catch (err) {
		return { statusCode: 500, headers, body: JSON.stringify({ ok: false, error: 'Unexpected error' }) };
	}
};

function escapeHtml(str) {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/\"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

