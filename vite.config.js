import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#store': path.resolve(__dirname, './src/store'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 5174,
    strictPort: false,
    host: true,
  },
})
