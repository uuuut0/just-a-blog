import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
    server: {
      host: '0.0.0.0', // 允許從 LAN 或公網訪問
      port: 3000       // 設定伺服器端口，這裡是 3000，可以根據需要更改
    }
  ,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
