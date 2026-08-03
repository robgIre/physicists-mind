/* ===== TRACK 3: THE QUANTUM WORLD ===== */

addModule({
  id: "qm", track: "quantum", order: 1,
  title: "Quantum mechanics",
  fields: ["quantum"], readMins: 28,
  summary: "The rules of the very small: superposition, the wavefunction, uncertainty, measurement and entanglement — strange, but the most tested theory ever.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum mechanics is the physics of the very small — atoms, electrons, photons — and it is the most precisely tested theory in the history of science. It is also genuinely strange: at this scale the world does not behave like scaled-down billiard balls. Objects can be in several states at once, cannot have every property defined simultaneously, and are governed by probabilities that seem to be fundamental, not just our ignorance. Crucially, "strange" does not mean "vague". Quantum mechanics is mathematically exact and its predictions are confirmed to eleven decimal places. The weirdness is real, and it is precise.</p>

    <h3>Wave–particle duality</h3>
    <p>The founding shock: things we thought were particles (electrons) behave like waves, and things we thought were waves (light) behave like particles (photons). Fire electrons one at a time at a screen with two slits, and each lands as a single dot — particle-like — yet over many electrons an <strong>interference pattern</strong> builds up, as if each electron went through both slits and interfered with itself. Try to detect which slit it took, and the interference vanishes. This double-slit experiment is, in Feynman's words, the heart of quantum mechanics.</p>

    <h3>The wavefunction and superposition</h3>
    <p>A quantum system is described by a <strong>wavefunction</strong>, usually written ψ (psi). It is not a physical wave in space but a mathematical object encoding everything knowable about the system. Before measurement, a system can be in a <strong>superposition</strong> — a blend of possibilities at once. An electron's spin can be a mix of "up" and "down"; an atom can be in two places at once. The wavefunction evolves smoothly and deterministically according to the <strong>Schrödinger equation</strong>:</p>
    <div class="eq">iℏ ∂ψ/∂t = Ĥψ
      <span class="why">The rate of change of the wavefunction is set by the Hamiltonian Ĥ (the energy operator). Given ψ now, this fixes ψ later — completely deterministically. All the randomness enters only at measurement.</span></div>

    <h3>Measurement and the Born rule</h3>
    <p>Here is the deep break with classical physics. When you <em>measure</em>, the smooth superposition abruptly gives a single definite outcome, seemingly at random, and the wavefunction "collapses" to match. You cannot predict which outcome — only the <strong>probabilities</strong>, given by squaring the wavefunction (the Born rule):</p>
    <div class="eq">probability ∝ |ψ|²
      <span class="why">The likelihood of finding the system in a given state is the square of the wavefunction's amplitude there. This is the only place randomness enters quantum theory, and it appears to be fundamental, not a reflection of hidden details.</span></div>
    <div class="callout"><b>The measurement problem:</b> why and how does a smooth, deterministic superposition become a single random outcome? The equations describe the smooth evolution beautifully but say nothing clean about the "collapse". This gap is unsolved and is the source of all the interpretations of quantum mechanics.</div>

    <h3>The uncertainty principle</h3>
    <p>Heisenberg's principle says certain pairs of properties — most famously position and momentum — cannot both be sharply defined at once. The more precisely you pin down one, the fuzzier the other must be:</p>
    <div class="eq">Δx · Δp ≥ ℏ/2
      <span class="why">The product of the uncertainties in position and momentum has a hard floor set by Planck's constant. This is not a measurement clumsiness; it is a built-in feature of nature. A particle simply does not possess an exact position and an exact momentum simultaneously.</span></div>
    <p>This is why atoms are stable: an electron cannot spiral into the nucleus, because being pinned to a point would demand infinite momentum spread and energy. Quantum uncertainty is what holds matter up.</p>

    <h3>Entanglement</h3>
    <p>When two particles interact, their wavefunctions can become <strong>entangled</strong>: a single joint state that cannot be separated into independent descriptions. Measure one and you instantly know something about the other, however far apart they are. Einstein hated this ("spooky action at a distance") and argued it meant quantum mechanics was incomplete. Decades later, John Bell devised a test, and experiments settled it decisively in quantum mechanics' favour: the correlations are real and stronger than any theory of local hidden variables allows. Entanglement is now the working fuel of <strong>quantum computing</strong> and quantum cryptography.</p>
    <div class="callout"><b>Important nuance:</b> entanglement does not let you send information faster than light. The individual results look random; you only see the "spooky" correlations when you later compare notes through an ordinary channel. Relativity survives.</div>

    <h3>Quantisation and tunnelling</h3>
    <p>The word "quantum" comes from the fact that bound systems can only have <strong>discrete</strong> energy levels, not a continuum — electrons in an atom occupy specific rungs, and jumping between them emits or absorbs light of a definite colour. That is why each element has its own spectral fingerprint. And because particles are wave-like, they can <strong>tunnel</strong> through barriers they classically could not surmount — the mechanism behind nuclear fusion in the Sun, radioactive decay, and the flash memory in your phone.</p>
  `,
  keyIdeas: [
    "Matter and light show both wave and particle behaviour, revealed by the double-slit experiment.",
    "A system is described by a wavefunction that can be in a superposition of possibilities at once.",
    "The Schrödinger equation evolves the wavefunction smoothly and deterministically.",
    "Measurement yields a single random outcome with probability |ψ|² — the only randomness in the theory.",
    "The uncertainty principle sets a hard limit on jointly knowing complementary properties like position and momentum.",
    "Entanglement links particles into one joint state with correlations stronger than any local classical theory, but cannot signal faster than light."
  ],
  talk: {
    oneliners: [
      "Quantum mechanics is strange but exact — it's the most precisely tested theory we have, confirmed to eleven decimal places.",
      "Between measurements a system evolves deterministically; all the randomness enters only when you look, with probability given by |ψ|².",
      "Uncertainty isn't clumsy measurement — a particle genuinely doesn't possess an exact position and momentum at the same time.",
      "Entanglement is real 'spooky' correlation, proven by Bell tests, but it can't carry information faster than light."
    ],
    myths: [
      { m: "The observer effect means human consciousness collapses the wavefunction.", t: "'Measurement' means any irreversible interaction with the environment (decoherence); no conscious mind is required." },
      { m: "The uncertainty principle is about disturbing a particle when you measure it.", t: "It is a fundamental limit on which properties can simultaneously exist, not merely a measurement disturbance." },
      { m: "Entanglement lets you send messages instantly.", t: "Each local result is random; the correlations only appear when results are compared over a normal, light-speed-limited channel." }
    ],
    terms: [
      { term: "Wavefunction (ψ)", def: "The mathematical object encoding all knowable information about a quantum system." },
      { term: "Superposition", def: "Being in a combination of multiple states at once until measured." },
      { term: "Born rule", def: "Probability of an outcome equals the squared amplitude |ψ|²." },
      { term: "Uncertainty principle", def: "A hard limit on simultaneously defining complementary quantities like position and momentum." },
      { term: "Entanglement", def: "A joint state of two or more particles with correlations unexplained by local classical theory." },
      { term: "Quantisation / tunnelling", def: "Discrete energy levels in bound systems; wave-like passage through classically forbidden barriers." }
    ]
  },
  test: [
    { q: "What does the double-slit experiment demonstrate?", a: "That quantum objects show both wave and particle behaviour: single electrons arrive as dots (particle-like) yet build an interference pattern over many runs (wave-like), and observing which slit they take destroys the interference." },
    { q: "Where does randomness enter quantum mechanics?", a: "Only at measurement. The wavefunction evolves deterministically via the Schrödinger equation; when measured, it yields a single outcome at random, with probability given by |ψ|² (the Born rule)." },
    { q: "Is the uncertainty principle just about clumsy measurement?", a: "No. It is a fundamental property of nature: complementary quantities such as position and momentum cannot both be sharply defined at once, regardless of how carefully you measure." },
    { q: "Does entanglement allow faster-than-light communication? Explain.", a: "No. Measuring one entangled particle gives a random local result and instantly correlates with the partner, but you cannot control the outcome, so no information is transmitted until results are compared over a normal channel." }
  ],
  resources: [
    { name: "David Tong — Quantum Mechanics", desc: "Clear free lecture notes covering the foundations.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "MIT 8.04 — Quantum Physics I", desc: "Full course with video lectures and problem sets.", url: "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/", type: "course", icon: "🎓" },
    { name: "Susskind — Quantum Mechanics (Theoretical Minimum)", desc: "Full lecture course building the theory carefully.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Feynman Lectures Vol. III", desc: "The finest conceptual introduction to quantum mechanics.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" }
  ]
});

addModule({
  id: "qft", track: "quantum", order: 2,
  title: "Quantum field theory",
  fields: ["qft","quantum"], readMins: 28,
  summary: "The deepest layer of reality we know: not particles, but quantum fields filling all space. Particles are just their ripples.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum field theory (QFT) is the framework that marries quantum mechanics with special relativity, and it is the deepest description of reality physicists currently have. Its central idea is a genuine shift in worldview: <strong>the fundamental objects are not particles but fields</strong>. There is an electron field filling all of space, a photon field, a quark field, and so on. What we call a "particle" is simply a <strong>ripple</strong>, a quantised packet of energy, in one of these underlying fields. Every electron in the universe is identical because every electron is the same kind of ripple in the same single field.</p>

    <h3>Why we needed it</h3>
    <p>Ordinary quantum mechanics has a fixed number of particles. But at high energies, particles are routinely <em>created and destroyed</em> — smash two protons together and a shower of new particles appears. Einstein's E = mc² says energy can turn into mass, so any relativistic quantum theory must allow particle number to change. Fields do this naturally: add energy to a field and you excite more ripples (particles); take it away and they vanish. QFT is what you get when you demand quantum mechanics <em>and</em> relativity at once.</p>

    <h3>The vacuum is not empty</h3>
    <div class="callout"><b>One of the great surprises:</b> because fields are quantum, they can never be perfectly still — the uncertainty principle forbids it. Even in "empty" space the fields jitter with <em>vacuum fluctuations</em>, and short-lived "virtual" particles constantly pop in and out of existence. This is not metaphor: it produces measurable effects, like the tiny Lamb shift in hydrogen's energy levels and the Casimir force between two metal plates in a vacuum. Empty space is a seething medium.</div>

    <h3>Feynman diagrams</h3>
    <p>QFT calculations are organised by <strong>Feynman diagrams</strong> — those little sketches of lines meeting at vertices. They are not just cartoons; each diagram is a precise instruction for a piece of a calculation. Two electrons repel because one emits a virtual photon and the other absorbs it: force is the exchange of field quanta. Every fundamental force in QFT works this way — particles interact by trading carrier particles (photons for electromagnetism, gluons for the strong force, W and Z bosons for the weak force).</p>

    <h3>QED: the most accurate theory ever</h3>
    <p>The first complete QFT was <strong>quantum electrodynamics</strong> (QED), the quantum theory of electrons and light, built by Feynman, Schwinger, Tomonaga and Dyson. It is astonishingly accurate: its prediction for the electron's magnetic moment matches experiment to about one part in a trillion — the most precise agreement between theory and measurement anywhere in science. When people say the Standard Model "works", this is the gold standard they mean.</p>

    <h3>Renormalization</h3>
    <p>There was a crisis on the way. Naive QFT calculations kept producing <strong>infinities</strong>. The resolution, <strong>renormalization</strong>, was at first regarded as a dubious trick and is now understood as a deep insight. The idea: the parameters in your equations (like a particle's mass and charge) are not the values you measure; the measured values already include the effects of all the vacuum fluctuations swirling around the particle. Once you carefully account for the scale at which you are looking, the infinities cancel and finite, correct predictions remain. The related <strong>renormalization group</strong> — the very same idea borrowed from statistical mechanics — explains how the strength of forces <em>changes with energy scale</em>. Remarkably, the strong force gets <em>weaker</em> at high energies (asymptotic freedom), which is why quarks behave almost freely when probed hard but are permanently locked inside protons at low energies.</p>

    <h3>Why it matters</h3>
    <p>QFT is not a niche tool; it is the language of fundamental physics. The entire Standard Model of particle physics is a quantum field theory. The same mathematics, transplanted, describes phase transitions, superconductors and the collective behaviour of matter in condensed-matter physics. It is the closest thing we have to a description of what everything is <em>made of</em> at the deepest accessible level.</p>
  `,
  keyIdeas: [
    "The fundamental objects are quantum fields filling all space; particles are quantised ripples in them.",
    "QFT unites quantum mechanics with special relativity and naturally allows particles to be created and destroyed.",
    "The vacuum is not empty: quantum fields fluctuate, producing measurable effects like the Casimir force.",
    "Forces arise from the exchange of field quanta (photons, gluons, W and Z bosons), organised by Feynman diagrams.",
    "QED is the most accurately tested theory in science, matching experiment to about one part in a trillion.",
    "Renormalization removes naive infinities and explains how force strengths run with energy scale (e.g. asymptotic freedom)."
  ],
  talk: {
    oneliners: [
      "Quantum field theory's big shift: reality is made of fields, and particles are just ripples in them — that's why all electrons are identical.",
      "QFT is what you get when you insist on quantum mechanics and special relativity at the same time; that forces particle creation and destruction.",
      "Empty space isn't empty — quantum fields jitter, and those vacuum fluctuations have measurable effects.",
      "Forces are the exchange of particles; QED, the theory of light and electrons, is accurate to a part in a trillion."
    ],
    myths: [
      { m: "Particles are tiny solid balls that fields push around.", t: "In QFT particles ARE the fields — localised excitations of them; there is no separate ball underneath." },
      { m: "Renormalization is a fudge to sweep infinities under the rug.", t: "It is a physically meaningful accounting for the scale of observation; the 'infinities' reflect using the wrong (bare) parameters." },
      { m: "Virtual particles are real particles briefly appearing.", t: "They are bookkeeping terms in a calculation (internal lines of Feynman diagrams), not directly observable objects, though their collective effects are real." }
    ],
    terms: [
      { term: "Quantum field", def: "A quantum entity defined at every point in spacetime; its excitations are particles." },
      { term: "Excitation / quantum", def: "A discrete packet of energy in a field, perceived as a particle." },
      { term: "Vacuum fluctuations", def: "Unavoidable quantum jitter of fields even in empty space." },
      { term: "Feynman diagram", def: "A pictorial, calculable representation of particle interactions." },
      { term: "QED", def: "Quantum electrodynamics — the QFT of electrons and photons; extraordinarily accurate." },
      { term: "Renormalization / running coupling", def: "The scheme handling scale-dependence; force strengths change with energy." }
    ]
  },
  test: [
    { q: "What is the central conceptual shift in quantum field theory?", a: "That fields, not particles, are fundamental. A quantum field fills all of space, and each particle is a quantised excitation (ripple) of a field. This is why all particles of a given type are perfectly identical." },
    { q: "Why can't ordinary quantum mechanics handle high-energy physics?", a: "It assumes a fixed number of particles, but relativity (E = mc²) allows energy to create and destroy particles. QFT, being fields, naturally accommodates changing particle number, uniting quantum mechanics with special relativity." },
    { q: "How do forces work in QFT?", a: "Through the exchange of force-carrier particles: electromagnetism via photons, the strong force via gluons, the weak force via W and Z bosons. Feynman diagrams represent and quantify these exchanges." },
    { q: "What problem does renormalization solve, and what deeper idea does it reveal?", a: "Naive QFT calculations give infinities; renormalization removes them by recognising that measured parameters already include vacuum effects at a given scale. It reveals that force strengths 'run' with energy — e.g. the strong force weakens at high energy (asymptotic freedom)." }
  ],
  resources: [
    { name: "David Tong — Quantum Field Theory", desc: "The go-to free graduate QFT notes; famously readable.", url: "https://www.damtp.cam.ac.uk/user/tong/qft.html", type: "notes", icon: "📄" },
    { name: "Mark Srednicki — Quantum Field Theory (full book, free)", desc: "Complete textbook draft available online.", url: "https://web.physics.ucsb.edu/~mark/qft.html", type: "book", icon: "📚" },
    { name: "MIT 8.323 — Relativistic Quantum Field Theory I", desc: "Graduate QFT course with lecture notes.", url: "https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/", type: "course", icon: "🎓" },
    { name: "Susskind — Advanced Quantum Mechanics / QFT lectures", desc: "Accessible route into field-theory ideas.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});
