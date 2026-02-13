'use client';

import { useMemo, useState } from 'react';

function calcAdjustment(sleep: number, fatigue: number, pain: number): string {
  const strain = fatigue + pain;

  if (sleep <= 3 || strain >= 15) return '강도 -20% / 세트 -1';
  if (sleep <= 5 || strain >= 10) return '강도 -10% / 세트 유지';
  if (sleep >= 8 && strain <= 5) return '강도 +5% / 세트 +1';
  return '기본 강도 유지';
}

export function AutoRegulationPanel() {
  const [sleep, setSleep] = useState(7);
  const [fatigue, setFatigue] = useState(4);
  const [pain, setPain] = useState(2);

  const recommendation = useMemo(() => calcAdjustment(sleep, fatigue, pain), [sleep, fatigue, pain]);

  return (
    <section className="card">
      <h3 className="text-xl font-semibold">컨디션 기반 자동 강도 조절</h3>
      <p className="mt-2 text-sm text-slate-600">입력된 수면/피로/통증 점수로 오늘 운동 강도를 자동 추천합니다.</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium">
          수면 점수: {sleep}
          <input
            className="mt-2 w-full"
            max={10}
            min={1}
            onChange={(event) => setSleep(Number(event.target.value))}
            type="range"
            value={sleep}
          />
        </label>

        <label className="text-sm font-medium">
          피로 점수: {fatigue}
          <input
            className="mt-2 w-full"
            max={10}
            min={1}
            onChange={(event) => setFatigue(Number(event.target.value))}
            type="range"
            value={fatigue}
          />
        </label>

        <label className="text-sm font-medium">
          통증 점수: {pain}
          <input
            className="mt-2 w-full"
            max={10}
            min={1}
            onChange={(event) => setPain(Number(event.target.value))}
            type="range"
            value={pain}
          />
        </label>
      </div>

      <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-blue-800">
        오늘 추천: {recommendation}
      </div>
    </section>
  );
}
