
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import QuizResults from '@/components/quiz-results';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    archetype: string;
    points: number;
  }[];
}

const SoulArchetypeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showUserForm, setShowUserForm] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "When you walk into a room, what energy do you naturally embody?",
      options: [
        { text: "Mystical and ethereal, like I'm channeling ancient wisdom", archetype: "mystic", points: 3 },
        { text: "Confident and commanding, naturally drawing attention", archetype: "leader", points: 3 },
        { text: "Graceful and nurturing, creating a sense of calm", archetype: "goddess", points: 3 },
        { text: "Creative and inspiring, sparking curiosity in others", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 2,
      question: "Your ideal wardrobe would be described as:",
      options: [
        { text: "Flowing fabrics, earth tones, and meaningful jewelry", archetype: "mystic", points: 3 },
        { text: "Structured pieces, bold colors, and statement accessories", archetype: "leader", points: 3 },
        { text: "Soft textures, romantic details, and timeless elegance", archetype: "goddess", points: 3 },
        { text: "Artistic pieces, unique patterns, and unexpected combinations", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 3,
      question: "When making important decisions, you tend to:",
      options: [
        { text: "Trust your intuition and seek spiritual guidance", archetype: "mystic", points: 3 },
        { text: "Analyze logically and take decisive action", archetype: "leader", points: 3 },
        { text: "Consider how it affects others and seek harmony", archetype: "goddess", points: 3 },
        { text: "Explore creative possibilities and follow inspiration", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 4,
      question: "Your sacred space at home would feature:",
      options: [
        { text: "Crystals, candles, and spiritual books", archetype: "mystic", points: 3 },
        { text: "Clean lines, inspiring quotes, and achievement displays", archetype: "leader", points: 3 },
        { text: "Fresh flowers, soft lighting, and comfortable seating", archetype: "goddess", points: 3 },
        { text: "Art supplies, vision boards, and eclectic collections", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 5,
      question: "People often come to you for:",
      options: [
        { text: "Spiritual guidance and deeper understanding", archetype: "mystic", points: 3 },
        { text: "Leadership advice and strategic thinking", archetype: "leader", points: 3 },
        { text: "Emotional support and nurturing wisdom", archetype: "goddess", points: 3 },
        { text: "Creative inspiration and fresh perspectives", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 6,
      question: "Your relationship with beauty is:",
      options: [
        { text: "Sacred and ritualistic - beauty as spiritual practice", archetype: "mystic", points: 3 },
        { text: "Powerful and intentional - beauty as confidence tool", archetype: "leader", points: 3 },
        { text: "Natural and effortless - beauty as self-love", archetype: "goddess", points: 3 },
        { text: "Artistic and experimental - beauty as creative expression", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 7,
      question: "When you're feeling most aligned, you're:",
      options: [
        { text: "Meditating, journaling, or connecting with nature", archetype: "mystic", points: 3 },
        { text: "Leading a project, speaking publicly, or mentoring others", archetype: "leader", points: 3 },
        { text: "Caring for loved ones, creating beauty, or hosting gatherings", archetype: "goddess", points: 3 },
        { text: "Creating art, writing, or exploring new ideas", archetype: "muse", points: 3 }
      ]
    },
    {
      id: 8,
      question: "Your ideal evening would involve:",
      options: [
        { text: "A sacred ritual, moon gazing, or spiritual study", archetype: "mystic", points: 3 },
        { text: "Networking event, strategy session, or inspiring documentary", archetype: "leader", points: 3 },
        { text: "Intimate dinner with loved ones or luxurious self-care", archetype: "goddess", points: 3 },
        { text: "Art gallery opening, creative workshop, or inspiring conversation", archetype: "muse", points: 3 }
      ]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowUserForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate results
    const archetypeScores = {
      mystic: 0,
      leader: 0,
      goddess: 0,
      muse: 0
    };

    Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
      const question = questions[parseInt(questionIndex)];
      const selectedOption = question.options[answerIndex];
      archetypeScores[selectedOption.archetype as keyof typeof archetypeScores] += selectedOption.points;
    });

    const dominantArchetype = Object.entries(archetypeScores).reduce((a, b) => 
      archetypeScores[a[0] as keyof typeof archetypeScores] > archetypeScores[b[0] as keyof typeof archetypeScores] ? a : b
    )[0];

    // Save to database
    try {
      await fetch('/api/quiz-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userInfo.email,
          name: userInfo.name,
          archetype: dominantArchetype,
          answers: answers,
          scores: archetypeScores
        }),
      });
    } catch (error) {
      console.error('Error saving quiz results:', error);
    }

    setShowResults(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const archetypeScores = {
      mystic: 0,
      leader: 0,
      goddess: 0,
      muse: 0
    };

    Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
      const question = questions[parseInt(questionIndex)];
      const selectedOption = question.options[answerIndex];
      archetypeScores[selectedOption.archetype as keyof typeof archetypeScores] += selectedOption.points;
    });

    const dominantArchetype = Object.entries(archetypeScores).reduce((a, b) => 
      archetypeScores[a[0] as keyof typeof archetypeScores] > archetypeScores[b[0] as keyof typeof archetypeScores] ? a : b
    )[0];

    return <QuizResults archetype={dominantArchetype} userInfo={userInfo} />;
  }

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-mystical-gradient flex items-center justify-center pt-20">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <Sparkles className="w-12 h-12 text-radiant-fuchsia mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-bold text-deep-plum mb-2">
                Discover Your Soul Archetype
              </h2>
              <p className="font-cardo text-charcoal-grey/80">
                Enter your details to receive your personalized results
              </p>
            </div>

            <form onSubmit={handleUserSubmit} className="space-y-4">
              <div>
                <label className="block font-montserrat font-medium text-charcoal-grey mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
                  required
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-charcoal-grey mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Reveal My Soul Archetype
              </button>

              <p className="text-xs text-charcoal-grey/60 text-center">
                We'll also send you personalized style tips based on your archetype
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mystical-gradient pt-20">
      <div className="container-custom px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-plum mb-4">
            Discover Your{' '}
            <span className="text-gradient">Soul Archetype</span>
          </h1>
          <p className="font-cardo text-lg text-charcoal-grey/80 max-w-2xl mx-auto">
            Uncover your unique style essence through this sacred assessment. 
            Your archetype will guide you toward authentic self-expression.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-montserrat text-sm text-charcoal-grey">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-montserrat text-sm text-charcoal-grey">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-soft-blush rounded-full h-2">
            <motion.div
              className="bg-sacred-gradient h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-xl"
            >
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-deep-plum mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left border-2 border-soft-blush rounded-lg hover:border-radiant-fuchsia hover:bg-soft-blush transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-cardo text-charcoal-grey group-hover:text-deep-plum">
                        {option.text}
                      </span>
                      <ArrowRight className="w-5 h-5 text-radiant-fuchsia opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 text-charcoal-grey hover:text-radiant-fuchsia transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-montserrat">Previous</span>
                </button>

                <div className="flex space-x-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index <= currentQuestion ? 'bg-radiant-fuchsia' : 'bg-soft-blush'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SoulArchetypeQuiz;
