import { useState } from 'react';
import { useLang } from './LanguageContext';
import { t } from '@/lib/i18n';

export default function ContactSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-16">
          <div className="w-12 h-px gold-gradient mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide gold-text mb-6">
            {tr.contact.sectionTitle}
          </h2>
          <p className="text-muted-foreground font-body font-light">{tr.contact.intro}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder={tr.contact.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder={tr.contact.email}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder={tr.contact.message}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              className="border border-primary/40 text-primary px-12 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-primary/10 transition-all duration-500"
            >
              {tr.contact.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
