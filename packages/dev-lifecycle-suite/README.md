# @garbsam97/dev-lifecycle-suite

A standalone, self-contained suite of skills and subagent templates designed to support developers throughout the complete 5-phase software development lifecycle: from initial idea refinement to production deployment.

## Core Lifecycle Phases

```
[Phase 1: Ideation & Discovery] ➔ [Phase 2: Architecture & Design] ➔ [Phase 3: Implementation & TDD] ➔ [Phase 4: QA & Security Audit] ➔ [Phase 5: Deployment & Operations]
```

1. **Phase 1 — Ideation & Discovery (`ideation-discovery`)**
   - **Subagent**: `IdeaRefiner`
   - **Output**: `.scratch/<feature>/spec.md`
   - **Goal**: Refines raw ideas into structured user stories, acceptance criteria, and explicit boundaries.

2. **Phase 2 — Architecture & Technical Design (`architecture-design`)**
   - **Subagent**: `SystemArchitect`
   - **Output**: `.scratch/<feature>/architecture.md`, `docs/adr/00XX-<title>.md`, `CONTEXT.md`
   - **Goal**: Establishes deep module boundaries, API contracts, domain modeling, and ADRs.

3. **Phase 3 — Implementation & Refactoring (`implementation-tdd`)**
   - **Subagent**: `BuilderAgent`
   - **Output**: Production Code & Unit/Integration Tests
   - **Goal**: Drives a strict Red-Green-Refactor TDD cycle with CLI test suite verification.

4. **Phase 4 — QA, Code Review & Security Audit (`qa-security`)**
   - **Subagent**: `AuditAgent`
   - **Output**: `.scratch/<feature>/audit-report.md`
   - **Goal**: Dual-axis code review (Standards vs Spec) and OWASP security vulnerability scanning.

5. **Phase 5 — Deployment & Operations (`deployment-ops`)**
   - **Subagent**: `ReleaseAgent`
   - **Output**: `Dockerfile`, `.github/workflows/deploy.yml`, `CHANGELOG.md`, `.scratch/<feature>/release-summary.md`
   - **Goal**: Configures container manifests, CI/CD pipelines, semantic versioning, and pre-flight checks.

6. **Master Pipeline (`garbsamu-pipeline`)**
   - Orchestrates all 5 phases end-to-end, passing context artifacts between subagents and managing human sign-off gates.

## Quickstart (NPX Installation)

To install this suite directly into any project using `npx`:

```bash
npx @garbsam97/dev-lifecycle-suite install
```

Or install globally to your home directory (`~/.gemini/antigravity/skills/`):

```bash
npx @garbsam97/dev-lifecycle-suite install --global
```

## Running the Pipeline

Once installed, invoke the master orchestration pipeline in your agent workspace:

```text
/garbsamu-pipeline <your feature idea>
```

Or run an individual phase:

```text
/ideation-discovery
/architecture-design
/implementation-tdd
/qa-security
/deployment-ops
```
