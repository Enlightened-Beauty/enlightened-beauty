
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Heart, BookOpen, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Heart,
      title: "Soul Styling Consultation",
      description: "A sacred journey to discover your unique style essence. We'll uncover your Soul Archetype and create a personalized style blueprint that honors your authentic self.",
      image: "https://i.pinimg.com/originals/b6/6d/14/b66d1413f133b898f8718dc9cd039294.jpg",
      href: "/services/soul-styling",
      price: "From $497"
    },
    {
      icon: Palette,
      title: "Sacred Color Analysis",
      description: "Discover the colors that make your soul sing. Our mystical approach to color analysis reveals the hues that enhance your natural radiance and energetic frequency.",
      image: "https://i.pinimg.com/originals/4c/06/db/4c06db821d26ace8f4fc5dbb92dd2df8.jpg",
      href: "/services/color-analysis",
      price: "From $297"
    },
    {
      icon: BookOpen,
      title: "Courses & Programs",
      description: "Deep-dive transformational programs for women ready to embody their most radiant selves. Learn the sacred art of soul-aligned styling.",
      image: "https://i.pinimg.com/736x/9f/63/f2/9f63f20ece26189d471e0fac0b5841b3.jpg",
      href: "/courses",
      price: "From $197"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-soft-blush">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-plum mb-6"
          >
            Sacred Services for{' '}
            <span className="text-gradient">Soul-Led Women</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="font-cardo text-lg sm:text-xl text-charcoal-grey/80 max-w-3xl mx-auto leading-relaxed"
          >
            Each service is designed to honor your unique essence and guide you toward 
            authentic self-expression. When you align your outer beauty with your inner truth, 
            magic happens.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/60 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-radiant-fuchsia" />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-radiant-fuchsia text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="font-cardo text-charcoal-grey/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="inline-flex items-center font-montserrat font-medium text-radiant-fuchsia hover:text-deep-plum transition-colors duration-200 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="font-cardo text-charcoal-grey/80 mb-6">
              Discover your unique Soul Archetype with our complimentary quiz. 
              This sacred assessment reveals your style essence and guides you toward 
              the perfect service for your transformation.
            </p>
            <Link href="/quiz" className="btn-primary">
              Take the Soul Archetype Quiz
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
