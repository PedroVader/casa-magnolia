import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to Stripe when configured
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Falta la firma de Stripe." },
        { status: 400 }
      );
    }

    // TODO: Verify webhook signature and process events
    // const event = stripe.webhooks.constructEvent(
    //   body,
    //   signature,
    //   process.env.STRIPE_WEBHOOK_SECRET!
    // );
    //
    // switch (event.type) {
    //   case "customer.subscription.created":
    //     // Save subscriber to Supabase
    //     break;
    //   case "customer.subscription.updated":
    //     // Update subscriber status
    //     break;
    //   case "customer.subscription.deleted":
    //     // Mark subscriber as cancelled
    //     break;
    //   case "invoice.payment_failed":
    //     // Handle failed payment
    //     break;
    //   case "checkout.session.completed":
    //     // Handle workshop booking completion
    //     break;
    //   default:
    //     console.log(`Evento no manejado: ${event.type}`);
    // }

    console.log("Stripe webhook received:", { signature: signature?.slice(0, 20) });
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar el webhook." },
      { status: 500 }
    );
  }
}
