import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, Clock } from 'phosphor-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: EnvelopeSimple,
      title: 'Email Us',
      content: 'hello@robort.ai',
      description: 'Send us an email anytime',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm PST',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Innovation Drive',
      description: 'San Francisco, CA 94105',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 AI Support',
      description: 'Human support: 9am-6pm PST',
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              Have questions about Robort? We're here to help you start your AI trading journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-8 text-center group-hover:shadow-glow transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-accent-glow transition-all duration-300`}>
                    <info.icon size={32} weight="light" className="text-white" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-2">{info.content}</p>
                  <p className="text-text-secondary font-light text-sm">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-3xl font-light tracking-tight mb-8">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground placeholder:text-text-secondary font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground placeholder:text-text-secondary font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground placeholder:text-text-secondary font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light mb-2">Subject</label>
                    <select className="w-full glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Billing Question</option>
                      <option>Feature Request</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full glass-card px-4 py-3 rounded-lg bg-input border border-glass-border text-foreground placeholder:text-text-secondary font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-primary text-white rounded-lg font-medium shadow-glow hover:shadow-accent-glow transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-6">
                  Ready to Start Trading Smarter?
                </h3>
                <p className="text-text-secondary font-light leading-relaxed mb-8">
                  Our team of AI experts and trading professionals is here to help you get started with Robort. Whether you have questions about our features, need technical support, or want to explore partnership opportunities, we're here to help.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-light mb-4">Quick Response Times</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">General Inquiries</span>
                    <span className="font-medium">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Technical Support</span>
                    <span className="font-medium">&lt; 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Partnership Inquiries</span>
                    <span className="font-medium">&lt; 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-light mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">AI Support</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;