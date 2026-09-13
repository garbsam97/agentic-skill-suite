---
name: ideation-discovery
description: Phase 1 of dev-lifecycle-suite. Takes a rough idea and refines it into a structured product specification artifact via interactive discovery interviewing.
disable-model-invocation: true
---

# Phase 1: Ideation & Discovery

Refine a rough, ambiguous feature idea into a comprehensive product specification artifact (`.scratch/<feature-slug>/spec.md`).

## Workflow

1. **Initialize Persona**:
   - Define subagent `IdeaRefiner` using `subagents/idea-refiner.md`.
2. **Ingest Idea**:
   - Accept user's raw feature request or problem statement.
3. **Run Discovery Interview**:
   - Engage in structured grilling rounds (max 3-4 questions per round with defaults) to clarify target users, acceptance criteria, non-functional requirements, and out-of-scope boundaries.
4. **Generate Spec Artifact**:
   - Write `.scratch/<feature-slug>/spec.md`.
5. **Human Sign-Off Gate**:
   - Present `spec.md` to user for confirmation before proceeding to Phase 2 (`architecture-design`).
