
'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Soul Styling Consultation', href: '/services/soul-styling' },
        { name: 'Color Analysis', href: '/services/color-analysis' },
        { name: 'Courses & Programs', href: '/courses' },
        { name: 'Soul Archetype Quiz', href: '/quiz' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Brand Philosophy', href: '/about#philosophy' },
        { name: 'Testimonials', href: '/about#testimonials' },
        { name: 'Press', href: '/about#press' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Free Downloads', href: '/resources' },
        { name: 'Style Guide', href: '/resources/style-guide' },
        { name: 'Sacred Beauty Rituals', href: '/resources/rituals' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Email', href: 'mailto:hello@enlightenedbeauty.com', icon: Mail },
  ];

  return (
    <footer className="bg-deep-plum text-luminous-ivory">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-sacred-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">E</span>
              </div>
              <span className="font-playfair font-bold text-xl text-luminous-ivory">
                Enlightened Beauty
              </span>
            </Link>
            
            <p className="text-luminous-ivory/80 mb-6 leading-relaxed">
              Sacred style for soul-led women. Where inner light meets outer expression.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-luminous-ivory/10 rounded-full flex items-center justify-center hover:bg-radiant-fuchsia transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-montserrat font-semibold text-lg mb-4 text-luminous-ivory">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-luminous-ivory/80 hover:text-radiant-fuchsia transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-luminous-ivory/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-playfair text-2xl mb-4 text-luminous-ivory">
              Join the Sacred Style Community
            </h3>
            <p className="text-luminous-ivory/80 mb-6">
              Receive weekly inspiration, style wisdom, and exclusive access to our sacred beauty rituals.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-luminous-ivory/10 border border-luminous-ivory/20 text-luminous-ivory placeholder-luminous-ivory/60 focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luminous-ivory/20">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-luminous-ivory/60 text-sm">
              © {currentYear} Enlightened Beauty. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-luminous-ivory/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-radiant-fuchsia fill-current" />
              <span>for soulful women everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
