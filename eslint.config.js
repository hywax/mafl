import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  ignores: [
    '.output',
    'dist',
    'node_modules',
  ],
  overrides: {
    vue: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'style/arrow-parens': ['error', 'always'],
    'curly': ['error', 'all'],
    'antfu/consistent-list-newline': 'off',
  },
})
