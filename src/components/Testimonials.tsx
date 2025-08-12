import { motion } from 'framer-motion';
import { Star } from 'phosphor-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Robort has completely transformed my trading strategy. The AI predictions are incredibly accurate, and I've saved 15 hours per week on market analysis.",
      name: "Sarah Chen",
      role: "Crypto Trader",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d5c1?w=100&h=100&fit=crop&crop=face",
      result: "Saved 15 hours/week",
      rating: 5
    },
    {
      quote: "The automation features are game-changing. I can sleep peacefully knowing Robort is making optimal trades 24/7 based on my risk parameters.",
      name: "Marcus Johnson",
      role: "Investment Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      result: "300% portfolio growth",
      rating: 5
    },
    {
      quote: "The security features give me complete confidence. Multi-signature wallets and real-time monitoring make this the safest trading platform I've used.",
      name: "Elena Rodriguez",
      role: "Fintech Analyst",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      result: "Zero security incidents",
      rating: 5
    },
    {
      quote: "Robort's AI learns from my trading patterns and constantly improves. It's like having a personal trading genius that never sleeps.",
      name: "David Kim",
      role: "Day Trader",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      result: "45% accuracy improvement",
      rating: 5
    },
    {
      quote: "The intuitive interface makes complex trading strategies accessible to everyone. I've learned more about trading in 3 months than in 3 years.",
      name: "Lisa Thompson",
      role: "Beginner Trader",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      result: "200% learning acceleration",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-black text-white overflow-hidden dark-section">
      {/* Tech border frame */}
      <div className="absolute inset-4 z-30 pointer-events-none">
        {/* Top left corner */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/80" />
        </div>
        
        {/* Top right corner */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/80" />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-white/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/80" />
        </div>
        
        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-white/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/80" />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Smooth Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full particle"
            style={{
              left: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-5">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
            width: "200%",
          }}
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            What Our Users Say
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Join thousands of traders who have transformed their trading experience with Robort's AI-powered automation.
          </p>
        </motion.div>

        {/* Scrollable container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 w-max">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group w-80 flex-shrink-0"
              >
                <div className="backdrop-blur-xl bg-black/40 border border-white/20 rounded-xl p-8 h-full transition-all duration-300 group-hover:bg-black/60 group-hover:border-white/40 group-hover:shadow-lg group-hover:shadow-white/20">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star size={16} weight="fill" className="text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white/70 font-light leading-relaxed mb-6 italic group-hover:text-white/90 transition-colors">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/40"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <motion.div 
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-black to-gray-800 rounded-full text-white text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {testimonial.result}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;