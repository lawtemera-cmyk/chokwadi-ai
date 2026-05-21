import { useState } from 'react';
import { X, CircleCheck as CheckCircle } from 'lucide-react';

export function DemoModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', useCase: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 animate-slide-up">
        <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-navy-900">Request a Demo</h3>
            <p className="text-xs text-slate-500 mt-0.5">We'll be in touch within 24 hours.</p>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-all">
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="px-7 py-12 text-center">
            <CheckCircle size={40} className="text-teal-500 mx-auto mb-4" />
            <h4 className="text-base font-bold text-navy-900 mb-2">Request received</h4>
            <p className="text-sm text-slate-500">Our team will reach out within one business day.</p>
            <button onClick={onClose} className="mt-6 px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
            {[
              { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Smith' },
              { name: 'email', label: 'Work email', type: 'email', placeholder: 'jane@organization.com' },
              { name: 'organization', label: 'Organization', type: 'text', placeholder: 'Acme Corp' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm text-navy-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 transition-all"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Primary use case</label>
              <select
                required
                value={form.useCase}
                onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                className="w-full px-4 py-2.5 text-sm text-navy-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 transition-all appearance-none"
              >
                <option value="">Select a use case…</option>
                <option value="media">Media & Journalism</option>
                <option value="government">Government & Policy</option>
                <option value="education">Education</option>
                <option value="enterprise">Enterprise</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="w-full mt-2 px-5 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all">
              Submit request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
