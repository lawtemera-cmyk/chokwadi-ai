import type { Verdict } from '../types';

const verdictConfig: Record<Verdict, { label: string; className: string; dotColor: string }> = {
  True: { label: 'True', className: 'bg-emerald-50 text-emerald-700 border border-emerald-200', dotColor: 'bg-emerald-500' },
  False: { label: 'False', className: 'bg-red-50 text-red-700 border border-red-200', dotColor: 'bg-red-500' },
  Misleading: { label: 'Misleading', className: 'bg-amber-50 text-amber-700 border border-amber-200', dotColor: 'bg-amber-500' },
  Unproven: { label: 'Unproven', className: 'bg-slate-100 text-slate-600 border border-slate-200', dotColor: 'bg-slate-400' },
};

export function VerdictBadge({ verdict, size = 'sm' }: { verdict: Verdict; size?: 'sm' | 'lg' }) {
  const config = verdictConfig[verdict];
  return (
    <span className={`inline-flex items-center gap-2 font-semibold rounded-full ${config.className} ${size === 'lg' ? 'px-5 py-2 text-base' : 'px-3 py-1 text-sm'}`}>
      <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
      {config.label}
    </span>
  );
}
