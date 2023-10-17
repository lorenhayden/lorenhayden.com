import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "192.168.1.130",
    port: 8088
  },
  plugins: [react()],
})
