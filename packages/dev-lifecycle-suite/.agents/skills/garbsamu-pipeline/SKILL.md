---
name: garbsamu-pipeline
description: Master orchestration pipeline for dev-lifecycle-suite. Executes all 5 software development lifecycle phases sequentially with human approval gates.
disable-model-invocation: true
---

# Master Pipeline: garbsamu-pipeline

Orchestrate the complete 5-phase software development lifecycle from rough idea to production deployment.

```
[Phase 1: ideation-discovery] ➔ [Gate 1] ➔ [Phase 2: architecture-design] ➔ [Gate 2] ➔ [Phase 3: implementation-tdd] ➔ [Phase 4: qa-security] ➔ [Gate 3] ➔ [Phase 5: deployment-ops]
```

## Sequential Execution Procedure

1. **Phase 1: Ideation & Discovery**
   - Invoke `ideation-discovery` with the user's idea.
   - Produce `.scratch/<feature-slug>/spec.md`.
   - **Gate 1**: Pause for user approval of `spec.md`.

2. **Phase 2: Architecture & Technical Design**
   - Invoke `architecture-design` passing `spec.md`.
   - Produce `.scratch/<feature-slug>/architecture.md` & `docs/adr/`.
   - **Gate 2**: Pause for user approval of `architecture.md` & ADRs.

3. **Phase 3: Implementation & Refactoring**
   - Invoke `implementation-tdd` passing `architecture.md` & `spec.md`.
   - Implement source code & test suites, verifying with CLI test runs.

4. **Phase 4: QA & Security Audit**
   - Invoke `qa-security` on source code & tests.
   - Produce `.scratch/<feature-slug>/audit-report.md`.
   - **Gate 3**: Pause for user approval of `audit-report.md`.

5. **Phase 5: Deployment & Operations**
   - Invoke `deployment-ops` passing `audit-report.md`.
   - Produce CI/CD workflows, Dockerfile, `CHANGELOG.md`, and `release-summary.md`.

## Flags & Options

- `--phase <1-5>`: Execute a specific phase in isolation if preceding artifacts already exist in `.scratch/<feature-slug>/`.
