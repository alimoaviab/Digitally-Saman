'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
  {
    stars: 5,
    text: 'Saman transformed our marketing strategy and helped us generate quality leads consistently. Outstanding communication.',
    author: 'Sarah Jenkins',
    role: 'Marketing Director, BrightSaaS',
    initials: 'SJ',
    bg: 'from-[#ff758f]/10 to-transparent',
  },
  {
    stars: 5,
    text: 'Excellent understanding of customer psychology and digital growth. Highly recommend for Meta and Google campaign scale.',
    author: 'David Vance',
    role: 'Founder, Vance Apparel',
    initials: 'DV',
    bg: 'from-purple-500/10 to-transparent',
  },
  {
    stars: 5,
    text: 'Professional, responsive and results-driven. Understood our brand goals immediately and exceeded target pipeline metrics.',
    author: 'Alia Khan',
    role: 'CEO, Horizon Logistics',
    initials: 'AK',
    bg: 'from-[#ff007f]/10 to-transparent',
  },
  {
    stars: 5,
    text: 'Our store performance improved significantly after working with Saman. The conversion optimization audits alone were worth it.',
    author: 'Marcus Cole',
    role: 'Growth Lead, Luna Cosmetics',
    initials: 'MC',
    bg: 'from-blue-500/10 to-transparent',
  },
];

// Duplicate items to ensure smooth continuous marquee flow
const marqueeReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-[#0c0423]/50">
      {/* Decorative gradient lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-96 h-96 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Reviews
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What My Clients Say
          </motion.h2>
          <p className="font-sans text-sm md:text-base text-white/50 mt-4 max-w-xl mx-auto">
            Read comments from enterprise leaders and e-commerce founders scaled through our methodology.
          </p>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Infinite Scrolling Ribbon */}
      <div className="relative flex overflow-x-hidden w-full py-4 mt-4">
        {/* Shadow overlays for smooth edge fading */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#03001e] to-transparent z-15 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#03001e] to-transparent z-15 pointer-events-none" />

        <div className="animate-marquee gap-8 px-4">
          {marqueeReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[300px] md:w-[400px] shrink-0 glass p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-[230px] hover:border-[#ff758f]/40 hover:shadow-[0_4px_25px_rgba(255,117,143,0.08)] transition-all duration-300 group cursor-default"
            >
              {/* Internal card background accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${review.bg} opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div>
                {/* Rating Star Row */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-xs md:text-sm text-white/70 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Footer info */}
              <div className="flex items-center gap-3 mt-6 border-t border-white/5 pt-4">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#ff007f] to-[#730099] flex items-center justify-center font-display font-bold text-xs text-white shrink-0 shadow-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-none">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-white/40 mt-1 block">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
