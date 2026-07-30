import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/car-images': {
        target: 'https://carimages-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/car-images/, ''),
      },
    },
  },
})
