# @garbsam97/dev-lifecycle-suite

A standalone, self-contained suite of skills and subagent templates designed to support developers throughout the complete 5-phase software development lifecycle: from initial idea refinement to production deployment, with built-in **Soft QA & Scope Alignment** and **Dependency Vulnerability Auditing (SCA)**.

## Core Lifecycle Phases

```
[Phase 1: Ideation & Discovery] ➔ [Phase 2: Architecture & Design] ➔ [Phase 3: Implementation & TDD] ➔ [Phase 4: QA, Security Audit & SCA] ➔ [Phase 5: Deployment & Operations]
```

1. **Phase 1 — Ideation & Discovery (`ideation-discovery`)**
   - **Subagent**: `IdeaRefiner`
   - **Output**: `.scratch/<feature>/spec.md`
   - **Goal**: Refines raw ideas into structured user stories, acceptance criteria, and explicit out-of-scope boundaries via interactive grilling and Soft QA scope probing.

2. **Phase 2 — Architecture & Technical Design (`architecture-design`)**
   - **Subagent**: `SystemArchitect`
   - **Output**: `.scratch/<feature>/architecture.md`, `docs/adr/00XX-<title>.md`, `CONTEXT.md`
   - **Goal**: Establishes deep module boundaries, API contracts, domain modeling, and ADRs with interactive Soft QA architectural review.

3. **Phase 3 — Implementation & Refactoring (`implementation-tdd`)**
   - **Subagent**: `BuilderAgent`
   - **Output**: Production Code & Unit/Integration Tests
   - **Goal**: Drives a strict Red-Green-Refactor TDD cycle with Red-phase Soft QA test plan review and CLI test suite verification.

4. **Phase 4 — QA, Code Review & Security Audit (`qa-security`)**
   - **Subagents**: `AuditAgent` & `DependencyAuditor`
   - **Outputs**: `.scratch/<feature>/audit-report.md` & `.scratch/<feature>/dependency-security-report.md`
   - **Goal**: Dual-axis code review (Standards vs Spec), OWASP security vulnerability scanning, and multi-ecosystem package vulnerability auditing (SCA).

5. **Phase 5 — Deployment & Operations (`deployment-ops`)**
   - **Subagent**: `ReleaseAgent`
   - **Output**: `Dockerfile`, `.github/workflows/deploy.yml`, `CHANGELOG.md`, `.scratch/<feature>/release-summary.md`
   - **Goal**: Configures container manifests, CI/CD pipelines, semantic versioning, and pre-flight checks.

6. **Standalone Dependency Security Audit (`dependency-audit`)**
   - **Subagent**: `DependencyAuditor`
   - **Output**: `.scratch/<feature>/dependency-security-report.md`
   - **Goal**: Dedicated Software Composition Analysis across npm, PyPI/pip, NuGet, Cargo (Rust), and Go module package manifests using native audit CLIs or OSV.dev API queries.

7. **Master Pipeline (`garbsamu-pipeline`)**
   - Orchestrates all 5 phases end-to-end with Soft QA pauses, passing context artifacts between subagents and managing human sign-off gates.

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

Or run an individual phase/skill:

```text
/ideation-discovery
/architecture-design
/implementation-tdd
/qa-security
/dependency-audit
/deployment-ops
```
