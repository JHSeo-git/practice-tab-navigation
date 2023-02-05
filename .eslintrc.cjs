module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['cn'],
    },
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'json-format',
    'prettier',
    'react',
    'simple-import-sort',
    'tailwindcss',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
  },
  ignorePatterns: ['node_modules', 'tailwindcss-vars', 'tailwind.config.*js', 'dist', 'lib-dist'],
};
