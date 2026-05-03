"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

/* ── Placeholder data -- will come from CMS ── */

interface WorkshopDetail {
  slug: string;
  title: string;
  day: string;
  month: string;
  year: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  available: number;
  includes: string[];
  bringAlong: string[];
  description: string[];
  color: string;
}

const workshopsData: Record<string, WorkshopDetail> = {
  "corona-primavera": {
    slug: "corona-primavera",
    title: "Corona de Primavera",
    day: "24",
    month: "mayo",
    year: "2025",
    time: "10:00 - 13:30",
    location: "Estudio Casa Magnolia, Bilbao",
    price: 85,
    capacity: 12,
    available: 7,
    includes: [
      "Todas las flores y materiales",
      "Herramientas de trabajo",
      "Bebida y picoteo durante el taller",
      "Tu corona terminada para llevar a casa",
    ],
    bringAlong: [
      "Ropa comoda que pueda mancharse",
      "Ganas de aprender y pasarlo bien",
    ],
    description: [
      "En este taller aprenderemos a crear una corona floral utilizando flores de temporada. Trabajaremos con base de vid natural y exploraremos tecnicas de composicion asimetrica que dan un resultado organico y lleno de movimiento.",
      "No necesitas experiencia previa. Te guiaremos paso a paso para que descubras el ritmo del trabajo con flor fresca, desde la seleccion de tallos hasta el momento de dar forma a tu pieza final.",
      "El taller incluye un momento de pausa para disfrutar de una bebida y algo de picar mientras charlamos sobre flores, estaciones y todo lo que surge alrededor de una mesa llena de verde.",
    ],
    color: "bg-magnolia-green/15",
  },
  "ramo-silvestre": {
    slug: "ramo-silvestre",
    title: "Ramo Silvestre",
    day: "14",
    month: "junio",
    year: "2025",
    time: "10:00 - 13:00",
    location: "Estudio Casa Magnolia, Bilbao",
    price: 75,
    capacity: 12,
    available: 4,
    includes: [
      "Todas las flores y follaje de temporada",
      "Herramientas de trabajo",
      "Bebida y picoteo",
      "Tu ramo terminado para llevar a casa",
    ],
    bringAlong: [
      "Ropa comoda",
      "Un jarron en casa donde lucir tu ramo",
    ],
    description: [
      "Un taller para aprender a componer un ramo de aspecto silvestre, como recien cogido del campo. Usaremos flores de temporada, hierbas aromaticas y follaje para crear una pieza llena de textura y naturalidad.",
      "Aprenderemos la tecnica del ramo en espiral, la eleccion de la paleta de color y como combinar diferentes tipos de tallo para conseguir ese efecto desestructurado que tanto nos gusta.",
      "Es un taller perfecto para iniciarse en el mundo floral. No hace falta experiencia, solo curiosidad.",
    ],
    color: "bg-magnolia-pink/40",
  },
  "centro-mesa-verano": {
    slug: "centro-mesa-verano",
    title: "Centro de Mesa de Verano",
    day: "28",
    month: "junio",
    year: "2025",
    time: "17:00 - 20:00",
    location: "Estudio Casa Magnolia, Bilbao",
    price: 90,
    capacity: 12,
    available: 10,
    includes: [
      "Flores, follaje y recipiente ceramico",
      "Herramientas y materiales de mecanica floral",
      "Bebida y picoteo",
      "Tu centro de mesa y el recipiente para llevar",
    ],
    bringAlong: [
      "Ropa comoda que no te importe manchar",
      "Una bolsa grande para transportar tu pieza",
    ],
    description: [
      "Crearemos un centro de mesa pensado para esas cenas de verano al aire libre. Trabajaremos con un recipiente ceramico artesanal y flores en tonos calidos: melocotones, terracota y dorados.",
      "Exploraremos la mecanica floral necesaria para trabajar con recipientes bajos: uso de kenzan, espuma y tecnicas de sujecion que te permitiran crear composiciones en casa.",
      "Al terminar, te llevaras tu centro de mesa listo para decorar tu proxima cena. El recipiente ceramico es tuyo, para que puedas seguir creando.",
    ],
    color: "bg-magnolia-blush/30",
  },
  "guirnalda-seca": {
    slug: "guirnalda-seca",
    title: "Guirnalda de Flor Seca",
    day: "12",
    month: "julio",
    year: "2025",
    time: "10:00 - 13:00",
    location: "Jardin Botanico, Bilbao",
    price: 95,
    capacity: 12,
    available: 12,
    includes: [
      "Flores secas, preservadas y materiales",
      "Herramientas de trabajo",
      "Bebida y picoteo en el jardin",
      "Tu guirnalda terminada",
    ],
    bringAlong: [
      "Proteccion solar y ropa comoda",
      "Una caja o bolsa para transportar tu pieza",
    ],
    description: [
      "Un taller especial en el Jardin Botanico de Bilbao donde aprenderemos a crear una guirnalda con flor seca y preservada. Una pieza duradera que decorara tu hogar durante meses.",
      "Trabajaremos al aire libre, rodeadas de naturaleza. Aprenderemos a seleccionar y combinar diferentes texturas: gramineas, siemprevivas, lavanda y otras flores secas que nos regala la temporada.",
      "La guirnalda es una pieza versatil: puedes colgarla en la pared, en una puerta o usarla como centro de mesa. Te ensenamos las tecnicas para que puedas seguir creando en casa.",
    ],
    color: "bg-magnolia-mustard/20",
  },
};

/* ── Fallback workshop for unknown slugs ── */
const fallbackWorkshop: WorkshopDetail = workshopsData["corona-primavera"];

export default function TallerDetailPage() {
  const params = useParams<{ slug: string }>();
  const workshop = workshopsData[params.slug] ?? fallbackWorkshop;

  const [seats, setSeats] = useState(1);
  const maxSeats = Math.min(workshop.available, workshop.capacity);
  const totalPrice = workshop.price * seats;

  function decrement() {
    setSeats((prev) => Math.max(1, prev - 1));
  }

  function increment() {
    setSeats((prev) => Math.min(maxSeats, prev + 1));
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          className={`${workshop.color} aspect-[16/9] md:aspect-[21/9] relative`}
        >
          {/* Placeholder visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 260"
              fill="none"
              className="w-1/4 h-1/2 opacity-15"
            >
              <path
                d="M100 30c-30 0-55 15-55 60 0 30 10 50 25 65s35 30 30 75c20-30 15-50 30-75s25-35 25-65c0-45-25-60-55-60z"
                fill="var(--magnolia-green)"
              />
              <path
                d="M80 130c-5-20-20-30-35-25s-15 25 0 40 35 15 35-15z"
                fill="var(--magnolia-green)"
                opacity="0.5"
              />
              <path
                d="M120 130c5-20 20-30 35-25s15 25 0 40-35 15-35-15z"
                fill="var(--magnolia-green)"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Title overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full pb-8 md:pb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display text-5xl md:text-6xl lg:text-7xl text-magnolia-green font-light leading-[0.95]"
              >
                {workshop.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-magnolia-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* ── Left: Description ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <Link
                href="/talleres"
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-magnolia-green/60 hover:text-magnolia-green transition-colors mb-8"
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M38 24H10M20 14L8 24l12 10" />
                </svg>
                Todos los talleres
              </Link>

              <div className="space-y-5">
                {workshop.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-base md:text-lg text-magnolia-ink/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* ── Info grid ── */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {/* Fecha */}
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-1">
                    Fecha
                  </h3>
                  <p className="font-display text-xl text-magnolia-ink">
                    {workshop.day} {workshop.month} {workshop.year}
                  </p>
                </div>

                {/* Horario */}
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-1">
                    Horario
                  </h3>
                  <p className="font-display text-xl text-magnolia-ink">
                    {workshop.time}
                  </p>
                </div>

                {/* Lugar */}
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-1">
                    Lugar
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-magnolia-green/60 shrink-0"
                    >
                      <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26C38 10.5 32 4 24 4z" />
                      <circle cx="24" cy="18" r="5" />
                    </svg>
                    <p className="font-body text-base text-magnolia-ink">
                      {workshop.location}
                    </p>
                  </div>
                </div>

                {/* Precio */}
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-1">
                    Precio
                  </h3>
                  <p className="font-display text-xl text-magnolia-green">
                    {workshop.price}&euro;
                    <span className="font-body text-sm text-magnolia-ink/40 ml-1">
                      / persona
                    </span>
                  </p>
                </div>

                {/* Que incluye */}
                <div className="sm:col-span-2">
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-2">
                    Que incluye
                  </h3>
                  <ul className="space-y-1.5">
                    {workshop.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-body text-base text-magnolia-ink/80"
                      >
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke="var(--magnolia-green)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mt-1 shrink-0"
                        >
                          <path d="M10 25l10 10L38 14" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Que llevarse */}
                <div className="sm:col-span-2">
                  <h3 className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 mb-2">
                    Que llevarse
                  </h3>
                  <ul className="space-y-1.5">
                    {workshop.bringAlong.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-body text-base text-magnolia-ink/80"
                      >
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke="var(--magnolia-mustard)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mt-1 shrink-0"
                        >
                          <path d="M24 8v28M12 22l12-14 12 14" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Booking sidebar ── */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/60 p-6 md:p-8 lg:sticky lg:top-8">
                {/* Date summary */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-5xl text-magnolia-green leading-none">
                    {workshop.day}
                  </span>
                  <div>
                    <span className="font-body text-sm text-magnolia-ink/50 tracking-wide uppercase block">
                      {workshop.month} {workshop.year}
                    </span>
                    <span className="font-body text-sm text-magnolia-ink/50 block">
                      {workshop.time}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-magnolia-ink/10 mb-6" />

                {/* Seat selector */}
                <div className="mb-6">
                  <label className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 block mb-3">
                    Plazas
                  </label>
                  <div className="flex items-center gap-0">
                    <button
                      type="button"
                      onClick={decrement}
                      disabled={seats <= 1}
                      className="w-12 h-12 flex items-center justify-center border border-magnolia-green/20 text-magnolia-green font-display text-xl transition-colors hover:bg-magnolia-green/5 disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Reducir plazas"
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={maxSeats}
                      value={seats}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val) && val >= 1 && val <= maxSeats) {
                          setSeats(val);
                        }
                      }}
                      className="w-16 h-12 text-center border-y border-magnolia-green/20 bg-transparent font-display text-xl text-magnolia-ink appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      aria-label="Numero de plazas"
                    />
                    <button
                      type="button"
                      onClick={increment}
                      disabled={seats >= maxSeats}
                      className="w-12 h-12 flex items-center justify-center border border-magnolia-green/20 text-magnolia-green font-display text-xl transition-colors hover:bg-magnolia-green/5 disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Aumentar plazas"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total price */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-body text-sm text-magnolia-ink/60">
                    Total
                  </span>
                  <span className="font-display text-3xl text-magnolia-green">
                    {totalPrice}&euro;
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="block w-full bg-magnolia-green text-magnolia-cream font-body text-sm tracking-widest uppercase text-center py-4 transition-colors duration-200 hover:bg-magnolia-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magnolia-green focus-visible:ring-offset-2"
                >
                  Reservar plaza
                </a>

                {/* Availability */}
                <p className="font-body text-xs text-magnolia-ink/40 text-center mt-4">
                  Plazas disponibles: {workshop.available} de{" "}
                  {workshop.capacity}
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
