export const TOURNAMENT_INFO = {
  name: "BHARAT BOXING GRAND PRIX 2026",
  tagline: "UNDISPUTED HEAVYWEIGHT & WELTERWEIGHT UNIFICATION",
  date: "OCTOBER 26, 2026",
  venue: "LIONS COMBAT ARENA, BKC MUMBAI",
  prizePool: "₹2,50,00,000 (₹2.5 CRORE) + WBC INDIA TITLE BELT",
  broadcast: "LIVE ON JIOHOTSTAR, SONY SPORTS & FANCODE",
  countdownTarget: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000).toISOString(),
};

export const BOUTS = [
  {
    id: "bout-main",
    category: "MAIN EVENT",
    title: "UNIFIED HEAVYWEIGHT CHAMPIONSHIP OF INDIA",
    rounds: "12 ROUNDS",
    status: "CONFIRMED",
    weightClass: "Heavyweight (200+ lbs / 91+ kg)",
    fighter1: {
      id: "singh",
      name: "Gurpreet Singh",
      alias: "THE PUNJAB TITAN",
      record: "28-0-0 (24 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/hero_boxer.jpg",
      age: 29,
      height: "6'4\" (193 cm)",
      reach: "80 in (203 cm)",
      stance: "Orthodox",
      koRate: "85.7%",
      weight: "238 lbs (108 kg)",
      title: "WBC India World Heavyweight Champion",
      odds: "1.55 (Match Favorite)"
    },
    fighter2: {
      id: "sharma",
      name: "Vikram Sharma",
      alias: "THE BENGAL TIGER",
      record: "26-0-0 (23 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/boxer_vikram.jpg",
      age: 31,
      height: "6'5\" (196 cm)",
      reach: "82 in (208 cm)",
      stance: "Southpaw",
      koRate: "88.4%",
      weight: "244 lbs (110 kg)",
      title: "Indian Boxing Council (IBC) Unified Champion",
      odds: "2.40 (Challenger)"
    },
    posterImage: "/images/fight_matchup.jpg",
    previewText: "Two undefeated Indian knockout juggernauts collide at Lions Arena Mumbai in the most anticipated heavyweight championship showdown in Indian boxing history for absolute undisputed supremacy."
  },
  {
    id: "bout-co-main",
    category: "CO-MAIN EVENT",
    title: "WOMEN'S NATIONAL WELTERWEIGHT TITLE",
    rounds: "10 ROUNDS",
    status: "CONFIRMED",
    weightClass: "Welterweight (147 lbs / 66.7 kg)",
    fighter1: {
      id: "pooja",
      name: "Pooja Sharma",
      alias: "THE GOLDEN STORM",
      record: "19-1-0 (14 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/female_boxer_pooja.jpg",
      age: 26,
      height: "5'8\" (173 cm)",
      reach: "69 in (175 cm)",
      stance: "Orthodox",
      koRate: "73.6%",
      weight: "146.5 lbs (66.4 kg)",
      title: "Olympic Medalist & WBC Female Asian Champion",
      odds: "1.70 (Favorite)"
    },
    fighter2: {
      id: "simran",
      name: "Simran Kaur",
      alias: "THE LIONESS",
      record: "17-0-0 (11 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/female_boxer_simran.jpg",
      age: 27,
      height: "5'9\" (175 cm)",
      reach: "71 in (180 cm)",
      stance: "Southpaw",
      koRate: "64.7%",
      weight: "147 lbs (66.7 kg)",
      title: "National Champion (Mumbai Boxing Club)",
      odds: "2.15 (Challenger)"
    },
    previewText: "Olympic medalist Pooja Sharma takes on Mumbai's undefeated relentless pressure fighter Simran Kaur in a historic welterweight national unification clash."
  },
  {
    id: "bout-3",
    category: "FEATURED BOUT",
    title: "LIGHT HEAVYWEIGHT CONTENDER ELIMINATOR",
    rounds: "10 ROUNDS",
    status: "CONFIRMED",
    weightClass: "Light Heavyweight (175 lbs / 79.4 kg)",
    fighter1: {
      name: "Aman 'The Blitz' Verma",
      alias: "THE BLITZ",
      record: "15-2-0 (13 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/boxing_training.jpg",
      age: 28,
      height: "6'1\" (185 cm)",
      reach: "76 in (193 cm)",
      stance: "Orthodox",
      koRate: "86.6%",
      weight: "174.5 lbs",
      title: "North India Light Heavyweight Champion",
      odds: "1.85"
    },
    fighter2: {
      name: "Rajesh 'Tusker' Nair",
      alias: "THE TUSKER",
      record: "16-1-1 (12 KOs)",
      country: "IND",
      flag: "🇮🇳",
      image: "/images/boxer_vikram.jpg",
      age: 30,
      height: "6'0\" (183 cm)",
      reach: "74 in (188 cm)",
      stance: "Orthodox",
      koRate: "75.0%",
      weight: "175 lbs",
      title: "South Asian Boxing Federation Champion",
      odds: "1.95"
    },
    previewText: "High-octane national brawl between two devastating Indian knockout punchers seeking the number one contender mandatory slot."
  }
];

export const BRACKET_DATA = {
  quarterFinals: [
    {
      id: "q1",
      fighter1: { name: "Gurpreet Singh", score: "KO Rd 4", winner: true, seed: "1" },
      fighter2: { name: "Farhan Ali", score: "Defeat", winner: false, seed: "8" },
      status: "COMPLETED"
    },
    {
      id: "q2",
      fighter1: { name: "Dev Malik", score: "Split Dec", winner: true, seed: "4" },
      fighter2: { name: "Suraj Patil", score: "Loss", winner: false, seed: "5" },
      status: "COMPLETED"
    },
    {
      id: "q3",
      fighter1: { name: "Vikram Sharma", score: "TKO Rd 2", winner: true, seed: "2" },
      fighter2: { name: "Harpreet Sandhu", score: "Defeat", winner: false, seed: "7" },
      status: "COMPLETED"
    },
    {
      id: "q4",
      fighter1: { name: "Rohit Deshmukh", score: "Unan Dec", winner: true, seed: "3" },
      fighter2: { name: "Raghav Menon", score: "Loss", winner: false, seed: "6" },
      status: "COMPLETED"
    }
  ],
  semiFinals: [
    {
      id: "s1",
      fighter1: { name: "Gurpreet Singh", score: "KO Rd 7", winner: true, seed: "1" },
      fighter2: { name: "Dev Malik", score: "Stoppage", winner: false, seed: "4" },
      status: "COMPLETED"
    },
    {
      id: "s2",
      fighter1: { name: "Vikram Sharma", score: "KO Rd 5", winner: true, seed: "2" },
      fighter2: { name: "Rohit Deshmukh", score: "Defeat", winner: false, seed: "3" },
      status: "COMPLETED"
    }
  ],
  final: {
    id: "f1",
    fighter1: { name: "Gurpreet Singh", seed: "1", title: "Undefeated WBC India Champion" },
    fighter2: { name: "Vikram Sharma", seed: "2", title: "Undefeated Unified IBC Champion" },
    status: "UPCOMING_MAIN_EVENT",
    eventDate: "OCTOBER 26, 2026"
  }
};

export const FIGHTERS_ROSTER = [
  {
    id: "singh",
    name: "Gurpreet Singh",
    alias: "The Punjab Titan",
    division: "Heavyweight",
    record: "28-0-0 (24 KOs)",
    height: "6'4\"",
    reach: "80\"",
    weight: "238 lbs (108 kg)",
    stance: "Orthodox",
    country: "IND",
    flag: "🇮🇳",
    stats: {
      power: 98,
      speed: 86,
      defense: 89,
      stamina: 91,
      ringIQ: 95,
      chin: 94
    },
    image: "/images/hero_boxer.jpg"
  },
  {
    id: "sharma",
    name: "Vikram Sharma",
    alias: "The Bengal Tiger",
    division: "Heavyweight",
    record: "26-0-0 (23 KOs)",
    height: "6'5\"",
    reach: "82\"",
    weight: "244 lbs (110 kg)",
    stance: "Southpaw",
    country: "IND",
    flag: "🇮🇳",
    stats: {
      power: 99,
      speed: 82,
      defense: 87,
      stamina: 93,
      ringIQ: 92,
      chin: 96
    },
    image: "/images/boxer_vikram.jpg"
  },
  {
    id: "pooja",
    name: "Pooja Sharma",
    alias: "The Golden Storm",
    division: "Welterweight",
    record: "19-1-0 (14 KOs)",
    height: "5'8\"",
    reach: "69\"",
    weight: "147 lbs (66.7 kg)",
    stance: "Orthodox",
    country: "IND",
    flag: "🇮🇳",
    stats: {
      power: 88,
      speed: 95,
      defense: 84,
      stamina: 97,
      ringIQ: 90,
      chin: 88
    },
    image: "/images/female_boxer_pooja.jpg"
  },
  {
    id: "simran",
    name: "Simran Kaur",
    alias: "The Lioness",
    division: "Welterweight",
    record: "17-0-0 (11 KOs)",
    height: "5'9\"",
    reach: "71\"",
    weight: "147 lbs (66.7 kg)",
    stance: "Southpaw",
    country: "IND",
    flag: "🇮🇳",
    stats: {
      power: 84,
      speed: 93,
      defense: 94,
      stamina: 92,
      ringIQ: 96,
      chin: 90
    },
    image: "/images/female_boxer_simran.jpg"
  }
];

export const TRAINING_PROGRAMS = [
  {
    id: "pro-camp",
    title: "PRO CONTENDER FIGHT CAMP",
    badge: "ELITE COMBAT",
    level: "Advanced / Pro",
    duration: "90 Mins",
    intensity: "Extreme",
    icon: "Flame",
    color: "from-red-600 to-red-900",
    description: "Rigorous 12-round simulated sparring, dynamic technical defense drills, laser focus mitts, and fight strategy with licensed Indian championship trainers.",
    features: [
      "Full contact supervised ring sparring",
      "Punch velocity & impact analytics",
      "Cutman & corner tactical prep",
      "Pro fighter sparring partner pairing"
    ],
    schedule: "Mon, Wed, Fri | 7:00 AM & 6:00 PM"
  },
  {
    id: "heavy-bag-power",
    title: "HEAVY BAG KNOCKOUT POWER",
    badge: "POWER & CONDITIONING",
    level: "All Levels",
    duration: "60 Mins",
    intensity: "High",
    icon: "Zap",
    color: "from-amber-500 to-red-700",
    description: "Explosive kinetic chain punch mechanics, heavy bag rounds, medicine ball power drills, and anaerobic cardio inspired by traditional Akhada conditioning to build devastating punch velocity.",
    features: [
      "10x 3-minute bag sprint combinations",
      "Core rotational power development",
      "Hand wrapping technique mastery",
      "Burn up to 900 calories per session"
    ],
    schedule: "Daily | Multiple slots (Morning & Evening)"
  },
  {
    id: "tactical-footwork",
    title: "SWEET SCIENCE & TACTICAL SLIP",
    badge: "TECHNIQUE MASTERCLASS",
    level: "Intermediate",
    duration: "75 Mins",
    intensity: "Medium-High",
    icon: "ShieldAlert",
    color: "from-blue-600 to-indigo-950",
    description: "Master the art of hitting without getting hit. Deep focus on tactical defense, peek-a-boo angles, pivot evasion, counter punching, and slipping ropes.",
    features: [
      "Slip bag & maize ball reaction work",
      "Footwork agility ladders & ring angles",
      "Shoulder roll & counter-hook timing",
      "Video analysis breakdown of rounds"
    ],
    schedule: "Tue, Thu, Sat | 10:00 AM & 5:30 PM"
  },
  {
    id: "golden-gloves-youth",
    title: "GOLDEN GLOVES YOUTH & ROOKIES",
    badge: "GRASSROOTS ACADEMY",
    level: "Beginner to Intermediate",
    duration: "60 Mins",
    intensity: "Moderate",
    icon: "Award",
    color: "from-yellow-500 to-amber-800",
    description: "Character building, discipline, stance fundamentals, and Olympic amateur rules for aspiring youth and adults stepping into boxing for the first time.",
    features: [
      "Zero-ego safe learning environment",
      "Safety gear & headguard protocols",
      "National amateur tournament pathway",
      "Mental resilience coaching"
    ],
    schedule: "Mon, Wed, Sat | 4:00 PM"
  }
];

export const TIMETABLE = [
  {
    day: "Monday",
    classes: [
      { time: "06:30 AM", name: "Dawn Fighter Conditioning", trainer: "Coach Ram Singh", spots: 3, intensity: "High" },
      { time: "10:00 AM", name: "Heavy Bag Knockout Power", trainer: "Pooja Sharma", spots: 8, intensity: "High" },
      { time: "04:30 PM", name: "Youth Golden Gloves", trainer: "Gurpreet 'Lion' Singh", spots: 5, intensity: "Moderate" },
      { time: "06:00 PM", name: "Pro Contender Fight Camp", trainer: "Head Coach Ram Singh", spots: 2, intensity: "Extreme" },
      { time: "07:30 PM", name: "Tactical Defense & Sparring", trainer: "Aman Verma", spots: 6, intensity: "High" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "07:00 AM", name: "Sweet Science Footwork", trainer: "Simran Kaur", spots: 7, intensity: "Medium" },
      { time: "11:30 AM", name: "Boxing HIIT & Core Melt", trainer: "Pooja Sharma", spots: 10, intensity: "High" },
      { time: "05:00 PM", name: "Amateur Sparring League", trainer: "Coach Ram Singh", spots: 4, intensity: "Extreme" },
      { time: "07:00 PM", name: "Heavy Bag Knockout Power", trainer: "Gurpreet 'Lion' Singh", spots: 6, intensity: "High" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "06:30 AM", name: "Dawn Fighter Conditioning", trainer: "Aman Verma", spots: 5, intensity: "High" },
      { time: "10:00 AM", name: "Heavy Bag Knockout Power", trainer: "Coach Ram Singh", spots: 9, intensity: "High" },
      { time: "05:30 PM", name: "Slip Rope & Counter Punching", trainer: "Simran Kaur", spots: 4, intensity: "High" },
      { time: "07:00 PM", name: "Pro Contender Fight Camp", trainer: "Head Coach Ram Singh", spots: 1, intensity: "Extreme" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "07:00 AM", name: "Sweet Science Footwork", trainer: "Simran Kaur", spots: 8, intensity: "Medium" },
      { time: "12:00 PM", name: "Lunch Break Mitt Express", trainer: "Pooja Sharma", spots: 6, intensity: "High" },
      { time: "06:00 PM", name: "Heavy Bag Power Circuit", trainer: "Gurpreet 'Lion' Singh", spots: 5, intensity: "High" },
      { time: "07:30 PM", name: "Open Ring Sparring Session", trainer: "Coach Ram Singh", spots: 3, intensity: "Extreme" }
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "06:30 AM", name: "Speed & Agility Matrix", trainer: "Aman Verma", spots: 6, intensity: "High" },
      { time: "10:30 AM", name: "Masters Boxing (40+)", trainer: "Coach Ram Singh", spots: 7, intensity: "Moderate" },
      { time: "05:30 PM", name: "Friday Fight Night Club Drills", trainer: "Gurpreet Singh & Pooja S.", spots: 2, intensity: "Extreme" },
      { time: "07:00 PM", name: "Knockout Bag Blitz", trainer: "Simran Kaur", spots: 8, intensity: "High" }
    ]
  },
  {
    day: "Saturday",
    classes: [
      { time: "08:30 AM", name: "Weekend Warrior Boot Camp", trainer: "All Coaches", spots: 12, intensity: "High" },
      { time: "11:00 AM", name: "Tournament Sparring Prep", trainer: "Head Coach Ram Singh", spots: 4, intensity: "Extreme" },
      { time: "02:00 PM", name: "Youth Boxing Academy", trainer: "Simran Kaur", spots: 9, intensity: "Moderate" },
      { time: "04:30 PM", name: "Heavy Bag Power & Abs", trainer: "Pooja Sharma", spots: 7, intensity: "High" }
    ]
  },
  {
    day: "Sunday",
    classes: [
      { time: "09:00 AM", name: "Active Recovery & Mobility Flow", trainer: "Pooja Sharma", spots: 14, intensity: "Low-Mod" },
      { time: "11:00 AM", name: "Tactical Film Study & Ring IQ", trainer: "Head Coach Ram Singh", spots: 15, intensity: "Technical" },
      { time: "01:00 PM", name: "Open Gym & Ring Time", trainer: "On-Duty Pro Coach", spots: 20, intensity: "Self-Paced" }
    ]
  }
];

export const COACHES = [
  {
    name: "Coach Ram 'Thunder' Singh",
    role: "Head Coach & Former Asian Games Gold Medalist",
    record: "34-2-0 (29 KOs)",
    credentials: "Dronacharya Awardee, 2x Olympic Indian Boxing Coach",
    specialty: "Knockout Mechanics, Ring Strategy, Corner Psychology",
    bio: "Over 25 years inside the squared circle. Has cornered national and world champions and built Ironclad India into the country's premier fight proving ground.",
    image: "/images/head_coach_ram.jpg",
    quote: "Technique wins rounds. Heart wins championships. We build both on the canvas."
  },
  {
    name: "Gurpreet 'The Lion' Singh",
    role: "Undefeated WBC India Champion & Senior Coach",
    record: "28-0-0 (24 KOs)",
    credentials: "National Champion, Indian Pro Fighter of the Year",
    specialty: "Heavyweight Power Distribution, Inside Infighting",
    bio: "Gurpreet actively trains alongside academy contenders when not preparing for title defenses, personally mentoring the next generation of Indian pugilists.",
    image: "/images/hero_boxer.jpg",
    quote: "When the lights come on, only the sweat you poured in the dark will save you."
  },
  {
    name: "Pooja 'The Storm' Sharma",
    role: "Director of Conditioning & Women's Combat",
    record: "19-1-0 (14 KOs)",
    credentials: "Olympic Medalist, National Gold Medalist, CSCS Specialist",
    specialty: "Anaerobic Lactic Conditioning, Rapid Combination Angles",
    bio: "Renowned Indian champion fighter known for relentless volume punch rates exceeding 110 punches per round.",
    image: "/images/female_boxer_pooja.jpg",
    quote: "Speed without precision is noise. Precision with power is a knockout."
  }
];

export const PRICING_TIERS = [
  {
    id: "drop-in",
    name: "DAY PASS CONTENDER",
    price: "₹999",
    period: "Single Session Pass",
    description: "Full access to facility, heavy bags, speed bag zone, and drop-in group class.",
    popular: false,
    perks: [
      "Access to all general gym floor equipment",
      "1x Guided Heavy Bag or Boxing HIIT class",
      "Complimentary hand wrap and glove rental",
      "Locker room, cold plunge & sauna access"
    ],
    cta: "Get Day Pass"
  },
  {
    id: "monthly-pro",
    name: "UNDISPUTED CONTENDER",
    price: "₹4,999",
    period: "Per Month (Billed Monthly)",
    description: "The complete fight academy membership for ambitious boxers and fitness enthusiasts.",
    popular: true,
    perks: [
      "Unlimited access to all scheduled boxing classes",
      "Supervised ring sparring sessions (with medical check)",
      "Monthly 1-on-1 coach mitt session (45 mins)",
      "Priority presale access for all Arena Tournament bouts",
      "Full locker, ice bath, cryotherapy & sauna privileges",
      "Ironclad India fight apparel welcome kit (Gloves + Wraps)"
    ],
    cta: "Claim Your Spot"
  },
  {
    id: "champion-vip",
    name: "CHAMPIONSHIP INNER RING",
    price: "₹12,499",
    period: "Per Month (VIP Elite)",
    description: "Personalized pro-level fighter development with dedicated coaching and VIP tournament perks.",
    popular: false,
    perks: [
      "All Undisputed Contender benefits included",
      "Weekly 1-on-1 personal mitt work with Head Coach Ram",
      "Guaranteed Ringside VIP seat at every Tournament Bout",
      "Tailored fight nutrition, weight cut & recovery regimen",
      "Custom personalized leather fight gloves & robes",
      "Access to private 24/7 fighter recovery studio"
    ],
    cta: "Join The Elite"
  }
];

export const TICKET_TIERS = [
  {
    id: "ppv-stream",
    name: "4K LIVE STREAM PAY-PER-VIEW",
    price: 499,
    badge: "JIOHOTSTAR & FANCODE PPV",
    features: [
      "Ultra-HD 4K 60FPS multi-camera livestream",
      "Live corner audio & slow-motion punch replays",
      "Interactive fan scorecard & live stats",
      "On-demand replay for 30 days"
    ]
  },
  {
    id: "general-admission",
    name: "GENERAL ARENA TICKET",
    price: 1499,
    badge: "IN-ARENA SEATING",
    features: [
      "Upper tier reserved stadium seat",
      "Full 8-fight bout card view",
      "Ironclad India commemorative lanyard",
      "Arena food & beverage pavilion access"
    ]
  },
  {
    id: "golden-circle",
    name: "GOLDEN CIRCLE FLOOR SEAT",
    price: 4999,
    badge: "CLOSE ACTION",
    features: [
      "Floor seating within 10 rows of the canvas",
      "Hear every punch impact & corner call",
      "Complimentary tournament program book",
      "Dedicated express food & merchandise lane"
    ]
  },
  {
    id: "vip-ringside",
    name: "PLATINUM RINGSIDE VIP",
    price: 14999,
    badge: "EXCLUSIVE ACCESS",
    features: [
      "Row 1-2 canvas-edge ringside seating",
      "All-inclusive VIP lounge with gourmet dinner",
      "Post-fight press conference & locker room pass",
      "Photo in the ring with Championship Belt",
      "Autographed fight gloves from Singh & Sharma"
    ]
  }
];

export const GYM_ZONES = [
  {
    title: "THE CHAMPIONSHIP RING",
    dimensions: "24ft x 24ft Pro Olympic Canvas",
    desc: "Elevated competition ring equipped with high-density EVA shock padding, authentic four-rope tension system, and overhead broadcast lighting.",
    tag: "SPARRING & BOUTS"
  },
  {
    title: "THE HEAVY BAG MATRIX",
    dimensions: "36 Suspended Heavy & Teardrop Bags",
    desc: "From 150lb water-filled hydro bags to traditional leather cylinders, tuned for maximum impact resistance and combination endurance.",
    tag: "POWER & COMBOS"
  },
  {
    title: "SPEED & AGILITY PIT",
    dimensions: "Speed Bags, Slip Ropes & Maize Balls",
    desc: "Precision rhythmic rebound platforms, double-end reaction balls, and custom slip lines to hone lightning reflexes and head movement.",
    tag: "REFLEXES & TIMING"
  },
  {
    title: "CRYO & RECOVERY SUITE",
    dimensions: "Cold Plunges, Infrared Saunas & Normatec",
    desc: "State-of-the-art sports science recovery station to flush lactic acid, reduce inflammation, and accelerate fighter turnaround time.",
    tag: "ELITE RECOVERY"
  }
];
