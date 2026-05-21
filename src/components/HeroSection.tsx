import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

export function HeroSection({ onVerify, onRequestDemo, isLoading }: { onVerify: (claim: string) => void; onRequestDemo: () => void; isLoading: boolean }) {
  const [claim, setClaim] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = claim.trim();
    if (trimmed && !isLoading) onVerify(trimmed);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-[#F8FAFC]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          Real-time claim verification
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-navy-900 leading-[1.08] tracking-tight mb-6 animate-slide-up">
          Verify Truth <span className="text-teal-500">in Real Time.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Chokwadi AI analyzes claims, cross-checks trusted sources, and delivers explainable truth scores instantly.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative flex items-center bg-white rounded-2xl shadow-md border border-slate-200 focus-within:border-teal-400 focus-within:shadow-lg transition-all">
            <Search size={18} className="absolute left-5 text-slate-400" />
            <input
              type="text"
              value={claim}
              onChange={(e) => setClaim(e.target.value)}
              placeholder="Enter a claim to verify…"
              className="flex-1 pl-12 pr-4 py-4 bg-transparent text-navy-900 placeholder-slate-400 text-[15px] font-medium outline-none rounded-2xl"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!claim.trim() || isLoading}
              className="m-1.5 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 disabled:opacity-40 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </span>
                  Verifying
                </>
              ) : (
                <>
                  Verify Claim
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-xs text-slate-400 font-medium">Try:</span>
          {['The Great Wall of China is visible from space.', 'Humans only use 10% of their brain.', 'Coffee stunts growth in children.'].map((example) => (
            <button key={example} onClick={() => setClaim(example)} disabled={isLoading} className="text-xs text-slate-500 hover:text-teal-600 bg-slate-100 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-teal-200 transition-all">
              {example}
            </button>
          ))}
        </div>

        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button onClick={onRequestDemo} className="text-sm font-medium text-slate-500 hover:text-navy-900 transition-colors underline underline-offset-4">
            Request a live demo for your organization
          </button>
        </div>
      </div>
    </section>
  );
}
