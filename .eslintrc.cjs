/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['filename-rules'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.ts',
    'node_modules',
    'dist',
    'lib',
    'coverage',
    'badges',
    'src/assets/**/*',
    './node_modules/strip-ansi/**/*'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'filename-rules/match': [
      2,
      {
        '.vue': 'PascalCase',
        '.ts': 'camelCase',
        '.js': 'camelCase'
      }
    ]
  },
  overrides: [
    {
      files: './*.js',
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
