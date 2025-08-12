import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import robot1 from '../assets/robot-1.jpg';
import robot2 from '../assets/robot-2.jpg';
import robot3 from '../assets/robot-3.jpg';
import robot4 from '../assets/robot-4.jpg';
import robot5 from '../assets/robot-5.jpg';
import robot6 from '../assets/robot-6.jpg';

const CircularRobotGallery = ({ size = 400, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const robots = [robot1, robot2, robot3, robot4, robot5, robot6];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % robots.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [robots.length]);

  const radius = size / 3;
  const centerX = size / 2;
  const centerY = size / 2;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Central Robot */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              width: size * 0.4,
              height: size * 0.4,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div className="relative glass-card rounded-full p-8 shadow-glow">
            <img
              src={robots[currentIndex]}
              alt={`AI Robot ${currentIndex + 1}`}
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Robots */}
      {robots.map((robot, index) => {
        const angle = (index * 2 * Math.PI) / robots.length;
        const x = centerX + radius * Math.cos(angle) - 30;
        const y = centerY + radius * Math.sin(angle) - 30;
        
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 glass-card rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{ left: x, top: y }}
            animate={{
              x: Math.cos(angle + Date.now() * 0.001) * 20,
              y: Math.sin(angle + Date.now() * 0.001) * 20,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
          >
            <img
              src={robot}
              alt={`Robot ${index + 1}`}
              className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                currentIndex === index ? 'ring-2 ring-primary shadow-glow' : 'opacity-70'
              }`}
            />
          </motion.div>
        );
      })}

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-primary rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: Math.random() * size,
            top: Math.random() * size,
          }}
        />
      ))}
    </div>
  );
};

export default CircularRobotGallery;