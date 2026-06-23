type MethodT = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: readonly { number: string; title: string; desc: string }[];
};

// Lake Maggiore / luxury villa photos for method steps (Unsplash free license)
const STEP_IMAGES = [
  // Panorama dal lago — valutazione
  "https://images.unsplash.com/photo-1697120694825-a4f59153bc46?auto=format&fit=crop&w=800&q=80",
  // Villa elegante con piscina — allestimento & fotografia
  "https://images.unsplash.com/photo-1782067171104-5278b1455a86?auto=format&fit=crop&w=800&q=80",
  // Edificio sul Lago Maggiore — gestione attiva
  "https://images.unsplash.com/photo-1610641816098-aecad8df33f1?auto=format&fit=crop&w=800&q=80",
  // Infinity pool panoramica — guadagni e risultati
  "https://images.unsplash.com/photo-1756680967405-4220fcff3976?auto=format&fit=crop&w=800&q=80",
];

export default function Method({ t }: { t: MethodT }) {
  return (
    <section id="method" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-gold text-[11px] tracking-[0.35em] uppercase font-semibold mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight whitespace-pre-line mb-5">
            {t.title}
          </h2>
          <p className="text-white/50 text-base leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.steps.map((step, i) => (
            <div key={i} className="relative group overflow-hidden">
              <div className="relative h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-navy-light"
                  style={{ backgroundImage: `url('${STEP_IMAGES[i]}')` }}
                />
                <div className="absolute inset-0 bg-navy/70" />
                <div className="absolute top-6 left-6">
                  <span className="font-playfair text-5xl text-gold/25 leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
