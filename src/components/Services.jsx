import { LayoutGrid, Lightbulb, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { servicesSection, services } from '../data.js';

const iconMap = { LayoutGrid, Lightbulb, Sofa };

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[13px] tracking-wide text-clay-600 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
              {servicesSection.kicker}
            </p>
            <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
              {servicesSection.headlineTop}
              <br />
              <span className="italic text-clay-600">{servicesSection.headlineBottom}</span>
            </h2>
          </div>
          <a
            href={servicesSection.cta.href}
            className="hidden sm:inline-flex items-center rounded-sm border border-ink/20 px-6 py-3 text-[15px] text-ink hover:border-ink transition-colors shrink-0"
          >
            {servicesSection.cta.label}
          </a>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="border border-line rounded-sm p-8"
              >
                <div className="h-11 w-11 rounded-sm bg-olive-500/10 flex items-center justify-center text-olive-600">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-inkmuted">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex text-[13px] tracking-wide text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
                >
                  View details
                </a>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
