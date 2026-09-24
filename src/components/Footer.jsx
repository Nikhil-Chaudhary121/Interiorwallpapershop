import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { brand, footerData, socialLinks } from '../data.js';

const iconMap = { Facebook, Instagram, Linkedin, Twitter };

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container max-w-content pt-24 pb-14 lg:pt-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-balance text-[2.2rem] leading-[1.1] md:text-[2.8rem] sm:leading-[1.07]">
              {footerData.headlineTop}
              <br />
              <span className="italic text-clay-400">{footerData.headlineBottom}</span>
            </h2>
          </Reveal>

          <Reveal className="flex flex-col items-start lg:items-end gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {footerData.socialProofAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-ink object-cover"
                  />
                ))}
              </div>
              <span className="text-[13px] text-white/70">{footerData.socialProofLabel}</span>
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center rounded-sm bg-white text-ink px-7 py-3.5 text-[15px] hover:bg-clay-400 hover:text-white transition-colors duration-300"
            >
              {footerData.cta.label}
            </a>
          </Reveal>
        </div>

        <Reveal
          stagger
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-14"
        >
          <div>
            <h4 className="text-[13px] tracking-wide text-white/50 mb-5">Contact</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay-400" />
                {footerData.contact.address}
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="shrink-0 text-clay-400" />
                <a href={`mailto:${footerData.contact.email}`} className="hover:text-white transition-colors">
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="shrink-0 text-clay-400" />
                <a href={`tel:${footerData.contact.phone}`} className="hover:text-white transition-colors">
                  {footerData.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wide text-white/50 mb-5">Services</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80">
              {footerData.servicesLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wide text-white/50 mb-5">Company</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80">
              {footerData.companyLinks.map((item) => (
                <li key={item}>
                  <a href="#home" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact-form">
            <h4 className="text-[13px] tracking-wide text-white/50 mb-5">Newsletter</h4>
            <p className="text-[14px] text-white/70 leading-relaxed mb-4">
              Studio notes and finished projects, a few times a year.
            </p>
            {subscribed ? (
              <p className="text-[14px] text-clay-400">You're on the list — thank you.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center border-b border-white/25 pb-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent flex-1 text-[14px] text-white placeholder:text-white/40 outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="text-clay-400 hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <div className="mt-14 flex items-center gap-4 border-t border-white/10 pt-8">
          <span className="text-[13px] text-white/50">Social media</span>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.platform}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 pb-8 overflow-hidden">
        <div className="container max-w-content">
          <p className="font-display text-[10vw] md:text-[19vw] sm:text-[6.5rem] lg:text-[8rem] leading-none tracking-tight text-white">
            {brand.name}
            <span className="italic text-clay-400">{brand.accent}</span>
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[13px] text-white/50">
              © {new Date().getFullYear()} {brand.name} {brand.accent}. All rights reserved.
            </p>
            <a href="#home" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
