# ADR-0001: Bundled Package Payload Strategy for NPX Installer

- **Status**: Accepted
- **Date**: 2026-09-13

## Context
When running `npx dev-lifecycle-suite install`, the installer needs access to all 6 skill definition folders (`ideation-discovery`, `architecture-design`, etc.) and subagent templates.

Two options were considered:
1. **Remote Fetching**: Fetching the latest skills from GitHub at runtime via HTTPS requests.
2. **Bundled Package Payload**: Including the `skills/` and `subagents/` directories directly in the npm package payload.

## Decision
We chose **Option 2: Bundled Package Payload**.

The npm package will specify `"files": ["dist", "skills", "subagents", "README.md"]` in `package.json`, ensuring all skills are packaged with the npm release.

## Consequences
- **Pros**:
  - Works offline or behind corporate firewalls.
  - Zero network delay during execution.
  - Guarantees version alignment between CLI and skill files.
- **Cons**:
  - Package size slightly larger (~50KB of markdown text), which is negligible.
