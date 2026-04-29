import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorGlow() {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event) => setPoint({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      aria-hidden
      animate={{ x: point.x - 80, y: point.y - 80 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.26),rgba(167,139,250,0.14),transparent_72%)] md:block"
    />
  )
}
