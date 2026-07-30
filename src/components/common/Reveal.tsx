import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

interface RevealProps extends PropsWithChildren {
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
