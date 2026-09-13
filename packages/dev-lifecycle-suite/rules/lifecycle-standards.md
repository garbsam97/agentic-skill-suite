# Dev Lifecycle Standards & Guardrails

The `dev-lifecycle-suite` enforces the following principles across all 5 phases:

1. **Artifact-Driven Handoffs**: Each phase must produce a verifiable Markdown artifact (`spec.md`, `architecture.md`, source code + tests, `audit-report.md`, `release-summary.md`).
2. **Explicit Seams & Deep Modules**: Implementation details must remain hidden behind clean, well-defined module contracts.
3. **No Unverified Declarations**: Agents must execute terminal build/test commands to verify code before marking tasks complete.
4. **Zero Swallowed Exceptions**: Code must handle errors explicitly without masking symptoms or returning silent fallbacks.
5. **Human Checkpoints (HITL Gates)**: Key architectural, spec, and release decisions must be confirmed by the human driver before proceeding.
