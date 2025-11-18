import React from 'react'
import { motion } from 'framer-motion'

const characters = [
  { id: 'nova', name: 'NOVA', role: 'Recon Specialist', color: 'from-cyan-500 to-violet-500' },
  { id: 'vex', name: 'VEX', role: 'Assault Operative', color: 'from-fuchsia-500 to-rose-500' },
  { id: 'onyx', name: 'ONYX', role: 'Shield Vanguard', color: 'from-emerald-400 to-cyan-400' },
]

export default function CharacterCarousel({ onSelect }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {characters.map((c, i) => (
        <motion.button
          key={c.id}
          onClick={() => onSelect?.(c)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative rounded-2xl overflow-hidden bg-slate-800/60 border border-slate-700/60 p-4 text-left"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-30`} />
          <div className="relative">
            <div className="h-40 rounded-xl bg-slate-900/50 border border-cyan-400/20 flex items-center justify-center text-4xl font-black text-white tracking-widest">
              {c.name}
            </div>
            <div className="mt-3">
              <div className="text-white font-semibold">{c.role}</div>
              <div className="text-blue-300 text-sm">Tactical ability • Ultimate • Passive</div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
