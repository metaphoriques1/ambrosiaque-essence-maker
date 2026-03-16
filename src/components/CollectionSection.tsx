import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CollectionSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const ref = useScrollReveal();

  return (
    <section id="collection" className="py-[200px] bg-background" ref={ref}>
      <div className="px-6 max-w-3xl mx-auto">
        <p className="reveal text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-body font-extralight text-center mb-24">
          {tr.collection.sectionTitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20">
          {tr.collection.products.map((product, i) => (
            <div
              key={i}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[0.08em] text-foreground/80 mb-4">
                {product.name}
              </h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body font-extralight mb-8">
                {product.desc}
              </p>
              <span className="text-[10px] tracking-[0.3em] uppercase font-body font-light text-primary link-underline pb-1 cursor-pointer">
                {tr.collection.viewDetail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
