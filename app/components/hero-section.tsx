
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = [
    "Radiance from Within",
    "Sacred Style Alignment", 
    "Soul-Led Beauty",
    "Mystical Elegance"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mystical-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-luminous-ivory via-soft-blush to-luminous-ivory">
          <Image
            src="https://i.pinimg.com/originals/87/71/3d/87713db7fa204af3e90098d233d4f6ca.png"
            alt="Ethereal beauty and sacred style"
            fill
            className="object-cover opacity-20 mix-blend-soft-light"
            priority
          />
        </div>
      </div>

      {/* Sacred geometry overlay */}
      <div className="absolute inset-0 sacred-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Mystical Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 bg-sacred-gradient rounded-full flex items-center justify-center mystical-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-deep-plum mb-6 leading-tight"
          >
            The Most Radiant Version of You —{' '}
            <span className="text-gradient">Revealed</span>
          </motion.h1>

          {/* Rotating Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-16 flex items-center justify-center mb-8"
          >
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-montserrat text-xl sm:text-2xl lg:text-3xl font-light text-charcoal-grey"
            >
              {rotatingTexts[currentText]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-cardo text-lg sm:text-xl text-charcoal-grey/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sacred style for soul-led women. Discover your unique Soul Archetype and align your outer expression with your inner essence. When you dress from the soul out, radiance becomes inevitable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/quiz" className="btn-primary group">
              Discover Your Soul Archetype
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link href="/services" className="btn-secondary">
              Explore Sacred Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-charcoal-grey/60"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-radiant-fuchsia" />
              <span className="font-montserrat text-sm">1000+ Women Transformed</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-charcoal-grey/20"></div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-radiant-fuchsia" />
              <span className="font-montserrat text-sm">Sacred Style Methodology</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-charcoal-grey/20"></div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-radiant-fuchsia" />
              <span className="font-montserrat text-sm">Soul-Aligned Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-radiant-fuchsia rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-radiant-fuchsia rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
