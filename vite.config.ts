import { fileURLToPath, URL } from 'node:url'
import autoImport from 'unplugin-auto-import/vite'
import componentsImport from 'unplugin-vue-components/vite'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true
    }),
    componentsImport({
      deep: true,
      dirs: ['./src/components/*', './histoire/components/*'],
      dts: 'src/components.d.ts'
    }),
    dts({
      rollupTypes: true,
      entryRoot: './src'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: process.env.HISTOIRE ? 6006 : 3000
  },
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,vue}'],
      statements: 100,
      lines: 100
    }
  }
})
