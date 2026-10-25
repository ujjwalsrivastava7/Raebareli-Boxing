import React, { useState, useEffect } from 'react';
import { Shield, Bell, Menu, X, Flame, Trophy, Calendar, Ticket, UserPlus } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const Navbar = ({ onOpenTickets, onOpenRegister, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRingBell = () => {
    setIsRinging(true);
    soundEngine.playBell(2);
    setTimeout(() => setIsRinging(false), 900);
  };

  const navLinks = [
    { name: 'Fight Cards', href: '#fight-card' },
    { name: 'Tournament Bracket', href: '#bracket' },
    { name: 'Tale of Tape', href: '#tale-of-tape' },
    { name: 'Training Programs', href: '#programs' },
    { name: 'Timetable', href: '#schedule' },
    { name: 'Arena & Gym', href: '#facility' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Memberships', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C10]/90 backdrop-blur-md border-b border-boxing-border shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#0F1118] flex items-center justify-center border border-red-500/50 shadow-neon-red group-hover:scale-105 transition-all overflow-hidden p-0.5">
                <img
                  src="/images/ironclad_logo.png"
                  alt="Ironclad India Boxing Crest"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3 pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  IRONCLAD
                </span>
                <span className="text-2xl font-extrabold tracking-tight text-red-600">
                  INDIA
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-zinc-400 uppercase -mt-0.5 font-medium">
                Combat Academy & Bharat Grand Prix
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-normal text-zinc-300 hover:text-white hover:text-red-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Sound Bell */}
          <div className="hidden md:flex items-center gap-3">
            {/* Authentic Ring Bell Button */}
            <button
              id="ring-bell-btn"
              onClick={handleRingBell}
              title="Ring the Official Boxing Bell!"
              className={`p-2.5 rounded-lg border border-red-500/30 bg-red-950/20 text-red-400 hover:text-white hover:bg-red-600/30 transition-all flex items-center gap-1.5 text-xs font-bold uppercase font-heading ${
                isRinging ? 'animate-bounce text-yellow-400 border-yellow-500' : ''
              }`}
            >
              <Bell className={`w-4 h-4 ${isRinging ? 'rotate-12 fill-yellow-400' : ''}`} />
              <span className="hidden lg:inline">Ring Bell</span>
            </button>

            {/* Fighter Registration Button */}
            <button
              id="fighter-reg-nav-btn"
              onClick={onOpenRegister}
              className="px-3.5 py-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 transition-all shadow-sm"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Fighter Entry</span>
            </button>

            {/* Tickets CTA */}
            <button
              id="buy-tickets-nav-btn"
              onClick={onOpenTickets}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 shadow-neon-red hover:shadow-red-500/50 transition-all hover:scale-105"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Fight Tickets</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={handleRingBell}
              className="p-2 rounded-lg border border-red-500/30 text-red-400"
              title="Ring Bell"
            >
              <Bell className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-boxing-card border border-boxing-border text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0E12] border-b border-boxing-border px-4 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-boxing-card text-sm font-semibold text-zinc-300 hover:text-red-400 hover:bg-red-950/20 font-heading tracking-wide transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-sm font-bold uppercase font-heading flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Tournament Fighter Entry
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-bold uppercase font-heading flex items-center justify-center gap-2 shadow-neon-red"
            >
              <Ticket className="w-4 h-4" />
              Buy Fight Tickets & PPV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-zinc-800 text-zinc-200 text-sm font-bold uppercase font-heading flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Free Sparring Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
