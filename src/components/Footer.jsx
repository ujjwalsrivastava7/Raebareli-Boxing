import React, { useState } from 'react';
import { Shield, Trophy, MapPin, Phone, Mail, Send, Check, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const Footer = ({ onOpenTickets, onOpenRegister, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      soundEngine.playBell(1);
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-900 text-zinc-400 font-heading relative overflow-hidden">
      {/* Top Banner Ticker */}
      <div className="bg-red-600/10 border-b border-red-500/20 py-2.5 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee text-xs font-black uppercase tracking-widest text-red-400">
          <span>🥊 OFFICIAL SANCTIONED WBC INDIA & IBC TOURNAMENT VENUE</span>
          <span>•</span>
          <span>₹2,50,00,000 (₹2.5 CRORE) CHAMPIONSHIP PURSE</span>
          <span>•</span>
          <span>PRO ATHLETE WEIGH-INS LIVE ON OCTOBER 25</span>
          <span>•</span>
          <span>OLYMPIC BOXING & NATIONAL GAMES GOLDEN GLOVES TRAINING</span>
          <span>•</span>
          <span>CHAMPIONSHIP RINGSIDE PASSES SELLING FAST</span>
          <span>•</span>
          <span>DISCIPLINE • VALOR • SUPREMACY</span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0F1118] flex items-center justify-center border border-red-500/50 shadow-neon-red overflow-hidden p-0.5">
                <img
                  src="/images/ironclad_logo.png"
                  alt="Ironclad India Boxing Crest"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black font-display text-white tracking-wider">
                  IRONCLAD
                </span>
                <span className="text-2xl font-black font-display text-red-600 tracking-wider">
                  INDIA
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              India's premier combat sports complex and championship academy. Home of national champions, Olympic medalists, and the official Bharat Boxing Grand Prix.
            </p>

            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Plot 14, BKC Sports Complex, Bandra Kurla Complex, Mumbai, MH 400051</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500 shrink-0" />
                <span>+91 98200 47660 / 022-2659 4766 (Ringside Box Office)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>tickets@ironcladarena.in • contact@ironcladarena.in</span>
              </div>
            </div>
          </div>

          {/* Arena Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-white tracking-widest">
              CHAMPIONSHIPS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#fight-card" className="hover:text-red-400 transition-colors">Fight Card & Bouts</a>
              </li>
              <li>
                <a href="#bracket" className="hover:text-red-400 transition-colors">Grand Prix Bracket</a>
              </li>
              <li>
                <a href="#tale-of-tape" className="hover:text-red-400 transition-colors">Tale of the Tape</a>
              </li>
              <li>
                <button onClick={onOpenTickets} className="text-yellow-400 hover:underline">
                  Buy Ringside Tickets
                </button>
              </li>
              <li>
                <button onClick={onOpenRegister} className="text-red-400 hover:underline">
                  Fighter Sanctioning Entry
                </button>
              </li>
            </ul>
          </div>

          {/* Academy Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-white tracking-widest">
              FIGHT ACADEMY
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#programs" className="hover:text-red-400 transition-colors">Pro Contender Camp</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-red-400 transition-colors">Heavy Bag Knockout</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-red-400 transition-colors">Weekly Timetable</a>
              </li>
              <li>
                <a href="#facility" className="hover:text-red-400 transition-colors">Arena & Recovery Suite</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-red-400 transition-colors">Combat Memberships</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Presale & MERN readiness */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-white tracking-widest">
              BOUT PRESALE ACCESS
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get exclusive first access to ringside seating, weigh-in passes, and pay-per-view early bird codes.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter fighter email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#111216] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-neon-red"
                >
                  <Send className="w-3 h-3" />
                  <span>Get Presale Code</span>
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-green-950/40 border border-green-500/30 text-green-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Presale VIP pass dispatched to your inbox!</span>
              </div>
            )}

            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                SYSTEM ARCHITECTURE
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                MERN Ready: React • Express • Node • MongoDB API Endpoints
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Ironclad Combat Arena & Boxing Academy. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Sanctioned by Indian Boxing Council (IBC) & WBC India</span>
            <span>•</span>
            <span>Terms & Fighter Waivers</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
