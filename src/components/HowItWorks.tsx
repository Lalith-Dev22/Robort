import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Zap, Shield, Cpu, Wifi, Play, Eye, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

// High-quality robot images from Unsplash
const robotImages = {
  robot1: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center&q=80", // Modern AI robot
  robot2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center&q=80", // Industrial robot
  robot3: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center&q=80", // Humanoid robot
  robot4: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center&q=80", // AI processing
  robot5: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop&crop=center&q=80", // Advanced robotics
  robot6: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&h=600&fit=crop&crop=center&q=80", // Robot technology
};

const HowItWorks = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Remove auto-rotation - keep image static
  // useEffect(() => {
  //   const rotate = setInterval(() => {
  //     setGalleryIndex((prev) => (prev + 1) % 6);
  //   }, 2500);
  //   return () => clearInterval(rotate);
  // }, []);

  // Precompute much slower and smoother particles
  const particleCount = prefersReducedMotion ? 0 : 6; // Reduced count
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, () => ({
        leftPercent: Math.random() * 100,
        deltaX: (Math.random() - 0.5) * 30, // Much smaller horizontal drift
        duration: 45 + Math.random() * 25, // Much longer duration (45-70s)
        delay: Math.random() * 20,
      })),
    [particleCount]
  );

  return (
    <div id="how-it-works" className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Fixed Grid Background - no fluctuating opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
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
              } from-black/60 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } h-full w-0.5 bg-gradient-to-${
                position.includes("top") ? "b" : "t"
              } from-black/60 to-transparent`}
            />
            <div
              className={`absolute ${
                position.includes("top") ? "top-0" : "bottom-0"
              } ${
                position.includes("left") ? "left-0" : "right-0"
              } w-3 h-3 border-2 border-black/80`}
            />
          </div>
        ))}
      </div>

      {/* Fixed animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(prefersReducedMotion ? 0 : 4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black/10 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Remove animated grid lines that cause fluctuation */}
      {/* <div className="absolute inset-0 z-5">
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
      </div> */}

      {/* Main Content - Responsive */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] relative z-10 py-8 lg:py-0">
          {/* Left Column */}
        <div className="w-full lg:w-1/3 p-4 lg:p-8 flex flex-col justify-center relative">
          {/* Left-side Icon */}
          <motion.div 
            className="absolute left-8 top-1/2 transform -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-0.5 bg-black"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.5 h-4 bg-black"></div>
              </div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-black animate-pulse"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-black animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-black animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-black animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="ml-16">
            {/* Number and Square */}
            <motion.div 
              className="flex items-center space-x-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-2 h-2 bg-black animate-pulse"></div>
              <span className="text-sm font-medium tracking-widest text-black/80">001</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl font-bold leading-tight mb-8 max-w-xs bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A FAMILIAR WORLD... SET ON A DIFFERENT PATH.
            </motion.h1>

            {/* Step progress */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                {[
                  { label: "Perception" },
                  { label: "Reasoning" },
                  { label: "Action" },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-black" : "bg-black/40"}`}></div>
                    {i < 2 && <div className="h-[2px] w-8 bg-gradient-to-r from-black/60 to-black/20" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Image 1 – Perception */}
            <motion.div 
              className="relative mb-6 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-56 rounded-xl relative overflow-hidden border border-black/10 shadow-[inset_0_1px_0_rgba(0,0,0,0.08)]">
                <img 
                  src={robotImages.robot4} 
                  alt="Perception Engine" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                {/* sheen */}
                <motion.div
                  className="pointer-events-none absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 text-xs bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  <Eye size={14} />
                  <span>Step 1 • Perception</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white/90">
                  <h4 className="text-sm font-semibold">Perception Engine</h4>
                  <p className="text-[11px] leading-snug opacity-80">Multi‑sensor fusion detects context in real time with sub‑millisecond latency.</p>
                </div>
              </div>
            </motion.div>

            {/* Text Block */}
            <motion.p 
              className="text-sm leading-relaxed max-w-xs text-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Isolated within the New Eden safe zone, you witness humanity struggling to avoid descending into chaos.
            </motion.p>

            {/* Footer Indicator */}
            <motion.div 
              className="absolute bottom-8 left-8 text-xs opacity-40"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ....
            </motion.div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full lg:w-1/3 p-4 lg:p-8 flex flex-col justify-center">
          {/* Character Image – Reasoning Core slideshow */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full h-72 rounded-xl relative overflow-hidden border border-black/10">
              {/* Static image - no more slideshow */}
              <img
                src={robotImages.robot1}
                alt="Reasoning Core"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <motion.div
                className="pointer-events-none absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 text-xs bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                <Cpu size={14} />
                <span>Step 2 • Reasoning</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white/90">
                <h4 className="text-sm font-semibold">Reasoning Core</h4>
                <p className="text-[11px] leading-snug opacity-80">Transformer‑based planning combines sensor data with goals to produce optimal actions.</p>
              </div>
            </div>
            
            {/* Label */}
            <motion.div 
              className="flex items-center space-x-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-black animate-pulse"></div>
              <span className="text-xs font-medium tracking-widest text-black/80">ANIMUS CHARACTER</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 p-4 lg:p-8 flex flex-col justify-center">
          {/* Video/Trailer Image – Autonomous Execution */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-80 rounded-xl relative overflow-hidden border border-black/10">
              <img 
                src={robotImages.robot5} 
                alt="Autonomous Execution" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <motion.div
                className="pointer-events-none absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 text-xs bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                <Bot size={14} />
                <span>Step 3 • Action</span>
              </div>
              <ul className="absolute bottom-3 left-3 right-3 text-white/90 space-y-1 text-[11px]">
                <li className="opacity-90">• Executes plans with safety constraints</li>
                <li className="opacity-80">• Learns from feedback continuously</li>
                <li className="opacity-70">• Streams telemetry for transparency</li>
              </ul>
            </div>
            
            {/* Label */}
            <motion.div 
              className="flex items-center space-x-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-2 h-2 bg-black animate-pulse"></div>
              <span className="text-xs font-medium tracking-widest text-black/80">TRAILER V.004</span>
            </motion.div>

            {/* Play Button */}
            <motion.div 
              className="absolute bottom-6 left-6 w-8 h-8 bg-white border border-black rounded-full flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-0 h-0 border-l-4 border-l-black border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1 group-hover:ml-2 transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA + quick metrics */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-black/[0.02] rounded-xl p-5 border border-black/10">
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold tracking-tight">Experience NEXBOT in action</h4>
            <p className="text-black/60 text-sm">Smooth animations, transparent telemetry, and enterprise‑grade safety.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline">
              <a href="https://my.spline.design/nexbotrobotcharacterconcept-RqLbZ9sB0OvXBdX9zyiWyjhT/" target="_blank" rel="noreferrer">Watch Demo</a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: Zap, label: "Latency", value: "0.003 ms" },
            { icon: Shield, label: "Safety", value: "99.9%" },
            { icon: Cpu, label: "Throughput", value: "2.4 THz" },
            { icon: Wifi, label: "Uptime", value: "99.9%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
              <div className="w-9 h-9 rounded-md bg-black/5 flex items-center justify-center">
                <Icon size={16} className="text-black/70" />
              </div>
              <div>
                <div className="text-sm font-medium">{value}</div>
                <div className="text-xs text-black/60">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slower, smoother animated particles */}
      {particleCount > 0 && (
        <div className="absolute inset-0 overflow-hidden z-5">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-black/10 rounded-full" // Smaller and more subtle
              style={{ 
                left: `${p.leftPercent}%`, 
                top: "100%", 
                willChange: "transform, opacity",
                filter: "blur(0.5px)" // Slight blur for smoother appearance
              }}
              animate={{
                y: [0, -(window.innerHeight + 200)],
                x: [0, p.deltaX],
                opacity: [0, 0.3, 0.3, 0], // Lower opacity for subtlety
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay, 
                ease: "linear" // Changed from "easeInOut" to "linear" for constant speed
              }}
            />
          ))}
        </div>
      )}

      {/* Grid Background */}
      <div className="absolute inset-0 z-5">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-25" />

    </div>
  );
};

export default HowItWorks;