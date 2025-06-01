
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Palette, BookOpen, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Heart,
      title: "Soul Styling Consultation",
      subtitle: "1:1 Sacred Style Transformation",
      price: "From $497",
      duration: "90 minutes",
      image: "https://i.pinimg.com/736x/ab/be/d1/abbed139a85719a9373f15e269024e54.jpg",
      description: "A deeply personal journey to discover your unique Soul Archetype and create a style blueprint that honors your authentic essence.",
      includes: [
        "Soul Archetype Assessment & Analysis",
        "Personal Color & Energy Analysis", 
        "Style Essence Discovery Session",
        "Wardrobe Audit & Sacred Cleansing",
        "Personalized Style Guide & Lookbook",
        "Shopping List & Brand Recommendations",
        "30-day Integration Support"
      ],
      testimonial: {
        text: "Nathalie helped me discover my true style essence. I finally feel like myself in my clothes!",
        author: "Sarah M., Transformational Coach"
      }
    },
    {
      icon: Palette,
      title: "Sacred Color Analysis",
      subtitle: "Discover Your Soul's Color Palette",
      price: "From $297",
      duration: "60 minutes",
      image: "https://for-stylist.com/wa-data/public/shop/products/41/04/441/images/447/447.970.jpg",
      description: "Uncover the colors that make your soul sing and enhance your natural radiance through our mystical approach to color harmony.",
      includes: [
        "Comprehensive Color Analysis Session",
        "Personal Color Palette Creation",
        "Seasonal Color Mapping",
        "Makeup & Hair Color Guidance",
        "Digital Color Palette Guide",
        "Shopping Color Cards",
        "Color Psychology Insights"
      ],
      testimonial: {
        text: "The colors Nathalie chose for me transformed how I feel about myself. I'm glowing!",
        author: "Maya P., Wellness Coach"
      }
    },
    {
      icon: BookOpen,
      title: "Courses & Programs",
      subtitle: "Deep Transformation Journeys",
      price: "From $197",
      duration: "Self-paced",
      image: "https://i.pinimg.com/originals/6d/af/66/6daf661bc3e05b7bc63b7fe4efdfce9d.png",
      description: "Comprehensive programs designed for women ready to master the sacred art of soul-aligned styling and embody their most radiant selves.",
      includes: [
        "Soul Archetype Mastery Course",
        "Sacred Style Foundations Program",
        "Color Harmony Workshop Series",
        "Wardrobe Alchemy Masterclass",
        "Private Community Access",
        "Monthly Group Coaching Calls",
        "Lifetime Access & Updates"
      ],
      testimonial: {
        text: "These courses changed my entire relationship with style. Pure transformation!",
        author: "Isabella R., Author & Speaker"
      }
    }
  ];

  const process = [
    {
      step: "01",
      title: "Sacred Discovery",
      description: "We begin with a deep exploration of your soul essence, uncovering your unique archetype and energetic signature."
    },
    {
      step: "02", 
      title: "Alignment Assessment",
      description: "Through color analysis and style evaluation, we identify what enhances your natural radiance and what dims your light."
    },
    {
      step: "03",
      title: "Sacred Blueprint",
      description: "We create your personalized style guide, complete with colors, silhouettes, and pieces that honor your authentic self."
    },
    {
      step: "04",
      title: "Radiant Integration",
      description: "With ongoing support, you integrate your new style wisdom into daily life, embodying your most magnetic self."
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
              Sacred Services for{' '}
              <span className="text-gradient">Soul-Led Women</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Transform your relationship with style through our sacred methodology. 
              Each service is designed to honor your unique essence and guide you 
              toward authentic self-expression.
            </p>

            <Link href="/quiz" className="btn-primary">
              Start with Your Soul Archetype Quiz
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-luminous-ivory" ref={servicesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
              Choose Your Sacred Journey
            </h2>
            <p className="font-cardo text-xl text-charcoal-grey/80 max-w-3xl mx-auto leading-relaxed">
              Each service is crafted to meet you where you are and guide you toward 
              your most radiant self-expression.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/40 to-transparent"></div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                          <div className="font-montserrat font-bold text-radiant-fuchsia text-lg">
                            {service.price}
                          </div>
                          <div className="font-montserrat text-xs text-charcoal-grey">
                            {service.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-sacred-gradient rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-deep-plum">
                          {service.title}
                        </h3>
                        <p className="font-montserrat text-radiant-fuchsia font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="font-cardo text-lg text-charcoal-grey/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold text-deep-plum mb-3">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-radiant-fuchsia mt-1 flex-shrink-0" />
                            <span className="font-cardo text-sm text-charcoal-grey/80">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-soft-blush rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-radiant-fuchsia fill-current" />
                        ))}
                      </div>
                      <p className="font-cardo text-sm text-charcoal-grey italic mb-2">
                        "{service.testimonial.text}"
                      </p>
                      <cite className="font-montserrat text-xs text-charcoal-grey/60">
                        — {service.testimonial.author}
                      </cite>
                    </div>

                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="btn-primary group"
                    >
                      Learn More & Book
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-deep-plum text-luminous-ivory" ref={processRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luminous-ivory mb-6">
              The Sacred Style Process
            </h2>
            <p className="font-cardo text-xl text-luminous-ivory/80 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology guides you through a transformational journey 
              from discovery to radiant embodiment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-radiant-fuchsia rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-montserrat font-bold text-white text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-luminous-ivory mb-4">
                  {step.title}
                </h3>
                <p className="font-cardo text-luminous-ivory/80 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
