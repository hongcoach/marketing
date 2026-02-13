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
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- React 19

## 다음 단계 제안

- Supabase Auth + RLS 연동
- 코치-회원 초대 코드 연결 플로우
- 운동 기록 자동 저장 API(`/api/workout/save-sets`, `/api/workout/save-condition`) 구현
- 식단 테이블(`meal_logs`, `meal_items`) 마이그레이션 및 RLS 정책 적용
