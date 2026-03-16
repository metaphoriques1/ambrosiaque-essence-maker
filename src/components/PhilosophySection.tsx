import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PhilosophySection() {
  const { lang } = useLang();
  const tr = t(lang);
  const ref = useScrollReveal();

  const paragraphs = [tr.philosophy.p1, tr.philosophy.p2, tr.philosophy.p3, tr.philosophy.p4, tr.philosophy.p5];

  return (
    <section id="philosophy" className="py-[200px] bg-background" ref={ref}>
      <div className="px-6 max-w-[600px] mx-auto text-center">
        <p className="reveal text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-body font-extralight mb-20">
          {tr.philosophy.sectionTitle}
        </p>

        <div className="space-y-12">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="reveal font-serif text-base md:text-lg font-light leading-[2em] text-foreground/60 italic"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {i === 0 ? (
                <>
                  <span className="text-3xl md:text-4xl font-normal text-primary not-italic leading-[0] float-left mr-2 mt-1">
                    {p.charAt(0)}
                  </span>
                  {p.slice(1)}
                </>
              ) : (
                p
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
