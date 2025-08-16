export type Social = { label: string; url: string };
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  image?: string;
};

export const profile = {
  name: 'Rachit Kushwaha',
  handle: 'BeyondRachit',
  role: 'YouTube Thumbnail Designer',
  blurb:
    "Creative and detail‑oriented Thumbnail Designer with 1 year of experience crafting eye‑catching, engaging thumbnails for various clients. Skilled in graphic design, color theory, and composition with a strong understanding of what drives audience engagement. Proficient in Adobe Photoshop, Illustrator, and Premiere Pro, delivering high‑quality visuals that enhance content visibility and align with brand identity.",
  location: 'Meerut, UP, India',
};

export const socials: Social[] = [
  { label: 'Email', url: 'mailto:kushwaharachit80@gmail.com' },
  { label: 'Phone', url: 'tel:+919934228515' },
  { label: 'GitHub', url: 'https://github.com/Rachit-0P' },
  { label: 'Website', url: 'https://beyondrachit.com' },
];

export const projects: Project[] = [
  // Images-only gallery; tags limited to existing categories. Descriptions intentionally omitted.
  { title: 'Earnings 1', description: '', tags: ['Earnings', 'Best'], image: '/images/earning1.jpg' },
  // Mark one more as Best to surface an additional featured thumbnail by default
  { title: 'Earnings 2', description: '', tags: ['Earnings'], image: '/images/earning2.jpg' },
  { title: 'Earnings 3', description: '', tags: ['Earnings'], image: '/images/earning3.jpg' },
  { title: 'Earnings 4', description: '', tags: ['Earnings'], image: '/images/earning4.jpg' },
  { title: 'Earnings 5', description: '', tags: ['Earnings'], image: '/images/earning5.jpg' },
  { title: 'Earnings 6', description: '', tags: ['Earnings'], image: '/images/earning6.jpg' },
  { title: 'Fitness 1', description: '', tags: ['Fitness', 'Best'], image: '/images/fitness1.jpg' },
  { title: 'Fitness 2', description: '', tags: ['Fitness'], image: '/images/fitness2.jpg' },
  { title: 'Fitness 3', description: '', tags: ['Fitness'], image: '/images/fitness3.jpg' },
  { title: 'Fitness 4', description: '', tags: ['Fitness'], image: '/images/fitness4.jpg' },
  { title: 'Fitness 5', description: '', tags: ['Fitness'], image: '/images/fitness5.jpg' },
  { title: 'Fitness 6', description: '', tags: ['Fitness'], image: '/images/fitness6.jpg' },
  { title: 'Gaming 1', description: '', tags: ['Gaming', 'Best'], image: '/images/gaming1.jpg' },
  { title: 'Gaming 2', description: '', tags: ['Gaming'], image: '/images/gaming2.jpg' },
  { title: 'Gaming 3', description: '', tags: ['Gaming'], image: '/images/gaming3.jpg' },
  { title: 'Gaming 4', description: '', tags: ['Gaming'], image: '/images/gaming4.jpg' },
  { title: 'Gaming 5', description: '', tags: ['Gaming'], image: '/images/gaming5.jpg' },
  { title: 'Gaming 6', description: '', tags: ['Gaming'], image: '/images/gaming6.jpg' },
  { title: 'Tech 1', description: '', tags: ['Tech', 'Best'], image: '/images/tech1.jpg' },
  { title: 'Tech 2', description: '', tags: ['Tech'], image: '/images/tech2.jpg' },
  { title: 'Tech 3', description: '', tags: ['Tech'], image: '/images/tech3.jpg' },
  { title: 'Tech 4', description: '', tags: ['Tech'], image: '/images/tech4.jpg' },
  { title: 'Tech 5', description: '', tags: ['Tech'], image: '/images/tech5.jpg' },
  { title: 'Tech 6', description: '', tags: ['Tech'], image: '/images/tech6.jpg' },
  { title: 'Vlog 1', description: '', tags: ['Vlog', 'Best'], image: '/images/vlog1.jpg' },
  { title: 'Vlog 2', description: '', tags: ['Vlog'], image: '/images/vlog2.jpg' },
  { title: 'Vlog 3', description: '', tags: ['Vlog'], image: '/images/vlog3.jpg' },
  { title: 'Vlog 4', description: '', tags: ['Vlog'], image: '/images/vlog4.jpg' },
  { title: 'Vlog 5', description: '', tags: ['Vlog'], image: '/images/vlog5.jpg' },
  { title: 'Vlog 6', description: '', tags: ['Vlog'], image: '/images/vlog6.jpg' },
  // Removed 5 client thumbnails that were missing local image files to avoid broken tiles
  { title: 'Case Study Visual', description: '', tags: ['Earnings', 'Best'], image: '/images/IMG-20250217-WA0012.jpg' },
];


// Additional data for the YouTube thumbnail designer portfolio
export const skills = [
  { name: 'Adobe Photoshop', level: 90, color: 'bg-blue-500' },
  { name: 'Adobe Illustrator', level: 75, color: 'bg-yellow-500' },
  { name: 'Adobe Premiere Pro', level: 70, color: 'bg-indigo-500' },
  { name: 'Color Theory', level: 85, color: 'bg-purple-500' },
  { name: 'Composition', level: 85, color: 'bg-pink-500' },
  { name: 'Branding', level: 80, color: 'bg-orange-500' },
];

export const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '2 yrs', label: 'Years Experience' },
];

export const services = [
  { icon: '🎨', title: 'Custom YouTube Thumbnails', description: 'Eye‑catching designs tailored to your content and niche.' },
  { icon: '📈', title: 'CTR‑Focused Design', description: 'Composition and color psychology to drive clicks and retention.' },
  { icon: '🎯', title: 'Brand Consistency', description: 'Thumbnails aligned with your channel identity and goals.' },
  { icon: '⚡', title: 'Fast Delivery', description: 'Reliable 24–48 hour turnaround for most requests.' },
  { icon: '🔄', title: 'Iterative Revisions', description: 'Refinements to reach the perfect visual message.' },
  { icon: '✨', title: 'Upload‑Ready Files', description: 'High‑resolution exports optimized for YouTube.' },
];

// Removed unused: experience, testimonials, pricing to keep repo lean
