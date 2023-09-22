import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 3000,
  }
})
