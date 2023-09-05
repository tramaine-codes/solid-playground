/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  test: {
    testTransformMode: {
      web: ['*.[jt]sx'],
    },
    deps: { registerNodeLoader: false },
  },
});
