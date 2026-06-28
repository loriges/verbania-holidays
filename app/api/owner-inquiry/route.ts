import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Required env vars (set in Vercel → Settings → Environment Variables):
//   GMAIL_USER  — the Gmail address that sends the email
//               — e.g. verbaniaholiday.vco@gmail.com
//   GMAIL_PASS  — Gmail App Password (16 chars, no spaces)
//               — Generate at: myaccount.google.com/apppasswords
const TO = "verbaniaholiday.vco@gmail.com";

export async function POST(request: NextRequest) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error("[owner-inquiry] GMAIL_USER or GMAIL_PASS not set");
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

  const text = `
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `Verbania Holidays <${user}>`,
      to: TO,
      replyTo: email,
      subject: "Nuova richiesta proprietario - Verbania Holidays",
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[owner-inquiry] sendMail error:", error);
    return NextResponse.json(
      { error: "Errore nell'invio. Riprova o contattaci direttamente." },
      { status: 500 }
    );
  }
}
