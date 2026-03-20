# Homelab Infrastructure

Docker Compose configurations for a self-hosted homelab infrastructure with media automation, monitoring, and security services.

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](LICENSE)

## Overview

This repository contains Docker Compose configurations for deploying containerized services on a homelab server. Services are organized into core infrastructure (deployed directly on the platform) and application stacks (managed via Portainer).

### Features

- Custom homepage dashboard with CSS and JavaScript customization
- Media automation stack (Sonarr, Radarr, Lidarr, SABnzbd)
- Request management via Overseerr
- Uptime monitoring and analytics
- Automated backups with Restic
- Multi-factor authentication with Authelia
- Intrusion prevention with CrowdSec

## Architecture

**Deployment Strategy:**
- Core infrastructure services deployed directly on NAS platform
- Application services deployed as Portainer stacks
- Services communicate over isolated Docker networks
- Access controlled via reverse proxy and authentication

**Access Patterns:**

Services use one of three access strategies depending on their exposure requirements:

- **Traefik reverse proxy** — the default path for most application stacks. Services expose ports via Traefik labels and are accessible through subdomains with SSL termination and Authelia authentication.
- **Tailscale sidecar** — used for services that should be accessible only over the Tailscale mesh network without being exposed through the reverse proxy (e.g. Immich, Audiobookshelf, Stirling PDF). Each service runs a dedicated Tailscale container and shares its network namespace (`network_mode: service:tailscale`), giving it its own Tailscale hostname and ACL identity. These services set `traefik.enable=false`.
- **Standalone Tailscale** — a host-mode Tailscale container that advertises the local subnet (`192.168.10.0/24`), providing full LAN access over the mesh for clients on the tailnet.

> **Note:** Core infrastructure compose files (Traefik, Portainer, Authelia, databases) are managed directly on the NAS platform and are not stored in this repository. Only application stack compose files are tracked here.

## Services

### Core Infrastructure
| Service | Purpose |
|---------|---------|
| Traefik | Reverse proxy and SSL termination |
| Portainer | Container management |
| Authelia | Multi-factor authentication and SSO |
| MariaDB | Primary database |
| PostgreSQL | Secondary database |
| Redis | Session store and caching |
| Plex | Media streaming |
| CloudFlared | Secure tunnel service |
| CrowdSec | Intrusion prevention |
| DockerSocket | Docker API proxy |

### Application Stacks
| Service | Purpose |
|---------|---------|
| Homepage | Custom dashboard |
| Overseerr | Media request management |
| SABnzbd | Usenet download client |
| Sonarr | TV show automation |
| Sonarr-Anime | Anime automation |
| Radarr | Movie automation |
| Lidarr | Music automation |
| NZBHydra2 | Usenet indexer aggregator |
| Tautulli | Plex analytics |
| Uptime Kuma | Service monitoring |
| Maintainerr | Media library cleanup |
| Restic | Encrypted backups |
| Adminer | Database administration |
| Tailscale | VPN mesh networking |
| Home Assistant | Home automation |
| Crafty | Minecraft server manager |
| Valheim Server | Valheim dedicated game server |
| Immich | Self-hosted photo and video backup |
| Audiobookshelf | Audiobook and podcast server |
| Stirling PDF | PDF manipulation and conversion |
| EmulatorJS | Browser-based retro game emulator |
| n8n | Workflow automation |
| DuckDNS | Dynamic DNS updater |
| Diun | Docker image update notifier |
| SpiderFoot | OSINT reconnaissance tool |
| SC4S | Splunk Connect for Syslog — centralised log collection |
| MCPO Splunk | MCP-over-HTTP proxy for Splunk |

## Installation

### Prerequisites
- NAS platform (Unraid, TrueNAS, etc.) or Linux server
- Docker and Docker Compose
- Portainer (recommended for stack management)
- Custom domain or local DNS

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/homelab-infrastructure.git
   cd homelab-infrastructure
   ```

2. Configure environment variables for each service (see `.env.example` files)

3. Ensure core infrastructure services are running on your NAS platform (Traefik, Portainer, Authelia, databases) — these are managed outside this repository

4. Deploy application stacks via Portainer or Docker Compose

5. Configure DNS records to point service domains to your server IP

## Security

### Features
- Multi-factor authentication via Authelia
- SSL/TLS termination with automatic certificate management
- Intrusion prevention with CrowdSec
- Secure tunnel access via CloudFlared
## Monitoring & Backup

- **Uptime Kuma**: Service availability monitoring and alerting
- **Tautulli**: Plex media consumption analytics
- **Diun**: Monitors Docker images for updates and sends notifications when new versions are available
- **SC4S (Splunk Connect for Syslog)**: Centralised syslog collection pipeline. Runs on a static IP (`172.22.0.2`) on a dedicated Docker network and forwards logs to Splunk via HEC. Services that support syslog logging (e.g. DuckDNS, EmulatorJS) are configured to ship logs to this endpoint.
- **Restic**: Encrypted backups to multiple destinations
- **Homepage**: Centralized dashboard with service status

## Configuration

Each service directory contains a `docker-compose.yml` file. Services use environment variable substitution (`${VAR}`) for sensitive values such as API keys, passwords, and host paths. These are sourced from a `.env` file in each service directory. The `homepage` service includes a `.env.example` as a reference; for other services, the required variables are documented inline within each `docker-compose.yml`.

### Homepage Dashboard

The homepage service includes example configuration files:
- `settings.example.yml` - Dashboard settings
- `services.example.yml` - Service definitions
- `widgets.example.yml` - Dashboard widgets
- `custom.example.css` - Custom styling
- `custom.example.js` - Custom JavaScript

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

Guidelines:
- Use environment variables for sensitive configuration
- Test changes in a development environment
- Follow existing naming conventions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
