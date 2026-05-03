import { NextRequest, NextResponse } from "next/server";
import { checkoutSchema } from "@/lib/schemas";

// TODO: Connect to Stripe when configured
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = checkoutSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Datos de checkout no validos." },
        { status: 400 }
      );
    }

    const { priceId, mode } = result.data;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // TODO: Create Stripe checkout session
    // const session = await stripe.checkout.sessions.create({
    //   mode,
    //   payment_method_types: ["card"],
    //   line_items: [
    //     {
    //       price: priceId,
    //       quantity: 1,
    //     },
    //   ],
    //   success_url:
    //     mode === "subscription"
    //       ? `${siteUrl}/suscripcion/exito?session_id={CHECKOUT_SESSION_ID}`
    //       : `${siteUrl}/taller/confirmacion?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${siteUrl}`,
    // });

    // return NextResponse.json({ url: session.url });

    // Placeholder response until Stripe is configured
    console.log("Stripe checkout request:", { priceId, mode });
    return NextResponse.json({
      error: "Stripe no esta configurado todavia. Configura STRIPE_SECRET_KEY en .env.local",
    }, { status: 503 });
  } catch {
    return NextResponse.json(
      { error: "Error al crear la sesion de pago." },
      { status: 500 }
    );
  }
}
