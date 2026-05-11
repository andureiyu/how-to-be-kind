// Shared warm-cream grid background texture used across all pages.
// Pass a unique `id` prop to avoid SVG pattern ID collisions if needed.

interface BackgroundTextureProps {
  id?: string;
}

export default function BackgroundTexture({ id = "main" }: BackgroundTextureProps) {
  const sg = `sg-${id}`;
  const lg = `lg-${id}`;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Grid pattern */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern id={sg} width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="rgba(175,125,80,0.065)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id={lg} width="150" height="150" patternUnits="userSpaceOnUse">
            <rect width="150" height="150" fill={`url(#${sg})`} />
            <path
              d="M 150 0 L 0 0 0 150"
              fill="none"
              stroke="rgba(175,125,80,0.15)"
              strokeWidth="0.8"
            />
            <line
              x1="73"
              y1="75"
              x2="77"
              y2="75"
              stroke="rgba(175,125,80,0.3)"
              strokeWidth="0.7"
            />
            <line
              x1="75"
              y1="73"
              x2="75"
              y2="77"
              stroke="rgba(175,125,80,0.3)"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${lg})`} />
      </svg>

      {/* Top-left decorative corner */}
      <svg
        className="absolute left-0 top-0"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.07 }}
      >
        <path
          d="M -10 100 Q 55 35 120 100 Q 185 165 250 100"
          stroke="#9e6b3a"
          strokeWidth="1.5"
        />
        <path
          d="M 35 0 L 35 160"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="4 10"
        />
        <path
          d="M 0 55 L 200 55"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="4 10"
        />
        <rect
          x="65"
          y="95"
          width="72"
          height="72"
          stroke="#9e6b3a"
          strokeWidth="1"
          strokeDasharray="6 10"
          transform="rotate(13 101 131)"
        />
        <circle
          cx="10"
          cy="10"
          r="30"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="3 9"
        />
      </svg>

      {/* Bottom-right decorative corner */}
      <svg
        className="absolute bottom-0 right-0"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.07, transform: "rotate(180deg)" }}
      >
        <path
          d="M -10 100 Q 55 35 120 100 Q 185 165 250 100"
          stroke="#9e6b3a"
          strokeWidth="1.5"
        />
        <path
          d="M 35 0 L 35 160"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="4 10"
        />
        <path
          d="M 0 55 L 200 55"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="4 10"
        />
        <rect
          x="65"
          y="95"
          width="72"
          height="72"
          stroke="#9e6b3a"
          strokeWidth="1"
          strokeDasharray="6 10"
          transform="rotate(13 101 131)"
        />
        <circle
          cx="10"
          cy="10"
          r="30"
          stroke="#9e6b3a"
          strokeWidth="0.8"
          strokeDasharray="3 9"
        />
      </svg>
    </div>
  );
}
