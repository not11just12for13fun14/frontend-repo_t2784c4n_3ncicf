import React from 'react'
import { motion } from 'framer-motion'

export default function NeonButton({ children, onClick, className = '', variant = 'primary' }) {
  const colors = {
    primary: 'from-cyan-500 to-fuchsia-500',
    green: 'from-emerald-400 to-cyan-400',
    red: 'from-pink-500 to-rose-500',
    yellow: 'from-amber-400 to-orange-500'
  }

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      className={`relative inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white tracking-wide ${className}`}
    >
      <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors[variant]} opacity-80`} />
      <span className="absolute -inset-0.5 rounded-xl blur-xl bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30" />
      <span className="relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">{children}</span>
    </motion.button>
  )
}
