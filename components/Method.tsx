type MethodT = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: readonly { number: string; title: string; desc: string }[];
};

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
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
              {/* Background image */}
              <div className="relative h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${STEP_IMAGES[i]}')` }}
                />
                <div className="absolute inset-0 bg-navy/75" />
                {/* Step number */}
                <div className="absolute top-6 left-6">
                  <span className="font-playfair text-5xl text-gold/30 leading-none select-none">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {/* Gold accent top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
