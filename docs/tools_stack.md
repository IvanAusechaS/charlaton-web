# Technology Stack

## Project: Charlatón

### Frontend Architecture

#### Core Framework
- **Vite.js** - Fast build tool and dev server
- **React 18** - Component-based UI library
- **TypeScript** - Static type checking
- **React Router** - Client-side routing

#### Styling
- **SASS/SCSS** - CSS preprocessor
- **CSS Modules** - Component-scoped styling
- **Responsive Design** - Mobile-first approach

#### State Management
- **React Context API** - Global state management
- **Custom Hooks** - Reusable stateful logic

#### Real-time Communication
- **WebRTC** - Peer-to-peer video/audio
- **Socket.io** - Real-time bidirectional communication
- **MediaStream API** - Camera and microphone access

---

### Backend Services (API)

#### Server
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend code

#### Database
- **PostgreSQL** - Relational database
- **Prisma/TypeORM** - ORM layer
- **Redis** - Caching and session storage

#### Authentication
- **JWT** - JSON Web Tokens
- **bcrypt** - Password hashing
- **OAuth 2.0** - Third-party authentication (Google, GitHub)

#### Real-time Services
- **Socket.io** - WebSocket server
- **WebRTC Signaling** - Peer connection negotiation

---

### AI/ML Services

#### Meeting Analysis
- **OpenAI GPT-4** - Meeting summarization
- **Whisper API** - Speech-to-text transcription
- **Natural Language Processing** - Key points extraction

#### Integration
- **REST APIs** - AI service communication
- **Streaming responses** - Real-time transcription

---

### DevOps & Infrastructure

#### Hosting
- **Vercel** - Frontend hosting and deployment
- **Vercel Serverless Functions** - Backend APIs (optional)
- **AWS/GCP** - Backend hosting (alternative)

#### CI/CD
- **GitHub Actions** - Automated workflows
- **ESLint + Prettier** - Code quality checks
- **Husky** - Git hooks for pre-commit validation
- **Conventional Commits** - Commit message standards

#### Monitoring & Logging
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking
- **LogRocket** - Session replay (optional)

---

### Development Tools

#### Code Quality
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript Compiler** - Type checking
- **Stylelint** - SCSS linting

#### Testing
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress/Playwright** - E2E testing
- **MSW** - API mocking

#### Version Control
- **Git** - Version control system
- **GitHub** - Code hosting and collaboration
- **GitHub Flow** - Branching strategy

---

### Package Management
- **npm** - Node package manager
- **package.json** - Dependency management
- **Lockfile** - Deterministic installs

---

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

### Accessibility
- **WCAG 2.1 AA** - Compliance target
- **axe-core** - Accessibility testing
- **ARIA** - Semantic HTML attributes
- **Keyboard navigation** - Full keyboard support

---

### Security
- **HTTPS** - Encrypted communication
- **CORS** - Cross-origin resource sharing
- **CSP** - Content Security Policy
- **Rate Limiting** - API protection
- **Input Validation** - XSS/Injection prevention

---

### Environment Variables
```
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_WS_URL=ws://localhost:5000
VITE_AI_SERVICE_URL=https://api.openai.com
```

---
*Last updated: 2025-10-31*
