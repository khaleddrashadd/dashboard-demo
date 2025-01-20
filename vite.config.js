import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // SVGR options
      svgrOptions: {
        // icon: true, // Optional - if you're using icons
        exportType: 'default', // Use default export
        ref: true, // Optional - if you need ref support
        svgo: true, // Optimize SVGs
        titleProp: true, // Add title prop support
      },
      // Include files ending in ?react
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
