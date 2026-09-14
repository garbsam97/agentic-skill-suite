---
name: architecture-design
description: Phase 2 of dev-lifecycle-suite. Performs Soft QA on technical design, producing architecture blueprints, interface contracts, and ADRs.
disable-model-invocation: true
---

# Phase 2: Architecture & Technical Design

Transform a product specification (`spec.md`) into a technical design blueprint (`architecture.md`) and Architectural Decision Records (`docs/adr/`) with explicit Soft QA architectural review.

## Workflow

1. **Initialize Persona**:
   - Define subagent `SystemArchitect` using `subagents/system-architect.md`.
2. **Analyze Spec**:
   - Read `.scratch/<feature-slug>/spec.md` and inspect existing codebase / `CONTEXT.md`.
3. **Design Module Seams & Interfaces**:
   - Define component interfaces, state models, data flows, and module boundaries.
4. **Evaluate ADRs & Soft QA Architecture Review**:
   - For significant trade-offs, generate `docs/adr/00XX-<decision-slug>.md`.
   - **Soft QA Architecture Pause**: Present proposed interfaces and ADR choices to the user. Ask probing questions ("Does approach A align with your system constraints?", "Are there legacy seams we should avoid?") and pause for user feedback.
5. **Generate Architecture Artifact**:
   - Write `.scratch/<feature-slug>/architecture.md` and update `CONTEXT.md`.
6. **Human Sign-Off Gate**:
   - Present final `architecture.md` and ADRs for user sign-off before proceeding to Phase 3 (`implementation-tdd`).
