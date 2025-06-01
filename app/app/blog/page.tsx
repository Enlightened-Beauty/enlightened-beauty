
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'style-wisdom', name: 'Style Wisdom', count: 8 },
    { id: 'soul-alignment', name: 'Soul Alignment', count: 6 },
    { id: 'sacred-beauty', name: 'Sacred Beauty', count: 5 },
    { id: 'color-magic', name: 'Color Magic', count: 3 },
    { id: 'archetype-insights', name: 'Archetype Insights', count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Sacred Art of Dressing Your Soul Archetype",
    excerpt: "Discover how your unique Soul Archetype influences every style choice and learn to dress in alignment with your deepest essence.",
    image: "https://i.pinimg.com/originals/7d/5d/45/7d5d459fd960b830bc850ea061abcec3.jpg",
    category: "Style Wisdom",
    author: "Nathalie Chapron",
    date: "May 28, 2025",
    readTime: "8 min read",
    slug: "sacred-art-dressing-soul-archetype"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Color Psychology: How Sacred Hues Transform Your Energy",
      excerpt: "Explore the mystical connection between color and consciousness, and learn which hues elevate your natural radiance.",
      image: "https://i.pinimg.com/736x/c0/29/b9/c029b968ec818a0b8f84396ef31994b1.jpg",
      category: "Color Magic",
      author: "Nathalie Chapron",
      date: "May 25, 2025",
      readTime: "6 min read",
      slug: "color-psychology-sacred-hues"
    },
    {
      id: 3,
      title: "The Mystic Muse: Embracing Ethereal Beauty",
      excerpt: "If you're a Mystic Muse archetype, discover how to honor your spiritual nature through your style choices.",
      image: "https://i.pinimg.com/originals/dd/0a/85/dd0a8547975181c0a03d834fbb06ae52.jpg",
      category: "Archetype Insights",
      author: "Nathalie Chapron",
      date: "May 22, 2025",
      readTime: "7 min read",
      slug: "mystic-muse-ethereal-beauty"
    },
    {
      id: 4,
      title: "Sacred Morning Beauty Rituals for Soul Alignment",
      excerpt: "Transform your morning routine into a sacred practice that aligns your inner and outer beauty.",
      image: "https://i.pinimg.com/236x/9f/33/8d/9f338d9b8b69e6b451edcc084abafcc3.jpg",
      category: "Sacred Beauty",
      author: "Nathalie Chapron",
      date: "May 19, 2025",
      readTime: "5 min read",
      slug: "sacred-morning-beauty-rituals"
    },
    {
      id: 5,
      title: "The Radiant Leader: Power Dressing with Soul",
      excerpt: "Learn how to embody confident leadership while staying true to your feminine essence and spiritual values.",
      image: "https://i.pinimg.com/736x/6e/eb/65/6eeb6575507c3f4d449c474d3c918b11.jpg",
      category: "Archetype Insights",
      author: "Nathalie Chapron",
      date: "May 16, 2025",
      readTime: "9 min read",
      slug: "radiant-leader-power-dressing"
    },
    {
      id: 6,
      title: "Wardrobe Alchemy: Transforming Chaos into Sacred Order",
      excerpt: "Discover the spiritual practice of curating a wardrobe that serves your highest self and deepest purpose.",
      image: "https://i.pinimg.com/originals/82/8a/c3/828ac381fa7726db7e56b6e28c56020f.jpg",
      category: "Style Wisdom",
      author: "Nathalie Chapron",
      date: "May 13, 2025",
      readTime: "10 min read",
      slug: "wardrobe-alchemy-sacred-order"
    },
    {
      id: 7,
      title: "The Sacred Goddess: Embracing Divine Femininity",
      excerpt: "Honor your nurturing nature and divine feminine essence through style choices that celebrate your goddess energy.",
      image: "https://i.pinimg.com/originals/cb/60/2c/cb602c381ac2267b3aa1afa60ff8ae2b.jpg",
      category: "Soul Alignment",
      author: "Nathalie Chapron",
      date: "May 10, 2025",
      readTime: "8 min read",
      slug: "sacred-goddess-divine-femininity"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Sacred Style{' '}
              <span className="text-gradient">Wisdom</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Discover the deeper mysteries of style, beauty, and soul alignment. 
              Each post is a sacred offering to support your journey of authentic self-expression.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-grey/60" />
              <input
                type="text"
                placeholder="Search sacred wisdom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-soft-blush">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-radiant-fuchsia text-white'
                    : 'bg-soft-blush text-charcoal-grey hover:bg-radiant-fuchsia/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-luminous-ivory" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-8 text-center">
              Featured Wisdom
            </h2>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-radiant-fuchsia text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-charcoal-grey/60">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="font-cardo text-charcoal-grey/80 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-soft-blush text-radiant-fuchsia px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                      {featuredPost.category}
                    </span>
                    
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="btn-primary group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-soft-blush">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-12 text-center">
              Latest Sacred Wisdom
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-radiant-fuchsia px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-xs text-charcoal-grey/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-deep-plum mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="font-cardo text-charcoal-grey/80 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-montserrat font-medium text-radiant-fuchsia hover:text-deep-plum transition-colors duration-200 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-cardo text-lg text-charcoal-grey/60">
                  No posts found matching your search. Try a different term or category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-deep-plum text-luminous-ivory">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl font-bold text-luminous-ivory mb-6">
              Never Miss Sacred Wisdom
            </h2>
            <p className="font-cardo text-lg text-luminous-ivory/80 mb-8">
              Join our sacred community and receive weekly style wisdom, soul alignment tips, 
              and exclusive insights delivered to your inbox.
            </p>
            <Link href="/#email-signup" className="btn-primary">
              Join the Sacred Style Community
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
