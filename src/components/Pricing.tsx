import { motion } from 'framer-motion';
import { Check, Crown, Rocket } from 'phosphor-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI trading',
      icon: Rocket,
      features: [
        'Basic AI trading signals',
        'Limited market analysis',
        'Community support',
        'Mobile app access',
        'Basic portfolio tracking'
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-gray-800 to-black'
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Advanced features for serious traders',
      icon: Crown,
      features: [
        'Advanced AI trading algorithms',
        'Real-time market analysis',
        'Priority customer support',
        'Advanced portfolio management',
        'Custom trading strategies',
        'Multi-exchange integration',
        'Risk management tools'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      gradient: 'from-black to-gray-800'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for institutions',
      icon: Crown,
      features: [
        'Custom AI model training',
        'Dedicated account manager',
        'White-label solutions',
        'API access',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-gray-700 to-black'
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-white text-black overflow-hidden">
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
            Choose Your Plan
          </motion.h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto font-light">
            Start free and scale as you grow. Every plan includes our core AI trading features with enterprise-grade security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${plan.popular ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-black to-gray-800 px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`backdrop-blur-xl bg-white/80 border rounded-xl p-8 h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-black/50 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30' 
                  : 'border-black/20 hover:border-black/40 hover:shadow-lg hover:shadow-black/10'
              }`}>
                {/* Icon */}
                <div className="mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon size={32} weight="light" className="text-white" />
                  </motion.div>
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl font-light tracking-tight mb-2 text-black">{plan.name}</h3>
                <p className="text-black/70 font-light mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-light text-black">{plan.price}</span>
                    <span className="text-black/60 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-black to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} weight="bold" className="text-white" />
                      </div>
                      <span className="text-black/70 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-black to-gray-800 text-white shadow-lg hover:shadow-xl hover:shadow-black/30'
                      : 'bg-black/20 text-black border border-black/40 hover:bg-black/30 hover:border-black/60'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;