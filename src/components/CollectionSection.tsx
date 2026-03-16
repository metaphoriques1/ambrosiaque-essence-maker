import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function CollectionSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="collection" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="w-12 h-px gold-gradient mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            {tr.collection.sectionTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {tr.collection.products.map((product, i) => (
            <div key={i} className="group cursor-pointer text-center">
              <div className="w-px h-12 gold-gradient mx-auto mb-6 opacity-40" />
              <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide gold-text mb-4">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed mb-6">
                {product.desc}
              </p>
              <span className="text-xs tracking-[0.25em] uppercase text-primary/70 hover:text-primary transition-colors duration-500 font-body gold-border border-b pb-1">
                {tr.collection.viewDetail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
