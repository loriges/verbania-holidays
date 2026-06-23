type GalleryT = { eyebrow: string; title: string };

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    alt: "Lago Maggiore all'alba",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=600&q=80",
    alt: "Villa sul lago",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    alt: "Tramonto sul lago",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=600&q=80",
    alt: "Villa di lusso",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    alt: "Piscina con vista lago",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    alt: "Interno villa",
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

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-[600px] md:h-[500px]">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${photo.span}`}
              style={{
                background: "linear-gradient(135deg, #1a4a6b 0%, #0d2c4e 100%)",
              }}
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
