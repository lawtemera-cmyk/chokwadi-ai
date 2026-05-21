import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar({ onRequestDemo }: { onRequestDemo: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="font-bold text-xl"><span className="text-navy-900">Chokwadi</span><span className="text-teal-500"> AI</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors">Product</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors">Use Cases</a>
            <a href="#trust" className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors">About</a>
          </div>

          <div className="hidden md:block">
            <button onClick={onRequestDemo} className="px-5 py-2.5 text-sm font-semibold text-white bg-navy-900 rounded-xl hover:bg-navy-800 transition-all">Request Demo</button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-navy-900">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-4 space-y-3">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 py-1.5">Product</a>
            <a href="#use-cases" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 py-1.5">Use Cases</a>
            <a href="#trust" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 py-1.5">About</a>
            <button onClick={() => { setMenuOpen(false); onRequestDemo(); }} className="w-full mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-navy-900 rounded-xl">Request Demo</button>
          </div>
        </div>
      )}
    </nav>
  );
}
