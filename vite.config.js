import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/Github-Pages-Tutorial/',
  server: {
    host: true, // すべてのアドレスからのアクセスを許可
    port: 5173
  }
})
