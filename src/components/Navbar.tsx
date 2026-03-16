import { useState } from 'react';
import { useLang } from './LanguageContext';
import { t, langLabels, type Lang } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const tr = t(lang);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#hero', label: tr.nav.home },
    { href: '#philosophy', label: tr.nav.philosophy },
    { href: '#collection', label: tr.nav.collection },
    { href: '#contact', label: tr.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" className="font-serif text-2xl tracking-[0.2em] uppercase gold-text font-semibold">
          Ambrosiaque
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs tracking-wider px-2 py-1 transition-colors duration-300 ${
                  lang === l ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-3 border-t border-border mt-3">
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`text-xs tracking-wider px-2 py-1 ${
                  lang === l ? 'text-accent font-medium' : 'text-muted-foreground'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
