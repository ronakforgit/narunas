const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none absolute ${className}`}
    width="100%"
    height="100%"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.4" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    <rect width="100%" height="100%" fill="url(#grid-fade)" />
    <defs>
      <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(var(--background))" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="hsl(var(--background))" stopOpacity="0" />
        <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

export default GridPattern;
