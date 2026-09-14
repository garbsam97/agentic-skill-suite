---
name: garbsamu-pipeline
description: Master orchestration pipeline for dev-lifecycle-suite. Executes all 5 SDLC phases sequentially with track branching (backend, frontend, fullstack), interactive Soft QA scope checks, and human approval gates.
disable-model-invocation: true
---

# Master Pipeline: garbsamu-pipeline

Orchestrate the complete 5-phase software development lifecycle from rough idea to production deployment with continuous Soft QA & Scope Alignment across **Backend**, **Frontend**, or **Fullstack** development tracks.

```
[Phase 1: ideation-discovery + Soft QA Pause] ➔ [Gate 1] ➔ [Phase 2: architecture-design (Track-Specific) + Soft QA Pause] ➔ [Gate 2] ➔ [Phase 3: implementation-tdd (Track-Specific) + Red-Phase Pause] ➔ [Phase 4: qa-security (Track-Specific)] ➔ [Gate 3] ➔ [Phase 5: deployment-ops (Track-Specific)]
```

## Track Branching Options

The pipeline supports three distinct execution tracks via the `--track` flag:
- `--track fullstack` *(default)*: Coordinates both Backend and Frontend subagent personas across all 5 phases. Phase 2 produces both backend API contracts and UI component blueprints.
- `--track backend`: Focuses exclusively on server architecture, DB schemas, REST/gRPC APIs, backend TDD, OWASP API security, and container/K8s operations.
- `--track frontend`: Focuses exclusively on UI component breakdown, state management (Zustand/Redux/Pinia), Client Routing, Component TDD, WCAG accessibility, Core Web Vitals, and CDN/SSG release ops.

## Sequential Execution Procedure

1. **Phase 1: Ideation & Discovery**
   - Invoke `ideation-discovery` with the user's feature request and target track (`--track <backend|frontend|fullstack>`).
   - **Soft QA Scope Pause**: Probe boundary edge cases, clarify frontend UI flows vs backend data model boundaries, and confirm out-of-scope exclusions with user.
   - Produce `.scratch/<feature-slug>/spec.md`.
   - **Gate 1**: Pause for user approval of `spec.md`.

2. **Phase 2: Architecture & Technical Design**
   - Invoke `architecture-design` passing `spec.md` and `--track`.
   - **Track Personas**:
     - *Backend*: Dispatches `SystemArchitect` to produce `architecture-backend.md` & `docs/adr/`.
     - *Frontend*: Dispatches `UIFrontendArchitect` to produce `architecture-frontend.md` & `docs/adr/`.
     - *Fullstack*: Runs both `SystemArchitect` and `UIFrontendArchitect`.
   - **Soft QA Architecture Pause**: Present proposed interfaces/component trees and ADR choices; pause for user feedback.
   - **Gate 2**: Pause for user approval of architecture artifacts & ADRs.

3. **Phase 3: Implementation & Refactoring**
   - Invoke `implementation-tdd` passing architecture artifacts, `spec.md`, and `--track`.
   - **Track Personas**:
     - *Backend*: Dispatches `BuilderAgent` for API/server TDD.
     - *Frontend*: Dispatches `UIFrontendBuilder` for Component-Driven TDD (React/Vue/Flutter/Widget testing).
   - **Red-Phase Soft QA Pause**: Present failing test scenarios to user before writing implementation code.
   - Implement source code & test suites, verifying with CLI test runs (`npm test`, `pytest`, `cargo test`, `vitest`, `flutter test`).

4. **Phase 4: QA & Security Audit**
   - Invoke `qa-security` passing `--track`.
   - **Track Personas**:
     - *Backend*: Dispatches `AuditAgent` (OWASP API Top 10, code standards vs spec).
     - *Frontend*: Dispatches `UIFrontendAuditor` (WCAG 2.1 a11y, Core Web Vitals LCP/CLS/INP, DOM XSS/CSP, bundle size).
     - *Shared*: Dispatches `DependencyAuditor` for multi-ecosystem package vulnerability scanning (SCA).
   - Produce `.scratch/<feature-slug>/audit-report.md` (or track-specific audit reports) and `dependency-security-report.md`.
   - **Gate 3**: Pause for user approval of audit reports.

5. **Phase 5: Deployment & Operations**
   - Invoke `deployment-ops` passing `--track`.
   - **Track Personas**:
     - *Backend*: Dispatches `ReleaseAgent` for Dockerfile, Docker Compose, K8s, server CI/CD.
     - *Frontend*: Dispatches `UIFrontendRelease` for static hosting (Firebase, Vercel, Netlify, CDN), SSG/SSR build outputs, cache control, and SPA redirects.
   - Produce CI/CD workflows, configuration manifests, `CHANGELOG.md`, and `release-summary.md`.

## Flags & Options

- `--track <backend|frontend|fullstack>`: Select execution track (default: `fullstack`).
- `--phase <1-5>`: Execute a specific phase in isolation if preceding artifacts already exist in `.scratch/<feature-slug>/`.
