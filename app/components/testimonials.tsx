
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Transformational Coach & Speaker",
      image: "https://img.freepik.com/premium-photo/portrait-young-professional-business-woman-confidently-smiling-camera_564692-2364.jpg",
      quote: "Working with Nathalie was like coming home to myself. She helped me discover my Soul Archetype and now I dress with such confidence and ease. My clients notice the difference—I'm more magnetic and authentic than ever.",
      archetype: "The Mystic Muse",
      rating: 5
    },
    {
      name: "Isabella Rodriguez",
      title: "Holistic Healer & Author",
      image: "https://img.freepik.com/premium-photo/windswept-elegance-serene-brunette-with-flowing-curls-concept-elegant-portraits-natural-beauty-flowing-hair-windy-photoshoot_864588-67781.jpg",
      quote: "I used to struggle with shopping and never felt like myself in my clothes. Nathalie's sacred approach to style changed everything. Now my wardrobe feels like a second skin, and I save so much time and energy.",
      archetype: "The Sacred Feminine",
      rating: 5
    },
    {
      name: "Dr. Amanda Foster",
      title: "Wellness Entrepreneur",
      image: "https://i.pinimg.com/originals/f2/04/64/f20464cde857581e3e6b44db832b3c23.jpg",
      quote: "The Soul Archetype Quiz was a revelation! Understanding my essence as 'The Radiant Leader' transformed not just my style, but how I show up in my business. I feel so aligned and powerful now.",
      archetype: "The Radiant Leader",
      rating: 5
    },
    {
      name: "Maya Patel",
      title: "Spiritual Mentor & Coach",
      image: "https://img.freepik.com/premium-photo/elegant-portrait-woman-with-serene-expression-gentle-smile-emanating-gratitude_928211-4949.jpg",
      quote: "Nathalie's work is pure magic. She sees the soul behind the style and helps you express your deepest truth through your appearance. This isn't just styling—it's spiritual transformation.",
      archetype: "The Ethereal Goddess",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-deep-plum text-luminous-ivory">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-luminous-ivory mb-6">
            Sacred Transformations
          </h2>
          <p className="font-cardo text-lg sm:text-xl text-luminous-ivory/80 max-w-3xl mx-auto leading-relaxed">
            Witness the radiant transformations of soul-led women who discovered their authentic style essence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-luminous-ivory/10 backdrop-blur-sm rounded-lg p-8 lg:p-12 text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-radiant-fuchsia mx-auto mb-6" />

              {/* Quote */}
              <blockquote className="font-cardo text-lg sm:text-xl text-luminous-ivory/90 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-radiant-fuchsia fill-current" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="text-center sm:text-left">
                  <h4 className="font-montserrat font-semibold text-luminous-ivory text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="font-montserrat text-luminous-ivory/70 text-sm">
                    {testimonials[currentTestimonial].title}
                  </p>
                  <p className="font-montserrat text-radiant-fuchsia text-sm font-medium">
                    {testimonials[currentTestimonial].archetype}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-luminous-ivory/10 hover:bg-luminous-ivory/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-luminous-ivory" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? 'bg-radiant-fuchsia'
                      : 'bg-luminous-ivory/30 hover:bg-luminous-ivory/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-luminous-ivory/10 hover:bg-luminous-ivory/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-luminous-ivory" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-luminous-ivory/20"
        >
          <div className="text-center">
            <div className="font-playfair text-4xl font-bold text-radiant-fuchsia mb-2">98%</div>
            <div className="font-montserrat text-luminous-ivory/80">Feel More Confident</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-4xl font-bold text-radiant-fuchsia mb-2">95%</div>
            <div className="font-montserrat text-luminous-ivory/80">Save Time Shopping</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-4xl font-bold text-radiant-fuchsia mb-2">100%</div>
            <div className="font-montserrat text-luminous-ivory/80">Feel More Aligned</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
