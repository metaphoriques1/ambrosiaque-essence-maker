import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';
import heroBg from '@/assets/hero-bg.jpg';

export default function HeroSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6 font-body">
          Ambrosiaque — Grasse
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6">
          {tr.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light tracking-wide mb-10">
          {tr.hero.subtitle}
        </p>
        <a
          href="#collection"
          className="inline-block border border-primary-foreground/50 text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-primary-foreground/10 transition-all duration-500"
        >
          {tr.hero.cta}
        </a>
      </div>
    </section>
  );
}
