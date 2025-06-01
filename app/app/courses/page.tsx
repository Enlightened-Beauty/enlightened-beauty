
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Clock, Star, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';

const CoursesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [coursesRef, coursesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    {
      id: 1,
      title: "Soul Archetype Mastery",
      subtitle: "Discover & Embody Your Authentic Style Essence",
      price: 297,
      originalPrice: 497,
      duration: "6 weeks",
      students: 1200,
      rating: 4.9,
      image: "https://i.pinimg.com/originals/d7/e9/1d/d7e91d71a0544561c845c91df4f87e7b.jpg",
      description: "A transformational journey to discover your unique Soul Archetype and learn to dress in complete alignment with your essence.",
      modules: [
        "Discovering Your Soul Archetype",
        "Color Psychology & Sacred Hues",
        "Body Temple Honoring",
        "Wardrobe Alchemy & Curation",
        "Shopping with Soul Alignment",
        "Embodying Your Radiant Self"
      ],
      bonuses: [
        "Private Facebook Community",
        "Monthly Group Coaching Calls",
        "Personalized Style Workbook",
        "Sacred Shopping Guide"
      ],
      level: "Beginner to Intermediate"
    },
    {
      id: 2,
      title: "Sacred Style Foundations",
      subtitle: "Build Your Timeless Wardrobe with Soul",
      price: 197,
      originalPrice: 297,
      duration: "4 weeks",
      students: 800,
      rating: 4.8,
      image: "https://i.pinimg.com/originals/ba/a8/8d/baa88df70ed1fde3fc59d37aef014d92.jpg",
      description: "Learn the fundamental principles of sacred styling and build a wardrobe that serves your highest self and deepest purpose.",
      modules: [
        "Sacred Style Philosophy",
        "Wardrobe Foundation Essentials",
        "Color Harmony Basics",
        "Sustainable Style Practices"
      ],
      bonuses: [
        "Capsule Wardrobe Planner",
        "Color Palette Generator",
        "Style Emergency Kit"
      ],
      level: "Beginner"
    },
    {
      id: 3,
      title: "Color Alchemy Intensive",
      subtitle: "Master the Mystical Art of Color",
      price: 397,
      originalPrice: 597,
      duration: "8 weeks",
      students: 600,
      rating: 5.0,
      image: "https://i.pinimg.com/736x/cf/e1/e1/cfe1e1ff25864cf7e0bc3090b0fbda68.jpg",
      description: "Deep dive into the sacred science of color and learn to use color as a tool for transformation, healing, and magnetic presence.",
      modules: [
        "Color Psychology & Consciousness",
        "Personal Color Analysis Mastery",
        "Seasonal Color Theory",
        "Color for Different Occasions",
        "Makeup & Hair Color Harmony",
        "Color Healing & Energy Work",
        "Advanced Color Combinations",
        "Teaching Color to Others"
      ],
      bonuses: [
        "Professional Color Analysis Kit",
        "Color Healing Meditation Series",
        "Business Toolkit for Color Consultants"
      ],
      level: "Intermediate to Advanced"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Each course is carefully crafted with deep wisdom and practical application."
    },
    {
      icon: Users,
      title: "Sacred Community",
      description: "Connect with like-minded women on the same transformational journey."
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Learn at your own pace with permanent access to all materials."
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Learn directly from Nathalie and her team of certified style guides."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      course: "Soul Archetype Mastery",
      text: "This course completely transformed how I see myself and dress. I finally understand my style essence!",
      rating: 5
    },
    {
      name: "Maya Patel",
      course: "Color Alchemy Intensive",
      text: "The color work was life-changing. I now use color as a daily practice for alignment and confidence.",
      rating: 5
    },
    {
      name: "Isabella Rodriguez",
      course: "Sacred Style Foundations",
      text: "Perfect for beginners! I built a wardrobe I absolutely love and feel so much more confident.",
      rating: 5
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
              Sacred Style{' '}
              <span className="text-gradient">Mastery</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Transform your relationship with style through our comprehensive courses. 
              Each program is designed to guide you toward authentic self-expression 
              and radiant confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#courses" className="btn-primary">
                Explore Courses
              </Link>
              <Link href="/quiz" className="btn-secondary">
                Take Soul Quiz First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-luminous-ivory" ref={featuresRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
              Why Choose Sacred Style Education?
            </h2>
            <p className="font-cardo text-xl text-charcoal-grey/80 max-w-3xl mx-auto leading-relaxed">
              Our courses go beyond surface-level styling to honor your soul's unique expression
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-sacred-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-deep-plum mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-cardo text-charcoal-grey/80">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section-padding bg-soft-blush" ref={coursesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
              Choose Your Sacred Journey
            </h2>
            <p className="font-cardo text-xl text-charcoal-grey/80 max-w-3xl mx-auto leading-relaxed">
              Each course is designed to meet you where you are and guide you toward mastery
            </p>
          </motion.div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/40 to-transparent"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                        <div className="font-montserrat font-bold text-radiant-fuchsia text-2xl">
                          ${course.price}
                        </div>
                        <div className="font-montserrat text-xs text-charcoal-grey line-through">
                          ${course.originalPrice}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-radiant-fuchsia" />
                            <span className="font-montserrat text-charcoal-grey">
                              {course.students} students
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-radiant-fuchsia fill-current" />
                            <span className="font-montserrat text-charcoal-grey">
                              {course.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-radiant-fuchsia text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                        {course.level}
                      </span>
                      <span className="font-montserrat text-sm text-charcoal-grey/60">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-2">
                      {course.title}
                    </h3>
                    <p className="font-montserrat text-radiant-fuchsia font-medium mb-4">
                      {course.subtitle}
                    </p>
                    
                    <p className="font-cardo text-charcoal-grey/80 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Modules */}
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold text-deep-plum mb-3">
                        Course Modules:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.modules.map((module, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-radiant-fuchsia mt-1 flex-shrink-0" />
                            <span className="font-cardo text-sm text-charcoal-grey/80">
                              {module}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bonuses */}
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold text-deep-plum mb-3">
                        Bonus Includes:
                      </h4>
                      <div className="space-y-2">
                        {course.bonuses.map((bonus, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Download className="w-4 h-4 text-radiant-fuchsia mt-1 flex-shrink-0" />
                            <span className="font-cardo text-sm text-charcoal-grey/80">
                              {bonus}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="btn-primary flex-1 text-center"
                      >
                        Enroll Now - ${course.price}
                      </Link>
                      <Link
                        href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="btn-secondary flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-deep-plum text-luminous-ivory">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luminous-ivory mb-6">
              Sacred Transformations
            </h2>
            <p className="font-cardo text-xl text-luminous-ivory/80 max-w-3xl mx-auto leading-relaxed">
              Hear from women who have transformed their lives through sacred style education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-luminous-ivory/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-radiant-fuchsia fill-current" />
                  ))}
                </div>
                <p className="font-cardo text-luminous-ivory/90 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-montserrat font-semibold text-luminous-ivory">
                    {testimonial.name}
                  </div>
                  <div className="font-montserrat text-sm text-radiant-fuchsia">
                    {testimonial.course}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-mystical-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="font-cardo text-lg text-charcoal-grey/80 mb-8">
              Start with our complimentary Soul Archetype Quiz to discover which 
              course aligns with your unique journey.
            </p>
            <Link href="/quiz" className="btn-primary">
              Discover Your Soul Archetype
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
