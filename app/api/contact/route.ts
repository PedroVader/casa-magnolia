import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

// TODO: Connect to Supabase and Resend when configured
// import { supabase } from "@/lib/supabase";
// import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Datos no validos.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { nombre, email, telefono, tipo, fecha, presupuesto, mensaje } =
      result.data;

    // TODO: Save to Supabase
    // const { error: dbError } = await supabase
    //   .from("contact_submissions")
    //   .insert({
    //     name: nombre,
    //     email,
    //     phone: telefono || null,
    //     event_type: tipo,
    //     event_date: fecha || null,
    //     budget_range: presupuesto || null,
    //     message: mensaje,
    //   });

    // TODO: Send notification email via Resend
    // await resend.emails.send({
    //   from: "Casa Magnolia <noreply@casamagnolia.com>",
    //   to: process.env.CONTACT_EMAIL_TO!,
    //   subject: `Nuevo mensaje de contacto: ${tipo}`,
    //   html: `<p><strong>${nombre}</strong> (${email}) ha enviado un mensaje...</p>`,
    // });

    // TODO: Send confirmation email to client
    // await resend.emails.send({
    //   from: "Casa Magnolia <noreply@casamagnolia.com>",
    //   to: email,
    //   subject: "Hemos recibido tu mensaje - Casa Magnolia",
    //   html: `<p>Hola ${nombre}, gracias por contactarnos...</p>`,
    // });

    console.log("Contact form submission:", {
      nombre,
      email,
      telefono,
      tipo,
      fecha,
      presupuesto,
      mensaje,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
