import React from 'react'

export default function NavTabs({ current, onChange }) {
  const tabs = [
    { key: 'lobby', label: 'Home Lobby' },
    { key: 'character', label: 'Character' },
    { key: 'inventory', label: 'Inventory' },
    { key: 'battle', label: 'Battle Mode' },
    { key: 'map', label: 'Map Selection' },
    { key: 'settings', label: 'Settings' },
  ]

  return (
    <div className="flex gap-2 overflow-x-auto p-2 bg-slate-900/40 rounded-2xl">
      {tabs.map(t => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${current === t.key ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'bg-slate-800 text-blue-200 hover:bg-slate-700'}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
