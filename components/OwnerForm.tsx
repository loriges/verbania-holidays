"use client";

import { useState, FormEvent } from "react";

type OwnerFormT = {
  eyebrow: string;
  title: string;
  body1: string;
  body2: string;
  cta: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    city: string;
    propertyType: string;
    message: string;
    privacy: string;
    submit: string;
    typeOptions: readonly string[];
  };
  success: string;
  error: string;
};

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full bg-transparent border-b border-navy/20 focus:border-gold outline-none py-3 text-navy placeholder-navy/35 text-[15px] transition-colors duration-200";
const labelBase =
  "block text-[11px] tracking-[0.25em] uppercase text-navy/50 mb-1.5 font-medium";

export default function OwnerForm({ t }: { t: OwnerFormT }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comune, setComune] = useState("");
  const [tipologia, setTipologia] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!privacy) return;

    const bodyLines = [
      `Nome e Cognome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono}`,
      `Comune: ${comune}`,
      `Tipologia immobile: ${tipologia}`,
      ``,
      `Messaggio:`,
      messaggio,
    ].join("\n");

    const mailto =
      `mailto:verbaniaholiday.vco@gmail.com` +
      `?subject=${encodeURIComponent("Nuova richiesta proprietario - Verbania Holidays")}` +
      `&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailto;
    setStatus("success");
  }

  return (
    <section id="owner-form" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div className="md:sticky md:top-24">
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase font-semibold mb-4">
              {t.eyebrow}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-6 leading-tight whitespace-pre-line">
              {t.title}
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
              <div className="h-px w-12 bg-gold/60" />
            </div>
            <p className="text-navy/60 text-base leading-relaxed mb-5 max-w-md">
              {t.body1}
            </p>
            <p className="text-navy/60 text-base leading-relaxed mb-8 max-w-md">
              {t.body2}
            </p>
            <p className="text-navy/80 text-base font-medium max-w-md">
              {t.cta}
            </p>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="border border-gold/30 bg-gold/5 p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center border border-gold/40 text-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-playfair text-navy text-xl leading-snug">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
                <div>
                  <label className={labelBase}>{t.fields.name}</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={inputBase}
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label className={labelBase}>{t.fields.email}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputBase}
                    placeholder="mario@esempio.it"
                  />
                </div>

                <div>
                  <label className={labelBase}>{t.fields.phone}</label>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className={inputBase}
                    placeholder="+39 333 000 0000"
                  />
                </div>

                <div>
                  <label className={labelBase}>{t.fields.city}</label>
                  <input
                    type="text"
                    required
                    value={comune}
                    onChange={(e) => setComune(e.target.value)}
                    className={inputBase}
                    placeholder="Verbania, Baveno, Stresa…"
                  />
                </div>

                <div>
                  <label className={labelBase}>{t.fields.propertyType}</label>
                  <select
                    required
                    value={tipologia}
                    onChange={(e) => setTipologia(e.target.value)}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="" disabled>—</option>
                    {t.fields.typeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelBase}>{t.fields.message}</label>
                  <textarea
                    required
                    rows={4}
                    value={messaggio}
                    onChange={(e) => setMessaggio(e.target.value)}
                    className={`${inputBase} resize-none`}
                    placeholder="Raccontaci della tua proprietà…"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      required
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center ${
                        privacy
                          ? "border-gold bg-gold"
                          : "border-navy/30 group-hover:border-gold/60"
                      }`}
                    >
                      {privacy && (
                        <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth={2} className="w-2.5 h-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-navy/50 leading-relaxed">{t.fields.privacy}</span>
                </label>

                {status === "error" && errorMsg && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !privacy}
                  className="w-full bg-navy text-white py-4 text-[12px] tracking-[0.25em] uppercase font-medium hover:bg-gold hover:text-navy transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Invio in corso…" : t.fields.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
