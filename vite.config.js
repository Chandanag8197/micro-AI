import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   historyApiFallback: true
  // }
  server: {
    host: true, // 👈 this exposes to your local network
    port: 5173
  }
})
