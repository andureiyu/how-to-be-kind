"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAtSymbol } from "react-icons/hi";
import LoadingScreen from "./components/LoadingScreen";
import Link from "next/link";

const words = [
  { abbr: "I", rest: "f" },
  { abbr: "Y", rest: "ou" },
  { abbr: "F", rest: "eel" },
  { abbr: "U", rest: "ncomfy," },
  { abbr: "P", rest: "lease" },
  { abbr: "O", rest: "pen" },
];

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <div
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          background: "#f8ffd8",
          fontFamily: "var(--font-gamja), cursive",
        }}
      >
        <NavMenu />

        <div className="flex flex-col items-center justify-center gap-5 px-4 sm:px-6 py-8 w-full">
          {/* Abbreviation / Expanding text */}
          <div
            className="cursor-pointer select-none w-full flex justify-center"
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            onClick={() => (window.location.href = "/doors")}
          >
            <div
              className="flex flex-wrap items-center justify-center"
              style={{
                gap: "0 clamp(0.2rem, 1.5vw, 0.4rem)",
                width: "100%",
                maxWidth: "90vw",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {words.map((word, i) => (
                <WordSlot
                  key={i}
                  abbr={word.abbr}
                  rest={word.rest}
                  index={i}
                  total={words.length}
                  isRevealed={isRevealed}
                  mountIndex={i}
                />
              ))}
            </div>
          </div>

          {/* Hover hint */}
          <motion.p
            animate={{ opacity: isRevealed ? 0 : 0.45 }}
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              color: "#b8a060",
              fontSize: "clamp(0.58rem, 1.3vw, 0.72rem)",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-bakso), cursive",
            }}
          >
            hover hover you may hover it, if yan gusto mo
          </motion.p>

          {/* Tagline */}
          <motion.p
            style={{
              color: "#9e823c",
              fontSize: "clamp(0.6rem, 1.4vw, 0.76rem)",
              letterSpacing: "0.05em",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 0.35, y: 0, scale: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.1 + words.length * 0.14 + 0.3,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            ~ a gentle space for you guys ~
          </motion.p>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────── Word Slot ──────────────────────────── */

function WordSlot({
  abbr,
  rest,
  index,
  total,
  isRevealed,
  mountIndex,
}: {
  abbr: string;
  rest: string;
  index: number;
  total: number;
  isRevealed: boolean;
  mountIndex: number;
}) {
  const expandDelay = index * 0.06;
  const collapseDelay = (total - 1 - index) * 0.035;
  const delay = isRevealed ? expandDelay : collapseDelay;

  // Staggered spring pop-in on mount — matches loading screen feel
  const mountDelay = 0.08 + mountIndex * 0.14;

  return (
    <motion.span
      className="relative inline-flex items-center"
      initial={{ opacity: 0, y: 20, scale: 0.78 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: mountDelay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
        fontFamily: "var(--font-bakso), cursive",
        lineHeight: 1.1,
        color: "#9e823c",
      }}
    >
      <span style={{ display: "inline-block" }}>{abbr}</span>

      <span
        className={`word-rest ${isRevealed ? "revealed" : ""}`}
        style={{ transitionDelay: `${delay}s` }}
      >
        <span
          className="word-rest-inner"
          style={{ transitionDelay: `${delay}s` }}
        >
          {rest}
        </span>
      </span>

      {/* Add a natural space after each word */}
      <span
        style={{
          width: isRevealed ? "0.3em" : 0,
          transition: "width 0.4s ease",
          display: "inline-block",
        }}
      />
    </motion.span>
  );
}

/* ──────────────────────────── Nav Menu ──────────────────────────── */

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="absolute top-5 left-0 right-0 z-50 flex flex-col items-center sm:top-7"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      {/* Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer border-none bg-transparent outline-none"
        style={{
          color: "#c4b06d",
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          lineHeight: 1,
          padding: "6px 10px",
        }}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        animate={isOpen ? { rotate: 72 } : {}}
        transition={{ duration: 0.35, ease: "easeOut" }}
        whileHover={{ scale: 1.25, rotate: 45, transition: { duration: 0.3 } }}
      >
        <HiAtSymbol />
      </motion.button>

      {/* Nav links */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mt-1 flex items-center justify-center gap-3 sm:gap-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.a
              href="/about"
              className="relative whitespace-nowrap px-3 py-1"
              style={{
                color: "#9e823c",
                fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                fontFamily: "var(--font-bakso), cursive",
                letterSpacing: "0.06em",
              }}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ color: "#6b8e3a", transition: { duration: 0.2 } }}
            >
              about
            </motion.a>

            {/* Separator */}
            <motion.span
              style={{ color: "#c4b06d", fontSize: "0.5rem", opacity: 0.6 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              ●
            </motion.span>

            <motion.a
              href="/creator"
              className="relative whitespace-nowrap px-3 py-1"
              style={{
                color: "#9e823c",
                fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                fontFamily: "var(--font-bakso), cursive",
                letterSpacing: "0.06em",
              }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
              whileHover={{ color: "#6b8e3a", transition: { duration: 0.2 } }}
            >
              sino gumawa nito?
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
