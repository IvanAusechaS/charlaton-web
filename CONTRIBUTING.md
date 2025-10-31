# Contributing to Charlatón

First off, thank you for considering contributing to Charlatón! It's people like you that make Charlatón such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [TypeScript Style Guide](#typescript-style-guide)
  - [Documentation Style Guide](#documentation-style-guide)
- [Additional Notes](#additional-notes)

## Code of Conduct

This project and everyone participating in it is governed by the [Charlatón Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to conduct@charlaton.com.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a branch for your changes: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests and linting: `npm run lint && npm run build`
7. Commit your changes using conventional commits
8. Push to your fork
9. Submit a pull request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- Use the bug report template
- Provide a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed and what behavior you expected
- Include screenshots if applicable
- Include your environment details (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use the feature request template
- Provide a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this enhancement would be useful
- List any alternative solutions you've considered
- Include mockups or examples if applicable

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Issues that need assistance

### Pull Requests

1. Fill in the pull request template
2. Link the related issue(s)
3. Include screenshots/videos for UI changes
4. Ensure all checks pass (CI, linting, build)
5. Update documentation as needed
6. Follow the code style guidelines

## Style Guides

### Git Commit Messages

We use Conventional Commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semi-colons, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `build`: Changes to build system
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files

**Examples:**
```bash
feat(auth): add password reset functionality
fix(meeting): resolve connection timeout issue
docs(readme): update installation steps
```

### TypeScript Style Guide

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Add JSDoc comments for exported functions
- Use meaningful variable and function names
- Prefer `const` over `let`, avoid `var`
- Use interface over type when possible
- Export types and interfaces

**Example:**
```typescript
/**
 * Authenticates a user with email and password
 * @param {AuthCredentials} credentials - User login credentials
 * @returns {Promise<User>} Authenticated user data
 */
export const login = async (credentials: AuthCredentials): Promise<User> => {
  // Implementation
}
```

### Documentation Style Guide

- Use Markdown for documentation
- Include code examples where applicable
- Keep line length to 90 characters
- Use proper headings hierarchy
- Include a table of contents for long documents

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - This will not be worked on

Thank you for contributing! 🎉
