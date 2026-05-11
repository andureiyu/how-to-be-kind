"use client";

import Link from "next/link";
import Image from "next/image";

export default function CreatorPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#fff8f2",
        fontFamily: "var(--font-gamja), cursive",
      }}
    >
      {/* Static Background Layers */}
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
            <pattern id="creatorSmallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(175,125,80,0.065)" strokeWidth="0.5" />
            </pattern>
            <pattern id="creatorLargeGrid" width="150" height="150" patternUnits="userSpaceOnUse">
              <rect width="150" height="150" fill="url(#creatorSmallGrid)" />
              <path d="M 150 0 L 0 0 0 150" fill="none" stroke="rgba(175,125,80,0.15)" strokeWidth="0.8" />
              <line x1="73" y1="75" x2="77" y2="75" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
              <line x1="75" y1="73" x2="75" y2="77" stroke="rgba(175,125,80,0.3)" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#creatorLargeGrid)" />
        </svg>
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(230,207,167,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(183,211,198,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(231,183,183,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-20 cursor-pointer sm:top-7 sm:left-7"
        style={{
          color: "#9e823c",
          fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
          fontFamily: "var(--font-bakso), cursive",
          letterSpacing: "0.05em",
          textDecoration: "none",
        }}
      >
        ← back
      </Link>

      {/* Main Content - No Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl w-full flex flex-col items-center">
          {/* Author Section - Photo Left, Description Right */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 lg:gap-20 w-full">
            {/* Photo Section - Left Side - Bigger on Desktop */}
            <div
              className="flex flex-col items-center shrink-0"
            >
              {/* Placeholder 1x1 Photo - Responsive sizing - Made bigger */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(150px, 35vw, 320px)",
                  height: "clamp(150px, 35vw, 320px)",
                  background:
                    "linear-gradient(145deg, #e6cfa7 0%, #b7d3c6 50%, #e7b7b7 100%)",
                  boxShadow: "0 15px 40px rgba(158,130,60,0.2)",
                }}
              >
                <Image
                  src="/assets/images/sleepicon.jpg"
                  alt="Michael Andrei P. Ninora"
                  className="object-cover w-full h-full"
                  style={{ borderRadius: "1.5rem" }}
                  width={320}
                  height={320}
                />
                <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-white/30" />
              </div>

              {/* Developed by Name Below Photo */}
              <p
                className="mt-5 sm:mt-6 text-center"
                style={{
                  fontFamily: "var(--font-bakso), cursive",
                  fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
                  color: "#9e823c",
                  letterSpacing: "0.08em",
                }}
              >
                developed by
              </p>
              <p
                className="text-center px-2"
                style={{
                  fontFamily: "var(--font-gamja), cursive",
                  fontSize: "clamp(0.85rem, 2.5vw, 1.3rem)",
                  color: "#6b6b5a",
                  lineHeight: 1.5,
                }}
              >
                Michael Andrei P. Ninora
              </p>
            </div>

            {/* Description Section - Right Side - Bigger on Desktop */}
            <div
              className="flex-1 text-left max-w-xl lg:max-w-2xl w-full px-2 sm:px-0"
            >
              <h1
                className="text-center sm:text-left"
                style={{
                  fontFamily: "var(--font-bakso), cursive",
                  fontSize: "clamp(1.4rem, 5vw, 2.8rem)",
                  color: "#9e823c",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  textShadow: "0 2px 20px rgba(158,130,60,0.15)",
                }}
              >
                Sino Gumawa Nito?
              </h1>

              <div
                className="text-center sm:text-left"
                style={{
                  fontSize: "clamp(0.85rem, 2vw, 1.35rem)",
                  color: "#6b6b5a",
                  lineHeight: 1.85,
                }}
              >
                <p style={{ marginBottom: "1.25rem" }}>
                  Hey! I&apos;m Michael Andrei, the person behind this little corner of the internet.
                  I built{" "}
                  <span style={{ color: "#9e823c", fontWeight: 600 }}>How to Be Kind</span>{" "}
                  because I genuinely believe that kindness matters, especially in the moments when it feels hardest to give or receive.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  This site is my small, sincere attempt at creating something{" "}
                  <span style={{ color: "#2d6a4f", fontWeight: 600 }}>gentle</span>{" "}
                  in a world that can sometimes feel overwhelming. I hope that whenever you find yourself here, you leave feeling just a little bit{" "}
                  <span style={{ color: "#b89c3a", fontWeight: 600 }}>lighter</span>.
                </p>
              </div>

              {/* Decorative Elements */}
              <div
                className="flex items-center justify-center sm:justify-start gap-3 mt-7 sm:mt-10"
              >
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #e6cfa7, #b7d3c6)",
                    borderRadius: "1px",
                  }}
                />
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#e6cfa7",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #b7d3c6, #e7b7b7)",
                    borderRadius: "1px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20 sm:h-28" />

      {/* Simple Footer */}
      <footer className="relative z-10 px-6 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4"></div>
        </div>
      </footer>
    </div>
  );
}
