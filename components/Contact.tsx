'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle, FiInstagram, FiFacebook, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: 'Social Media Management',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', website: '', service: 'Social Media Management', message: '' });
    }, 4000);
  };

  const whatsappUrl = 'https://wa.me/923304617934?text=Hi%20Saman%2C%20I%20would%20like%20to%20book%20a%20digital%20marketing%20discovery%20call%20for%20my%20brand.';
  const emailUrl = 'mailto:digitallysaman@gmail.com?subject=Discovery%20Call%20Inquiry%20-%20Digitally%20Saman';

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#03001e]">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: CTA & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.span
                className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Let&apos;s Connect
              </motion.span>
              
              <motion.h2
                className="font-display font-black text-4xl md:text-5xl leading-tight tracking-tight text-white mt-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Let&apos;s Grow Your Brand Together
              </motion.h2>

              <p className="font-sans text-sm text-white/60 leading-relaxed mb-10">
                Ready to transform your digital footprint into measurable revenue? Reach out today to schedule your 15-minute discovery audit. We will analyze your bottlenecks and formulate a plan.
              </p>

              {/* Information Cards */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 flex items-center justify-center text-[#ff758f] shrink-0 border border-white/5">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">Email Me</span>
                    <a href={emailUrl} className="font-sans font-bold text-sm text-white hover:text-[#ff758f] transition-colors">
                      digitallysaman@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 flex items-center justify-center text-[#ff758f] shrink-0 border border-white/5">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">Call / WhatsApp</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-sm text-white hover:text-[#ff758f] transition-colors">
                      +92 330 4617934
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 flex items-center justify-center text-[#ff758f] shrink-0 border border-white/5">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">Location</span>
                    <span className="font-sans font-bold text-sm text-white">
                      Rawalpindi, Pakistan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div>
              <h4 className="text-xs uppercase font-bold text-white/40 tracking-wider mb-4">Direct Contact Methods</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-xs uppercase tracking-wider hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.1)] cursor-pointer"
                >
                  <FiMessageCircle className="h-4 w-4" />
                  WhatsApp Me
                </a>
                <a
                  href={emailUrl}
                  className="px-5 py-3 rounded-full bg-[#ff758f]/10 border border-[#ff758f]/30 text-[#ff758f] font-bold text-xs uppercase tracking-wider hover:bg-[#ff758f] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,117,143,0.1)] cursor-pointer"
                >
                  <FiMail className="h-4 w-4" />
                  Email Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff758f]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-display font-bold text-xl text-white mb-6">Send A Direct Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="form-name" className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2">Your Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="bg-white/5 border border-white/5 focus:border-[#ff758f] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="form-email" className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2">Work Email</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@business.com"
                    className="bg-white/5 border border-white/5 focus:border-[#ff758f] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Website */}
                <div className="flex flex-col">
                  <label htmlFor="form-website" className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2">Website Link (Optional)</label>
                  <input
                    id="form-website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="e.g. www.brand.com"
                    className="bg-white/5 border border-white/5 focus:border-[#ff758f] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                  />
                </div>

                {/* Selected Service */}
                <div className="flex flex-col">
                  <label htmlFor="form-service" className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2">Interest Service</label>
                  <select
                    id="form-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-[#0c0423] border border-white/5 focus:border-[#ff758f] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Shopify Store Management">Shopify Store Management</option>
                    <option value="Lead Generation & Outreach">Lead Generation & Outreach</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="form-message" className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2">Your Message / Brand Goals</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me briefly about your current marketing goals or hurdles..."
                  className="bg-white/5 border border-white/5 focus:border-[#ff758f] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#730099] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,0,127,0.2)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Submit Strategic Inquiry</span>
                    <FiSend className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Social Channels Row */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider">Follow My Channels</span>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/digitallysaman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#ff758f] hover:text-white transition-all cursor-pointer border border-white/5"
                    aria-label="Instagram Profile"
                  >
                    <FiInstagram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/14jhbWeiQXU/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-white/5"
                    aria-label="Facebook Profile"
                  >
                    <FiFacebook className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
