const CrosshairMarker = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none absolute ${className}`}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <line x1="24" y1="0" x2="24" y2="48" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
    <line x1="0" y1="24" x2="48" y2="24" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
    <circle cx="24" cy="24" r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
    <circle cx="24" cy="24" r="2" fill="hsl(var(--primary))" opacity="0.2" />
  </svg>
);

export default CrosshairMarker;
