'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiActivity, FiTarget, FiTrendingUp } from 'react-icons/fi';

const categories = [
  'All',
  'Social Media Campaigns',
  'Lead Generation Projects',
  'Shopify Management',
  'Digital Marketing Strategy',
];

const projects = [
  {
    id: 1,
    title: 'Skincare Organic Brand Rebuild',
    category: 'Social Media Campaigns',
    image: '/portfolio_smm.png',
    desc: 'Complete social presence rebuild for a luxury cosmetics label, creating high-converting vertical video formats.',
    metrics: [
      { label: 'Reach Growth', value: '+148%', icon: <FiTrendingUp className="h-4 w-4" /> },
      { label: 'Followers gained', value: '12.4k', icon: <FiActivity className="h-4 w-4" /> },
      { label: 'Engagement Rate', value: '3.85%', icon: <FiTarget className="h-4 w-4" /> },
    ],
    challenge: 'The client faced stagnant follower growth and single-digit comment counts. Their visual aesthetic was inconsistent and failed to communicate their premium price point.',
    solution: 'Designed a high-contrast psychological feed layout. Executed a CapCut-based reels strategy utilizing fast editing styles, matching typography, and behavioral pattern interrupts inside the first 3 seconds.',
  },
  {
    id: 2,
    title: 'B2B SaaS Mid-Market Pipeline',
    category: 'Lead Generation Projects',
    image: '/portfolio_leadgen.png',
    desc: 'Automated multi-channel prospecting campaign utilizing cold email arrays and LinkedIn touchpoints.',
    metrics: [
      { label: 'Booked Discovery Calls', value: '120+', icon: <FiActivity className="h-4 w-4" /> },
      { label: 'Outreach Open Rate', value: '22.8%', icon: <FiTarget className="h-4 w-4" /> },
      { label: 'Ad-spend pipeline', value: '$84k', icon: <FiTrendingUp className="h-4 w-4" /> },
    ],
    challenge: 'Cold lists were returning sub-1% click rates, and lead lists had high bounce rates due to outdated data sheets.',
    solution: 'Developed localized prospect lists using advanced scraping tools. Integrated automated sequences containing highly personalized pain-point summaries and easy booking links.',
  },
  {
    id: 3,
    title: 'Luna Premium Cosmetics CRO',
    category: 'Shopify Management',
    image: '/portfolio_shopify.png',
    desc: 'User experience optimization and product landing page redesign for an international beauty storefront.',
    metrics: [
      { label: 'Conversion Lift', value: '+42.5%', icon: <FiTrendingUp className="h-4 w-4" /> },
      { label: 'Store ROAS', value: '4.8x', icon: <FiTarget className="h-4 w-4" /> },
      { label: 'Cart Drop-off', value: '-18%', icon: <FiActivity className="h-4 w-4" /> },
    ],
    challenge: 'Heavy ad spend was driving high traffic volume, but the site suffered a steep 88% abandonment rate at the shipping details step.',
    solution: 'Re-designed product listings, added dynamic psychology-based social badges next to checkout triggers, optimized images, and enabled instant checkout steps.',
  },
  {
    id: 4,
    title: 'Omnichannel Scale Blueprint',
    category: 'Digital Marketing Strategy',
    image: '/portfolio_strategy.png',
    desc: 'Psychology-led marketing strategy mapping, coordinating paid social, search ad flows, and email CRM loops.',
    metrics: [
      { label: 'Average Campaign ROAS', value: '5.2x', icon: <FiTrendingUp className="h-4 w-4" /> },
      { label: 'Budget scale', value: '3.0x', icon: <FiActivity className="h-4 w-4" /> },
      { label: 'Server API Match', value: '100%', icon: <FiTarget className="h-4 w-4" /> },
    ],
    challenge: 'Ad campaigns were overlapping in target cohorts, causing bids to cannibalize one another and driving CAC up.',
    solution: 'Constructed detailed cognitive avatars mapping to different awareness tiers. Formulated tailored creative ads for cold, warm, and hot buyer stages.',
  },
];

type ProjectType = typeof projects[number];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#03001e]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#ff758f]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#730099]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Case Studies
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#ff007f] to-[#730099] border-transparent text-white shadow-[0_4px_15px_rgba(255,0,127,0.3)]'
                  : 'bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl glass border border-white/5 group aspect-video cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Product Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03001e] via-[#03001e]/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover Text Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase font-bold text-[#ff758f] tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#ff758f] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-white/60 mt-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.desc}
                  </p>
                  
                  {/* Click to expand pill */}
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-white font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <span>View Case Study</span>
                    <FiExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay Case Study */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#03001e]/85 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto glass-premium rounded-3xl border border-[#ff758f]/20 p-6 md:p-10 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer z-20"
                >
                  <FiX className="h-5 w-5" />
                </button>

                {/* Grid details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
                  {/* Image Display */}
                  <div className="md:col-span-6 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Top Text Meta */}
                  <div className="md:col-span-6 flex flex-col justify-center">
                    <span className="text-xs uppercase font-bold text-[#ff758f] tracking-widest">
                      {activeProject.category}
                    </span>
                    <h3 className="font-display font-black text-3xl text-white mt-2 leading-tight">
                      {activeProject.title}
                    </h3>
                    <p className="font-sans text-sm text-white/70 mt-4 leading-relaxed">
                      {activeProject.desc}
                    </p>
                  </div>
                </div>

                {/* Metrics ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-8 my-8">
                  {activeProject.metrics.map((metric) => (
                    <div key={metric.label} className="glass p-4 rounded-xl flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-[#ff758f]/10 flex items-center justify-center text-[#ff758f]">
                        {metric.icon}
                      </div>
                      <div>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">{metric.label}</span>
                        <span className="font-display font-bold text-lg text-white mt-0.5 block">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="font-display font-bold text-[#ff758f] text-base mb-3 uppercase tracking-wider">The Challenge</h4>
                    <p className="font-sans text-white/70 leading-relaxed">{activeProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-purple-400 text-base mb-3 uppercase tracking-wider">The Psychology-Driven Solution</h4>
                    <p className="font-sans text-white/70 leading-relaxed">{activeProject.solution}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
