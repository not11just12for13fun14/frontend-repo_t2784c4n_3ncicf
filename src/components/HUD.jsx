import React from 'react'
import { motion } from 'framer-motion'

export default function HUD() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Minimap */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-6 w-36 h-36 rounded-2xl bg-slate-800/70 border border-cyan-400/30 backdrop-blur-md">
        <div className="w-full h-full rounded-2xl bg-[conic-gradient(at_30%_40%,#22d3ee,#a78bfa,#f472b6,#22d3ee)] opacity-60" />
      </motion.div>

      {/* Health/Armor */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-44 flex gap-2">
        <div className="h-4 w-40 bg-slate-700/70 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-3/4" />
        </div>
        <div className="h-4 w-32 bg-slate-700/70 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 w-1/2" />
        </div>
      </motion.div>

      {/* Ammo */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 right-6 text-right">
        <div className="text-3xl font-bold text-white drop-shadow">30<span className="text-blue-300">/120</span></div>
        <div className="text-blue-300 text-xs">AR • Holo • Auto</div>
      </motion.div>

      {/* Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0.5 h-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </div>
      </div>
    </div>
  )
}
