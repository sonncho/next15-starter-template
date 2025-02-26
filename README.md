# Next.js 15 Starter Template

최신 Next.js 15를 기반으로 한 모던 웹 애플리케이션 개발을 위한 스타터 템플릿입니다. TypeScript, Tailwind CSS, shadcn/ui, ESLint, Prettier 등 필수적인 도구들이 미리 구성되어 있으며, 도메인 중심의 구조로 설계되어 확장 가능한 애플리케이션을 빠르게 개발할 수 있습니다.

## 기능

- ⚡ [Next.js 15](https://nextjs.org/) - React 프레임워크
- 🔥 [Turbopack](https://turbo.build/pack) - 빠른 개발 서버
- 🎯 [TypeScript](https://www.typescriptlang.org/) - 정적 타입 체크
- 💅 [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - 재사용 가능한 UI 컴포넌트
- 📏 [ESLint](https://eslint.org/) - 코드 린팅
- 💖 [Prettier](https://prettier.io/) - 코드 포맷팅
- 🐶 [Husky](https://typicode.github.io/husky/) - Git 훅
- 🚫 [Lint-Staged](https://github.com/okonet/lint-staged) - 스테이징된 파일 린팅
- 📝 [Commitizen](https://github.com/commitizen/cz-cli) - 커밋 메시지 표준화
- 📐 [Commitlint](https://commitlint.js.org/) - 커밋 메시지 린팅
- 📦 [sort-package-json](https://github.com/keithamus/sort-package-json) - package.json 정렬

## 시작하기

### 요구사항

- Node.js 18.17 이상
- pnpm (패키지 매니저)

### 설치

```bash
# 저장소 클론
git clone https://github.com/sonncho/next15-starter-template.git my-project
cd my-project

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

http://localhost:3000 에서 웹 애플리케이션을 확인할 수 있습니다.

## 스크립트

| 명령어              | 설명                              |
| ------------------- | --------------------------------- |
| `pnpm dev`          | 개발 서버 실행 (Turbopack 사용)   |
| `pnpm build`        | 프로덕션용 빌드                   |
| `pnpm start`        | 프로덕션 빌드 서버 실행           |
| `pnpm lint`         | ESLint로 코드 검사                |
| `pnpm lint:fix`     | ESLint로 코드 문제 자동 수정      |
| `pnpm format`       | Prettier로 코드 형식 검사         |
| `pnpm format:fix`   | Prettier로 코드 형식 자동 수정    |
| `pnpm commit`       | Commitizen을 사용한 커밋 (git-cz) |
| `pnpm package:sort` | package.json 파일 정렬            |

## Git 커밋 가이드

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다. 커밋 메시지 작성을 도와주는 Commitizen이 설정되어 있으며, Husky와 lint-staged를 통해 커밋 전 코드 품질을 검사합니다.

```bash
# 대화형 커밋 메시지 작성
pnpm commit
```

## 프로젝트 구조

```
.
├── .husky/                # Git 훅 스크립트
├── public/                # 정적 파일
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # 인증 관련 라우트 그룹
│   │   └── (main)/        # 메인 라우트 그룹
│   │
│   ├── components/        # 공통 컴포넌트
│   │   ├── ui/            # shadcn/ui 기본 컴포넌트
│   │   └── common/        # 전역 공통 컴포넌트
│   │       ├── header/
│   │       └── footer/
│   │
│   ├── features/          # 도메인별 기능 모듈
│   │   ├── auth/          # 인증 도메인
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   │
│   │   ├── products/      # 상품 도메인
│   │   │   ├── components/
│   │   │   │   ├── product-list/
│   │   │   │   └── product-detail/
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   │
│   │   └── orders/        # 주문 도메인
│   │       ├── components/
│   │       │   ├── cart/
│   │       │   └── checkout/
│   │       ├── hooks/
│   │       └── api/
│   │
│   ├── lib/               # 설정 및 초기화 관련
│   │   ├── config/        # 환경 설정
│   │   ├── styles/        # 스타일 관련
│   │   ├── db/            # 데이터베이스 설정
│   │   └── api/           # API 클라이언트 설정
│   │
│   ├── shared/            # 공유 유틸리티
│   │   ├── hooks/         # 공통 훅
│   │   ├── utils/         # 유틸리티 함수
│   │   └── constants/     # 상수
│   │
│   ├── stores/            # 전역 상태 관리
│   └── types/             # 전역 타입 정의
```

## 커스터마이징

### Tailwind CSS

`tailwind.config.js` 파일을 수정하여 디자인 시스템을 커스터마이징할 수 있습니다.

### shadcn/ui

이 템플릿에는 [shadcn/ui](https://ui.shadcn.com/) 컴포넌트가 포함되어 있습니다. 이는 Radix UI와 Tailwind CSS를 기반으로 한 재사용 가능한 컴포넌트 모음으로, 필요에 따라 커스터마이징할 수 있습니다.

shadcn/ui 컴포넌트는 `src/components/ui` 디렉토리에 위치해 있으며, 다음과 같이 가져와서 사용할 수 있습니다:

```tsx
import { Button } from '@/components/ui/button';

export default function Page() {
  return <Button variant="outline">Click me</Button>;
}
```

추가 컴포넌트가 필요한 경우 [shadcn/ui 웹사이트](https://ui.shadcn.com/docs/components)를 참조하여 CLI를 통해 쉽게 추가할 수 있습니다:

```bash
npx shadcn-ui@latest add [component-name]
```

### 프로젝트 아키텍처

이 템플릿은 도메인 중심의 설계 방식(Domain-Driven Design)에 영감을 받아 구성되었습니다:

- **App Router**: Next.js 15의 App Router를 사용하여 라우트 그룹화와 중첩 라우팅을 지원합니다.
- **기능 기반 구조**: `features` 디렉토리는 도메인별로 분리되어 있어 관련 컴포넌트, 훅, API 서비스를 함께 관리합니다.
- **컴포넌트 계층**: UI 컴포넌트와 도메인별 컴포넌트를 명확히 분리합니다.
- **공유 유틸리티**: 애플리케이션 전반에서 사용되는 유틸리티와 훅을 `shared` 디렉토리에서 관리합니다.
- **전역 상태 관리**: 상태 관리 로직을 `stores` 디렉토리에서 중앙 집중적으로 관리합니다.

### ESLint

`eslint.config.mjs` 파일을 수정하여 린팅 규칙을 커스터마이징할 수 있습니다.

### Prettier

`prettier.config.mjs` 파일을 수정하여 코드 포맷팅 스타일을 커스터마이징할 수 있습니다.

<!-- ## 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요. -->
