type PropertyItem = {
  name: string;
  location: string;
  type: string;
  beds: string;
};

type PropertiesT = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: readonly PropertyItem[];
  cta: string;
  ctaButton: string;
};

// Luxury Italian villa & lake-view photos (Unsplash free license)
const PROPERTY_IMAGES = [
  // Infinity pool overlooking bay — luxury waterfront feel
  "https://images.unsplash.com/photo-1756680967405-4220fcff3976?auto=format&fit=crop&w=800&q=80",
  // Elegant Italian villa with pool
  "https://images.unsplash.com/photo-1782067171104-5278b1455a86?auto=format&fit=crop&w=800&q=80",
  // House with pool surrounded by Mediterranean greenery
  "https://images.unsplash.com/photo-1678902177251-7ec8fea483a3?auto=format&fit=crop&w=800&q=80",
  // Resort pool with Tuscan-style architecture
  "https://images.unsplash.com/photo-1760681556160-59d74d81a2e6?auto=format&fit=crop&w=800&q=80",
];

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #1a4a6b 0%, #0d2c4e 100%)",
  "linear-gradient(135deg, #0d3d5c 0%, #1a5c7a 100%)",
  "linear-gradient(135deg, #2a1a4e 0%, #1a2d5c 100%)",
  "linear-gradient(135deg, #1a3a5c 0%, #0d2c4e 100%)",
];

export default function Properties({ t }: { t: PropertiesT }) {
  return (
    <section id="properties" className="py-24 bg-navy">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className="relative h-72 overflow-hidden"
                style={{ background: FALLBACK_GRADIENTS[i] }}
              >
                <img
                  src={PROPERTY_IMAGES[i]}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-dark/25 group-hover:bg-navy-dark/5 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-navy-dark/80 backdrop-blur-sm text-gold text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                  {item.location}
                </div>
              </div>
              <div className="pt-4 pb-2 border-b border-white/10">
                <h3 className="font-playfair text-white text-lg mb-1">{item.name}</h3>
                <p className="text-white/45 text-xs tracking-wide">{item.type}</p>
                <p className="text-gold/70 text-[11px] tracking-wider uppercase mt-1">{item.beds}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-gold/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-playfair text-white text-xl md:text-2xl text-center md:text-left leading-snug">
            {t.cta}
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
