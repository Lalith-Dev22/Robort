import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Zap, Shield, Cpu, Wifi, ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { childVariants } from './ScrollRevealSection';
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Globe as GlobeComponent } from "./magicui/globe";
import DockNavigation from "../components/Navigation";

const Hero: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [show3D, setShow3D] = useState<boolean>(false);
  const [currentStat, setCurrentStat] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const initializedRef = useRef(false);

  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 800);

  const stats = [
    { label: "PROCESSING POWER", value: "2.4 THz", icon: Cpu },
    { label: "RESPONSE TIME", value: "0.003ms", icon: Zap },
    { label: "UPTIME", value: "99.9%", icon: Shield },
    { label: "CONNECTIVITY", value: "6G READY", icon: Wifi }
  ];

  const features = [
    "QUANTUM NEURAL NETWORKS",
    "ADAPTIVE LEARNING CORE", 
    "REAL-TIME PROCESSING",
    "AUTONOMOUS DECISION MAKING"
  ];

  // Initialize 3D state based on device and reduced-motion preference (only once)
  useEffect(() => {
    if (initializedRef.current) return;
    setShow3D(!isMobile && !prefersReducedMotion);
    initializedRef.current = true;
  }, [isMobile, prefersReducedMotion]);

  // Manage loading overlay depending on whether 3D is shown
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }
    if (show3D) {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timeout);
    }
    setIsLoading(false);
  }, [show3D, prefersReducedMotion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  // Track viewport height for particle animation
  useEffect(() => {
    const onResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIsLoading(false);
  };

  const CurrentStatIcon = stats[currentStat].icon;

  // Particle field configuration (memoized for stability)
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
    <div className="w-full">
      <section id="hero" className="relative min-h-screen bg-black text-white overflow-hidden dark-section">
        {/* Enhanced Background Text */}
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
            NEXBOT
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

        {/* Tech border frame (hidden on small screens to keep robot unobstructed) */}
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

        {/* Header */}
        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 z-30 animate-fade-in">
          <div className="px-3 lg:px-4 py-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-md text-xs uppercase tracking-wider">
            Robort
          </div>
        </div>

        {/* Control indicator (hide on mobile to reduce clutter) */}
        <div className="hidden md:block absolute top-4 lg:top-8 right-4 lg:right-8 z-30 animate-fade-in-delayed">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="text-xs text-white/60 uppercase tracking-wider">
              {iframeLoaded ? "100%" : "0%"}
            </span>
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-sm transition-colors duration-300"
                  style={{
                    backgroundColor:
                      iframeLoaded && i <= 3
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* White Glow Behind 3D Model (reduced on mobile) */}
        <div className="absolute inset-0 z-5 hidden sm:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-white/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-white/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-white/40 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* 3D Model / Poster - positioned in center, behind everything */}
        <div className="absolute inset-0 z-10 animate-scale-in">
          <div className="absolute inset-0 z-10 bg-gradient-radial from-white/20 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-radial from-white/10 to-transparent" />

          {show3D && !prefersReducedMotion ? (
            <iframe
              ref={iframeRef}
              src='https://my.spline.design/nexbotrobotcharacterconcept-4mAQ0iZMRQrJfHk7Lki7PypU/'
              frameBorder="0"
              width="100%"
              height="100%"
              className="relative z-20 scale-[1] lg:scale-[1.1]"
              loading="lazy"
              onLoad={handleIframeLoad}
              title="3D Robot Model"
              aria-hidden={!show3D}
              style={{ pointerEvents: "auto" }}
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={new URL("../assets/robot-4.jpg", import.meta.url).toString()}
                alt="NEXBOT AI concept render"
                className="relative z-20 w-full h-full object-cover opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {!prefersReducedMotion && (
                <div className="absolute bottom-20 inset-x-0 z-40 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setShow3D(true)}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md"
                    aria-label="Enable interactive 3D model"
                  >
                    <Play className="w-4 h-4" /> Enable 3D
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-radial from-white/20 to-transparent mix-blend-screen" />
        </div>

        {/* Content Layout - Responsive */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center min-h-screen py-16 lg:py-20">
            
            {/* LEFT SIDE CONTENT - Statistics (span wider since right panel removed) */}
            <div className="lg:col-span-1 order-2 lg:order-1 hidden lg:block">
              <div className="space-y-4 max-w-xs mx-auto lg:mx-0">
                {/* Main Title */}
                <motion.div variants={childVariants}>
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-black tracking-wider mb-2 text-center lg:text-left">
                    <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                      NEXBOT
                    </span>
                  </h1>
                  <div className="h-px w-full bg-gradient-to-r from-white/60 to-transparent mb-3" />
                  <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-light text-center lg:text-left">
                    ADVANCED AI SYSTEM
                  </p>
                </motion.div>

                {/* Animated Statistics */}
                <motion.div 
                  variants={childVariants}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    SYSTEM STATUS
                  </div>
                  <div
                    key={currentStat}
                    className="flex items-center gap-2 animate-fade-in"
                  >
                    <CurrentStatIcon className="w-5 h-5 text-white/60" />
                    <div>
                      <div className="text-lg font-bold tracking-wider text-white">
                        {stats[currentStat].value}
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">
                        {stats[currentStat].label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress indicators */}
                  <div className="mt-3 flex gap-1">
                    {stats.map((_, i) => (
                      <div
                        key={i}
                        className="h-1 flex-1 rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: i === currentStat ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Features List */}
                <motion.div 
                  variants={childVariants}
                  className="space-y-2"
                >
                  {features.map((feature, i) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 group"
                      style={{ animationDelay: `${1.6 + i * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-white/40 rotate-45 group-hover:bg-white/80 transition-colors duration-300" />
                      <span className="text-xs text-white/60 uppercase tracking-wider group-hover:text-white/90 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                 </motion.div>
              </div>
            </div>

            {/* CENTER - 3D Model Space */}
            <div className="lg:col-span-2 order-1 lg:order-2 flex items-center justify-center relative">
              {/* This space is intentionally left for the 3D model */}
              <div className="text-center lg:hidden px-4">
                <motion.h1 
                  className="text-[12vw] leading-none font-black tracking-wider mb-3"
                  variants={childVariants}
                >
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    NEXBOT
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-white/70 text-xs uppercase tracking-[0.3em] font-light"
                  variants={childVariants}
                >
                  ADVANCED AI SYSTEM
                </motion.p>
              </div>

              {/* Interactive Cards were moved to section-level positioning */}
            </div>

            {/* RIGHT SIDE CONTENT REMOVED per request */}
            </div>
          </div>
        </div>

        {/* Loading overlay – premium feel */}
        <div
          className={`absolute inset-0 z-40 bg-black/50 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-500 ${
            isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isLoading}
        >
          <div className="relative w-[260px] max-w-[80vw] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0)_60%)]" />
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            </div>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-white/70">Preparing Experience</p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/3 animate-[loadingShimmer_1.4s_ease_infinite] rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        {/* Enhanced Smooth Particles (reduced on mobile, disabled on reduced motion) */}
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

        {/* Grid Background (hidden on small screens to avoid clutter) */}
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

        {/* Bottom fade (lighter on mobile so center content remains visible) */}
        <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-black/70 md:from-black via-black/40 to-transparent z-25" />


        {/* Dock is rendered globally; remove hero-local dock to avoid conflicts */}

        {/* Interactive Cards Stack (desktop, right of model) */}
        <div className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 z-30 w-[min(32vw,420px)] px-2 mt-3">
          <div className="flex flex-col gap-4">
            {/* Globe Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-white/60">Global Mesh</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">Live</span>
              </div>
              <div className="relative mx-auto w-full h-40">
                <GlobeComponent />
              </div>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4"
            >
              <div className="text-[11px] uppercase tracking-wider text-white/60 mb-2">Performance</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <div className="text-xs text-white/50">Processing</div>
                  <div className="text-sm font-semibold text-white">2.4 THz</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <div className="text-xs text-white/50">Response</div>
                  <div className="text-sm font-semibold text-white">0.003 ms</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <div className="text-xs text-white/50">Uptime</div>
                  <div className="text-sm font-semibold text-white">99.9%</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <div className="text-xs text-white/50">Connectivity</div>
                  <div className="text-sm font-semibold text-white">6G Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          
          .animate-fade-in { animation: fadeIn 0.8s ease-out; }
          .animate-fade-in-delayed { animation: fadeIn 0.8s ease-out 0.4s both; }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
          .animate-slide-in-left { animation: slideInLeft 0.8s ease-out 1s both; }
          .animate-slide-in-right { animation: slideInRight 0.8s ease-out 1s both; }
          .animate-scale-in { animation: scaleIn 1.2s ease-out; }
          .animate-bounce-slow { animation: bounce 2s infinite; }
          .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
          @keyframes loadingShimmer {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(20%); }
            100% { transform: translateX(120%); }
          }
        `
      }} />
    </div>
  );
};

export default Hero;