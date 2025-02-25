import { dirname } from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tseslint.configs.recommended,
  prettierConfigRecommended,
  // Add more flat configs here
  { ignores: ['**/node_modules/*', '**/out/*', '**/.next/*'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off', //타입스크립트 사용시 interface의 변수명을 eslint가 잡지 않도록 함.
      '@typescript-eslint/no-unused-vars': 'warn', //대신 사용하지 않는 변수는 @typescript/eslint를 통해 잡아줌.
    },
  },
];

export default eslintConfig;
