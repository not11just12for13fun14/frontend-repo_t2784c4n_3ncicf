import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Users, Shield, Settings, Sword, Map, Trophy, Skull, Backpack, Home, ListMusic } from 'lucide-react'
import NeonButton from './components/NeonButton'
import NavTabs from './components/NavTabs'
import HUD from './components/HUD'
import CharacterCarousel from './components/CharacterCarousel'

const Section = ({ title, subtitle, children }) => (
  <div className="bg-slate-900/50 border border-slate-700/60 rounded-3xl p-6">
    <div className="mb-4">
      <div className="text-white text-xl font-semibold">{title}</div>
      {subtitle && <div className="text-blue-300 text-sm">{subtitle}</div>}
    </div>
    {children}
  </div>
)

export default function App() {
  const [tab, setTab] = useState('lobby')
  const [selectedChar, setSelectedChar] = useState(null)

  const headerTitle = useMemo(() => ({
    lobby: 'CYBER ARENA',
    character: 'SELECT OPERATIVE',
    inventory: 'ARMORY & GEAR',
    battle: 'BATTLE SIMULATION',
    map: 'DEPLOYMENT ZONES',
    settings: 'SYSTEM SETTINGS'
  }[tab]), [tab])

  return (
    <div className="min-h-screen bg-slate-950 text-blue-200">
      {/* Futuristic neon grid background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-fuchsia-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(#0b1220_1px,transparent_1px),linear-gradient(90deg,#0b1220_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Top bar */}
      <div className="px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-[0_0_25px_rgba(34,211,238,0.6)]" />
          <div className="text-white font-black tracking-wider">NEON STRIKE</div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <NeonButton variant="green" className="px-3 py-2">Play</NeonButton>
          <NeonButton variant="yellow" className="px-3 py-2">Friends</NeonButton>
          <NeonButton variant="red" className="px-3 py-2">Store</NeonButton>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 sm:px-8"><NavTabs current={tab} onChange={setTab} /></div>

      {/* Content */}
      <div className="p-4 sm:p-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Section title={headerTitle} subtitle="A futuristic battle-royale experience prototype">
            <div className="aspect-video relative rounded-2xl overflow-hidden border border-cyan-400/20 bg-slate-900/70">
              {/* Simulated 3D scene placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.2),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(244,114,182,0.15),transparent_50%)]" />
              {tab === 'battle' && <HUD />}
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <NeonButton className="px-4 py-2"><Sword size={18} className="mr-2" />Attack</NeonButton>
                  <NeonButton variant="green" className="px-4 py-2"><Shield size={18} className="mr-2" />Shield</NeonButton>
                  <NeonButton variant="yellow" className="px-4 py-2"><ListMusic size={18} className="mr-2" />Emote</NeonButton>
                </div>
                <div className="flex gap-2">
                  <NeonButton className="px-4 py-2">Grenade</NeonButton>
                  <NeonButton variant="red" className="px-4 py-2">Heal</NeonButton>
                </div>
              </div>
            </div>
          </Section>

          {tab === 'lobby' && (
            <Section title="Lobby" subtitle="Invite friends, pick a mode, and deploy">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/60">
                  <div className="text-white font-semibold mb-2 flex items-center gap-2"><Users size={18}/> Friends</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between bg-slate-900/60 rounded-xl p-2"><span>@Nova</span><NeonButton className="px-3 py-1">Invite</NeonButton></div>
                    <div className="flex items-center justify-between bg-slate-900/60 rounded-xl p-2"><span>@Vex</span><NeonButton className="px-3 py-1">Invite</NeonButton></div>
                    <div className="flex items-center justify-between bg-slate-900/60 rounded-xl p-2"><span>@Onyx</span><NeonButton className="px-3 py-1">Invite</NeonButton></div>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/60">
                  <div className="text-white font-semibold mb-2 flex items-center gap-2"><Gamepad2 size={18}/> Mode</div>
                  <div className="grid grid-cols-3 gap-2">
                    <NeonButton className="px-3 py-2">Solo</NeonButton>
                    <NeonButton variant="green" className="px-3 py-2">Duo</NeonButton>
                    <NeonButton variant="yellow" className="px-3 py-2">Squad</NeonButton>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/60">
                  <div className="text-white font-semibold mb-2 flex items-center gap-2"><Map size={18}/> Map</div>
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/20">Neon City</div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/20">Orbital Docks</div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {tab === 'character' && (
            <Section title="Characters" subtitle="Choose your operative">
              <CharacterCarousel onSelect={setSelectedChar} />
            </Section>
          )}

          {tab === 'inventory' && (
            <Section title="Inventory" subtitle="Weapons, armor, utilities">
              <div className="grid sm:grid-cols-3 gap-4">
                {['AR-57 Pulse','Viper SMG','Longshot SR','Aegis Armor','Medkit','Nano Grenade'].map((it, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <div className="h-24 rounded-xl bg-slate-900/60 border border-cyan-400/20 mb-3 flex items-center justify-center text-white font-semibold">{it}</div>
                    <NeonButton className="w-full justify-center">Equip</NeonButton>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>

        <div className="space-y-6">
          <Section title="Status" subtitle="Match info and stats">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">Players: 32/50</div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">Ping: 24ms</div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">Region: NA</div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">Mode: Squad</div>
            </div>
            <div className="mt-4 flex gap-2">
              <NeonButton className="flex-1 justify-center">Start Match</NeonButton>
              <NeonButton variant="green" className="flex-1 justify-center">Ready</NeonButton>
            </div>
          </Section>

          <Section title="Settings" subtitle="Graphics, controls, audio">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span>Graphics</span><span className="text-white font-semibold">High</span></div>
              <div className="flex items-center justify-between"><span>Framerate</span><span className="text-white font-semibold">60 FPS</span></div>
              <div className="flex items-center justify-between"><span>Gyro</span><span className="text-white font-semibold">Off</span></div>
              <div className="flex items-center justify-between"><span>Sound</span><span className="text-white font-semibold">On</span></div>
            </div>
            <div className="mt-4">
              <NeonButton variant="yellow" className="w-full justify-center"><Settings size={18} className="mr-2" />Open Settings</NeonButton>
            </div>
          </Section>

          <Section title="Results" subtitle="End of match screens">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 text-center">
                <Trophy className="mx-auto text-emerald-300" />
                <div className="text-white font-semibold mt-2">Victory</div>
                <div className="text-blue-300 text-xs">Rank #1</div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 border border-rose-400/30 text-center">
                <Skull className="mx-auto text-rose-300" />
                <div className="text-white font-semibold mt-2">Defeat</div>
                <div className="text-blue-300 text-xs">Better luck next time</div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Footer navbar for mobile */}
      <div className="fixed bottom-0 inset-x-0 sm:hidden p-3 bg-slate-950/80 backdrop-blur border-t border-slate-800 flex items-center justify-around">
        {[
          { key: 'lobby', icon: Home, label: 'Lobby' },
          { key: 'character', icon: Shield, label: 'Character' },
          { key: 'inventory', icon: Backpack, label: 'Inventory' },
          { key: 'battle', icon: Sword, label: 'Battle' },
          { key: 'map', icon: Map, label: 'Map' },
        ].map(it => (
          <button key={it.key} onClick={() => setTab(it.key)} className={`p-2 rounded-xl ${tab===it.key?'text-white bg-slate-800':'text-blue-300'}`}>
            <it.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}
