import { Scissors, Globe, ChartBar as BarChart3 } from 'lucide-react';

const steps = [
  { icon: Scissors, number: '01', title: 'Extract Claim', description: 'Our NLP pipeline isolates the core verifiable assertion from any text, removing ambiguity and surface noise.' },
  { icon: Globe, number: '02', title: 'Cross-check Sources', description: 'The claim is matched against thousands of trusted primary sources, peer-reviewed research, and authoritative databases in real time.' },
  { icon: BarChart3, number: '03', title: 'Score & Explain', description: 'A confidence-weighted verdict is generated with a full evidence trail—so every conclusion is traceable and auditable.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Three steps to verifiable truth</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">A transparent, evidence-backed pipeline designed for accuracy and accountability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-4xl font-bold text-slate-100 select-none">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
