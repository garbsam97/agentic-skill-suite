# Dev Lifecycle Standards & Guardrails

The `dev-lifecycle-suite` enforces the following core principles across all 5 phases:

1. **Artifact-Driven Handoffs**: Each phase must produce a verifiable Markdown artifact (`spec.md`, `architecture-backend.md` / `architecture-frontend.md`, source code + tests, `audit-report.md`, `release-summary.md`).
2. **Explicit Track Branching**: Workflows cleanly separate Backend development (`SystemArchitect`, `BuilderAgent`, `AuditAgent`, `ReleaseAgent`) from Frontend development (`UIFrontendArchitect`, `UIFrontendBuilder`, `UIFrontendAuditor`, `UIFrontendRelease`).
3. **Explicit Seams & Deep Modules**: Backend implementation details must remain hidden behind clean, well-defined API contracts; Frontend components must present lean, decoupled props/slots interfaces.
4. **Domain Quality & Security**:
   - **Backend**: OWASP API Top 10 security compliance, explicit exception handling, DB migration safety.
   - **Frontend**: WCAG 2.1 AA/AAA accessibility (a11y), Core Web Vitals targets (LCP, CLS, INP), DOM XSS / CSP security, bundle size discipline.
5. **No Unverified Declarations**: Agents must execute terminal build/test commands to verify code before marking tasks complete.
6. **Zero Swallowed Exceptions**: Code must handle errors explicitly without masking symptoms or returning silent fallbacks.
7. **Human Checkpoints (HITL Gates)**: Key architectural, spec, and release decisions must be confirmed by the human driver before proceeding.
