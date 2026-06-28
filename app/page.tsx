"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Properties from "@/components/Properties";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import OwnerForm from "@/components/OwnerForm";
import Footer from "@/components/Footer";
import { translations, type Lang } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const t = translations[lang];

  return (
    <main>
      <Navbar t={t.nav} lang={lang} setLang={setLang} />
      <Hero t={t.hero} />
      <Stats items={t.stats} />
      <Services t={t.services} />
      <Method t={t.method} />
      <Properties t={t.properties} />
      <Gallery t={t.gallery} />
      <WhyUs t={t.whyUs} />
      <Contact t={t.contact} />
      <OwnerForm t={t.ownerForm} />
      <Footer t={t.footer} />
    </main>
  );
}
