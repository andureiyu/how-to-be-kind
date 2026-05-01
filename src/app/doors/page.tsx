"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const doors = [
  { id: 1, label: "Door A", href: "/doors/one", marker: "A" as const },
  { id: 2, label: "Door 1", href: "/doors/two", marker: "1" as const },
  {
    id: 3,
    label: "Door Peace Sign",
    href: "/doors/three",
    marker: "peace" as const,
  },
];

export default function DoorsPage() {
  const router = useRouter();
  return (
    <>
      <motion.a
        href="/"
        className="fixed top-5 left-5 z-20 cursor-pointer sm:top-7 sm:left-7"
        style={{
          color: "#9e823c",
          fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
          fontFamily: "var(--font-bakso), cursive",
          letterSpacing: "0.05em",
          textDecoration: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ x: -3, transition: { duration: 0.2 } }}
      >
        ← back
      </motion.a>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-[#f8ffd8] px-3 py-16 sm:px-6 sm:py-20"
        style={{ fontFamily: "var(--font-gamja), cursive" }}
      >
        <div className="flex w-full max-w-5xl flex-col items-center justify-center pt-8 sm:pt-16">
          <h1
            className="text-[#9e823c] text-center"
            style={{
              fontFamily: "var(--font-bakso), cursive",
              fontSize: "clamp(1.75rem, 6vw, 3.2rem)",
              letterSpacing: "0.08em",
              marginBottom: "0.9em",
              marginTop: "0",
              textShadow: "0 2px 8px #f3e7c1, 0 1px 0 #fffbe6",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "0.2em",
                fontWeight: 700,
              }}
            >
              Pick a door
            </span>
            <span
              style={{
                fontSize: "clamp(0.82rem, 3vw, 1.3rem)",
                color: "#b8a060",
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}
            >
              Don&apos;t worry - they&apos;re all safe to click.
            </span>
          </h1>
          <div className="flex w-full max-w-5xl flex-wrap items-end justify-center gap-x-2 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:flex-nowrap md:gap-x-10 lg:gap-x-14">
            {doors.map((door) => (
              <motion.button
                key={door.id}
                className="group relative flex w-[29%] min-w-[74px] max-w-[104px] flex-col items-center focus:outline-none sm:min-w-[110px] sm:max-w-[160px] md:w-auto md:flex-1"
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push(door.href)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                aria-label={door.label}
              >
                <DoorSVG marker={door.marker} />
                <span
                  className="mt-2 text-center text-[0.82rem] tracking-wide text-[#9e823c] sm:mt-4 sm:text-lg md:text-xl"
                  style={{
                    fontFamily: "var(--font-bakso), cursive",
                    letterSpacing: "0.06em",
                    textShadow: "0 1px 0 #fffbe6",
                  }}
                >
                  {door.marker === "peace" ? (
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "1.35em",
                        lineHeight: 1,
                        display: "inline-block",
                      }}
                    >
                      &#x262E;
                    </span>
                  ) : (
                    door.label
                  )}
                </span>
                {door.marker === "peace" ? (
                  <motion.span
                    className="pointer-events-none absolute left-[54%] top-[102%] w-[108px] text-left text-[0.56rem] leading-snug text-[#9e823c] sm:left-[70%] sm:top-[91%] sm:w-[190px] sm:text-[0.82rem] md:left-[74%] md:top-[92%]"
                    style={{
                      fontFamily: "var(--font-bakso), cursive",
                      letterSpacing: "0.04em",
                      transformOrigin: "top left",
                      rotate: "12deg",
                    }}
                    initial={{ opacity: 0, x: -8, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Pick the one
                    <br />
                    that makes you
                    <br />
                    feel safe
                  </motion.span>
                ) : null}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function DoorSVG({
  marker,
}: {
  marker: "A" | "1" | "peace";
}) {
  const baseColor = "#b8a060";
  const darkWood = "#8c7331";
  const trimColor = "#d8c487";
  const panelFill = "#cdb97a";

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 112 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[84px] sm:max-w-[126px] md:max-w-[140px]"
      style={{
        display: "block",
      }}
    >
      <defs>
        <linearGradient
          id={`door-frame-${marker}`}
          x1="10"
          y1="10"
          x2="102"
          y2="178"
        >
          <stop offset="0%" stopColor="#d7c27e" />
          <stop offset="50%" stopColor={baseColor} />
          <stop offset="100%" stopColor="#9d8545" />
        </linearGradient>
        <linearGradient
          id={`door-panel-${marker}`}
          x1="24"
          y1="18"
          x2="88"
          y2="160"
        >
          <stop offset="0%" stopColor="#ddcb8c" />
          <stop offset="100%" stopColor="#a68d49" />
        </linearGradient>
      </defs>
      <ellipse cx="56" cy="180" rx="32" ry="8" fill="#d8c487" opacity="0.45" />
      <rect
        x="12"
        y="10"
        width="88"
        height="162"
        rx="18"
        fill={`url(#door-frame-${marker})`}
        stroke={darkWood}
        strokeWidth="4"
        style={{ filter: "drop-shadow(0 4px 12px #e2d6b0)" }}
      />
      <rect
        x="20"
        y="18"
        width="72"
        height="146"
        rx="14"
        fill={`url(#door-panel-${marker})`}
        stroke={trimColor}
        strokeWidth="2"
      />
      <path
        d="M28 28C43 22 69 22 84 28"
        stroke="#ebddaa"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M30 42C41 37 71 37 82 42"
        stroke={darkWood}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <rect
        x="30"
        y="52"
        width="52"
        height="34"
        rx="8"
        fill={panelFill}
        stroke={darkWood}
        strokeWidth="2"
      />
      <rect
        x="30"
        y="96"
        width="52"
        height="54"
        rx="10"
        fill={panelFill}
        stroke={darkWood}
        strokeWidth="2"
      />
      <path d="M56 18V164" stroke="#8a722f" strokeWidth="1.5" opacity="0.35" />
      <path d="M38 24V158" stroke="#efdca1" strokeWidth="1.5" opacity="0.22" />
      <path d="M74 24V158" stroke="#7a6429" strokeWidth="1.5" opacity="0.18" />
      <DoorMarker marker={marker} />
      <ellipse
        cx="79"
        cy="122"
        rx="4.2"
        ry="4.2"
        fill="#f0e1ad"
        stroke="#8b7331"
        strokeWidth="1.5"
      />
      <circle cx="79" cy="122" r="1.4" fill="#8b7331" />
    </svg>
  );
}

function DoorMarker({ marker }: { marker: "A" | "1" | "peace" }) {
  const commonProps = {
    stroke: "#7c652b",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (marker === "peace") {
    return (
      <g transform="translate(56 69)">
        <circle
          cx="0"
          cy="0"
          r="13"
          stroke="#7c652b"
          strokeWidth="3"
          fill="none"
        />
        <path d="M0 -9V10" {...commonProps} />
        <path d="M0 2L-8 10" {...commonProps} />
        <path d="M0 2L8 10" {...commonProps} />
      </g>
    );
  }

  return (
    <text
      x="56"
      y="75"
      textAnchor="middle"
      fill="#7c652b"
      fontSize={marker === "1" ? "26" : "24"}
      fontFamily="var(--font-bakso), cursive"
      fontWeight="700"
      letterSpacing="0.04em"
    >
      {marker}
    </text>
  );
}
