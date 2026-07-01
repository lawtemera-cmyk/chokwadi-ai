import { Verdict } from '../types';

interface VerdictBadgeProps {
  verdict: Verdict;
}

const verdictConfig: Record<Verdict, { label: string; className: string; dotColor: string }> = {
  True: { label: 'True', className: 'text-green-700 bg-green-50', dotColor: 'bg-green-500' },
  False: { label: 'False', className: 'text-red-700 bg-red-50', dotColor: 'bg-red-500' },
  Misleading: { label: 'Misleading', className: 'text-yellow-700 bg-yellow-50', dotColor: 'bg-yellow-500' },
  Unproven: { label: 'Unproven', className: 'text-gray-700 bg-gray-50', dotColor: 'bg-gray-400' },
  Unknown: { label: 'Unknown', className: 'text-gray-700 bg-gray-50', dotColor: 'bg-gray-400' },
};

export function VerdictBadge({ verdict }: VerdictBadgeProps) {
  const config = verdictConfig[verdict];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></span>
      {config.label}
    </span>
  );
}
