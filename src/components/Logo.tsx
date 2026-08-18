/**
 * Brand mark: an arched gateway with a diya flame inside it.
 * The arch reads as a passage, the flame as the lamp kept lit beside the body.
 */
export function Logo({
  className = "h-10 w-10",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const ring = dark ? "rgba(255,255,255,0.22)" : "#e9edf2";
  const arch = dark ? "rgba(255,255,255,0.55)" : "#2a3542";

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lr-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#a86b16" />
          <stop offset="55%" stopColor="#e0a63c" />
          <stop offset="100%" stopColor="#f4da97" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="24" r="22.5" fill="none" stroke={ring} strokeWidth="1.5" />

      {/* Arch */}
      <path
        d="M13 37V24a11 11 0 0 1 22 0v13"
        fill="none"
        stroke={arch}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M11 37.4h26" stroke={arch} strokeWidth="2" strokeLinecap="round" />

      {/* Flame */}
      <path
        d="M24 13.6c1.6 3 4.2 4.6 4.2 8a4.2 4.2 0 0 1-8.4 0c0-1.2.4-2.1 1-2.9.3.8.7 1.2 1.3 1.4-.2-2.4.9-4.8 1.9-6.5Z"
        fill="url(#lr-flame)"
      />

      {/* Diya base */}
      <path
        d="M18.6 27.8h10.8c-.5 2.2-2.6 3.6-5.4 3.6s-4.9-1.4-5.4-3.6Z"
        fill={dark ? "rgba(255,255,255,0.8)" : "#2a3542"}
      />
    </svg>
  );
}
