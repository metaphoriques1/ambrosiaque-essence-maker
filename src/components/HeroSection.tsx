import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function HeroSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_50%_50%/0.04)_0%,transparent_70%)]" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <div className="w-16 h-px gold-gradient mx-auto mb-12" />
        
        <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-10 font-body">
          Grasse · France
        </p>
        
        <h1 className="gold-emboss font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.08em] leading-none mb-10">
          Ambrosiaque
        </h1>
        
        <div className="w-24 h-px gold-gradient mx-auto mb-10" />
        
        <p className="font-serif text-xl md:text-2xl font-light text-foreground/70 tracking-wide mb-4">
          {tr.hero.title}
        </p>
        <p className="text-sm text-muted-foreground font-body font-light tracking-[0.15em] mb-14">
          {tr.hero.subtitle}
        </p>
        
        <a
          href="#collection"
          className="inline-block border border-primary/40 text-primary px-12 py-4 text-xs tracking-[0.3em] uppercase font-body hover:bg-primary/10 transition-all duration-700"
        >
          {tr.hero.cta}
        </a>
        
        <div className="w-16 h-px gold-gradient mx-auto mt-16" />
      </div>
    </section>
  );
}
