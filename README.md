# Certification Coach

The umbrella landing page for **Certification Coach**, an unofficial,
open-source certification practice project.

**Website:** https://sviera91.github.io/certification-coach/

## What belongs here

- The white Primer landing page, navigation, and website issues.
- The [cross-platform roadmap](ROADMAP.md) and proposals for future platforms.
- Links to the implementations and contribution workflows for each platform.

Only GitHub certifications are currently available:

| Platform | Practice and source | Questions, QA, and issues |
| --- | --- | --- |
| GitHub | [Browser Lite](https://sviera91.github.io/github-certification-coach/) and [desktop canvas source](https://github.com/sviera91/github-certification-coach) | [GitHub contribution guide](https://github.com/sviera91/github-certification-coach/blob/main/CONTRIBUTING.md) |

Azure, Terraform, Google Cloud, and AWS remain future ideas. Each future
implementation should have its own repository, question bank, reviews,
issues, and release lifecycle. Do not mix platform question reports with
website issues or roadmap proposals.

## Human review

The original AI-authored questions are **Preview**, not official exam content,
exam dumps, or a validated readiness assessment. Human subject-matter review
and QA are needed. Question validation and revision-specific approvals belong
in the relevant platform repository, not here.

## Develop and publish

Node.js 22 or newer is sufficient; no package installation is needed.

```sh
npm test
npm run build
python3 -m http.server 8080 --directory _site
```

The build copies an explicit public allowlist to ignored `_site/`. Only that
directory is uploaded by `.github/workflows/pages.yml`, after the `test` check.
GitHub Pages is configured to deploy through Actions. A push to `main` deploys;
pull requests run checks without publishing.

The sibling project links are relative to the account's Pages domain.
For local cross-site navigation, run `npm run preview:pages` in the GitHub
tool checkout and set `LANDING_DIRECTORY` to this repository's path.

Primer assets are vendored with upstream notices in `LICENSES.txt`. Landing
content is static, including the illustrative question and linked certification
artwork; update it when current platform coverage changes. The example is an
original GitHub Preview question, not official exam content.

This repository is public because the account's current plan does not support
Pages from a private repository. It contains only public website material.
