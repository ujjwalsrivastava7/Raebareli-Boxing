import React, { useState, useEffect } from 'react';
import { Clock, Radio, MapPin, Tv, ShieldCheck, Zap } from 'lucide-react';
import { TOURNAMENT_INFO } from '../data/boxingData';

export const TournamentCountdown = ({ onOpenTickets }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 7,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const target = new Date(TOURNAMENT_INFO.countdownTarget).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 -mt-8 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="glass-panel-red rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-500/30 overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Event Quick Details */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-red-500 uppercase font-heading">
              <Radio className="w-4 h-4 animate-pulse text-red-500" />
              <span>OFFICIAL EVENT COUNTDOWN</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-wide text-white uppercase">
              {TOURNAMENT_INFO.name}
            </h3>
            <p className="text-sm text-zinc-300 font-heading tracking-wide">
              {TOURNAMENT_INFO.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                {TOURNAMENT_INFO.venue}
              </span>
              <span className="flex items-center gap-1.5">
                <Tv className="w-3.5 h-3.5 text-red-400" />
                {TOURNAMENT_INFO.broadcast}
              </span>
            </div>
          </div>

          {/* Real-time Countdown Clocks */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center">
              <div className="bg-[#0B0C10]/80 border border-zinc-800 rounded-xl p-3 sm:p-4 shadow-inner">
                <span className="text-2xl sm:text-4xl font-black font-display text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="block text-[10px] sm:text-xs uppercase font-heading tracking-widest text-zinc-400 mt-1">
                  Days
                </span>
              </div>
              <div className="bg-[#0B0C10]/80 border border-zinc-800 rounded-xl p-3 sm:p-4 shadow-inner">
                <span className="text-2xl sm:text-4xl font-black font-display text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[10px] sm:text-xs uppercase font-heading tracking-widest text-zinc-400 mt-1">
                  Hours
                </span>
              </div>
              <div className="bg-[#0B0C10]/80 border border-zinc-800 rounded-xl p-3 sm:p-4 shadow-inner">
                <span className="text-2xl sm:text-4xl font-black font-display text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[10px] sm:text-xs uppercase font-heading tracking-widest text-zinc-400 mt-1">
                  Mins
                </span>
              </div>
              <div className="bg-[#0B0C10]/80 border border-red-500/40 rounded-xl p-3 sm:p-4 shadow-inner bg-red-950/20">
                <span className="text-2xl sm:text-4xl font-black font-display text-red-400 animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[10px] sm:text-xs uppercase font-heading tracking-widest text-red-300 mt-1">
                  Secs
                </span>
              </div>
            </div>
          </div>

          {/* Quick Lock Seat Button */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <button
              onClick={onOpenTickets}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-black text-sm uppercase tracking-wider font-heading shadow-neon-gold transition-all transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Lock Seat</span>
            </button>
            <span className="text-[10px] text-center text-zinc-400 mt-1.5 tracking-wider uppercase font-semibold">
              Only 42 Ringside Left
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
