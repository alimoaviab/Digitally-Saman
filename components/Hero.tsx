'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiTrendingUp, FiBriefcase, FiMusic, FiShoppingBag, FiMessageSquare } from 'react-icons/fi';
import MagneticButton from './MagneticButton';
import AnimatedCounter from './AnimatedCounter';

const badges = [
  { text: 'Meta and Google Ads', icon: <FiTrendingUp className="h-3.5 w-3.5 text-[#ff758f] shrink-0" /> },
  { text: 'TikTok Ads', icon: <FiMusic className="h-3.5 w-3.5 text-[#ff758f] shrink-0" /> },
  { text: 'Shopify', icon: <FiShoppingBag className="h-3.5 w-3.5 text-[#ff758f] shrink-0" /> },
  { text: 'Lead Gen', icon: <FiTarget className="h-3.5 w-3.5 text-[#ff758f] shrink-0" /> },
  { text: 'Social Media', icon: <FiMessageSquare className="h-3.5 w-3.5 text-[#ff758f] shrink-0" /> },
];

const stats = [
  { value: 2, suffix: '+', label: 'Years Exp.' },
  { value: 50, suffix: '+', label: 'Clients' },
  { value: 3, suffix: '×', label: 'Avg ROI' },
];

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden gradient-bg-main"
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#730099]/20 blur-[120px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-[#ff758f]/10 blur-[130px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Glowing Pill Tag */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass border border-[#ff758f]/20 text-[#ff758f] font-sans text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff007f] animate-pulse" />
              ✦ Digital Marketing Expert · Rawalpindi
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-black text-5xl md:text-7xl leading-tight tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Beyond Just <br />
            <span className="gradient-text glow-text-pink">Clicks.</span>
          </motion.h1>

          <motion.p
            className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            I transform your digital presence into tangible, measurable success. Smart strategies. Sustainable growth. Real results.
          </motion.p>

          {/* Badges Ribbon */}
          <motion.div 
            className="flex flex-wrap gap-2.5 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {badges.map((badge, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 font-sans font-medium text-white/90">
                {badge.icon}
                {badge.text}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <MagneticButton>
              <button
                onClick={() => handleScrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff007f] to-[#730099] text-white font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center justify-center gap-2 cursor-pointer h-full"
              >
                Start Working Together
                <FiArrowRight className="h-4 w-4" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button
                onClick={() => handleScrollToSection('services')}
                className="px-8 py-4 rounded-full glass border border-white/10 hover:border-[#ff758f]/40 hover:bg-[#ff758f]/5 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center cursor-pointer h-full"
              >
                Explore Services
              </button>
            </MagneticButton>
          </motion.div>

          {/* Stats Ribbon */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 max-w-md">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="h-10 block">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider block mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Content - Artwork & Widgets */}
        <div className="hidden lg:flex lg:col-span-6 relative justify-center items-center h-[500px] lg:h-[600px] w-full">
          {/* Main Artwork Container */}
          <motion.div
            className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] rounded-3xl overflow-hidden glass-premium flex justify-center items-center group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#730099]/20 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            <Image
              src="/branding_artwork.png"
              alt="Digitally Saman Branding Artwork"
              fill
              priority
              sizes="(max-width: 768px) 340px, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Floating Widget 1: Conversion Rate */}
          <motion.div
            className="absolute top-8 left-0 sm:left-4 glass border border-[#ff758f]/20 p-4 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-xl bg-[#ff007f]/10 flex items-center justify-center text-[#ff758f]">
              <FiTarget className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Average ROAS</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-lg text-white">3.0x+</span>
                <span className="text-xs text-green-400 font-semibold flex items-center">+1.5x</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 2: Reach */}
          <motion.div
            className="absolute bottom-10 right-0 sm:right-4 glass border border-[#730099]/30 p-4 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20"
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-xl bg-[#730099]/20 flex items-center justify-center text-purple-300">
              <FiBriefcase className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Total Campaigns</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-lg text-white">150+</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">Meta & Google</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 3: Conversion Indicators */}
          <motion.div
            className="absolute top-12 right-2 sm:right-10 glass border border-white/10 p-3 rounded-2xl flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 text-xs text-white/80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-ping" />
            <span>Campaigns Active Now</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
