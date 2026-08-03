/* ===== TRACK 4: PARTICLES, FORCES & FRONTIERS ===== */

addModule({
  id: "sm", track: "particles", order: 1,
  title: "The Standard Model & particle physics",
  fields: ["particle","qft"], readMins: 28,
  summary: "Our best inventory of reality: a dozen matter particles, three forces, and the Higgs — held together by symmetry, and confirmed at the LHC.",
  lesson: `
    <h3>The big picture</h3>
    <p>The Standard Model is the crowning achievement of 20th-century physics: a single quantum field theory that catalogues every known fundamental particle and describes three of the four forces between them. It has survived every experimental test for fifty years, culminating in the discovery of the Higgs boson in 2012. It is also, tellingly, <em>known to be incomplete</em> — it leaves out gravity, dark matter and more. So it is simultaneously the most successful theory in physics and a signpost to what lies beyond.</p>

    <h3>The matter particles: fermions</h3>
    <p>All ordinary matter is built from two families of <strong>fermions</strong>:</p>
    <ul>
      <li><strong>Quarks</strong> (six types: up, down, charm, strange, top, bottom). They feel the strong force and never appear alone; they bind into protons and neutrons. A proton is two ups and a down; a neutron is two downs and an up.</li>
      <li><strong>Leptons</strong> (electron, muon, tau, and their three neutrinos). The electron is the one you know; neutrinos are ghostly, nearly massless particles that barely interact — trillions pass through you every second.</li>
    </ul>
    <p>Curiously, these come in <strong>three generations</strong>: the electron has two heavier copies (muon, tau), and each quark and neutrino likewise. Ordinary matter needs only the first generation; nobody knows why nature repeats itself three times. As Nobel laureate Isidor Rabi said of the muon, "who ordered that?"</p>

    <h3>The forces: gauge bosons</h3>
    <p>Forces are carried by <strong>bosons</strong>, exchanged between particles (the QFT picture):</p>
    <ul>
      <li><strong>Electromagnetism</strong> — carried by the <strong>photon</strong>. Infinite range, binds atoms and molecules.</li>
      <li><strong>The strong force</strong> — carried by <strong>gluons</strong>. It binds quarks into protons and neutrons and holds nuclei together. Described by quantum chromodynamics (QCD).</li>
      <li><strong>The weak force</strong> — carried by the <strong>W and Z bosons</strong>. Very short range; responsible for radioactive decay and the reactions that power the Sun.</li>
    </ul>
    <div class="callout"><b>The organising principle is symmetry.</b> Each force corresponds to a <em>gauge symmetry</em> — a symmetry group (U(1) for electromagnetism, SU(2) for the weak force, SU(3) for the strong force). Demanding that the theory respect these symmetries actually <em>generates</em> the forces and their carrier particles. This is the profound lesson of the Standard Model: forces are consequences of symmetry.</div>

    <h3>The strong force's odd behaviour</h3>
    <p>QCD has two features that make it unlike anything in everyday experience. <strong>Confinement:</strong> the force between quarks does not weaken with distance the way gravity or electromagnetism does — pull two quarks apart and it takes ever more energy, until the energy itself creates new quark–antiquark pairs. So you can never isolate a single quark. <strong>Asymptotic freedom:</strong> conversely, at very short distances (high energies) quarks feel almost no force and roam freely inside the proton. This counter-intuitive combination won the 2004 Nobel Prize.</p>

    <h3>The Higgs mechanism</h3>
    <p>There was a deep problem: the symmetry that unifies the electromagnetic and weak forces (the <strong>electroweak</strong> theory) demands that the force carriers be massless — yet the W and Z bosons are very heavy. The resolution is the <strong>Higgs field</strong>, which fills all of space. Particles interact with this field and, in effect, are slowed by it — that resistance is what we perceive as <strong>mass</strong>. Particles that interact strongly with the Higgs field (like the top quark) are heavy; those that ignore it (the photon) are massless. The Higgs field's own ripple is the <strong>Higgs boson</strong>, discovered at CERN's Large Hadron Collider in 2012, completing the Standard Model.</p>
    <div class="callout"><b>Common oversimplification to avoid:</b> the Higgs does not give mass to <em>everything</em>. Most of the mass of a proton — and therefore most of your body's mass — comes from the energy of the strong force binding quarks together (E = mc²), not from the Higgs. The Higgs gives mass to the fundamental particles themselves.</div>

    <h3>What the Standard Model leaves out</h3>
    <p>For all its success, it is not the final theory. It says nothing about <strong>gravity</strong>. It contains no candidate for <strong>dark matter</strong>. It does not explain why there is more matter than antimatter, why there are three generations, or why the particle masses have the values they do (they are inputs, not predictions — around 19 free parameters put in by hand). These gaps are why particle physics is still very much alive.</p>
  `,
  keyIdeas: [
    "Matter is built from fermions: six quarks and six leptons, arranged in three generations.",
    "Three forces are carried by bosons: the photon (electromagnetism), gluons (strong), and W/Z (weak).",
    "Each force arises from a gauge symmetry — forces are consequences of symmetry.",
    "The strong force confines quarks (they can't be isolated) yet frees them at short range (asymptotic freedom).",
    "The Higgs field gives fundamental particles their mass; its boson was found in 2012.",
    "The Standard Model omits gravity and dark matter and has ~19 unexplained free parameters, so it is incomplete."
  ],
  talk: {
    oneliners: [
      "The Standard Model is our particle inventory: twelve matter particles, three forces via carrier bosons, plus the Higgs — and it's passed every test for fifty years.",
      "Forces come from symmetry: each fundamental force corresponds to a gauge symmetry group that literally generates it.",
      "You can never isolate a single quark — pull them apart and the energy just makes new quarks; that's confinement.",
      "The Higgs field gives the fundamental particles their mass, but most of your body's mass is actually strong-force binding energy, not the Higgs."
    ],
    myths: [
      { m: "The Higgs boson gives everything its mass.", t: "It gives fundamental particles their mass; most of the proton's (and your) mass is strong-force binding energy via E = mc²." },
      { m: "Quarks could be isolated with a big enough collider.", t: "Confinement means the energy needed to separate them creates new quarks instead; free quarks don't exist at low energy." },
      { m: "The Standard Model is the complete theory of everything.", t: "It excludes gravity and dark matter and leaves ~19 parameters unexplained; it is known to be incomplete." }
    ],
    terms: [
      { term: "Fermion", def: "Matter particle (quarks and leptons); makes up ordinary matter." },
      { term: "Boson", def: "Force-carrier particle (photon, gluon, W, Z, Higgs)." },
      { term: "Quark / lepton", def: "The two families of fermions; quarks feel the strong force, leptons don't." },
      { term: "Gauge symmetry", def: "The symmetry principle (U(1), SU(2), SU(3)) that generates each force." },
      { term: "Confinement / asymptotic freedom", def: "Quarks can't be isolated, yet feel little force at very short range." },
      { term: "Higgs field / boson", def: "The all-pervading field giving fundamental particles mass; its excitation found in 2012." }
    ]
  },
  test: [
    { q: "What are the basic building blocks and forces in the Standard Model?", a: "Matter is made of fermions — six quarks and six leptons in three generations. Three forces act via carrier bosons: electromagnetism (photon), the strong force (gluons), and the weak force (W and Z). The Higgs boson relates to the origin of mass." },
    { q: "What is meant by saying 'forces come from symmetry'?", a: "Each fundamental force corresponds to a gauge symmetry group (U(1), SU(2), SU(3)). Requiring the theory to respect these local symmetries produces the forces and their carrier particles — forces are consequences of symmetry." },
    { q: "Explain confinement and asymptotic freedom.", a: "Confinement: the strong force between quarks doesn't fall off with distance, so separating them creates new quarks and no single quark can be isolated. Asymptotic freedom: at very short distances/high energies quarks feel almost no force and move nearly freely." },
    { q: "What does the Higgs field do, and what's the common misconception?", a: "It fills space and gives fundamental particles their mass through their interaction with it. The misconception is that it accounts for all mass; in fact most ordinary mass (e.g. in protons) comes from strong-force binding energy, not the Higgs." }
  ],
  resources: [
    { name: "David Tong — Gauge Theory", desc: "Free graduate notes on the gauge theories behind the forces.", url: "https://www.damtp.cam.ac.uk/user/tong/gaugetheory.html", type: "notes", icon: "📄" },
    { name: "David Tong — The Standard Model", desc: "Free notes assembling the full Standard Model.", url: "https://www.damtp.cam.ac.uk/user/tong/standardmodel.html", type: "notes", icon: "📄" },
    { name: "MIT 8.701 — Nuclear and Particle Physics", desc: "Full course with lecture notes and problems.", url: "https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/", type: "course", icon: "🎓" },
    { name: "CERN — The Standard Model", desc: "Authoritative, accessible overview from the source.", url: "https://home.cern/science/physics/standard-model", type: "web", icon: "🌐" }
  ]
});

addModule({
  id: "frontiers", track: "particles", order: 2,
  title: "Frontiers & open questions",
  fields: ["frontiers"], readMins: 24,
  summary: "The great unsolved problems: quantum gravity, string theory, unification, the measurement problem, and why the universe is the way it is.",
  lesson: `
    <h3>The big picture</h3>
    <p>Everything so far is textbook physics — established, tested, agreed. This module is the opposite: the honest map of what we <em>don't</em> know. Being able to talk fluently about the open problems is what separates someone who has memorised physics from someone who understands where it actually stands. And the answer is humbling: our two best theories contradict each other, and 95% of the universe is a mystery.</p>

    <h3>The great schism: gravity vs the quantum</h3>
    <p>Modern physics rests on two magnificent pillars that <strong>refuse to fit together</strong>. General relativity describes gravity as smooth, curved spacetime and rules the large scale. Quantum field theory describes the other forces as jittery, probabilistic fields and rules the small scale. Each is superbly confirmed in its own domain. But try to make gravity quantum — to write a <strong>quantum theory of gravity</strong> — and the mathematics breaks down, producing uncontrollable infinities that renormalization cannot tame. This is arguably <em>the</em> central unsolved problem in fundamental physics.</p>
    <p>It only bites in extreme places where both matter: the centre of a black hole, and the first instant of the Big Bang. There, both theories apply and neither works. We literally do not know what happens.</p>

    <h3>The candidate answers</h3>
    <ul>
      <li><strong>String theory:</strong> the leading attempt at unification. Its idea is that the fundamental objects are not point particles but tiny vibrating <em>strings</em>; different vibration patterns are different particles, and one of them is automatically the graviton, the quantum of gravity. String theory is mathematically rich and naturally includes gravity, but it requires extra spatial dimensions (usually ten or eleven total) and has made no confirmed experimental prediction. Its critics call it untestable; its defenders call it unfinished.</li>
      <li><strong>Loop quantum gravity:</strong> a rival that quantises spacetime itself, suggesting space comes in discrete chunks at the tiniest scale.</li>
      <li>Neither is confirmed. Quantum gravity remains open.</li>
    </ul>

    <h3>The dark universe</h3>
    <p>As cosmology showed, about <strong>27% of the universe is dark matter</strong> and <strong>68% is dark energy</strong> — and we do not know what either is. Dark matter is probably a new particle the Standard Model doesn't contain (searches are ongoing). Dark energy — the accelerating push of empty space — is even worse: when QFT tries to calculate the energy of the vacuum, it overshoots the observed dark energy by up to 120 orders of magnitude, the <strong>worst prediction in the history of physics</strong>. Something fundamental is missing.</p>

    <h3>Other deep puzzles worth knowing</h3>
    <ul>
      <li><strong>The matter–antimatter asymmetry:</strong> the Big Bang should have made equal matter and antimatter, which would have annihilated completely. Yet here we are, made of matter. Why the tiny imbalance survived is unexplained.</li>
      <li><strong>The measurement problem:</strong> quantum mechanics still doesn't cleanly say how or why superpositions collapse into definite outcomes. The interpretations — Copenhagen, Many-Worlds, pilot-wave, and others — make identical predictions but paint wildly different pictures of reality. This is unresolved.</li>
      <li><strong>The hierarchy and fine-tuning problems:</strong> why is gravity so absurdly weak compared to the other forces, and why do the constants of nature sit in the narrow ranges that allow atoms, stars and life? "Naturalness" was expected to explain this; so far it hasn't.</li>
      <li><strong>Why these laws?:</strong> the Standard Model's ~19 parameters and the specific forces we see are inputs, not explanations. Is there a deeper theory that predicts them, or is our universe one of many in a <em>multiverse</em> where they vary? Nobody knows.</li>
    </ul>
    <div class="callout"><b>The mature take:</b> physics is not "nearly finished". We have two spectacular theories that don't reconcile, we can't identify 95% of the universe, and we can't explain why the laws are what they are. That is not a failure — it is where the next revolution will come from. Saying this confidently is exactly how a physicist talks.</div>
  `,
  keyIdeas: [
    "General relativity and quantum theory are both superbly tested yet mathematically incompatible.",
    "A quantum theory of gravity is the central open problem; it only matters at black hole centres and the Big Bang.",
    "String theory and loop quantum gravity are leading but unconfirmed candidates for quantum gravity.",
    "Dark matter and dark energy make up ~95% of the universe and remain unidentified.",
    "The vacuum-energy calculation misses observed dark energy by up to 120 orders of magnitude.",
    "The measurement problem, matter–antimatter asymmetry and fine-tuning of the constants are all unresolved."
  ],
  talk: {
    oneliners: [
      "Our two best theories — general relativity and quantum field theory — are both superbly confirmed and flatly incompatible; reconciling them is the big prize.",
      "Quantum gravity only bites where both matter: inside black holes and at the Big Bang, and there neither theory works.",
      "String theory unifies everything on paper and naturally includes gravity, but it needs extra dimensions and has no confirmed prediction yet.",
      "The vacuum energy calculation is off from observed dark energy by up to 120 orders of magnitude — the worst prediction in physics."
    ],
    myths: [
      { m: "Physics is basically finished bar a few details.", t: "We can't unify our two main theories, can't identify 95% of the universe, and can't explain the constants of nature." },
      { m: "String theory is confirmed / proven.", t: "It is a promising mathematical framework with no experimental confirmation, and it's actively debated." },
      { m: "Many-Worlds (or Copenhagen) is the correct interpretation.", t: "The interpretations make identical predictions; which, if any, is 'right' is unresolved — that's the measurement problem." }
    ],
    terms: [
      { term: "Quantum gravity", def: "A sought-after theory unifying general relativity with quantum mechanics." },
      { term: "String theory", def: "Framework where particles are vibrating strings; naturally includes gravity, needs extra dimensions." },
      { term: "Cosmological constant problem", def: "The vast mismatch between predicted vacuum energy and observed dark energy." },
      { term: "Measurement problem", def: "The unresolved question of how quantum superpositions become definite outcomes." },
      { term: "Baryon asymmetry", def: "The unexplained excess of matter over antimatter." },
      { term: "Fine-tuning / naturalness", def: "Why the constants of nature sit in life-permitting, seemingly special ranges." }
    ]
  },
  test: [
    { q: "Why is quantum gravity such a hard, central problem?", a: "General relativity (smooth curved spacetime) and quantum field theory (jittery probabilistic fields) are both superbly tested but mathematically incompatible. Attempts to quantise gravity produce uncontrollable infinities. It only matters where both regimes overlap — black hole singularities and the Big Bang — and there we have no working theory." },
    { q: "What is string theory's core idea and its main criticism?", a: "That fundamental entities are tiny vibrating strings whose vibration modes are different particles, one of which is the graviton, so gravity is included automatically. The main criticism is that it requires extra dimensions and has made no confirmed, testable prediction so far." },
    { q: "Why is dark energy considered such an embarrassment for theory?", a: "When quantum field theory estimates the energy of the vacuum, it exceeds the observed dark-energy density by up to about 120 orders of magnitude — the largest known discrepancy between theory and observation, signalling something fundamental is missing." },
    { q: "What is the measurement problem?", a: "Quantum mechanics describes smooth, deterministic evolution of superpositions but doesn't cleanly explain how or why a single definite outcome appears on measurement. Competing interpretations (Copenhagen, Many-Worlds, pilot-wave) agree on predictions but disagree on what's really happening; it remains unresolved." }
  ],
  resources: [
    { name: "David Tong — String Theory", desc: "Free graduate lecture notes on the leading unification candidate.", url: "https://www.damtp.cam.ac.uk/user/tong/string.html", type: "notes", icon: "📄" },
    { name: "Sean Carroll — Mindscape / 'The Biggest Ideas'", desc: "Deep, accessible discussion of open problems and interpretations.", url: "https://www.preposterousuniverse.com/podcast/", type: "video", icon: "▶️" },
    { name: "PBS Space Time (YouTube)", desc: "Rigorous episodes on quantum gravity, dark energy and interpretations.", url: "https://www.youtube.com/c/pbsspacetime", type: "video", icon: "▶️" },
    { name: "Quanta Magazine — Fundamental Physics", desc: "Excellent, current reporting on the frontiers.", url: "https://www.quantamagazine.org/physics/", type: "web", icon: "🌐" }
  ]
});
