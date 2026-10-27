import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Vite 내장 tsconfig paths 해석 (vite-tsconfig-paths 플러그인 대체)
  resolve: { tsconfigPaths: true },
});
