import { Brain, FileSearch, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Brain, title: 'Explainable AI', description: 'Every verdict includes a full reasoning trail. No black boxes — just transparent logic that stakeholders can audit.' },
  { icon: FileSearch, title: 'Evidence-backed results', description: 'Conclusions are anchored in primary sources. The system shows its work, citing the exact evidence that informed the score.' },
  { icon: ShieldCheck, title: 'Built for high-stakes decisions', description: 'Designed for newsrooms, governments, and enterprises where getting it wrong has real consequences.' },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Why Trust Chokwadi AI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Infrastructure-grade trust, by design</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">We believe truth infrastructure should be accountable, auditable, and built for the hardest environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/8 hover:border-teal-500/30 transition-all">
                <div className="w-11 h-11 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={20} className="text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: '10,000+', label: 'Trusted sources' },
            { value: '<2s', label: 'Average response time' },
            { value: '94%', label: 'Accuracy rate' },
            { value: 'SOC 2', label: 'Compliance ready' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-teal-400 tabular-nums">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
