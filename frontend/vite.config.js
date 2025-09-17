import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // 確保 .js 檔案中的 JSX 能夠被正確轉換
      // 參考: https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#babel-configuration
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
});
