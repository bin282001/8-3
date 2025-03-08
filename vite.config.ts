import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: "0.0.0.0", // Cho phép truy cập từ mọi IP
    strictPort: true,
  },
  preview: {
    allowedHosts: ["chuc-bao-boi-8-3-dui-de.onrender.com"],
  },
});
