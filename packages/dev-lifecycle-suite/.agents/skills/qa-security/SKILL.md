---
name: qa-security
description: Phase 4 of dev-lifecycle-suite. Audits code quality, spec alignment, and security vulnerabilities, generating an audit-report.md artifact.
disable-model-invocation: true
---

# Phase 4: QA & Security Audit

Perform dual-axis code reviews (Standards vs Spec) and security vulnerability auditing on the implementation.

## Workflow

1. **Initialize Personas**:
   - Define subagent `AuditAgent` using `subagents/audit-agent.md`.
   - Define subagent `DependencyAuditor` using `subagents/dependency-auditor.md`.
2. **Review Code Standards**:
   - Audit code formatting, linting rules, error handling, and architecture adherence.
3. **Review Spec Alignment**:
   - Verify every user story and acceptance criterion in `spec.md` is covered by passing tests.
4. **Audit Security & OWASP Top 10**:
   - Check for hardcoded secrets, injection risks, input validation, and memory safety.
5. **Audit Package Dependency Vulnerabilities (SCA)**:
   - Invoke `DependencyAuditor` to scan package manifests (`package.json`, `requirements.txt`, `.csproj`, `Cargo.toml`, `go.mod`) via native audit CLI tools or OSV API.
   - Generate `.scratch/<feature-slug>/dependency-security-report.md`.
6. **Generate Audit Report**:
   - Write `.scratch/<feature-slug>/audit-report.md` combining code quality, OWASP checks, and dependency audit status (`PASS` or `REMEDIATION REQUIRED`).
7. **Human Sign-Off Gate**:
   - Present `audit-report.md` and `dependency-security-report.md` to user before proceeding to Phase 5 (`deployment-ops`).
