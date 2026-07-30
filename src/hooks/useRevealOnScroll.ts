import { useEffect, useRef, useState } from 'react'

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || isVisible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible])

  return { ref, isVisible }
}
