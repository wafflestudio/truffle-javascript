<div align="center">

# @wafflestudio/truffle-bunjs

[![npm version](https://img.shields.io/npm/v/@wafflestudio/truffle-bunjs.svg)](https://www.npmjs.com/package/@wafflestudio/truffle-bunjs)
[![npm downloads](https://img.shields.io/npm/dm/@wafflestudio/truffle-bunjs.svg)](https://www.npmjs.com/package/@wafflestudio/truffle-bunjs)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@wafflestudio/truffle-bunjs)](https://bundlephobia.com/package/@wafflestudio/truffle-bunjs)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 개요

[Truffle](https://github.com/wafflestudio/truffle)을 Bun.js 환경에서 사용하기 위한 SDK입니다.

## 설치

```bash
bun add @wafflestudio/truffle-bunjs
```

## API 참조

### `getTruffleClient(config)`

Bun.js에 최적화된 새로운 Truffle 클라이언트 인스턴스를 생성합니다.

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

Bun 전용 런타임 정보와 함께 에러를 캡처하여 Truffle API로 전송합니다.

#### 매개변수

- **error** (`Error`) - 캡처할 에러 객체

#### 예제

```typescript
const client = getTruffleClient({ /* config */ });

async function processData(data: unknown) {
  try {
    return await heavyComputation(data);
  } catch (error) {
    client.capture(error);
    throw new Error('처리 실패');
  }
}
```

## Bun 전용 기능

### 런타임 감지

클라이언트가 자동으로 Bun 전용 정보를 포함합니다:

```typescript
// 자동으로 캡처됨:
{
  runtime: {
    name: 'bunjs',
    version: Bun.version  // 예: "1.2.2"
  }
}
```

## 기여하기

기여 가이드라인은 [메인 저장소](https://github.com/wafflestudio/truffle-javascript)를 참고해주세요.

## 라이센스

MIT © [Wafflestudio](https://github.com/wafflestudio)

## 지원

[메인 저장소](https://github.com/wafflestudio/truffle-javascript)를 참고해주세요.
