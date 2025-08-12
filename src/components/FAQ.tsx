import { motion } from 'framer-motion';
import { Plus, Minus } from 'phosphor-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Robort's AI technology work?",
      answer: "Robort uses advanced machine learning algorithms to analyze market data in real-time, identifying patterns and opportunities that human traders might miss. Our AI continuously learns and adapts to market conditions."
    },
    {
      question: "Is my trading data secure?",
      answer: "Absolutely. We use bank-grade encryption and follow strict security protocols. Your data is never shared with third parties and is protected by multiple layers of security."
    },
    {
      question: "Can I customize the trading strategies?",
      answer: "Yes! Robort offers both pre-built strategies and fully customizable options. You can adjust risk parameters, trading pairs, and create your own unique strategies."
    },
    {
      question: "What exchanges does Robort support?",
      answer: "We currently support major exchanges including Binance, Coinbase Pro, Kraken, and more. We're constantly adding new exchanges based on user demand."
    },
    {
      question: "Do I need trading experience to use Robort?",
      answer: "No! Robort is designed for both beginners and experienced traders. Our AI handles the complex analysis while providing educational resources to help you learn."
    },
    {
      question: "What happens if the market crashes?",
      answer: "Robort includes advanced risk management features that automatically adjust positions during volatile market conditions. Our AI is trained to minimize losses during market downturns."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white text-black overflow-hidden">
      {/* Tech border frame */}
      <div className="absolute inset-4 z-30 pointer-events-none">
        {/* Top left corner */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-black/80" />
        </div>
        
        {/* Top right corner */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-black/60 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-black/80" />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-black/80" />
        </div>
        
        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-black/60 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-black/80" />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Smooth Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black/20 rounded-full particle"
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
            background: "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)",
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
            className="text-4xl md:text-5xl font-light tracking-tight mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto font-light">
            Everything you need to know about Robort and AI-powered trading automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="backdrop-blur-xl bg-white/80 border border-black/20 rounded-lg overflow-hidden hover:bg-white/90 hover:border-black/40 transition-all duration-300">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-light pr-8 text-black">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus size={20} weight="light" className="text-black" />
                    ) : (
                      <Plus size={20} weight="light" className="text-black/60" />
                    )}
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-black/70 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;