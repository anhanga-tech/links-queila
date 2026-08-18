# Repository Guidelines

## Project Structure & Module Organization

This is a single-page React/TypeScript site deployed as static files to
Cloudflare Pages. `src/App.tsx` contains the page structure and reusable link
components; `src/main.tsx` mounts the application; `src/styles.css` owns the
visual system and responsive rules. Keep editable profile, service, contact,
and SEO data centralized in `data/site-config.ts`. Static images belong in
`public/`, while behavioral and output checks live in `tests/`.

## Build, Test, and Development Commands

- `pnpm install` — install the locked dependency set.
- `pnpm dev` — start Vite locally on port 3000.
- `pnpm build` — type-check and create the Pages-ready `dist/` directory.
- `pnpm lint` — run ESLint across TypeScript and React sources.
- `pnpm test` — build, render the page, and verify content and metadata.

Cloudflare Pages must use `pnpm build` with `dist` as its output directory.
Never commit `dist/`, `node_modules/`, local environment files, or credentials.

## Coding Style & Naming Conventions

Use two-space indentation and let existing ESLint rules guide TypeScript and
JSX changes. Name React components with `PascalCase`, functions and variables
with `camelCase`, and asset files with `kebab-case`. Prefer semantic HTML,
focused components, and configuration-driven content. External links must keep
accessible labels, `target="_blank"`, and `rel="noopener noreferrer"`.

## Testing Guidelines

Tests use Node's built-in test runner plus Vite SSR for markup checks. Update
`tests/site.test.mjs` whenever services, metadata, URLs, or publication rules
change. Keep tests deterministic and verify `pnpm test` before pushing.

## Commit & Pull Request Guidelines

Use concise imperative or Conventional Commit subjects, such as
`feat: prepare Cloudflare Pages build`. Keep commits limited to one logical
change. Pull requests should explain the purpose, list verification commands,
link relevant issues, and include screenshots for visual changes.

## Security & Publication

Keep `isProductionReady` false until all professional information is approved.
Preserve Cloudflare DNS records unrelated to the site, especially MX and TXT.
Do not add analytics, pixels, secrets, or personal data without explicit review.
