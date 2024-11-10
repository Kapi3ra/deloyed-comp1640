import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/deloyed-comp1640/', // Đảm bảo rằng base khớp với URL dự án GitHub Pages của bạn
})
