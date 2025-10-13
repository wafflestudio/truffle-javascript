<div align="center">

# Truffle JavaScript SDK

[![GitHub issues](https://img.shields.io/github/issues/wafflestudio/truffle-javascript.svg)](https://github.com/wafflestudio/truffle-javascript/issues)
[![GitHub stars](https://img.shields.io/github/stars/wafflestudio/truffle-javascript.svg)](https://github.com/wafflestudio/truffle-javascript/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)](https://bun.sh/)

</div>

---

## 개요

[Truffle](https://github.com/wafflestudio/truffle)을 JavaScript 생태계에서 사용하기 위한 SDK 모노레포입니다.

## 개발

### 사전 요구사항

- [Bun](https://bun.sh/) 1.2.2+

### 설정

```bash
# 저장소 복제
git clone https://github.com/wafflestudio/truffle-javascript.git
cd truffle-javascript

# 종속성 설치
bun install

# 모든 패키지 빌드
bun run build

# 개발 모드 실행
bun run dev
```

### 프로젝트 구조

```
truffle-javascript/
├── .changeset/
├── .github/
├── packages/       # 패키지들
├── scripts/        # 빌드 및 유틸리티 스크립트
├── biome.json
├── bunfig.toml
└── package.json
```

### 사용 가능한 스크립트

- `bun run dev` - 모든 패키지의 개발 모드 시작
- `bun run build` - 모든 패키지 빌드
- `bun run check` - 린팅 및 코드 품질 검사 실행
- `bun run fix` - 린팅 이슈 자동 수정
- `bun run publish-packages` - npm에 패키지 게시

## 기여하기

### 개발 워크플로우

라이브러리이지만 TBD를 사용합니다. 브랜치 및 커밋 이름 컨벤션은 없습니다. 아무렇게나 지어도 되고, main 브랜치에 머지할 때 squash merge하면서 PR Title이랑 Description이 커밋으로 남도록 설정되어 있으니 PR Title이랑 Description은 잘 써야 합니다.

### 코드 스타일

이 프로젝트는 코드 포매팅과 린팅을 위해 [Biome](https://biomejs.dev/)을 사용합니다. 코드가 모든 검사를 통과하는지 확인해주세요:

```bash
bun run check
bun run fix  # 이슈 자동 수정
```

## 릴리스 프로세스

이 프로젝트는 버전 관리 및 게시를 위해 [Changesets](https://github.com/changesets/changesets)를 사용합니다:

1. changeset 생성: `bunx changeset`
2. changeset 커밋
3. 릴리스: `bun run publish-packages`

## 라이센스

MIT © [Wafflestudio](https://github.com/wafflestudio)

## 지원

- [#project-truffle](https://wafflestudio.slack.com/archives/C04KKHS2P1D) 채널에서 `@truffle`을 멘션해주세요.
