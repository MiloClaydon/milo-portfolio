import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.split(/node_modules[/\\]/);
            if (parts.length > 1) {
              return parts[1].split(/[/\\]/)[0];
            }
          }
        },
      },
    },
  },
})
