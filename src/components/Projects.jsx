import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, MapPin, Eye } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { projectsSection, projects } from '../data.js';

export default function Projects() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.8 * dir;
    trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-stone">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[13px] tracking-wide text-clay-600 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500 mr-2 align-middle" />
              {projectsSection.kicker}
            </p>
            <h2 className="font-display text-balance text-[2.1rem] leading-[1.1] sm:text-[2.6rem] sm:leading-[1.08] text-ink">
              {projectsSection.headlineTop}
              <br />
              <span className="italic text-clay-600">{projectsSection.headlineBottom}</span>
            </h2>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous projects"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-white transition-colors"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next projects"
              className="h-11 w-11 flex items-center justify-center rounded-full bg-ink text-white hover:bg-clay-600 transition-colors"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal stagger>
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-6 overflow-x-auto px-6 sm:px-[max(1.5rem,calc((100vw-1240px)/2+1.25rem))] pb-2 snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="snap-start shrink-0 w-[280px] sm:w-[340px]"
            >
              <div className="relative overflow-hidden rounded-sm">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="h-[360px] sm:h-[420px] w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-sm text-[12px] text-ink">
                  {project.category}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-sm text-[12px] text-ink">
                  <Heart size={13} className="text-clay-600" /> {project.likes}
                </span>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-ink">{project.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-[13px] text-inkmuted">
                    <MapPin size={13} /> {project.location}
                  </p>
                </div>
                <p className="font-display text-lg text-clay-600 whitespace-nowrap">
                  {project.price}
                </p>
              </div>
              <p className="mt-2 flex items-center gap-1 text-[12px] text-inkmuted/80">
                <Eye size={13} /> {project.views.toLocaleString('en-IN')} views
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
