// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the max effective range of the SA80 A2 as an individual?",
    answer: "300m",
    options: [
      "100m",
      "200m",
      "300m",
      "400m"
    ]
  },
    {
    numb: 2,
    question: "What is the max effective range of the LMG with the iron sight fitted?",
    answer: "400m",
    options: [
      "200m",
      "400m",
      "600m",
      "800m"
    ]
  },
    {
    numb: 3,
    question: "What is the incapacitation of the L109 HE Grenade, to the ptotected man?",
    answer: "5m",
    options: [
      "5m",
      "10m",
      "15m",
      "20m"
    ]
  },
    {
    numb: 4,
    question: "What is the calibre of the UGL?",
    answer: "40mm",
    options: [
      "25mm",
      "9mm",
      "35mm",
      "40mm"
    ]
  },
    {
    numb: 5,
    question: "What are the front lin scales of 5.56mm ammunition for a rifleman and how are they broken down?",
    answer: "6 mags of 180 rds + a bandolier of 150 rds = 330 rds",
    options: [
      "5 mags of 150 rds + a bandolier of 150 rds = 300 rds",
      "4 mags of 120 rds + a bandolier of 150 rds = 270 rds",
      "6 mags of 180 rds + a bandolier of 150 rds = 330 rds",
      "5 mags of 160 rds + a bandolier of 150 rds = 310 rds"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
    numb: 6,
    question: "What is the dliberate rate of fire for the SA80 A2?",
    answer: "10 rpm",
    options: [
      "10 rpm",
      "20 rpm",
      "30 rpm",
      "40 rpm"
    ]
  },
      {
    numb: 7,
    question: "What are the six section battle drills?",
    answer: "Prep for battle, Reaction to EEF, Locate, Supress, Attack, Re-group",
    options: [
      "Prep for battle, Reaction to EEF, Supress, Win FireFight, Attack, Re-group",
      "Prep for battle, Reaction to EEF, Locate, Supress, Attack, Re-group",
      "Prep for battle, Reaction to EEF, Supress, Locate, Attack, Re-group",
      "Prep for battle, Reaction to EEF, Locate, Supress, Assault, Re-org"
    ]
  },
      {
    numb: 8,
    question: "What are the 4 platoon battle drills?",
    answer: "Prep for battle, Reaction to any sect coming under EEF, Attack, Re-org",
    options: [
      "Prep for battle, Reaction to any sect coming under EEF, Assault, Re-org",
      "Prep for battle, Reaction to EEF, Assault, Re-group",
      "Prep for battle, Reaction to any sect coming under EEF, Supress, Assault",
      "Prep for battle, Reaction to any sect coming under EEF, Attack, Re-org"
    ]
  },
      {
    numb: 9,
    question: "What is the sequne of a fire control order",
    answer: "Group, Range, Indication, Type of Fire",
    options: [
      "Full, Brief, Individual, Delayed",
      "Clear, Loud, As an order, With pauses",
      "Group, Range, Indication, Type of Fire",
      "Group, Range, Identifcation, Target"
    ]
  },
      {
    numb: 10,
    question: "What are the two methods for judging distance?",
    answer: "Unit of measure and Apperance",
    options: [
      "Unit of measure and Apperance",
      "Halving, Bracketing, Unit Average",
      "Appearance, Assumption",
      "Sect Average, Halving, Other Devices"
    ]
  },
      {
    numb: 11,
    question: "What are the 3 groups in an anti-personnel ambush?",
    answer: "Cut offs, Killing group, Rear protection group",
    options: [
      "Cut offs, Pl Commd group, Rear protection",
      "Left cut off, Right cut off, Ambush Party",
      "Cut offs, Killing group, Rear protection group",
      "Rear protection, Flank Protection, Killing group"
    ]
  },
      {
    numb: 12,
    question: "What are 3 types of sentry you are likely to conduct in a harbour area?",
    answer: "Ground, Chemical, Air",
    options: [
      "Ground, Air, Night",
      "Night, Day, Radio",
      "Ground, Chemical, Radio",
      "Ground, Chemical, Air"
    ]
  },
      {
    numb: 13,
    question: "What are the aims of firt aid?",
    answer: "To save life and prevent further injury",
    options: [
      "Triage, Prevention",
      "Prevention, Treatment",
      "To save life, Prevent yourself from being a casualty",
      "To save life and prevent further injury"
    ]
  },
      {
    numb: 14,
    question: "Which of these would you not adminisyer morphine to?",
    answer: "An unconscious casualty",
    options: [
      "Open fracture",
      "An unconscious casualty",
      "Triple amputee",
      "Gunshot wound"
    ]
  },
      {
    numb: 15,
    question: "What is the max amount of starand FFD's that should be applied to a wound at any one time?",
    answer: "2",
    options: [
      "2",
      "3",
      "4",
      "1"
    ]
  },
      {
    numb: 16,
    question: "State the treatment of fractures.",
    answer: "Splint, Immobilise, Pain relief",
    options: [
      "Morphine, Mobilise, CASEVAC",
      "Send 9 liner, Triage, Pain Relief",
      "CASEVAC, Pain Relief, Splint",
      "Splint, Immobilise, Pain relief"
    ]
  },
      {
    numb: 17,
    question: "If an unconsciuos casualty has been treated with morphine, he should be CASEVAC'd as what priority?",
    answer: "T1",
    options: [
      "T4",
      "T1",
      "T3",
      "T2"
    ]
  },
      {
    numb: 18,
    question: "What is the master drill?",
    answer: "Control, Assess, Communicate, Treat and Triage",
    options: [
      "Communicate, Assess, Triage, Control",
      "Catastrophic bleed, Control, Triage, Assess, Communicate",
      "Control, Catastrophic bleed, Communicate, Triage",
      "Control, Assess, Communicate, Treat and Triage"
    ]
  },
      {
    numb: 19,
    question: "State the 2 chemical agent vapours the RVD will detect.",
    answer: "Nerve agent, Mustard agent",
    options: [
      "Nerve agent, Chemical agent",
      "Nerve agent, Nuclear agent",
      "Blood agent, Mustard agent",
      "Nerve agent, Mustard agent"
    ]
  },
      {
    numb: 20,
    question: "How many and how often do you take NAPS tablets?",
    answer: "1 tablet every 8 hours",
    options: [
      "1 tablet every 6 hours",
      "1 tablet every 8 hours",
      "1 tablet every 10 hours",
      "2 tablet everyday"
    ]
  },
      {
    numb: 21,
    question: "When colour is the nuclear ATOM NATO sign and what colour is the writing?",
    answer: "White with black writing",
    options: [
      "Blue with Yellow writing",
      "White with black writing",
      "Blue with red writing",
      "White with yellow writing"
    ]
  },
      {
    numb: 22,
    question: "What is the sequence of an echelon attack?",
    answer: "Assault, surpress, reserve",
    options: [
      "Assault, surpress, attack",
      "Attack, surpress, assault",
      "Assault, surpress, reserve",
      "Reserve, surpress, assault"
    ]
  },
      {
    numb: 23,
    question: "What is the effective range of the SA80 A2 as a section?",
    answer: "600m",
    options: [
      "400m",
      "500m",
      "600m",
      "300m"
    ]
  },
      {
    numb: 24,
    question: "What is the correct zeroing point at the 100m with a SUSAT fitted?",
    answer: "90mm above the point of aim",
    options: [
      "60mm above the point of aim",
      "90mm above the point of aim",
      "50mm above the point of aim",
      "30mm above the point of aim"
    ]
  },
      {
    numb: 25,
    question: "Name the 4 types of fire control order.",
    answer: "Full, brief, Individual, delayed",
    options: [
      "Full, brief, Indication, delayed",
      "Brief, furture, individual, distance",
      "Full, brief, Individual, delayed",
      "Fall, brief, Indication, delayed"
    ]
  },
      {
    numb: 26,
    question: "In the quick attack estimate, what does the pneumonic EMLAWD stand for?",
    answer: "Enemy, Mission, Location, Approaches, Weapons, De-confliction",
    options: [
      "Enemy, Manpower, Location, Advance, Work routine, De-confliction",
      "Enemy, Mission, Location, Assets, Weapons, De-confliction",
      "Enemy, Mission, Location, Approaches, Weapons, De-confliction",
      "Enemy, Manpower, Location, Approaches, Weapons, De-confliction"
    ]
  },
      {
    numb: 27,
    question: "What is the aim of battle procedure?",
    answer: "To ensure that a soldier is sent into battle without a waste of time and with minimum fuss, knowing exactly what he has to do, how he is going to do it and what fire support he is going to be given",
    options: [
      "To ensure that a soldier without a waste of time and with minimum fuss, knowing exactly what he has to do, how he is going to do it and what fire support he is going to be given",
      "To ensure that a soldier is sent into battle without a waste of time and fuss, knowing exactly what he has to do, how he is going to do it and what with no fire support",
      "To ensure that a soldier is sent into battle without a waste of time and with minimum fuss, knowing exactly what he has to do, how he is going to do it and what fire support he is going to be given",
      "To ensure that a soldier is sent into war without a waste of time and with minimum fuss, knowing exactly what he has to do, how he is going to do it and what fire support he is going to be given"
    ]
  },
      {
    numb: 28,
    question: "After how many rounds should the barrel be changed on the LMG after continuous firing?",
    answer: "400 rounds",
    options: [
      "200 rounds",
      "400 rounds",
      "600 rounds",
      "800 rounds"
    ]
  },
      {
    numb: 29,
    question: "What are the 3 methods of locating the enemy?",
    answer: "Observation, Fire, Movement",
    options: [
      "Sight, Noise, Movement",
      "Observation, FCO's, Movement",
      "Observation, Fire, Movement",
      "Fire into likely posns, Draw fire, Move to a better posn"
    ]
  },
      {
    numb: 30,
    question: "When treating nerve agent poisoning with atropine (combopen), how many injections should be administered and how often?",
    answer: "3 pens; 1 every 15 mins",
    options: [
      "3 pens; 1 every 15 mins",
      "2 pens; 1 every 10 mins",
      "3 pens; 1 every 10 mins",
      "2 pens; 1 every 15 mins"
    ]
  },

];