import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronRight, Award, CheckCircle2, Flame, Calendar, MapPin, IndianRupee, Users, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const InteractiveBracket = ({ onOpenTickets }) => {
  const [activeTab, setActiveTab] = useState('bracket'); // 'bracket' | 'final' | 'rules'
  const [selectedRound, setSelectedRound] = useState('all'); // 'all' | 'qf' | 'sf' | 'final'

  // Tournament data simplified for instant readability
  const quarterFinals = [
    {
      id: 'q1',
      matchNumber: 'Match 1',
      winner: { name: 'Gurpreet Singh', country: 'IND (Punjab) 🇮🇳', result: 'Won by KO (Round 4)' },
      loser: { name: 'Farhan Ali', country: 'IND (Delhi) 🇮🇳', result: 'Eliminated' },
    },
    {
      id: 'q2',
      matchNumber: 'Match 2',
      winner: { name: 'Dev Malik', country: 'IND (Haryana) 🇮🇳', result: 'Won by Decision' },
      loser: { name: 'Suraj Patil', country: 'IND (Maharashtra) 🇮🇳', result: 'Eliminated' },
    },
    {
      id: 'q3',
      matchNumber: 'Match 3',
      winner: { name: 'Vikram Sharma', country: 'IND (Bengal) 🇮🇳', result: 'Won by TKO (Round 2)' },
      loser: { name: 'Harpreet Sandhu', country: 'IND (Punjab) 🇮🇳', result: 'Eliminated' },
    },
    {
      id: 'q4',
      matchNumber: 'Match 4',
      winner: { name: 'Rohit Deshmukh', country: 'IND (Mumbai) 🇮🇳', result: 'Won by Decision' },
      loser: { name: 'Raghav Menon', country: 'IND (Kerala) 🇮🇳', result: 'Eliminated' },
    },
  ];

  const semiFinals = [
    {
      id: 's1',
      matchNumber: 'Semi-Final 1',
      winner: { name: 'Gurpreet Singh', country: 'IND (Punjab) 🇮🇳', result: 'Won by KO (Round 7)' },
      loser: { name: 'Dev Malik', country: 'IND (Haryana) 🇮🇳', result: 'Eliminated' },
    },
    {
      id: 's2',
      matchNumber: 'Semi-Final 2',
      winner: { name: 'Vikram Sharma', country: 'IND (Bengal) 🇮🇳', result: 'Won by KO (Round 5)' },
      loser: { name: 'Rohit Deshmukh', country: 'IND (Mumbai) 🇮🇳', result: 'Eliminated' },
    },
  ];

  const championshipFinal = {
    title: 'Bharat Boxing Grand Prix Championship Final',
    date: 'Saturday, October 26, 2026',
    venue: 'Lions Combat Arena, BKC Mumbai',
    prize: '₹2,50,00,000 (₹2.5 Crore) Purse + WBC India Belt',
    rounds: '12 Championship Rounds (3 Mins Each)',
    fighter1: {
      name: 'Gurpreet Singh',
      alias: 'The Punjab Titan',
      record: '28-0-0 (24 KOs)',
      country: 'IND 🇮🇳',
      status: 'Finalist • Undefeated WBC India Champion',
    },
    fighter2: {
      name: 'Vikram Sharma',
      alias: 'The Bengal Tiger',
      record: '26-0-0 (23 KOs)',
      country: 'IND 🇮🇳',
      status: 'Finalist • Undefeated IBC Unified Champion',
    },
  };

  return (
    <section id="bracket" className="py-20 bg-[#0B0C10] relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>8-Man Championship Tournament</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tournament Breakdown
          </h2>
          <p className="mt-3 text-zinc-300 text-base leading-relaxed">
            Follow the simple knockout journey: 8 elite fighters entered, 6 were eliminated, and only 2 remain for the World Championship.
          </p>
        </div>

        {/* Tournament Stages Progress Bar (Easy to understand at a glance!) */}
        <div className="bg-[#141620] border border-zinc-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            
            {/* Stage 1 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div className="text-left">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wide block">
                  Stage 1: Completed
                </span>
                <span className="text-sm font-bold text-white block">
                  Quarter-Finals (8 Fighters)
                </span>
                <span className="text-xs text-zinc-400">4 Knockouts & Decisions</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div className="text-left">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wide block">
                  Stage 2: Completed
                </span>
                <span className="text-sm font-bold text-white block">
                  Semi-Finals (Final 4)
                </span>
                <span className="text-xs text-zinc-400">Singh & Sharma Advance</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-red-950/40 to-yellow-950/30 border border-red-500/50 shadow-neon-red">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 animate-pulse">
                🥊
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wide block">
                  Stage 3: Upcoming Main Event
                </span>
                <span className="text-sm font-bold text-white block">
                  Championship Final (Oct 26)
                </span>
                <span className="text-xs text-red-300 font-medium">Singh vs Sharma for ₹2.5 Cr Title Belt</span>
              </div>
            </div>

          </div>
        </div>

        {/* View Switcher Tabs: Simple & Clean */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => {
              soundEngine.playPunchImpact();
              setActiveTab('bracket');
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'bracket'
                ? 'bg-red-600 text-white shadow-neon-red'
                : 'bg-[#141620] border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
            }`}
          >
            🏆 Tournament Bracket View
          </button>

          <button
            onClick={() => {
              soundEngine.playPunchImpact();
              setActiveTab('final');
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'final'
                ? 'bg-yellow-500 text-black font-extrabold shadow-neon-gold'
                : 'bg-[#141620] border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
            }`}
          >
            🥊 The Title Bout Details
          </button>

          <button
            onClick={() => {
              soundEngine.playPunchImpact();
              setActiveTab('rules');
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'rules'
                ? 'bg-red-600 text-white shadow-neon-red'
                : 'bg-[#141620] border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
            }`}
          >
            📋 Rules & Prize Money
          </button>
        </div>

        {/* TAB 1: BRACKET VIEW (Clear, Large, Simple to Read) */}
        {activeTab === 'bracket' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Filter buttons to focus on specific round */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold">
              <span className="text-zinc-400 mr-2">Filter View:</span>
              <button
                onClick={() => setSelectedRound('all')}
                className={`px-3 py-1.5 rounded-lg ${selectedRound === 'all' ? 'bg-zinc-700 text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                Show All Rounds
              </button>
              <button
                onClick={() => setSelectedRound('qf')}
                className={`px-3 py-1.5 rounded-lg ${selectedRound === 'qf' ? 'bg-zinc-700 text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                Round 1 (Quarter-Finals)
              </button>
              <button
                onClick={() => setSelectedRound('sf')}
                className={`px-3 py-1.5 rounded-lg ${selectedRound === 'sf' ? 'bg-zinc-700 text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                Round 2 (Semi-Finals)
              </button>
              <button
                onClick={() => setSelectedRound('final')}
                className={`px-3 py-1.5 rounded-lg ${selectedRound === 'final' ? 'bg-zinc-700 text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                The Final
              </button>
            </div>

            {/* ROUND 1: QUARTERFINALS */}
            {(selectedRound === 'all' || selectedRound === 'qf') && (
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h3 className="text-xl font-bold text-white">Round 1: Quarter-Final Results</h3>
                  <span className="text-xs text-zinc-400 ml-auto font-medium">4 Matches • Completed</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quarterFinals.map((match) => (
                    <div
                      key={match.id}
                      className="bg-[#141620] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 font-semibold">
                        <span className="text-red-400 font-bold">{match.matchNumber}</span>
                        <span className="bg-emerald-950/60 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/30">
                          {match.winner.result}
                        </span>
                      </div>

                      {/* Winner Fighter */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 mb-2">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <span className="font-bold text-white text-base block">{match.winner.name}</span>
                            <span className="text-xs text-zinc-400">{match.winner.country}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-900/50 px-2 py-0.5 rounded">
                          ADVANCED
                        </span>
                      </div>

                      {/* Defeated Fighter */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                        <div className="flex items-center gap-2.5">
                          <span className="w-4 h-4 text-center text-xs text-zinc-500 font-bold shrink-0">✕</span>
                          <div>
                            <span className="font-medium text-zinc-400 text-sm block">{match.loser.name}</span>
                            <span className="text-xs text-zinc-500">{match.loser.country}</span>
                          </div>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium">
                          ELIMINATED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ROUND 2: SEMIFINALS */}
            {(selectedRound === 'all' || selectedRound === 'sf') && (
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <h3 className="text-xl font-bold text-white">Round 2: Semi-Final Results</h3>
                  <span className="text-xs text-zinc-400 ml-auto font-medium">2 Matches • Final Four</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {semiFinals.map((match) => (
                    <div
                      key={match.id}
                      className="bg-[#141620] border border-yellow-500/30 rounded-2xl p-5 shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 font-semibold">
                        <span className="text-yellow-400 font-bold">{match.matchNumber}</span>
                        <span className="bg-yellow-950/60 text-yellow-400 px-2.5 py-0.5 rounded border border-yellow-500/30 font-bold">
                          {match.winner.result}
                        </span>
                      </div>

                      {/* Winner */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-950/30 border border-yellow-500/40 mb-2">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                          <div>
                            <span className="font-bold text-white text-base block">{match.winner.name}</span>
                            <span className="text-xs text-zinc-300">{match.winner.country}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-yellow-400 bg-yellow-900/60 px-2.5 py-1 rounded">
                          TO THE FINALS ➔
                        </span>
                      </div>

                      {/* Loser */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                        <div className="flex items-center gap-2.5">
                          <span className="w-4 h-4 text-center text-xs text-zinc-500 font-bold shrink-0">✕</span>
                          <div>
                            <span className="font-medium text-zinc-400 text-sm block">{match.loser.name}</span>
                            <span className="text-xs text-zinc-500">{match.loser.country}</span>
                          </div>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium">
                          ELIMINATED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GRAND FINAL SHOWDOWN CARD */}
            {(selectedRound === 'all' || selectedRound === 'final') && (
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A1315] via-[#141620] to-[#1A1A12] border-2 border-yellow-500/60 shadow-2xl relative overflow-hidden">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-xs font-bold uppercase tracking-wider mb-2">
                    <Trophy className="w-3.5 h-3.5" />
                    Championship Grand Final
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Singh vs Sharma
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    October 26, 2026 • 12 Rounds • Winner Takes ₹1.5 Crore & WBC India Title
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 rounded-2xl bg-black/60 border border-red-500/40 text-center">
                    <span className="text-xs text-red-400 font-bold block mb-1">IND 🇮🇳 • Defending Champion</span>
                    <h4 className="text-xl font-bold text-white">Gurpreet Singh</h4>
                    <p className="text-xs text-zinc-300 font-mono mt-1 font-semibold">28-0 (24 KOs)</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-bold">
                      Semi-Final KO in Round 7
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-yellow-500/40 text-center">
                    <span className="text-xs text-yellow-400 font-bold block mb-1">IND 🇮🇳 • IBC Unified Challenger</span>
                    <h4 className="text-xl font-bold text-white">Vikram Sharma</h4>
                    <p className="text-xs text-zinc-300 font-mono mt-1 font-semibold">26-0 (23 KOs)</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-500/30 text-yellow-300 text-xs font-bold">
                      Semi-Final KO in Round 5
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      soundEngine.playBell(2);
                      onOpenTickets();
                    }}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-neon-red hover:scale-105"
                  >
                    Lock In Ringside Seats / PPV Pass
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: THE TITLE BOUT DETAILS */}
        {activeTab === 'final' && (
          <div className="bg-[#141620] border border-zinc-800 rounded-3xl p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center pb-6 border-b border-zinc-800">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  MAIN EVENT SPOTLIGHT
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {championshipFinal.title}
                </h3>
                <p className="text-sm text-yellow-400 font-semibold mt-1">
                  {championshipFinal.prize}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-400 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-400" />
                    Fight Date:
                  </span>
                  <span className="font-bold text-white">{championshipFinal.date}</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-400 font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    Venue:
                  </span>
                  <span className="font-bold text-white">{championshipFinal.venue}</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-400 font-medium flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    Format:
                  </span>
                  <span className="font-bold text-white">{championshipFinal.rounds}</span>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={onOpenTickets}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-neon-red"
                >
                  Buy Bout Tickets Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RULES & PRIZE MONEY */}
        {activeTab === 'rules' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-[#141620] border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold mb-4">
                <IndianRupee className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">₹2,50,00,000 (₹2.5 Crore) Prize Pool</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The tournament champion earns ₹1,50,00,000 (₹1.5 Crore) plus the official WBC India belt. The runner-up takes ₹50,00,000 (₹50 Lakhs), and semi-finalists take ₹25,00,000 each.
              </p>
            </div>

            <div className="bg-[#141620] border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Single Elimination Format</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Lose once and you are out. Every fight matters. Fighters must make weight at 200+ lbs (91+ kg) the morning before each contest.
              </p>
            </div>

            <div className="bg-[#141620] border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sanctioned Commission</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Sanctioned under WBC India & Indian Boxing Council (IBC) unified rules. 3-judge scoring system with instant video replay for knockdowns.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
