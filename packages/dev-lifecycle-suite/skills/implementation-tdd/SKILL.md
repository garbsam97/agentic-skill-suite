---
name: implementation-tdd
description: Phase 3 of dev-lifecycle-suite. Implements source code and tests adhering to architecture.md blueprint using a strict Red-Green-Refactor TDD cycle.
disable-model-invocation: true
---

# Phase 3: Implementation & Refactoring

Implement source code and automated test suites based on `architecture.md` and `spec.md` using a strict TDD workflow.

## Workflow

1. **Initialize Persona**:
   - Define subagent `BuilderAgent` using `subagents/builder-agent.md`.
2. **Read Inputs**:
   - Parse `.scratch/<feature-slug>/architecture.md` and `.scratch/<feature-slug>/spec.md`.
3. **Execute TDD Cycle**:
   - **RED**: Write failing unit/integration tests for target interfaces.
   - **GREEN**: Write minimal code implementation to pass tests.
   - **REFACTOR**: Clean up code, type annotations, and docstrings.
4. **Terminal Verification**:
   - Run test suite CLI command (`npm test`, `pytest`, `cargo test`, `go test`, `flutter test`) to verify zero test failures.
5. **Handoff**:
   - Pass working code & test suite to Phase 4 (`qa-security`).
