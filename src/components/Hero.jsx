import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hero, heroImages, heroFilmstrip } from '../data.js';

gsap.registerPlugin(ScrollTrigger);

const easeOut = [0.22, 1, 0.36, 1];

export default function Hero() {
  const filmRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.to(filmRef.current, {
        xPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: filmRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container max-w-content grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="text-[13px] tracking-wide text-clay-600 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
            {hero.kicker}
          </p>
          <h1 className="font-display text-balance text-[2.6rem] leading-[1.08] sm:text-[3.4rem] sm:leading-[1.06] lg:text-[3.9rem] lg:leading-[1.04] text-ink">
            {hero.headlineTop}
            <br />
            <span className="italic text-clay-600">{hero.headlineBottom}</span>
          </h1>
          <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-inkmuted">
            {hero.paragraph}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center rounded-sm bg-ink text-white px-7 py-3.5 text-[15px] hover:bg-clay-600 transition-colors duration-300"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-sm border border-ink/20 px-7 py-3.5 text-[15px] text-ink hover:border-ink transition-colors duration-300"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-line pt-6 max-w-sm">
            <span className="font-display text-3xl text-ink">{hero.stat.value}</span>
            <span className="text-sm text-inkmuted leading-snug">{hero.stat.label}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[560px]"
        >
          <img
            src={heroImages[0].img}
            alt={heroImages[0].alt}
            className="absolute top-0 right-0 w-[78%] h-[88%] object-cover rounded-sm"
          />
          <img
            src={heroImages[1].img}
            alt={heroImages[1].alt}
            className="absolute bottom-0 left-0 w-[52%] h-[46%] object-cover rounded-sm border-4 border-white shadow-[0_18px_40px_-14px_rgba(27,23,18,0.35)]"
          />
        </motion.div>
      </div>

      <div className="mt-16 lg:mt-24 overflow-hidden">
        <div ref={filmRef} className="flex gap-5 w-max px-4">
          {[...heroFilmstrip, ...heroFilmstrip.slice(0, 3)].map((img, i) => (
            <img
              key={`${img.id}-${i}`}
              src={img.img}
              alt={img.alt}
              className="h-40 sm:h-52 lg:h-64 w-32 sm:w-40 lg:w-48 object-cover rounded-sm flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
