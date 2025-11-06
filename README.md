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

3. Deploy core infrastructure services first:
   - Reverse proxy (Traefik)
   - Container management (Portainer)
   - Authentication (Authelia)
   - Databases (MariaDB, PostgreSQL, Redis)

4. Deploy application stacks via Portainer or Docker Compose

5. Configure DNS records to point service domains to your server IP

## Security

### Features
- Multi-factor authentication via Authelia
- SSL/TLS termination with automatic certificate management
- Intrusion prevention with CrowdSec
- Secure tunnel access via CloudFlared
- Pre-commit hooks to prevent committing secrets

### Pre-commit Hooks

The repository includes security scanning to detect:
- API keys and credentials
- Exposed configuration details
- Potential information disclosure

Enable hooks:
```bash
chmod +x .githooks/pre-commit
git config core.hooksPath .githooks
```

## Monitoring & Backup

- **Uptime Kuma**: Service availability monitoring and alerting
- **Tautulli**: Plex media consumption analytics
- **Restic**: Encrypted backups to multiple destinations
- **Homepage**: Centralized dashboard with service status

## Configuration

Each service directory contains a `docker-compose.yml` file. Services requiring environment variables include `.env.example` files in their respective directories.

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
