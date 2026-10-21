import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Zap, Sparkles, Check } from 'lucide-react';
import { GYM_ZONES } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const FacilitySection = ({ onOpenBooking }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);

  const images = [
    {
      url: '/images/gym_facility.jpg',
      title: 'Main Arena & Training Floor',
      tag: 'CHAMPIONSHIP RING'
    },
    {
      url: '/images/boxing_training.jpg',
      title: 'Precision Mitt Work & Heavy Bag Area',
      tag: 'COACHING ZONE'
    }
  ];

  return (
    <section id="facility" className="py-24 bg-[#070709] relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>THE BATTLEGROUND</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            WORLD-CLASS <span className="crimson-gradient-text">FIGHT ARENA & GYM</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            A 22,000 sq ft cathedral dedicated to the art of pugilism. Built with Olympic-certified ring canvas, acoustic sound design, and sports science recovery suites.
          </p>
        </div>

        {/* Visual Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Large Facility Photo */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="/images/gym_facility.jpg"
              alt="Ironclad Boxing Academy Gym Floor"
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-black font-heading text-red-500 uppercase tracking-widest bg-red-950/80 px-3 py-1 rounded border border-red-500/40">
                MAIN ARENA FLOOR
              </span>
              <h3 className="text-3xl font-black font-display text-white uppercase mt-2">
                "THE IRON GLOVE" PRO COMPETITION RING
              </h3>
              <p className="text-xs text-zinc-300 font-heading mt-1 max-w-lg">
                Equipped with tensioned canvas, shock absorbent underlay, overhead floodlights, and professional ring-side press tables.
              </p>
            </div>
          </div>

          {/* Secondary Action Photo & Highlight Zone */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-xl">
              <img
                src="/images/boxing_training.jpg"
                alt="Boxer Mitt Work with Coach"
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-black font-heading text-yellow-400 uppercase tracking-wider">
                  COACH MITT PLATFORM
                </span>
                <p className="text-sm font-black font-display text-white uppercase">
                  HIGH-VELOCITY FOCUS PUNCH CAGE
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 border border-zinc-800">
              <h4 className="text-lg font-black font-display text-white uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                ARENA SPECIFICATIONS
              </h4>
              <div className="space-y-2 text-xs font-heading text-zinc-300">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Total Square Footage:</span>
                  <span className="text-white font-mono font-bold">22,000 sq ft</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Regulation Bouts Rings:</span>
                  <span className="text-white font-mono font-bold">2 Full-Size Canvas Rings</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Heavy Bags Available:</span>
                  <span className="text-white font-mono font-bold">36 Bags (Leather & Water)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Spectator Arena Seating:</span>
                  <span className="text-yellow-400 font-mono font-bold">1,800 Capacity</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundEngine.playPunchImpact();
                  onOpenBooking("VIP Facility Walkthrough");
                }}
                className="w-full mt-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider font-heading transition-all"
              >
                Book In-Person Facility Tour
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Zone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GYM_ZONES.map((zone, idx) => (
            <motion.div
              key={zone.title}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-black font-heading text-red-500 uppercase tracking-widest block mb-2">
                  {zone.tag}
                </span>
                <h4 className="text-xl font-black font-display text-white uppercase mb-1">
                  {zone.title}
                </h4>
                <p className="text-xs font-bold text-yellow-400/90 font-mono mb-3">
                  {zone.dimensions}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {zone.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-zinc-300 font-heading">
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span>Open 7 Days a Week</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
