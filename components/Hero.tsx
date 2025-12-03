import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToContact = () => {
    document.getElementById(SectionId.Contact)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById(SectionId.Services)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center perspective-1000">
          
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{ transform: "translateZ(30px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">AI · Copy · Systems</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
              style={{ transform: "translateZ(60px)" }}
            >
              Transform your brand with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Words That Sell
              </span>
              <span className="block text-3xl md:text-5xl mt-2 text-secondary font-medium">
                & Systems That Scale.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
              style={{ transform: "translateZ(40px)" }}
            >
              YouSaidCopy builds conversion-first websites, AI content flows, automated caller agents, and marketing systems so your business grows on autopilot.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              style={{ transform: "translateZ(50px)" }}
            >
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg shadow-[0_0_20px_rgba(59,162,255,0.3)] hover:shadow-[0_0_30px_rgba(59,162,255,0.5)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Start With YSC <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={scrollToServices}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors backdrop-blur-sm"
              >
                See How It Works
              </button>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="pt-8 text-sm text-gray-400 flex items-center justify-center gap-2"
               style={{ transform: "translateZ(20px)" }}
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Call for Strategy: <a href="tel:+923472080100" className="hover:text-white transition-colors">0347 2080100</a></span>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;