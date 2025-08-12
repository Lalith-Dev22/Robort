import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  MessageCircle,
  Send,
  Mail 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Send, href: '#', label: 'Telegram' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security', href: '#' }
  ];

  return (
    <footer className="relative bg-black text-white min-h-screen flex flex-col justify-center overflow-hidden dark-section">
      {/* Top seamless gradient bridge from previous section */}
      <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      
      {/* Tech border frame - matching Features */}
      <div className="absolute inset-4 z-30 pointer-events-none">
        {[
          "top-0 left-0",
          "top-0 right-0", 
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((position, idx) => (
          <div key={idx} className={`absolute ${position} w-20 h-20`}>
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } w-full h-0.5 bg-gradient-to-${
                position.includes("left") ? "r" : "l"
              } from-white/60 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } h-full w-0.5 bg-gradient-to-${
                position.includes("top") ? "b" : "t"
              } from-white/60 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } w-3 h-3 border-2 border-white/80`}
            />
          </div>
        ))}
      </div>

      {/* Background glows and subtle grid - matching Features */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] lg:w-[640px] h-[480px] lg:h-[640px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] h-[280px] lg:h-[360px] bg-white/20 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-10 hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle animated sheen - matching Features */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            backgroundSize: "200% 100%",
            backgroundPositionX: "0%",
          }}
          animate={{ backgroundPositionX: ["0%", "100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Section - Enhanced */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl font-light tracking-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                Robort
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-lg max-w-lg">
                Automate your future, elegantly. Join thousands of traders who trust Robort's AI-powered automation for smarter, more profitable trading decisions.
              </p>
            </div>
            
            {/* Enhanced Social Links - glass effect */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative w-12 h-12 glass-card rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-light text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group text-white/60 hover:text-white transition-all duration-300 font-light text-lg flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-white to-white/60 transition-all duration-300 group-hover:w-6" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Support - Enhanced */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-light text-white mb-8">Legal & Support</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group text-white/60 hover:text-white transition-all duration-300 font-light text-lg flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-white to-white/60 transition-all duration-300 group-hover:w-6" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Enhanced Contact - glass effect */}
            <motion.div 
              className="mt-8 pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:hello@robort.ai"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/5 glass-card"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <span className="font-light">hello@robort.ai</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Newsletter Section - glass effect */}
        <motion.div 
          className="border-t border-white/10 pt-12 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-light mb-3 text-white">Stay Updated</h4>
                <p className="text-white/60 font-light text-lg">
                  Get the latest AI trading insights and product updates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto min-w-96">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/40 font-light focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                />
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-white to-white/90 text-black rounded-xl font-medium shadow-lg hover:shadow-white/25 transition-all duration-300 hover:from-white/90 hover:to-white/80"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Copyright */}
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 font-light text-lg">
            © 2024 Robort. All rights reserved. Built with{' '}
            <span className="text-red-500 animate-pulse">❤️</span>{' '}
            for the future of trading.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade to match features */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-25" />
    </footer>
  );
};

export default Footer;