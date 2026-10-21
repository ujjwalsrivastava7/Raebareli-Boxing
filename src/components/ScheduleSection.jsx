import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { TIMETABLE } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const ScheduleSection = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const currentSchedule = TIMETABLE.find(t => t.day === selectedDay) || TIMETABLE[0];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <section id="schedule" className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>WEEKLY TIMETABLE & SLOTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            LIVE CLASS <span className="gold-gradient-text">SCHEDULE</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            Choose your battle hour. Small-group formats ensure personalized mitt work, video feedback, and safe sparring supervision.
          </p>
        </div>

        {/* Day Selector Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 max-w-4xl mx-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => {
                soundEngine.playPunchImpact();
                setSelectedDay(day);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase font-heading tracking-wider transition-all whitespace-nowrap ${
                selectedDay === day
                  ? 'bg-red-600 text-white shadow-neon-red scale-105'
                  : 'bg-boxing-card border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-zinc-800 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs uppercase font-mono text-zinc-400 font-semibold">SELECTED ROSTER</span>
              <h3 className="text-2xl font-black font-display text-white uppercase">{selectedDay}'s Sessions</h3>
            </div>
            <span className="text-xs font-heading font-black text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full uppercase">
              {currentSchedule.classes.length} Sessions Scheduled
            </span>
          </div>

          <div className="space-y-4">
            {currentSchedule.classes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#0E0F14] hover:bg-[#15161E] border border-zinc-800 hover:border-red-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-red-500 mx-auto mb-1" />
                    <span className="text-xs font-mono font-bold text-white block">
                      {item.time}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black font-display text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-heading mt-0.5">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        {item.trainer}
                      </span>
                      <span>•</span>
                      <span className={`font-bold ${
                        item.intensity === 'Extreme' ? 'text-red-500' :
                        item.intensity === 'High' ? 'text-amber-500' : 'text-blue-400'
                      }`}>
                        {item.intensity} Intensity
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-500/20">
                    {item.spots} slots left
                  </span>

                  <button
                    onClick={() => {
                      soundEngine.playPunchImpact();
                      onOpenBooking(`${item.name} (${selectedDay} ${item.time})`);
                    }}
                    className="px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600 border border-red-500/40 hover:border-red-600 text-red-400 hover:text-white text-xs font-black uppercase tracking-wider font-heading transition-all flex items-center gap-1.5"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
