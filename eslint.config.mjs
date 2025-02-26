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
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tseslint.configs.recommended,
  prettierConfigRecommended,
  { ignores: ['**/node_modules/*', '**/out/*', '**/.next/*', 'src/app/globals.css'] },
  {
    languageOptions: {
      // 다양한 환경의 전역 변수를 허용
      globals: {
        ...globals.browser, // 브라우저 환경의 전역 변수(window, document 등)
        ...globals.jest, // Jest 테스트 환경의 전역 변수(describe, Buffer등)
        ...globals.node, // Node.js 환경의 전역 변수(process, Buffer 등)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 구문 분석을 활성화합니다.
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off', //타입스크립트 사용시 interface의 변수명을 eslint가 잡지 않도록 함.
      '@typescript-eslint/no-unused-vars': 'warn', //대신 사용하지 않는 변수는 @typescript/eslint를 통해 잡아줌.
    },
  },
];

export default eslintConfig;
