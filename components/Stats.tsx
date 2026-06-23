type StatItem = { value: string; label: string };

export default function Stats({ items }: { items: readonly StatItem[] }) {
  return (
    <section className="bg-navy py-10 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-playfair text-3xl md:text-4xl text-gold mb-1 leading-none">
              {s.value}
            </p>
            <p className="text-white/50 text-[11px] tracking-widest uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
