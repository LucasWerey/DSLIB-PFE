import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      watch: true,
      coverage: {
        exclude: [
          ...configDefaults.exclude,
          'e2e/*',
          'src/tailwind/*',
          'src/components/Media/IconsBase/*'
        ]
      },
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
