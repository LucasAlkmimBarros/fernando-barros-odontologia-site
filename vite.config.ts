import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fernando-barros-odontologia-site/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
