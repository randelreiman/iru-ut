import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        eis: resolve(process.cwd(), 'eis/index.html')
      }
    }
  },
  plugins: [tailwindcss(), cloudflare(), handlebars({ partialDirectory: './src/partials' })]
})
