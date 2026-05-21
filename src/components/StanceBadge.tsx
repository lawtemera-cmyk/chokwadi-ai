import type { SourceStance } from '../types';

const stanceConfig: Record<SourceStance, { className: string }> = {
  Agree: { className: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  Contradict: { className: 'bg-red-50 text-red-700 border border-red-200' },
  Neutral: { className: 'bg-slate-100 text-slate-600 border border-slate-200' },
};

export function StanceBadge({ stance }: { stance: SourceStance }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${stanceConfig[stance].className}`}>
      {stance}
    </span>
  );
}
