import { defineManifest } from 'rollup-plugin-chrome-extension'

export default defineManifest({
  manifest_version: 3,
  name: 'New Tab Background',
  description: 'Change the background of the new tab.',
  version: '0.0.1',
  action: {
    default_popup: 'index.html',
  },
})
