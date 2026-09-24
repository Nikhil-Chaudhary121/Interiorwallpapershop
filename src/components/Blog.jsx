import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { journalSection, blogPosts } from '../data.js';

export default function Blog() {
  return (
    <section id="journal" className="py-24 lg:py-32">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[13px] tracking-wide text-clay-600 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
              {journalSection.kicker}
            </p>
            <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
              {journalSection.headlineTop}
              <br />
              <span className="italic text-clay-600">{journalSection.headlineBottom}</span>
            </h2>
          </div>
          <a
            href={journalSection.cta.href}
            className="hidden sm:inline-flex items-center rounded-sm border border-ink/20 px-6 py-3 text-[15px] text-ink hover:border-ink transition-colors shrink-0"
          >
            {journalSection.cta.label}
          </a>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article key={post.id} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-sm px-3 py-1.5 text-center leading-none">
                  <p className="font-display text-base text-ink">{post.day}</p>
                  <p className="text-[10px] tracking-wide text-inkmuted mt-0.5">{post.month}</p>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg leading-snug text-ink">{post.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-inkmuted">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[12px] text-inkmuted/80">{post.readTime}</span>
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1 text-[13px] text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
                >
                  Read more <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
