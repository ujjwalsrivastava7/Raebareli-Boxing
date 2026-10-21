import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swords, Zap, Shield, Heart, Brain, Dumbbell, Award, ArrowRightLeft } from 'lucide-react';
import { FIGHTERS_ROSTER } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const TaleOfTheTape = ({ selectedFighter1Id = 'singh', selectedFighter2Id = 'sharma' }) => {
  const [f1Id, setF1Id] = useState(selectedFighter1Id);
  const [f2Id, setF2Id] = useState(selectedFighter2Id);

  useEffect(() => {
    if (selectedFighter1Id) setF1Id(selectedFighter1Id);
    if (selectedFighter2Id) setF2Id(selectedFighter2Id);
  }, [selectedFighter1Id, selectedFighter2Id]);

  const fighter1 = FIGHTERS_ROSTER.find(f => f.id === f1Id) || FIGHTERS_ROSTER[0];
  const fighter2 = FIGHTERS_ROSTER.find(f => f.id === f2Id) || FIGHTERS_ROSTER[1];

  const handleSwap = () => {
    soundEngine.playPunchImpact();
    setF1Id(f2Id);
    setF2Id(f1Id);
  };

  const statConfig = [
    { label: 'Punch Power', key: 'power', icon: Zap, color: 'text-red-500' },
    { label: 'Hand Speed', key: 'speed', icon: Swords, color: 'text-yellow-400' },
    { label: 'Guard Defense', key: 'defense', icon: Shield, color: 'text-blue-400' },
    { label: 'Cardio Stamina', key: 'stamina', icon: Heart, color: 'text-emerald-400' },
    { label: 'Ring IQ', key: 'ringIQ', icon: Brain, color: 'text-purple-400' },
    { label: 'Chin Durability', key: 'chin', icon: Dumbbell, color: 'text-orange-400' },
  ];

  // Win probability calculation based on power + IQ + chin
  const score1 = (fighter1.stats.power * 1.2) + fighter1.stats.speed + (fighter1.stats.ringIQ * 1.1) + fighter1.stats.chin;
  const score2 = (fighter2.stats.power * 1.2) + fighter2.stats.speed + (fighter2.stats.ringIQ * 1.1) + fighter2.stats.chin;
  const total = score1 + score2;
  const winProb1 = Math.round((score1 / total) * 100);
  const winProb2 = 100 - winProb1;

  return (
    <section id="tale-of-tape" className="py-24 bg-[#070709] relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Swords className="w-3.5 h-3.5" />
            <span>FIGHT ANALYTICS ENGINE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            TALE OF <span className="crimson-gradient-text">THE TAPE</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            Compare biometric attributes, punching velocity, defensive metrics, and projected simulation win probability between any two fighters.
          </p>
        </div>

        {/* Fighter Selection Controls */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-zinc-800 mb-10 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Fighter 1 selector */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs uppercase font-heading font-black text-red-400 mb-1 tracking-wider">
              Red Corner Fighter
            </label>
            <select
              value={f1Id}
              onChange={(e) => {
                soundEngine.playPunchImpact();
                setF1Id(e.target.value);
              }}
              className="w-full bg-[#0B0C10] border border-red-500/40 rounded-xl px-4 py-2.5 text-white font-heading font-bold text-sm focus:outline-none focus:border-red-500"
            >
              {FIGHTERS_ROSTER.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === f2Id}>
                  {f.name} ({f.division} • {f.flag})
                </option>
              ))}
            </select>
          </div>

          {/* Swap button */}
          <div className="pt-5">
            <button
              onClick={handleSwap}
              title="Swap Corners"
              className="p-3 rounded-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white transition-all transform hover:rotate-180 duration-300 shadow-md"
            >
              <ArrowRightLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Fighter 2 selector */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs uppercase font-heading font-black text-blue-400 mb-1 tracking-wider">
              Blue Corner Fighter
            </label>
            <select
              value={f2Id}
              onChange={(e) => {
                soundEngine.playPunchImpact();
                setF2Id(e.target.value);
              }}
              className="w-full bg-[#0B0C10] border border-blue-500/40 rounded-xl px-4 py-2.5 text-white font-heading font-bold text-sm focus:outline-none focus:border-blue-500"
            >
              {FIGHTERS_ROSTER.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === f1Id}>
                  {f.name} ({f.division} • {f.flag})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* COMPARISON BOARD */}
        <div className="glass-panel rounded-3xl border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Top Avatars and Names */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-zinc-800 pb-8">
            
            {/* Fighter 1 Card */}
            <div className="md:col-span-5 flex items-center gap-4 sm:gap-6">
              <div className="relative">
                <img
                  src={fighter1.image}
                  alt={fighter1.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-red-500 shadow-neon-red"
                />
                <span className="absolute -bottom-2 -left-2 text-2xl">{fighter1.flag}</span>
              </div>
              <div>
                <span className="text-xs font-heading font-bold text-red-400 uppercase tracking-widest">
                  {fighter1.division}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  {fighter1.name}
                </h3>
                <p className="text-sm font-heading font-black text-zinc-400 uppercase">
                  "{fighter1.alias}"
                </p>
                <p className="text-xs font-mono font-bold text-yellow-400 mt-1">
                  Record: {fighter1.record}
                </p>
              </div>
            </div>

            {/* Simulated Win Probability Gauge */}
            <div className="md:col-span-2 text-center py-4 md:py-0">
              <span className="text-[11px] font-black font-heading text-zinc-400 tracking-widest uppercase block mb-1">
                AI COMBAT PREDICTION
              </span>
              <div className="flex items-center justify-center gap-2 font-display text-2xl font-black">
                <span className="text-red-500">{winProb1}%</span>
                <span className="text-zinc-500 text-sm">PROB</span>
                <span className="text-blue-400">{winProb2}%</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-2 flex">
                <div style={{ width: `${winProb1}%` }} className="bg-red-600 h-full"></div>
                <div style={{ width: `${winProb2}%` }} className="bg-blue-600 h-full"></div>
              </div>
            </div>

            {/* Fighter 2 Card */}
            <div className="md:col-span-5 flex items-center justify-end gap-4 sm:gap-6 text-right">
              <div>
                <span className="text-xs font-heading font-bold text-blue-400 uppercase tracking-widest">
                  {fighter2.division}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  {fighter2.name}
                </h3>
                <p className="text-sm font-heading font-black text-zinc-400 uppercase">
                  "{fighter2.alias}"
                </p>
                <p className="text-xs font-mono font-bold text-yellow-400 mt-1">
                  Record: {fighter2.record}
                </p>
              </div>
              <div className="relative">
                <img
                  src={fighter2.image}
                  alt={fighter2.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-500 shadow-md"
                />
                <span className="absolute -bottom-2 -right-2 text-2xl">{fighter2.flag}</span>
              </div>
            </div>

          </div>

          {/* Physical Measurements Grid */}
          <div className="py-6 border-b border-zinc-800/80">
            <h4 className="text-xs font-black font-heading uppercase text-zinc-400 tracking-widest text-center mb-6">
              BIOMETRIC & PHYSICAL TAPE
            </h4>
            <div className="grid grid-cols-3 max-w-xl mx-auto gap-y-4 text-center text-sm font-heading">
              <span className="font-bold text-white text-base">{fighter1.height}</span>
              <span className="text-xs uppercase text-zinc-500 font-semibold pt-1">Height</span>
              <span className="font-bold text-white text-base">{fighter2.height}</span>

              <span className="font-bold text-white text-base">{fighter1.reach}</span>
              <span className="text-xs uppercase text-zinc-500 font-semibold pt-1">Reach</span>
              <span className="font-bold text-white text-base">{fighter2.reach}</span>

              <span className="font-bold text-white text-base">{fighter1.weight}</span>
              <span className="text-xs uppercase text-zinc-500 font-semibold pt-1">Weight</span>
              <span className="font-bold text-white text-base">{fighter2.weight}</span>

              <span className="font-bold text-red-400 text-base">{fighter1.stance}</span>
              <span className="text-xs uppercase text-zinc-500 font-semibold pt-1">Stance</span>
              <span className="font-bold text-blue-400 text-base">{fighter2.stance}</span>
            </div>
          </div>

          {/* Dynamic Attribute Comparison Bars */}
          <div className="pt-8 max-w-3xl mx-auto space-y-6">
            <h4 className="text-xs font-black font-heading uppercase text-zinc-400 tracking-widest text-center mb-2">
              RADAR COMBAT PERFORMANCE RATINGS (0 - 100)
            </h4>

            {statConfig.map((stat) => {
              const val1 = fighter1.stats[stat.key];
              const val2 = fighter2.stats[stat.key];
              const Icon = stat.icon;

              return (
                <div key={stat.key} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider">
                    <span className="text-red-400 font-mono text-sm">{val1}</span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
                      {stat.label}
                    </span>
                    <span className="text-blue-400 font-mono text-sm">{val2}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 h-2.5">
                    {/* Left fighter bar (fills from right to left) */}
                    <div className="bg-zinc-800 rounded-l-full overflow-hidden flex justify-end">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val1}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-l from-red-500 to-red-700 h-full rounded-l-full"
                      />
                    </div>

                    {/* Right fighter bar (fills from left to right) */}
                    <div className="bg-zinc-800 rounded-r-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 h-full rounded-r-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
