"use client";

import { useRef, useState, useEffect } from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── background texture (shared pattern) ─── */
function BackgroundTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
        <defs>
          <pattern id="sg2" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(175,125,80,0.065)" strokeWidth="0.5" />
          </pattern>
          <pattern id="lg2" width="150" height="150" patternUnits="userSpaceOnUse">
            <rect width="150" height="150" fill="url(#sg2)" />
            <path d="M 150 0 L 0 0 0 150" fill="none" stroke="rgba(175,125,80,0.15)" strokeWidth="0.8" />
            <line x1="73" y1="75" x2="77" y2="75" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
            <line x1="75" y1="73" x2="75" y2="77" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lg2)" />
      </svg>
      <svg className="absolute top-0 left-0" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.07 }}>
        <path d="M -10 100 Q 55 35 120 100 Q 185 165 250 100" stroke="#9e6b3a" strokeWidth="1.5" />
        <path d="M 35 0 L 35 160" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
        <path d="M 0 55 L 200 55" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
        <rect x="65" y="95" width="72" height="72" stroke="#9e6b3a" strokeWidth="1" strokeDasharray="6 10" transform="rotate(13 101 131)" />
        <circle cx="10" cy="10" r="30" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="3 9" />
      </svg>
      <svg className="absolute bottom-0 right-0" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.07, transform: "rotate(180deg)" }}>
        <path d="M -10 100 Q 55 35 120 100 Q 185 165 250 100" stroke="#9e6b3a" strokeWidth="1.5" />
        <path d="M 35 0 L 35 160" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
        <path d="M 0 55 L 200 55" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="4 10" />
        <rect x="65" y="95" width="72" height="72" stroke="#9e6b3a" strokeWidth="1" strokeDasharray="6 10" transform="rotate(13 101 131)" />
        <circle cx="10" cy="10" r="30" stroke="#9e6b3a" strokeWidth="0.8" strokeDasharray="3 9" />
      </svg>
    </div>
  );
}

/* ─── narrative sections ─── */

const sections: {

text: string;

sub?: string;

accent?: boolean;

pause?: boolean;

size?: "small" | "medium" | "large" | "hero";

beCivil?: boolean;

closing?: boolean;

}[] = [

{

text: "Hi.",

sub: "Take a breath.",

size: "hero",

},

{

text: "Since you&apos;ve opened this,",

sub: "that already says something about you.",

size: "medium",

},

{

text: "Maybe today was heavy.",

size: "large",

},

{

text: "Maybe it&apos;s been heavy for weeks and even months.",

size: "small",

},

{

pause: true,

text: "· · ·",

},

{

text: "You don&apos;t have to explain anything here.",

size: "medium",

},

{

text: "There&apos;s no form to fill out.",

sub: "And no problem to solve.",

size: "small",

},

{

text: "Just a quiet frontend website",

sub: "to show care",

size: "small",

},

{

pause: true,

text: "· · ·",

},

{

text: "You know, I&apos;ve sensed a bit of tension believe me",

size: "small",

},

{

text: "I want you to know that it&apos;s alright to feel that way.",

size: "medium",

},

{

text: "The fact that you&apos;re still here",

sub: "— still trying —",

accent: true,

size: "large",

},

{

text: "that is more than enough.",

accent: true,

size: "hero",

},

{

pause: true,

text: "· · ·",

},

{

text: "You are not your worst day.",

size: "medium",

},

{

text: "You are not the mistakes you replay at 3 AM.",

size: "small",

},

{

text: "You are someone worth being gentle with.",

accent: true,

size: "large",

},

{

pause: true,

text: "· · ·",

},

{

text: "So take your time here.",

size: "medium",

},

{

text: "Be Civil",

sub: "Let yourself be civil, even if it&apos;s just for this.",

beCivil: true,

size: "hero",

},

{

text: "You&apos;re safe in this small corner of the internet.",

size: "small",

},

{

pause: true,

text: "· · ·",

},

{

text: "And when you&apos;re ready,",

sub: "you can close this tab.",

size: "small",

},

{

text: "Or stay a little longer.",

size: "medium",

},

{

text: "Either way,",

size: "small",

},

{

text: "I'm really glad that you're here.",

accent: true,

closing: true,

size: "hero",

},

{

pause: true,

text: "🕊",

},

{

text: "And before you go,",

size: "small",

},

{

text: "there&apos;s a gentle map below.",

sub: "four steps, whenever you&apos;re ready.",

size: "medium",

},

];

/* ─── journey map ─── */

const kindnessSteps = [
  {
    num: "01",
    title: "Pause",
    desc: "Before anything, breathe. One moment of stillness before you react.",
    node: [70, 105] as [number, number],
    side: "right" as const,
    accent: "#c4943d",
  },
  {
    num: "02",
    title: "See",
    desc: "Look beyond yourself. Try to sense what the other person might be carrying.",
    node: [290, 200] as [number, number],
    side: "left" as const,
    accent: "#4a9078",
  },
  {
    num: "03",
    title: "Choose",
    desc: "Kindness is always a decision. Even a soft word, offered gently, is enough.",
    node: [70, 305] as [number, number],
    side: "right" as const,
    accent: "#a05060",
  },
  {
    num: "04",
    title: "Give",
    desc: "Offer it freely, without keeping score. That is what makes it real.",
    node: [290, 400] as [number, number],
    side: "left" as const,
    accent: "#6b8e3a",
  },
];

const VBOX_W = 360;
const VBOX_H = 500;
const JOURNEY_D =
  "M 180 20 C 180 55, 70 55, 70 105 C 70 155, 290 155, 290 200 C 290 255, 70 255, 70 305 C 70 355, 290 355, 290 400";
const PATH_LEN = 900;

/* ─── size scale map ─── */

const sizeMap = {

small: { min: "0.9rem", mid: "2.8vw", max: "1.4rem" },

medium: { min: "1.05rem", mid: "3.2vw", max: "1.75rem" },

large: { min: "1.2rem", mid: "3.8vw", max: "2.1rem" },

hero: { min: "1.5rem", mid: "4.8vw", max: "2.8rem" },

};

/* ─── page ─── */

export default function ProceedPage() {

const [showNotif, setShowNotif] = useState(false);

const notifTriggerRef = useRef<HTMLDivElement>(null);

const notifInView = useInView(notifTriggerRef, {

once: true,

margin: "0px 0px 0px 0px",

});

useEffect(() => {

if (notifInView) {

const t = setTimeout(() => setShowNotif(true), 800);

return () => clearTimeout(t);

}

}, [notifInView]);

return (

<div

className="relative min-h-screen"

style={{

background: "#fff8f2",

fontFamily: "var(--font-gamja), cursive",

}}

>

<BackgroundTexture />

{/* Gentle gradient overlay at top */}

<div

className="pointer-events-none fixed inset-x-0 top-0 z-10 h-24"

style={{

background:

"linear-gradient(to bottom, #fff8f2 20%, transparent 100%)",

}}

/>

{/* Back link */}

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

{/* Initial spacer so first text isn't at the very top */}

<div className="h-[45vh]" />

{/* Narrative sections */}

<div className="mx-auto flex max-w-xl flex-col items-center gap-0 px-6 pb-[50vh]">

{sections.map((section, i) => (

<div key={i}>

<NarrativeBlock section={section} index={i} />

{/* Place trigger around 60% through the sections */}

{i === Math.floor(sections.length * 0.6) && (

<div ref={notifTriggerRef} className="h-px w-0" />

)}

</div>

))}

</div>

{/* Journey map — gentle visual guide after the narrative */}
<JourneyMapSection />

{/* Floating notification pop-up */}

<AnimatePresence>

{showNotif && (

<motion.a

href="/board"

className="fixed bottom-8 right-6 z-30 flex cursor-pointer items-center gap-2.5 rounded-full border-none px-5 py-3 shadow-lg sm:bottom-10 sm:right-8"

style={{

background: "linear-gradient(135deg, #e8f0cc, #d8e4b0)",

textDecoration: "none",

}}

initial={{ opacity: 0, y: 40, scale: 0.8 }}

animate={{ opacity: 1, y: 0, scale: 1 }}

exit={{ opacity: 0, y: 20, scale: 0.9 }}

transition={{ type: "spring", stiffness: 260, damping: 20 }}

whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}

whileTap={{ scale: 0.95 }}

>

{/* Ping ring */}

<span className="relative flex h-5 w-5 items-center justify-center">

<motion.span

className="absolute inline-flex h-full w-full rounded-full opacity-60"

style={{ background: "#a8bf6a" }}

animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}

transition={{

duration: 1.5,

repeat: Infinity,

ease: "easeOut",

}}

/>

<span

className="relative inline-flex h-3.5 w-3.5 rounded-full"

style={{ background: "#7aa03e" }}

/>

</span>

<span

style={{

color: "#5a7a2e",

fontSize: "clamp(0.8rem, 2vw, 0.95rem)",

fontFamily: "var(--font-bakso), cursive",

letterSpacing: "0.03em",

}}

>

{/* eslint-disable-next-line react/no-unescaped-entities */}
Don't forget this

</span>

</motion.a>

)}

</AnimatePresence>

{/* Gentle gradient overlay at bottom */}

<div

className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-28"

style={{

background: "linear-gradient(to top, #fff8f2 20%, transparent 100%)",

}}

/>

</div>

);

}

/* ─── individual block ─── */

function NarrativeBlock({

section,

index,

}: {

section: (typeof sections)[number];

index: number;

}) {

const ref = useRef<HTMLDivElement>(null);

const isInView = useInView(ref, {

once: true,

margin: "-15% 0px -15% 0px",

});

if (section.pause) {

return (

<div

ref={ref}

className="flex items-center justify-center py-16 sm:py-20"

>

<motion.span

style={{

color: "#c4b88a",

fontSize: "clamp(1rem, 2.5vw, 1.4rem)",

letterSpacing: "0.35em",

}}

initial={{ opacity: 0, scale: 0.85 }}

animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}

transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}

>

{section.text}

</motion.span>

</div>

);

}

const scale = section.size ?? "medium";

const { min, mid, max } = sizeMap[scale];

const fontSize = `clamp(${min}, ${mid}, ${max})`;

/* ── "Be Civil" special block ── */

if (section.beCivil) {

return (

<div

ref={ref}

className="flex flex-col items-center text-center"

style={{ paddingTop: "3rem", paddingBottom: "4.5rem" }}

>

<BeCivilWord isInView={isInView} />

{section.sub && (

<motion.p

className="mt-8"

style={{

color: "#b8a060",

fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)",

fontFamily: "var(--font-bakso), cursive",

letterSpacing: "0.03em",

lineHeight: 1.6,

}}

initial={{ opacity: 0, y: 12 }}

animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}

transition={{

duration: 1.2,

ease: [0.16, 1, 0.3, 1],

delay: 0.7,

}}

>

{section.sub}

</motion.p>

)}

</div>

);

}

/* ── closing "I'm really glad that you're here." ── */

if (section.closing) {

return (

<div

ref={ref}

className="flex flex-col items-center py-14 text-center sm:py-20"

>

<motion.p

style={{

color: "#6b8e3a",

fontSize: fontSize,

fontFamily: "var(--font-bakso), cursive",

fontStyle: "italic",

lineHeight: 1.5,

letterSpacing: "0.01em",

}}

initial={{ opacity: 0, y: 30, scale: 0.94 }}

animate={

isInView

? { opacity: 1, y: 0, scale: 1 }

: { opacity: 0, y: 30, scale: 0.94 }

}

transition={{

duration: 1.6,

ease: [0.16, 1, 0.3, 1],

delay: 0.1,

}}

>

{section.text}

</motion.p>

{/* Soft glow underline */}

<motion.div

style={{

marginTop: "0.6rem",

height: "2px",

borderRadius: "999px",

background: "linear-gradient(90deg, transparent, #a8c46a, transparent)",

}}

initial={{ scaleX: 0, opacity: 0 }}

animate={

isInView

? { scaleX: 1, opacity: 0.7 }

: { scaleX: 0, opacity: 0 }

}

transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}

className="w-48 sm:w-64"

/>

</div>

);

}

return (

<div

ref={ref}

className="flex flex-col items-center py-10 text-center sm:py-14"

>

<motion.p

style={{

color: section.accent ? "#6b8e3a" : "#9e823c",

fontSize: fontSize,

fontFamily: "var(--font-bakso), cursive",

fontStyle: section.accent ? "italic" : "normal",

lineHeight: 1.5,

}}

initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}

animate={

isInView

? { opacity: 1, y: 0, filter: "blur(0px)" }

: { opacity: 0, y: 28, filter: "blur(4px)" }

}

transition={{

duration: 1.1,

ease: [0.16, 1, 0.3, 1],

delay: index * 0.015,

}}

>

{section.text}

</motion.p>

{section.sub && (

<motion.p

className="mt-2"

style={{

color: section.accent ? "#7aa03e" : "#b8a060",

fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)",

fontFamily: "var(--font-bakso), cursive",

letterSpacing: "0.03em",

lineHeight: 1.6,

}}

initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}

animate={

isInView

? { opacity: 1, y: 0, filter: "blur(0px)" }

: { opacity: 0, y: 14, filter: "blur(3px)" }

}

transition={{

duration: 1.1,

ease: [0.16, 1, 0.3, 1],

delay: 0.28 + index * 0.015,

}}

>

{section.sub}

</motion.p>

)}

</div>

);

}

/* ─── "Be Civil" with hand-drawn brush stroke underline ─── */

function BeCivilWord({ isInView }: { isInView: boolean }) {

/* total approximate length of the brush stroke path */

const strokeLen = 220;

return (

<motion.span

className="relative inline-flex flex-col items-center"

style={{

color: "#6b8e3a",

fontSize: "clamp(1.8rem, 5.5vw, 3.4rem)",

fontFamily: "var(--font-bakso), cursive",

fontStyle: "italic",

lineHeight: 1.3,

letterSpacing: "0.02em",

paddingBottom: "1.1em",

}}

initial={{ opacity: 0, y: 32, scale: 0.92, filter: "blur(6px)" }}

animate={

isInView

? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }

: { opacity: 0, y: 32, scale: 0.92, filter: "blur(6px)" }

}

transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}

>

<span className="relative inline-block">

Be Civil

{/* Hand-drawn brush stroke underline — two passes for depth */}

<svg

aria-hidden="true"

className="absolute pointer-events-none"

style={{

bottom: "-0.45em",

left: "-6%",

width: "112%",

height: "0.7em",

overflow: "hidden",

}}

viewBox="0 0 220 18"

preserveAspectRatio="none"

fill="none"

>

<defs>

<linearGradient id="brushGrad" x1="0%" y1="0%" x2="100%" y2="0%">

<stop offset="0%" stopColor="#c66251" stopOpacity="0.85" />

<stop offset="40%" stopColor="#c4943d" stopOpacity="0.9" />

<stop offset="75%" stopColor="#7aa03e" stopOpacity="0.85" />

<stop offset="100%" stopColor="#779da5" stopOpacity="0.7" />

</linearGradient>

<linearGradient id="brushGrad2" x1="0%" y1="0%" x2="100%" y2="0%">

<stop offset="0%" stopColor="#c4943d" stopOpacity="0.5" />

<stop offset="50%" stopColor="#6b8e3a" stopOpacity="0.6" />

<stop offset="100%" stopColor="#c66251" stopOpacity="0.4" />

</linearGradient>

</defs>

{/* Primary brush stroke — thick, slightly wobbly */}

<path

d="M4 10 C18 6, 40 13, 65 9 C90 5, 115 12, 140 8 C165 4, 188 11, 216 8"

stroke="url(#brushGrad)"

strokeWidth="4.5"

strokeLinecap="round"

strokeLinejoin="round"

style={{

strokeDasharray: strokeLen,

strokeDashoffset: isInView ? 0 : strokeLen,

transition: `stroke-dashoffset 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s`,

opacity: isInView ? 1 : 0,

}}

/>

{/* Second pass — thinner, offset slightly for hand-drawn texture */}

<path

d="M6 13 C22 9, 44 15, 68 11 C93 7, 118 14, 143 10 C167 6, 190 13, 214 11"

stroke="url(#brushGrad2)"

strokeWidth="2.2"

strokeLinecap="round"

style={{

strokeDasharray: strokeLen,

strokeDashoffset: isInView ? 0 : strokeLen,

transition: `stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.6s`,

opacity: isInView ? 0.65 : 0,

}}

/>

{/* Tiny accent flick at the end — like a real brush lift */}

<path

d="M210 8 C213 5, 217 4, 218 6"

stroke="url(#brushGrad)"

strokeWidth="2"

strokeLinecap="round"

style={{

strokeDasharray: 12,

strokeDashoffset: isInView ? 0 : 12,

transition: `stroke-dashoffset 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.4s`,

opacity: isInView ? 0.7 : 0,

}}

/>

</svg>

</span>

</motion.span>

);

}

/* ─── journey map section ─── */

function JourneyMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });

  return (
    <section
      ref={ref}
      className="relative mx-auto w-full max-w-xl px-4 sm:px-6 pt-4 pb-44"
    >
      {/* Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          style={{
            color: "#c4b88a",
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "var(--font-bakso), cursive",
          }}
        >
          ✦ a gentle map ✦
        </p>
        <h2
          style={{
            color: "#9e823c",
            fontSize: "clamp(1.25rem, 4vw, 1.9rem)",
            fontFamily: "var(--font-bakso), cursive",
            marginTop: "0.4rem",
            marginBottom: "0.3rem",
            letterSpacing: "0.02em",
          }}
        >
          four steps on the path
        </h2>
        <p
          style={{
            color: "#b8a060",
            fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
            fontFamily: "var(--font-bakso), cursive",
            letterSpacing: "0.04em",
            opacity: 0.8,
          }}
        >
          not rules, just a quiet direction
        </p>
      </motion.div>

      {/* Map container — padding-bottom keeps the aspect ratio of the SVG viewBox */}
      <div
        className="relative w-full"
        style={{ paddingBottom: `${(VBOX_H / VBOX_W) * 100}%` }}
      >
        {/* SVG decorative layer */}
        <svg
          viewBox={`0 0 ${VBOX_W} ${VBOX_H}`}
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="jGrad"
              x1="180"
              y1="20"
              x2="290"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c4943d" stopOpacity="0.7" />
              <stop offset="33%" stopColor="#4a9078" stopOpacity="0.75" />
              <stop offset="66%" stopColor="#a05060" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6b8e3a" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Wide soft ghost path — gives a subtle road feel */}
          <path
            d={JOURNEY_D}
            stroke="rgba(175,125,80,0.07)"
            strokeWidth="38"
            strokeLinecap="round"
          />

          {/* Dashed center line */}
          <path
            d={JOURNEY_D}
            stroke="rgba(175,125,80,0.13)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="6 10"
          />

          {/* Animated draw path */}
          <path
            d={JOURNEY_D}
            stroke="url(#jGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={PATH_LEN}
            strokeDashoffset={inView ? 0 : PATH_LEN}
            style={{
              transition: `stroke-dashoffset 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s`,
            }}
          />

          {/* Start beacon */}
          <circle
            cx={180}
            cy={20}
            r={4}
            fill="#c4b88a"
            opacity={inView ? 0.7 : 0}
            style={{ transition: "opacity 0.5s 0.2s" }}
          />
          <circle
            cx={180}
            cy={20}
            r={9}
            stroke="#c4b88a"
            strokeWidth="1"
            opacity={inView ? 0.25 : 0}
            style={{ transition: "opacity 0.5s 0.2s" }}
          />

          {/* Nodes */}
          {kindnessSteps.map((step, i) => (
            <g key={i}>
              {/* Glow halo */}
              <circle
                cx={step.node[0]}
                cy={step.node[1]}
                r={22}
                fill={`${step.accent}18`}
                opacity={inView ? 1 : 0}
                style={{ transition: `opacity 0.5s ${0.55 + i * 0.45}s` }}
              />
              {/* Main circle */}
              <circle
                cx={step.node[0]}
                cy={step.node[1]}
                r={14}
                fill="rgba(255,248,242,0.95)"
                stroke={step.accent}
                strokeWidth="1.5"
                opacity={inView ? 1 : 0}
                style={{ transition: `opacity 0.5s ${0.7 + i * 0.45}s` }}
              />
              {/* Step number */}
              <text
                x={step.node[0]}
                y={step.node[1] + 4}
                textAnchor="middle"
                fill={step.accent}
                fontSize="8.5"
                fontFamily="var(--font-bakso), cursive"
                opacity={inView ? 1 : 0}
                style={{ transition: `opacity 0.4s ${0.95 + i * 0.45}s` }}
              >
                {step.num}
              </text>
              {/* Short dot-dash connector toward the card */}
              <line
                x1={step.side === "right" ? step.node[0] + 14 : step.node[0] - 14}
                y1={step.node[1]}
                x2={step.side === "right" ? step.node[0] + 30 : step.node[0] - 30}
                y2={step.node[1]}
                stroke={step.accent}
                strokeWidth="1"
                strokeDasharray="2 3"
                strokeLinecap="round"
                opacity={inView ? 0.65 : 0}
                style={{ transition: `opacity 0.4s ${1.05 + i * 0.45}s` }}
              />
            </g>
          ))}
        </svg>

        {/* HTML Cards — absolutely positioned alongside each node */}
        {kindnessSteps.map((step, i) => {
          const [nx, ny] = step.node;
          const isRight = step.side === "right";
          const leftPct = isRight
            ? `${((nx + 34) / VBOX_W) * 100}%`
            : `3%`;
          const widthPct = isRight
            ? `${((VBOX_W - nx - 42) / VBOX_W) * 100}%`
            : `${((nx - 38 - VBOX_W * 0.03) / VBOX_W) * 100}%`;
          const topPct = `${((ny - 28) / VBOX_H) * 100}%`;

          return (
            <motion.div
              key={i}
              className="absolute rounded-2xl"
              style={{
                left: leftPct,
                top: topPct,
                width: widthPct,
                background: "rgba(255,248,242,0.9)",
                border: `1px solid ${step.accent}38`,
                padding:
                  "clamp(0.4rem, 1vw, 0.65rem) clamp(0.5rem, 1.2vw, 0.8rem)",
                boxShadow: `0 2px 12px ${step.accent}12`,
              }}
              initial={{ opacity: 0, x: isRight ? 16 : -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 1.1 + i * 0.45,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p
                style={{
                  color: step.accent,
                  fontSize: "clamp(0.58rem, 1.4vw, 0.78rem)",
                  fontFamily: "var(--font-bakso), cursive",
                  letterSpacing: "0.08em",
                  marginBottom: "0.2em",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  color: "#7a7060",
                  fontSize: "clamp(0.52rem, 1.2vw, 0.68rem)",
                  fontFamily: "var(--font-gamja), cursive",
                  lineHeight: 1.55,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
