---
name: architecture-design
description: Phase 2 of dev-lifecycle-suite. Takes a spec.md artifact and produces technical architecture blueprints, interface contracts, domain models, and ADRs.
disable-model-invocation: true
---

# Phase 2: Architecture & Technical Design

Transform a product specification (`spec.md`) into a technical design blueprint (`architecture.md`) and Architectural Decision Records (`docs/adr/`).

## Workflow

1. **Initialize Persona**:
   - Define subagent `SystemArchitect` using `subagents/system-architect.md`.
2. **Analyze Spec**:
   - Read `.scratch/<feature-slug>/spec.md` and inspect existing codebase / `CONTEXT.md`.
3. **Design Module Seams & Interfaces**:
   - Define component interfaces, state models, data flows, and module boundaries.
4. **Evaluate ADRs**:
   - For significant, hard-to-reverse trade-offs, generate `docs/adr/00XX-<decision-slug>.md`.
5. **Generate Architecture Artifact**:
   - Write `.scratch/<feature-slug>/architecture.md` and update `CONTEXT.md`.
6. **Human Sign-Off Gate**:
   - Present `architecture.md` and ADRs for user confirmation before proceeding to Phase 3 (`implementation-tdd`).
