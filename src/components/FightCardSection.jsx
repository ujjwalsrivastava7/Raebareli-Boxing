import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Ticket, Shield, Swords, Star, Info, ChevronRight } from 'lucide-react';
import { BOUTS } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const FightCardSection = ({ onOpenTickets, onSelectFightersForTape }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [expandedBout, setExpandedBout] = useState('bout-main');

  const categories = ['ALL', 'MAIN EVENT', 'CO-MAIN EVENT', 'FEATURED BOUT'];

  const filteredBouts = activeCategory === 'ALL'
    ? BOUTS
    : BOUTS.filter(b => b.category === activeCategory);

  const mainBout = BOUTS[0];

  return (
    <section id="fight-card" className="py-24 bg-[#08080A] relative overflow-hidden">
      {/* Background Combat Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Swords className="w-3.5 h-3.5" />
            <span>SANCTIONED CHAMPIONSHIP BOUTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            THE OFFICIAL <span className="crimson-gradient-text">FIGHT CARD</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            Certified world title unification bouts, intercontinental championships, and number-one contender eliminators sanctioned by the World Boxing Council.
          </p>
        </div>

        {/* FEATURED MAIN EVENT SPOTLIGHT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 glass-panel rounded-3xl border border-red-500/40 overflow-hidden shadow-2xl relative"
        >
          {/* Top banner tag */}
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-white text-xs font-bold tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-300" />
              WORLD HEAVYWEIGHT UNIFICATION • 12 ROUNDS
            </span>
            <span className="bg-black/50 px-2.5 py-0.5 rounded text-yellow-300 font-bold">
              PAY-PER-VIEW EXCLUSIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Fighter 1: Singh */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left bg-gradient-to-r from-red-950/20 to-transparent">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-600/20 text-red-400 text-xs font-bold uppercase mb-3 border border-red-500/30">
                <span>{mainBout.fighter1.flag}</span>
                <span>{mainBout.fighter1.country} • DEFENDING CHAMPION</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {mainBout.fighter1.name}
              </h3>
              <p className="text-red-500 font-bold text-lg tracking-wide uppercase mt-0.5">
                "{mainBout.fighter1.alias}"
              </p>

              <div className="mt-4 space-y-1.5 text-sm text-zinc-200">
                <p className="font-semibold text-white">Record: <span className="text-yellow-400 font-mono font-bold">{mainBout.fighter1.record}</span></p>
                <p className="text-zinc-300">KO Ratio: <span className="text-red-400 font-bold">{mainBout.fighter1.koRate}</span></p>
                <p className="text-zinc-300">Stance: <span className="text-white font-medium">{mainBout.fighter1.stance}</span> • Reach: <span className="text-white font-medium">{mainBout.fighter1.reach}</span></p>
                <p className="text-xs text-amber-300 font-semibold pt-1">{mainBout.fighter1.title}</p>
              </div>

              <div className="mt-4 px-3 py-1.5 rounded-lg bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-300">
                Fight Odds: <span className="text-green-400 font-bold">{mainBout.fighter1.odds}</span>
              </div>
            </div>

            {/* Center Matchup Artwork & VS Glow */}
            <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-4">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-zinc-700/60 group">
                <img
                  src={mainBout.posterImage}
                  alt="Singh vs Sharma Championship Fight"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-xs font-bold tracking-wider text-yellow-400 uppercase bg-black/80 px-3 py-1 rounded-full border border-yellow-500/40">
                    OCTOBER 26 • LIONS ARENA, MUMBAI
                  </span>
                </div>
              </div>

              {/* VS Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center border-4 border-[#070709] shadow-neon-red">
                  <span className="text-xl font-bold text-white tracking-wider">VS</span>
                </div>
              </div>
            </div>

            {/* Fighter 2: Sharma */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col items-center lg:items-end text-center lg:text-right bg-gradient-to-l from-red-950/20 to-transparent">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-yellow-400 text-xs font-bold uppercase mb-3 border border-yellow-500/30">
                <span>{mainBout.fighter2.flag}</span>
                <span>{mainBout.fighter2.country} • UNIFIED CHALLENGER</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {mainBout.fighter2.name}
              </h3>
              <p className="text-yellow-400 font-bold text-lg tracking-wide uppercase mt-0.5">
                "{mainBout.fighter2.alias}"
              </p>

              <div className="mt-4 space-y-1.5 text-sm text-zinc-200">
                <p className="font-semibold text-white">Record: <span className="text-yellow-400 font-mono font-bold">{mainBout.fighter2.record}</span></p>
                <p className="text-zinc-300">KO Ratio: <span className="text-red-400 font-bold">{mainBout.fighter2.koRate}</span></p>
                <p className="text-zinc-300">Stance: <span className="text-white font-medium">{mainBout.fighter2.stance}</span> • Reach: <span className="text-white font-medium">{mainBout.fighter2.reach}</span></p>
                <p className="text-xs text-amber-300 font-semibold pt-1">{mainBout.fighter2.title}</p>
              </div>

              <div className="mt-4 px-3 py-1.5 rounded-lg bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-300">
                Fight Odds: <span className="text-yellow-400 font-bold">{mainBout.fighter2.odds}</span>
              </div>
            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="bg-[#0B0C10] p-4 sm:p-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-zinc-300 font-heading uppercase tracking-wide">
                Certified 12-Round Championship Bout • WBC India & IBC Sanctioned Rules
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  soundEngine.playPunchImpact();
                  if (onSelectFightersForTape) {
                    onSelectFightersForTape('singh', 'sharma');
                  }
                  const el = document.getElementById('tale-of-tape');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider font-heading flex items-center justify-center gap-1.5 transition-all"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Full Tale of Tape</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playPunchImpact();
                  onOpenTickets();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-black uppercase tracking-wider font-heading flex items-center justify-center gap-2 shadow-neon-red hover:scale-105 transition-all"
              >
                <Ticket className="w-4 h-4" />
                <span>Get Ringside / PPV Ticket</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* CATEGORY SELECTOR & OTHER BOUTS LIST */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="text-2xl font-black font-display text-white uppercase tracking-wide">
            FULL TOURNAMENT BOUT CARD
          </h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase font-heading tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-neon-red'
                    : 'bg-boxing-card border border-boxing-border text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBouts.map((bout, idx) => (
            <motion.div
              key={bout.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl border border-boxing-border hover:border-red-500/40 transition-all p-5 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs mb-4 pb-3 border-b border-zinc-800">
                  <span className="font-heading font-black text-red-500 uppercase tracking-wider">
                    {bout.category}
                  </span>
                  <span className="text-zinc-400 font-semibold uppercase">
                    {bout.rounds} • {bout.weightClass}
                  </span>
                </div>

                {/* Matchup Layout */}
                <div className="space-y-4">
                  {/* Red Corner */}
                  <div className="flex items-center gap-3">
                    <img
                      src={bout.fighter1.image}
                      alt={bout.fighter1.name}
                      className="w-14 h-14 rounded-xl object-cover border border-red-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black font-heading text-white uppercase">
                          {bout.fighter1.name}
                        </span>
                        <span>{bout.fighter1.flag}</span>
                      </div>
                      <p className="text-xs text-red-400 font-semibold font-heading">
                        "{bout.fighter1.alias}"
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {bout.fighter1.record}
                      </p>
                    </div>
                  </div>

                  {/* VS divider */}
                  <div className="relative text-center my-1">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-zinc-800"></div>
                    </div>
                    <span className="relative bg-[#13141A] px-2 text-[10px] font-black text-zinc-400 font-heading">
                      VS
                    </span>
                  </div>

                  {/* Blue Corner */}
                  <div className="flex items-center gap-3">
                    <img
                      src={bout.fighter2.image}
                      alt={bout.fighter2.name}
                      className="w-14 h-14 rounded-xl object-cover border border-blue-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black font-heading text-white uppercase">
                          {bout.fighter2.name}
                        </span>
                        <span>{bout.fighter2.flag}</span>
                      </div>
                      <p className="text-xs text-yellow-400 font-semibold font-heading">
                        "{bout.fighter2.alias}"
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {bout.fighter2.record}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {bout.previewText}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    soundEngine.playPunchImpact();
                    onOpenTickets();
                  }}
                  className="w-full py-2.5 rounded-lg bg-red-600/20 hover:bg-red-600 border border-red-500/40 hover:border-red-600 text-red-400 hover:text-white text-xs font-black uppercase tracking-wider font-heading transition-all flex items-center justify-center gap-1.5"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Reserve Seat / Stream</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
