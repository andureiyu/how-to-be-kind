"use client";

import { useRef, useState, useEffect } from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";

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

];

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

background: "#f8ffd8",

fontFamily: "var(--font-gamja), cursive",

}}

>

{/* Gentle gradient overlay at top */}

<div

className="pointer-events-none fixed inset-x-0 top-0 z-10 h-24"

style={{

background:

"linear-gradient(to bottom, #f8ffd8 20%, transparent 100%)",

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

background: "linear-gradient(to top, #f8ffd8 20%, transparent 100%)",

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
