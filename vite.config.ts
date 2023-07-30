/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': '/src/features',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@lib': '/src/lib',
      '@service': '/src/service',
      '@data': '/src/data',
    },
  },
});
