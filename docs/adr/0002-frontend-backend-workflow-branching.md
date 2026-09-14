# ADR-0002: Frontend and Backend Workflow Branching Strategy

- **Status**: Accepted
- **Date**: 2026-09-14

## Context
The initial release of `dev-lifecycle-suite` primarily catered to backend software development (APIs, server architecture, domain-driven TDD, container deployments). As applications scale, frontend and backend development diverge significantly in design concerns, testing methodologies, quality standards, and deployment targets:
- **Architecture**: Backend focuses on DB schemas, API endpoints, microservices, and domain boundaries. Frontend focuses on UI component hierarchy, state management, client-side routing, API fetching/caching strategies, and design system adherence.
- **Implementation & TDD**: Backend TDD tests unit/integration logic and database states. Frontend TDD focuses on component-driven development, DOM rendering/snapshot assertions, user interaction events, and mock API integration.
- **QA & Auditing**: Backend QA audits OWASP API Top 10 vulnerabilities, DB query performance, and server error handling. Frontend QA audits WCAG 2.1 accessibility (a11y), Core Web Vitals (LCP, CLS, INP), DOM XSS / CSP security, and bundle size discipline.
- **Deployment**: Backend deploys container images (Docker, K8s) and serverless binaries. Frontend deploys static bundles to CDNs (Firebase Hosting, Vercel, Netlify, Cloudflare Pages, S3+CloudFront) with SSG/SSR optimization.

## Decision
We introduce an explicit **Track Branching System** (`--track backend`, `--track frontend`, `--track fullstack`) across the 5 SDLC phases and the master orchestration pipeline (`garbsamu-pipeline`).

We define 4 specialized Frontend subagent personas alongside existing Backend subagents:
1. `UIFrontendArchitect`: For Phase 2 Frontend design.
2. `UIFrontendBuilder`: For Phase 3 Frontend Component TDD.
3. `UIFrontendAuditor`: For Phase 4 Frontend a11y, Web Vitals, and client security audit.
4. `UIFrontendRelease`: For Phase 5 Frontend CDN and SSG/SSR release ops.

In `fullstack` mode (the default track), Phase 2 produces both backend API contracts (`architecture-backend.md`) and UI component blueprints (`architecture-frontend.md`), ensuring fullstack alignment.

## Consequences
- **Pros**:
  - Clear separation of concerns between frontend and backend workflows.
  - Domain-tailored quality standards (a11y, Web Vitals, OWASP, TDD).
  - Flexible execution: developer can run `--track frontend`, `--track backend`, or `--track fullstack`.
- **Cons**:
  - Additional subagent persona templates to maintain (~4 new markdown subagent prompts).
