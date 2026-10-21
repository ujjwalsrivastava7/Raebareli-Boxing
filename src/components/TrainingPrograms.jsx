import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, ShieldAlert, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

const iconMap = {
  Flame: Flame,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  Award: Award,
};

export const TrainingPrograms = ({ onOpenBooking }) => {
  return (
    <section id="programs" className="py-24 bg-[#070709] relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>ACADEMY CURRICULUM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            CHAMPIONSHIP <span className="crimson-gradient-text">TRAINING PROGRAMS</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            Built upon Olympic boxing excellence, Indian akhada core endurance, and modern sports science biomechanics. Every camp is calibrated for maximum fight conditioning.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINING_PROGRAMS.map((program, idx) => {
            const Icon = iconMap[program.icon] || Flame;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-8 border border-boxing-border hover:border-red-500/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Top Corner Ribbon / Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center border border-red-500/30 shadow-neon-red group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black font-heading text-red-400 tracking-widest uppercase block">
                        {program.badge}
                      </span>
                      <h3 className="text-2xl font-black font-display text-white uppercase tracking-wide">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-heading font-black px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 uppercase">
                    {program.level}
                  </span>
                </div>

                <p className="text-zinc-300 font-body text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {program.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-heading">
                      <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Footer specs & CTA */}
                <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono block">
                      SCHEDULE & DURATION
                    </span>
                    <span className="text-xs font-heading font-bold text-yellow-400">
                      {program.schedule} ({program.duration})
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      soundEngine.playPunchImpact();
                      onOpenBooking(program.title);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider font-heading flex items-center gap-2 shadow-neon-red transition-all group-hover:translate-x-1"
                  >
                    <span>Reserve Sparring Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
