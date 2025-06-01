
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Download, ArrowRight, Share2, Mail } from 'lucide-react';

interface QuizResultsProps {
  archetype: string;
  userInfo: {
    name: string;
    email: string;
  };
}

const QuizResults = ({ archetype, userInfo }: QuizResultsProps) => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const archetypeData = {
    mystic: {
      title: "The Mystic Muse",
      subtitle: "Sacred Wisdom & Ethereal Beauty",
      description: "You are a bridge between worlds, channeling ancient wisdom through your presence. Your style reflects your deep spiritual connection and intuitive nature.",
      image: "https://artfiles.alphacoders.com/520/52024.jpg",
      colors: ["Deep purples", "Midnight blues", "Silver metallics", "Earth tones"],
      styles: ["Flowing silhouettes", "Natural fabrics", "Layered textures", "Meaningful jewelry"],
      essence: "Your beauty emanates from your connection to the divine feminine. You're drawn to pieces that feel sacred and meaningful.",
      recommendations: [
        "Embrace flowing fabrics like silk and chiffon",
        "Choose jewelry with spiritual significance",
        "Opt for deep, mystical colors",
        "Layer textures for depth and mystery"
      ]
    },
    leader: {
      title: "The Radiant Leader",
      subtitle: "Confident Power & Magnetic Presence",
      description: "You naturally command attention and inspire others. Your style reflects your confidence, ambition, and ability to lead with grace.",
      image: "https://i.pinimg.com/originals/04/01/13/040113e6e2ec5466eca6d4a023f0bfcc.jpg",
      colors: ["Bold reds", "Royal blues", "Classic black", "Metallic golds"],
      styles: ["Structured silhouettes", "Statement pieces", "Clean lines", "Power accessories"],
      essence: "Your beauty comes from your inner strength and confidence. You're drawn to pieces that enhance your natural authority.",
      recommendations: [
        "Invest in well-tailored blazers and structured pieces",
        "Choose bold colors that command attention",
        "Add statement accessories for impact",
        "Embrace clean, powerful silhouettes"
      ]
    },
    goddess: {
      title: "The Sacred Goddess",
      subtitle: "Divine Femininity & Nurturing Grace",
      description: "You embody the divine feminine, radiating warmth, compassion, and natural beauty. Your style reflects your nurturing spirit and timeless elegance.",
      image: "https://i.pinimg.com/originals/34/ac/d3/34acd38cbab3e55ec9162038afb42b74.jpg",
      colors: ["Soft pinks", "Cream whites", "Gentle lavenders", "Rose golds"],
      styles: ["Romantic silhouettes", "Soft textures", "Feminine details", "Delicate accessories"],
      essence: "Your beauty flows from your compassionate heart and nurturing nature. You're drawn to pieces that feel soft and feminine.",
      recommendations: [
        "Choose soft, romantic fabrics and silhouettes",
        "Embrace feminine details like lace and florals",
        "Opt for gentle, nurturing colors",
        "Add delicate jewelry and accessories"
      ]
    },
    muse: {
      title: "The Creative Muse",
      subtitle: "Artistic Vision & Inspiring Beauty",
      description: "You are a source of inspiration and creativity. Your style reflects your artistic nature and ability to see beauty in unexpected places.",
      image: "https://i.pinimg.com/originals/46/c7/d9/46c7d91e74c6fa4567c498c51611b462.jpg",
      colors: ["Vibrant jewel tones", "Artistic prints", "Unexpected combinations", "Creative contrasts"],
      styles: ["Unique silhouettes", "Artistic prints", "Mixed textures", "Statement pieces"],
      essence: "Your beauty comes from your creative spirit and unique perspective. You're drawn to pieces that tell a story.",
      recommendations: [
        "Experiment with unique prints and patterns",
        "Mix unexpected textures and styles",
        "Choose pieces with artistic flair",
        "Express your creativity through accessories"
      ]
    }
  };

  const currentArchetype = archetypeData[archetype as keyof typeof archetypeData];

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`I discovered my Soul Archetype: ${currentArchetype.title}!`);
    const body = encodeURIComponent(`I just took the Soul Archetype Quiz and discovered I'm ${currentArchetype.title}! 

${currentArchetype.description}

Take the quiz yourself: ${window.location.origin}/quiz

Discover your sacred style at Enlightened Beauty.`);
    
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen bg-mystical-gradient pt-20">
      <div className="container-custom px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Sparkles className="w-16 h-16 text-radiant-fuchsia mx-auto mb-6" />
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-plum mb-4">
            Welcome, {userInfo.name}!
          </h1>
          <p className="font-cardo text-lg text-charcoal-grey/80 max-w-2xl mx-auto">
            Your Soul Archetype has been revealed. Discover your unique style essence 
            and how to embody your most radiant self.
          </p>
        </motion.div>

        {/* Main Result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentArchetype.image}
                alt={currentArchetype.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-2">
                {currentArchetype.title}
              </h2>
              <p className="font-montserrat text-radiant-fuchsia font-medium mb-6">
                {currentArchetype.subtitle}
              </p>
              
              <p className="font-cardo text-lg text-charcoal-grey/80 leading-relaxed mb-8">
                {currentArchetype.description}
              </p>

              <div className="bg-soft-blush rounded-lg p-6 mb-6">
                <h3 className="font-playfair text-xl font-bold text-deep-plum mb-3">
                  Your Style Essence
                </h3>
                <p className="font-cardo text-charcoal-grey/80 italic">
                  {currentArchetype.essence}
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmailShare}
                  className="btn-secondary flex items-center justify-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Results
                </button>
                <Link href="/services" className="btn-primary flex items-center justify-center">
                  Book Your Style Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Style Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Colors */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
              Your Sacred Colors
            </h3>
            <div className="space-y-3">
              {currentArchetype.colors.map((color, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-radiant-fuchsia rounded-full"></div>
                  <span className="font-cardo text-charcoal-grey">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
              Your Style Elements
            </h3>
            <div className="space-y-3">
              {currentArchetype.styles.map((style, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-radiant-fuchsia rounded-full"></div>
                  <span className="font-cardo text-charcoal-grey">{style}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-4xl mx-auto bg-deep-plum text-luminous-ivory rounded-lg p-8 lg:p-12 mb-12"
        >
          <h3 className="font-playfair text-2xl font-bold text-luminous-ivory mb-6 text-center">
            Sacred Style Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentArchetype.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-radiant-fuchsia mt-1 flex-shrink-0" />
                <span className="font-cardo text-luminous-ivory/90">{rec}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
            Ready to Embody Your Archetype?
          </h3>
          <p className="font-cardo text-lg text-charcoal-grey/80 mb-8">
            Take the next step in your sacred style journey with a personalized 
            consultation designed specifically for your archetype.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/soul-styling" className="btn-primary">
              Book Soul Styling Session
            </Link>
            <Link href="/courses" className="btn-secondary">
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizResults;
