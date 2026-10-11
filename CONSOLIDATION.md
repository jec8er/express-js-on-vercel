# Consolidated into SaborClick Studio

The active application is [jec8er/SAlesC](https://github.com/jec8er/SAlesC). Commerce, SoundForge content tools and revenue tracking share a standalone Express API with SQLite persistence and owner-password sessions.

The original Express prototype is preserved here and under `legacy/express/` in the canonical repository. New development belongs in `SAlesC/server/` and `SAlesC/src/`.

The project no longer depends on Sites, Cloudflare bindings or ChatGPT authentication. Follow the canonical README for local startup and optional server deployment. GitHub stores and validates the code; no new external server is provisioned automatically.
