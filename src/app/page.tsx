"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { HiAtSymbol } from "react-icons/hi";
import LoadingScreen from "./components/LoadingScreen";

const phrases = [
  { text: "How to be Kind", lang: "English" },
  { text: "Paano Maging Mabait", lang: "Filipino" },
  { text: "Comment être Gentil", lang: "Français" },
  { text: "優しくなる方法", lang: "日本語" },
  { text: "친절하게 되는 방법", lang: "한국어" },
  { text: "Cómo ser Amable", lang: "Español" },
  { text: "Wie man freundlich ist", lang: "Deutsch" },
];

const sentenceVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.038, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.018, staggerDirection: -1 } },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 48, rotateX: -90, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", damping: 13, stiffness: 180 },
  },
  exit: {
    opacity: 0,
    y: -28,
    scale: 0.88,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clapped, setClapped] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const router = useRouter();

  const handleDone = useCallback(() => {
    setLoaded(true);
    intervalRef.current = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 3500);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <div
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          background: "#fff8f2",
          fontFamily: "var(--font-gamja), cursive",
        }}
      >
        <BackgroundTexture />
        <NavMenu />

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 px-4 py-8 sm:px-6">
          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "clamp(4rem, 11vw, 7.5rem)",
              width: "100%",
              perspective: "600px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={phraseIndex}
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  width: "100%",
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  fontFamily: "var(--font-bakso), cursive",
                  color: "#9e6b3a",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0 0.28em",
                }}
              >
                {phrases[phraseIndex].text.split(" ").map((word, wi) => (
                  <span key={wi} style={{ display: "inline-flex", overflow: "hidden" }}>
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={`${wi}-${ci}`}
                        variants={charVariants}
                        style={{ display: "inline-block", transformOrigin: "bottom center" }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div style={{ height: "1.4rem", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={`lang-${phraseIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.4, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  display: "block",
                  color: "#b8865a",
                  fontSize: "clamp(0.55rem, 1.2vw, 0.68rem)",
                  letterSpacing: "0.22em",
                  fontFamily: "var(--font-bakso), cursive",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {phrases[phraseIndex].lang}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            style={{
              color: "#9e6b3a",
              fontSize: "clamp(0.6rem, 1.4vw, 0.76rem)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 0.35, y: 0, scale: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            ~ a gentle space for you guys ~
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ marginTop: "clamp(1.2rem, 3vw, 2rem)" }}
          >
            <StartButton
              onClick={() => {
                if (clapped) return;
                setClapped(true);
                setTimeout(() => router.push("/proceed"), 380);
              }}
              pressed={clapped}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

function StartButton({ onClick, pressed }: { onClick: () => void; pressed: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Start"
      style={{
        position: "relative",
        background: "none",
        border: "none",
        padding: 0,
        cursor: pressed ? "default" : "pointer",
        pointerEvents: pressed ? "none" : "auto",
        outline: "none",
      }}
      initial={false}
      whileHover="hover"
      whileTap="tap"
      animate={pressed ? "tap" : "idle"}
    >
      <motion.span
        aria-hidden
        variants={{
          idle: { x: 5, y: 5 },
          hover: { x: 7, y: 7 },
          tap: { x: 2, y: 2 },
        }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#9e6b3a",
          borderRadius: "3px",
          display: "block",
        }}
      />
      <motion.span
        variants={{
          idle: { x: 0, y: 0 },
          hover: { x: -2, y: -2 },
          tap: { x: 3, y: 3 },
        }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
        style={{
          position: "relative",
          display: "block",
          padding: "clamp(0.55rem, 1.2vw, 0.75rem) clamp(1.8rem, 4vw, 2.8rem)",
          background: "#fff8f2",
          border: "2px solid #9e6b3a",
          borderRadius: "3px",
          color: "#9e6b3a",
          fontSize: "clamp(0.7rem, 1.5vw, 0.88rem)",
          fontFamily: "var(--font-bakso), cursive",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        {pressed ? "let’s go ✨" : "begin"}
      </motion.span>
    </motion.button>
  );
}

function BackgroundTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="rgba(175,125,80,0.065)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="largeGrid" width="150" height="150" patternUnits="userSpaceOnUse">
            <rect width="150" height="150" fill="url(#smallGrid)" />
            <path
              d="M 150 0 L 0 0 0 150"
              fill="none"
              stroke="rgba(175,125,80,0.15)"
              strokeWidth="0.8"
            />
            <line x1="73" y1="75" x2="77" y2="75" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
            <line x1="75" y1="73" x2="75" y2="77" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#largeGrid)" />
      </svg>

      <DecorativeCorner className="absolute left-0 top-0" />
      <DecorativeCorner className="absolute bottom-0 right-0 rotate-180" />
      <DecorativeArc className="absolute right-0 top-0" align="top-right" />
      <DecorativeArc className="absolute bottom-0 left-0" align="bottom-left" />
    </div>
  );
}

function DecorativeCorner({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.075 }}
    >
      <path d="M -10 100 Q 55 35 120 100 Q 185 165 250 100" stroke="#9e6b3a" strokeWidth="1.5" />
      <path d="M 35 0 L 35 160" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
      <path d="M 0 55 L 200 55" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
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
      <circle cx="10" cy="10" r="30" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="3 9" />
    </svg>
  );
}

function DecorativeArc({ className, align }: { className: string; align: "top-right" | "bottom-left" }) {
  const isTopRight = align === "top-right";

  return (
    <svg
      className={className}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.055 }}
    >
      <circle
        cx={isTopRight ? "200" : "20"}
        cy={isTopRight ? "30" : "190"}
        r="90"
        stroke="#9e6b3a"
        strokeWidth="1"
        strokeDasharray="3 13"
      />
      <path
        d={isTopRight ? "M 120 0 L 220 100" : "M 0 120 L 100 220"}
        stroke="#9e6b3a"
        strokeWidth="0.8"
        strokeDasharray="5 9"
      />
    </svg>
  );
}

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="absolute left-0 right-0 top-5 z-50 flex flex-col items-center sm:top-7"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
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

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mt-1 flex items-center justify-center gap-3 sm:gap-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <NavLink href="/about" direction="right">
              about
            </NavLink>

            <motion.span
              style={{ color: "#c4b06d", fontSize: "0.5rem", opacity: 0.6 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              ●
            </motion.span>

            <NavLink href="/creator" direction="left">
              sino gumawa nito?
            </NavLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function NavLink({
  href,
  direction,
  children,
}: {
  href: string;
  direction: "left" | "right";
  children: React.ReactNode;
}) {
  const x = direction === "right" ? 12 : -12;

  return (
    <motion.a
      href={href}
      className="relative whitespace-nowrap px-3 py-1"
      style={{
        color: "#9e823c",
        fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
        fontFamily: "var(--font-bakso), cursive",
        letterSpacing: "0.06em",
      }}
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x }}
      transition={{ duration: 0.3, ease: "easeOut", delay: direction === "left" ? 0.05 : 0 }}
      whileHover={{ color: "#6b8e3a", transition: { duration: 0.2 } }}
    >
      {children}
    </motion.a>
  );
}
