"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Unused imports: HiHeart, HiSparkles, HiSun, HiMoon from react-icons/hi2
import { CiGlobe } from "react-icons/ci";

// Journey steps
const journeySteps = [
  { title: "Enter", description: "Open the doors to begin" },
  { title: "Explore", description: "Choose your path" },
  { title: "Feel", description: "Let the warmth in" },
  { title: "Rest", description: "Stay as long as you need" },
];

// Fixed particle values to avoid hydration mismatch
const particles = [
  { width: 6, height: 6, left: "15%", top: "20%", color: "#e6cfa7", delay: 0 },
  {
    width: 10,
    height: 10,
    left: "30%",
    top: "45%",
    color: "#b7d3c6",
    delay: 0.3,
  },
  {
    width: 8,
    height: 8,
    left: "45%",
    top: "70%",
    color: "#e7b7b7",
    delay: 0.6,
  },
  {
    width: 7,
    height: 7,
    left: "60%",
    top: "20%",
    color: "#e6cfa7",
    delay: 0.9,
  },
  {
    width: 9,
    height: 9,
    left: "75%",
    top: "45%",
    color: "#b7d3c6",
    delay: 1.2,
  },
  {
    width: 6,
    height: 6,
    left: "90%",
    top: "70%",
    color: "#e7b7b7",
    delay: 1.5,
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#fff8f2",
        fontFamily: "var(--font-gamja), cursive",
      }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid texture to match landing page */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern id="aboutSmallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(175,125,80,0.065)" strokeWidth="0.5" />
            </pattern>
            <pattern id="aboutLargeGrid" width="150" height="150" patternUnits="userSpaceOnUse">
              <rect width="150" height="150" fill="url(#aboutSmallGrid)" />
              <path d="M 150 0 L 0 0 0 150" fill="none" stroke="rgba(175,125,80,0.15)" strokeWidth="0.8" />
              <line x1="73" y1="75" x2="77" y2="75" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
              <line x1="75" y1="73" x2="75" y2="77" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutLargeGrid)" />
        </svg>
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(230,207,167,0.4) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(183,211,198,0.3) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(231,183,183,0.25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              background: particle.color,
              left: particle.left,
              top: particle.top,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Back button */}
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{
              background: "rgba(230,207,167,0.4)",
              border: "1px solid rgba(158,130,60,0.3)",
              color: "#9e823c",
              fontFamily: "var(--font-bakso), cursive",
              fontSize: "0.9rem",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CiGlobe className="w-4 h-4" />
            <span>a little corner of the internet</span>
          </motion.div>

          <motion.h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-bakso), cursive",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: "#9e823c",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(158,130,60,0.15)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            About This
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e6cfa7 0%, #b7d3c6 50%, #e7b7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gentle Space
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-gamja), cursive",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "#b8a060",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            A space for when you feel overwhelmed, uncomfortable, or just need a
            moment of warmth.
          </motion.p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="relative z-10 px-6 py-20 flex justify-center items-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="w-full mb-12">
            <h2
              className="text-left"
              style={{
                fontFamily: "var(--font-bakso), cursive",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#9e823c",
              }}
            >
              Why This Exists
            </h2>
          </div>

          {/* Two Column Layout - Properly Centered */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
            {/* Text Content */}
            <div className="flex-1 text-left flex flex-col items-start">
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#6b6b5a",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Rooted in my own experience and personal moments in navigating{" "}
                <span style={{ color: "#b89c3a", fontWeight: 600 }}>
                  discomfort
                </span>{" "}
                or any{" "}
                <span style={{ color: "#a94442", fontWeight: 600 }}>
                  unease
                </span>
                . I&apos;ve noticed that we humans act in certain situations and
                would sometimes feel really{" "}
                <span style={{ color: "#a94442", fontWeight: 600 }}>
                  uncomfortable
                </span>
                , and I wanted to create a bridge back to peace, even though it
                may seem like a nice thing to do. It is also difficult to
                realize that we cannot fix, help, guide, or do anything for
                everyone,{" "}
                <span style={{ color: "#2d6a4f", fontWeight: 600 }}>
                  but at least someone will
                </span>
                , and that someone finding their way back to gentleness is my only{" "}
                <span style={{ color: "#9e823c", fontWeight: 700 }}>hope</span>.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#6b6b5a",
                  lineHeight: 1.8,
                }}
              >
                It&apos;s the reason why I am inspired to make this site that acts as
                a safe space for anybody who feels{" "}
                <span style={{ color: "#a94442", fontWeight: 600 }}>
                  uncomfortable
                </span>{" "}
                or overwhelmed. We, humans have all been on both sides of that
                heavy feeling. Sometimes we are the ones feeling the{" "}
                <span style={{ color: "#a94442", fontWeight: 600 }}>
                  unease
                </span>
                , and sometimes we are the reason others feel it. This space exists
                to bridge that gap. Whether the{" "}
                <span style={{ color: "#b89c3a", fontWeight: 600 }}>
                  discomfort
                </span>{" "}
                comes from a specific person, a difficult situation, or just the
                weight of the day, I{" "}
                <span style={{ color: "#9e823c", fontWeight: 700 }}>hope</span>{" "}
                these pages offer a moment of relief that we can always choose
                to return to a place of gentleness.
              </p>
            </div>

            {/* Photo Placeholder */}
            <div className="shrink-0 flex justify-center items-center">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "280px",
                  height: "280px",
                  background:
                    "linear-gradient(145deg, #e6cfa7 0%, #b7d3c6 50%, #e7b7b7 100%)",
                  boxShadow: "0 20px 60px rgba(158,130,60,0.25)",
                }}
              >
                <Image
                  src="/assets/images/update.jpg"
                  alt="About update"
                  className="object-cover w-full h-full"
                  style={{ borderRadius: "1.5rem" }}
                  width={280}
                  height={280}
                />
                <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      {/* Extra space between sections */}
      <div className="h-50" />
      <section className="relative z-10 px-6 py-20 flex justify-center items-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              style={{
                fontFamily: "var(--font-bakso), cursive",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#9e823c",
                marginBottom: "0.5rem",
              }}
            >
              Your Journey Will be like this.
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#b8a060",
              }}
            >
              Four simple steps to finding comfort
            </p>
          </div>

          {/* Timeline Zigzag Style */}
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, #e6cfa7, #b7d3c6, #e7b7b7, #c4b06d)",
              }}
            />
            <div className="space-y-16 w-full">
              {journeySteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const colors = ["#e6cfa7", "#b7d3c6", "#e7b7b7", "#c4b06d"];
                return (
                  <div
                    key={step.title}
                    className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    {/* Card */}
                    <div
                      className={`pt-6 pb-6 px-4 flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} w-1/2 min-w-[260px]`}
                      style={{ minWidth: 260 }}
                    >
                      <div
                        className="max-w-sm w-full rounded-2xl p-6 text-center mx-auto"
                        style={{
                          background: "rgba(255,251,230,0.6)",
                          border: "1px solid rgba(158,130,60,0.2)",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-bakso), cursive",
                            fontSize: "1.3rem",
                            color: "#9e823c",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#6b6b5a",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                      {/* Dot */}
                      <div
                        className="z-10"
                        style={{
                          margin: isLeft ? "0 0 0 24px" : "0 24px 0 0",
                          alignSelf: "center",
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full border-4"
                          style={{
                            background: "#f8ffd8",
                            borderColor: colors[index],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Extra space before footer */}
      <div className="h-24" />

      {/* Simple Footer */}
      <footer className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4"></div>
        </div>
      </footer>
    </div>
  );
}
