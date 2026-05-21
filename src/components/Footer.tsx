import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#060F1D] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <Logo size={30} />
              <span className="font-bold text-lg"><span className="text-white">Chokwadi</span><span className="text-teal-400"> AI</span></span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">Real-time, explainable verification infrastructure for media, governments, and enterprises.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Product</p>
            <ul className="space-y-2.5">
              {['How It Works', 'Use Cases', 'Accuracy', 'API Docs'].map((item) => (
                <li key={item}><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href="mailto:hello@chokwadi.ai" className="text-sm text-slate-400 hover:text-white transition-colors">hello@chokwadi.ai</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Chokwadi AI. All rights reserved.</p>
          <p className="text-xs text-slate-600 text-center sm:text-right max-w-xs">Calm. Intelligent. Authoritative — truth infrastructure for the modern world.</p>
        </div>
      </div>
    </footer>
  );
}
