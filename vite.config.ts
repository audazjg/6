import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});