import { roles } from '@/lib/roles';
import { UserRole } from '@/lib/types';

interface RoleDashboardProps {
  role: UserRole;
}

export function RoleDashboard({ role }: RoleDashboardProps) {
  const currentRole = roles.find((entry) => entry.role === role) ?? roles[0];

  return (
    <section className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{currentRole.label} 대시보드</h3>
        <span className="badge bg-emerald-100 text-emerald-700">역할 기반 접근 제어 활성화</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{currentRole.summary}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {currentRole.primaryActions.map((action) => (
          <li key={action} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
            {action}
          </li>
        ))}
      </ul>
    </section>
  );
}
