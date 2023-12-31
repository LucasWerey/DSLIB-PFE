import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  viteIgnorePlugins: ['vite:dts'],
  setupFile: './histoire.setup.ts',
  theme: {
    logo: {
      square: './src/Logo.svg',
      light: './src/Logo.svg',
      dark: './src/Logo.svg'
    },

    logoHref: 'https://dslibpfe.vercel.app/',
    favicon: './public/Logo.svg',
    hideColorSchemeSwitch: true
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: 300
    }
  },

  tree: {
    groups: [
      {
        title: 'Indicators',
        id: 'indicators'
      },
      {
        title: 'Media',
        id: 'media'
      },
      {
        title: 'CTA',
        id: 'cta'
      }
    ]
  }
})
