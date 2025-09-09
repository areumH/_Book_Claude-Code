# E2E Test Suite for E-Commerce Store

이 프로젝트는 e-commerce 웹사이트의 End-to-End (E2E) 테스트를 위한 Playwright 테스트 환경입니다.

## 📋 목차

- [설치](#설치)
- [테스트 실행](#테스트-실행)
- [테스트 구조](#테스트-구조)
- [Mock Server](#mock-server)
- [브라우저 설정](#브라우저-설정)
- [디버깅](#디버깅)
- [보고서](#보고서)

## 🚀 설치

### 1. 의존성 설치
```bash
npm install
```

### 2. Playwright 브라우저 설치
```bash
npx playwright install
```

## 🧪 테스트 실행

### 기본 테스트 실행
```bash
npm test
```

### 다양한 실행 옵션
```bash
# UI 모드로 테스트 실행 (브라우저에서 실시간 확인)
npm run test:ui

# 브라우저 창을 띄우며 테스트 실행
npm run test:headed

# 디버그 모드로 테스트 실행
npm run test:debug

# 특정 브라우저에서만 테스트 실행
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project=mobile-chrome

# 특정 테스트 파일만 실행
npx playwright test tests/purchase-flow.e2e.test.ts
```

## 📁 테스트 구조

```
e2e/
├── tests/
│   └── purchase-flow.e2e.test.ts  # 구매 플로우 테스트
├── mock-server.js                 # 테스트용 Mock 서버
├── playwright.config.ts           # Playwright 설정
├── package.json                   # 프로젝트 설정
└── README.md                      # 이 문서
```

### 테스트 시나리오

현재 구현된 `purchase-flow.e2e.test.ts`는 다음과 같은 전체 구매 프로세스를 테스트합니다:

1. **홈페이지 접속** - 기본 페이지 로드 확인
2. **상품 검색** - 검색 기능 테스트
3. **상품 선택** - 상품 상세 페이지 이동
4. **장바구니 추가** - 상품을 장바구니에 추가
5. **장바구니 확인** - 장바구니 페이지에서 상품 확인
6. **체크아웃** - 구매 정보 입력
7. **주문 완료** - 최종 주문 확인

## 🖥️ Mock Server

테스트는 `mock-server.js`를 사용하여 실제 백엔드 없이 실행됩니다.

### Mock Server 수동 실행
```bash
npm start
```

서버는 `http://localhost:3000`에서 실행되며 다음 기능을 제공합니다:

- 홈페이지 (`/`)
- 상품 검색 (`/search`)
- 상품 상세 (`/products/:id`)
- 장바구니 (`/cart`)
- 체크아웃 (`/checkout`)
- API 엔드포인트 (`/api/*`)

### Mock Server 특징
- 메모리 기반 장바구니 상태 관리
- 테스트 간 상태 초기화를 위한 `/api/reset` 엔드포인트
- 실제 e-commerce 사이트의 주요 기능 시뮬레이션

## 🌐 브라우저 설정

테스트는 다음 브라우저 환경에서 실행됩니다:

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)
- **Mobile Chrome** (Pixel 5 기준)

### 설정 변경

`playwright.config.ts`에서 브라우저 설정을 수정할 수 있습니다:

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  // 다른 브라우저 설정...
]
```

## 🐛 디버깅

### 1. UI 모드 사용
```bash
npm run test:ui
```
브라우저에서 테스트를 시각적으로 실행하고 디버깅할 수 있습니다.

### 2. 디버그 모드
```bash
npm run test:debug
```
테스트 실행 중 브레이크포인트에서 정지하고 단계별 실행이 가능합니다.

### 3. 스크린샷 및 비디오
테스트 실패 시 자동으로 스크린샷과 비디오가 저장됩니다:
- 스크린샷: `test-results/` 폴더
- 비디오: 실패한 테스트만 저장

### 4. 추적(Trace) 확인
첫 번째 재시도 시 trace가 자동 저장되며, 이를 통해 테스트 실행 과정을 분석할 수 있습니다.

## 📊 보고서

### HTML 보고서 확인
```bash
npm run show-report
```

테스트 실행 후 자동으로 생성되는 HTML 보고서에서 다음 정보를 확인할 수 있습니다:
- 테스트 결과 요약
- 실패한 테스트의 상세 정보
- 스크린샷 및 비디오
- 테스트 실행 시간
- 브라우저별 결과

## ⚙️ 추가 설정

### 타임아웃 설정
```typescript
// playwright.config.ts
export default defineConfig({
  timeout: 30000,        // 전체 테스트 타임아웃
  expect: {
    timeout: 5000        // expect 어설션 타임아웃
  }
});
```

### 병렬 실행 설정
```typescript
// playwright.config.ts
export default defineConfig({
  fullyParallel: false,  // 병렬 실행 비활성화
  workers: 1,            // 동시 실행 워커 수
});
```

## 🔧 문제 해결

### 1. 포트 충돌
다른 애플리케이션이 3000 포트를 사용 중인 경우:
```bash
# 포트 사용 확인
lsof -ti:3000

# 프로세스 종료
kill -9 $(lsof -ti:3000)
```

### 2. 브라우저 설치 문제
```bash
# 브라우저 재설치
npx playwright install --force
```

### 3. 테스트 실패 시 디버깅
1. `npm run test:headed`로 브라우저 창에서 확인
2. `test-results/` 폴더의 스크린샷 확인
3. `playwright-report/` 폴더의 HTML 보고서 확인

## 📈 테스트 확장

새로운 테스트 시나리오 추가 시:

1. `tests/` 폴더에 새 `.e2e.test.ts` 파일 생성
2. Mock Server에 필요한 엔드포인트 추가
3. 테스트 실행하여 검증

### 테스트 작성 예시
```typescript
import { test, expect } from '@playwright/test';

test('새로운 기능 테스트', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // 테스트 로직 작성
});
```