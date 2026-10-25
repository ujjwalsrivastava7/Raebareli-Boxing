import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, Trophy, Award, CheckCircle, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

export const FighterRegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    ringName: '',
    division: 'Heavyweight (200+ lbs)',
    experience: 'Amateur (3+ fights)',
    record: '12-2 (8 KOs)',
    gym: '',
    email: '',
    phone: '',
    agreedToMedical: false,
  });

  const [registeredFighter, setRegisteredFighter] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playBell(3);
    const fighterId = 'FGT-' + Math.floor(100000 + Math.random() * 900000);
    setRegisteredFighter({ ...formData, licenseId: fighterId });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#FFB800', '#E50914', '#3B82F6']
    });
  };

  const handleClose = () => {
    setRegisteredFighter(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[#0D0E12] border border-yellow-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!registeredFighter ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-black font-heading text-yellow-400 uppercase tracking-widest mb-1">
                  <Trophy className="w-4 h-4" />
                  <span>SANCTIONED ATHLETE REGISTRATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  ENTER THE IRONCLAD GRAND PRIX
                </h3>
                <p className="text-xs text-zinc-400 font-heading">
                  Submit your fighter credentials for commission matchmaking and tournament bracket seeding.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Legal Fighter Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vijender Rajput"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Ring Nickname (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. The Haryana Hurricane"
                      value={formData.ringName}
                      onChange={(e) => setFormData({ ...formData, ringName: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Weight Division *
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    >
                      <option>Flyweight (112 lbs / 51 kg)</option>
                      <option>Featherweight (126 lbs / 57 kg)</option>
                      <option>Lightweight (135 lbs / 61 kg)</option>
                      <option>Welterweight (147 lbs / 66.7 kg)</option>
                      <option>Middleweight (160 lbs / 72.5 kg)</option>
                      <option>Light Heavyweight (175 lbs / 79.4 kg)</option>
                      <option>Cruiserweight (200 lbs / 90.7 kg)</option>
                      <option>Heavyweight (200+ lbs / 91+ kg)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Combat Classification *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    >
                      <option>Amateur (1 - 5 Bouts)</option>
                      <option>Amateur (6 - 15 Bouts)</option>
                      <option>National Games / Open Class</option>
                      <option>Licensed Professional Debut</option>
                      <option>Active Professional Contender</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Current Bout Record (W-L-D)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 8-1-0 (5 KOs)"
                      value={formData.record}
                      onChange={(e) => setFormData({ ...formData, record: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Gym / Fight Club Affiliation
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bhiwani Boxing Club / Mumbai BC"
                      value={formData.gym}
                      onChange={(e) => setFormData({ ...formData, gym: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="fighter@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Contact Phone (India +91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-zinc-400 font-heading">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToMedical}
                      onChange={(e) => setFormData({ ...formData, agreedToMedical: e.target.checked })}
                      className="mt-0.5 rounded border-zinc-700 text-yellow-500 focus:ring-yellow-400"
                    />
                    <span>
                      I certify that I am medically cleared to spar and compete, and consent to pre-fight weigh-in and anti-doping verification.
                    </span>
                  </label>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold uppercase font-heading"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black text-xs font-black uppercase tracking-wider font-heading flex items-center gap-2 shadow-neon-gold"
                  >
                    <UserPlus className="w-4 h-4 fill-black" />
                    <span>Submit Tournament Application</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Digital Fighter Card Generated */
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/40 mb-4 animate-bounce">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-black font-heading text-yellow-400 uppercase tracking-widest">
                APPLICATION ACCEPTED FOR SANCTIONING
              </span>
              <h3 className="text-3xl font-black font-display text-white uppercase mt-1">
                WELCOME TO THE SQUARED CIRCLE
              </h3>
              <p className="text-sm text-zinc-300 mt-1 max-w-md mx-auto">
                Official Commission ID has been minted. The tournament matchmakers will contact you with weigh-in timetable.
              </p>

              {/* Digital Fighter Card */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#1B1D28] via-[#12131A] to-[#0A0B0E] border-2 border-yellow-500/50 text-left max-w-md mx-auto shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-zinc-700/80 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0F1118] border border-yellow-500/50 shadow-neon-gold flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                      <img src="/images/ironclad_logo.png" alt="Ironclad Crest" className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-wider block">
                        BHARAT BOXING ATHLETE LICENSE
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        {registeredFighter.licenseId}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-green-400 bg-green-950/40 px-2 py-0.5 rounded border border-green-500/30">
                    APPROVED
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-300 font-heading">
                  <p className="text-lg font-black font-display text-white uppercase tracking-wide">
                    {registeredFighter.name} {registeredFighter.ringName && `"${registeredFighter.ringName}"`}
                  </p>
                  <p>Division: <span className="text-yellow-400 font-bold">{registeredFighter.division}</span></p>
                  <p>Class: <span className="text-white font-bold">{registeredFighter.experience}</span></p>
                  <p>Fight Record: <span className="text-red-400 font-mono font-bold">{registeredFighter.record}</span></p>
                  <p>Club: <span className="text-zinc-400">{registeredFighter.gym || 'Independent Athlete'}</span></p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>INDIAN BOXING COUNCIL & WBC INDIA</span>
                  <span className="text-yellow-400">READY TO WEIGH IN</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-black uppercase font-heading tracking-wider"
                >
                  Close & View Fight Card
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
