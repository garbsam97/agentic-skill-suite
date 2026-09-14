---
name: implementation-tdd
description: Phase 3 of dev-lifecycle-suite. Implements source code and tests adhering to architecture blueprints with track branching (backend, frontend, fullstack), Red-Phase Soft QA check, and strict TDD cycle.
disable-model-invocation: true
---

# Phase 3: Implementation & Refactoring

Implement source code and automated test suites based on `architecture-backend.md` / `architecture-frontend.md` and `spec.md` using a strict TDD workflow with Soft QA test plan review.

## Workflow

1. **Initialize Persona(s) based on `--track`**:
   - For `--track backend`: Define subagent `BuilderAgent` using `subagents/builder-agent.md`.
   - For `--track frontend`: Define subagent `UIFrontendBuilder` using `subagents/ui-frontend-builder.md`.
   - For `--track fullstack` *(default)*: Initialize both `BuilderAgent` and `UIFrontendBuilder`.
2. **Read Inputs**:
   - Parse `.scratch/<feature-slug>/spec.md` and corresponding architecture blueprints (`architecture-backend.md`, `architecture-frontend.md`).
3. **Execute Track-Specific TDD Cycle with Soft QA Check**:
   - **RED Phase**:
     - *Backend*: Write failing unit/integration tests for API endpoints, DB queries, and domain modules.
     - *Frontend*: Write failing component/widget tests (Testing Library, Jest, Vitest, Cypress, Playwright, WidgetTester) for UI rendering, state mutations, and user events.
   - **Soft QA Test Plan Pause**: Present written failing test specifications to the user to confirm test coverage and edge case handling before writing implementation code.
   - **GREEN Phase**: Write minimal production code / UI components to pass tests.
   - **REFACTOR Phase**: Clean up code, component props/state, type annotations, and docstrings.
4. **Terminal Verification**:
   - Run test suite CLI commands (`npm test`, `pytest`, `cargo test`, `vitest`, `flutter test`) to verify zero test failures.
5. **Handoff**:
   - Pass working code & test suite to Phase 4 (`qa-security`).
