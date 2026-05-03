import { z } from "zod";

/* ─── Contact form ─── */

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email valido"),
  telefono: z.string().optional(),
  tipo: z.string().min(1, "Selecciona un tipo de evento"),
  fecha: z.string().optional(),
  presupuesto: z.string().optional(),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/* ─── Stripe checkout ─── */

export const checkoutSchema = z.object({
  priceId: z.string().min(1),
  mode: z.enum(["payment", "subscription"]),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
