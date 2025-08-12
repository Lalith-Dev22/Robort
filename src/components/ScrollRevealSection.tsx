import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Variant = 'fade-up' | 'zoom-in' | 'slide-left' | 'slide-right'

const sectionVariants = {
  'fade-up': { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  'zoom-in': { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  'slide-left': { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  'slide-right': { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
}

interface ScrollRevealSectionProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

export const ScrollRevealSection = ({
  children,
  variant = 'fade-up',
  className = '',
}: ScrollRevealSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={`w-full ${className}`}
    >
      <motion.div
        variants={sectionVariants[variant]}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

// Child animation variants for staggered effects
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
}