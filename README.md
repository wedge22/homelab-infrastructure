# Homelab Infrastructure

> *A homelab infrastructure deployment using Docker Compose and container orchestration*

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/Docker-Compose-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-NAS-orange.svg)](#)
[![Management](https://img.shields.io/badge/Management-Containers-13BEF9.svg)](#)

## 🎯 Overview

This repository provides a homelab infrastructure template featuring a custom dashboard and containerized services. It includes Docker Compose configurations and automation scripts for deploying a complete media automation and monitoring ecosystem.

### ✨ Key Features

- **🎨 Custom Homepage Dashboard** with custom CSS and JavaScript
- **📦 Hybrid Deployment Strategy**: Critical infrastructure and application containers
- **🔒 Security-First Design** with authentication, reverse proxy, and monitoring
- **🎬 Complete Media Automation** with download management and streaming
- **📊 Comprehensive Monitoring** with uptime tracking and analytics
- **🔄 Automated Backup Systems** with multiple destination support
- **🌐 Custom DNS Integration** for internal service resolution

## 🏗️ Architecture

### Infrastructure Overview
```
┌─────────────────────────────────────────────────────────────┐
│                    HOMELAB INFRASTRUCTURE                    │
├─────────────────────────────────────────────────────────────┤
│  🌐 External Access: Reverse Proxy + SSL                   │
│  🔒 Security Layer: Authentication + IPS + DNS Filtering   │
│  📊 Management: Container Orchestration + Dashboard         │
│  🎬 Media Stack: Streaming + Automation + Request Portal   │
│  💾 Data Layer: Databases + Caching + Storage              │
│  🔄 Backup: Multi-destination Encrypted Backups           │
│  🖥️  Base Platform: NAS Server Infrastructure              │
└─────────────────────────────────────────────────────────────┘
```

### Deployment Strategy
- **Core Infrastructure**: Direct platform deployment for stability
- **Applications**: Container orchestration for flexibility
- **Custom Network**: Isolated container networking
- **Internal DNS**: Custom domain resolution for services

## 🚀 Service Categories

### 🎮 Core Infrastructure (Platform Direct)
| Service | Purpose | Access |
|---------|---------|---------|
| **Traefik** | Reverse proxy and SSL termination | Internal |
| **Portainer** | Container management platform | Web Interface |
| **Authelia** | Authentication and authorization | Internal |
| **MariaDB** | Primary database server | Internal |
| **PostgreSQL** | Secondary database server | Internal |
| **Redis** | Session store and caching | Internal |
| **Plex** | Media streaming server | Web Interface |
| **CloudFlared** | Secure tunnel service | Internal |
| **CrowdSec** | Intrusion prevention system | Internal |
| **DockerSocket** | Docker API proxy | Internal |

### 📦 Portainer Stacks
| Stack Name | Services | Description |
|------------|----------|-------------|
| **homepage** | Homepage Dashboard | Custom control center |
| **crafty** | Minecraft Server Manager | Game server automation |
| **overseerr** | Media Request Manager | User-friendly media requests |
| **sabnzbd** | NZB Downloader | Usenet download client |
| **sonarr** | TV Show Manager | Automated TV show acquisition |
| **sonarr-anime** | Anime Manager | Specialized anime automation |
| **radarr** | Movie Manager | Automated movie acquisition |
| **lidarr-portainer** | Music Manager | Music collection automation |
| **nzbhydra2** | NZB Indexer Aggregator | Usenet indexer management |
| **tautulli-portainer** | Plex Analytics | Media consumption statistics |
| **uptime_kuma** | Uptime Monitoring | Service availability tracking |
| **maintainerr-portainer** | Media Cleanup | Automated media management |
| **restic** | Backup Solution | Multi-destination backup system |
| **adminer** | Database Administration | Web-based database management |
| **tailscale** | VPN Mesh Networking | Secure remote access |
| **homeassistant** | Home Automation Hub | Smart home control center |

### 🔒 Security Services
- **Authelia**: Multi-factor authentication and SSO
- **CrowdSec**: Intrusion detection and prevention system
- **CloudFlared**: Secure tunnel for external access  
- **Traefik**: SSL termination with automatic certificates

## 🛠️ Installation & Setup

### Prerequisites
- **NAS Platform** (Unraid, TrueNAS, etc.)
- **Docker** and **Docker Compose**
- **Container Management** (Portainer recommended)
- **Custom Domain** or local DNS setup
- **Reverse Proxy** solution

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/homelab-infrastructure.git
   cd homelab-infrastructure
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your specific values
   ```

3. **Set up security hooks**
   ```bash
   chmod +x .githooks/pre-commit
   git config core.hooksPath .githooks
   ```

4. **Deploy infrastructure services**
   - Reverse proxy (Traefik/Nginx)
   - Container management (Portainer)
   - Authentication system
   - Database services

5. **Deploy application stacks**
   - Import stack configurations
   - Configure environment variables
   - Deploy in dependency order

### Network Configuration

Example Docker network setup:
```bash
docker network create --driver bridge custom-network
```

DNS Configuration:
```
# Add to your DNS server
dashboard.yourdomain.local → [SERVER-IP]
media.yourdomain.local → [SERVER-IP]
requests.yourdomain.local → [SERVER-IP]
```

## 🔐 Security Features

### Multi-layered Security
1. **Network Level**: DNS filtering and intrusion prevention
2. **Application Level**: Multi-factor authentication
3. **Transport Level**: SSL/TLS encryption
4. **Development Level**: Pre-commit security scanning

### Security Scanning
Automated pre-commit hooks scan for:
- Hardcoded secrets and API keys
- Exposed configuration details
- Security misconfigurations
- Potential information disclosure

## 📊 Monitoring & Backup

### Health Monitoring
- **Service Availability**: Uptime monitoring and alerting
- **Usage Analytics**: Media consumption and system metrics
- **Real-time Status**: Dashboard widgets and indicators

### Backup Strategy
- **Encrypted Backups**: Multiple destination support
- **Configuration Management**: Git-based version control
- **Automated Validation**: Regular backup testing

## 🌐 Service Access

Services are accessed through:
- **Internal Dashboard**: Centralized control interface
- **Custom DNS**: Local domain resolution
- **Reverse Proxy**: SSL termination and routing
- **Authentication**: Secure access control

## 📚 Documentation

> 📝 **Coming Soon** - Detailed documentation is currently being developed

- **[Installation Guide](docs/installation.md)** - Complete setup instructions *(Coming Soon)*
- **[Configuration Reference](docs/configuration.md)** - Service configuration details *(Coming Soon)*
- **[Security Guide](docs/security.md)** - Security best practices *(Coming Soon)*
- **[Backup Guide](docs/backup.md)** - Data protection strategies *(Coming Soon)*
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions *(Coming Soon)*

### External Resources
- **[Your NAS Platform Documentation](docs/platform-setup.md)** - Platform-specific guides *(Coming Soon)*
- **[Container Management Docs](docs/container-management.md)** - Orchestration platform documentation *(Coming Soon)*
- **[Reverse Proxy Configuration](docs/reverse-proxy.md)** - SSL and routing setup guides *(Coming Soon)*

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

### Development Guidelines
- Use environment variables for all configuration
- Follow consistent naming conventions
- Test in development environments
- Update documentation for changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LinuxServer Community** - Quality container images
- **Container Management Platforms** - Orchestration solutions
- **Open Source Community** - Ecosystem contributions

## 📞 Support

- **Documentation**: Check the `docs/` directory
- **Issues**: GitHub Issues for bugs and features
- **Discussions**: GitHub Discussions for questions

---

<div align="center">

**Homelab Infrastructure**

*A template for containerized homelab infrastructure*

</div>
