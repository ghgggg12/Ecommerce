import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  base: '/Ecommerce/',

  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(import.meta.dirname, './src/shared'),
      '@widgets': path.resolve(import.meta.dirname, './src/widgets'),
      '@App': path.resolve(import.meta.dirname, './src/App'),
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
