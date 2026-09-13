---
name: qa-security
description: Phase 4 of dev-lifecycle-suite. Audits code quality, spec alignment, and security vulnerabilities, generating an audit-report.md artifact.
disable-model-invocation: true
---

# Phase 4: QA & Security Audit

Perform dual-axis code reviews (Standards vs Spec) and security vulnerability auditing on the implementation.

## Workflow

1. **Initialize Persona**:
   - Define subagent `AuditAgent` using `subagents/audit-agent.md`.
2. **Review Code Standards**:
   - Audit code formatting, linting rules, error handling, and architecture adherence.
3. **Review Spec Alignment**:
   - Verify every user story and acceptance criterion in `spec.md` is covered by passing tests.
4. **Audit Security & OWASP Top 10**:
   - Check for hardcoded secrets, injection risks, input validation, and memory safety.
5. **Generate Audit Report**:
   - Write `.scratch/<feature-slug>/audit-report.md` with PASS or REMEDIATION status.
6. **Human Sign-Off Gate**:
   - Present `audit-report.md` to user before proceeding to Phase 5 (`deployment-ops`).
