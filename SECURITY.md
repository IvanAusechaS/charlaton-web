# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Charlatón seriously. If you believe you have found a security vulnerability, please report it to us responsibly.

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:
- **Email**: security@charlaton.com
- **Subject**: [SECURITY] Brief description of the issue

### What to Include

Please include the following information in your report:

1. **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
2. **Full paths of source file(s)** related to the manifestation of the issue
3. **Location of the affected source code** (tag/branch/commit or direct URL)
4. **Step-by-step instructions** to reproduce the issue
5. **Proof-of-concept or exploit code** (if possible)
6. **Impact of the issue**, including how an attacker might exploit it

### What to Expect

After you submit a report, you can expect:

1. **Acknowledgment** within 48 hours
2. **Assessment** within 7 days with an initial evaluation
3. **Status updates** every 7 days on our progress
4. **Resolution timeline** once we've assessed the severity

### Disclosure Policy

- We will coordinate with you on the disclosure timeline
- We aim to patch critical vulnerabilities within 30 days
- We will credit you in the security advisory (if you wish)
- We request that you give us reasonable time to fix the issue before public disclosure

## Security Best Practices

When using Charlatón, we recommend:

1. **Environment Variables**: Never commit `.env` files with real credentials
2. **Authentication**: Use strong passwords and enable 2FA when available
3. **Updates**: Keep the application and dependencies up to date
4. **HTTPS**: Always use HTTPS in production
5. **API Keys**: Rotate API keys regularly and never expose them publicly

## Known Security Features

- JWT-based authentication with secure token storage
- HTTPS enforcement in production
- Input validation and sanitization
- CORS configuration
- Content Security Policy (CSP)
- Rate limiting on API endpoints

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2). We recommend:

- Enable GitHub security alerts for this repository
- Subscribe to release notifications
- Review changelog for security-related updates

## Hall of Fame

We would like to thank the following individuals for responsibly disclosing security issues:

- *No reports yet*

---

Thank you for helping keep Charlatón and its users safe!
