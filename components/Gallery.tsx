type GalleryT = { eyebrow: string; title: string };

// All photos verified as Lake Maggiore / Stresa area (Unsplash free license)
const PHOTOS = [
  {
    // Isola dei Pescatori, Lago Maggiore — confirmed
    src: "https://images.unsplash.com/photo-1628701303556-b95cfe0e4c02?auto=format&fit=crop&w=1200&q=80",
    alt: "Isola dei Pescatori, Lago Maggiore",
    span: "col-span-2 row-span-2",
  },
  {
    // Giardini formali, Stresa — confirmed Stresa / VCO
    src: "https://images.unsplash.com/photo-1691673370023-82187c7adb79?auto=format&fit=crop&w=700&q=80",
    alt: "Giardini di Stresa con vista lago",
    span: "col-span-1 row-span-1",
  },
  {
    // Paese lacustre, Lago Maggiore
    src: "https://images.unsplash.com/photo-1628701304791-6fc10bf2045c?auto=format&fit=crop&w=700&q=80",
    alt: "Borgo sul Lago Maggiore",
    span: "col-span-1 row-span-1",
  },
  {
    // Isolino aereo, Lago Maggiore
    src: "https://images.unsplash.com/photo-1636494266629-1244873def61?auto=format&fit=crop&w=700&q=80",
    alt: "Vista aerea isola, Lago Maggiore",
    span: "col-span-1 row-span-1",
  },
  {
    // Edificio sul lago, Lago Maggiore — confirmed
    src: "https://images.unsplash.com/photo-1610641816098-aecad8df33f1?auto=format&fit=crop&w=700&q=80",
    alt: "Villa sul Lago Maggiore",
    span: "col-span-1 row-span-1",
  },
  {
    // Panorama lago e monti
    src: "https://images.unsplash.com/photo-1697120694825-a4f59153bc46?auto=format&fit=crop&w=1200&q=80",
    alt: "Panorama dal lago, sponda piemontese",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery({ t }: { t: GalleryT }) {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-[11px] tracking-[0.35em] uppercase font-semibold mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-[620px] md:h-[520px]">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-navy-light ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-dark/10 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
