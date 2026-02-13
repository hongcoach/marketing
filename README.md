# LogLift

LogLift는 피트니스 센터를 위한 회원관리 시스템 프로토타입 앱입니다.

## 포함된 구현

- 역할 전환형 대시보드 (owner/admin/coach/member)
- 반응형/적응형 내비게이션
  - 모바일: 하단 탭
  - 데스크톱: 사이드 메뉴
- 컨디션(수면/피로/통증) 기반 자동 강도 조절 UI

## 실행 방법

```bash
./scripts/install-deps.sh
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## npm install 실패(403) 시 빠른 해결

이 환경은 프록시 정책 때문에 `npm install`이 막힐 수 있습니다.
`./scripts/install-deps.sh`는 아래 순서로 자동 시도합니다.

1. 프록시 비활성화 후 `registry.npmjs.org` 직접 설치
2. 실패 시 현재 프록시 설정으로 재시도

둘 다 실패하면 네트워크 정책/사내 레지스트리 설정이 필요합니다.

```bash
npm config set registry https://<your-company-registry>/
npm install
```

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- React 19

## 다음 단계 제안

- Supabase Auth + RLS 연동
- 코치-회원 초대 코드 연결 플로우
- 운동 기록 자동 저장 API(`/api/workout/save-sets`, `/api/workout/save-condition`) 구현
- 식단 테이블(`meal_logs`, `meal_items`) 마이그레이션 및 RLS 정책 적용
