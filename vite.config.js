import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfoliooo/',   // Add this line, e.g. '/react_portfolio/'
  server: {
    port: 8001,
  },
})
