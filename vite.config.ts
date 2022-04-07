import { chromeExtension } from 'rollup-plugin-chrome-extension'
import { defineConfig } from 'vite'
import manifest from './manifest'

export default defineConfig({
  plugins: [
    chromeExtension({
      manifest,
      contentScripts: {
        preambleCode: false,
      },
    }),
  ],
})
