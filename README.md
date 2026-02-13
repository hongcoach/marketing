# LogLift

LogLift는 피트니스 센터를 위한 회원 관리 시스템입니다. 이 저장소는 현재 프로젝트 핵심 요구사항과 아키텍처 요약 문서를 포함합니다.

## 개요

- 역할 기반 사용자: owner, admin, coach, member
- 반응형/적응형 웹 UI (모바일 하단 탭, PC 사이드바)
- Supabase 기반 인증/DB/RLS
- AI 운동 프로그램 추천 및 코치-회원 연결

## 기술 스택

- Frontend: Next.js 16 (App Router), TypeScript, React 19, Tailwind CSS v4
- Backend/DB: Supabase (Auth + Postgres + Row Level Security)

## 핵심 기능

- 역할 기반 접근 제어 (대시보드/권한 분리)
- SSR 쿠키 기반 인증
- 조건 기반 운동 강도 자동 조절 (sleep/fatigue/pain)
- 코치 템플릿 프로그램 생성 및 회원 배정
- 운동 기록 (회원 직접 + 코치 대리 입력)
- 프리미엄 AI 프로그램 추천
- 코치-회원 초대코드 연결/수동 해제/비활성 자동 해제
- 사용자 커스텀 운동 생성
- 코치 선등록 및 회원 계정 연결
- 관리자 멀티 센터 관리
- 코치 주간 요약 리포트
- 코치 메모 시스템 (통증/주의사항/다음 목표)

## 데이터 매핑 주의사항

- `member.id = gym_users.id`
- `workout_sessions.member_id = member_profiles.id`
- `coach_member_notes.member_id = gym_users.id`
- 주간 요약 쿼리 시 `gym_user_id`를 통해 `member_profiles.id`를 먼저 해석해야 함

## 식단 기능 필수 테이블

아래 테이블이 Supabase에 생성되어야 식단 기능이 동작합니다.

- `meal_logs`
- `meal_items`
- 두 테이블에 대한 RLS 정책

> 상세 SQL은 제품 요구사항 문서(내부 스펙) 기준으로 적용하세요.

## 운동 데이터 자동 저장

- 1초 debounce 자동 저장
- 저장 중 큐잉으로 race condition 방지
- unload/visibility/popstate/unmount 시 저장 시도
- page unload 시 `sendBeacon` 우선 + `fetch(keepalive)` fallback
- `completed_at` 보존을 위한 서버 측 기존 set_logs 조회
- 엔드포인트
  - `/api/workout/save-sets`
  - `/api/workout/save-condition`

## 프로젝트 구조(예정)

- `app/`: Next.js 라우트
- `components/`: 공용 UI
- `lib/`: 유틸리티 및 Supabase 연동
- `public/`: 정적 리소스

## 외부 의존성

- Supabase
- Next.js
- Tailwind CSS
