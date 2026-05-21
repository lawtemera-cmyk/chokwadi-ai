import { CircleAlert as AlertCircle, RefreshCw } from 'lucide-react';
import type { VerificationState } from '../types';
import { SkeletonLoader } from './SkeletonLoader';
import { ResultsCard } from './ResultsCard';

export function ResultsSection({ state, claim, onReset }: { state: VerificationState; claim: string; onReset: () => void }) {
  if (state.status === 'idle') return null;

  return (
    <section id="results" className="py-16 px-6 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Verification Results</h2>
          {state.status !== 'loading' && (
            <button onClick={onReset} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy-900 transition-colors">
              <RefreshCw size={14} />
              New verification
            </button>
          )}
        </div>

        {state.status === 'loading' && <SkeletonLoader />}
        {state.status === 'success' && <ResultsCard result={state.result} claim={claim} />}
        {state.status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 flex items-start gap-4 animate-fade-in">
            <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-800">Verification failed</p>
              <p className="text-sm text-red-600 mt-1">{state.message}</p>
              <button onClick={onReset} className="mt-3 text-sm font-medium text-red-700 underline underline-offset-4">Try again</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
