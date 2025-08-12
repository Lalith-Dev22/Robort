import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Home, Info, Star, DollarSign, Phone } from "lucide-react";

type ThemeStyles = {
  background: string;
  border: string;
  text: string;
  hoverText: string;
  backdrop: string;
};

const navItems = [
  { name: "About", href: "#about", icon: Info },
  { name: "How It Works", href: "#how-it-works", icon: Star },
  { name: "Features", href: "#features", icon: Home },
  { name: "Mission", href: "#mission", icon: Info },
  { name: "Pricing", href: "#pricing", icon: DollarSign },
  { name: "Contact", href: "#contact", icon: Phone },
];

const SmartDock = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [showDock, setShowDock] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = [
        { id: "hero", selector: "#hero" },
        { id: "how-it-works", selector: "#how-it-works" },
        { id: "features", selector: "#features" },
        { id: "featured-in", selector: ".featured-in-section" },
        { id: "mission", selector: "#mission" },
        { id: "pricing", selector: "#pricing" },
        { id: "faq", selector: "#faq" },
        { id: "footer", selector: "footer" },
      ];

      const mid = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i].selector);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (mid >= top && mid <= bottom) {
          setCurrentSection(sections[i].id);
          // Only show dock in hero section
          setShowDock(sections[i].id === "hero");
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero theme since dock only shows in hero
  const theme: ThemeStyles = {
    background: "bg-white/10",
    border: "border-white/20",
    text: "text-white/80",
    hoverText: "hover:text-white",
    backdrop: "backdrop-blur-xl",
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  const dock = (
    <div className="fixed inset-x-0 bottom-4 z-[100] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ 
          opacity: showDock ? 1 : 0, 
          y: showDock ? 0 : 16,
        }}
        transition={{ duration: 0.35 }}
        className={`mx-auto w-[min(88vw,820px)] h-16 sm:h-16 px-4 sm:px-5 rounded-3xl ${theme.backdrop} ${theme.background} ${theme.border} border shadow-xl flex items-center justify-center gap-3 sm:gap-5 ${
          scrolled ? "scale-[0.98]" : "scale-100"
        }`}
        style={{ 
          contain: "layout paint", 
          willChange: "transform",
          pointerEvents: showDock ? "auto" : "none"
        }}
      >
        {navItems.map(({ name, href, icon: Icon }) => (
          <button
            key={name}
            onClick={() => scrollToSection(href)}
            className={`group flex flex-col items-center justify-center ${theme.text} ${theme.hoverText} transition-transform duration-200 px-2 py-1 rounded-xl hover:scale-110`}
          >
            <Icon size={18} className="mb-1" />
            <span className="text-[10px] uppercase tracking-wide hidden sm:block">{name}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(dock, document.body);
};

export default SmartDock;