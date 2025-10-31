/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_GITHUB_CLIENT_ID: string
  readonly VITE_AI_SERVICE_URL: string
  readonly VITE_AI_API_KEY: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: string
  readonly VITE_ENABLE_AI_SUMMARIES: string
  readonly VITE_ENABLE_RECORDING: string
  readonly VITE_ENABLE_SCREEN_SHARE: string
  readonly VITE_ANALYTICS_ID: string
  readonly VITE_SENTRY_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
