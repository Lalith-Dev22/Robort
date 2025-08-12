import React from 'react';
import { motion } from 'framer-motion';
import { Lightning, DeviceMobile, ShieldCheck, Sliders, Globe, Cpu, WifiHigh, Eye, Robot, Shield } from 'phosphor-react';
import { Zap } from 'lucide-react';
// Removed circular gallery in favor of interactive globe
import { Globe as GlobeComponent } from './magicui/globe';
import { childVariants } from './ScrollRevealSection';

const Features = () => {
  const stats = [
    { icon: Lightning, value: "2.4 THz", label: "Processing Power" },
    { icon: Cpu, value: "0.003ms", label: "Response Time" },
    { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
    { icon: WifiHigh, value: "6G Ready", label: "Connectivity" }
  ];

  return (
    <section id="features" className="relative min-h-screen bg-black text-white overflow-hidden dark-section py-16 lg:py-24">
      {/* Top seamless gradient bridge from previous section */}
      <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      {/* Tech border frame */}
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

      {/* Background glows and subtle grid to match Hero */}
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

      {/* Subtle animated sheen across section without causing overflow */}
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

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={childVariants}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 lg:w-12 h-px bg-white/40"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-light">CORE CAPABILITIES</span>
            <div className="w-8 lg:w-12 h-px bg-white/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              FEATURES
            </span>
          </h2>
          <p className="text-white/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Discover the advanced capabilities that make NEXBOT the future of artificial intelligence
          </p>
        </motion.div>

        {/* Enhanced Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {/* Large Feature Card - Quantum Neural Networks */}
          <motion.div
            className="md:col-span-2 lg:col-span-3 lg:row-span-2 glass-card rounded-2xl p-6 h-auto lg:min-h-[400px] flex flex-col"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white/60" />
                </div>
                <span className="text-xs uppercase tracking-wider text-white/40">PROCESSING</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3 text-white">Quantum Neural Networks</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Advanced quantum computing capabilities enable unprecedented processing speeds and complex problem-solving abilities.
              </p>
              <div className="mt-auto">
                <div className="text-xl lg:text-2xl font-black text-white/80">2.4 THz</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Processing Power</div>
              </div>
            </div>
          </motion.div>

          {/* Lightning Fast Response */}
          <motion.div
            className="md:col-span-1 lg:col-span-2 glass-card rounded-2xl p-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap className="w-3 h-3 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">RESPONSE</span>
            </div>
            <h3 className="text-base lg:text-lg font-bold mb-2 text-white">Lightning Fast</h3>
            <p className="text-white/60 text-xs leading-relaxed">Real-time decision making with 0.003ms response time</p>
            <div className="mt-4">
              <div className="text-base lg:text-lg font-black text-white/80">0.003ms</div>
            </div>
          </motion.div>

          {/* Secure Core */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 glass-card rounded-2xl p-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-3 h-3 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">SECURITY</span>
            </div>
            <h3 className="text-base lg:text-lg font-bold mb-2 text-white">Secure Core</h3>
            <p className="text-white/60 text-xs leading-relaxed">Military-grade encryption with 99.9% uptime guarantee</p>
            <div className="mt-4">
              <div className="text-base lg:text-lg font-black text-white/80">99.9%</div>
            </div>
          </motion.div>

          {/* Computer Vision */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 glass-card rounded-2xl p-4 lg:p-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <Eye className="w-2 h-2 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">VISION</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Computer Vision</h4>
            <p className="text-white/60 text-xs">Advanced visual recognition</p>
          </motion.div>

          {/* Autonomous */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 glass-card rounded-2xl p-4 lg:p-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <Robot className="w-2 h-2 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">AUTO</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Autonomous</h4>
            <p className="text-white/60 text-xs">Self-learning protocols</p>
          </motion.div>

          {/* 6G Ready */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 glass-card rounded-2xl p-4 lg:p-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <WifiHigh className="w-2 h-2 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">CONNECT</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">6G Ready</h4>
            <p className="text-white/60 text-xs">Next-gen connectivity</p>
          </motion.div>
        </div>

        {/* Robot Gallery Section */}
        <motion.div 
          className="relative rounded-3xl p-6 lg:p-10 mb-12 lg:mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Soft hero-alike glow background without visible card edges */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5/0 to-white/0" />
          </div>
          <div className="text-center mb-8">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-xl"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Cpu size={32} weight="light" className="text-white" />
            </motion.div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">AI Robot Collection</h3>
            <p className="text-base text-white/70 max-w-lg mx-auto">Interactive showcase of our advanced AI models with real-time performance metrics</p>
          </div>
          
           <div className="relative flex justify-center mb-8">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px]">
              <GlobeComponent />
            </div>
            
            {/* Enhanced Floating Stats (kept within panel bounds) */}
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg"
            >
              LIVE
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-2 left-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg"
            >
              6 MODELS
            </motion.div>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 text-white/60" />
                  </div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to match hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-25" />
    </section>
  );
};

export default Features;