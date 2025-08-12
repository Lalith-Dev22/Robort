import { motion } from 'framer-motion';
import { Target, Users, Brain, Shield, Rocket } from 'phosphor-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs quantitative analyst with 10+ years in algorithmic trading.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612d5c1?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher from MIT with expertise in machine learning and financial markets.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Elena Kowalski',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science, former lead at DeepMind with focus on financial AI.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with 15 years protecting financial institutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    }
  ];

  const principles = [
    {
      icon: Brain,
      title: 'Intelligent Innovation',
      description: 'We push the boundaries of AI to create trading solutions that learn and adapt.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every feature is built with bank-grade security and user privacy as the foundation.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'User Empowerment',
      description: 'We believe in giving users complete control while simplifying complex trading.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Our AI is trained for precision, ensuring every trade decision is data-driven.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

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
              About Robort
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              We're building the future of intelligent trading automation, where cutting-edge AI meets elegant design to democratize sophisticated trading strategies for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light tracking-tight mb-8">
                Our Mission
              </h2>
              <div className="space-y-6 text-text-secondary font-light leading-relaxed">
                <p>
                  Founded in 2023 by a team of AI researchers and financial experts, Robort emerged from a simple belief: intelligent automation should be accessible to everyone, not just institutional investors.
                </p>
                <p>
                  We've combined decades of experience in quantitative trading, machine learning, and user experience design to create an AI assistant that thinks like a seasoned trader but operates with the precision of a computer.
                </p>
                <p>
                  Our mission is to democratize sophisticated trading strategies while maintaining the highest standards of security, transparency, and ethical AI development.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary mb-2">500K+</div>
                    <div className="text-text-secondary font-light">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary mb-2">$2.5B+</div>
                    <div className="text-text-secondary font-light">Volume Traded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary mb-2">99.9%</div>
                    <div className="text-text-secondary font-light">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary mb-2">24/7</div>
                    <div className="text-text-secondary font-light">AI Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Core Principles
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
              The values that guide every decision we make and every feature we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-8 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-lg flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-accent-glow transition-all duration-300`}>
                    <principle.icon size={32} weight="light" className="text-white" />
                  </div>
                  <h3 className="text-xl font-light tracking-tight mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
              World-class experts in AI, finance, and technology working together to revolutionize trading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-6 text-center group-hover:shadow-glow transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-text-secondary font-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;