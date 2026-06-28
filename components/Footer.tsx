import Logo from "./Logo";

type FooterT = {
  tagline: string;
  rights: string;
  links: {
    services: string;
    method: string;
    properties: string;
    contact: string;
  };
};

export default function Footer({ t }: { t: FooterT }) {
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="navbar-light" className="mb-4" />
            <p className="text-white/35 text-xs leading-relaxed max-w-xs mt-3">
              {t.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-4">
              Menu
            </p>
            <ul className="flex flex-col gap-2.5">
              {(
                [
                  ["#services", t.links.services],
                  ["#method", t.links.method],
                  ["#properties", t.links.properties],
                  ["#contact", t.links.contact],
                ] as [string, string][]
              ).map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/45 hover:text-gold transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-4">
              Contatti
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:verbaniaholiday.vco@gmail.com"
                  className="text-white/45 hover:text-gold transition-colors text-sm"
                >
                  verbaniaholiday.vco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+393520105186"
                  className="text-white/45 hover:text-gold transition-colors text-sm"
                >
                  Team · +39 352 010 5186
                </a>
              </li>
              <li>
                <a
                  href="tel:+393357887929"
                  className="text-white/45 hover:text-gold transition-colors text-sm"
                >
                  Igor Roveri · +39 335 788 7929
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393520105186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 hover:text-gold transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">{t.rights}</p>
          <p className="text-white/15 text-xs">
            Lago Maggiore · Verbania · Baveno · Stresa · Cannero Riviera
          </p>
        </div>
      </div>
    </footer>
  );
}
