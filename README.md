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

## 설치 문제 대응 (요청하신 순서)

1. `./scripts/install-deps.sh` 실행
2. 계속 실패하면 IT팀에 `registry.npmjs.org`, `registry.npmmirror.com` 허용 요청
3. 사내 레지스트리 URL을 받으면 `npm config set registry ...` 적용

```bash
npm config set registry https://YOUR_COMPANY_REGISTRY/
npm install
```

`YOUR_COMPANY_REGISTRY` 부분을 실제 주소로 바꿔서 실행하세요.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- React 19

## 다음 단계 제안

- Supabase Auth + RLS 연동
- 코치-회원 초대 코드 연결 플로우
- 운동 기록 자동 저장 API(`/api/workout/save-sets`, `/api/workout/save-condition`) 구현
- 식단 테이블(`meal_logs`, `meal_items`) 마이그레이션 및 RLS 정책 적용
