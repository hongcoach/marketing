'use client';

import { UserRole } from '@/lib/types';

const mobileTabs = ['대시보드', '회원', '운동', '설정'];

interface AdaptiveNavProps {
  role: UserRole;
}

export function AdaptiveNav({ role }: AdaptiveNavProps) {
  return (
    <>
      <aside className="hidden w-64 shrink-0 rounded-2xl bg-slate-900 p-5 text-white md:block">
        <p className="text-xs uppercase tracking-widest text-slate-400">LogLift</p>
        <h2 className="mt-2 text-lg font-semibold">{role.toUpperCase()} 메뉴</h2>
        <nav className="mt-4 space-y-2 text-sm">
          {['대시보드', '회원 관리', '프로그램', '리포트', '설정'].map((item) => (
            <button
              key={item}
              className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-slate-700"
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white px-2 py-2 md:hidden">
        <ul className="grid grid-cols-4 gap-1 text-center text-xs">
          {mobileTabs.map((tab) => (
            <li key={tab}>
              <button className="w-full rounded-lg px-2 py-2 font-medium text-slate-600" type="button">
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
