'use client';

import { motion, Variants } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const stats = [
  {
    number: '2+',
    label: 'Years Experience',
    desc: 'In performance marketing and full-funnel growth.',
    icon: <FiBriefcase className="h-6 w-6 text-[#ff758f]" />,
  },
  {
    number: '12+',
    label: 'Industries Served',
    desc: 'E-commerce, SaaS, Real Estate, and Lead Gen.',
    icon: <FiTrendingUp className="h-6 w-6 text-purple-400" />,
  },
  {
    number: '100%',
    label: 'Psychology-Backed',
    desc: 'Strategies designed around real consumer behavior.',
    icon: <FiBookOpen className="h-6 w-6 text-pink-400" />,
  },
  {
    number: '4.8x',
    label: 'Average ROAS',
    desc: 'Consistent positive return on advertising spend.',
    icon: <FiCheckCircle className="h-6 w-6 text-green-400" />,
  },
];

const timeline = [
  {
    year: '2023',
    title: "Master's in Psychology",
    desc: 'Specialized in cognitive behavior, decision mechanics, and emotional persuasion triggers.',
  },
  {
    year: '2024',
    title: 'Digital Growth Strategist',
    desc: 'Bridged behavioral sciences and data marketing to scale local and global brands.',
  },
  {
    year: '2025',
    title: 'Performance Marketing Specialist',
    desc: 'Leading multi-channel campaigns, Shopify growth, and lead-gen funnels for premium clients.',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0c0423]/50">
      {/* Decorative side lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Strategist Behind the Growth
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who Is Saman?
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff758f]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Bridging Psychology + Digital Marketing
              </h3>
              
              <p className="font-sans text-white/70 leading-relaxed mb-6">
                I transform digital presence into measurable business growth by combining deep psychology-driven strategies with data-backed execution. Unlike generic marketing tactics that rely on guesswork, my approach is rooted in understanding <strong>why</strong> consumers behave the way they do.
              </p>

              <p className="font-sans text-white/70 leading-relaxed mb-8">
                Holding a <strong>Master’s in Psychology</strong> and having <strong>2 years of industry experience</strong> as a Digital Growth Strategist, I specialize in analyzing consumer decision paths, identifying emotional action triggers, and building digital funnels that capture attention, build trust, and maximize conversion rates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-[#ff758f]/10 text-[#ff758f] shrink-0">✓</div>
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm">Consumer Behavior Expert</h4>
                    <p className="text-xs text-white/50">Scientific perspective on purchase intent.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-[#ff758f]/10 text-[#ff758f] shrink-0">✓</div>
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm">Digital Growth Strategist</h4>
                    <p className="text-xs text-white/50">End-to-end multi-channel scale.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-[#ff758f]/10 text-[#ff758f] shrink-0">✓</div>
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm">Campaign Architect</h4>
                    <p className="text-xs text-white/50">High-converting Meta, Google, TikTok ads.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-[#ff758f]/10 text-[#ff758f] shrink-0">✓</div>
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm">Shopify Funnel Tuner</h4>
                    <p className="text-xs text-white/50">CRO and product catalog optimizations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="p-4">
              <h4 className="font-display font-bold text-xl text-white mb-6">Strategic Timeline</h4>
              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                  >
                    <div className="h-7 w-7 rounded-full bg-[#0c0423] border-2 border-[#ff758f] flex items-center justify-center text-[10px] font-bold text-white shrink-0 z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-bold text-[#ff758f] px-2 py-0.5 rounded bg-[#ff758f]/10">{item.year}</span>
                        <h5 className="font-sans font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stat Cards Grid */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass p-6 rounded-2xl flex flex-col justify-between hover:border-[#ff758f]/40 hover:shadow-[0_4px_20px_rgba(255,117,143,0.1)] transition-all duration-300 group cursor-default"
                whileHover={{ y: -8 }}
              >
                <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="mt-8">
                  <span className="font-display font-black text-4xl text-white tracking-tight block">
                    {stat.number}
                  </span>
                  <span className="font-sans font-bold text-sm text-[#ff758f] mt-1 block">
                    {stat.label}
                  </span>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
