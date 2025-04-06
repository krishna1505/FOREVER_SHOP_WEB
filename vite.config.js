


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Important for phone access
    base: "FOREVER_SHOP_WEB",
    port: 5173,      // Your port
  }
})
