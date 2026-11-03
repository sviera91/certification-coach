# Certification Coach roadmap

This is a direction for an independent learning project, not a release schedule.
Future ideas have no committed scope, exam list, delivery date, or provider
endorsement. Only the existing GitHub certifications are implemented today.

## Repository ownership

This repository owns the landing page and cross-platform direction. Each
platform implementation owns its code, question banks, official-source
research, human-review ledger, translations, QA, and issue tracking.

- **Available:** [`github-certification-coach`](https://github.com/sviera91/github-certification-coach).
- **Future:** separate repositories for Azure or other platforms once work
  on those implementations is approved. No empty platform repositories are
  created merely to imply availability.

Report website problems and propose new platforms here. Report GitHub
question errors, translation problems, and tool bugs in the GitHub repository.

## Current focus: GitHub

- Offer the full Copilot desktop canvas and browser-only Lite with shared
  Mock exam and Learn behavior.
- Recruit human contributors to validate AI-authored question revisions,
  answer keys, explanations, sources, blueprint mapping, and translations.
- Improve accessibility, navigation, persistence reliability, and QA across
  supported browsers and the desktop canvas.
- Keep Preview labeling honest. Deterministic checks and AI self-review do
  not replace human approval.

## Future idea: Azure exam preparation

Explore an Azure-focused version of the tool. Before implementation:

- Choose specific exams and research their current official blueprints,
  domains, timing, language availability, and study resources.
- Author original practice content, never copy official questions or dumps.
- Establish a human-review and ongoing content-maintenance process.
- Adapt the shared practice experience where appropriate without assuming
  GitHub's mock length, timing, score bands, or domain quotas apply to Azure.

No Azure exam bank or Azure practice mode is included in this release.

## Future exploration: other platforms

Consider similar functionality for **Terraform**, **Google Cloud (GCP)**, and
**Amazon Web Services (AWS)**. Each would need its own scope, official-source
research, original content, provider-specific configuration, human validation,
and maintenance capacity. These are ideas to investigate, not announced
integrations or available certification banks.

## How to influence the roadmap

Open a [roadmap proposal](https://github.com/sviera91/certification-coach/issues/new)
with the learning problem, proposed certification scope, and how you can help
research, author, validate, translate, or test it.
For current GitHub content QA, use the
[GitHub contribution guide](https://github.com/sviera91/github-certification-coach/blob/main/CONTRIBUTING.md).
