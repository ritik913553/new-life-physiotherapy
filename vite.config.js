
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 3000,
  },
  plugins: [react(), tailwindcss()],
})

