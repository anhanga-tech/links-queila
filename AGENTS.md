# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty scaffold: no source, tests, assets, or build manifest have been added. Reserve the root for `README.md`, dependency manifests, and tool configuration. As the project grows, use this layout:

- `src/` for application code, grouped by feature rather than file type.
- `tests/` for integration and end-to-end tests; colocate unit tests when supported.
- `public/` or `assets/` for static files such as images and fonts.
- `scripts/` for repeatable maintenance and release tasks.

Document deviations in `README.md` and update this guide once the architecture is established.

## Build, Test, and Development Commands

No package manager or build system is configured. When adding one, expose a consistent command set in the README. For Node, prefer:

- `npm run dev` — start the local development server.
- `npm run build` — produce a production build.
- `npm test` — run the automated test suite.
- `npm run lint` — check formatting and static-analysis rules.

Do not commit generated output, dependency directories, or local environment files.

## Coding Style & Naming Conventions

Add formatter and linter configuration with the first source code; treat the formatter as authoritative. Default to two-space indentation for JavaScript, TypeScript, JSON, YAML, and CSS. Use `PascalCase` for components and classes, `camelCase` for functions and variables, and `kebab-case` for filenames unless the framework dictates otherwise. Keep modules focused.

## Testing Guidelines

Every behavior change should include a test or explain why testing is impractical. Name tests after observable behavior, such as `renders-empty-state.test.ts`. Cover success, failure, and boundary cases. Keep tests deterministic and independent of production services.

## Commit & Pull Request Guidelines

No usable Git history exists to infer a convention. Use concise, imperative subjects, optionally following Conventional Commits: `feat: add link search` or `fix: handle invalid URL`. Keep each commit to one logical change.

Pull requests should explain the purpose, summarize changes, list verification commands, and link issues. Include screenshots for UI changes. Call out migrations, configuration changes, and follow-up work; request review only after local checks pass.

## Security & Configuration

Store secrets in ignored environment files such as `.env.local`, and provide a sanitized `.env.example` containing required variable names. Validate external URLs and user input at system boundaries. Never log credentials, tokens, or sensitive user data.
