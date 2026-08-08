import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function createApiProxy(env: Record<string, string>) {
  return {
    '/api/car-images': {
      target: 'https://carimages-api.onrender.com',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api\/car-images/, ''),
    },
    '/api/motorcycles': {
      target: 'https://api.api-ninjas.com',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api\/motorcycles/, '/v1/motorcycles'),
      configure: (proxy: { on: (event: string, handler: (proxyReq: { setHeader: (name: string, value: string) => void }) => void) => void }) => {
        proxy.on('proxyReq', (proxyReq) => {
          if (env.API_NINJAS_KEY) {
            proxyReq.setHeader('X-Api-Key', env.API_NINJAS_KEY)
          }
        })
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: [react(), tailwindcss()],
    server: {
      proxy: createApiProxy(env),
    },
  }
})
