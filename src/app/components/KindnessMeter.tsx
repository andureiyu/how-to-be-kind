"use client";

// ─── Kindness Meter ───────────────────────────────────────────────────────
// Fixed top-right widget showing a growing plant that blooms as kindness
// score increases. Listens to the "kindness-update" custom event for
// same-tab live updates.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadState } from "../lib/kindnessStore";

// ── Plant SVG ──────────────────────────────────────────────────────────────
// Five growth stages (0–4) based on score ranges:
//   Stage 0: 0–19  → empty pot
//   Stage 1: 20–39 → sprout
//   Stage 2: 40–59 → small plant
//   Stage 3: 60–79 → leafy plant
//   Stage 4: 80–100 → blooming flower

function KindnessPlant({ score }: { score: number }) {
  const level =
    score < 20 ? 0 : score < 40 ? 1 : score < 60 ? 2 : score < 80 ? 3 : 4;

  return (
    <svg
      width="44"
      height="52"
      viewBox="0 0 44 52"
      fill="none"
      aria-hidden="true"
    >
      {/* Pot body */}
      <path d="M 13 44 L 31 44 L 28 51 L 16 51 Z" fill="#c4943d" opacity="0.55" />
      {/* Pot rim */}
      <rect x="11" y="40" width="22" height="6" rx="1.5" fill="#c4943d" opacity="0.7" />
      {/* Soil */}
      <ellipse cx="22" cy="40" rx="10" ry="2.2" fill="#8B6000" opacity="0.18" />

      {/* Stage 0: seed dot */}
      {level === 0 && (
        <circle cx="22" cy="39" r="2" fill="#9e6b3a" opacity="0.5" />
      )}

      {/* Stage 1+: stem */}
      {level >= 1 && (
        <motion.path
          d={`M 22 39 L 22 ${level >= 3 ? 12 : level >= 2 ? 20 : 28}`}
          stroke="#6b8e3a"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      )}

      {/* Stage 1: single sprout leaf */}
      {level >= 1 && (
        <motion.ellipse
          cx="16"
          cy="27"
          rx="7"
          ry="3"
          fill="#8ab84a"
          opacity="0.85"
          transform="rotate(-35 16 27)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ transformOrigin: "16px 27px" }}
        />
      )}

      {/* Stage 2: two side leaves */}
      {level >= 2 && (
        <>
          <motion.ellipse
            cx="14"
            cy="31"
            rx="7"
            ry="3"
            fill="#7ab840"
            opacity="0.85"
            transform="rotate(-30 14 31)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ transformOrigin: "14px 31px" }}
          />
          <motion.ellipse
            cx="30"
            cy="25"
            rx="7"
            ry="3"
            fill="#8ab84a"
            opacity="0.85"
            transform="rotate(30 30 25)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ transformOrigin: "30px 25px" }}
          />
        </>
      )}

      {/* Stage 3: four leaves */}
      {level >= 3 && (
        <>
          <motion.ellipse
            cx="13"
            cy="22"
            rx="7.5"
            ry="3"
            fill="#6aad3a"
            opacity="0.9"
            transform="rotate(-25 13 22)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ transformOrigin: "13px 22px" }}
          />
          <motion.ellipse
            cx="31"
            cy="17"
            rx="7.5"
            ry="3"
            fill="#7ab840"
            opacity="0.9"
            transform="rotate(25 31 17)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ transformOrigin: "31px 17px" }}
          />
        </>
      )}

      {/* Stage 4: flower bloom */}
      {level >= 4 && (
        <>
          {/* Petals */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const px = 22 + Math.cos(rad) * 5.5;
            const py = 10 + Math.sin(rad) * 5.5;
            return (
              <motion.circle
                key={angle}
                cx={px}
                cy={py}
                r="3.5"
                fill="#e8a0b8"
                opacity="0.9"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ duration: 0.35, delay: 0.05 * i }}
                style={{ transformOrigin: `${px}px ${py}px` }}
              />
            );
          })}
          {/* Flower center */}
          <motion.circle
            cx="22"
            cy="10"
            r="3.8"
            fill="#f5c842"
            opacity="0.95"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.32 }}
            style={{ transformOrigin: "22px 10px" }}
          />
        </>
      )}
    </svg>
  );
}

// ── Main meter component ───────────────────────────────────────────────────
export default function KindnessMeter() {
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [showGain, setShowGain] = useState(false);
  const [gainAmount, setGainAmount] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  // Load initial score from localStorage (client-only)
  useEffect(() => {
    setScore(loadState().score);
  }, []);

  // Listen for kindness-update events (same-tab) and storage (cross-tab)
  useEffect(() => {
    const refresh = () => {
      const newScore = loadState().score;
      setScore((prev) => {
        const gain = newScore - prev;
        if (gain > 0) {
          setPrevScore(prev);
          setGainAmount(gain);
          setShowGain(true);
          setTimeout(() => setShowGain(false), 2200);
        }
        return newScore;
      });
    };

    window.addEventListener("kindness-update", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("kindness-update", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  // Suppress unused warning — prevScore used implicitly via closure
  void prevScore;

  return (
    <motion.div
      className="fixed right-4 top-4 z-50"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div
        style={{
          background: "rgba(255, 248, 242, 0.92)",
          border: "1.5px solid rgba(158, 107, 58, 0.22)",
          borderRadius: "14px",
          padding: "10px 12px",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          boxShadow: "0 4px 20px rgba(158, 107, 58, 0.08)",
          cursor: "default",
          userSelect: "none",
        }}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
      >
        {/* Plant visualization */}
        <KindnessPlant score={score} />

        {/* Progress bar */}
        <div
          style={{
            width: "44px",
            height: "4px",
            background: "rgba(158,107,58,0.12)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: "linear-gradient(to right, #c4943d, #9e6b3a)",
              borderRadius: "2px",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Score label on hover */}
        <AnimatePresence>
          {showLabel && (
            <motion.span
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 3 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: "0.58rem",
                color: "#9e6b3a",
                fontFamily: "var(--font-bakso), cursive",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {score} / 100
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Floating +points toast */}
      <AnimatePresence>
        {showGain && (
          <motion.div
            key="gain"
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -28, scale: 1 }}
            exit={{ opacity: 0, y: -48, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(196, 148, 61, 0.9)",
              color: "#fff8f2",
              fontSize: "0.65rem",
              fontFamily: "var(--font-bakso), cursive",
              letterSpacing: "0.08em",
              padding: "3px 8px",
              borderRadius: "10px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            +{gainAmount} ✨
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
