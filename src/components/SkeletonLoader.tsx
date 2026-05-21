export function SkeletonLoader() {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-4 w-32 bg-slate-200 rounded-full animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="h-10 w-28 bg-slate-200 rounded-full animate-pulse" />
            <div className="h-16 w-24 bg-slate-200 rounded-2xl animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-slate-200 rounded-full animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-200 rounded-full animate-pulse" />
            <div className="h-4 w-4/6 bg-slate-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-3 w-1/3 bg-slate-200 rounded-full animate-pulse" />
              </div>
              <div className="h-6 w-16 bg-slate-200 rounded-full animate-pulse ml-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-6 text-slate-500">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </span>
        <span className="text-sm font-medium">Analyzing sources…</span>
      </div>
    </div>
  );
}
