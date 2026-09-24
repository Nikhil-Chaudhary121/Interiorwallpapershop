import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { brand, navLinks } from '../data.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur border-b border-line shadow-[0_1px_0_rgba(0,0,0,0.02)]'
          : 'bg-white/0 border-b border-transparent'
      }`}
    >
      <div className="container max-w-content flex items-center justify-between h-20">
        <a href="#home" className="flex items-baseline gap-1.5 shrink-0">
          <span className="font-display text-2xl tracking-tight text-ink">{brand.name}</span>
          <span className="font-display italic text-2xl text-clay-500">{brand.accent}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[15px] text-ink/80 hover:text-ink transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-clay-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border border-ink px-5 py-2.5 text-[15px] text-ink hover:bg-ink hover:text-white transition-colors duration-300"
          >
            Contact us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-b border-line"
          >
            <div className="container max-w-content flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink border-b border-line/70 last:border-none text-[15px]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-sm bg-ink text-white px-5 py-3 text-[15px]"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
