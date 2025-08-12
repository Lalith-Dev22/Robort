import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'glass' | 'gradient' | 'solid';
  delay?: number;
}

const BentoCard = ({ children, className = '', size = 'md', variant = 'glass', delay = 0 }: BentoCardProps) => {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-2 row-span-1',
    lg: 'col-span-2 row-span-2',
    xl: 'col-span-3 row-span-2'
  };

  const variantClasses = {
    glass: 'glass-card',
    gradient: 'bg-gradient-primary',
    solid: 'bg-card border border-border'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
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
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        rounded-2xl p-6 transition-all duration-300 hover:shadow-glow
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
}

const BentoGrid = ({ children, className = '', cols = 6 }: BentoGridProps) => {
  return (
    <div className={`grid gap-6 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {children}
    </div>
  );
};

export { BentoGrid, BentoCard };