import { Tv as Tv2, Landmark, GraduationCap, Building2 } from 'lucide-react';

const cases = [
  { icon: Tv2, title: 'Media', description: 'Newsrooms and broadcasters verify breaking stories before publication, reducing retractions and protecting editorial credibility.', accent: 'border-t-blue-500' },
  { icon: Landmark, title: 'Government', description: 'Policy analysts and public affairs teams fact-check legislation, speeches, and official data in high-stakes environments.', accent: 'border-t-teal-500' },
  { icon: GraduationCap, title: 'Education', description: 'Educators and institutions embed real-time verification into curricula, building critical thinking at scale.', accent: 'border-t-amber-500' },
  { icon: Building2, title: 'Enterprise', description: 'Risk and compliance teams audit vendor claims, market intelligence, and regulatory filings with explainable AI.', accent: 'border-t-slate-500' },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-3">Use Cases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Built for high-stakes decisions</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">Chokwadi AI serves the organizations where accuracy isn't optional.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`bg-white rounded-2xl p-7 border border-slate-200 border-t-4 ${item.accent} hover:shadow-md hover:-translate-y-1 transition-all`}>
                <div className="w-10 h-10 bg-navy-900/5 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-navy-900" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2.5">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
