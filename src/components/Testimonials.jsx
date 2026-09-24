import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { testimonialStats, featuredTestimonial, testimonials } from '../data.js';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-stone">
      <div className="container max-w-content">
        <Reveal className="max-w-xl mb-14">
          <p className="text-[13px] tracking-wide text-clay-600 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
            What clients say
          </p>
          <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
            Homes people
            <br />
            <span className="italic text-clay-600">actually live in</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10">
          <Reveal className="relative rounded-sm overflow-hidden min-h-[380px]">
            <img
              src={featuredTestimonial.image}
              alt="Living room styled by Dream Interiors"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <Quote className="text-white/70" size={26} />
              <p className="mt-4 text-white text-[17px] leading-relaxed max-w-[38ch]">
                {featuredTestimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={featuredTestimonial.avatar}
                  alt={featuredTestimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-[14px]">{featuredTestimonial.name}</p>
                  <p className="text-white/70 text-[12px]">{featuredTestimonial.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal stagger className="flex flex-col gap-5">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-sm border border-line p-6">
                  <p className="text-[15px] leading-relaxed text-ink/90">“{t.quote}”</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[14px] text-ink">{t.name}</p>
                        <p className="text-[12px] text-inkmuted">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-clay-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-3 max-w-xl gap-6 border-t border-line pt-10"
        >
          {testimonialStats.map((stat) => (
            <div key={stat.id}>
              <p className="font-display text-3xl sm:text-4xl text-ink">{stat.value}</p>
              <p className="mt-1.5 text-[13px] text-inkmuted leading-snug">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
