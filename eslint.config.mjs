import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ),
  ...tseslintConfigs.recommended,
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
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 내장 모듈
            'external', // npm으로 설치한 패키지
            'internal', // 프로젝트 내부 모듈 (경로 별칭 사용)
            'parent', // 상위 디렉토리 모듈
            'sibling', // 동일 디렉토리 모듈
            'index', // 현재 디렉토리의 index 파일
            'object', // object-imports
            'type', // 타입 import
          ],
          pathGroups: [
            // React 관련 패키지를 최상단으로
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: 'next/**', group: 'builtin', position: 'before' },
            // 별칭 경로 처리 (Next.js의 경우 주로 ~ 또는 @ 사용)
            { pattern: '~/**', group: 'internal' },
            // 스타일 관련 파일을 마지막으로
            { pattern: '*.css', group: 'index', position: 'after' },
            { pattern: '*.scss', group: 'index', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
