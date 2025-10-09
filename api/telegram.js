// Vercel Serverless Function: /api/telegram
// Expects env vars TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
// Receives JSON: { name, email, niche, message, honeypot }

export default async function handler(req, res) {
  // Basic CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Server not configured - missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' });
  }

  try {
    const body = typeof req.body === 'object' && req.body ? req.body : {};
    const { name = '', email = '', niche = '', message = '', honeypot = '' } = body;

    // Simple spam trap
    if (honeypot) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    const textLines = [
      '<b>New Portfolio Inquiry</b>',
      name ? `\n<b>Name:</b> ${escapeHtml(name)}` : '',
      email ? `\n<b>Email:</b> ${escapeHtml(email)}` : '',
      niche ? `\n<b>Niche:</b> ${escapeHtml(niche)}` : '',
      message ? `\n<b>Message:</b>\n${escapeHtml(message)}` : '',
    ].filter(Boolean);

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: textLines.join(''),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    };

    const tg = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await tg.json().catch(() => ({}));
    if (!tg.ok || !data.ok) {
      return res.status(502).json({ ok: false, error: 'Telegram API error', detail: data });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Unexpected error' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
