'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does psychology actually increase conversion rates?',
    answer: 'By removing cognitive friction. Instead of pushing generic sales pitches, we align copy and visual layouts with standard human decision patterns (cognitive heuristics). We design visual hierarchy around eyes scanning behavior, trigger emotional interest in the first 3 seconds, and solve objections pre-emptively. This turns passive clicks into active checkouts.',
  },
  {
    question: 'What advertising budgets do you usually manage?',
    answer: 'I handle multi-channel budgets ranging from $1,000/month to $20,000+/month. My primary focus is establishing positive unit economics (ROAS) at small budgets before scaling. Once we verify tracking match rates and conversion thresholds, we systematically scale ad budgets.',
  },
  {
    question: 'Do you manage e-commerce stores other than Shopify?',
    answer: 'Yes. While Shopify is my primary e-commerce environment due to its premium checkout hooks and modular ecosystem, I also optimize WooCommerce and custom SaaS checkout systems. The core behavioral purchase triggers remain consistent regardless of the platform.',
  },
  {
    question: 'What is your typical client onboarding and setup timeline?',
    answer: 'Our strategic onboarding runs between 7 to 10 business days. This timeframe covers full funnel data tracking integrations (Meta Pixel, Google Analytics, Conversions API), competitor research, customer persona mapping, copywriting, and initial creative setup.',
  },
  {
    question: 'How do you track campaign data to prevent ad attribution errors?',
    answer: 'I combine standard browser tracking with server-side API setups (Meta Conversions API & GA4 Server Logs). This dual-data pipeline circumvents iOS14+ tracking blocks, resolves browser ad-blockers, and ensures near-100% data matching for precise campaign optimizations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#03001e]">
      {/* Background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-[#730099]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Answering Objections
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="glass rounded-2xl border border-white/5 overflow-hidden transition-colors duration-300 hover:border-[#ff758f]/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Accordion Trigger Head */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-white select-none focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans font-bold text-sm md:text-base group-hover:text-[#ff758f] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="h-7 w-7 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-[#ff758f] group-hover:text-white transition-colors duration-300 shrink-0">
                    {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-white/60 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
