import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame, Trophy, Zap, Shield, Sparkles } from 'lucide-react';
import { PRICING_TIERS } from '../data/boxingData';
import { soundEngine } from '../utils/audio';

export const PricingSection = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-24 bg-[#070709] relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase font-heading tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>FIGHT PASSES & MEMBERSHIPS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
            CHOOSE YOUR <span className="gold-gradient-text">FIGHT CONTRACT</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-body text-base sm:text-lg">
            No initiation fees. No hidden lock-ins. Pure grit, unlimited access to elite coaching, world-class equipment, and exclusive tournament benefits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                tier.popular
                  ? 'glass-panel-red border-2 border-red-500 shadow-2xl scale-105 z-20'
                  : 'glass-panel border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase font-heading tracking-widest shadow-neon-red flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>MOST POPULAR COMBAT PASS</span>
                </div>
              )}

              <div>
                <span className="text-xs font-heading font-black text-red-500 uppercase tracking-widest block">
                  {tier.id === 'drop-in' ? 'FLEXIBLE ENTRY' : tier.id === 'champion-vip' ? 'PRO CORNER' : 'FULL ACADEMY'}
                </span>
                <h3 className="text-2xl font-black font-display text-white uppercase mt-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 mb-6">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-zinc-800">
                  <span className="text-5xl font-black font-display text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs uppercase text-zinc-400 font-heading font-semibold">
                    {tier.period}
                  </span>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-3 mb-8">
                  {tier.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-heading">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? 'text-red-500' : 'text-yellow-400'}`} />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  soundEngine.playBell(1);
                  onOpenBooking(`Membership: ${tier.name}`);
                }}
                className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider font-heading transition-all shadow-md ${
                  tier.popular
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-neon-red'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
