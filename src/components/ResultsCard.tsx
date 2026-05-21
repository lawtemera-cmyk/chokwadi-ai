import { ExternalLink } from 'lucide-react';
import type { VerificationResult } from '../types';
import { VerdictBadge } from './VerdictBadge';
import { StanceBadge } from './StanceBadge';

export function ResultsCard({ result, claim }: { result: VerificationResult; claim: string }) {
  const { verdict, confidence, explanation, sources } = result;
  const confidenceColor = confidence >= 80 ? 'text-emerald-600' : confidence >= 50 ? 'text-amber-600' : 'text-red-600';

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-4">
        <div className="border-b border-slate-100 px-8 py-4 bg-slate-50/50">
          <p className="text-sm text-slate-500 font-medium">Claim analyzed</p>
          <p className="text-sm text-navy-900 font-semibold mt-0.5 leading-relaxed">{claim}</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Verdict</p>
                <VerdictBadge verdict={verdict} size="lg" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Confidence</p>
                <div className={`text-5xl font-bold tabular-nums ${confidenceColor}`}>{confidence}<span className="text-2xl font-semibold">%</span></div>
                <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden w-40">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-700" style={{ width: `${confidence}%` }} />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Analysis</p>
              <p className="text-slate-700 leading-relaxed text-[15px]">{explanation}</p>
            </div>
          </div>
        </div>
      </div>

      {sources && sources.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 px-1">Sources ({sources.length})</p>
          <div className="space-y-2.5">
            {sources.map((source, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 px-5 py-4 flex items-start justify-between gap-4 hover:border-teal-300 hover:shadow-sm transition-all">
                <div className="flex-1 min-w-0">
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy-900 hover:text-teal-600 transition-colors flex items-center gap-1.5">
                      <span className="truncate">{source.title}</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-navy-900 truncate">{source.title}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-0.5">{source.domain}</p>
                </div>
                <StanceBadge stance={source.stance} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
