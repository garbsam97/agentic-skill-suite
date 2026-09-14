---
name: architecture-design
description: Phase 2 of dev-lifecycle-suite. Architect deep module boundaries, API contracts, or UI component hierarchies based on spec.md with track branching (backend, frontend, fullstack) and Soft QA architectural review.
disable-model-invocation: true
---

# Phase 2: Architecture & Technical Design

Design deep module boundaries, API contracts, domain models, or UI component hierarchies based on `spec.md` using track-specific subagents.

## Workflow

1. **Initialize Persona(s) based on `--track`**:
   - For `--track backend`: Define subagent `SystemArchitect` using `subagents/system-architect.md`.
   - For `--track frontend`: Define subagent `UIFrontendArchitect` using `subagents/ui-frontend-architect.md`.
   - For `--track fullstack` *(default)*: Initialize both `SystemArchitect` and `UIFrontendArchitect`.
2. **Read Inputs**:
   - Parse `.scratch/<feature-slug>/spec.md`.
3. **Execute Technical Architecture & Soft QA Review**:
   - **Backend Track (`SystemArchitect`)**:
     - Design deep module seams, DB schemas, REST/gRPC endpoints, and service boundaries.
     - Document hard choices in ADRs (`docs/adr/00XX-<title>.md`).
     - Output `.scratch/<feature-slug>/architecture-backend.md`.
   - **Frontend Track (`UIFrontendArchitect`)**:
     - Design UI component breakdown (Atoms, Molecules, Organisms, Pages), client state stores (Zustand/Redux/Pinia), routing, REST/GraphQL client hooks, and a11y strategy.
     - Document client architectural choices in ADRs.
     - Output `.scratch/<feature-slug>/architecture-frontend.md`.
   - **Soft QA Architecture Pause**: Present proposed interfaces/component hierarchies, state flows, and ADR trade-offs (Option A vs Option B) to the user; pause for interactive feedback.
4. **Human Sign-Off Gate**:
   - Present architecture blueprints and ADRs to user for final confirmation before proceeding to Phase 3 (`implementation-tdd`).
