import { fileURLToPath, URL } from 'node:url'
import autoImport from 'unplugin-auto-import/vite'
import componentsImport from 'unplugin-vue-components/vite'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

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
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,vue}'],
      statements: 100,
      lines: 100
    }
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './src/')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'dslib-pfe',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    port: process.env.HISTOIRE ? 6006 : 3000
  }
})
