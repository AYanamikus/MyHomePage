import { access, readFile, readdir } from 'node:fs/promises';

const required = [
  'astro.config.mjs', 'tailwind.config.mjs', 'postcss.config.cjs', 'pnpm-workspace.yaml',
  'src/layouts/BaseLayout.astro', 'src/data/projects.ts', 'src/config/access.ts',
  'src/components/Navbar.astro', 'src/components/Footer.astro', 'src/components/ProjectCard.astro',
  'src/components/AccessGate.astro', 'src/components/CaseStudySection.astro',
  'src/components/PrivateLinkButton.astro', 'src/components/NoticeBanner.astro',
  'src/pages/index.astro', 'src/pages/projects.astro', 'src/pages/case-studies.astro',
  'src/pages/case-studies/ue5-action-rpg-combat-prototype.astro', 'src/pages/documents.astro',
  'src/pages/contact.astro', 'public/robots.txt', 'README.md', 'AGENTS.md'
];
for (const file of required) await access(file);
const layout = await readFile('src/layouts/BaseLayout.astro', 'utf8');
if (!layout.includes('noindex, nofollow, noarchive')) throw new Error('Missing robots meta policy');
const robots = await readFile('public/robots.txt', 'utf8');
if (robots.trim() !== 'User-agent: *\nDisallow: /') throw new Error('Invalid robots.txt');
const publicFiles = await readdir('public', { recursive: true });
const blocked = publicFiles.filter((file) => /\.(pdf|docx?|xlsx?|pptx?|mov|mp4|avi|mkv)$/i.test(file));
if (blocked.length) throw new Error(`Sensitive or heavy files must not be in public/: ${blocked.join(', ')}`);
const readme = await readFile('README.md', 'utf8');
if (!readme.includes('轻量隐私保护，不是真正安全的权限系统')) throw new Error('README must explain access code limitation');
console.log('Privacy and project structure checks passed.');
