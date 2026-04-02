# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML website (Danish language) for "bolletrold.dk" — a humorous Danish pastry/buns themed site. No build step or JS framework; just plain HTML, CSS, and vanilla JavaScript served via nginx.

## Development

```bash
# Run locally (serves on http://localhost:8080)
docker-compose -f dev/docker-compose.yml up
```

The dev setup volume-mounts `www/` read-only into nginx:alpine, so file edits are reflected on refresh.

## Deployment

Push to `master` triggers a GitHub Actions workflow (`.github/workflows/docker-publish.yml`) that builds a Docker image and pushes to `ghcr.io/poewa/bolletrold.dk`. Production runs behind Traefik reverse proxy with Cloudflare SSL (configured via labels in `docker-compose.yml`).


## Architecture

All served content lives in `www/`:

- **Pages**: `index.html`, `opskrifter.html`, `galleri.html`, `om-os.html`, `kontakt.html` — each page duplicates the nav/footer markup (no templating).
- **Styling**: Single `style.css` (~637 lines) covering layout, animations, responsive breakpoints (768px, 480px), and Easter theme overrides.
- **Easter theme**: `easter-theme.js` activates in March/April — injects a banner, floating emoji animation, Easter-specific carousel news, and color scheme changes via DOM manipulation.
- **Assets**: `images/` for PNGs, `audio/` for the jingle MP3.

The homepage (`index.html`) has a news carousel with prev/next navigation and rotating subtitle text with fade animation.

## Key Conventions

- All content is in Danish.
- The site's tone is deliberately cheeky/humorous — maintain this voice when editing copy.
- No external JS dependencies or build tools. Keep it zero-dependency.
- Docker images are built with `--no-cache` and `--pull` to prevent stale layers.
