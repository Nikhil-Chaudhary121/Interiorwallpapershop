import { Compass, PenTool, PackageCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { processSection, process } from '../data.js';

const iconMap = { Compass, PenTool, PackageCheck };

export default function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container max-w-content">
        <Reveal className="max-w-xl mb-16">
          <p className="text-[13px] tracking-wide text-clay-600 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
            {processSection.kicker}
          </p>
          <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
            {processSection.headlineTop}
            <br />
            <span className="italic text-clay-600">{processSection.headlineBottom}</span>
          </h2>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-3 gap-10 lg:gap-8">
          {process.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`relative pt-8 ${i !== 0 ? 'sm:border-l sm:border-line sm:pl-8' : ''}`}
              >
                <span className="font-display text-sm text-clay-600">{item.step}</span>
                <div className="mt-4 h-11 w-11 rounded-full border border-ink/15 flex items-center justify-center text-ink">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-inkmuted max-w-[32ch]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
