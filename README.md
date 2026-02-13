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

## 사내 레지스트리 주소가 없을 때

괜찮습니다. 먼저 아래 순서로 진행하세요.

1. `./scripts/install-deps.sh` 실행
   - 공용 npm 레지스트리(`registry.npmjs.org`) 시도
   - 공용 미러(`registry.npmmirror.com`)도 자동 시도
   - 각각 프록시 OFF/ON 둘 다 시도
2. 그래도 실패하면 네트워크 정책 이슈입니다.
   - IT팀에 `registry.npmjs.org`, `registry.npmmirror.com` allowlist 요청
3. 추후 사내 레지스트리 URL을 받으면 아래처럼 설정

```bash
npm config set registry https://<company-registry>/
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
