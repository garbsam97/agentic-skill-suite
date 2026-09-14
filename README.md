# Toolkit Suite

> A modern collection of AI agentic skills, subagent prompt templates, and software development lifecycle tools designed for Google Antigravity (AGY) and LLM-powered pair programming.

[![npm version](https://img.shields.io/npm/v/@garbsam97/dev-lifecycle-suite.svg)](https://www.npmjs.com/package/@garbsam97/dev-lifecycle-suite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🚀 Quickstart: Install via NPX

Install the full agentic development suite into any project with a single command:

```bash
npx @garbsam97/dev-lifecycle-suite install
```

Or install it globally to your user profile (`~/.gemini/antigravity/skills/`):

```bash
npx @garbsam97/dev-lifecycle-suite install --global
```

---

## 🛠️ Dev Lifecycle Suite (`garbsamu-suite`)

The core package **`@garbsam97/dev-lifecycle-suite`** provides a structured 5-phase software development lifecycle (SDLC) driven by specialized AI subagent personas, with continuous **Soft QA & Scope Alignment** and **Software Composition Analysis (SCA)**:

```
[Phase 1: Ideation & Discovery (Soft QA)] ➔ [Phase 2: Architecture & Design (Soft QA)] ➔ [Phase 3: Implementation & TDD (Soft QA)] ➔ [Phase 4: QA, Security Audit & SCA] ➔ [Phase 5: Deployment & Operations]
```

### The 5 Phases & Subagent Personas

| Phase | Skill Command | Subagent Persona | Output Artifact | Description |
| --- | --- | --- | --- | --- |
| **Phase 1** | `/ideation-discovery` | `IdeaRefiner` | `.scratch/<feature>/spec.md` | Refines raw feature ideas into detailed user stories and acceptance criteria via interactive grilling & Soft QA scope probing. |
| **Phase 2** | `/architecture-design` | `SystemArchitect` | `architecture.md` & `docs/adr/` | Designs deep module interfaces, domain models, and evaluates trade-offs in ADRs with Soft QA architectural review. |
| **Phase 3** | `/implementation-tdd` | `BuilderAgent` | Source Code & Tests | Executes a strict Red-Green-Refactor TDD cycle with Red-phase Soft QA test plan checks and CLI test verification. |
| **Phase 4** | `/qa-security` | `AuditAgent` & `DependencyAuditor` | `audit-report.md` & `dependency-security-report.md` | Dual-axis code review (Standards vs Spec), OWASP security auditing, and multi-ecosystem package vulnerability scanning (SCA). |
| **Phase 5** | `/deployment-ops` | `ReleaseAgent` | Dockerfile, CI/CD, `release-summary.md` | Prepares container manifests, GitHub/GitLab CI workflows, versioning, and release summaries. |
| **Standalone** | `/dependency-audit` | `DependencyAuditor` | `dependency-security-report.md` | Dedicated Software Composition Analysis (SCA) for npm, PyPI/pip, NuGet, Cargo, and Go package manifests via native audit tools or OSV API. |

---

## 🔍 Soft QA & Scope Alignment

To prevent scope creep and ensure 1:1 alignment with user intent, the suite incorporates interactive **Soft QA pauses** in the first 3 phases:

1. **Phase 1 Soft QA (Scope Probing)**: `IdeaRefiner` challenges vague requirements, identifies risky edge cases, and pauses interactively to confirm explicit *Out-of-Scope* exclusions with the user.
2. **Phase 2 Soft QA (Architecture Review)**: `SystemArchitect` presents hard architectural trade-offs (Option A vs Option B) and interface complexity, pausing interactively for user confirmation before freezing `architecture.md`.
3. **Phase 3 Soft QA (Red-Phase Test Plan Check)**: `BuilderAgent` pauses after writing failing test specifications (RED phase) to confirm test scenarios reflect exact user requirements before writing production code.

---

## 🛡️ Dependency Vulnerability Auditing (SCA)

Subagent `DependencyAuditor` automatically inspects workspace package manifests across ecosystems:
- **Node.js / JS**: `package.json`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
- **Python**: `requirements.txt`, `pyproject.toml`, `Pipfile.lock`, `poetry.lock`
- **.NET / C#**: `.csproj`, `packages.config`, `Directory.Packages.props`
- **Rust**: `Cargo.toml`, `Cargo.lock`
- **Go**: `go.mod`, `go.sum`

Utilizes native tools (`npm audit`, `pip-audit`, `dotnet list package --vulnerable`, `cargo audit`, `govulncheck`) or fallback queries to [OSV.dev API](https://osv.dev) to generate copy-pasteable remediation upgrade commands.

---

## 🎮 Master Pipeline Execution

Run the entire 5-phase pipeline sequentially with interactive human sign-off gates at each milestone:

```text
/garbsamu-pipeline <your feature idea>
```

### Human Approval Gates (HITL)
- 🚧 **Gate 1**: Product Specification & Scope Boundary Approval (`spec.md`).
- 🚧 **Gate 2**: Technical Architecture & ADR Approval (`architecture.md`).
- 🚧 **Gate 3**: Code Quality, Security & Dependency Audit Sign-off (`audit-report.md` & `dependency-security-report.md`).

---

## 📂 Repository Structure

```
toolkit-suite/
├── AGENTS.md                                # Root Agent skill configuration & index
├── packages/
│   └── dev-lifecycle-suite/                # Standalone NPX installer CLI & skill package
│       ├── package.json                    # @garbsam97/dev-lifecycle-suite configuration
│       ├── dist/                           # Compiled zero-dependency CLI binaries
│       ├── skills/                         # Standalone AGY skill definitions
│       └── subagents/                      # Declarative system prompt templates
├── docs/
│   ├── agents/                             # Agent domain docs, issue tracker, triage labels
│   └── adr/                                # Architectural Decision Records
└── .agents/
    └── skills/                             # Installed active agent skills
```

---

## 📖 Publishing & Development Guide

### Local Skill Installation (PowerShell / Bash)
```powershell
# Windows PowerShell
.\packages\dev-lifecycle-suite\scripts\install-suite.ps1
```

```bash
# Linux / macOS
./packages/dev-lifecycle-suite/scripts/install-suite.sh
```

### Publishing to NPM
```bash
cd packages/dev-lifecycle-suite
npm login
npm publish --access public
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
