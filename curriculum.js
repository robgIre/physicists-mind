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
  frontiers:   { name: "Frontiers",      color: "#c0a3ff" }
};

window.PHYS_TRACKS = [
  { id: "foundations", icon: "🏛️", title: "Foundations & the classical world",
    sub: "The language of physics, and the theories that ran the show for 250 years" },
  { id: "relativity", icon: "🌌", title: "Relativity & the cosmos",
    sub: "Space, time and gravity — from Einstein to the whole universe" },
  { id: "quantum", icon: "⚛️", title: "The quantum world",
    sub: "The strange rules of the very small, and the fields beneath everything" },
  { id: "particles", icon: "🔬", title: "Particles, forces & frontiers",
    sub: "What everything is made of, and the questions still open" }
];

window.PHYS_MODULES = [];
window.addModule = function (m) { window.PHYS_MODULES.push(m); };
