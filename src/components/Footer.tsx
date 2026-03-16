export default function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="gold-line mx-auto mb-16" />
      <p className="text-center text-[10px] tracking-[0.3em] uppercase font-body font-extralight text-primary/60">
        Ambrosiaque {new Date().getFullYear()}
      </p>
    </footer>
  );
}
