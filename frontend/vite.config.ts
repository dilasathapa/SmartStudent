import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SmartStudent/',
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'c330-2409-40d2-204d-9081-6d1b-9cf2-9053-305d.ngrok-free.app'
    ]
  }
})
