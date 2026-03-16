import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';
import diffuser1 from '@/assets/diffuser-1.jpg';
import diffuser2 from '@/assets/diffuser-2.jpg';
import diffuser3 from '@/assets/diffuser-3.jpg';
import diffuser4 from '@/assets/diffuser-4.jpg';

const images = [diffuser1, diffuser2, diffuser3, diffuser4];

export default function CollectionSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="collection" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-px gold-gradient mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            {tr.collection.sectionTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tr.collection.products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6 bg-cream-dark">
                <img
                  src={images[i]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl font-normal tracking-wide text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-light mb-4">
                {product.desc}
              </p>
              <span className="text-xs tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors duration-300 font-body gold-border border-b pb-1">
                {tr.collection.viewDetail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
