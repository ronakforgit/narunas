interface GlowOrbProps {
  className?: string;
  color?: "primary" | "accent";
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "h-32 w-32", md: "h-64 w-64", lg: "h-96 w-96" };

const GlowOrb = ({ className = "", color = "primary", size = "md" }: GlowOrbProps) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${sizes[size]} ${className}`}
    style={{
      background:
        color === "primary"
          ? "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
    }}
    aria-hidden="true"
  />
);

export default GlowOrb;
