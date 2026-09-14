---
name: dependency-audit
description: Audits project package dependencies across npm, PyPI/pip, NuGet, Cargo, and Go ecosystems for known security vulnerabilities (SCA).
disable-model-invocation: true
---

# Skill: Dependency Security Audit (SCA)

Perform a comprehensive Software Composition Analysis (SCA) across project package manifests to identify known security vulnerabilities, advisories, and outdated packages.

## Workflow

1. **Initialize Persona**:
   - Define subagent `DependencyAuditor` using `subagents/dependency-auditor.md`.

2. **Detect Package Manifests**:
   - Scan workspace for `package.json`, `requirements.txt`/`pyproject.toml`, `.csproj`/`packages.config`, `Cargo.toml`, `go.mod`.

3. **Run Ecosystem Vulnerability Audits**:
   - **npm / Node.js**: Run `npm audit --json` or query OSV API for `package.json` dependencies.
   - **pip / Python**: Run `pip-audit -f json` or query OSV API for Python dependencies.
   - **NuGet / .NET**: Run `dotnet list package --vulnerable --include-transitive` or check NuGet packages against OSV API.
   - **Cargo / Rust**: Run `cargo audit` or query OSV API for Rust dependencies.
   - **Go**: Run `govulncheck ./...` or query OSV API for Go modules.

4. **Classify & Rank Vulnerabilities**:
   - Group findings by severity (Critical, High, Medium, Low).
   - Resolve minimal fixed versions and generate upgrade instructions.

5. **Generate Dependency Security Report**:
   - Write `.scratch/<feature-slug>/dependency-security-report.md`.
