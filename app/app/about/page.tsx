
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles, Star, Quote } from 'lucide-react';

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const coreValues = [
    {
      icon: Heart,
      title: "Authentic Self-Expression",
      description: "We believe every woman deserves to express her truest self through her style choices, free from societal pressures or trends."
    },
    {
      icon: Sparkles,
      title: "Sacred Beauty",
      description: "Beauty is a frequency that emanates from within. When we align our outer expression with our inner essence, we become magnetic."
    },
    {
      icon: Star,
      title: "Soul-Centered Approach",
      description: "Our methodology honors the soul first, recognizing that true style transformation begins with inner alignment and self-love."
    }
  ];

  const journey = [
    {
      year: "2010",
      title: "The Awakening",
      description: "After years of feeling disconnected from my own style, I began exploring the deeper connection between inner essence and outer expression."
    },
    {
      year: "2015",
      title: "Sacred Study",
      description: "Immersed myself in color psychology, archetypal studies, and energy work to understand the mystical aspects of personal style."
    },
    {
      year: "2018",
      title: "Soul Archetype Method",
      description: "Developed the revolutionary Soul Archetype methodology, combining spiritual wisdom with practical style guidance."
    },
    {
      year: "2020",
      title: "Enlightened Beauty Born",
      description: "Launched Enlightened Beauty to serve transformational women seeking authentic style alignment and sacred self-expression."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-mystical-gradient" ref={heroRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-plum mb-6">
              Sacred Style for{' '}
              <span className="text-gradient">Soul-Led Women</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Where French sophistication meets soul alignment. Discover the sacred art 
              of expressing your truest self through style.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <Quote className="w-8 h-8 text-radiant-fuchsia mx-auto mb-4" />
              <blockquote className="font-cardo text-lg text-charcoal-grey italic">
                "True beauty is the sacred union of inner essence and outer elegance. 
                When soul and style unite, radiance becomes inevitable."
              </blockquote>
              <cite className="font-montserrat text-sm text-radiant-fuchsia font-medium mt-4 block">
                — Nathalie Chapron, Founder
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-luminous-ivory" ref={storyRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/e5/5d/a7/e55da7b7f39f83b2f7b6b1789b9133fd.jpg"
                  alt="Nathalie Chapron - Founder of Enlightened Beauty"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
                My Sacred Journey
              </h2>

              <div className="space-y-6 font-cardo text-lg text-charcoal-grey/80 leading-relaxed">
                <p>
                  Bonjour, beautiful soul. I'm Nathalie Chapron, and my journey to creating 
                  Enlightened Beauty began with my own style awakening. For years, I felt 
                  disconnected from my appearance, shopping endlessly but never feeling 
                  truly myself in my clothes.
                </p>

                <p>
                  Growing up in France, I was surrounded by effortless elegance, yet I 
                  struggled to find my own authentic expression. It wasn't until I began 
                  exploring the deeper connection between our inner essence and outer 
                  appearance that everything changed.
                </p>

                <p>
                  Through years of study in color psychology, archetypal wisdom, and 
                  energy work, I discovered that true style isn't about following trends—
                  it's about honoring the sacred frequency of who you truly are. This 
                  revelation became the foundation of my Soul Archetype methodology.
                </p>

                <p>
                  Today, I have the profound honor of guiding transformational women to 
                  discover their unique style essence. Each woman I work with reminds me 
                  that when we align our outer expression with our inner truth, we don't 
                  just look beautiful—we become magnetic.
                </p>
              </div>

              <div className="mt-8 p-6 bg-soft-blush rounded-lg">
                <h3 className="font-playfair text-xl font-bold text-deep-plum mb-3">
                  My Sacred Mission
                </h3>
                <p className="font-cardo text-charcoal-grey/80">
                  To help every transformational woman align her inner essence with her 
                  outer expression, so she can be seen, valued, and magnetically attract 
                  her soul-aligned opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-deep-plum text-luminous-ivory" ref={philosophyRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-luminous-ivory mb-6">
              The Enlightened Beauty Philosophy
            </h2>
            <p className="font-cardo text-xl text-luminous-ivory/80 max-w-3xl mx-auto leading-relaxed">
              Our approach transcends traditional styling to honor the sacred connection 
              between your soul and your style.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-radiant-fuchsia rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-luminous-ivory mb-4">
                    {value.title}
                  </h3>
                  <p className="font-cardo text-luminous-ivory/80 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-soft-blush" ref={valuesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
              The Sacred Journey
            </h2>
            <p className="font-cardo text-xl text-charcoal-grey/80 max-w-3xl mx-auto leading-relaxed">
              From personal awakening to serving thousands of women worldwide
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {journey.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={valuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-sacred-gradient rounded-full flex items-center justify-center">
                        <span className="font-montserrat font-bold text-white text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-deep-plum">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="font-cardo text-charcoal-grey/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-radiant-fuchsia rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
