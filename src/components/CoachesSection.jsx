import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Shield, Star, Calendar } from 'lucide-react';
import { COACHES } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const CoachesSection = ({ onOpenBooking }) => {
  return (
    <section id="coaches" className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HALL OF CHAMPIONS & MASTERS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            LEARN FROM <span className="crimson-gradient-text">WORLD CHAMPIONS</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            Our corner team consists of former unified titleholders, Olympic coaches, and cutmen who have spent decades perfecting the sweet science under championship lights.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Image & Title Header */}
              <div>
                <div className="relative h-72 overflow-hidden bg-black">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141A] via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-400 text-xs font-mono font-bold">
                    {coach.record}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-heading font-black text-red-500 uppercase tracking-widest block mb-1">
                    {coach.credentials}
                  </span>
                  <h3 className="text-2xl font-black font-display text-white uppercase">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-heading font-semibold uppercase mt-0.5 mb-4">
                    {coach.role}
                  </p>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    {coach.bio}
                  </p>

                  <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 mb-4">
                    <span className="text-[10px] font-heading uppercase text-zinc-500 block mb-1">SPECIALIZATION</span>
                    <span className="text-xs font-heading font-bold text-yellow-400">
                      {coach.specialty}
                    </span>
                  </div>

                  <blockquote className="border-l-2 border-red-600 pl-3 italic text-xs text-zinc-400">
                    "{coach.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    soundEngine.playPunchImpact();
                    onOpenBooking(`Private Mitt Work with ${coach.name}`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-red-600 text-zinc-200 hover:text-white text-xs font-black uppercase tracking-wider font-heading transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 1-on-1 Mitt Session</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
