---
name: deployment-ops
description: Phase 5 of dev-lifecycle-suite. Prepares deployment manifests, containerization configs, CI/CD workflows, versioning, and release summary artifacts.
disable-model-invocation: true
---

# Phase 5: Deployment & Operations

Configure release manifests, container images, CI/CD pipelines, and semantic versioning for production deployment.

## Workflow

1. **Initialize Persona**:
   - Define subagent `ReleaseAgent` using `subagents/release-agent.md`.
2. **Release Gate Check**:
   - Verify `audit-report.md` status is PASS.
3. **Configure Build & CI/CD Pipelines**:
   - Generate or update `Dockerfile`, `docker-compose.yml`, and `.github/workflows/deploy.yml` (or `.gitlab-ci.yml`).
4. **Version & Changelog**:
   - Bump semantic version (`VERSION` / `package.json`) and update `CHANGELOG.md`.
5. **Generate Release Summary**:
   - Write `.scratch/<feature-slug>/release-summary.md` and execute pre-flight build checks.
