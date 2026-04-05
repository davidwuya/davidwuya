# davidwuya.com

Personal portfolio site for David Zhu, built on the [Astro Nano](https://github.com/markhorn-dev/astro-nano) theme. Static site using Astro 5, Tailwind CSS, and TypeScript. Hosted on Cloudflare Pages.

## Features

- Static portfolio with work experience and projects
- Light/dark theme with animated UI
- hCaptcha-protected email reveal (server-side verification via Cloudflare Pages Function)
- SEO-friendly with auto-generated sitemap and RSS feed
- Markdown and MDX content collections

## Setup

```sh
pnpm install
pnpm dev
```

### Environment variables

For local development with Cloudflare Functions, create a `.dev.vars` file:

```
HCAPTCHA_SECRET=your_secret_key
CONTACT_EMAIL=your_email
```

Then run:

```sh
pnpm build && npx wrangler pages dev dist/
```

In production, set `HCAPTCHA_SECRET` and `CONTACT_EMAIL` in the Cloudflare Pages dashboard under Settings > Environment variables.

## Commands

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `pnpm dev`           | Start dev server at `localhost:4321`         |
| `pnpm build`         | Type-check and build to `./dist/`            |
| `pnpm preview`       | Preview production build locally             |
| `pnpm lint`          | Run ESLint                                   |
| `pnpm lint:fix`      | Auto-fix ESLint issues                       |

## Project structure

```
src/
  components/   Astro components
  content/      Markdown content collections (work, projects)
  consts.ts     Site metadata and social links
  layouts/      Page layouts
  lib/          Utility functions
  pages/        Route pages
  types.ts      TypeScript type definitions
functions/
  api/          Cloudflare Pages Functions (hCaptcha verification)
```

## License

MIT
