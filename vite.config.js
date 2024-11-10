import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/deloyed-comp1640/login',  // Đảm bảo đây là đường dẫn chính xác của dự án trên GitHub Pages
})
