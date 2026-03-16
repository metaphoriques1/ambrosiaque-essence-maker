import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function HeroSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-body font-extralight mb-12">
          France
        </p>

        <div className="gold-line mx-auto mb-12" />

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-light tracking-[0.15em] leading-[0.9] text-primary mb-12">
          Ambrosiaque
        </h1>

        <div className="gold-line mx-auto mb-12" />

        <p className="font-serif text-lg sm:text-xl md:text-2xl font-light italic text-foreground/60 tracking-wide mb-4">
          {tr.hero.title}
        </p>
        
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-body font-extralight mb-16">
          {tr.hero.subtitle}
        </p>

        <a
          href="#collection"
          className="inline-block text-[11px] tracking-[0.3em] uppercase font-body font-light text-primary link-underline pb-1"
        >
          {tr.hero.cta}
        </a>
      </div>
    </section>
  );
}
