# Standalone SaborClick Studio

The independent application is ready on [SAlesC/github-runtime](https://github.com/jec8er/SAlesC/tree/github-runtime), with integration into main proposed in [PR #2](https://github.com/jec8er/SAlesC/pull/2).

Commerce, SoundForge content tools and revenue tracking share an Express API with SQLite persistence and owner-password sessions. Development belongs in that branch's `server/` and `src/` directories. The original Express prototype remains preserved here and in `legacy/express/`.

The standalone branch requires no Sites, Cloudflare or ChatGPT authentication. Follow its README for startup. Main still contains the earlier implementation until PR #2 is integrated. GitHub stores and validates code; no new external server has been provisioned.
