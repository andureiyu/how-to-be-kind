"use client";

import { useEffect, useRef, useState } from "react";
import { Press_Start_2P } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const RAIN_DROPS = [
  { left: "2%", delay: 0, duration: 0.85, opacity: 0.26, height: 88 },
  { left: "5%", delay: 0.45, duration: 1.1, opacity: 0.2, height: 118 },
  { left: "8%", delay: 0.2, duration: 0.96, opacity: 0.24, height: 96 },
  { left: "11%", delay: 0.6, duration: 1.2, opacity: 0.18, height: 126 },
  { left: "14%", delay: 0.1, duration: 0.9, opacity: 0.28, height: 86 },
  { left: "17%", delay: 0.75, duration: 1.05, opacity: 0.2, height: 108 },
  { left: "20%", delay: 0.35, duration: 1.15, opacity: 0.16, height: 120 },
  { left: "23%", delay: 0.9, duration: 0.92, opacity: 0.22, height: 92 },
  { left: "26%", delay: 0.5, duration: 1.08, opacity: 0.24, height: 104 },
  { left: "29%", delay: 0.15, duration: 0.88, opacity: 0.18, height: 94 },
  { left: "32%", delay: 0.7, duration: 1.16, opacity: 0.22, height: 116 },
  { left: "35%", delay: 0.25, duration: 0.98, opacity: 0.2, height: 98 },
  { left: "38%", delay: 0.82, duration: 1.18, opacity: 0.16, height: 124 },
  { left: "41%", delay: 0.4, duration: 1.02, opacity: 0.25, height: 102 },
  { left: "44%", delay: 0.95, duration: 0.9, opacity: 0.22, height: 90 },
  { left: "47%", delay: 0.3, duration: 1.12, opacity: 0.18, height: 114 },
  { left: "50%", delay: 0.55, duration: 0.94, opacity: 0.21, height: 100 },
  { left: "53%", delay: 0.15, duration: 1.06, opacity: 0.19, height: 110 },
  { left: "56%", delay: 0.7, duration: 0.88, opacity: 0.23, height: 96 },
  { left: "59%", delay: 0.35, duration: 1.14, opacity: 0.17, height: 122 },
  { left: "62%", delay: 0.9, duration: 0.96, opacity: 0.24, height: 104 },
  { left: "65%", delay: 0.2, duration: 1.08, opacity: 0.2, height: 112 },
  { left: "68%", delay: 0.65, duration: 0.92, opacity: 0.22, height: 98 },
  { left: "71%", delay: 0.4, duration: 1.16, opacity: 0.18, height: 120 },
  { left: "74%", delay: 0.85, duration: 1.02, opacity: 0.21, height: 108 },
  { left: "77%", delay: 0.1, duration: 0.9, opacity: 0.25, height: 94 },
  { left: "80%", delay: 0.55, duration: 1.1, opacity: 0.19, height: 116 },
  { left: "83%", delay: 0.25, duration: 0.94, opacity: 0.23, height: 102 },
  { left: "86%", delay: 0.75, duration: 1.18, opacity: 0.17, height: 124 },
  { left: "89%", delay: 0.45, duration: 0.98, opacity: 0.22, height: 106 },
  { left: "92%", delay: 0.95, duration: 0.86, opacity: 0.26, height: 92 },
  { left: "95%", delay: 0.3, duration: 1.12, opacity: 0.18, height: 114 },
  { left: "98%", delay: 0.6, duration: 1.04, opacity: 0.2, height: 110 },
];

export default function DoorOne() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const checkpointTimeoutRef = useRef<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [hasShownCheckpoint, setHasShownCheckpoint] = useState(false);

  useEffect(() => {
    const audio = new Audio("/assets/audio/dragon-studio-rain-444805.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.7;

    const handleCanPlay = () => setAudioReady(true);
    const handleError = () =>
      setAudioError("Rain audio could not load right now.");

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);
    audioRef.current = audio;

    return () => {
      if (checkpointTimeoutRef.current) {
        window.clearTimeout(checkpointTimeoutRef.current);
      }

      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
  }, []);

  const scheduleCheckpoint = () => {
    if (checkpointTimeoutRef.current) {
      window.clearTimeout(checkpointTimeoutRef.current);
    }

    checkpointTimeoutRef.current = window.setTimeout(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
      }
      setShowCheckpoint(true);
      setHasShownCheckpoint(true);
    }, 120000);
  };

  const handleStart = async () => {
    const audio = audioRef.current;
    setAudioError(null);
    setHasStarted(true);

    if (!audio) {
      setAudioError("Rain audio is not available.");
      return;
    }

    try {
      audio.currentTime = 0;
      await audio.play();
      if (!hasShownCheckpoint) {
        scheduleCheckpoint();
      }
    } catch {
      setAudioError("Tap again to allow the rain audio to start.");
      setHasStarted(false);
    }
  };

  const handleContinue = async () => {
    const audio = audioRef.current;
    setShowCheckpoint(false);

    if (!audio) {
      return;
    }

    try {
      await audio.play();
    } catch {
      setAudioError("Rain audio needs another tap to continue.");
    }
  };

  return (
    <main
      className={`${pressStart2P.className} relative min-h-screen overflow-hidden bg-[#000229] text-[#d7e9ff]`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(102,136,255,0.18), transparent 38%), linear-gradient(180deg, rgba(5,13,62,0.9) 0%, rgba(0,2,41,1) 70%)",
        }}
      />

      <AnimatePresence>
        {hasStarted ? (
          <motion.div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {RAIN_DROPS.map((drop, index) => (
              <motion.span
                key={`${drop.left}-${index}`}
                className="absolute top-[-24%] block w-[2px] rounded-full bg-gradient-to-b from-[#d6ecff]/0 via-[#d6ecff]/75 to-[#87a6ff]/0"
                style={{
                  left: drop.left,
                  height: `${drop.height}px`,
                  opacity: drop.opacity,
                  filter: "drop-shadow(0 0 10px rgba(180, 214, 255, 0.35))",
                }}
                initial={{ y: "-10vh", x: 0 }}
                animate={{ y: "125vh", x: [0, 8, 12] }}
                transition={{
                  duration: drop.duration,
                  delay: drop.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-5 sm:p-8">
        <motion.section
          className="w-full max-w-[760px] px-5 py-8 text-center sm:px-10 sm:py-12"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="mb-4 text-[0.55rem] tracking-[0.32em] text-[#88a6ff] sm:text-[0.7rem]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            DOOR A
          </motion.p>
          <motion.h1
            className="mx-auto max-w-[16ch] text-[1.05rem] leading-[1.9] text-[#eef5ff] sm:text-[1.45rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            RAIN ROOM
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-[36ch] text-[0.5rem] leading-[2.1] text-[#b8cbff] sm:mt-7 sm:text-[0.62rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            A quiet place for a few minutes of rain, soft looping ambiance, and
            a checkpoint before you drift too far.
          </motion.p>

          <div className="mt-9 flex items-center justify-center sm:mt-10">
            <motion.button
              type="button"
              onClick={handleStart}
              className="w-full max-w-[320px] rounded-[24px] bg-[#0d1a63]/55 px-5 py-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.4)] transition-colors hover:bg-[#112070]/70"
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <span className="absolute inset-x-5 top-3 h-px bg-gradient-to-r from-transparent via-[#f2f7ff]/60 to-transparent" />
              <span className="block text-[0.7rem] leading-[1.9] text-[#f7fbff] sm:text-[0.92rem]">
                POP TO START
              </span>
              <span className="mt-4 block text-[0.42rem] leading-[1.9] text-[#a9beff] sm:text-[0.5rem]">
                {audioError
                  ? audioError
                  : audioReady
                    ? "LOOPS ONLY ON THIS PAGE"
                    : "LOADING AUDIO..."}
              </span>
            </motion.button>
          </div>

          <AnimatePresence>
            {hasStarted ? (
              <motion.div
                className="mt-8 space-y-4 sm:mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              ></motion.div>
            ) : null}
          </AnimatePresence>
        </motion.section>
      </div>

      <AnimatePresence>
        {showCheckpoint ? (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-[#01061f]/72 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-[520px] rounded-[26px] border border-[#a4bcff]/30 bg-[#09124d]/88 px-5 py-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:px-8"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[0.55rem] tracking-[0.24em] text-[#91afff] sm:text-[0.65rem]">
                CHECKPOINT
              </p>
              <h2 className="mt-5 text-[0.8rem] leading-[2] text-[#f4f8ff] sm:text-[1rem]">
                YOU HAVE REACHED 2 MINS.
              </h2>
              <p className="mx-auto mt-5 max-w-[32ch] text-[0.48rem] leading-[2] text-[#bfd0ff] sm:text-[0.58rem]">
                SHOULD YOU PROCEED?
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full rounded-[18px] border border-[#bfd0ff]/45 bg-[#10206f] px-4 py-3 text-[0.48rem] leading-[1.8] text-[#f5f8ff] transition-colors hover:bg-[#162983] sm:w-[190px] sm:text-[0.56rem]"
                >
                  CONTINUE HERE
                </button>
                <button
                  type="button"
                  disabled
                  className="w-full rounded-[18px] border border-dashed border-[#92aaf1]/30 bg-[#0c1445]/60 px-4 py-3 text-[0.45rem] leading-[1.8] text-[#8ea3de] sm:w-[190px] sm:text-[0.52rem]"
                >
                  NEXT DOOR PLACEHOLDER
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
