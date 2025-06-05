# Security Portfolio: Azure Cloud Security Journey

> Documenting my transition from traditional penetration testing to Azure cloud security engineering

[![Azure Static Web Apps CI/CD](https://github.com/YOUR_USERNAME/security-portfolio/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg)](https://github.com/YOUR_USERNAME/security-portfolio/actions)

## 🎯 Project Overview

This repository contains my learning portfolio as I study for the AZ-500 (Azure Security Technologies) certification and transition from traditional cybersecurity roles to cloud security engineering. The portfolio itself is built using Azure security best practices and serves as a practical demonstration of skills learned.

**Live Site:** [https://YOUR-SITE.azurestaticapps.net](https://YOUR-SITE.azurestaticapps.net)

## 🏗️ Architecture

- **Frontend:** Azure Static Web Apps
- **Security:** Content Security Policy, security headers, HTTPS enforcement
- **CI/CD:** GitHub Actions with Azure integration
- **Monitoring:** Azure Application Insights (planned)
- **Future:** Azure Functions for dynamic content, Azure Key Vault integration

## 📚 Learning Journey

### Current Focus: AZ-500 Certification Path
- **Week 1:** Azure Fundamentals & Identity Management ✅
- **Week 2:** Network Security & Platform Protection (In Progress)
- **Week 3-12:** Comprehensive security implementations and documentation

### Key Learning Areas
- Azure Identity and Access Management
- Azure network security and monitoring
- Azure security operations and incident response
- Cloud security best practices and frameworks

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/security-portfolio.git
cd security-portfolio

# Open in your preferred editor
code .

# For local testing, you can use any static web server
# Python 3
python -m http.server 8000 --directory src

# Node.js (if you have http-server installed)
npx http-server src -p 8000
```

## 🚀 Deployment

This site deploys automatically to Azure Static Web Apps via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment (if needed)
```bash
# Using Azure CLI
az staticwebapp create \
  --name security-portfolio-site \
  --resource-group rg-security-portfolio \
  --source https://github.com/YOUR_USERNAME/security-portfolio \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --api-location "api" \
  --output-location "src"
```

See [docs/deployment-guide.md](docs/deployment-guide.md) for detailed setup instructions.

## 🔒 Security Features

- **Content Security Policy (CSP)** - Prevents XSS attacks
- **Security Headers** - HSTS, X-Frame-Options, X-Content-Type-Options
- **HTTPS Enforcement** - All traffic encrypted in transit
- **Access Controls** - Repository and Azure resource permissions
- **Automated Security Scanning** - GitHub security features enabled

## 📖 Content Structure

### Blog Posts
Regular documentation of learning progress, challenges, and insights:
- Azure fundamentals and security concepts
- Hands-on lab implementations
- Real-world application of theoretical knowledge
- Certification study progress

### Lab Documentation
Practical implementations and configurations:
- Azure security center setup and tuning
- Network security group configurations
- Identity and access management implementations
- Security monitoring and alerting

### Certification Progress
Structured tracking of AZ-500 study progress:
- Module completion status
- Practice exam results
- Key concepts and practical applications
- Study resources and recommendations

## 🎓 Background

**Current Role:** Vice President, Vulnerability Assessments at Citigroup
**Experience:** 10+ years in cybersecurity, penetration testing, and team leadership
**Certifications:** OSCP, OSCE, OSEP, GXPN, Security+, and others
**Goal:** Transition to cloud security engineering with focus on Azure environments

## 🤝 Professional Context

This portfolio was created to demonstrate my commitment to learning Azure security technologies for cloud security engineering roles. It showcases both technical learning and practical implementation skills relevant to modern cybersecurity positions.

**Target Role Example:** Senior Security Engineer focusing on:
- Microsoft Azure security implementations
- Endpoint protection and monitoring
- Phishing analysis and incident response
- Security architecture and best practices

## 📊 Progress Metrics

- **Blog Posts:** 1+ weekly technical posts
- **Azure Services Implemented:** Growing list of hands-on experience
- **Labs Completed:** Documented practical implementations
- **Certification Progress:** AZ-500 study plan with milestones

## 🔗 Connect

- **LinkedIn:** [Your LinkedIn Profile]
- **GitHub:** [This Repository]
- **Professional Portfolio:** [Live Site URL]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Microsoft Learn for comprehensive Azure training materials
- Azure community for best practices and guidance
- Cybersecurity community for continuous learning inspiration

---

*This portfolio represents an active learning journey and is updated regularly with new content, implementations, and insights.*