import Reveal from './Reveal.jsx';
import { about } from '../data.js';

export default function About() {
  return (
    <section id="about" className="bg-stone py-24 lg:py-32">
      <div className="container max-w-content grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative h-[380px] sm:h-[460px] lg:h-[520px]" y={40}>
          <img
            src={about.images[0].img}
            alt={about.images[0].alt}
            className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-sm"
          />
          <img
            src={about.images[1].img}
            alt={about.images[1].alt}
            className="absolute bottom-0 right-0 w-[52%] h-[52%] object-cover rounded-sm border-4 border-stone shadow-[0_18px_40px_-14px_rgba(27,23,18,0.3)]"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[13px] tracking-wide text-clay-600 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
              {about.kicker}
            </p>
            <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
              {about.headlineTop}
              <br />
              <span className="italic text-clay-600">{about.headlineBottom}</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-inkmuted">
              {about.paragraph}
            </p>
            <a
              href={about.linkHref}
              className="group mt-7 inline-flex items-center gap-2 text-[15px] text-ink border-b border-ink/30 pb-1 hover:border-ink transition-colors"
            >
              {about.linkLabel}
            </a>
          </Reveal>

          <Reveal stagger className="mt-12 grid grid-cols-3 gap-6 border-t border-line/80 pt-8">
            {about.stats.map((stat) => (
              <div key={stat.id}>
                <p className="font-display text-3xl sm:text-4xl text-ink">
                  {stat.value}
                  <span className="text-clay-600">{stat.suffix}</span>
                </p>
                <p className="mt-1.5 text-[13px] text-inkmuted leading-snug">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
