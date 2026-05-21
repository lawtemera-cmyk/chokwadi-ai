export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="38" r="5" fill="#14B8A6" />
      <circle cx="38" cy="22" r="5" fill="#14B8A6" />
      <circle cx="62" cy="18" r="5" fill="#14B8A6" />
      <circle cx="78" cy="32" r="5" fill="#0B1F3A" stroke="#14B8A6" strokeWidth="2" />
      <circle cx="80" cy="55" r="5" fill="#0B1F3A" stroke="#14B8A6" strokeWidth="2" />
      <circle cx="62" cy="72" r="5" fill="#14B8A6" />
      <circle cx="38" cy="68" r="4" fill="#0B1F3A" stroke="#14B8A6" strokeWidth="2" />
      <circle cx="18" cy="58" r="4" fill="#14B8A6" />
      <line x1="22" y1="38" x2="38" y2="22" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="38" y1="22" x2="62" y2="18" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="62" y1="18" x2="78" y2="32" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="78" y1="32" x2="80" y2="55" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="80" y1="55" x2="62" y2="72" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="62" y1="72" x2="38" y2="68" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="38" y1="68" x2="18" y2="58" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="18" y1="58" x2="22" y2="38" stroke="#0B1F3A" strokeWidth="2.5" />
      <line x1="38" y1="22" x2="38" y2="68" stroke="#0B1F3A" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="62" y1="18" x2="62" y2="72" stroke="#0B1F3A" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M28 52 L44 68 L76 30" stroke="#0B1F3A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
