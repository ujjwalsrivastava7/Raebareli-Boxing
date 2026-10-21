import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, Check, ShieldCheck, CreditCard, Sparkles, Trophy, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TICKET_TIERS, TOURNAMENT_INFO } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const TicketModal = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState(TICKET_TIERS[3]); // Default VIP Ringside
  const [ticketCount, setTicketCount] = useState(2);
  const [formData, setFormData] = useState({
    name: 'Alex Sterling',
    email: 'alex.sterling@fightfan.com',
    paymentMethod: 'card'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const totalPrice = (selectedTier.price * ticketCount).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playBell(2);
    setIsSuccess(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E50914', '#FFB800', '#FFFFFF']
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
          className="relative w-full max-w-2xl bg-[#0D0E12] border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
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
              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-black font-heading text-red-500 uppercase tracking-widest mb-1">
                  <Ticket className="w-4 h-4" />
                  <span>OFFICIAL TOURNAMENT BOX OFFICE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  {TOURNAMENT_INFO.name}
                </h3>
                <p className="text-xs text-zinc-400 font-heading">
                  Date: {TOURNAMENT_INFO.date} • Venue: {TOURNAMENT_INFO.venue}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Tier Selection */}
                <div>
                  <label className="block text-xs uppercase font-heading font-black text-zinc-300 mb-2 tracking-wider">
                    Select Seating Tier / Broadcast Pass
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TICKET_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => {
                          soundEngine.playPunchImpact();
                          setSelectedTier(tier);
                        }}
                        className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                          selectedTier.id === tier.id
                            ? 'bg-red-950/40 border-red-500 text-white shadow-neon-red'
                            : 'bg-[#13141A] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black font-heading uppercase text-white">
                            {tier.name}
                          </span>
                          <span className="text-sm font-black font-mono text-yellow-400">
                            ₹{tier.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[10px] text-zinc-400 font-heading block mt-1">
                          {tier.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ticket Quantity & Summary */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-zinc-800">
                  <div>
                    <span className="text-xs font-heading font-bold text-zinc-300 block uppercase">
                      Ticket Quantity
                    </span>
                    <span className="text-[11px] text-zinc-500">Max 8 tickets per booking</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-white font-bold hover:bg-zinc-700"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold font-mono text-white min-w-[20px] text-center">
                      {ticketCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTicketCount(Math.min(8, ticketCount + 1))}
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-white font-bold hover:bg-zinc-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Purchaser Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-heading font-bold text-zinc-400 mb-1">
                      Delivery Email (Digital Pass & QR)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#13141A] border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Payment Methods Info */}
                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-heading uppercase font-semibold text-zinc-300">Supported Payments:</span>
                  <span className="text-yellow-400 font-mono font-bold">UPI (GPay / PhonePe / Paytm) • RuPay • Cards • NetBanking</span>
                </div>

                {/* Total & Checkout button */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-heading uppercase text-zinc-500 block">Total Due</span>
                    <span className="text-3xl font-black font-display text-white">
                      ₹{totalPrice.toLocaleString('en-IN')} <span className="text-xs text-zinc-400 font-normal">INR (Incl. GST)</span>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-black uppercase tracking-wider font-heading flex items-center gap-2 shadow-neon-red transition-all hover:scale-105"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Proceed to Pay</span>
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Order Success View */
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 mb-4 animate-bounce">
                <Check className="w-8 h-8" />
              </div>

              <span className="text-xs font-black font-heading text-emerald-400 uppercase tracking-widest">
                BOUT TICKET CONFIRMED
              </span>
              <h3 className="text-3xl font-black font-display text-white uppercase mt-1">
                YOU'RE HEADING RINGSIDE!
              </h3>
              <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                Official passes and digital broadcast access keys have been dispatched to <span className="text-yellow-400 font-mono">{formData.email}</span>.
              </p>

              {/* Digital Fight Pass Simulation */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#171821] to-[#0E0F14] border border-red-500/30 text-left max-w-md mx-auto relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] font-black font-heading text-red-500 uppercase tracking-widest">
                      BHARAT BOXING PASS #8849-GP
                    </span>
                    <h4 className="text-lg font-black font-display text-white uppercase">
                      {selectedTier.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/30">
                    {ticketCount} x PASS
                  </span>
                </div>

                <div className="space-y-1 text-xs text-zinc-300 font-heading">
                  <p>Guest: <span className="text-white font-bold">{formData.name}</span></p>
                  <p>Event: <span className="text-white">Singh vs Sharma (Heavyweight Unification - Lions Arena, Mumbai)</span></p>
                  <p>Gate: <span className="text-yellow-400 font-bold">VIP South Entrance • Row 1 Ringside</span></p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 font-mono">STATUS: VERIFIED & ACTIVE</span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>WBC India & IBC Sanctioned</span>
                  </div>
                </div>
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
