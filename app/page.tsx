'use client';

import { useState } from 'react';
import { AdaptiveNav } from '@/components/AdaptiveNav';
import { AutoRegulationPanel } from '@/components/AutoRegulationPanel';
import { RoleDashboard } from '@/components/RoleDashboard';
import { roles } from '@/lib/roles';
import { UserRole } from '@/lib/types';

export default function HomePage() {
  const [role, setRole] = useState<UserRole>('coach');

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl gap-4 p-4 pb-24 md:pb-4">
      <AdaptiveNav role={role} />

      <div className="flex-1 space-y-4">
        <header className="card">
          <p className="text-xs uppercase tracking-wider text-slate-500">LogLift</p>
          <h1 className="mt-1 text-2xl font-bold">피트니스 센터 회원관리 시스템</h1>
          <p className="mt-2 text-sm text-slate-600">
            역할에 맞는 화면, 자동 강도 조절, 코치-회원 연결, AI 프로그램 추천을 하나의 앱에서 제공합니다.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {roles.map((entry) => (
              <button
                key={entry.role}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  role === entry.role
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setRole(entry.role)}
                type="button"
              >
                {entry.label}
              </button>
            ))}
          </div>
        </header>

        <RoleDashboard role={role} />
        <AutoRegulationPanel />
      </div>
    </main>
  );
}
