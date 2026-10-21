import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Play, ChevronRight, Shield, Zap, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const Hero = ({ onOpenTickets, onOpenBooking, onOpenRegister }) => {
  const triggerPunch = () => {
    soundEngine.playPunchImpact();
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070709]">
      {/* Background Image with Cinematic Gradients & Light Bleed */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_boxer.jpg"
          alt="Champion Boxer in the Ring"
          className="w-full h-full object-cover object-top opacity-35 scale-105 filter contrast-125 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]/90"></div>
        
        {/* Ambient Red Glow Beacons */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-amber-500/10 blur-[90px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center pt-8">
        
        {/* Top Live Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/40 backdrop-blur-md mb-8 cursor-pointer hover:border-red-400 transition-all shadow-glow-subtle"
          onClick={() => {
            triggerPunch();
            onOpenTickets();
          }}
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="text-xs font-black tracking-widest text-red-400 uppercase font-heading">
            NEXT UP: BHARAT BOXING GRAND PRIX 2026
          </span>
          <span className="text-xs text-yellow-400 font-bold hidden sm:inline">• ₹2.5 CRORE TITLE PURSE</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        </motion.div>

        {/* Main Clean Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] uppercase max-w-4xl mx-auto"
        >
          FORGE YOUR <span className="crimson-gradient-text">LEGACY.</span>
          <br />
          RULE THE <span className="gold-gradient-text">CANVAS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          India's premier combat boxing temple located at BKC, Mumbai. From grassroots fundamentals and knockout conditioning to Olympic-grade championship fight camps and sanctioned national title bouts.
        </motion.p>

        {/* High-Impact CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Main Action: Tickets */}
          <button
            id="hero-tickets-btn"
            onClick={() => {
              triggerPunch();
              onOpenTickets();
            }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2.5 shadow-neon-red transition-all hover:-translate-y-0.5"
          >
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span>Grand Prix Fight Tickets & PPV</span>
          </button>

          {/* Secondary Action: Book Free Trial */}
          <button
            id="hero-trial-btn"
            onClick={() => {
              triggerPunch();
              onOpenBooking();
            }}
            className="px-6 py-3.5 rounded-xl bg-[#141620] hover:bg-[#1B1E28] border border-zinc-700 text-white font-bold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2.5 transition-all hover:-translate-y-0.5"
          >
            <Flame className="w-4 h-4 text-red-500" />
            <span>Book Free 1-on-1 Sparring Trial</span>
          </button>

          {/* Tertiary: Fighter Registration */}
          <button
            id="hero-fighter-entry-btn"
            onClick={() => {
              triggerPunch();
              onOpenRegister();
            }}
            className="px-5 py-3.5 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold text-sm tracking-wide uppercase flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Fighter Tournament Entry</span>
          </button>
        </motion.div>

        {/* Live Arena Metrics Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-[#12141C] p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              14
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-medium mt-1">
              National & World Champs
            </div>
          </div>

          <div className="bg-[#12141C] p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-red-500">
              98.2%
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-medium mt-1">
              Pro Bout KO Ratio
            </div>
          </div>

          <div className="bg-[#12141C] p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
              ₹2.5 Cr
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-medium mt-1">
              Grand Prix Prize Pool
            </div>
          </div>

          <div className="bg-[#12141C] p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              36+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-medium mt-1">
              Weekly Pro Sessions
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
