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

The core package **`@garbsam97/dev-lifecycle-suite`** provides a structured 5-phase software development lifecycle (SDLC) driven by specialized AI subagent personas:

```
[Phase 1: Ideation & Discovery] ➔ [Phase 2: Architecture & Design] ➔ [Phase 3: Implementation & TDD] ➔ [Phase 4: QA & Security Audit] ➔ [Phase 5: Deployment & Operations]
```

### The 5 Phases & Subagent Personas

| Phase | Skill Command | Subagent Persona | Output Artifact | Description |
| --- | --- | --- | --- | --- |
| **Phase 1** | `/ideation-discovery` | `IdeaRefiner` | `.scratch/<feature>/spec.md` | Refines raw feature ideas into detailed user stories and acceptance criteria via interactive grilling. |
| **Phase 2** | `/architecture-design` | `SystemArchitect` | `architecture.md` & `docs/adr/` | Designs deep module interfaces, domain models, and records hard trade-offs in ADRs. |
| **Phase 3** | `/implementation-tdd` | `BuilderAgent` | Source Code & Tests | Executes a strict Red-Green-Refactor TDD cycle with automated CLI test verification. |
| **Phase 4** | `/qa-security` | `AuditAgent` | `audit-report.md` | Dual-axis code review (Standards vs Spec) and OWASP security vulnerability scanning. |
| **Phase 5** | `/deployment-ops` | `ReleaseAgent` | Dockerfile, CI/CD, `release-summary.md` | Prepares container manifests, GitHub/GitLab CI workflows, versioning, and release summaries. |

---

## 🎮 Master Pipeline Execution

Run the entire 5-phase pipeline sequentially with interactive human sign-off gates at each milestone:

```text
/garbsamu-pipeline <your feature idea>
```

### Human Approval Gates (HITL)
- 🚧 **Gate 1**: Product Specification Approval (`spec.md`).
- 🚧 **Gate 2**: Technical Architecture & ADR Approval (`architecture.md`).
- 🚧 **Gate 3**: Security & Quality Audit Sign-off (`audit-report.md`).

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
