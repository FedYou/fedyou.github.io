import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  build: { assets: '_assets' },
  scopedStyleStrategy: 'where',
  integrations: [
    icon({
      iconDir: './src/assets/icons'
    })
  ]
})
