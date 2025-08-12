import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'phosphor-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const articles = [
    {
      title: 'The Future of AI in Cryptocurrency Trading',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we approach cryptocurrency trading, from pattern recognition to risk management.',
      author: 'Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      category: 'AI Trading',
      featured: true
    },
    {
      title: 'Building Secure Trading Bots: Best Practices',
      excerpt: 'A comprehensive guide to security considerations when developing and deploying automated trading systems in the cryptocurrency market.',
      author: 'David Kim',
      date: 'December 12, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      category: 'Security',
      featured: false
    },
    {
      title: 'Market Analysis: Q4 2024 Crypto Trends',
      excerpt: 'Our AI-powered analysis reveals key market trends and opportunities that shaped the cryptocurrency landscape in the final quarter of 2024.',
      author: 'Elena Rodriguez',
      date: 'December 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      category: 'Market Analysis',
      featured: false
    },
    {
      title: 'Democratizing Advanced Trading Strategies',
      excerpt: 'How Robort is making sophisticated trading algorithms accessible to retail investors without requiring years of financial expertise.',
      author: 'Marcus Johnson',
      date: 'December 8, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
      category: 'Product',
      featured: false
    }
  ];

  const categories = ['All', 'AI Trading', 'Security', 'Market Analysis', 'Product', 'Tutorials'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              Stay ahead of the curve with expert insights on AI trading, market analysis, and the future of automated investing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-glass-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-light transition-all duration-200 ${
                  index === 0
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'glass-card text-text-secondary hover:text-foreground hover:bg-glass'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.find(article => article.featured) && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary px-3 py-1 rounded-full text-white text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-primary font-medium text-sm">{articles[0].category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-text-secondary font-light leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <User size={16} weight="light" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} weight="light" />
                      <span>{articles[0].date}</span>
                    </div>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-200 font-medium"
                  >
                    Read Full Article
                    <ArrowRight size={16} weight="light" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-glow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-light tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary font-light leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <div className="flex items-center gap-2">
                        <User size={14} weight="light" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} weight="light" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm">{article.readTime}</span>
                      <motion.div
                        className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight size={14} weight="light" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Stay in the Loop
              </h2>
              <p className="text-xl text-text-secondary font-light mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI trading, market analysis, and product updates delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground placeholder:text-text-secondary font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium shadow-glow hover:shadow-accent-glow transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
              
              <p className="text-text-secondary text-sm mt-4 font-light">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;