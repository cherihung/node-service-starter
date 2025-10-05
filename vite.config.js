import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';
import {defineConfig} from 'vite';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    ssr: resolve(rootDir, 'index.js'),
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    target: 'node18',
    rollupOptions: {
      external: ['express', 'cors', 'morgan', 'dotenv/config'],
      output: {
        entryFileNames: 'server.js',
        format: 'esm',
      },
    },
  },
});
