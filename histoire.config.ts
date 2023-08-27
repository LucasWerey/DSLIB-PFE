import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  viteIgnorePlugins: ['vite:dts'],
  setupFile: './histoire.setup.ts',
  tree: {
    groups: [
      {
        title: 'Indicators',
        id: 'indicators'
      },
      {
        title: 'Media',
        id: 'media'
      }
    ]
  }
})
