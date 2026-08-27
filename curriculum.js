/* ============================================================
   Physicist's Mind — curriculum spine
   Fields, tracks, and the addModule() helper.
   Content lives in the content-*.js files which call addModule().
   ============================================================ */

window.PHYS_FIELDS = {
  maths:       { name: "Maths",          color: "#9aa6d4" },
  classical:   { name: "Classical",      color: "#ffb26b" },
  em:          { name: "Electromagnetism",color:"#6be0ff" },
  statistical: { name: "Statistical",    color: "#ff8fb0" },
  relativity:  { name: "Relativity",     color: "#7cf0b8" },
  cosmology:   { name: "Cosmology",      color: "#7fd4ff" },
  quantum:     { name: "Quantum",        color: "#b98bff" },
  qft:         { name: "Quantum Fields", color: "#8aa0ff" },
  particle:    { name: "Particle Physics",color:"#ffd166" },
  condensed:   { name: "Condensed Matter",color:"#5ee0c0" },
  gravitation: { name: "Gravitation",    color: "#a8c8ff" },
  information: { name: "Information",    color: "#ff9ee0" },
  philosophy:  { name: "Foundations",    color: "#a3e635" },
  breakthroughs:{name: "Breakthroughs",  color: "#f5c26b" },
  experiment:  { name: "Experiment",     color: "#d4a373" },
  frontiers:   { name: "Frontiers",      color: "#c0a3ff" }
};

window.PHYS_TRACKS = [
  { id: "foundations", icon: "🏛️", title: "Foundations & the classical world",
    sub: "The language of physics, and the theories that ran the show for 250 years" },
  { id: "methods", icon: "🧮", title: "Mathematical methods",
    sub: "The tools physicists actually compute with, and what each one is for" },
  { id: "relativity", icon: "🌌", title: "Relativity & the cosmos",
    sub: "Space, time and gravity — from Einstein to the whole universe" },
  { id: "quantum", icon: "⚛️", title: "The quantum world",
    sub: "The strange rules of the very small, and the fields beneath everything" },
  { id: "particles", icon: "🔬", title: "Particles, forces & frontiers",
    sub: "What everything is made of, and the questions still open" },
  { id: "matter", icon: "🧊", title: "Matter, nuclei, fluids & stars",
    sub: "The rest of physics — where most physicists actually work" },
  { id: "nobel", icon: "🏅", title: "The breakthroughs that changed everything",
    sub: "The Nobel-winning results, told as arguments rather than trivia" },
  { id: "blackholes", icon: "🕳️", title: "Black holes, horizons & information",
    sub: "Schwarzschild to Hawking to the paradox that still isn't settled" },
  { id: "time", icon: "⏳", title: "Time, cause & the arrow",
    sub: "Why effect never precedes cause, and where that asymmetry comes from" },
  { id: "qg", icon: "🧵", title: "Strings, quantum gravity & the frontier",
    sub: "The candidates for the final theory, and an honest scoreboard" },
  { id: "practice", icon: "📊", title: "How physics is actually done",
    sub: "Evidence, error, significance, detectors and the art of estimation" }
];

window.PHYS_MODULES = [];
window.addModule = function (m) { window.PHYS_MODULES.push(m); };
