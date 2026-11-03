---
name: GitHub preservation
description: Owner's source-of-truth rule for integrating handbook changes with separately maintained GitHub work
---

Treat the current Aptimatic GitHub version as the authoritative project baseline. The whitepaper download flow is a new feature to add to that version, not a replacement for it. Any synchronization must preserve what currently works on GitHub.

**Why:** The owner explicitly required this after maintaining additional site work directly in GitHub while handbook work continued in the workspace. A workspace-only upload can omit newer pages and homepage links.

**How to apply:** Fetch and compare both histories before integrating. Base integration on the latest GitHub version, retain remote-only pages and changes, and review a feature-only diff before pushing. Never force-push or replace GitHub's main branch with a workspace snapshot. Keep remote synchronization separate from publishing approval.
