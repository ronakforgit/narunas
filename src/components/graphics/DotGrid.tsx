const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none absolute ${className}`}
    width="200"
    height="200"
    viewBox="0 0 200 200"
    aria-hidden="true"
  >
    {Array.from({ length: 100 }).map((_, i) => (
      <circle
        key={i}
        cx={(i % 10) * 20 + 10}
        cy={Math.floor(i / 10) * 20 + 10}
        r="1"
        fill="hsl(var(--primary))"
        opacity="0.15"
      />
    ))}
  </svg>
);

export default DotGrid;
