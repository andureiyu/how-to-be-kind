"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const doors = [
  { id: 1, label: "Door 1", href: "/doors/one", color: "#e6cfa7" },
  { id: 2, label: "Door 2", href: "/doors/two", color: "#b7d3c6" },
  { id: 3, label: "Door 3", href: "/doors/three", color: "#e7b7b7" },
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
        className="min-h-screen flex flex-col items-center justify-center bg-[#f8ffd8] px-4"
        style={{ fontFamily: "var(--font-gamja), cursive" }}
      >
        <h1
          className="text-[#9e823c] text-center"
          style={{
            fontFamily: "var(--font-bakso), cursive",
            fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
            letterSpacing: "0.08em",
            marginBottom: "0.7em",
            marginTop: "-1em",
            textShadow: "0 2px 8px #f3e7c1, 0 1px 0 #fffbe6",
          }}
        >
          <span
            style={{ display: "block", marginBottom: "0.2em", fontWeight: 700 }}
          >
            Choose a door
          </span>
          <span
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "#b8a060",
              fontWeight: 400,
              letterSpacing: "0.04em",
            }}
          >
            Each door leads to a different path. Which will you open?
          </span>
        </h1>
        <div className="flex flex-row gap-8 sm:gap-16 items-end justify-center w-full max-w-3xl">
          {doors.map((door, i) => (
            <motion.button
              key={door.id}
              className="group relative flex flex-col items-center focus:outline-none"
              whileHover={{ y: -12, scale: 1.07 }}
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
              <DoorSVG color={door.color} highlight={i === 1} />
              <span
                className="mt-4 text-[#9e823c] text-lg sm:text-xl tracking-wide"
                style={{
                  fontFamily: "var(--font-bakso), cursive",
                  letterSpacing: "0.06em",
                  textShadow: "0 1px 0 #fffbe6",
                }}
              >
                {door.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}

function DoorSVG({ color, highlight }: { color: string; highlight?: boolean }) {
  // highlight: for the middle door, add a subtle glow
  return (
    <svg
      width="92"
      height="160"
      viewBox="0 0 92 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: highlight ? "drop-shadow(0 0 18px #ffeeb0)" : undefined,
        transition: "filter 0.3s",
        display: "block",
      }}
    >
      {/* Door body */}
      <rect
        x="8"
        y="16"
        width="76"
        height="130"
        rx="14"
        fill={color}
        stroke="#c4b06d"
        strokeWidth="4"
        style={{ filter: "drop-shadow(0 4px 12px #e2d6b0)" }}
      />
      {/* Door panels */}
      <rect
        x="22"
        y="32"
        width="48"
        height="32"
        rx="6"
        fill="#f8efd8"
        stroke="#c4b06d"
        strokeWidth="2"
      />
      <rect
        x="22"
        y="74"
        width="48"
        height="54"
        rx="7"
        fill="#f8efd8"
        stroke="#c4b06d"
        strokeWidth="2"
      />
      {/* Handle */}
      <ellipse
        cx="72"
        cy="81"
        rx="3.5"
        ry="3.5"
        fill="#c4b06d"
        stroke="#9e823c"
        strokeWidth="1.5"
      />
      {/* Door shadow */}
      <ellipse cx="46" cy="154" rx="28" ry="7" fill="#e2d6b0" opacity="0.45" />
    </svg>
  );
}
