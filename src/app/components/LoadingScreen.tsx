"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════
   I LOVE YOU HAND SIGN (ILY)
   
   A beautiful, expressive hand gesture with:
   - Thumb extended outward (left side)
   - Index finger extended upward (top)
   - Pinky finger extended upward (top right)
   - Middle and ring fingers curled down (center)
   
   Highly detailed with proper anatomy, nail details, knuckle bumps,
   palm lines, finger joints, and realistic shadow work.
═══════════════════════════════════════════════════════════════════ */

const SKIN = "#f2d5a8";
const SHADOW = "#ddb87a";
const DARK = "#c49a5a";
const NAIL = "#fff5e8";
const LINE = "#b8843a";
const HIGHLIGHT = "#fce4d6";

/* ── I LOVE YOU HAND SIGN ──────────────────────────────────────────
   Using a real ASL photo for authentic hand gesture.
   Perfect for a wholesome loading screen.
─────────────────────────────────────────────────────────────────── */
function HandILY() {
  return (
    <motion.img
      src="/assets/images/howaboutthis.png"
      alt="I Love You hand sign"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        filter: "drop-shadow(0 0 0 #9e823c) brightness(0) saturate(100%)",
        mixBlendMode: "multiply",
      }}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Loading Screen
════════════════════════════════════════════════════���══════════════ */
export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("out"), 3200);
    const doneTimer = setTimeout(() => onDone(), 4000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase === "in" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#f8ffd8" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <LoaderContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Loader content ─────────────────────────────────────────────── */
function LoaderContent() {
  return (
    <div
      className="flex flex-col items-center select-none"
      style={{ gap: "clamp(28px, 5vw, 42px)" }}
    >
      {/* I Love You Hand Sign */}
      <motion.div
        className="flex flex-col items-center"
        style={{
          gap: "clamp(12px, 2vw, 18px)",
          width: "clamp(85px, 17vw, 130px)",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.75 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {/* Floating hand SVG with gentle bounce animation */}
        <motion.div
          style={{
            width: "100%",
            aspectRatio: "100 / 120",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2.2,
            delay: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HandILY />
        </motion.div>

        {/* Hint text — Guess what this means */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{
            color: "#9e823c",
            fontSize: "clamp(0.65rem, 1.3vw, 0.8rem)",
            fontFamily: "var(--font-bakso), cursive",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            lineHeight: 1.4,
            opacity: 0.8,
            display: "block",
            textAlign: "center",
          }}
        >
          guess what this means?
        </motion.span>
      </motion.div>

      {/* "loading..." text */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
        className="text-center"
        style={{
          color: "#9e823c",
          fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
          letterSpacing: "0.2em",
          fontFamily: "var(--font-bakso), cursive",
          fontStyle: "italic",
        }}
      >
        <LoadingDots />
      </motion.p>
    </div>
  );
}

/* Animated dots */
function LoadingDots() {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d % 3) + 1), 500);
    return () => clearInterval(id);
  }, []);
  return <span>loading{".".repeat(dots)}</span>;
}
