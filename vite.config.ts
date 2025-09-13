import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        letswork: 'lets-work.html',
        university: 'university.html',
        cowriter: 'cowriter.html',
        soundkits: 'sound-kits.html',
        contact: 'contact.html',
        admin: 'admin.html'
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});