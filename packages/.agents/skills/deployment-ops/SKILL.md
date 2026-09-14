---
name: deployment-ops
description: Phase 5 of dev-lifecycle-suite. Prepares deployment manifests, containerization configs, static host/CDN setups, CI/CD workflows, versioning, and release summary artifacts across backend and frontend tracks.
disable-model-invocation: true
---

# Phase 5: Deployment & Operations

Configure release manifests, container images, static hosting/CDN setups, CI/CD pipelines, and semantic versioning for production deployment.

## Workflow

1. **Initialize Persona(s) based on `--track`**:
   - For `--track backend`: Define subagent `ReleaseAgent` using `subagents/release-agent.md`.
   - For `--track frontend`: Define subagent `UIFrontendRelease` using `subagents/ui-frontend-release.md`.
   - For `--track fullstack` *(default)*: Initialize both `ReleaseAgent` and `UIFrontendRelease`.
2. **Release Gate Check**:
   - Verify `audit-report.md` status is PASS.
3. **Execute Track-Specific Release Operations**:
   - **Backend Track (`ReleaseAgent`)**:
     - Generate or update `Dockerfile`, `docker-compose.yml`, Kubernetes manifests, and `.github/workflows/deploy-backend.yml`.
     - Output `.scratch/<feature-slug>/release-summary-backend.md`.
   - **Frontend Track (`UIFrontendRelease`)**:
     - Generate static hosting configs (`firebase.json`, `vercel.json`, `netlify.toml`, `_headers`, `_redirects`).
     - Configure SPA rewrite rules, CDN caching headers (`Cache-Control`), SSG/SSR build commands.
     - Generate `.github/workflows/deploy-frontend.yml`.
     - Output `.scratch/<feature-slug>/release-summary-frontend.md`.
4. **Version & Changelog**:
   - Bump semantic version (`package.json` / `VERSION`) and update `CHANGELOG.md`.
5. **Generate Consolidated Release Summary**:
   - Write `.scratch/<feature-slug>/release-summary.md` and execute pre-flight build checks in terminal (`npm run build`, `flutter build web`, etc.).
