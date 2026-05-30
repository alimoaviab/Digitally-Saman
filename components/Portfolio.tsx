'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiArrowRight } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const previewImages = [
  '/WhatsApp Image 2026-05-30 at 22.07.42 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.42.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.43 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.43 (2).jpeg',
];

export default function Portfolio() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setPhotoIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % previewImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + previewImages.length) % previewImages.length);
    }
  };

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
          <p className="font-sans text-sm text-white/50 mt-4">
            Recent Campaigns & Store Performance Results
          </p>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Grid of Preview Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {previewImages.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/5 group cursor-zoom-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => openLightbox(idx)}
              whileHover={{ y: -4 }}
            >
              {/* Product Image */}
              <Image
                src={imgUrl}
                alt={`Featured Work ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#0c0423]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full border border-[#ff758f]/40 bg-[#ff758f]/10 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiZoomIn className="h-6 w-6" />
                </div>
              </div>

              {/* Tag indicator bottom left */}
              <div className="absolute bottom-6 left-6 px-4 py-1.5 rounded-xl bg-[#03001e]/60 backdrop-blur-sm border border-white/5 text-xs font-bold text-white/80">
                Featured Case 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Option Button */}
        <div className="flex justify-center mt-12">
          <Link href="/work">
            <MagneticButton>
              <div className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff007f] to-[#730099] text-white font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,0,127,0.3)] flex items-center gap-2 cursor-pointer">
                See More Work
                <FiArrowRight className="h-4 w-4" />
              </div>
            </MagneticButton>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {photoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#03001e]/95 backdrop-blur-sm select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white/75 hover:bg-white/10 hover:text-white transition-all cursor-pointer z-50 border border-white/5"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Left Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 p-4 rounded-full bg-white/5 text-white/75 hover:bg-white/10 hover:text-white transition-all cursor-pointer z-50 border border-white/5 hidden md:block"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 p-4 rounded-full bg-white/5 text-white/75 hover:bg-white/10 hover:text-white transition-all cursor-pointer z-50 border border-white/5 hidden md:block"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>

            {/* Image display container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[75vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={previewImages[photoIndex]}
                alt="Enlarged Case Study"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Footer index and mobile swipe instructions */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-white/50">
              <span className="font-semibold text-white/80">{photoIndex + 1}</span> of {previewImages.length}
              <div className="md:hidden mt-2 text-[10px]">Tap background to close.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
