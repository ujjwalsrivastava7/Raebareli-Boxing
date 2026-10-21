import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Flame, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const ComboTrainer = () => {
  const combos = [
    {
      id: 1,
      name: "The Basic One-Two",
      sequence: ["1 (Jab)", "2 (Cross)"],
      tempo: "Snap & Retract",
      difficulty: "Beginner"
    },
    {
      id: 2,
      name: "The Iron Hook Finisher",
      sequence: ["1 (Jab)", "2 (Cross)", "3 (Lead Hook)", "Slip Right", "2 (Power Cross)"],
      tempo: "Rhythm Break & Angle",
      difficulty: "Advanced"
    },
    {
      id: 3,
      name: "The Body Snatcher",
      sequence: ["1 (Double Jab)", "Slip Left", "5 (Left Hook Body)", "3 (Left Hook Head)"],
      tempo: "Explosive Level Change",
      difficulty: "Pro Contender"
    },
    {
      id: 4,
      name: "Philly Counter Trap",
      sequence: ["Shoulder Roll", "2 (Straight Right)", "3 (Check Hook)", "Pivot 45°"],
      tempo: "Counter Timing",
      difficulty: "Master Class"
    }
  ];

  const [activeComboIndex, setActiveComboIndex] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [punchCount, setPunchCount] = useState(142);
  const [isRoundActive, setIsRoundActive] = useState(false);
  const [roundSeconds, setRoundSeconds] = useState(180); // 3-minute round

  const currentCombo = combos[activeComboIndex];

  // Round Timer
  useEffect(() => {
    let timer = null;
    if (isRoundActive && roundSeconds > 0) {
      timer = setInterval(() => {
        setRoundSeconds(prev => prev - 1);
      }, 1000);
    } else if (roundSeconds === 0 && isRoundActive) {
      soundEngine.playBell(3);
      setIsRoundActive(false);
    }
    return () => clearInterval(timer);
  }, [isRoundActive, roundSeconds]);

  const toggleRound = () => {
    if (!isRoundActive) {
      soundEngine.playBell(1);
      setIsRoundActive(true);
    } else {
      setIsRoundActive(false);
    }
  };

  const resetRound = () => {
    setIsRoundActive(false);
    setRoundSeconds(180);
    soundEngine.playBell(1);
  };

  const handlePunchClick = (stepIndex) => {
    setActiveStep(stepIndex);
    setPunchCount(prev => prev + 1);
    soundEngine.playPunchImpact();
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section className="py-20 bg-[#0B0C10] border-t border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-500 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>INTERACTIVE ACADEMY DRILL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            VIRTUAL PUNCH <span className="crimson-gradient-text">COMBO COACH</span>
          </h2>
          <p className="mt-2 text-zinc-400 font-body text-sm sm:text-base">
            Test your combination cadence, drill authentic championship sequences, and run standard 3-minute professional sparring rounds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Round Clock & Stats */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 border border-zinc-800 text-center flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-black tracking-widest text-zinc-400 uppercase">
                OFFICIAL 3-MIN ROUND TIMER
              </span>
              <div className="text-6xl font-black font-display text-white tracking-wider my-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {formatTimer(roundSeconds)}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-heading uppercase text-red-400 font-bold">
                <span className={`w-2 h-2 rounded-full ${isRoundActive ? 'bg-green-500 animate-ping' : 'bg-zinc-600'}`}></span>
                {isRoundActive ? 'ROUND IN PROGRESS' : 'ROUND ON HOLD'}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={toggleRound}
                className={`flex-1 py-3 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isRoundActive
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-neon-red'
                }`}
              >
                {isRoundActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isRoundActive ? 'Pause Round' : 'Start Round'}</span>
              </button>

              <button
                onClick={resetRound}
                className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all"
                title="Reset Round Clock"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="text-2xl font-black font-display text-yellow-400">{punchCount}</span>
                <span className="block text-[11px] font-heading uppercase text-zinc-400">Total Landed</span>
              </div>
              <div>
                <span className="text-2xl font-black font-display text-white">4 / 4</span>
                <span className="block text-[11px] font-heading uppercase text-zinc-400">Pro Drills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Combo Sequence Board */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800">
            
            {/* Combo Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {combos.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveComboIndex(i);
                    setActiveStep(0);
                    soundEngine.playPunchImpact();
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase font-heading tracking-wider transition-all ${
                    activeComboIndex === i
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Current Combo Headline */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black font-display text-white uppercase">
                  {currentCombo.name}
                </h3>
                <p className="text-xs text-red-400 font-heading font-semibold uppercase mt-0.5">
                  Focus: {currentCombo.tempo} • Level: {currentCombo.difficulty}
                </p>
              </div>
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                Click moves to strike 🥊
              </span>
            </div>

            {/* Interactive Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {currentCombo.sequence.map((strike, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePunchClick(idx)}
                    className={`cursor-pointer p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-between min-h-[110px] ${
                      isSelected
                        ? 'bg-red-600 border-red-400 text-white shadow-neon-red ring-2 ring-red-400/50'
                        : 'bg-[#13141A] border-zinc-800 text-zinc-300 hover:border-zinc-600'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400">
                      STEP {idx + 1}
                    </span>
                    <span className="text-lg font-black font-display uppercase tracking-wide">
                      {strike}
                    </span>
                    <span className="text-[10px] font-heading uppercase text-zinc-400 font-semibold">
                      {isSelected ? '✓ HIT' : 'Tap to Hit'}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Pro Coaching Tip */}
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <p className="text-xs text-zinc-300 font-heading leading-relaxed">
                <span className="text-white font-bold">Coach Ray's Cue:</span> "Always pivot on the ball of your back foot on the cross, and keep the non-punching hand glued to your chin to avoid counter hooks."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
