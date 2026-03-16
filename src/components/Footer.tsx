import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-xl tracking-[0.2em] uppercase gold-text mb-4">Ambrosiaque</p>
        <p className="text-sm text-primary-foreground/40 font-body font-light mb-2">
          Dr. Davydoff — {tr.footer.founder}
        </p>
        <p className="text-xs text-primary-foreground/30 font-body">
          © {new Date().getFullYear()} Ambrosiaque. {tr.footer.rights}.
        </p>
      </div>
    </footer>
  );
}
