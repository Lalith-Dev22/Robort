import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, Info, Star, DollarSign, Phone, BookOpenText } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: Info },
  { name: "How It Works", href: "#how-it-works", icon: Star },
  { name: "Features", href: "#features", icon: Home },
  { name: "Mission", href: "#mission", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone },
];

type DockProps = {
  position?: "top" | "bottom";
  positioning?: "fixed" | "absolute";
  className?: string;
};

const DockNavigation = ({ position = "bottom", positioning = "fixed", className = "" }: DockProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const [showDock, setShowDock] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Enhanced section detection for responsive design
      const sections = [
        { id: "hero", selector: "#hero" },
        { id: "how-it-works", selector: "#how-it-works" },
        { id: "features", selector: "#features" },
        { id: "featured-in", selector: ".featured-in-section" },
        { id: "mission", selector: "#mission" },
        { id: "pricing", selector: "#pricing" },
        { id: "faq", selector: "#faq" },
        { id: "footer", selector: "footer" }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i].selector);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSection(sections[i].id);
            // Only show dock in hero section
            setShowDock(sections[i].id === "hero");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  // Hero section theme (since dock only shows in hero)
  const theme = {
    background: "bg-white/10", // translucent for dark
    border: "border-white/20",
    text: "text-white/80",
    hoverText: "hover:text-white",
    backdrop: "backdrop-blur-xl"
  };

  const verticalClass = position === "top" ? "top-4 lg:top-6" : "bottom-4 lg:bottom-6";
  const positionClass = positioning === "absolute" ? "absolute" : "fixed";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: showDock ? 1 : 0, 
        y: showDock ? 0 : -20,
        pointerEvents: showDock ? "auto" : "none"
      }}
      transition={{ duration: 0.6 }}
      className={`${positionClass} ${verticalClass} left-1/2 -translate-x-1/2 z-[70] w-[min(92vw,980px)] max-w-[980px] h-14 lg:h-16 px-3 lg:px-5 rounded-3xl ${theme.backdrop} border ${theme.border} ${theme.background} shadow-xl flex items-center justify-center gap-2 lg:gap-4 transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      } ${className}`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', contain: 'layout paint', willChange: 'transform' }}
    >
      {navItems.map(({ name, href, icon: Icon }) => (
        <button
          key={name}
          onClick={() => scrollToSection(href)}
          className={`group flex flex-col items-center justify-center ${theme.text} ${theme.hoverText} transition-all duration-200 px-2 py-1 lg:px-3 lg:py-2 rounded-xl hover:scale-110`}
        >
          <Icon size={18} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wide hidden sm:block">{name}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default DockNavigation;