"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import BackgroundTexture from "../components/BackgroundTexture";

/* --- GIF sources --- */
const gifs = [
  { id: 1, src: "/assets/gifs/hug.gif", alt: "hug" },
  { id: 2, src: "/assets/gifs/hugs-hug.gif", alt: "hugs hug" },
  { id: 3, src: "/assets/gifs/hugs-love.gif", alt: "hugs love" },
  { id: 4, src: "/assets/gifs/love-animated.gif", alt: "love animated" },
  {
    id: 5,
    src: "/assets/gifs/virtual-hugs-virtual-hug.gif",
    alt: "virtual hug",
  },
  { id: 6, src: "/assets/gifs/run-hug-run.gif", alt: "run hug" },
  { id: 7, src: "/assets/gifs/running-hug.gif", alt: "running hug" },
  { id: 8, src: "/assets/gifs/b99-brooklyn99.gif", alt: "brooklyn 99 hug" },
  { id: 9, src: "/assets/gifs/giphy-downsized-medium.gif", alt: "hug gif" },
  { id: 10, src: "/assets/gifs/giphy-downsized.gif", alt: "hug gif 2" },
  { id: 11, src: "/assets/gifs/this.gif", alt: "this hug" },
  {
    id: 12,
    src: "/assets/gifs/2214de405a40b8daa0b423ece403fa81.gif",
    alt: "cute hug",
  },
  {
    id: 13,
    src: "/assets/gifs/5ec02c189d9ffdf1e26ef334497fd9d1.gif",
    alt: "warm hug",
  },
  {
    id: 14,
    src: "/assets/gifs/tumblr_51ce53e678a7d7eb3ecfa1ee8805684b_ff182d43_540.gif",
    alt: "tumblr hug",
  },
  {
    id: 15,
    src: "/assets/gifs/phone-notification.gif",
    alt: "notification hug",
  },
];

const desktopPositions = [
  { x: 5, y: 5, size: 110, rotate: -8 },
  { x: 30, y: 3, size: 95, rotate: 5 },
  { x: 60, y: 6, size: 105, rotate: -3 },
  { x: 85, y: 4, size: 90, rotate: 10 },
  { x: 2, y: 35, size: 100, rotate: 6 },
  { x: 82, y: 30, size: 115, rotate: -12 },
  { x: 8, y: 62, size: 90, rotate: 4 },
  { x: 35, y: 70, size: 105, rotate: -7 },
  { x: 58, y: 68, size: 95, rotate: 9 },
  { x: 83, y: 60, size: 100, rotate: -5 },
  { x: 15, y: 88, size: 95, rotate: 12 },
  { x: 72, y: 85, size: 110, rotate: -10 },
  { x: 18, y: 20, size: 88, rotate: 7 },
  { x: 22, y: 48, size: 95, rotate: -6 },
  { x: 10, y: 75, size: 90, rotate: 9 },
];

const mobilePositions = [
  { x: 5, y: 3, size: 62, rotate: -5 },
  { x: 48, y: 4, size: 58, rotate: 6 },
  { x: 75, y: 3, size: 60, rotate: -3 },
  { x: 12, y: 14, size: 60, rotate: 4 },
  { x: 55, y: 15, size: 62, rotate: -7 },
  { x: 8, y: 25, size: 58, rotate: 8 },
  { x: 1, y: 36, size: 50, rotate: -6 },
  { x: 76, y: 35, size: 48, rotate: 5 },
  { x: 3, y: 57, size: 48, rotate: 7 },
  { x: 74, y: 58, size: 50, rotate: -4 },
  { x: 8, y: 68, size: 60, rotate: -6 },
  { x: 52, y: 67, size: 62, rotate: 5 },
  { x: 5, y: 78, size: 58, rotate: 7 },
  { x: 45, y: 79, size: 60, rotate: -4 },
  { x: 72, y: 77, size: 62, rotate: -8 },
];

const hugsDialogue: { text: string; sub?: string; pause?: boolean }[] = [
  { text: "Asides from hugs." },
  { text: "There are more ways" },
  { text: 'to remind ourselves to be "good"' },
  { pause: true, text: "· · ·" },
  { text: "and what a better way to show" },
  { text: "than to share a few small ways", sub: "to be kind" },
];

const niceWays = [
  {
    id: 1,
    title: "Help people in need as long as you can",
    description:
      "It could be either carrying heavy things or offering your seat to someone who needs it. Everything counts.",
    accent: "linear-gradient(145deg, #fde8d0, #f9c4a0)",
  },
  {
    id: 2,
    title: "Check in on a friend",
    description:
      "A simple 'hey, kamusta, okay ka lang?' means more and it's important to be considerate.",
    accent: "linear-gradient(145deg, #d4f0e4, #b0e0c8)",
  },
  {
    id: 3,
    title: "Give a genuine compliment",
    description:
      "Not just on the surface — something you truly noticed about them.",
    accent: "linear-gradient(145deg, #d4e8f8, #b4ccec)",
  },
  {
    id: 4,
    title: "Open the door for someone",
    description: "A small act of consideration that can cheer someone up.",
    accent: "linear-gradient(145deg, #f8f0d4, #ecdcac)",
  },
  {
    id: 5,
    title: "Simply show up",
    description: "Sometimes being present is the kindest thing you can offer.",
    accent: "linear-gradient(145deg, #f0d8f0, #d8b4d8)",
  },
];

export default function HugsPage() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);
  const [selectedWallpaper, setSelectedWallpaper] = useState<(typeof niceWays)[number] | null>(null);

  const showcaseSectionRef = useRef<HTMLElement>(null);
  const bgShift = useInView(showcaseSectionRef, { once: false, amount: 0.01 });

  return (
    <div
      className="relative overflow-x-hidden"
      style={{
        backgroundColor: "#fff8f2",
        fontFamily: "var(--font-gamja), cursive",
      }}
    >
      {/* Back link */}
      <motion.a
        href="/"
        className="fixed top-5 left-5 z-30 cursor-pointer sm:top-7 sm:left-7"
        style={{
          fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
          fontFamily: "var(--font-bakso), cursive",
          letterSpacing: "0.05em",
          textDecoration: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          color: bgShift ? "rgba(255,255,255,0.85)" : "#9e823c",
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          color: { duration: 0.5, ease: "easeInOut" },
        }}
        whileHover={{ x: -3, transition: { duration: 0.2 } }}
      >
        &larr; back
      </motion.a>

      {/* -- Hero: scattered hug gifs (100vh) -- */}
      <div className="relative w-full" style={{ height: "100vh", background: "#fff8f2" }}>
        <BackgroundTexture id="hugs-hero" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{ height: "120px", background: "linear-gradient(to bottom, transparent, #fff8f2)", zIndex: 5 }}
        />
        {/* Desktop */}
        <div className="hidden sm:block">
          {gifs.map((gif, i) => {
            const pos = desktopPositions[i];
            return (
              <motion.div
                key={gif.id}
                className="absolute flex items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  width: pos.size,
                  height: pos.size,
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
                  border: "2px solid rgba(175,125,80,0.25)",
                  cursor: "pointer",
                }}
                initial={{ opacity: 0, scale: 0, rotate: pos.rotate * 2 }}
                animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
                transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 0, boxShadow: "0 8px 30px rgba(158,107,58,0.2)", transition: { duration: 0.25 } }}
                onClick={() => setSelected(gif)}
              >
                <Image src={gif.src} alt={gif.alt} fill className="rounded-2xl" style={{ objectFit: "cover" }} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="block sm:hidden">
          {gifs.map((gif, i) => {
            const pos = mobilePositions[i];
            return (
              <motion.div
                key={gif.id}
                className="absolute flex items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  width: pos.size,
                  height: pos.size,
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
                  border: "2px solid rgba(175,125,80,0.25)",
                  cursor: "pointer",
                }}
                initial={{ opacity: 0, scale: 0, rotate: pos.rotate * 2 }}
                animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
                transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 0, boxShadow: "0 8px 30px rgba(158,107,58,0.2)", transition: { duration: 0.25 } }}
                onClick={() => setSelected(gif)}
              >
                <Image src={gif.src} alt={gif.alt} fill className="rounded-2xl" style={{ objectFit: "cover" }} />
              </motion.div>
            );
          })}
        </div>

        {/* Center text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 px-6 text-center pointer-events-none">
          <div
            style={{
              background: "radial-gradient(ellipse at center, #fff8f2 55%, transparent 100%)",
              padding: "1.5rem 2.5rem",
              borderRadius: "2rem",
            }}
            className="flex flex-col items-center gap-2"
          >
            <h1
              style={{
                color: "#9e823c",
                fontSize: "clamp(1rem, 3.5vw, 2rem)",
                fontFamily: "var(--font-bakso), cursive",
                lineHeight: 1.4,
              }}
            >
              here are multiple virtual hugs,
            </h1>
            <p
              style={{
                color: "#6dafed",
                fontSize: "clamp(0.85rem, 2.5vw, 1.3rem)",
                fontFamily: "var(--font-bakso), cursive",
                fontStyle: "italic",
              }}
            >
              cuz we need them.
            </p>
            <p
              className="mt-1"
              style={{
                color: "#b8a060",
                fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
                fontFamily: "var(--font-bakso), cursive",
                letterSpacing: "0.04em",
              }}
            >
              you deserve every single one of these
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="flex justify-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
      >
        <motion.span
          style={{
            color: "#b8a060",
            fontSize: "clamp(0.65rem, 1.4vw, 0.78rem)",
            fontFamily: "var(--font-bakso), cursive",
            letterSpacing: "0.12em",
          }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll &darr;
        </motion.span>
      </motion.div>

      {/* -- Dialogue -- */}
      <div
        className="relative flex min-h-screen flex-col justify-center"
        style={{ backgroundColor: "#fff8f2" }}
      >
        <BackgroundTexture id="dialogue" />
        <div className="mx-auto flex w-full max-w-2xl flex-col items-end gap-0 px-8 py-[15vh] sm:pr-20">
          {hugsDialogue.map((section, i) => (
            <RightDialogueBlock key={i} section={section} index={i} />
          ))}
        </div>
      </div>

      {/* -- Showcase -- */}
      <motion.section
        ref={showcaseSectionRef}
        animate={{ backgroundColor: bgShift ? "#9e823c" : "#fff8f2" }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-8 text-center">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          <div className="relative flex flex-wrap items-center justify-center gap-x-[0.4em] gap-y-0">
            {["little", "ways", "to", "be", "kind"].map((word, i) => (
              <motion.span
                key={word}
                style={{
                  color: "rgba(255,255,255,0.95)",
                  fontSize: "clamp(2.8rem, 10vw, 7rem)",
                  fontFamily: "var(--font-bakso), cursive",
                  lineHeight: 1.15,
                  display: "inline-block",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.14 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.div
            style={{ height: "1px", background: "rgba(255,255,255,0.22)", width: "min(40vw, 240px)", marginTop: "clamp(1.2rem, 3vw, 2rem)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
          />
          <motion.p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(0.8rem, 2vw, 1.05rem)",
              fontFamily: "var(--font-bakso), cursive",
              letterSpacing: "0.06em",
              marginTop: "clamp(0.9rem, 2.5vw, 1.4rem)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
          >
            little gestures that can make a big difference
          </motion.p>
          <motion.span
            style={{
              position: "absolute",
              bottom: "clamp(1.8rem, 5vh, 3rem)",
              color: "rgba(255,255,255,0.25)",
              fontSize: "clamp(0.6rem, 1.3vw, 0.72rem)",
              fontFamily: "var(--font-bakso), cursive",
              letterSpacing: "0.12em",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 1.6 }}
            animate={{ y: [0, 6, 0] }}
          >
            scroll &darr;
          </motion.span>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden flex flex-col gap-6 px-5 pb-[8vh]">
          {niceWays.map((way, i) => (
            <NiceWayCard key={way.id} way={way} index={i} onClick={() => setSelectedWallpaper(way)} />
          ))}
        </div>

        {/* Desktop rows */}
        {niceWays.map((way, i) => (
          <NiceWayRow key={way.id} way={way} index={i} />
        ))}

        <motion.div
          className="flex justify-center pb-[8vh] pt-[4vh]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
              fontFamily: "var(--font-bakso), cursive",
              letterSpacing: "0.08em",
            }}
          >
            &middot; &middot; &middot;
          </p>
        </motion.div>
      </motion.section>

      {/* -- GIF Lightbox -- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ scale: 0.5, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="overflow-hidden rounded-3xl shadow-2xl"
                style={{
                  position: "relative",
                  width: "min(85vw, 480px)",
                  height: "min(75vh, 480px)",
                  background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
                  border: "3px solid rgba(175,125,80,0.35)",
                }}
              >
                <Image src={selected.src} alt={selected.alt} fill style={{ objectFit: "contain" }} />
              </div>
              <motion.p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "clamp(0.6rem,1.5vw,0.8rem)",
                  fontFamily: "var(--font-bakso), cursive",
                  letterSpacing: "0.08em",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                tap anywhere to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -- Nice Way Lightbox (mobile) -- */}
      <AnimatePresence>
        {selectedWallpaper && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedWallpaper(null)}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-5 px-6"
              initial={{ scale: 0.5, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  width: "min(82vw, 340px)",
                  borderRadius: "1.8rem",
                  background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
                  border: "2px solid rgba(175,125,80,0.35)",
                  padding: "12px",
                  boxShadow: "0 28px 70px rgba(0,0,0,0.45)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: "1.2rem",
                    background: selectedWallpaper.accent,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "3rem", lineHeight: 1 }}>&#10022;</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 px-3 pt-3 pb-2">
                  <h3 style={{ color: "#9e6b3a", fontSize: "clamp(0.9rem, 4vw, 1.1rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.3 }}>
                    {selectedWallpaper.title}
                  </h3>
                  <div style={{ height: "1px", background: "rgba(175,125,80,0.25)" }} />
                  <p style={{ color: "#8a7a50", fontSize: "clamp(0.7rem, 3vw, 0.82rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.6 }}>
                    {selectedWallpaper.description}
                  </p>
                </div>
              </div>
              <motion.p
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)", fontFamily: "var(--font-bakso), cursive", letterSpacing: "0.08em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                tap anywhere to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RightDialogueBlock({
  section,
  index,
}: {
  section: (typeof hugsDialogue)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  if (section.pause) {
    return (
      <div ref={ref} className="flex w-full items-center justify-end py-16 sm:py-20">
        <motion.span
          style={{ color: "#c4b88a", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", letterSpacing: "0.35em" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {section.text}
        </motion.span>
      </div>
    );
  }

  return (
    <div ref={ref} className="flex w-full flex-col items-end py-12 text-right sm:py-16">
      <motion.p
        style={{ color: "#9e823c", fontSize: "clamp(1.05rem, 3.5vw, 1.75rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.5 }}
        initial={{ opacity: 0, x: 28 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
        transition={{ duration: 1, ease: "easeOut", delay: index * 0.02 }}
      >
        {section.text}
      </motion.p>
      {section.sub && (
        <motion.p
          className="mt-2"
          style={{ color: "#b8a060", fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)", fontFamily: "var(--font-bakso), cursive", letterSpacing: "0.03em", lineHeight: 1.6 }}
          initial={{ opacity: 0, x: 18 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 + index * 0.02 }}
        >
          {section.sub}
        </motion.p>
      )}
    </div>
  );
}

function NiceWayCard({
  way,
  index,
  onClick,
}: {
  way: (typeof niceWays)[number];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-5% 0px -5% 0px" });
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
        border: "2px solid rgba(175,125,80,0.25)",
        boxShadow: "0 8px 24px rgba(158,107,58,0.1)",
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{ scale: 1.02, boxShadow: "0 14px 38px rgba(158,107,58,0.2)", transition: { duration: 0.25 } }}
      onClick={onClick}
    >
      <div style={{ width: "100%", aspectRatio: "4 / 3", background: way.accent, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "2.2rem", lineHeight: 1 }}>&#10022;</span>
        </div>
        <span style={{ position: "absolute", top: "0.7rem", right: "0.8rem", color: "rgba(255,255,255,0.45)", fontSize: "clamp(1.1rem, 5vw, 1.5rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1, userSelect: "none" }}>
          {num}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        <h3 style={{ color: "#9e6b3a", fontSize: "clamp(0.9rem, 4.5vw, 1.05rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.3 }}>
          {way.title}
        </h3>
        <div style={{ height: "1px", background: "rgba(175,125,80,0.25)" }} />
        <p style={{ color: "#8a7a50", fontSize: "clamp(0.72rem, 3.5vw, 0.85rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.6 }}>
          {way.description}
        </p>
      </div>
    </motion.div>
  );
}

function NiceWayRow({ way, index }: { way: (typeof niceWays)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-8% 0px -8% 0px" });
  const num = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref} className="hidden sm:flex min-h-screen w-full items-center justify-center px-6 sm:px-12 lg:px-20">
      <div className="flex w-full max-w-4xl flex-row items-center gap-16 lg:gap-24">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
        >
          <div
            style={{
              width: "clamp(200px, 26vw, 300px)",
              aspectRatio: "4 / 5",
              borderRadius: "1.8rem",
              background: "linear-gradient(145deg, #fde8d0, #f5d4b0)",
              border: "2px solid rgba(175,125,80,0.3)",
              padding: "14px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ width: "100%", height: "100%", borderRadius: "1.2rem", background: way.accent, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />
              <motion.div
                style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.45 + index * 0.06 }}
              >
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1 }}>&#10022;</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)", fontFamily: "var(--font-bakso), cursive", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  add image
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-4 text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
        >
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "clamp(2.5rem, 8vw, 5rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1, letterSpacing: "0.02em", userSelect: "none" }}>
            {num}
          </span>
          <h3 style={{ color: "rgba(255,255,255,0.94)", fontSize: "clamp(1.4rem, 4vw, 2.4rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.2, marginTop: "-0.5rem" }}>
            {way.title}
          </h3>
          <motion.div
            style={{ height: "1px", background: "rgba(255,255,255,0.25)", alignSelf: "stretch" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          />
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "clamp(0.82rem, 2vw, 1.05rem)", fontFamily: "var(--font-bakso), cursive", lineHeight: 1.75, letterSpacing: "0.02em", maxWidth: "36ch" }}>
            {way.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
