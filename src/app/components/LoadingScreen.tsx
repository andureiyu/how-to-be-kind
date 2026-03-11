"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════
   ASL HAND SIGN SVGs — B, E, K, I, N, D
   Modelled after the reference image (pippi post wallpaper style):
   
   B — flat open hand, 4 fingers up together, thumb tucked across palm
   E — all fingers bent/curled tightly, thumb tucked under (tight fist-like)
   K — peace/V sign: index + middle spread up, other fingers curled, thumb out
   I — index finger pointing straight up, fist closed (number 1 hand)
   N — flat open hand facing viewer, fingers together, slight curve
   D — index up, thumb + middle form circle, ring + pinky curled
═══════════════════════════════════════════════════════════════════ */

const SKIN   = "#f2d5a8";
const SHADOW = "#ddb87a";
const DARK   = "#c49a5a";
const NAIL   = "#fff5e8";
const LINE   = "#b8843a";

/* ── ASL B ──────────────────────────────────────────────────────────
   Flat open hand — 4 fingers extended straight up, held together.
   Thumb tucked across the front of the palm.
   Scaled to fill full 0 0 70 90 viewBox for size consistency.
─────────────────────────────────────────────────────────────────── */
function HandB() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Pinky finger (leftmost) ── */}
      <path d="M8 52 C8 38, 8 26, 9 16 C10 9, 13 6, 17 6 C21 6, 23 9, 23 16 L23 52 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="16" cy="8" rx="3.5" ry="2.5" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* ── Ring finger ── */}
      <path d="M23 52 L23 14 C23 7, 26 4, 30 4 C34 4, 36 7, 36 14 L36 52"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="30" cy="6" rx="3.5" ry="2.5" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* ── Middle finger (tallest) ── */}
      <path d="M36 52 L36 10 C36 3, 39 1, 43 1 C47 1, 49 3, 49 10 L49 52"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="43" cy="3" rx="3.5" ry="2.5" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* ── Index finger ── */}
      <path d="M49 52 L49 14 C49 7, 52 4, 56 4 C60 4, 62 7, 62 14 L62 52"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="56" cy="6" rx="3.5" ry="2.5" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* ── Palm base / wrist ── */}
      <path d="M8 52 C8 64, 10 72, 16 76 L56 76 C62 76, 64 68, 64 60 L64 52 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* ── Thumb tucked across palm ── */}
      <path d="M8 56 C4 54, 3 50, 4 47 C5 44, 8 43, 11 44 L28 50 C30 51, 31 53, 30 55 C29 57, 27 57.5, 25 57 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="5.5" cy="48" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(-10 5.5 48)"/>
      {/* ── Finger separation lines ── */}
      <line x1="23" y1="16" x2="23" y2="52" stroke={LINE} strokeWidth="0.8" opacity="0.4"/>
      <line x1="36" y1="12" x2="36" y2="52" stroke={LINE} strokeWidth="0.8" opacity="0.4"/>
      <line x1="49" y1="14" x2="49" y2="52" stroke={LINE} strokeWidth="0.8" opacity="0.4"/>
      {/* ── Knuckle crease ── */}
      <path d="M10 52 Q35 50 62 52" stroke={SHADOW} strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      {/* ── Palm crease lines ── */}
      <path d="M10 62 Q36 60 62 62" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M10 70 Q36 68 62 70" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── ASL E ──────────────────────────────────────────────────────────
   All fingers bent/curled tightly down. Thumb tucked under.
   Detailed: visible knuckle bumps, fingertip nails, crease lines,
   thumb nail, and palm shadow lines.
─────────────────────────────────────────────────────────────────── */
function HandE() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Palm body ── */}
      <path d="M8 32 C8 30, 10 28, 14 28 L60 28 C64 28, 66 30, 66 32 L66 62 C66 68, 62 72, 56 74 L18 74 C12 74, 8 70, 8 64 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>

      {/* ── Pinky — bent, knuckle visible ── */}
      <path d="M10 28 C10 18, 12 11, 17 9 C22 7, 25 9, 25 15 C25 21, 23 26, 20 29 C17 31, 12 31, 10 28 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Pinky nail at bent tip */}
      <ellipse cx="17" cy="10.5" rx="2.8" ry="2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* Pinky knuckle crease */}
      <path d="M11 22 Q17 24 23 22" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* ── Ring — bent ── */}
      <path d="M24 28 C24 17, 26 10, 31 8 C36 6, 39 8, 39 14 C39 20, 37 25, 34 28 C31 30, 26 30, 24 28 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="31" cy="9.5" rx="2.8" ry="2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M25 21 Q31 23 37 21" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* ── Middle — bent, tallest knuckle ── */}
      <path d="M38 28 C38 16, 40 9, 45 7 C50 5, 53 7, 53 13 C53 19, 51 24, 48 28 C45 30, 40 30, 38 28 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="45" cy="8.5" rx="2.8" ry="2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M39 20 Q45 22 51 20" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* ── Index — bent ── */}
      <path d="M52 28 C52 17, 54 10, 59 8 C64 6, 66 9, 66 15 C66 21, 64 26, 61 28 C58 30, 54 30, 52 28 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="59" cy="9.5" rx="2.8" ry="2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M53 21 Q59 23 65 21" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* ── Fingertip crease bar — shows all bent tips resting together ── */}
      <path d="M10 27 C16 31, 24 32, 32 32 C40 32, 48 32, 56 31 C60 30, 64 29, 66 27"
        stroke={SHADOW} strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.7"/>

      {/* ── Thumb tucked under, visible on left ── */}
      <path d="M8 50 C4 48, 3 44, 4 41 C5 38, 8 37, 11 38 L24 43 C26 44, 27 46, 26 48 C25 50, 23 50.5, 21 50 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"/>
      <ellipse cx="5.5" cy="42" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(-15 5.5 42)"/>
      {/* Thumb crease */}
      <path d="M9 46 Q16 48 22 46" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>

      {/* ── Palm crease lines ── */}
      <path d="M10 50 Q37 48 64 50" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M10 60 Q37 58 64 60" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M12 68 Q37 66 62 68" stroke={SHADOW} strokeWidth="0.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── ASL K ──────────────────────────────────────────────────────────
   Classic peace sign / V sign.
   Index finger straight up on the left.
   Middle finger angled to the right.
   Both start close at the base and spread apart at the top.
   Thumb, ring, pinky curled into palm.
─────────────────────────────────────────────────────────────────── */
function HandK() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Palm / wrist ── */}
      <path
        d="M16 50 C16 44, 17 40, 18 38 L50 38 C51 40, 52 44, 52 50 L52 72 C52 78, 48 82, 34 82 C20 82, 16 78, 16 72 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── Index finger — straight up, slightly left of center ── */}
      <path
        d="M22 38 C22 28, 22 18, 22 10 C22 5, 24 3, 27 3 C30 3, 32 5, 32 10 C32 18, 31 28, 30 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="27" cy="5" rx="3.2" ry="2.3" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M23 20 Q27 19 31 20" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M23 30 Q27 29 31 30" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Middle finger — angled right, spreads away from index ── */}
      <path
        d="M32 38 C33 28, 36 18, 40 10 C42 5, 45 3, 48 4 C51 5, 52 8, 51 13 C50 19, 47 28, 44 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="48" cy="5.5" rx="3" ry="2.2" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(10 48 5.5)"/>
      <path d="M34 24 Q39 23 45 25" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M33 32 Q38 31 44 33" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Ring — curled ── */}
      <path
        d="M42 40 C42 35, 44 31, 47 29 C50 27, 52 29, 52 32 C52 36, 50 39, 47 41 C45 42, 42 41, 42 40 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Pinky — curled ── */}
      <path
        d="M46 44 C46 40, 48 37, 50 36 C52 35, 54 36, 54 39 C54 42, 52 45, 50 46 C48 47, 46 46, 46 44 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Thumb — tucked, visible on left ── */}
      <path
        d="M16 56 C12 54, 11 50, 12 47 C13 44, 16 43, 19 44 L28 48 C30 49, 31 51, 30 53 C29 55, 27 55.5, 25 55 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="13.5" cy="48" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(-15 13.5 48)"/>
      {/* ── Palm crease ── */}
      <path d="M18 58 Q34 56 50 58" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M18 66 Q34 64 50 66" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── ASL I ──────────────────────────────────────────────────────────
   INDEX finger pointing straight up. Closed fist.
   Thumb rests over the curled fingers on the left side.
   Matches reference image 2: dark fist, one finger (index) up.
─────────────────────────────────────────────────────────────────── */
function HandI() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Fist / palm body ── */}
      <path
        d="M14 46 C14 40, 15 36, 16 34 L52 34 C53 36, 54 40, 54 46 L54 70 C54 76, 50 80, 34 80 C18 80, 14 76, 14 70 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── Middle — curled, knuckle bump ── */}
      <path
        d="M38 34 C38 26, 40 21, 43 19 C46 17, 49 19, 50 22 C51 26, 50 30, 48 34 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── Ring — curled, knuckle bump ── */}
      <path
        d="M28 34 C28 26, 30 21, 33 19 C36 17, 39 19, 40 22 C41 26, 40 30, 38 34 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── Pinky — curled, knuckle bump ── */}
      <path
        d="M18 34 C18 27, 20 22, 23 20 C26 18, 29 20, 30 23 C31 27, 30 31, 28 34 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* Knuckle crease across fist */}
      <path d="M16 34 Q22 31 28 33 Q34 31 40 33 Q46 31 52 34" stroke={SHADOW} strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      {/* ── INDEX finger — straight up, centered-right ── */}
      <path
        d="M38 34 C38 24, 39 16, 40 10 C41 5, 43 3, 46 3 C49 3, 51 5, 51 10 C51 16, 50 24, 49 34 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="45" cy="5" rx="3.2" ry="2.3" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M39 20 Q44 19 50 20" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M39 28 Q44 27 50 28" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Thumb — resting over curled fingers on the left ── */}
      <path
        d="M14 52 C10 50, 9 46, 10 43 C11 40, 14 39, 17 40 L28 44 C30 45, 31 47, 30 49 C29 51, 27 51.5, 25 51 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="11.5" cy="43.5" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(-15 11.5 43.5)"/>
      {/* ── Palm crease ── */}
      <path d="M16 58 Q34 56 52 58" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M16 66 Q34 64 52 66" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── ASL N ──────────────────────────────────────────────────────────
   Wrist/palm at the TOP, narrower width.
   Index and middle fingers hang DOWN on the right side.
   Ring and pinky curled on the left. Thumb tucked left.
   Palm is thinner — not too wide.
─────────────────────────────────────────────────────────────────── */
function HandN() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Wrist / palm at top — narrower ── */}
      <path
        d="M12 4 C12 2, 14 1, 17 1 L53 1 C56 1, 58 2, 58 4 L58 26 C58 32, 56 36, 54 38 L16 38 C14 36, 12 32, 12 26 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── Pinky — curled, far left ── */}
      <path
        d="M13 38 C13 33, 15 28, 18 26 C21 24, 24 26, 25 29 C26 33, 25 37, 22 39 C20 40, 15 40, 13 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Ring — curled, left of center ── */}
      <path
        d="M23 38 C23 33, 25 28, 28 26 C31 24, 34 26, 35 29 C36 33, 35 37, 32 39 C30 40, 25 40, 23 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Index finger — hanging DOWN, right side ── */}
      <path
        d="M38 38 C38 48, 37 58, 37 66 C37 72, 38 76, 41 76 C44 76, 45 72, 45 66 C45 58, 44 48, 43 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="41" cy="74" rx="3" ry="2.2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M38 52 Q41 53 44 52" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M38 62 Q41 63 44 62" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Middle finger — hanging DOWN, rightmost ── */}
      <path
        d="M47 38 C47 48, 47 58, 47 66 C47 72, 48 76, 51 76 C54 76, 55 72, 55 66 C55 58, 54 48, 53 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="51" cy="74" rx="3" ry="2.2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M48 52 Q51 53 54 52" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M48 62 Q51 63 54 62" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Thumb — tucked to the left ── */}
      <path
        d="M12 20 C8 18, 7 14, 8 11 C9 8, 12 7, 15 8 L22 12 C24 13, 25 15, 24 17 C23 19, 21 19.5, 19 19 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="9.5" cy="11.5" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(10 9.5 11.5)"/>
      {/* ── Knuckle crease at base of hanging fingers ── */}
      <path d="M36 38 Q46 40 55 38" stroke={SHADOW} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* ── Palm crease lines ── */}
      <path d="M14 16 Q35 14 56 16" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M14 26 Q35 24 56 26" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── ASL D ──────────────────────────────────────────────────────────
   Index finger extended straight up on the RIGHT side.
   Thumb, middle, ring, pinky form a circle/OK loop on the left.
   Matches reference image 2: index clearly on right, circle on left.
─────────────────────────────────────────────────────────────────── */
function HandD() {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* ── Palm ── */}
      <path
        d="M14 46 C14 40, 15 36, 16 34 L54 34 C55 36, 56 40, 56 46 L56 70 C56 76, 52 80, 35 80 C18 80, 14 76, 14 70 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* ── INDEX finger — straight up on the RIGHT ── */}
      <path
        d="M42 34 C42 24, 43 16, 44 10 C45 5, 48 3, 51 3 C54 3, 56 5, 56 10 C56 16, 55 24, 54 34 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="50" cy="5" rx="3.2" ry="2.3" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      <path d="M43 20 Q49 19 55 20" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <path d="M43 28 Q49 27 55 28" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* ── Middle — curled into circle ── */}
      <path
        d="M28 36 C28 28, 30 22, 33 18 C36 14, 40 14, 42 17 C44 20, 44 26, 42 30 C40 34, 36 36, 32 37 C30 37, 28 37, 28 36 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.3" strokeLinejoin="round"
      />
      <ellipse cx="39" cy="15.5" rx="2.8" ry="2" fill={NAIL} stroke={LINE} strokeWidth="0.7"/>
      {/* ── Ring — curled ── */}
      <path
        d="M22 38 C22 32, 24 27, 27 25 C30 23, 33 25, 34 28 C35 32, 34 36, 31 38 C29 39, 24 39, 22 38 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Pinky — curled ── */}
      <path
        d="M16 42 C16 37, 18 33, 21 31 C24 29, 26 31, 26 34 C26 38, 24 41, 21 43 C19 44, 16 43, 16 42 Z"
        fill={SKIN} stroke={LINE} strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* ── Thumb — arcing from bottom-left up to touch middle finger tip ── */}
      <path
        d="M14 60 C10 57, 9 53, 10 50 C11 47, 14 46, 17 47 C20 48, 24 51, 28 54 C30 56, 32 57, 34 56 C36 55, 38 53, 40 51 C42 49, 43 47, 43 45"
        fill="none" stroke={LINE} strokeWidth="1.4" strokeLinecap="round"
      />
      <path
        d="M14 60 C10 57, 9 53, 10 50 C11 47, 14 46, 17 47 L20 50 C18 53, 17 57, 18 60 Z"
        fill={SKIN} stroke="none"
      />
      <ellipse cx="11.5" cy="51" rx="2.2" ry="2.8" fill={NAIL} stroke={LINE} strokeWidth="0.7" transform="rotate(-20 11.5 51)"/>
      {/* Circle contact highlight */}
      <circle cx="42" cy="46" r="2.5" fill={SHADOW} opacity="0.5"/>
      {/* ── Palm crease ── */}
      <path d="M16 62 Q35 60 54 62" stroke={SHADOW} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M16 70 Q35 68 54 70" stroke={SHADOW} strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Sign data
═══════════════════════════════════════════════════════════════════ */
const signs = [
  { letter: "B", Component: HandB, color: "#c66251" },
  { letter: "E", Component: HandE, color: "#779da5" },
  { letter: "K", Component: HandK, color: "#c4943d" },
  { letter: "I", Component: HandI, color: "#d6a09c" },
  { letter: "N", Component: HandN, color: "#7a9e5a" },
  { letter: "D", Component: HandD, color: "#9b7ec8" },
];

/* ═══════════════════════════════════════════════════════════════════
   Loading Screen
═══════════════════════════════════════════════════════════════════ */
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
      style={{ gap: "clamp(18px, 3.5vw, 28px)" }}
    >
      {/* Hand signs row */}
      <div
        className="flex items-center"
        style={{ gap: "clamp(8px, 2vw, 16px)" }}
      >
        {signs.map(({ letter, Component, color }, i) => (
          <motion.div
            key={letter}
            className="flex flex-col items-center"
            style={{ gap: "clamp(5px, 1vw, 9px)", width: "clamp(46px, 9.5vw, 68px)", flexShrink: 0 }}
            initial={{ opacity: 0, y: 22, scale: 0.78 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.16,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Floating hand SVG — fixed aspect ratio box so all signs are same size */}
            <motion.div
              style={{
                width: "100%",
                aspectRatio: "70 / 90",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.4,
                delay: 0.9 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Component />
            </motion.div>

            {/* Letter label */}
            <span
              style={{
                color,
                fontSize: "clamp(0.65rem, 1.4vw, 0.82rem)",
                fontFamily: "var(--font-bakso), cursive",
                fontStyle: "italic",
                letterSpacing: "0.04em",
                opacity: 0.9,
                lineHeight: 1,
              }}
            >
              {letter}
            </span>
          </motion.div>
        ))}
      </div>

      {/* "loading..." text */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
        style={{
          color: "#9e823c",
          fontSize: "clamp(0.72rem, 1.8vw, 0.9rem)",
          letterSpacing: "0.2em",
          fontFamily: "var(--font-bakso), cursive",
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
