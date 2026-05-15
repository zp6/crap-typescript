# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security bugs seriously. Thank you for improving the security of this project.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via [GitHub Security Advisories](https://github.com/fabian-barney/crap-typescript/security/advisories/new).

You can also email the maintainer directly through their GitHub profile.

### What to Include

- Type of issue (e.g., command injection, path traversal, privilege escalation)
- Full paths of source file(s) related to the issue
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- We will acknowledge receipt within 48 hours
- We will provide an estimated timeline for a fix
- We will notify you when the issue is resolved

## Security Considerations

This package runs subprocesses (npm, pnpm, yarn, git) and reads user-controlled file paths. These represent a non-trivial attack surface for downstream consumers. Please report any issues you find.