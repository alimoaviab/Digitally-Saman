'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';

const images = [
  '/WhatsApp Image 2026-05-30 at 22.07.42 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.42 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.42.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.43 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.43 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.43.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.44.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.45 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.45.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.48 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.48.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.49 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.49 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.49.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.50 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.50.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.51.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.53.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.54.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.56 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.56 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.56.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.57 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.57.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.59 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.07.59.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.00.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.02 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.02.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.03 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.03.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.04 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.04 (2).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.04.jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.05 (1).jpeg',
  '/WhatsApp Image 2026-05-30 at 22.08.05.jpeg',
];

export default function WorkPage() {
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
      setPhotoIndex((photoIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#03001e] pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#730099]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-[#ff758f]/5 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/5 hover:border-[#ff758f]/40 hover:bg-[#ff758f]/5 text-white/80 hover:text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#ff758f]">
            Portfolio Showcases
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-tight text-white mt-2">
            Our Work
          </h1>
          <p className="font-sans text-sm md:text-base text-white/50 mt-4 max-w-xl mx-auto">
            Explore screenshots of live campaigns, ad layouts, shopify store analytics, and growth performance results driven for our clients.
          </p>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-6 rounded-full" />
        </div>

        {/* Responsive Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/5 group cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 8) * 0.05 }}
              onClick={() => openLightbox(idx)}
              whileHover={{ y: -4 }}
            >
              {/* Image element */}
              <Image
                src={imgUrl}
                alt={`Digitally Saman Case Study ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover overlay magnifier */}
              <div className="absolute inset-0 bg-[#0c0423]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full border border-[#ff758f]/40 bg-[#ff758f]/10 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiZoomIn className="h-6 w-6" />
                </div>
              </div>

              {/* Tag indicator bottom left */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-xl bg-[#03001e]/60 backdrop-blur-sm border border-white/5 text-[9px] uppercase tracking-wider font-bold text-white/70">
                Case 0{idx + 1}
              </div>
            </motion.div>
          ))}
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
                src={images[photoIndex]}
                alt="Enlarged Case Study"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Footer index and mobile swipe instructions */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-white/50">
              <span className="font-semibold text-white/80">{photoIndex + 1}</span> of {images.length}
              <div className="md:hidden mt-2 text-[10px]">Tap background to close.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
