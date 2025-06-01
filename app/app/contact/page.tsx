
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@enlightenedbeauty.com",
      description: "For general inquiries and sacred style questions"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      details: "Book a Discovery Call",
      description: "Ready to begin your transformation? Let's connect."
    },
    {
      icon: MapPin,
      title: "Sacred Space",
      details: "Virtual & In-Person Sessions",
      description: "Serving soul-led women worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24-48 hours",
      description: "We honor your time and energy"
    }
  ];

  const subjects = [
    "Soul Styling Consultation",
    "Color Analysis Session", 
    "Course Information",
    "Partnership Inquiry",
    "Media & Press",
    "General Question",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-mystical-gradient flex items-center justify-center pt-20">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-lg p-8 shadow-xl"
          >
            <CheckCircle className="w-16 h-16 text-radiant-fuchsia mx-auto mb-6" />
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-4">
              Message Received with Gratitude
            </h2>
            <p className="font-cardo text-lg text-charcoal-grey/80 mb-6">
              Thank you for reaching out, beautiful soul. Your message has been received 
              and we'll respond within 24-48 hours. In the meantime, explore our sacred 
              resources and discover your Soul Archetype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Send Another Message
              </button>
              <a href="/quiz" className="btn-primary">
                Take Soul Archetype Quiz
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-mystical-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-plum mb-6">
              Connect with Your{' '}
              <span className="text-gradient">Sacred Style Guide</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Ready to begin your transformation? We're here to support your journey 
              toward authentic self-expression and radiant confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-luminous-ivory" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-sacred-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-deep-plum mb-2">
                    {info.title}
                  </h3>
                  <p className="font-montserrat font-medium text-radiant-fuchsia mb-2">
                    {info.details}
                  </p>
                  <p className="font-cardo text-sm text-charcoal-grey/80">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-soft-blush">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-xl"
            >
              <h2 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
                Send Us a Sacred Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia resize-none"
                    placeholder="Share your sacred style dreams and questions..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Sacred Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-6">
                  Let's Begin Your Sacred Style Journey
                </h2>
                <p className="font-cardo text-lg text-charcoal-grey/80 leading-relaxed mb-6">
                  Every transformation begins with a single step. Whether you're ready to 
                  book a consultation, have questions about our services, or simply want 
                  to connect, we're here to support you.
                </p>
                <p className="font-cardo text-lg text-charcoal-grey/80 leading-relaxed">
                  Your message matters to us. We read every email personally and respond 
                  with the care and attention your sacred journey deserves.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-playfair text-xl font-bold text-deep-plum mb-4">
                  Ready to Start Now?
                </h3>
                <p className="font-cardo text-charcoal-grey/80 mb-4">
                  Take our complimentary Soul Archetype Quiz to discover your unique 
                  style essence and receive personalized recommendations.
                </p>
                <a href="/quiz" className="btn-primary">
                  Discover Your Soul Archetype
                </a>
              </div>

              <div className="bg-deep-plum text-luminous-ivory rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold text-luminous-ivory mb-4">
                  Sacred Style Promise
                </h3>
                <p className="font-cardo text-luminous-ivory/90">
                  "We honor your trust and treat every interaction as sacred. 
                  Your style journey is unique, and we're committed to supporting 
                  you with authenticity, compassion, and deep respect for your 
                  individual path."
                </p>
                <cite className="font-montserrat text-sm text-radiant-fuchsia font-medium mt-4 block">
                  — Nathalie Chapron, Founder
                </cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
