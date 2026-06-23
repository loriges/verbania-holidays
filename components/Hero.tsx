type HeroT = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
};

export default function Hero({ t }: { t: HeroT }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-navy-dark/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/30 via-transparent to-navy-dark/70" />

      {/* Subtle gold shimmer line */}
      <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold text-[11px] tracking-[0.35em] uppercase font-medium mb-7">
          {t.eyebrow}
        </p>

        {/* Heading */}
        <h1
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-6 whitespace-pre-line"
        >
          {t.title}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-14 bg-gold/55" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/55" />
          <div className="h-px w-14 bg-gold/55" />
        </div>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-9 py-4 text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
          >
            {t.cta1}
          </a>
          <a
            href="#contact"
            className="border border-white/35 hover:border-gold text-white hover:text-gold font-medium px-9 py-4 text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
          >
            {t.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/50" />
        <svg
          className="w-4 h-4 text-gold/50 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
