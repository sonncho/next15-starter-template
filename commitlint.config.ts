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
};

export default Configuration;
