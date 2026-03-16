import { useState } from 'react';
import { useLang } from './LanguageContext';
import { t, type Lang } from '@/lib/i18n';

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

  const langs: Lang[] = ['fr', 'en', 'es', 'de', 'ru'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-between py-5 px-6 md:px-10">
          <a
            href="#hero"
            className="font-serif text-lg md:text-xl tracking-[0.2em] text-primary font-light"
          >
            Ambrosiaque
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1">
              {langs.map((l, i) => (
                <span key={l} className="flex items-center">
                  <button
                    onClick={() => setLang(l)}
                    className={`text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                      lang === l ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {i < langs.length - 1 && (
                    <span className="text-[10px] text-muted-foreground/40 mx-1">/</span>
                  )}
                </span>
              ))}
            </div>

            <button
              className="flex flex-col gap-[5px] group"
              onClick={() => setOpen(true)}
              aria-label="Menu"
            >
              <span className="block w-5 h-px bg-foreground transition-all duration-300" />
              <span className="block w-5 h-px bg-foreground transition-all duration-300" />
              <span className="block w-5 h-px bg-foreground transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 md:right-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <span className="block w-5 h-px bg-foreground rotate-45 translate-y-[0.5px]" />
            <span className="block w-5 h-px bg-foreground -rotate-45 -translate-y-[0.5px]" />
          </button>

          <div className="flex flex-col items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 mt-16">
            {langs.map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => { setLang(l); setOpen(false); }}
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                    lang === l ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
                {i < langs.length - 1 && (
                  <span className="text-[10px] text-muted-foreground/40 mx-1">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
