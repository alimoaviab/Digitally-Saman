'use client';

import { motion } from 'framer-motion';
import { FiEye, FiHeart, FiShield, FiZap, FiRadio, FiUserCheck } from 'react-icons/fi';

const cards = [
  {
    title: 'Consumer Decision Making',
    desc: 'Mapping cognitive friction points from click to cart. We optimize visuals to reduce choice fatigue and accelerate purchase speed.',
    icon: <FiEye className="h-6 w-6" />,
    color: 'from-[#ff758f]/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(255,117,143,0.15)]',
  },
  {
    title: 'Emotional Triggers',
    desc: 'Connecting campaign narratives directly with subconscious emotional drivers. Consumers buy on feeling and justify with logic.',
    icon: <FiHeart className="h-6 w-6" />,
    color: 'from-purple-500/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(115,0,153,0.15)]',
  },
  {
    title: 'Trust Building',
    desc: 'Dissolving buyer hesitation by layering authority cues, micro-commitments, and risk-reversal triggers at key transaction points.',
    icon: <FiShield className="h-6 w-6" />,
    color: 'from-[#ff007f]/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(255,0,127,0.15)]',
  },
  {
    title: 'Persuasion Psychology',
    desc: 'Applying ethical frameworks of urgency, social validation, and value framing to nudge page visits into direct sales interactions.',
    icon: <FiZap className="h-6 w-6" />,
    color: 'from-blue-500/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
  },
  {
    title: 'Attention Mechanics',
    desc: 'Leveraging pattern interrupts, high-impact imagery, and scroll-stopping loops to capture visitor interest in the crucial first 3 seconds.',
    icon: <FiRadio className="h-6 w-6" />,
    color: 'from-green-500/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
  },
  {
    title: 'Buyer Behavior',
    desc: 'Analyzing analytical pathways, scroll friction, and exit patterns to pre-emptively resolve customer objections on landing pages.',
    icon: <FiUserCheck className="h-6 w-6" />,
    color: 'from-[#9d4edd]/20 to-transparent',
    glow: 'shadow-[0_0_20px_rgba(157,78,221,0.15)]',
  },
];

export default function PsychologyEdge() {
  return (
    <section id="psychology-edge" className="relative py-24 md:py-32 overflow-hidden bg-[#03001e]">
      {/* Dynamic background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-[#730099]/5 blur-[160px] pointer-events-none" />

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
            The Competitive Advantage
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Psychology Matters In Marketing
          </motion.h2>
          <p className="font-sans text-sm md:text-base text-white/50 mt-4 max-w-xl mx-auto">
            Marketing without psychology is guessing. I base campaigns on proven human behavior models to drive consistent, scalable revenue.
          </p>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              className={`relative overflow-hidden glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-[280px] hover:border-[#ff758f]/40 hover:${card.glow} transition-all duration-500 cursor-default group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Inner subtle glow gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icon Container */}
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#ff758f] group-hover:bg-[#ff758f] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>

              {/* Text info */}
              <div className="mt-6 flex-grow">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#ff758f] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-white/50 mt-3 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {card.desc}
                </p>
              </div>

              {/* Decorative accent element */}
              <div className="h-1.5 w-6 rounded-full bg-white/10 group-hover:bg-[#ff758f] group-hover:w-12 transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
