import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = Array.isArray(assetInfo.names) && assetInfo.names.length > 0 
          ? assetInfo.names[0]
          : 'unknown';

          const ext = name.split('.').pop(); 

          if (ext === 'png') {
            return 'assets/images/[name]-[hash][extname]';
          } else if (ext === 'svg') {
            return 'assets/svg/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            return 'vendor';
          }
        },
      },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
});
