"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";

/* ─── Options ─── */

const tipoOptions = [
  { value: "boda", label: "Boda" },
  { value: "evento", label: "Evento" },
  { value: "rodaje", label: "Rodaje" },
  { value: "hotel-restaurante", label: "Hotel-Restaurante" },
  { value: "taller", label: "Taller" },
  { value: "otro", label: "Otro" },
];

const presupuestoOptions = [
  { value: "menos-1000", label: "Menos de 1.000\u20AC" },
  { value: "1000-3000", label: "1.000\u20AC - 3.000\u20AC" },
  { value: "3000-6000", label: "3.000\u20AC - 6.000\u20AC" },
  { value: "6000-10000", label: "6.000\u20AC - 10.000\u20AC" },
  { value: "mas-10000", label: "Mas de 10.000\u20AC" },
];

/* ─── Form (inner component that reads search params) ─── */

function ContactForm() {
  const searchParams = useSearchParams();
  const tipoParam = searchParams.get("tipo") ?? "";
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      tipo: tipoParam,
      fecha: "",
      presupuesto: "",
      mensaje: "",
    },
  });

  useEffect(() => {
    if (tipoParam) {
      setValue("tipo", tipoParam);
    }
  }, [tipoParam, setValue]);

  const onSubmit = (data: ContactFormValues) => {
    // eslint-disable-next-line no-console
    console.log("Contacto form data:", data);
    setSubmitted(true);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-hand text-5xl md:text-6xl text-magnolia-green block mb-4">
            Gracias!
          </span>
          <p className="font-body text-magnolia-ink/70 text-lg">
            Te responderemos pronto.
          </p>
        </motion.div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Row 1: Nombre + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre"
          placeholder="Tu nombre"
          {...register("nombre")}
          error={errors.nombre?.message}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          {...register("email")}
          error={errors.email?.message}
          required
        />
      </div>

      {/* Row 2: Telefono + Tipo de evento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Telefono"
          type="tel"
          placeholder="+34 600 000 000"
          {...register("telefono")}
          error={errors.telefono?.message}
        />
        <Select
          label="Tipo de evento"
          options={tipoOptions}
          placeholder="Selecciona una opcion"
          {...register("tipo")}
          error={errors.tipo?.message}
        />
      </div>

      {/* Row 3: Fecha + Presupuesto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Fecha orientativa"
          type="date"
          {...register("fecha")}
          error={errors.fecha?.message}
        />
        <Select
          label="Presupuesto orientativo"
          options={presupuestoOptions}
          placeholder="Selecciona un rango"
          {...register("presupuesto")}
          error={errors.presupuesto?.message}
        />
      </div>

      {/* Mensaje */}
      <Textarea
        label="Mensaje"
        placeholder="Cuentanos sobre tu proyecto..."
        {...register("mensaje")}
        error={errors.mensaje?.message}
        required
      />

      {/* Submit — centered */}
      <div className="text-center pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  );
}

/* ─── Page ─── */

export default function ContactoPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Striped background ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/pattern-stripes.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center pt-36 pb-24 md:pt-44 md:pb-32 px-4 md:px-6">
        {/* Card — centered form on the striped background */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: -0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="bg-magnolia-cream/95 backdrop-blur-sm w-full max-w-2xl p-8 md:p-12 lg:p-14 shadow-2xl border border-magnolia-line/50"
        >
          {/* Handwritten title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-hand text-5xl md:text-6xl text-magnolia-green text-center mb-1"
          >
            Hablemos!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-accent text-base italic text-magnolia-ink/40 text-center mb-10"
          >
            Cuentanos tu proyecto
          </motion.p>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-16 h-px bg-magnolia-line mx-auto mb-10 origin-center"
          />

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </motion.div>
        </motion.div>

        {/* ── Contact info — below card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
        >
          <a
            href="mailto:hola@casamagnolia.com"
            className="flex items-center gap-2 group"
          >
            <EnvelopeIcon className="w-5 h-5 text-magnolia-green/70 shrink-0 transition-transform group-hover:scale-110" />
            <span className="font-body text-sm text-magnolia-ink/60 group-hover:text-magnolia-green transition-colors">
              hola@casamagnolia.com
            </span>
          </a>

          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <PhoneIcon className="w-5 h-5 text-magnolia-green/70 shrink-0 transition-transform group-hover:scale-110" />
            <span className="font-body text-sm text-magnolia-ink/60 group-hover:text-magnolia-green transition-colors">
              WhatsApp
            </span>
          </a>

          <a
            href="https://instagram.com/casamagnolia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <InstagramIcon className="w-5 h-5 text-magnolia-green/70 shrink-0 transition-transform group-hover:scale-110" />
            <span className="font-body text-sm text-magnolia-ink/60 group-hover:text-magnolia-green transition-colors">
              Instagram
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-4 font-body text-xs text-magnolia-ink/30"
        >
          Respondemos en 24-48h
        </motion.p>
      </div>
    </section>
  );
}
