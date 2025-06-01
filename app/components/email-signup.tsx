
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Gift, Sparkles, CheckCircle } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          source: 'homepage_signup',
          tags: ['homepage', 'starter_kit']
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Sacred Style Starter Kit (Free Download)",
    "Weekly style wisdom & soul alignment tips",
    "Exclusive access to new courses & programs",
    "Sacred beauty rituals & practices",
    "First access to special offers & events"
  ];

  if (isSubmitted) {
    return (
      <section className="section-padding bg-mystical-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-lg p-8 shadow-xl"
          >
            <CheckCircle className="w-16 h-16 text-radiant-fuchsia mx-auto mb-6" />
            <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-4">
              Welcome to the Sacred Style Community!
            </h3>
            <p className="font-cardo text-charcoal-grey/80 mb-6">
              Your Sacred Style Starter Kit is on its way to your inbox. 
              Check your email for your free download and prepare to discover 
              the most radiant version of yourself.
            </p>
            <div className="bg-soft-blush rounded-lg p-4">
              <p className="font-montserrat text-sm text-charcoal-grey">
                <strong>Next Step:</strong> Take our Soul Archetype Quiz to discover 
                your unique style essence and receive personalized recommendations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-mystical-gradient" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="w-6 h-6 text-radiant-fuchsia" />
                <span className="font-montserrat font-medium text-radiant-fuchsia uppercase tracking-wide text-sm">
                  Free Sacred Style Starter Kit
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-plum mb-6">
                Join the Sacred Style Community
              </h2>

              <p className="font-cardo text-lg text-charcoal-grey/80 leading-relaxed mb-8">
                Receive your complimentary Sacred Style Starter Kit and join thousands 
                of soul-led women on a journey of authentic self-expression. 
                Discover weekly wisdom, sacred practices, and exclusive insights 
                to help you embody your most radiant self.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <Sparkles className="w-5 h-5 text-radiant-fuchsia flex-shrink-0" />
                    <span className="font-cardo text-charcoal-grey/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sacred-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-2">
                  Get Your Free Starter Kit
                </h3>
                <p className="font-cardo text-charcoal-grey/80">
                  Begin your sacred style journey today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia focus:border-transparent"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-montserrat font-medium text-charcoal-grey mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Get My Free Starter Kit'}
                </button>

                <p className="text-xs text-charcoal-grey/60 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
