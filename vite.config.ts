import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function createApiProxy() {
  return {
    '/api/car-images': {
      target: 'https://carimages-api.onrender.com',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api\/car-images/, ''),
    },
  }
}

export default defineConfig({
  base: '/Ridepedia/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: createApiProxy(),
  },
})
