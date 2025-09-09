# API Documentation Example

TypeScript로 작성된 API 코드를 JSDoc 주석으로부터 완전한 API 문서를 생성하는 예제 프로젝트입니다.

## 🚀 주요 기능

- **완벽한 JSDoc 주석**: 모든 메서드, 클래스, 인터페이스에 상세한 문서화
- **TypeDoc 통합**: TypeScript 코드로부터 자동 문서 생성
- **다양한 예시**: 실제 사용 가능한 코드 예시 포함
- **에러 처리**: 각 메서드별 예외 상황과 에러 코드 설명
- **타입 안정성**: 완전한 TypeScript 타입 정의

## 📁 프로젝트 구조

```
src/api/
├── types.ts           # 공통 타입 정의
├── errors.ts          # 커스텀 에러 클래스들
├── payment.service.ts # 결제 서비스
├── user.service.ts    # 사용자 서비스
├── order.service.ts   # 주문 서비스
└── index.ts          # 메인 API 엔트리 포인트
```

## 🛠 설치 및 설정

1. 의존성 설치:
```bash
npm install
```

2. TypeScript 빌드:
```bash
npm run build
```

3. 문서 생성:
```bash
npm run docs
```

4. 문서 서버 실행:
```bash
npm run docs:serve
```

## 📖 API 문서 생성

### 자동 문서 생성
```bash
# 문서 생성
npm run docs

# 문서 생성 후 웹 서버 실행
npm run docs:build-and-serve

# 파일 변경 감지하여 자동 재생성
npm run docs:watch
```

### 문서 확인
생성된 문서는 `docs/` 디렉터리에서 확인할 수 있으며, 웹 브라우저에서 `http://localhost:8080`으로 접속하여 확인할 수 있습니다.
