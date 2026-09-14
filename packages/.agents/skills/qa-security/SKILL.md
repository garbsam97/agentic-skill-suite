---
name: qa-security
description: Phase 4 of dev-lifecycle-suite. Audits code quality, spec alignment, security vulnerabilities, a11y, Core Web Vitals, and package dependencies across backend and frontend tracks.
disable-model-invocation: true
---

# Phase 4: QA & Security Audit

Perform dual-axis code reviews (Standards vs Spec), security vulnerability auditing, accessibility testing, and package composition analysis (SCA) on the implementation.

## Workflow

1. **Initialize Persona(s) based on `--track`**:
   - For `--track backend`: Define subagent `AuditAgent` using `subagents/audit-agent.md`.
   - For `--track frontend`: Define subagent `UIFrontendAuditor` using `subagents/ui-frontend-auditor.md`.
   - For `--track fullstack` *(default)*: Initialize both `AuditAgent` and `UIFrontendAuditor`.
   - Always initialize subagent `DependencyAuditor` using `subagents/dependency-auditor.md` for SCA.
2. **Execute Track-Specific Quality & Security Audit**:
   - **Backend Audit (`AuditAgent`)**:
     - Review code standards, error handling, DB query performance.
     - Audit OWASP API Top 10 risks (SQLi, Auth, SSRF, broken access control).
     - Verify spec alignment against `spec.md`.
     - Output `.scratch/<feature-slug>/audit-report-backend.md`.
   - **Frontend Audit (`UIFrontendAuditor`)**:
     - Audit WCAG 2.1 AA/AAA accessibility compliance (semantic tags, keyboard nav, ARIA attributes, focus states).
     - Audit Core Web Vitals targets (LCP, CLS, INP).
     - Audit client security (DOM XSS, Content Security Policy headers, secret exposure in client bundle).
     - Check bundle size discipline and tree-shaking efficacy.
     - Output `.scratch/<feature-slug>/audit-report-frontend.md`.
3. **Audit Package Dependency Vulnerabilities (SCA)**:
   - Invoke `DependencyAuditor` to scan package manifests (`package.json`, `requirements.txt`, `.csproj`, `Cargo.toml`, `go.mod`) via native audit CLI tools or OSV API.
   - Generate `.scratch/<feature-slug>/dependency-security-report.md`.
4. **Generate Consolidated Audit Summary**:
   - Combine audit findings into `.scratch/<feature-slug>/audit-report.md` marking status (`PASS`, `WARNING`, or `REMEDIATION REQUIRED`).
5. **Human Sign-Off Gate**:
   - Present `audit-report.md` and `dependency-security-report.md` to user before proceeding to Phase 5 (`deployment-ops`).
