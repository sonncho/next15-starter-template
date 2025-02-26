import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새 기능
        'fix', // 버그 수정
        'docs', // 문서 변경
        'style', // 코드 포맷팅, 세미콜론 누락 등
        'refactor', // 코드 리팩토링
        'perf', // 성능 개선
        'test', // 테스트 추가/수정
        'build', // 빌드 시스템 변경
        'ci', // CI 설정 변경
        'chore', // 기타 변경사항
        'revert', // 이전 커밋 되돌리기
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'setup', // 설정 관련
        'bug', // 버그 관련
        'ui', // UI 관련,
        'page', // 페이지 관련
        'components', // 컴포넌트 관련
        'hooks', // 커스텀 훅 관련
        'lib', // 유틸리티/라이브러리 관련
        'docs', // 문서 관련
        'api', // API 라우트 관련
        'styles', // 스타일 관련
        'config', // 설정 관련
        'deps', // 의존성 관련
        'auth', // 인증 관련
        'db', // 데이터베이스 관련
        'middleware', // 미들웨어 관련
        'layout', // 레이아웃 관련
        'route', // 라우팅 관련
        'public', // 정적 파일 관련
        'feature', // 특정 기능
        'store', // 상태 관리 관련
        'test', // 테스트 관련
        'ci', // CI 설정 관련
        'other', // 기타
      ],
    ],
  },
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'maximum %d chars',
      min: 'minimum %d chars',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change you're committing:",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: 'Changes that do not affect the meaning of the code (formatting, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: 'Changes that affect the build system or external dependencies',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Changes to CI configuration files and scripts',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name):',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change:',
      },
      body: {
        description: 'Provide a longer description of the change (optional):',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please describe the breaking change:',
      },
      breaking: {
        description: 'Describe the breaking changes:',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please describe the issues:',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".):',
      },
    },
  },
};

export default Configuration;
