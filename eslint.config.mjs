import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
    {
      ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/out/**',
        '**/coverage/**',
        '**/.git/**',
        '**/.github/**',
        '**/.vscode/**',
        '**/public/**',
        '**/static/**',
        '**/.turbo/**',
        '**/*.d.ts',
      ],
    },
    {
      extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        react.configs.flat.recommended,
      ],
      plugins: {
        'no-relative-import-paths': noRelativeImportPaths,
      },
      rules: {
        'no-relative-import-paths/no-relative-import-paths': [
          'warn',
          { allowSameFolder: true, prefix: '@', allowedDepth: 1 },
        ],
        'react/jsx-sort-props': [
          'warn',
          { shorthandFirst: true, callbacksLast: true, reservedFirst: true },
        ],
      },
    },
    ...compat.config({
      extends: ['next', 'next/core-web-vitals', 'next/typescript', 'prettier'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn'
      },
    }),
);
