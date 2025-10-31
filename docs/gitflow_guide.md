# GitFlow Workflow Guide

## Branch Structure

This project follows **GitFlow** methodology for version control and release management.

### Main Branches

#### 🔵 `main` (Production)

- **Purpose**: Production-ready code only
- **Protection**: Protected branch, requires PR approval
- **Deployment**: Auto-deploys to production (Vercel)
- **Merge from**: `release/*` and `hotfix/*` branches only
- **Never**: Direct commits or develop merges

#### 🟢 `develop` (Integration)

- **Purpose**: Integration branch for features
- **Protection**: Protected branch, requires PR approval
- **Deployment**: Auto-deploys to staging environment
- **Merge from**: `feature/*` branches
- **Merge to**: `release/*` branches
- **Base for**: All feature development

---

## Supporting Branches

### 🌟 Feature Branches (`feature/*`)

**Purpose**: Develop new features for upcoming releases

**Naming convention**:

```
feature/user-authentication
feature/video-conferencing
feature/chat-system
feature/ai-summaries
```

**Workflow**:

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/feature-name

# Work on feature...
git add .
git commit -m "feat: add new feature"

# Keep updated with develop
git checkout develop
git pull origin develop
git checkout feature/feature-name
git merge develop

# Push and create PR to develop
git push -u origin feature/feature-name
```

**Rules**:

- Branch from: `develop`
- Merge to: `develop`
- Naming: `feature/descriptive-name`
- Delete after merge

---

### 🚀 Release Branches (`release/*`)

**Purpose**: Prepare for production release (bug fixes, documentation, version bump)

**Naming convention**:

```
release/1.0.0
release/1.1.0
release/2.0.0
```

**Workflow**:

```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# Update version in package.json
npm version 1.0.0 --no-git-tag-version

# Update CHANGELOG.md
# Fix release bugs only (no new features)

git add .
git commit -m "chore: bump version to 1.0.0"
git push -u origin release/1.0.0

# Merge to main
git checkout main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/1.0.0
git push origin develop

# Delete release branch
git branch -d release/1.0.0
git push origin --delete release/1.0.0
```

**Rules**:

- Branch from: `develop`
- Merge to: `main` AND `develop`
- Naming: `release/x.y.z` (semantic versioning)
- Only bug fixes and release prep
- Delete after merge

---

### 🔥 Hotfix Branches (`hotfix/*`)

**Purpose**: Quick fixes for production bugs

**Naming convention**:

```
hotfix/critical-security-patch
hotfix/login-bug
hotfix/connection-timeout
```

**Workflow**:

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# Fix the bug
git add .
git commit -m "fix: resolve critical bug in production"

# Update version (patch)
npm version patch --no-git-tag-version

git add package.json
git commit -m "chore: bump version to 1.0.1"
git push -u origin hotfix/critical-bug

# Merge to main
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git push origin main --tags

# Merge to develop
git checkout develop
git merge --no-ff hotfix/critical-bug
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-bug
git push origin --delete hotfix/critical-bug
```

**Rules**:

- Branch from: `main`
- Merge to: `main` AND `develop`
- Naming: `hotfix/descriptive-name`
- Urgent fixes only
- Delete after merge

---

## Sprint-based Feature Branches

For Agile sprints, use this structure:

```
feature/sprint1/user-registration
feature/sprint1/user-login
feature/sprint2/meeting-creation
feature/sprint2/video-streaming
feature/sprint3/chat-system
feature/sprint4/ai-summaries
```

---

## Commit Message Convention

Follow **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code formatting
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Tests
- `build`: Build system
- `ci`: CI configuration
- `chore`: Maintenance

### Examples:

```bash
feat(auth): add JWT authentication
fix(meeting): resolve video connection timeout
docs(readme): update installation instructions
style(button): format component code
refactor(api): improve error handling
perf(video): optimize stream quality
test(auth): add login tests
build(deps): upgrade React to 18.2
ci(actions): add deployment workflow
chore(lint): fix eslint warnings
```

---

## Pull Request Workflow

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/my-feature develop
   ```

2. **Develop and Commit**
   - Make changes
   - Write tests
   - Update documentation
   - Commit following conventions

3. **Keep Updated**

   ```bash
   git checkout develop
   git pull
   git checkout feature/my-feature
   git merge develop
   ```

4. **Push and Create PR**

   ```bash
   git push -u origin feature/my-feature
   ```

   - Open PR on GitHub
   - Fill PR template
   - Link related issues
   - Request reviews

5. **Address Review Comments**
   - Make requested changes
   - Push updates
   - Re-request review

6. **Merge**
   - Squash and merge (recommended)
   - Delete branch after merge

---

## Version Numbering (Semantic Versioning)

```
MAJOR.MINOR.PATCH
  1  .  0  .  0
```

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Examples:

- `1.0.0` → `1.0.1`: Bug fix
- `1.0.1` → `1.1.0`: New feature
- `1.1.0` → `2.0.0`: Breaking change

---

## Quick Reference Commands

```bash
# Start new feature
git checkout develop && git pull
git checkout -b feature/my-feature

# Update feature with develop
git checkout develop && git pull
git checkout feature/my-feature && git merge develop

# Finish feature
git checkout develop
git merge --no-ff feature/my-feature
git push origin develop
git branch -d feature/my-feature

# Start release
git checkout develop && git pull
git checkout -b release/1.0.0

# Finish release
git checkout main && git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin main --tags
git checkout develop && git merge --no-ff release/1.0.0
git push origin develop

# Hotfix
git checkout main && git pull
git checkout -b hotfix/critical-fix
# ... fix ...
git checkout main && git merge --no-ff hotfix/critical-fix
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git push origin main --tags
git checkout develop && git merge --no-ff hotfix/critical-fix
git push origin develop
```

---

## Best Practices

✅ **DO:**

- Create feature branches from `develop`
- Use descriptive branch names
- Follow commit conventions
- Write meaningful PR descriptions
- Keep branches up to date with base
- Delete merged branches
- Tag releases on `main`
- Squash commits when merging features

❌ **DON'T:**

- Commit directly to `main` or `develop`
- Create features from `main`
- Mix multiple features in one branch
- Leave stale branches
- Force push to shared branches
- Skip PR reviews
- Merge without CI passing

---

## Current Project Status

- ✅ `main` branch: Initial scaffolding complete
- ✅ `develop` branch: Created and synchronized
- 🚧 Ready for Sprint 1 feature development
- 📋 Next: Create `feature/sprint1/user-authentication`

---

## Team Workflow

1. **Daily**: Pull latest `develop` changes
2. **Feature Start**: Branch from `develop`
3. **Feature End**: PR to `develop`
4. **Sprint End**: Create `release/*` branch
5. **Release**: Merge to `main` and tag
6. **Production Bug**: Create `hotfix/*` from `main`

---

_Last Updated: 2025-10-31_
_GitFlow initialized and ready for development_
