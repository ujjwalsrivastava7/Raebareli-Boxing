import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, CheckCircle, ShieldCheck, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

export const BookingModal = ({ isOpen, onClose, initialProgram = '' }) => {
  const [sessionName, setSessionName] = useState(initialProgram || 'Heavy Bag Knockout Power');
  const [date, setDate] = useState('2026-10-02');
  const [timeSlot, setTimeSlot] = useState('06:00 PM');
  const [needGloves, setNeedGloves] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setSessionName(initialProgram);
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playBell(2);
    setIsSuccess(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E50914', '#FFFFFF']
    });
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-[#0D0E12] border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-black font-heading text-red-500 uppercase tracking-widest mb-1">
                  <Flame className="w-4 h-4" />
                  <span>STEP INTO THE GYM</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  RESERVE YOUR COMBAT SESSION
                </h3>
                <p className="text-xs text-zinc-400 font-heading">
                  All first-time attendees receive a complimentary glove and wrap fitting plus coach onboarding.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                    Selected Program / Class
                  </label>
                  <input
                    type="text"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                    className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 font-heading font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option>06:30 AM (Dawn Conditioning)</option>
                      <option>10:00 AM (Morning Heavy Bag)</option>
                      <option>12:00 PM (Lunch Express)</option>
                      <option>04:30 PM (Youth & Rookies)</option>
                      <option>06:00 PM (Pro Contender Camp)</option>
                      <option>07:30 PM (Tactical Defense & Sparring)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-zinc-800">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300 font-heading">
                    <input
                      type="checkbox"
                      checked={needGloves}
                      onChange={(e) => setNeedGloves(e.target.checked)}
                      className="rounded border-zinc-700 text-red-600 focus:ring-red-500"
                    />
                    <span>Complimentary 16oz Glove & Handwrap Rental Required</span>
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
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-black uppercase tracking-wider font-heading shadow-neon-red transition-all"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/40 mb-4 animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-black font-heading text-red-500 uppercase tracking-widest">
                SESSION RESERVED
              </span>
              <h3 className="text-3xl font-black font-display text-white uppercase mt-1">
                SEE YOU ON THE CANVAS
              </h3>
              <p className="text-sm text-zinc-300 mt-2 max-w-sm mx-auto">
                Confirmation voucher for <span className="text-white font-bold">{sessionName}</span> at <span className="text-yellow-400 font-mono">{timeSlot}</span> sent to <span className="text-red-400">{email}</span>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-black/60 border border-zinc-800 text-left text-xs font-heading space-y-1">
                <p className="text-zinc-400">Location: <span className="text-white">Ironclad Combat Arena, BKC Mumbai (Mat Zone B)</span></p>
                <p className="text-zinc-400">Gear: <span className="text-yellow-400">{needGloves ? 'Gloves will be prepared for you at check-in' : 'Bring your personal gloves & wraps'}</span></p>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-black uppercase font-heading tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
