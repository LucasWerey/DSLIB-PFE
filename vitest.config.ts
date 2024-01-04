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
        ],
        reporter: ['text-summary', 'json-summary', 'html', 'lcov'],
        lines: 90,
        functions: 70,
        branches: 80,
        statements: 90
      },
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
