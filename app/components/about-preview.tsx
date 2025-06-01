
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ArrowRight, Sparkles } from 'lucide-react';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-luminous-ivory">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/originals/b6/0a/f0/b60af0a20d78722d81690af213e5354f.jpg"
                alt="Nathalie Chapron - Founder of Enlightened Beauty"
                fill
                className="object-cover"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-radiant-fuchsia/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-deep-plum/20 rounded-full blur-xl"></div>
            </div>

            {/* Quote Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-lg p-6 shadow-xl max-w-xs"
            >
              <Quote className="w-6 h-6 text-radiant-fuchsia mb-2" />
              <p className="font-cardo text-sm text-charcoal-grey italic">
                "True beauty is the sacred union of inner essence and outer elegance."
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-radiant-fuchsia" />
              <span className="font-montserrat font-medium text-radiant-fuchsia uppercase tracking-wide text-sm">
                Meet Your Guide
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-plum mb-6">
              Hello, Beautiful Soul
            </h2>

            <div className="space-y-6 font-cardo text-lg text-charcoal-grey/80 leading-relaxed">
              <p>
                I'm Nathalie Chapron, and I believe that every woman deserves to feel 
                radiant, confident, and magnetically aligned with her truest self. 
                For over a decade, I've been guiding transformational women to discover 
                their unique style essence.
              </p>

              <p>
                My approach isn't about following trends or fitting into someone else's 
                idea of beauty. It's about uncovering the sacred frequency of who you 
                truly are and expressing that through your style choices. When you dress 
                from the soul out, everything changes.
              </p>

              <p>
                Through my Soul Archetype methodology, I've helped over 1,000 women 
                step into their most radiant selves. Each woman I work with discovers 
                that true beauty isn't about perfection—it's about alignment.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 my-8 py-6 border-t border-b border-radiant-fuchsia/20"
            >
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-radiant-fuchsia">1000+</div>
                <div className="font-montserrat text-sm text-charcoal-grey/60">Women Transformed</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-radiant-fuchsia">10+</div>
                <div className="font-montserrat text-sm text-charcoal-grey/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-radiant-fuchsia">8</div>
                <div className="font-montserrat text-sm text-charcoal-grey/60">Soul Archetypes</div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-soft-blush rounded-lg p-6 mb-8"
            >
              <h3 className="font-playfair text-xl font-bold text-deep-plum mb-3">
                My Sacred Belief
              </h3>
              <p className="font-cardo text-charcoal-grey/80 italic">
                "When we realize inner union—when our soul and self become one—we experience 
                the Kingdom of Heaven, here on Earth. Your style is a sacred expression of 
                this divine alignment."
              </p>
            </motion.div>

            <Link href="/about" className="btn-primary group">
              Discover My Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
