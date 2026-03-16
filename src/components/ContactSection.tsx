import { useState } from 'react';
import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-[200px] bg-background" ref={ref}>
      <div className="px-6 max-w-md mx-auto">
        <p className="reveal text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-body font-extralight text-center mb-6">
          {tr.contact.sectionTitle}
        </p>
        <p className="reveal text-center font-serif text-sm font-light text-foreground/40 italic mb-16">
          {tr.contact.intro}
        </p>

        <form onSubmit={handleSubmit} className="reveal space-y-10">
          <input
            type="text"
            placeholder={tr.contact.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-[11px] tracking-[0.15em] font-body font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-500"
          />
          <input
            type="email"
            placeholder={tr.contact.email}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-[11px] tracking-[0.15em] font-body font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-500"
          />
          <textarea
            placeholder={tr.contact.message}
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-[11px] tracking-[0.15em] font-body font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
          />
          <div className="text-center pt-6">
            <button
              type="submit"
              className="text-[10px] tracking-[0.3em] uppercase font-body font-light text-primary link-underline pb-1"
            >
              {tr.contact.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
