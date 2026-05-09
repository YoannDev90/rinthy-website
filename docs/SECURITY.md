# Security Policy

This document outlines the security practices and policies for Rinthy.

---

## Reporting Vulnerabilities

### How to Report a Security Issue

If you discover a security vulnerability in Rinthy, please report it responsibly:

1. **Do NOT** create a public GitHub Issue for security vulnerabilities.
2. Email the maintainer directly at the contact below.
3. Include as much detail as possible:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

**Contact:** [Create a private report via GitHub](https://github.com/imsawiq/Rinthy/security/advisories/new)

### Response Timeline

- We aim to acknowledge reports within **48 hours**.
- We will provide updates on remediation progress within **7 days**.
- Public disclosure will be coordinated after a fix is available.

---

## Authentication & Authorization

### OAuth 2.0 (Recommended)

Rinthy uses **Modrinth's OAuth 2.0** implementation for authentication.

- Rinthy never sees your Modrinth password
- OAuth tokens are stored securely on your device
- Tokens can be revoked at any time via [Modrinth Settings](https://modrinth.com/settings)

### Personal Access Token (PAT)

PATs are an alternativelogin method.

- PATs are stored locally on your device
- Store them securely — never share your PAT
- If compromised, revoke immediately in the [Modrinth Settings](https://modrinth.com/settings/pats)

### Permissions

Rinthy respects Modrinth's role-based permissions:

- **Owner** — Full project control
- **Maintainer** — Edit versions, settings, team
- **Contributor** — Limited access

---

## Data Security

### Data Stored Locally

- Authentication tokens (encrypted locally)
- App preferences
- Cache (can be cleared in Settings)

### Data NOT Stored

Rinthy does **not** store:

- Your Modrinth password
- Payment information (handled by Modrinth)
- Personal data beyond app preferences

---

## Network Security

### HTTPS Only

All API communication between Rinthy and Modrinth uses **HTTPS**.

### No Tracking

Rinthy does **not**:

- Send data to third-party analytics services
- Collect personal information
- Use crash reporting services that transmit sensitive data

---

## Dependencies

### Keeping Updated

Rinthy uses automated dependency updates via GitHub Actions:

- Security patches are applied as soon as available
- We monitor for vulnerabilities in our dependencies
- Update to the latest APK for security fixes

### Known Vulnerabilities

We regularly scan for vulnerabilities using:

- GitHub Dependabot
- npm audit

To report a vulnerability in a dependency, include it in your security report.

---

## Mobile Security Best Practices

### Keep Your Device Secure

- Enable device encryption
- Use a strong PIN or biometric lock
- Keep your Android OS updated

### Install from Trusted Sources

- Only install Rinthy from the [GitHub Releases](https://github.com/imsawiq/Rinthy/releases) page
- Verify the APK signature before installing

---

## Security Hardening

### ProGuard

Release builds use **ProGuard** to:

- Obfuscate code
- Remove debug information
- Optimize performance

### Secure Storage

- Authentication tokens are stored using Android's EncryptedSharedPreferences
- Keys are generated per-device