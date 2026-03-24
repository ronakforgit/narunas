const FloatingShapes = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    {/* Diagonal lines */}
    <svg className="absolute -top-20 -right-20 h-80 w-80 opacity-[0.04]" viewBox="0 0 200 200">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={0}
          y1={i * 28}
          x2={200}
          y2={i * 28 + 60}
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
        />
      ))}
    </svg>

    {/* Circle ring */}
    <svg className="absolute -bottom-16 -left-16 h-64 w-64 opacity-[0.05]" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
    </svg>

    {/* Dot cluster */}
    <svg className="absolute top-1/3 right-10 h-40 w-40 opacity-[0.06]" viewBox="0 0 100 100">
      {Array.from({ length: 25 }).map((_, i) => (
        <circle
          key={i}
          cx={(i % 5) * 20 + 10}
          cy={Math.floor(i / 5) * 20 + 10}
          r="1.5"
          fill="hsl(var(--primary))"
        />
      ))}
    </svg>
  </div>
);

export default FloatingShapes;
