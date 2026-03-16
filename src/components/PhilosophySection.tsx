import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function PhilosophySection() {
  const { lang } = useLang();
  const tr = t(lang);

  const paragraphs = [tr.philosophy.p1, tr.philosophy.p2, tr.philosophy.p3, tr.philosophy.p4, tr.philosophy.p5];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-12 h-px gold-gradient mx-auto mb-8" />
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-16 gold-text">
          {tr.philosophy.sectionTitle}
        </h2>
        <div className="space-y-8">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg italic"
            >
              {p}
            </p>
          ))}
        </div>
        <div className="w-12 h-px gold-gradient mx-auto mt-16" />
      </div>
    </section>
  );
}
