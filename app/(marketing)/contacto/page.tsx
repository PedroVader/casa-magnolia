"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";

/* -------------------------------------------------- */
/*  Options                                           */
/* -------------------------------------------------- */

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

/* -------------------------------------------------- */
/*  Form (inner component that reads search params)   */
/* -------------------------------------------------- */

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

  /* Pre-fill tipo from URL when param changes */
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

  /* ------ success state ------ */
  if (submitted) {
    return (
      <div className="rounded-none border-2 border-magnolia-green/20 bg-magnolia-green/5 px-8 py-16 text-center">
        <p className="font-display text-3xl md:text-4xl text-magnolia-green mb-4">
          Gracias por tu mensaje
        </p>
        <p className="font-body text-magnolia-ink/70 text-lg">
          Te responderemos pronto.
        </p>
      </div>
    );
  }

  /* ------ form ------ */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Nombre */}
      <Input
        label="Nombre"
        placeholder="Tu nombre"
        {...register("nombre")}
        error={errors.nombre?.message}
        required
      />

      {/* Email */}
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
        {...register("email")}
        error={errors.email?.message}
        required
      />

      {/* Telefono */}
      <Input
        label="Telefono"
        type="tel"
        placeholder="+34 600 000 000"
        {...register("telefono")}
        error={errors.telefono?.message}
      />

      {/* Tipo de evento */}
      <Select
        label="Tipo de evento"
        options={tipoOptions}
        placeholder="Selecciona una opcion"
        {...register("tipo")}
        error={errors.tipo?.message}
      />

      {/* Fecha orientativa */}
      <Input
        label="Fecha orientativa"
        type="date"
        {...register("fecha")}
        error={errors.fecha?.message}
      />

      {/* Presupuesto orientativo */}
      <Select
        label="Presupuesto orientativo"
        options={presupuestoOptions}
        placeholder="Selecciona un rango"
        {...register("presupuesto")}
        error={errors.presupuesto?.message}
      />

      {/* Mensaje */}
      <Textarea
        label="Mensaje"
        placeholder="Cuentanos sobre tu proyecto..."
        {...register("mensaje")}
        error={errors.mensaje?.message}
        required
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function ContactoPage() {
  return (
    <section className="bg-magnolia-cream">
      {/* ---- Hero ---- */}
      <div className="px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-magnolia-ink leading-none">
          Contacto
        </h1>
        <p className="mt-4 font-accent text-xl md:text-2xl text-magnolia-ink/60">
          Cuentanos tu proyecto
        </p>
      </div>

      {/* ---- Two-column layout ---- */}
      <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* LEFT: Form (~60%) */}
          <div className="w-full lg:w-3/5">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>

          {/* RIGHT: Contact info (~40%) */}
          <aside className="mt-16 lg:mt-0 w-full lg:w-2/5 lg:pl-8">
            <div className="space-y-8">
              {/* Email */}
              <a
                href="mailto:hola@casamagnolia.com"
                className="flex items-center gap-4 group"
              >
                <EnvelopeIcon className="w-8 h-8 text-magnolia-green shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-body text-lg text-magnolia-ink group-hover:text-magnolia-green transition-colors">
                  hola@casamagnolia.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <PhoneIcon className="w-8 h-8 text-magnolia-green shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-body text-lg text-magnolia-ink group-hover:text-magnolia-green transition-colors">
                  WhatsApp
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/casamagnolia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <InstagramIcon className="w-8 h-8 text-magnolia-green shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-body text-lg text-magnolia-ink group-hover:text-magnolia-green transition-colors">
                  Instagram
                </span>
              </a>

              {/* Response time note */}
              <p className="font-body text-sm text-magnolia-ink/50 pt-4">
                Respondemos en 24-48h.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
