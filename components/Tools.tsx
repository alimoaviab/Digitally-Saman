'use client';

import { motion } from 'framer-motion';
import { FiTrendingUp, FiSearch, FiSliders, FiFileText, FiVideo, FiShoppingBag, FiLayers, FiKey, FiTarget } from 'react-icons/fi';

const tools = [
  {
    name: 'Meta Ads Manager',
    desc: 'Setting campaign structures, pixel configurations, custom audience builder, and A/B tests.',
    icon: <FiSliders className="h-6 w-6 text-blue-400" />,
  },
  {
    name: 'Google Analytics',
    desc: 'Full-funnel behavioral mapping, custom event tracking, traffic analysis, and demographic breakdowns.',
    icon: <FiTrendingUp className="h-6 w-6 text-orange-400" />,
  },
  {
    name: 'Google Search Console',
    desc: 'SEO index diagnostics, organic traffic patterns, core web vitals, and CTR optimizations.',
    icon: <FiSearch className="h-6 w-6 text-yellow-500" />,
  },
  {
    name: 'Meta Pixel & Conversions API',
    desc: 'Server-side and browser event mapping, deduplication configs, and data match parameters.',
    icon: <FiTarget className="h-6 w-6 text-pink-400" />,
  },
  {
    name: 'Shopify Admin Panel',
    desc: 'Theme design, product architecture, collection maps, inventory syncs, and apps integration.',
    icon: <FiShoppingBag className="h-6 w-6 text-green-500" />,
  },
  {
    name: 'Canva Pro',
    desc: 'Graphic layouts, content visual assets, brand kits, ad creatives, and high-fidelity mockups.',
    icon: <FiLayers className="h-6 w-6 text-teal-400" />,
  },
  {
    name: 'CapCut Pro',
    desc: 'High-impact short form reels editing, sound mixing, frame cuts, and text animations.',
    icon: <FiVideo className="h-6 w-6 text-indigo-400" />,
  },
  {
    name: 'MS Office & Sheets',
    desc: 'Large data cleaning, pivot analytics, client dashboards, content calendars, and pipelines.',
    icon: <FiFileText className="h-6 w-6 text-emerald-400" />,
  },
  {
    name: 'Keyword Research Tools',
    desc: 'Search intent analysis, competitor ranking gaps, CPC maps, and semantic volume tracking.',
    icon: <FiKey className="h-6 w-6 text-violet-400" />,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="relative py-24 bg-[#0c0423]/50">
      {/* Side background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Stack
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tools of the Trade
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start hover:border-[#ff758f]/30 hover:shadow-[0_4px_20px_rgba(255,117,143,0.06)] transition-all duration-300 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {tool.icon}
              </div>

              {/* Information */}
              <div>
                <h3 className="font-sans font-bold text-sm text-white group-hover:text-[#ff758f] transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="font-sans text-[11px] text-white/50 leading-relaxed mt-1.5 group-hover:text-white/70 transition-colors duration-300">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
