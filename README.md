# Charlatón - Professional Video Conferencing Platform

<div align="center">

![Charlatón Logo](public/vite.svg)

**A modern, accessible, and AI-enhanced web video conferencing platform**

[![CI](https://github.com/IvanAusechaS/charlaton-web/actions/workflows/ci.yml/badge.svg)](https://github.com/IvanAusechaS/charlaton-web/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [CI/CD Pipeline](#cicd-pipeline)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

**Charlatón** is a professional web-based video conferencing platform designed to deliver seamless communication experiences for teams and individuals. Built with modern web technologies, it focuses on three core pillars:

- **Usability**: Intuitive interface with minimal learning curve
- **Accessibility**: WCAG 2.1 AA compliant for inclusive communication
- **Intelligence**: AI-driven meeting summaries and insights

Similar to Google Meet but with enhanced accessibility features and integrated AI capabilities for post-meeting analysis.

---

## ✨ Features

### Sprint 1: Foundation & Authentication
- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ Password reset functionality
- ✅ User profile management
- ✅ Protected routes and authorization

### Sprint 2: Core Video Conferencing
- 🎥 Real-time video and audio streaming (WebRTC)
- 📅 Meeting creation and scheduling
- 🔗 Shareable meeting links
- 👥 Participant management
- 🖥️ Screen sharing capabilities

### Sprint 3: Enhanced Communication
- 💬 Real-time chat messaging
- 🎤 Microphone mute/unmute controls
- 📹 Camera on/off controls
- 📼 Meeting recording
- 😊 Emoji reactions

### Sprint 4: AI Integration
- 🤖 AI-generated meeting summaries
- 📝 Automatic transcription
- 🎯 Key points extraction
- ✅ Action items identification
- 📤 Export summaries (PDF, Markdown)

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite.js (Fast HMR and optimized builds)
- **Styling**: SASS/SCSS with CSS Modules
- **Routing**: React Router v6
- **State Management**: React Context API + Custom Hooks

### Real-time Communication
- **WebRTC**: Peer-to-peer video/audio
- **WebSocket**: Real-time messaging (Socket.io)
- **MediaStream API**: Camera and microphone access

### API Integration
- **HTTP Client**: Native Fetch API
- **Methods**: GET, POST, PUT, DELETE
- **Authentication**: JWT Bearer tokens

### Development Tools
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Conventional Commits
- **CI/CD**: GitHub Actions

### Hosting & Deployment
- **Frontend**: Vercel
- **Environment**: Node.js 18+
- **Package Manager**: npm

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Git**: Latest version

Check versions:
```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IvanAusechaS/charlaton-web.git
   cd charlaton-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Husky (Git hooks)**
   ```bash
   npm run prepare
   ```

### Environment Setup

1. **Create environment file**
   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables**
   
   Edit `.env` with your configuration:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_WS_URL=ws://localhost:5000
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_AI_SERVICE_URL=https://api.openai.com
   VITE_AI_API_KEY=your_openai_api_key
   ```

   > **Note**: Never commit `.env` files with real credentials to version control.

### Running the Application

#### Development Mode
```bash
npm run dev
```
Opens at `http://localhost:3000` with hot module replacement.

#### Production Build
```bash
npm run build
```
Generates optimized production build in `dist/` directory.

#### Preview Production Build
```bash
npm run preview
```

#### Linting
```bash
npm run lint          # Check for errors
npm run lint:fix      # Auto-fix errors
```

#### Formatting
```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

---

## 📁 Project Structure

```
charlaton-web/
├── .github/                  # GitHub configuration
│   ├── workflows/           # CI/CD workflows
│   │   ├── ci.yml          # Build and test pipeline
│   │   └── lint.yml        # Linting pipeline
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── user_story.md
│   ├── CODEOWNERS          # Code ownership rules
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/                    # Project documentation
│   ├── product_vision.md
│   ├── backlog.md
│   ├── team_roles.md
│   ├── tools_stack.md
│   └── user_manual.md
├── public/                  # Static assets
│   └── vite.svg
├── src/                     # Source code
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # React components
│   │   └── Button/
│   ├── context/            # React Context providers
│   │   └── AuthContext.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useAsync.ts
│   │   └── useMediaDevices.ts
│   ├── pages/              # Page components
│   │   └── HomePage.tsx
│   ├── services/           # API services
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   └── meeting.service.ts
│   ├── styles/             # Global styles
│   │   ├── variables.scss
│   │   ├── index.scss
│   │   └── App.scss
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .commitlintrc.json      # Commitlint configuration
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## 💻 Development Workflow

### Branching Strategy

We follow **GitHub Flow**:

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### Commit Convention

We use **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test additions or changes
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Maintenance tasks

**Examples**:
```bash
feat(auth): add login functionality
fix(meeting): resolve video stream connection issue
docs(readme): update installation instructions
```

### Code Quality Checks

Before every commit, the following checks run automatically via Husky:

1. **Lint-staged**: Lints and formats staged files
2. **Commitlint**: Validates commit message format

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

#### CI Workflow (`ci.yml`)
Runs on push/PR to `main` or `develop`:
- ✅ Install dependencies
- ✅ Run ESLint
- ✅ Check code formatting
- ✅ TypeScript type checking
- ✅ Build production bundle
- ✅ Upload build artifacts

#### Lint Workflow (`lint.yml`)
Runs on pull requests:
- ✅ ESLint validation
- ✅ Prettier formatting check
- ✅ Commit message validation

### Deployment

**Vercel Deployment** (Automatic):
- `main` branch → Production
- `develop` branch → Preview
- Feature branches → Preview deployments

---

## 📚 Documentation

Comprehensive documentation available in the `/docs` directory:

- **[Product Vision](docs/product_vision.md)** - Project goals and vision
- **[Product Backlog](docs/backlog.md)** - Sprint planning and user stories
- **[Team Roles](docs/team_roles.md)** - Team structure and responsibilities
- **[Technology Stack](docs/tools_stack.md)** - Detailed tech stack documentation
- **[User Manual](docs/user_manual.md)** - End-user documentation

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow code style guidelines
   - Add tests if applicable
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Use the PR template
   - Link related issues
   - Ensure all checks pass

### Development Guidelines

- Write clean, maintainable code
- Follow TypeScript best practices
- Add JSDoc comments for functions
- Ensure accessibility (WCAG 2.1 AA)
- Write meaningful commit messages
- Update documentation when needed

---

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Project Maintainer**: Ivan Ausecha

- GitHub: [@IvanAusechaS](https://github.com/IvanAusechaS)
- Email: ivan.ausecha@example.com
- Project Link: [https://github.com/IvanAusechaS/charlaton-web](https://github.com/IvanAusechaS/charlaton-web)

---

## 🙏 Acknowledgments

- Inspired by Google Meet and Zoom
- Built with modern web technologies
- Focused on accessibility and AI integration

---

<div align="center">

**Made with ❤️ by the Charlatón Team**

⭐ Star this repo if you find it useful!

</div>
Charlatón is an enterprise web conferencing platform with AI-powered meeting analysis.
