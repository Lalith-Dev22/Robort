import { motion, useReducedMotion } from 'framer-motion';
import { Target, Heart, Shield, Cpu, Lightning, Globe } from 'phosphor-react';
import { childVariants } from './ScrollRevealSection';
import { useIsMobile } from "@/hooks/use-mobile";
import { useMemo, useEffect, useState } from 'react';

const Mission = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 800);

  const stats = [
    { value: "2.4 THz", label: "Processing Power", icon: Cpu },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { value: "0.003ms", label: "Response Time", icon: Lightning },
    { value: "Global", label: "Network Reach", icon: Globe }
  ];

  // Track viewport height for particle animation
  useEffect(() => {
    const onResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Particle field configuration (same as Hero)
  const particleCount = prefersReducedMotion ? 0 : (isMobile ? 20 : 50);
  const particles = useMemo(
    () => Array.from({ length: particleCount }, () => ({
      leftPercent: Math.random() * 100,
      deltaX: (Math.random() - 0.5) * 200,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 15,
    })),
    [particleCount]
  );

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden dark-section">
      {/* Enhanced Background Text (same as Hero) */}
      <div className="absolute inset-0 z-1 opacity-5 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-10 text-[20vw] font-black tracking-wider text-white/10 select-none hidden lg:block"
          animate={prefersReducedMotion ? undefined : {
            x: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          MISSION
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-10 text-[15vw] font-black tracking-wider text-white/5 select-none hidden lg:block"
          animate={prefersReducedMotion ? undefined : {
            x: [0, -30, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        >
          AI
        </motion.div>
      </div>

      {/* Tech border frame (same as Hero) */}
      <div className="absolute inset-4 z-30 pointer-events-none hidden md:block">
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
              } from-white/40 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } h-full w-0.5 bg-gradient-to-${
                position.includes("top") ? "b" : "t"
              } from-white/40 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } w-3 h-3 border-2 border-white/50`}
            />
          </div>
        ))}
      </div>

      {/* White Glow Behind Content (same as Hero) */}
      <div className="absolute inset-0 z-5 hidden sm:block">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-white/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-white/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-white/40 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced Smooth Particles (same as Hero) */}
      {particleCount > 0 && (
        <div className="absolute inset-0 overflow-hidden z-15">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{ left: `${p.leftPercent}%`, top: "100%" }}
              animate={{
                y: [0, -(viewportHeight + 100)],
                x: [0, p.deltaX],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Grid Background (same as Hero) */}
      <div className="absolute inset-0 z-5 hidden md:block">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-160px)] gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left"
            variants={childVariants}
          >
            {/* Section Label */}
            <motion.div 
              variants={childVariants}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
            >
              <div className="w-2 h-2 bg-white animate-pulse"></div>
              <span className="text-sm font-medium tracking-widest text-white/80">003</span>
            </motion.div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                SHAPING THE
              </span>
              <br />
              <span className="text-white/80">
                FUTURE OF AI
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Our mission is to revolutionize artificial intelligence through quantum-enhanced 
              processing, creating autonomous systems that understand, adapt, and evolve with 
              human needs while maintaining the highest standards of safety and reliability.
            </p>

            {/* Mission Values */}
            <motion.div 
              variants={childVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Target, label: "Precision", color: "text-blue-400" },
                  { icon: Heart, label: "Ethics", color: "text-red-400" },
                  { icon: Shield, label: "Security", color: "text-green-400" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center lg:items-start space-y-2 group p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-lg flex items-center justify-center mb-2`}>
                      <item.icon size={24} weight="light" className={`${item.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-white font-medium text-lg group-hover:text-gray-300 transition-colors">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6"
            variants={childVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center group hover:border-white/40 transition-all duration-300"
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon size={32} weight="light" className="text-white/70 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}

            {/* AI Innovation Display */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="col-span-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center space-y-6">
                {/* Central AI Brain */}
                <motion.div 
                  className="relative"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center border-2 border-white/40">
                    <Cpu size={32} weight="light" className="text-white" />
                  </div>
                  
                  {/* Orbiting Elements */}
                  {[Lightning, Globe, Target].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-8 h-8 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center border border-white/30"
                      animate={{
                        rotate: [0, -360],
                        x: [
                          Math.cos((index * 120) * Math.PI / 180) * 40,
                          Math.cos((index * 120 + 360) * Math.PI / 180) * 40
                        ],
                        y: [
                          Math.sin((index * 120) * Math.PI / 180) * 40,
                          Math.sin((index * 120 + 360) * Math.PI / 180) * 40
                        ]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "linear"
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <Icon size={16} weight="light" className="text-white/80" />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Stats */}
                <div className="text-center space-y-2">
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI Powered
                  </motion.div>
                  <div className="text-white/60 text-sm">Next-Gen Automation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade (same as Hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-black/70 md:from-black via-black/40 to-transparent z-25" />

      {/* Styles (same as Hero) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          
          .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        `
      }} />
    </section>
  );
};

export default Mission;