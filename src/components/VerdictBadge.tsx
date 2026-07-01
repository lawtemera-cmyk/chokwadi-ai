import type { Verdict } from '../types';

type VerdictSize = 'sm' | 'md' | 'lg';

interface VerdictBadgeProps {
  verdict: Verdict;
  size?: VerdictSize; // Optional size prop
}

const verdictConfig: Record<Verdict, { label: string; className: string; dotColor: string }> = {
  True: { label: 'True', className: 'text-green-700 bg-green-50', dotColor: 'bg-green-500' },
  False: { label: 'False', className: 'text-red-700 bg-red-50', dotColor: 'bg-red-500' },
  Misleading: { label: 'Misleading', className: 'text-yellow-700 bg-yellow-50', dotColor: 'bg-yellow-500' },
  Unproven: { label: 'Unproven', className: 'text-gray-700 bg-gray-50', dotColor: 'bg-gray-400' },
  Unknown: { label: 'Unknown', className: 'text-gray-700 bg-gray-50', dotColor: 'bg-gray-400' },
};

export function VerdictBadge({ verdict, size = 'md' }: VerdictBadgeProps) {
  const config = verdictConfig[verdict];
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
    lg: 'text-base px-4 py-1.5 gap-2',
  };
  
  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2',
  };

  return (
    <span className={`inline-flex items-center rounded-full ${config.className} ${sizeClasses[size]}`}>
      <span className={`rounded-full ${config.dotColor} ${dotSizes[size]}`}></span>
      {config.label}
    </span>
  );
}
