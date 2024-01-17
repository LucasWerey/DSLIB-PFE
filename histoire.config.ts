import { defaultColors, defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  viteIgnorePlugins: ['vite:dts'],
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'HOOK DSLib',
    logo: {
      square: './src/Logo.svg',
      light: './src/Logo.svg',
      dark: './src/Logo.svg'
    },
    colors: {
      primary: defaultColors.cyan
    },
    logoHref: 'https://dslibpfe.vercel.app/',
    favicon: './public/Logo.svg',
    storeColorScheme: true
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: 300
    },
    autoPropsDisabled: true,
    responsiveDisabled: true
  },

  backgroundPresets: [
    {
      label: 'black',
      color: '#1B1B1E'
    },
    {
      label: 'darkgrey',
      color: '#787878'
    },
    {
      label: 'grey',
      color: '#CDCDCD'
    },
    {
      label: 'lightgrey',
      color: '#ECECEC'
    },
    {
      label: 'verylightgrey',
      color: '#F6F6F6'
    },
    {
      label: 'white',
      color: '#FFFFFF'
    }
  ],

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
      },
      {
        title: 'Containment',
        id: 'containment'
      }
    ]
  }
})
