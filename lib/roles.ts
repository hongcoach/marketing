import { RoleInfo } from './types';

export const roles: RoleInfo[] = [
  {
    role: 'owner',
    label: '오너',
    summary: '센터 전체 운영 지표와 매출/코치 운영 상태를 한눈에 확인합니다.',
    primaryActions: ['센터 KPI 확인', '운영 정책 관리', '결제/프리미엄 현황 확인'],
  },
  {
    role: 'admin',
    label: '운영자',
    summary: '여러 센터 회원·코치 데이터를 통합 관리하고 필터링합니다.',
    primaryActions: ['회원 상태 점검', '코치 배정/변경', '센터별 데이터 필터'],
  },
  {
    role: 'coach',
    label: '코치',
    summary: '회원 프로그램 작성, 주간 요약 확인, 코치 메모를 기록합니다.',
    primaryActions: ['프로그램 템플릿 작성', '회원별 주간 요약', '통증/주의 메모 기록'],
  },
  {
    role: 'member',
    label: '회원',
    summary: '운동/식단을 기록하고 컨디션 기반 자동 강도 조절을 받습니다.',
    primaryActions: ['오늘 운동 기록', '식단 기록', 'AI 프로그램 추천 받기'],
  },
];
