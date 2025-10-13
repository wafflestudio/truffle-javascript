<div align="center">

# @wafflestudio/truffle-browser

[![npm version](https://img.shields.io/npm/v/@wafflestudio/truffle-browser.svg)](https://www.npmjs.com/package/@wafflestudio/truffle-browser)
[![npm downloads](https://img.shields.io/npm/dm/@wafflestudio/truffle-browser.svg)](https://www.npmjs.com/package/@wafflestudio/truffle-browser)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@wafflestudio/truffle-browser)](https://bundlephobia.com/package/@wafflestudio/truffle-browser)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 개요

[Truffle](https://github.com/wafflestudio/truffle)을 브라우저 환경에서 사용하기 위한 SDK입니다.

## 설치

```bash
npm install @wafflestudio/truffle-browser
```

## API 참조

### `getTruffleClient(config)`

새로운 Truffle 클라이언트 인스턴스를 생성합니다.

#### 매개변수

- **config** (`TruffleConfig`) - 설정 객체

#### `TruffleConfig`

```typescript
interface TruffleConfig {
  enabled?: boolean;      // 에러 추적 활성화/비활성화 (기본값: true)
  app: {
    name: string;         // 애플리케이션 이름
    phase: string;        // 환경 단계 (예: 'production', 'staging')
  };
  apiKey: string;         // Truffle API 키. 팀에 문의해서 발급받아야 합니다.
}
```

#### 반환값

- **TruffleClient** - capture 메서드가 있는 클라이언트 인스턴스

### `client.capture(error)`

에러를 캡처하여 Truffle API로 전송합니다.

#### 매개변수

- **error** (`Error`) - 캡처할 에러 객체

#### 예제

```typescript
const client = getTruffleClient({ /* config */ });

try {
  riskyOperation();
} catch (error) {
  client.capture(error);
  showUserFriendlyMessage();
}
```

## 브라우저 전용 기능

### 환경 감지

클라이언트가 자동으로 브라우저 전용 정보를 포함합니다:

```typescript
// 자동으로 캡처됨:
{
  description: window.location.href,  // 현재 URL
  runtime: {
    name: 'browser',
    version: ''
  }
}
```

## 기여하기

기여 가이드라인은 [메인 저장소](https://github.com/wafflestudio/truffle-javascript)를 참고해주세요.

## 라이센스

MIT © [Wafflestudio](https://github.com/wafflestudio)

## 지원

[메인 저장소](https://github.com/wafflestudio/truffle-javascript)를 참고해주세요.
