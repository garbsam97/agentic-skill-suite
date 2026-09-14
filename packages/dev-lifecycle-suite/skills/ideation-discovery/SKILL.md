---
name: ideation-discovery
description: Phase 1 of dev-lifecycle-suite. Takes a rough idea, executes Soft QA scope probing (frontend UI vs backend data boundaries), and refines it into a structured product specification artifact.
disable-model-invocation: true
---

# Phase 1: Ideation & Discovery

Refine a rough, ambiguous feature idea into a comprehensive product specification artifact (`.scratch/<feature-slug>/spec.md`) with strict Soft QA scope probing across Backend, Frontend, or Fullstack domains.

## Workflow

1. **Initialize Persona**:
   - Define subagent `IdeaRefiner` using `subagents/idea-refiner.md`.
2. **Ingest Idea & Track**:
   - Accept user's raw feature request or problem statement along with `--track <backend|frontend|fullstack>`.
3. **Run Discovery & Soft QA Scope Interview**:
   - Engage in structured grilling rounds (max 3-4 questions per round with defaults) to clarify target users, acceptance criteria, and non-functional requirements.
   - **Soft QA Scope Check**:
     - *Backend Probing*: Clarify data schemas, API contracts, third-party integrations, auth mechanisms, performance SLAs.
     - *Frontend Probing*: Clarify target devices/browsers, design system preferences, UI component flows, state persistence, accessibility (a11y) expectations.
     - *Out-of-Scope Check*: Explicitly ask probing questions on boundary edge cases ("Is feature X in scope?", "What are explicit out-of-scope exclusions?") to lock scope boundaries early.
4. **Interactive Soft QA Pause & Scope Alignment**:
   - Present identified scope risks and draft out-of-scope boundaries to the user. Pause for user confirmation.
5. **Generate Spec Artifact**:
   - Write `.scratch/<feature-slug>/spec.md`.
6. **Human Sign-Off Gate**:
   - Present `spec.md` to user for final confirmation before proceeding to Phase 2 (`architecture-design`).
