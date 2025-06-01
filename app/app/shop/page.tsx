
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, Star, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'digital-guides', name: 'Digital Guides', count: 8 },
    { id: 'style-tools', name: 'Style Tools', count: 6 },
    { id: 'sacred-accessories', name: 'Sacred Accessories', count: 5 },
    { id: 'color-tools', name: 'Color Tools', count: 3 },
    { id: 'bundles', name: 'Bundles', count: 2 }
  ];

  const featuredProduct = {
    id: 1,
    title: "Soul Archetype Style Guide Collection",
    subtitle: "Complete Digital Library",
    price: 197,
    originalPrice: 297,
    image: "https://i.pinimg.com/736x/b2/e1/a0/b2e1a0f00afd013591167f93f2284c94.jpg",
    rating: 4.9,
    reviews: 156,
    description: "Comprehensive style guides for all 8 Soul Archetypes, including color palettes, style recommendations, and shopping lists.",
    category: "Digital Guides",
    isFeatured: true,
    isDigital: true
  };

  const products = [
    {
      id: 2,
      title: "Sacred Color Analysis Kit",
      subtitle: "Professional Color Draping Set",
      price: 297,
      originalPrice: 397,
      image: "https://for-stylist.com/wa-data/public/shop/img/directional-method-for-the-color-type-1.jpeg",
      rating: 4.8,
      reviews: 89,
      description: "Professional-grade color analysis tools for discovering your perfect color palette.",
      category: "Color Tools",
      isDigital: false
    },
    {
      id: 3,
      title: "Mystic Muse Style Essence Guide",
      subtitle: "Digital Style Blueprint",
      price: 47,
      originalPrice: 67,
      image: "https://i.pinimg.com/236x/ab/3e/7d/ab3e7daabbb55d593dda8f5eeea725a9.jpg",
      rating: 5.0,
      reviews: 234,
      description: "Complete style guide for the Mystic Muse archetype with colors, silhouettes, and shopping recommendations.",
      category: "Digital Guides",
      isDigital: true
    },
    {
      id: 4,
      title: "Sacred Style Planner",
      subtitle: "Physical Planning Journal",
      price: 67,
      originalPrice: 87,
      image: "https://i.pinimg.com/originals/90/a6/ea/90a6ead3ea9202ce3ff975c17c73f008.png",
      rating: 4.7,
      reviews: 145,
      description: "Beautifully designed physical planner for organizing your sacred style journey and wardrobe planning.",
      category: "Style Tools",
      isDigital: false
    },
    {
      id: 5,
      title: "Radiant Leader Power Palette",
      subtitle: "Digital Color Guide",
      price: 37,
      originalPrice: 57,
      image: "https://i.pinimg.com/originals/a5/cc/47/a5cc4767b9add46662f6516d590ce4c2.jpg",
      rating: 4.9,
      reviews: 178,
      description: "Curated color palette and styling guide for the Radiant Leader archetype.",
      category: "Digital Guides",
      isDigital: true
    },
    {
      id: 6,
      title: "Sacred Geometry Style Pendant",
      subtitle: "Handcrafted Jewelry",
      price: 127,
      originalPrice: 167,
      image: "https://i.pinimg.com/originals/23/3e/d6/233ed6203fe1cf0f1f0830740bc08681.jpg",
      rating: 4.8,
      reviews: 67,
      description: "Handcrafted pendant featuring sacred geometry symbols to enhance your style and energy.",
      category: "Sacred Accessories",
      isDigital: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
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
              <span className="text-gradient">Collection</span>
            </h1>
            
            <p className="font-cardo text-xl sm:text-2xl text-charcoal-grey/80 leading-relaxed mb-8">
              Curated tools, guides, and sacred accessories to support your 
              journey toward authentic self-expression and radiant confidence.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-grey/60" />
              <input
                type="text"
                placeholder="Search sacred tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-soft-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-soft-blush">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-montserrat font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-radiant-fuchsia text-white'
                      : 'bg-soft-blush text-charcoal-grey hover:bg-radiant-fuchsia/10'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-charcoal-grey/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-soft-blush rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-radiant-fuchsia"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section-padding bg-luminous-ivory" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-8 text-center">
              Featured Sacred Tool
            </h2>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-radiant-fuchsia text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-charcoal-grey hover:text-radiant-fuchsia" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-radiant-fuchsia fill-current" />
                      ))}
                    </div>
                    <span className="font-montserrat text-sm text-charcoal-grey/60">
                      {featuredProduct.rating} ({featuredProduct.reviews} reviews)
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-deep-plum mb-2">
                    {featuredProduct.title}
                  </h3>
                  <p className="font-montserrat text-radiant-fuchsia font-medium mb-4">
                    {featuredProduct.subtitle}
                  </p>
                  
                  <p className="font-cardo text-charcoal-grey/80 leading-relaxed mb-6">
                    {featuredProduct.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="font-playfair text-2xl font-bold text-radiant-fuchsia">
                        ${featuredProduct.price}
                      </span>
                      <span className="font-montserrat text-lg text-charcoal-grey/60 line-through">
                        ${featuredProduct.originalPrice}
                      </span>
                    </div>
                    
                    {featuredProduct.isDigital && (
                      <span className="bg-soft-blush text-radiant-fuchsia px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                        Instant Download
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary flex-1 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                    <Link
                      href={`/shop/${featuredProduct.id}`}
                      className="btn-secondary flex items-center justify-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-soft-blush">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-12 text-center">
              Sacred Style Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <Heart className="w-4 h-4 text-charcoal-grey hover:text-radiant-fuchsia" />
                      </button>
                    </div>
                    {product.isDigital && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-deep-plum text-white px-2 py-1 rounded text-xs font-montserrat">
                          Digital
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) 
                              ? 'text-radiant-fuchsia fill-current' 
                              : 'text-charcoal-grey/30'
                          }`} 
                        />
                      ))}
                      <span className="font-montserrat text-xs text-charcoal-grey/60 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-lg font-bold text-deep-plum mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="font-montserrat text-sm text-radiant-fuchsia font-medium mb-3">
                      {product.subtitle}
                    </p>
                    
                    <p className="font-cardo text-sm text-charcoal-grey/80 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-playfair text-lg font-bold text-radiant-fuchsia">
                          ${product.price}
                        </span>
                        <span className="font-montserrat text-sm text-charcoal-grey/60 line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="btn-primary flex-1 text-sm py-2">
                        Add to Cart
                      </button>
                      <Link
                        href={`/shop/${product.id}`}
                        className="btn-secondary px-4 py-2 text-sm"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-cardo text-lg text-charcoal-grey/60">
                  No products found matching your search. Try a different term or category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-plum text-luminous-ivory">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl font-bold text-luminous-ivory mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="font-cardo text-lg text-luminous-ivory/80 mb-8">
              Discover your Soul Archetype first to receive personalized product 
              recommendations that align with your unique style essence.
            </p>
            <Link href="/quiz" className="btn-primary">
              Take the Soul Archetype Quiz
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
