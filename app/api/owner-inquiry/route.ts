import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Required env vars (set in Vercel project settings):
//   RESEND_API_KEY    — from resend.com dashboard
//   RESEND_FROM_EMAIL — e.g. "Verbania Holidays <info@verbaniaholidays.it>"
//                       (the sending domain must be verified in Resend)
const TO_EMAIL = "verbaniaholiday.vco@gmail.com";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[owner-inquiry] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Configurazione email mancante. Contattaci direttamente." },
      { status: 503 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const { nome, email, telefono, comune, tipologia, messaggio } = body;

  if (!nome || !email || !telefono || !comune || !tipologia || !messaggio) {
    return NextResponse.json({ error: "Tutti i campi sono obbligatori." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Indirizzo email non valido." }, { status: 400 });
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Verbania Holidays <noreply@verbaniaholidays.it>";

  const textBody = `
Nuova richiesta proprietario — Verbania Holidays
================================================

Nome e Cognome:       ${nome}
Email:                ${email}
Telefono:             ${telefono}
Comune:               ${comune}
Tipologia immobile:   ${tipologia}

Messaggio
---------
${messaggio}
`.trim();

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: "Nuova richiesta proprietario - Verbania Holidays",
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[owner-inquiry] email send error:", error);
    return NextResponse.json(
      { error: "Errore nell'invio. Riprova o contattaci direttamente." },
      { status: 500 }
    );
  }
}
