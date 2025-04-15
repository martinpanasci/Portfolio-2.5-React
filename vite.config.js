import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), sentryVitePlugin({
    org: "yo-wq", // tu organización
    project: "javascript-react", // tu proyecto en Sentry
    authToken: process.env.SENTRY_AUTH_TOKEN,
    include: "./dist", // carpeta de salida del build
    urlPrefix: "~/",   // importante
  }),],

  build: {
    sourcemap: true
  }
})