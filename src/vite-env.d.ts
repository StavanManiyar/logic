/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_ENABLE_ANALYTICS?: string;
  readonly VITE_ENABLE_SOCIAL_LOGIN?: string;
  readonly VITE_GA_TRACKING_ID?: string;
  readonly VITE_HOTJAR_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
