import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Flame, 
  ChevronRight, 
  Shield, 
  Zap, 
  Sparkles, 
  Bell, 
  Ticket, 
  QrCode, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  Swords,
  Timer,
  Play,
  Pause,
  FastForward,
  Gauge
} from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const Hero = ({ onOpenTickets, onOpenBooking, onOpenRegister }) => {
  const [passType, setPassType] = useState('fight'); // 'fight' | 'trial'
  const [isRinging, setIsRinging] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  
  // Video dynamic speed & playback control state
  const [speedMode, setSpeedMode] = useState('rhythm'); // 'rhythm' | '0.5x' | '1.0x' | '2.0x'
  const [currentSpeed, setCurrentSpeed] = useState(0.5);
  const [currentSpeedLabel, setCurrentSpeedLabel] = useState('SLOW-MO');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBursting, setIsBursting] = useState(false);

  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Dynamic Slow-Mo & Fast Combination Rhythm Engine
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fixed speeds
    if (speedMode !== 'rhythm') {
      const fixedSpeed = speedMode === '0.5x' ? 0.5 : speedMode === '2.0x' ? 2.0 : 1.0;
      video.playbackRate = fixedSpeed;
      setCurrentSpeed(fixedSpeed);
      setCurrentSpeedLabel(speedMode === '0.5x' ? 'SLOW-MO' : speedMode === '2.0x' ? 'FAST BLITZ' : 'NORMAL');
      return;
    }

    // Dynamic Combat Rhythm Sequence: [speed, durationMs, label]
    const combatSequence = [
      { speed: 0.5, duration: 3200, label: 'CINEMATIC SLOW-MO' },
      { speed: 2.0, duration: 1500, label: 'EXPLOSIVE BLITZ' },
      { speed: 0.4, duration: 2500, label: 'KNOCKOUT SLOW-MO' },
      { speed: 1.7, duration: 1600, label: 'RAPID COMBAT' }
    ];

    let stepIndex = 0;
    let timerId = null;

    const runCombatStep = () => {
      if (!videoRef.current) return;
      const step = combatSequence[stepIndex];
      try {
        videoRef.current.playbackRate = step.speed;
        setCurrentSpeed(step.speed);
        setCurrentSpeedLabel(step.label);
      } catch (err) {
        console.warn('Video playbackRate error:', err);
      }
      stepIndex = (stepIndex + 1) % combatSequence.length;
      timerId = setTimeout(runCombatStep, step.duration);
    };

    runCombatStep();

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [speedMode]);

  // Instant Punch Acceleration Burst
  const triggerPunchBurst = () => {
    soundEngine.playPunchImpact();
    setIsBursting(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.4;
      setCurrentSpeed(2.4);
      setCurrentSpeedLabel('💥 PUNCH SURGE');
      setTimeout(() => {
        setIsBursting(false);
        if (videoRef.current && speedMode !== 'rhythm') {
          const revert = speedMode === '0.5x' ? 0.5 : speedMode === '2.0x' ? 2.0 : 1.0;
          videoRef.current.playbackRate = revert;
          setCurrentSpeed(revert);
          setCurrentSpeedLabel(speedMode);
        }
      }, 1200);
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const handleRingBell = () => {
    setIsRinging(true);
    soundEngine.playBell(2);
    setTimeout(() => setIsRinging(false), 800);
  };

  const handleSwitchPass = (type) => {
    soundEngine.playPunchImpact();
    setPassType(type);
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070709]">
      
      {/* ========================================================= */}
      {/* DYNAMIC COMBAT VIDEO BACKGROUND WITH CINEMATIC GRADING    */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Boxing Video Background */}
        <video
          ref={videoRef}
          src="/videos/boxing_bg.mp4"
          poster="/images/cinematic_boxing_hero.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter contrast-125 saturate-110 brightness-75 scale-105 transition-all duration-700"
        />

        {/* Cinematic Vignettes & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/65 to-[#070709]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/95 via-[#070709]/60 to-[#070709]/85"></div>

        {/* Ambient Boxing Ring Glow Beacons */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[400px] bg-red-600/20 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-red-800/20 blur-[110px] rounded-full pointer-events-none"></div>

        {/* Ring Ropes & Carbon Grid Overlay */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent blur-[1px]"></div>
        <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent blur-[1px]"></div>
        <div className="absolute top-[43%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent blur-[1px]"></div>
        <div className="absolute inset-0 bg-carbon-mesh opacity-20 pointer-events-none"></div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING VIDEO SPEED CONTROLLER HUD                       */}
      {/* ========================================================= */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-wrap items-center gap-2 bg-[#0E1017]/85 backdrop-blur-md border border-zinc-700/80 p-2 rounded-2xl shadow-2xl">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Dynamic Speed Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-950/60 border border-red-500/40 text-[11px] font-black uppercase tracking-wider text-red-300">
          <span className={`w-2 h-2 rounded-full ${isBursting ? 'bg-yellow-400 animate-ping' : 'bg-red-500 animate-pulse'}`}></span>
          <span className="text-yellow-400 font-mono">{currentSpeed.toFixed(1)}x</span>
          <span className="hidden sm:inline text-zinc-300">{currentSpeedLabel}</span>
        </div>

        {/* Speed Mode Selectors */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
          <button
            onClick={() => setSpeedMode('rhythm')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
              speedMode === 'rhythm'
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-neon-red'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Rhythm (Slow & Fast)
          </button>

          <button
            onClick={() => setSpeedMode('0.5x')}
            className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
              speedMode === '0.5x' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            0.5x
          </button>

          <button
            onClick={() => setSpeedMode('2.0x')}
            className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
              speedMode === '2.0x' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            2.0x
          </button>
        </div>

        {/* Fast Punch Surge Acceleration Trigger */}
        <button
          onClick={triggerPunchBurst}
          className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            isBursting
              ? 'bg-yellow-500 text-black scale-105 shadow-neon-gold'
              : 'bg-red-600 hover:bg-red-500 text-white shadow-neon-red'
          }`}
          title="Click to trigger high-speed punch acceleration burst"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span className="hidden sm:inline">Punch Blitz</span>
        </button>

      </div>

      {/* ========================================================= */}
      {/* MAIN HERO CONTENT CONTAINER                               */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Punchy Hero Copy & Direct Conversion Hooks   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Live Event Badge with Sound Trigger */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div 
                onClick={handleRingBell}
                className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/50 backdrop-blur-md cursor-pointer hover:border-red-400 hover:bg-red-900/70 transition-all shadow-neon-red"
                title="Click to ring the arena bell"
              >
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-xs font-black tracking-widest text-red-300 uppercase font-heading">
                  BHARAT GRAND PRIX 2026
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-yellow-400 font-bold hidden sm:inline">
                  ₹2.5 CR TITLE PURSE
                </span>
                <div className={`p-1 rounded-full bg-red-800/80 text-yellow-300 transition-transform ${isRinging ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}>
                  <Bell className="w-3 h-3" />
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider backdrop-blur-md">
                <Shield className="w-3 h-3 text-red-500" />
                WBC INDIA SANCTIONED
              </div>
            </motion.div>

            {/* Main Punchy Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]"
            >
              STEP INTO <span className="crimson-gradient-text drop-shadow-[0_0_25px_rgba(229,9,20,0.5)]">THE FIRE.</span>
              <br />
              BECOME <span className="gold-gradient-text drop-shadow-[0_0_25px_rgba(255,184,0,0.4)]">UNDISPUTED.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-zinc-200 max-w-2xl font-normal leading-relaxed drop-shadow-md"
            >
              India's premier combat boxing colosseum and elite training academy at BKC, Mumbai. 
              Train alongside national champions or secure your verified ringside VIP pass for the 
              historic World Heavyweight Unification bout.
            </motion.p>

            {/* High-Impact Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: Ticket Pass */}
              <button
                id="hero-tickets-btn"
                onClick={() => {
                  soundEngine.playPunchImpact();
                  onOpenTickets();
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-3 shadow-neon-red hover:shadow-red-500/60 transition-all hover:-translate-y-0.5"
              >
                <Ticket className="w-5 h-5 text-yellow-300" />
                <span>Claim Ringside & PPV Pass</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Free Sparring Trial */}
              <button
                id="hero-trial-btn"
                onClick={() => {
                  soundEngine.playPunchImpact();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#12141C]/90 backdrop-blur-md hover:bg-[#1B1E28] border border-zinc-700 hover:border-red-500/60 text-white font-bold text-sm sm:text-base tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 group shadow-xl"
              >
                <Flame className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>Book Free Sparring Trial</span>
              </button>

              {/* Tournament Registration Link */}
              <button
                id="hero-fighter-entry-btn"
                onClick={() => {
                  soundEngine.playPunchImpact();
                  onOpenRegister();
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 tracking-wider uppercase px-2 py-1 transition-colors ml-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Fighter Tournament Entry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white font-display">14</span>
                <span className="text-xs uppercase text-zinc-300 font-medium tracking-wide">National Champs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-red-500 font-display">98.2%</span>
                <span className="text-xs uppercase text-zinc-300 font-medium tracking-wide">Pro Bout KO Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-yellow-400 font-display">₹2.5 Cr</span>
                <span className="text-xs uppercase text-zinc-300 font-medium tracking-wide">Grand Prix Purse</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white font-display">WBC/IBC</span>
                <span className="text-xs uppercase text-zinc-300 font-medium tracking-wide">Unified Title</span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive 3D VIP Fight Pass / Ticket Stub */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Pass Type Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#10121A]/90 backdrop-blur-md border border-zinc-800 rounded-2xl mb-5 shadow-inner">
              <button
                onClick={() => handleSwitchPass('fight')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  passType === 'fight'
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Ringside Fight Pass</span>
              </button>

              <button
                onClick={() => handleSwitchPass('trial')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  passType === 'trial'
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-yellow-400" />
                <span>Athlete Trial Pass</span>
              </button>
            </div>

            {/* 3D Ticket Wrapper with Tilt Interaction */}
            <div
              className="relative w-full max-w-[420px] select-none cursor-pointer"
              style={{ perspective: 1200 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (passType === 'fight') onOpenTickets();
                else onOpenBooking();
              }}
            >
              <motion.div
                ref={cardRef}
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative w-full rounded-3xl bg-gradient-to-b from-[#181B26]/95 to-[#0E1017]/95 backdrop-blur-lg border border-zinc-700/80 shadow-2xl overflow-hidden group hover:border-red-500/70"
              >
                
                {/* Dynamic Holographic Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30"
                  style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 215, 0, ${glare.opacity}) 0%, rgba(255, 42, 59, ${glare.opacity * 0.7}) 30%, transparent 70%)`,
                  }}
                />

                {/* Left & Right Authentic Ticket Cutout Notches */}
                <div className="absolute top-[68%] -left-3.5 w-7 h-7 bg-[#070709] rounded-full border border-zinc-700/80 z-20"></div>
                <div className="absolute top-[68%] -right-3.5 w-7 h-7 bg-[#070709] rounded-full border border-zinc-700/80 z-20"></div>

                <AnimatePresence mode="wait">
                  {passType === 'fight' ? (
                    /* ============================================== */
                    /* PASS 1: GRAND PRIX RINGSIDE VIP TICKET         */
                    /* ============================================== */
                    <motion.div
                      key="fight-pass"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 relative z-10"
                    >
                      {/* Top Header Strip */}
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#0F1118] border border-red-500/50 shadow-neon-red flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                            <img src="/images/ironclad_logo.png" alt="Ironclad Logo" className="w-full h-full object-cover rounded-md" />
                          </div>
                          <div>
                            <div className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold">OFFICIAL CREDENTIAL</div>
                            <div className="text-xs font-black text-white uppercase tracking-wider font-heading">IRONCLAD ARENA MUMBAI</div>
                          </div>
                        </div>

                        <div className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-[10px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1 shadow-neon-gold">
                          <Sparkles className="w-2.5 h-2.5" />
                          VIP RINGSIDE
                        </div>
                      </div>

                      {/* Bout Preview & Matchup */}
                      <div className="bg-[#12141D]/90 rounded-2xl p-4 border border-zinc-800/80 relative overflow-hidden mb-4">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="text-[10px] font-bold text-red-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                          <Swords className="w-3 h-3" />
                          WORLD HEAVYWEIGHT UNIFICATION
                        </div>
                        
                        <div className="text-lg font-black text-white font-heading uppercase tracking-tight">
                          SINGH <span className="text-red-500">VS</span> SHARMA
                        </div>
                        <div className="text-xs text-zinc-400 font-medium">
                          12 Rounds • Undisputed WBC India Belt
                        </div>

                        {/* Match Details Grid */}
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs pt-3 border-t border-zinc-800/80">
                          <div className="flex items-center gap-1.5 text-zinc-300">
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span>OCT 26, 2026</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-zinc-300">
                            <MapPin className="w-3.5 h-3.5 text-red-400" />
                            <span>Lions Arena, BKC</span>
                          </div>
                        </div>
                      </div>

                      {/* Ticket Seat Matrix */}
                      <div className="grid grid-cols-3 gap-2 text-center bg-[#0C0E14] p-3 rounded-xl border border-zinc-800 mb-5">
                        <div>
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">GATE</div>
                          <div className="text-sm font-black text-white">VIP-02</div>
                        </div>
                        <div className="border-x border-zinc-800">
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">ROW</div>
                          <div className="text-sm font-black text-red-400">RINGSIDE A</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">SEAT</div>
                          <div className="text-sm font-black text-yellow-400">#08</div>
                        </div>
                      </div>

                      {/* Perforated Divider */}
                      <div className="border-t-2 border-dashed border-zinc-700/60 my-5 relative"></div>

                      {/* Bottom Stub: Barcode & Fast Verification */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                            <QrCode className="w-full h-full text-black" />
                          </div>
                          <div className="text-left">
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">PASS #IND-GP-8821</div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              VERIFIED ENTRY
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] uppercase text-zinc-400 font-medium">ADMIT ONE</div>
                          <div className="text-base font-black text-white font-heading">₹4,999</div>
                        </div>
                      </div>

                      {/* Interactive Tap CTA Hint */}
                      <div className="mt-4 pt-3 text-center border-t border-zinc-800/80">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 group-hover:text-red-300 transition-colors uppercase tracking-wider">
                          <span>Click pass to select seats</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                    </motion.div>
                  ) : (
                    /* ============================================== */
                    /* PASS 2: ATHLETE PRO SPARRING TRIAL PASS        */
                    /* ============================================== */
                    <motion.div
                      key="trial-pass"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 relative z-10"
                    >
                      {/* Top Header Strip */}
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#0F1118] border border-amber-500/50 shadow-neon-gold flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                            <img src="/images/ironclad_logo.png" alt="Ironclad Logo" className="w-full h-full object-cover rounded-md" />
                          </div>
                          <div>
                            <div className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold">ACADEMY INVITATION</div>
                            <div className="text-xs font-black text-white uppercase tracking-wider font-heading">IRONCLAD BOXING BKC</div>
                          </div>
                        </div>

                        <div className="px-2.5 py-1 rounded-md bg-red-600/20 border border-red-500/40 text-[10px] font-black text-red-400 uppercase tracking-wider flex items-center gap-1 shadow-neon-red">
                          <Flame className="w-2.5 h-2.5 text-red-500" />
                          100% FREE TRIAL
                        </div>
                      </div>

                      {/* Trial Program Details */}
                      <div className="bg-[#12141D]/90 rounded-2xl p-4 border border-zinc-800/80 relative overflow-hidden mb-4">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="text-[10px] font-bold text-yellow-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          1-ON-1 FIGHTER EVALUATION
                        </div>
                        
                        <div className="text-lg font-black text-white font-heading uppercase tracking-tight">
                          PRO SPARRING INTRO
                        </div>
                        <div className="text-xs text-zinc-400 font-medium">
                          Coach Ram (Olympic Elite Trainer) • Pad Work & Form Check
                        </div>

                        {/* Session Inclusions */}
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs pt-3 border-t border-zinc-800/80">
                          <div className="flex items-center gap-1.5 text-zinc-300">
                            <Timer className="w-3.5 h-3.5 text-red-400" />
                            <span>45 Min Session</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-zinc-300">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                            <span>Wraps & Gloves Incl.</span>
                          </div>
                        </div>
                      </div>

                      {/* Academy Features Matrix */}
                      <div className="grid grid-cols-3 gap-2 text-center bg-[#0C0E14] p-3 rounded-xl border border-zinc-800 mb-5">
                        <div>
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">LEVEL</div>
                          <div className="text-xs font-black text-white">ALL SKILLS</div>
                        </div>
                        <div className="border-x border-zinc-800">
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">RING</div>
                          <div className="text-xs font-black text-amber-400">CANVAS A</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase text-zinc-500 font-bold">COACH</div>
                          <div className="text-xs font-black text-emerald-400">ASSIGNED</div>
                        </div>
                      </div>

                      {/* Perforated Divider */}
                      <div className="border-t-2 border-dashed border-zinc-700/60 my-5 relative"></div>

                      {/* Bottom Stub: Barcode & Claim */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                            <QrCode className="w-full h-full text-black" />
                          </div>
                          <div className="text-left">
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">TRIAL-BKC-PRO</div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              GUARANTEED SLOT
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] uppercase text-zinc-400 font-medium">INVESTMENT</div>
                          <div className="text-base font-black text-emerald-400 font-heading">₹0 (FREE)</div>
                        </div>
                      </div>

                      {/* Interactive Tap CTA Hint */}
                      <div className="mt-4 pt-3 text-center border-t border-zinc-800/80">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors uppercase tracking-wider">
                          <span>Click pass to book your slot</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
              
              {/* Subtle 3D Depth Card Shadow */}
              <div className="absolute -bottom-4 inset-x-8 h-8 bg-red-600/20 blur-xl -z-10 rounded-full"></div>
            </div>

            {/* Hint message under the 3D pass */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400 font-medium drop-shadow">
              <Sparkles className="w-3 h-3 text-yellow-500" />
              <span>Hover & tilt card in 3D • Click to instantly reserve</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
