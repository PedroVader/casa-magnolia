"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section id="nosotras" className="relative py-28 md:py-36 overflow-hidden">
      {/* Striped background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/pattern-stripes.png)",
          backgroundSize: "33.33% 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-lola-manuela.jpg"
                alt="Lola y Manuela, fundadoras de Casa Magnolia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text content — golden frame like a painting */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Outer golden frame */}
            <div
              className="relative p-3 md:p-4"
              style={{
                background:
                  "linear-gradient(145deg, #D4A84B 0%, #B8860B 15%, #E8C96A 30%, #C9A96E 50%, #B8860B 70%, #E8C96A 85%, #D4A84B 100%)",
                boxShadow:
                  "0 6px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)",
              }}
            >
              {/* Inner frame ridge */}
              <div
                className="p-1.5 md:p-2"
                style={{
                  background:
                    "linear-gradient(145deg, #8B6914 0%, #C9A96E 40%, #8B6914 60%, #C9A96E 100%)",
                  boxShadow:
                    "inset 0 2px 4px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(255,255,255,0.15)",
                }}
              >
                {/* Inner gold lip */}
                <div
                  className="p-1 md:p-1.5"
                  style={{
                    background:
                      "linear-gradient(145deg, #E8C96A, #D4A84B, #B8860B, #D4A84B)",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4)",
                  }}
                >
                  {/* Canvas — cream background with warm painted feel */}
                  <div
                    className="relative bg-magnolia-cream p-8 md:p-10 lg:p-12 overflow-hidden"
                    style={{
                      boxShadow: "inset 0 0 30px rgba(139,99,86,0.08)",
                    }}
                  >
                    {/* Subtle warm vignette inside the frame */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 60%, rgba(139,99,86,0.06) 100%)",
                      }}
                    />

                    {/* ── Painted flowers decoration ── */}

                    {/* Large peony — top right */}
                    <svg
                      className="absolute -top-6 -right-4 w-48 md:w-56 opacity-[0.18] pointer-events-none"
                      viewBox="0 0 200 200"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g transform="translate(100,100)">
                        {/* Outer petals */}
                        <ellipse cx="0" cy="-38" rx="28" ry="42" fill="#D4908E" transform="rotate(0)" />
                        <ellipse cx="0" cy="-38" rx="26" ry="40" fill="#E8C4C4" transform="rotate(45)" />
                        <ellipse cx="0" cy="-38" rx="30" ry="38" fill="#D4908E" transform="rotate(90)" />
                        <ellipse cx="0" cy="-38" rx="24" ry="42" fill="#E8C4C4" transform="rotate(135)" />
                        <ellipse cx="0" cy="-38" rx="28" ry="40" fill="#D4908E" transform="rotate(180)" />
                        <ellipse cx="0" cy="-38" rx="26" ry="38" fill="#E8C4C4" transform="rotate(225)" />
                        <ellipse cx="0" cy="-38" rx="30" ry="42" fill="#D4908E" transform="rotate(270)" />
                        <ellipse cx="0" cy="-38" rx="24" ry="40" fill="#E8C4C4" transform="rotate(315)" />
                        {/* Inner petals */}
                        <ellipse cx="0" cy="-22" rx="16" ry="26" fill="#E8C4C4" transform="rotate(20)" />
                        <ellipse cx="0" cy="-22" rx="14" ry="24" fill="#D4B5A0" transform="rotate(80)" />
                        <ellipse cx="0" cy="-22" rx="16" ry="24" fill="#E8C4C4" transform="rotate(140)" />
                        <ellipse cx="0" cy="-22" rx="14" ry="26" fill="#D4B5A0" transform="rotate(200)" />
                        <ellipse cx="0" cy="-22" rx="16" ry="24" fill="#E8C4C4" transform="rotate(260)" />
                        <ellipse cx="0" cy="-22" rx="14" ry="24" fill="#D4B5A0" transform="rotate(320)" />
                        {/* Center */}
                        <circle cx="0" cy="0" r="10" fill="#C9A96E" />
                      </g>
                    </svg>

                    {/* Leaves + stem — bottom left */}
                    <svg
                      className="absolute -bottom-4 -left-2 w-40 md:w-48 opacity-[0.15] pointer-events-none"
                      viewBox="0 0 180 180"
                      fill="none"
                      aria-hidden="true"
                    >
                      {/* Curved stem */}
                      <path
                        d="M20 170 Q40 120, 70 90 Q100 60, 130 30"
                        stroke="#2C3E28"
                        strokeWidth="2"
                        fill="none"
                      />
                      {/* Leaf 1 */}
                      <path
                        d="M70 90 Q50 70, 35 50 Q55 55, 70 90Z"
                        fill="#5A7A50"
                      />
                      <path
                        d="M70 90 Q52 72, 52 68"
                        stroke="#2C3E28"
                        strokeWidth="0.8"
                        fill="none"
                      />
                      {/* Leaf 2 */}
                      <path
                        d="M95 65 Q110 40, 130 30 Q115 55, 95 65Z"
                        fill="#5A7A50"
                      />
                      <path
                        d="M95 65 Q112 47, 128 34"
                        stroke="#2C3E28"
                        strokeWidth="0.8"
                        fill="none"
                      />
                      {/* Leaf 3 — larger, drooping */}
                      <path
                        d="M50 130 Q20 110, 10 85 Q35 100, 50 130Z"
                        fill="#6B8C5E"
                      />
                      <path
                        d="M50 130 Q30 112, 14 90"
                        stroke="#2C3E28"
                        strokeWidth="0.8"
                        fill="none"
                      />
                      {/* Small bud */}
                      <ellipse cx="132" cy="26" rx="7" ry="10" fill="#E8C4C4" transform="rotate(-30 132 26)" />
                      <ellipse cx="135" cy="24" rx="5" ry="8" fill="#D4908E" transform="rotate(-20 135 24)" />
                    </svg>

                    {/* Small rosebud — bottom right */}
                    <svg
                      className="absolute bottom-4 right-8 w-16 md:w-20 opacity-[0.14] pointer-events-none"
                      viewBox="0 0 60 80"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M30 75 Q30 50, 30 35" stroke="#5A7A50" strokeWidth="1.5" />
                      <path d="M30 50 Q20 42, 18 35 Q25 40, 30 50Z" fill="#6B8C5E" />
                      <path d="M30 50 Q40 42, 42 35 Q35 40, 30 50Z" fill="#5A7A50" />
                      <ellipse cx="30" cy="22" rx="14" ry="18" fill="#E8C4C4" />
                      <ellipse cx="30" cy="20" rx="10" ry="14" fill="#D4908E" />
                      <ellipse cx="30" cy="18" rx="6" ry="9" fill="#D4B5A0" />
                    </svg>

                    {/* Tiny scattered petals — top left */}
                    <svg
                      className="absolute top-6 left-6 w-12 md:w-14 opacity-[0.12] pointer-events-none"
                      viewBox="0 0 50 50"
                      fill="none"
                      aria-hidden="true"
                    >
                      <ellipse cx="18" cy="20" rx="8" ry="12" fill="#E8C4C4" transform="rotate(-30 18 20)" />
                      <ellipse cx="32" cy="15" rx="6" ry="10" fill="#D4908E" transform="rotate(15 32 15)" />
                      <ellipse cx="25" cy="35" rx="7" ry="10" fill="#E8C4C4" transform="rotate(-10 25 35)" />
                    </svg>

                    <div className="relative z-10">
                      <span className="font-accent text-lg italic text-magnolia-terracota/70 block">
                        Detras de Casa Magnolia
                      </span>

                      <h2 className="font-display text-4xl md:text-5xl text-magnolia-green font-light mt-2 leading-tight">
                        Dos miradas,
                        <br />
                        un oficio
                      </h2>

                      <div className="w-12 h-px bg-magnolia-line mt-6 mb-6" />

                      <p className="font-body text-base md:text-lg text-magnolia-ink/70 leading-relaxed">
                        Casa Magnolia nace de la conversacion entre Lola, florista con
                        raices en Bilbao, y Manuela, arquitecta con mirada espacial.
                        Juntas transforman flores y espacios en composiciones que hablan
                        con calma.
                      </p>

                      <div className="mt-8">
                        <Link
                          href="/sobre-nosotras"
                          className="inline-flex items-center gap-3 font-hand text-lg text-magnolia-green hover:text-magnolia-terracota transition-colors"
                        >
                          Conocenos
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M8 24h30M28 14l12 10-12 10" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
