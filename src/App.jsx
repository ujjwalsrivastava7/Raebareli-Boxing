import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TournamentCountdown } from './components/TournamentCountdown';
import { FightCardSection } from './components/FightCardSection';
import { InteractiveBracket } from './components/InteractiveBracket';
import { TaleOfTheTape } from './components/TaleOfTheTape';
import { ComboTrainer } from './components/ComboTrainer';
import { TrainingPrograms } from './components/TrainingPrograms';
import { ScheduleSection } from './components/ScheduleSection';
import { FacilitySection } from './components/FacilitySection';
import { CoachesSection } from './components/CoachesSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';
import { FighterRegistrationModal } from './components/FighterRegistrationModal';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialProgram, setBookingInitialProgram] = useState('');
  
  // State for Tale of Tape sync
  const [tapeFighter1, setTapeFighter1] = useState('singh');
  const [tapeFighter2, setTapeFighter2] = useState('sharma');

  const handleOpenBooking = (programTitle = '') => {
    setBookingInitialProgram(programTitle);
    setBookingModalOpen(true);
  };

  const handleSelectFightersForTape = (f1, f2) => {
    setTapeFighter1(f1);
    setTapeFighter2(f2);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 flex flex-col font-body selection:bg-red-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenTickets={() => setTicketModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenBooking={() => handleOpenBooking('Free Trial Sparring Session')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTickets={() => setTicketModalOpen(true)}
          onOpenBooking={() => handleOpenBooking('1-on-1 Free Fighter Evaluation')}
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Real-time Tournament Countdown & Live Ticker */}
        <TournamentCountdown
          onOpenTickets={() => setTicketModalOpen(true)}
        />

        {/* Official Sanctioned Fight Card (Singh vs Sharma) */}
        <FightCardSection
          onOpenTickets={() => setTicketModalOpen(true)}
          onSelectFightersForTape={handleSelectFightersForTape}
        />

        {/* 8-Man Grand Prix Interactive Tournament Bracket */}
        <InteractiveBracket
          onOpenTickets={() => setTicketModalOpen(true)}
        />

        {/* Tale of the Tape Biometric & AI Fight Outcome Predictor */}
        <TaleOfTheTape
          selectedFighter1Id={tapeFighter1}
          selectedFighter2Id={tapeFighter2}
        />

        {/* Interactive Virtual Combo Coach & 3-Min Round Timer */}
        <ComboTrainer />

        {/* Boxing Academy Training Programs */}
        <TrainingPrograms
          onOpenBooking={handleOpenBooking}
        />

        {/* Weekly Live Class Timetable */}
        <ScheduleSection
          onOpenBooking={handleOpenBooking}
        />

        {/* 22,000 Sq Ft Arena & Equipment Facility Showcase */}
        <FacilitySection
          onOpenBooking={handleOpenBooking}
        />

        {/* World Champion Coaches & Hall of Fame Legends */}
        <CoachesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Combat Contracts & Gym Memberships */}
        <PricingSection
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenTickets={() => setTicketModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenBooking={() => handleOpenBooking('General Inquiry')}
      />

      {/* Interactive Global Modals */}
      <TicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />

      <FighterRegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialProgram={bookingInitialProgram}
      />
    </div>
  );
}

export default App;
