---
"@techtrain/terminal-design-tokens": patch
---

chore: improve build process
- Add `prepublishOnly` script while preserving `prepare` for backwards compatibility
- Add explicit build step in GitHub Actions workflow with optimized caching
- Set production environment for builds