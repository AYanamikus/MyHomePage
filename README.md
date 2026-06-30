# MyHomePage

A private-preview personal homepage built with Astro, Tailwind CSS, and pnpm.

## Pages
- Home
- Projects
- Case Studies
- Documents
- Contact

## Components
- `Navbar`
- `Footer`
- `ProjectCard`
- `AccessGate`
- `NoticeBanner`

## Access code
The lightweight access gate is intended for preview-only content. The default demo code is:

```text
preview-2026
```

This is not a replacement for server-side authentication. Use a backend or hosting-provider auth before publishing confidential materials.

## Privacy and indexing
The site includes:
- `<meta name="robots" content="noindex, nofollow, noarchive">`
- `public/robots.txt` with `Disallow: /`

Do not place sensitive PDFs, Word documents, Excel files, or complete videos in `public/`.

## Development

```bash
pnpm install
pnpm dev
pnpm build
```
