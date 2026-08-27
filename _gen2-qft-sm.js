/* ===== REWRITTEN AT DEPTH: qft (track 3) and sm (track 4) ===== */

addModule({
  id: "qft", track: "quantum", order: 3,
  title: "Quantum field theory",
  fields: ["qft","quantum"], readMins: 28,
  summary: "The deepest layer of reality we know: not particles, but quantum fields filling all space. Particles are just their ripples.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum field theory is the framework you are forced into if you insist on quantum mechanics and special relativity at once, and it is the deepest description of nature physicists possess. Its central move is a change of worldview: <strong>the fundamental objects are fields, not particles</strong>. There is one electron field spread through all of space, one photon field, one for each kind of quark. What we call a particle is a <strong>quantised excitation</strong> of one of them — a ripple carrying a discrete packet of energy and momentum. That immediately explains something otherwise inexplicable: every electron ever measured has exactly the same mass, charge and spin, because every electron is the same ripple in the same single field. There is no factory tolerance because there is no factory. This module is the machinery — how you quantise a field, what the vacuum turns out to be, and why one demand, that a symmetry hold separately at every point, manufactures the forces of nature.</p>

    <h3>Why relativity forces field theory</h3>
    <p>Ordinary quantum mechanics describes a fixed number of particles: one electron in a box, two in an atom. That assumption is quietly incompatible with relativity. Once energy can be converted into mass through E = mc squared, particle number cannot be conserved. Collide two protons hard enough and a spray of pions, kaons and antiprotons appears that was not there before. Any theory fixing the particle count in advance cannot describe it.</p>
    <p>There is a sharper version worth carrying around, because it says where the trouble starts. Try to pin down a particle's position ever more precisely. Uncertainty means a tighter position implies a wider spread in momentum, and so in energy. Push the localisation below the particle's <strong>Compton wavelength</strong> and the energy uncertainty exceeds the cost of creating a fresh particle–antiparticle pair.</p>
    <div class="eq">λ = ℏ / (mc)
      <span class="why">The Compton wavelength of a particle of mass m. Try to confine the particle inside a region smaller than this and the energy required is enough to make new pairs, so instead of one sharply located particle you get several fuzzy ones. Single-particle quantum mechanics stops making sense exactly here.</span></div>
    <p>So the notion of a well-localised single particle dissolves at short distances. A field has no such problem: it is defined at every point of spacetime whatever is happening, and adding energy simply excites more ripples. Creation and destruction are built into the object rather than bolted on.</p>

    <h3>Quantising a field: operators and the Fock space</h3>
    <p>The standard route is <strong>canonical quantisation</strong> — the recipe that turned classical mechanics into quantum mechanics, applied to a system with infinitely many degrees of freedom. There you promote position and momentum from numbers to operators obeying a commutation relation. Here you do the same to the field value at each point and its conjugate momentum.</p>
    <div class="eq">[ φ(x), π(y) ] = iℏ δ(x − y)
      <span class="why">The field and its conjugate momentum at the same instant fail to commute, exactly as position and momentum do for a single particle. The delta function says the relation holds point by point: each location in space is an independent degree of freedom, so a field is effectively an infinite collection of coupled oscillators.</span></div>
    <p>That last remark is the whole trick. Expand the field in modes and a free field is mathematically a set of harmonic oscillators, one per momentum — and the harmonic oscillator is the one problem in quantum mechanics solved completely, using raising and lowering operators. Transplanted into field theory these become <strong>creation and annihilation operators</strong>, adding or removing one quantum of a given momentum. Start from the state with none of them, the vacuum, and apply creation operators repeatedly, and you build the whole space of states, the <strong>Fock space</strong>, in which particle number is a variable rather than an input. Notice that particles were never assumed. They are outputs of the procedure, and their spin and mass appear as labels classifying how the field transforms under the Poincaré group — which is why relativity itself dictates what kinds of particle can exist.</p>

    <h3>The vacuum is an active medium</h3>
    <p>If every mode is an oscillator, every mode has a zero-point energy, because a quantum oscillator cannot sit perfectly still without violating uncertainty. The ground state of a field is therefore not nothing but a state of unavoidable jitter, and that jitter is measurable on a bench.</p>
    <div class="callout"><b>Two hard experimental facts:</b> the <em>Lamb shift</em> — two hydrogen levels that the Dirac equation says must have identical energy are split by about a thousand megahertz, because the electron is continually interacting with the fluctuating electromagnetic field. And the <em>Casimir effect</em> — two uncharged parallel plates in vacuum attract, because the plates exclude some field modes from the gap and the resulting imbalance of zero-point pressure pushes them together. Neither effect has any classical explanation. Empty space is a medium with structure.</div>
    <p>An honest caveat comes attached. Sum the zero-point energies of all modes and the vacuum energy diverges; cut it off at the Planck scale and you get an absurd number, some 120 orders of magnitude larger than the dark energy observed. This <strong>cosmological constant problem</strong> is the worst quantitative failure in physics. The theory tells you the vacuum is active and then cannot tell you what it weighs.</p>

    <h3>Lagrangians, and symmetry as the design principle</h3>
    <p>Nobody builds a field theory by guessing equations of motion. You write down a <strong>Lagrangian density</strong> — one scalar function of the fields and their derivatives — and the equations follow by extremising its integral, the action. The advantage is that constraints are far easier to impose on a single scalar than on a set of coupled differential equations: make the Lagrangian Lorentz invariant and every equation it generates is automatically relativistic.</p>
    <p>Symmetry then does two jobs. Noether's theorem converts each continuous symmetry into a conserved quantity — time translation gives energy, rotation gives angular momentum, an internal phase symmetry gives electric charge. The less obvious half is that symmetry is a <em>construction principle</em>. Fix the group and the field content, write down every term the symmetry allows up to a given number of derivatives, and the theory is essentially determined. The Standard Model Lagrangian is not a lucky guess; it is close to the most general thing its symmetries permit.</p>

    <h3>Local gauge invariance: the symmetry that manufactures a force</h3>
    <p>This is the deepest single idea in modern physics, and it is worth going slowly. Start with the Dirac Lagrangian for a free electron field. It is unchanged if you multiply the field by a constant phase factor — rotate the phase of every electron everywhere by the same amount and nothing observable alters. That is a <strong>global</strong> U(1) symmetry, and by Noether it gives conservation of electric charge.</p>
    <p>Now ask a more demanding question. Why should the phase convention chosen here have to match the one chosen on the other side of the galaxy? Insist instead that the phase can be rotated by a different amount at every point — a <strong>local</strong> symmetry. The free Lagrangian promptly fails, and it fails for a specific reason: the derivative compares the field at neighbouring points, and if the two points have been rotated differently, the comparison picks up a spurious extra term proportional to the rate of change of the phase.</p>
    <p>The fix is to introduce a new field whose whole job is to absorb that unwanted term, so that comparisons between neighbouring points become meaningful again. Replace the ordinary derivative with a <strong>covariant derivative</strong>:</p>
    <div class="eq">D = ∂ − i g A
      <span class="why">The ordinary derivative is replaced by one containing a new vector field A, coupled with strength g. When the local phase is rotated, A shifts by exactly the amount needed to cancel the unwanted term from the derivative, so the Lagrangian is invariant again. The price of local symmetry is a new field — and that field is the photon.</span></div>
    <p>Three things now follow without further input, and they are the reason the argument is celebrated. First, the new field must be a <strong>spin-1 boson</strong>, because it has to carry a spacetime index to pair with the derivative. Second, it must be <strong>massless</strong>: a mass term for it would not be gauge invariant, so gauge symmetry forbids it, which is why electromagnetism has infinite range. Third, giving the new field its own dynamics in the simplest gauge-invariant way reproduces <strong>Maxwell's equations exactly</strong>. Electromagnetism has not been assumed; it has been derived from a demand about phase conventions.</p>
    <p>Replace the phase group U(1) with a non-abelian group and you get <strong>Yang–Mills theory</strong>. Because the group elements no longer commute, the gauge fields themselves carry the charge they mediate, so they interact with one another. That single structural difference is what makes gluons behave nothing like photons, and it is the origin of confinement and asymptotic freedom.</p>
    <div class="callout"><b>The nuance a good examiner will probe:</b> a gauge symmetry is strictly a <em>redundancy</em> in the description, not a symmetry relating physically distinct states — two gauge-equivalent configurations are the same physical situation. So gauge invariance does not literally cause a force to exist. What it does is drastically constrain what theories are possible, and the constraint is so tight that the force is essentially the only thing that can fill the gap. That is why the slogan works even though the strict statement is subtler.</div>

    <h3>Path integrals, and diagrams as bookkeeping</h3>
    <p>Canonical quantisation is not the only formulation. Feynman's <strong>path integral</strong> takes a completely different starting point: to get the amplitude for a system to go from one configuration to another, sum over every conceivable history connecting them, each weighted by a phase.</p>
    <div class="eq">amplitude = sum over all histories of exp(iS/ℏ)
      <span class="why">S is the action of each history. Every path contributes with equal magnitude but a different phase. Wildly non-classical paths have rapidly varying phases and cancel against their neighbours; near the path of stationary action the phases line up and add. Classical least action is what quantum interference looks like when the action is large compared with Planck's constant.</span></div>
    <p>The payoff is conceptual and practical at once. Symmetries are manifest because the action is a scalar, gauge theories are far easier to handle, and the connection to statistical mechanics becomes explicit: rotate time to imaginary values and the path integral turns into a partition function, which is why the same techniques describe boiling water and colliding protons.</p>
    <p>Expanding the path integral perturbatively in the coupling produces a series of integrals, and <strong>Feynman diagrams</strong> are the notation for keeping track of them. A diagram is a mnemonic for a specific mathematical expression, not a photograph. External lines correspond to particles that really are prepared or detected. Internal lines are terms in an integral. Those internal lines are what people call <strong>virtual particles</strong>, and they are not objects: they need not satisfy the relation between energy, momentum and mass that real particles obey, their number depends on which order you truncate the series at, and choosing a different but equivalent calculational scheme changes them entirely. The measurable consequences are real; the little pictures are not.</p>

    <h3>Renormalisation and effective field theory</h3>
    <p>Push perturbation theory past the leading order and the loop integrals diverge, because you are integrating over arbitrarily large internal momenta — that is, over arbitrarily short distances. Historically this looked fatal and the fix looked like a swindle. The modern reading, due largely to Wilson, is that the infinities were telling us something true.</p>
    <p>The honest position is that a quantum field theory is an <strong>effective theory</strong>, valid up to some energy scale and silent above it. Nobody knows what physics operates at the Planck scale, and the divergences are the mathematics protesting at being extrapolated there. Once you accept a cutoff, the parameters in the Lagrangian are not measurable quantities; they are bare values that depend on the cutoff. Express predictions in terms of quantities you actually measure at a stated energy and the cutoff dependence cancels, leaving finite, unambiguous answers.</p>
    <p>The <strong>renormalisation group</strong> makes this dynamic. Change the scale at which you define the couplings and they flow. In quantum electrodynamics vacuum polarisation screens charge, so the effective coupling grows at short distance. In quantum chromodynamics the gluon self-interaction produces the opposite sign and the coupling shrinks at short distance — <strong>asymptotic freedom</strong>, which is why quarks act nearly free inside a proton yet cannot be extracted. The nobel track covers the history of both results; the point here is that both are the same equation with a different sign.</p>

    <h3>Broken symmetry, anomalies, and the same mathematics elsewhere</h3>
    <p>A symmetry of the equations need not be a symmetry of the state they describe. A ferromagnet is described by rotationally invariant physics yet picks a magnetisation direction below its critical temperature. This is <strong>spontaneous symmetry breaking</strong>, and in field theory it happens when the potential has its minimum away from zero field.</p>
    <div class="eq">V = −μ²|φ|² + λ|φ|⁴
      <span class="why">The wrong-sign quadratic term pushes the minimum away from the origin, so the field settles at a non-zero value everywhere — a Mexican-hat potential. The vacuum has picked a direction the Lagrangian did not specify. Excitations along the flat brim are cheap, and excitations up the wall are expensive.</span></div>
    <p>Goldstone's theorem says breaking a continuous global symmetry produces a massless boson for each broken generator, the cheap excitations along the brim; pions are approximately these. Break a <em>gauge</em> symmetry instead and something better happens: the would-be Goldstone bosons become the extra polarisation states that a massless gauge boson lacks, and the gauge boson acquires mass. That is the <strong>Higgs mechanism</strong>, and it is how the W and Z become heavy without spoiling gauge invariance. The radial excitation up the wall of the potential is the Higgs boson itself.</p>
    <p>One further subtlety deserves naming. An <strong>anomaly</strong> is a symmetry of the classical Lagrangian that quantisation destroys. Sometimes this is a gift, as with the anomaly that correctly predicts the neutral pion's decay rate to two photons. For gauge symmetries it is a disaster, since the theory becomes inconsistent — and remarkably, the anomalies of the Standard Model cancel only because the electric charges of quarks and leptons within a generation stand in exactly the right ratio. Consistency ties the two families together.</p>
    <p>Finally, none of this machinery is confined to particle physics. The renormalisation group came from the study of critical points; spontaneous symmetry breaking came from superconductivity; the Higgs mechanism is the relativistic version of what makes a magnetic field die away inside a superconductor. A superconductor is a place where the photon has mass. The same mathematics describes phase transitions, superfluids and the quantum Hall effect, which is the strongest available hint that quantum field theory is less a theory of particles than a general language for systems with many coupled degrees of freedom.</p>
  `,
  keyIdeas: [
    "The fundamental objects are quantum fields filling all space; particles are quantised ripples in them.",
    "QFT unites quantum mechanics with special relativity and naturally allows particles to be created and destroyed.",
    "The vacuum is not empty: quantum fields fluctuate, producing measurable effects like the Casimir force.",
    "Forces arise from the exchange of field quanta (photons, gluons, W and Z bosons), organised by Feynman diagrams.",
    "QED is the most accurately tested theory in science, matching experiment to about one part in a trillion.",
    "Renormalization removes naive infinities and explains how force strengths run with energy scale (e.g. asymptotic freedom).",
    "Demanding that a symmetry hold independently at every point forces a new massless spin-1 field into the theory: local U(1) invariance yields electromagnetism, and non-abelian groups yield self-interacting gauge bosons.",
    "A quantum field theory is an effective theory valid up to some energy scale, and the path integral formulation, spontaneous symmetry breaking and the renormalisation group are shared wholesale with condensed matter physics."
  ],
  talk: {
    oneliners: [
      "Quantum field theory's big shift: reality is made of fields, and particles are just ripples in them — that's why all electrons are identical.",
      "QFT is what you get when you insist on quantum mechanics and special relativity at the same time; that forces particle creation and destruction.",
      "Empty space isn't empty — quantum fields jitter, and those vacuum fluctuations have measurable effects.",
      "Forces are the exchange of particles; QED, the theory of light and electrons, is accurate to a part in a trillion.",
      "The deepest idea in modern physics is that if you demand a symmetry hold separately at every point in space, the mathematics hands you a force to make it work."
    ],
    myths: [
      { m: "Particles are tiny solid balls that fields push around.", t: "In QFT particles ARE the fields — localised excitations of them; there is no separate ball underneath." },
      { m: "Renormalization is a fudge to sweep infinities under the rug.", t: "It is a physically meaningful accounting for the scale of observation; the 'infinities' reflect using the wrong (bare) parameters." },
      { m: "Virtual particles are real particles briefly appearing.", t: "They are bookkeeping terms in a calculation (internal lines of Feynman diagrams), not directly observable objects, though their collective effects are real." },
      { m: "Gauge symmetry is a physical symmetry of nature that creates forces.", t: "It is a redundancy in how we describe a state, but the constraint it imposes is so tight that a massless spin-1 force carrier is essentially the only thing that can satisfy it." }
    ],
    terms: [
      { term: "Quantum field", def: "A quantum entity defined at every point in spacetime; its excitations are particles." },
      { term: "Excitation / quantum", def: "A discrete packet of energy in a field, perceived as a particle." },
      { term: "Vacuum fluctuations", def: "Unavoidable quantum jitter of fields even in empty space." },
      { term: "Feynman diagram", def: "A pictorial, calculable representation of particle interactions." },
      { term: "QED", def: "Quantum electrodynamics — the QFT of electrons and photons; extraordinarily accurate." },
      { term: "Renormalization / running coupling", def: "The scheme handling scale-dependence; force strengths change with energy." },
      { term: "Covariant derivative", def: "An ordinary derivative modified by a gauge field so that comparisons between neighbouring points stay meaningful under a local symmetry." },
      { term: "Effective field theory", def: "A theory deliberately valid only below some energy scale, with unknown high-energy physics absorbed into its measured parameters." }
    ]
  },
  test: [
    { q: "What is the central conceptual shift in quantum field theory?", a: "That fields, not particles, are fundamental. A quantum field fills all of space, and each particle is a quantised excitation (ripple) of a field. This is why all particles of a given type are perfectly identical." },
    { q: "Why can't ordinary quantum mechanics handle high-energy physics?", a: "It assumes a fixed number of particles, but relativity (E = mc²) allows energy to create and destroy particles. QFT, being fields, naturally accommodates changing particle number, uniting quantum mechanics with special relativity." },
    { q: "How do forces work in QFT?", a: "Through the exchange of force-carrier particles: electromagnetism via photons, the strong force via gluons, the weak force via W and Z bosons. Feynman diagrams represent and quantify these exchanges." },
    { q: "What problem does renormalization solve, and what deeper idea does it reveal?", a: "Naive QFT calculations give infinities; renormalization removes them by recognising that measured parameters already include vacuum effects at a given scale. It reveals that force strengths 'run' with energy — e.g. the strong force weakens at high energy (asymptotic freedom)." },
    { q: "Walk through how demanding a local gauge symmetry produces electromagnetism.", a: "The free electron Lagrangian is unchanged by a constant phase rotation. Demand the phase can vary from point to point and the derivative term spoils the invariance, because it compares fields at neighbouring points that have been rotated differently. Restoring invariance requires a new vector field inside a covariant derivative, which shifts to cancel the unwanted term. Gauge invariance then forbids a mass for that field and its simplest kinetic term reproduces Maxwell's equations, so the photon and electromagnetism drop out of the requirement." }
  ],
  resources: [
    { name: "David Tong — Quantum Field Theory", desc: "The go-to free graduate QFT notes; famously readable.", url: "https://www.damtp.cam.ac.uk/user/tong/qft.html", type: "notes", icon: "📄" },
    { name: "David Tong — Gauge Theory", desc: "Where the local gauge principle and Yang–Mills theory are developed properly.", url: "https://www.damtp.cam.ac.uk/user/tong/gaugetheory.html", type: "notes", icon: "📄" },
    { name: "Mark Srednicki — Quantum Field Theory (full book, free)", desc: "Complete textbook draft available online.", url: "https://web.physics.ucsb.edu/~mark/qft.html", type: "book", icon: "📚" },
    { name: "MIT 8.323 — Relativistic Quantum Field Theory I", desc: "Graduate QFT course with lecture notes.", url: "https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/", type: "course", icon: "🎓" },
    { name: "Susskind — Advanced Quantum Mechanics / QFT lectures", desc: "Accessible route into field-theory ideas.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "sm", track: "particles", order: 1,
  title: "The Standard Model & particle physics",
  fields: ["particle","qft"], readMins: 28,
  summary: "Our best inventory of reality: a dozen matter particles, three forces, and the Higgs — held together by symmetry, and confirmed at the LHC.",
  lesson: `
    <h3>The big picture</h3>
    <p>The Standard Model is a single quantum field theory that lists every fundamental particle we have found and describes three of the four forces acting between them. It has survived half a century of increasingly severe testing, including the discovery of the Higgs boson in 2012, and in places it agrees with measurement to parts per billion. It is also, and this is the interesting part, <em>known</em> to be incomplete. It has no gravity, no dark matter, no explanation for the excess of matter over antimatter, and it requires around nineteen numbers to be measured and typed in by hand. So it is simultaneously the most successful theory in the history of science and a very precise signpost pointing at what we do not yet understand. The nobel track covers how each piece was discovered; the quantum-gravity track covers what might lie beyond. This module is about what the theory actually says.</p>

    <h3>The inventory: matter in three generations</h3>
    <p>Matter is built from <strong>fermions</strong>, spin one-half particles that obey the exclusion principle, which is why matter takes up space. They come in two families.</p>
    <ul>
      <li><strong>Quarks</strong> — up, down, charm, strange, top and bottom. They carry colour charge, feel all three forces, and are never seen in isolation. A proton is two up quarks and a down; a neutron is two downs and an up.</li>
      <li><strong>Leptons</strong> — the electron, muon and tau, each paired with its own neutrino. Leptons carry no colour, so they ignore the strong force entirely. Neutrinos interact only weakly, which is why roughly a hundred trillion of them pass through your body each second without effect.</li>
    </ul>
    <p>The awkward fact is that this list repeats. The muon is a heavier copy of the electron and the tau is heavier still, and the quarks and neutrinos duplicate in the same way, giving <strong>three generations</strong> with identical charges and interactions but wildly different masses. Ordinary matter needs only the first. When the muon was identified, Isidor Rabi asked "who ordered that?" and the question is still open. We do know the number is three: measurements of how quickly the Z boson decays fix the number of light neutrino species at 2.99, so there is no fourth conventional generation with a light neutrino. Why three, and why the masses span twelve orders of magnitude from the electron to the top quark, nobody can say.</p>

    <h3>The gauge group, in plain terms</h3>
    <p>The Standard Model is defined by a symmetry group, and every force in it comes from insisting that the symmetry hold independently at each point of spacetime.</p>
    <div class="eq">SU(3) × SU(2) × U(1)
      <span class="why">Three separate local symmetries stacked together. SU(3) acts on the colour charge of quarks and gives the strong force with its eight gluons. SU(2) acts on left-handed particle pairs and U(1) acts on a charge called hypercharge; together these two break down to give the photon plus the W and Z bosons. The number of force carriers is not chosen, it is counted from the group.</span></div>
    <p>Each factor produces its own gauge bosons, and the tally comes straight out of the mathematics: eight gluons from SU(3), three from SU(2), one from U(1). The last four mix, after the Higgs field takes its vacuum value, into the massless photon and the massive W-plus, W-minus and Z. This is the sense in which the Standard Model is not an arbitrary catalogue. Choose the group and the fermion content and the interactions are essentially forced.</p>

    <h3>Quantum chromodynamics: colour, confinement and the origin of mass</h3>
    <p>Quarks carry a charge with three values, whimsically labelled red, green and blue. The crucial structural difference from electromagnetism is that the gluons themselves carry colour, because the SU(3) group is non-abelian. Photons are electrically neutral and pass through one another; gluons pull on each other.</p>
    <p>That self-interaction produces two behaviours with no everyday analogue. <strong>Asymptotic freedom</strong>: probe a proton at very high energy and the coupling is weak, so quarks rattle about almost freely inside. <strong>Confinement</strong>: try to pull two quarks apart and the gluon field collapses into a narrow flux tube whose energy grows roughly linearly with separation, about one giga-electronvolt per femtometre. Keep pulling and it becomes cheaper for the vacuum to create a new quark–antiquark pair than to stretch the tube further, so the string snaps and you get two mesons instead of two free quarks. No isolated quark has ever been observed and the theory says none ever will be.</p>
    <div class="callout"><b>Where your mass actually comes from:</b> add up the rest masses of the three valence quarks in a proton and you get roughly 1 per cent of the proton's mass. The other 99 per cent is the energy of the gluon field and the kinetic energy of the quarks, converted to mass by E = mc squared. Lattice QCD calculations reproduce the proton mass from first principles this way. So almost all of your body's mass is binding energy, not Higgs-given mass.</div>

    <h3>The electroweak sector: why the weak force is weak</h3>
    <p>Electromagnetism and the weak force are two faces of one interaction. Above about 100 giga-electronvolts they behave as a single unified force; below it the Higgs field's vacuum value breaks the symmetry and they separate. The weak force is feeble at everyday energies for one reason only, and it is not that its intrinsic coupling is small — the SU(2) coupling is actually slightly larger than the electromagnetic one.</p>
    <div class="eq">strength ≈ g² / (q² − M²)
      <span class="why">The amplitude for exchanging a force carrier of mass M when the momentum transfer q is small is suppressed by the carrier's mass squared. The W and Z weigh about 80 and 91 giga-electronvolts, so at nuclear energies the denominator is enormous and the interaction is throttled. Massive carriers also mean a range of roughly 0.1 per cent of a proton's radius.</span></div>
    <p>The weak force also has a property no other interaction shares: it distinguishes left from right. The W bosons couple <em>only</em> to left-handed particles and right-handed antiparticles. Parity is not slightly violated, it is maximally violated, a fact established by Wu's cobalt-60 experiment in 1956 and still one of the strangest features of nature. The weak interaction is also the only one that changes a quark's flavour, turning a down into an up and thereby driving beta decay and the fusion chain that powers the Sun.</p>

    <h3>Flavour mixing, the CKM matrix and CP violation</h3>
    <p>Here is a subtlety worth having straight. The quark states with definite mass are not the same states that the weak force acts on. The two bases are related by a rotation, the <strong>CKM matrix</strong>, whose entries say how likely each quark is to convert into each other quark under a W emission. It is close to the identity — up prefers to become down — but the off-diagonal entries are non-zero, which is why a charm quark can decay to a strange quark or, more rarely, a down.</p>
    <p>Because the CKM matrix has three mixing angles and one irreducible complex phase, it cannot be made entirely real. That single phase allows <strong>CP violation</strong>: matter and antimatter behave slightly differently. It was first seen in neutral kaons in 1964 and is now measured precisely in B mesons at LHCb and Belle. This matters enormously, because producing a universe made of matter requires CP violation. The problem is quantitative: the CKM phase supplies an effect around ten orders of magnitude too small to account for the matter we see. Something else must be going on.</p>

    <h3>The Higgs: mass for the bosons, Yukawa couplings for the fermions</h3>
    <p>Gauge invariance forbids writing a mass term for the W and Z by hand, and it also forbids a straightforward mass term for the fermions, because left- and right-handed fields transform differently under SU(2). The Higgs field solves both problems, but by two distinct mechanisms that are often conflated.</p>
    <p>For the gauge bosons the mechanism is genuine and predictive. The Higgs field settles at a non-zero value of about 246 giga-electronvolts everywhere in space, the electroweak symmetry breaks, and three of the four electroweak bosons absorb the would-be Goldstone modes and become massive while one combination stays massless as the photon. The masses of the W and Z, and the precise relationship between them and the weak mixing angle, are <em>predictions</em>, and they are confirmed to fractions of a per cent.</p>
    <div class="eq">m = y v / √2
      <span class="why">A fermion's mass is its Yukawa coupling y multiplied by the Higgs vacuum value v. The couplings run from about 1 for the top quark down to 0.000003 for the electron. Nothing in the theory predicts them — they are measured, then written back in.</span></div>
    <p>For the fermions, then, the Higgs does not explain mass so much as reformulate it. Twelve arbitrary numbers become twelve arbitrary couplings. What it does buy is a testable consequence: the Higgs must couple to each particle in proportion to that particle's mass, and the LHC has now confirmed this pattern for the top, bottom and tau, and more recently for the muon. The pattern holds, which is real evidence, but the values remain unexplained.</p>

    <h3>How we actually know: accelerators, cross sections and resonances</h3>
    <p>All of this rests on a small number of experimental techniques. Accelerators drive beams to high energy and collide them, either against a fixed target or head-on; the LHC reaches 13.6 tera-electronvolts in proton–proton collisions, and the available energy is what sets which particles can be made. Detectors are built in concentric layers: silicon trackers close in to record charged-particle trajectories curving in a magnetic field, which gives momentum and charge; then electromagnetic and hadronic calorimeters to absorb particles and measure energy; then muon chambers on the outside, because muons are the only charged particles that get that far. Neutrinos are inferred from missing momentum.</p>
    <p>The two quantities that carry the physics are the <strong>cross section</strong>, an effective target area with the dimensions of area that expresses how likely a process is, and the <strong>resonance</strong>. A short-lived particle shows up as a bump in the rate plotted against the combined mass of its decay products. The bump's centre gives the mass, and by the uncertainty principle its width gives the lifetime — a broader peak means a shorter-lived particle. That is how the Z was pinned down, how the top quark was found, and how the Higgs appeared in 2012 as an excess near 125 giga-electronvolts in two independent channels. Because interesting events are rare, everything is statistical: the discovery threshold of five standard deviations exists precisely because you are sifting billions of collisions for a handful.</p>
    <p>The precision record is remarkable. The electron's magnetic moment agrees with theory at about a part in a trillion. LEP measured the Z mass to better than a part in ten thousand and confirmed the number of neutrino generations. Predicted particles keep turning up where the theory said: the W and Z in 1983, the top quark in 1995, the Higgs in 2012.</p>

    <h3>Nineteen numbers, and what the Standard Model leaves out</h3>
    <p>Count the inputs and you get roughly nineteen free parameters: nine charged-fermion masses, four CKM parameters, three gauge couplings, the Higgs mass and vacuum value, and the strong CP angle. Add neutrino masses and mixing and it rises to about twenty-six. For a theory claiming to be fundamental this is unsatisfying. It is not a matter of taste: a theory with twenty-six dials is a framework you tune, not an explanation, and the values look neither random nor obviously patterned. The top quark is 340,000 times heavier than the electron and nobody can say why.</p>
    <p>The definite gaps are these. <strong>Gravity</strong> is simply absent; general relativity cannot be quantised the same way. <strong>Dark matter</strong>, about five times more abundant than ordinary matter, has no Standard Model candidate. <strong>Dark energy</strong> is unaccounted for, and the naive field-theory estimate of the vacuum energy is wrong by some 120 orders of magnitude. <strong>Neutrino masses</strong> are established by oscillation experiments but the original theory sets them to zero, so it must be extended. And the <strong>matter–antimatter asymmetry</strong> that allowed anything to exist is far larger than the CKM phase can generate.</p>
    <p>The honest summary is that the Standard Model is right about everything it describes and silent about most of the universe by mass and energy. Both halves of that sentence are why particle physics continues.</p>
  `,
  keyIdeas: [
    "Matter is built from fermions: six quarks and six leptons, arranged in three generations.",
    "Three forces are carried by bosons: the photon (electromagnetism), gluons (strong), and W/Z (weak).",
    "Each force arises from a gauge symmetry — forces are consequences of symmetry.",
    "The strong force confines quarks (they can't be isolated) yet frees them at short range (asymptotic freedom).",
    "The Higgs field gives fundamental particles their mass; its boson was found in 2012.",
    "The Standard Model omits gravity and dark matter and has ~19 unexplained free parameters, so it is incomplete.",
    "The gauge group is SU(3) times SU(2) times U(1): colour gives the eight gluons, while the SU(2) and U(1) factors mix after electroweak symmetry breaking into the massless photon and the massive W and Z.",
    "The Higgs mechanism genuinely predicts the W and Z masses, but fermion masses come from Yukawa couplings that are measured inputs rather than predictions."
  ],
  talk: {
    oneliners: [
      "The Standard Model is our particle inventory: twelve matter particles, three forces via carrier bosons, plus the Higgs — and it's passed every test for fifty years.",
      "Forces come from symmetry: each fundamental force corresponds to a gauge symmetry group that literally generates it.",
      "You can never isolate a single quark — pull them apart and the energy just makes new quarks; that's confinement.",
      "The Higgs field gives the fundamental particles their mass, but most of your body's mass is actually strong-force binding energy, not the Higgs.",
      "The weak force isn't weak because its coupling is small — it's weak because its carriers are heavy, so the interaction is throttled at low energy."
    ],
    myths: [
      { m: "The Higgs boson gives everything its mass.", t: "It gives fundamental particles their mass; most of the proton's (and your) mass is strong-force binding energy via E = mc²." },
      { m: "Quarks could be isolated with a big enough collider.", t: "Confinement means the energy needed to separate them creates new quarks instead; free quarks don't exist at low energy." },
      { m: "The Standard Model is the complete theory of everything.", t: "It excludes gravity and dark matter and leaves ~19 parameters unexplained; it is known to be incomplete." },
      { m: "The Standard Model explains why particles have the masses they do.", t: "It explains the W and Z masses from symmetry breaking, but every fermion mass is a Yukawa coupling measured from experiment and inserted by hand." }
    ],
    terms: [
      { term: "Fermion", def: "Matter particle (quarks and leptons); makes up ordinary matter." },
      { term: "Boson", def: "Force-carrier particle (photon, gluon, W, Z, Higgs)." },
      { term: "Quark / lepton", def: "The two families of fermions; quarks feel the strong force, leptons don't." },
      { term: "Gauge symmetry", def: "The symmetry principle (U(1), SU(2), SU(3)) that generates each force." },
      { term: "Confinement / asymptotic freedom", def: "Quarks can't be isolated, yet feel little force at very short range." },
      { term: "Higgs field / boson", def: "The all-pervading field giving fundamental particles mass; its excitation found in 2012." },
      { term: "CKM matrix", def: "The rotation between quarks as the weak force sees them and quarks of definite mass; its complex phase is the Standard Model's source of CP violation." },
      { term: "Cross section / resonance", def: "The effective area measuring how likely a collision process is, and the bump in rate versus mass that reveals a short-lived particle." }
    ]
  },
  test: [
    { q: "What are the basic building blocks and forces in the Standard Model?", a: "Matter is made of fermions — six quarks and six leptons in three generations. Three forces act via carrier bosons: electromagnetism (photon), the strong force (gluons), and the weak force (W and Z). The Higgs boson relates to the origin of mass." },
    { q: "What is meant by saying 'forces come from symmetry'?", a: "Each fundamental force corresponds to a gauge symmetry group (U(1), SU(2), SU(3)). Requiring the theory to respect these local symmetries produces the forces and their carrier particles — forces are consequences of symmetry." },
    { q: "Explain confinement and asymptotic freedom.", a: "Confinement: the strong force between quarks doesn't fall off with distance, so separating them creates new quarks and no single quark can be isolated. Asymptotic freedom: at very short distances/high energies quarks feel almost no force and move nearly freely." },
    { q: "What does the Higgs field do, and what's the common misconception?", a: "It fills space and gives fundamental particles their mass through their interaction with it. The misconception is that it accounts for all mass; in fact most ordinary mass (e.g. in protons) comes from strong-force binding energy, not the Higgs." },
    { q: "Why is the weak force weak and short-ranged, and what makes it unique among the forces?", a: "Its intrinsic coupling is comparable to the electromagnetic one, but its carriers weigh about 80 and 91 giga-electronvolts, so at low momentum transfer the exchange amplitude is suppressed by the carrier mass squared and the range is under a thousandth of a proton radius. It is unique in violating parity maximally, coupling only to left-handed particles, and in being the only interaction that changes quark flavour." }
  ],
  resources: [
    { name: "David Tong — Gauge Theory", desc: "Free graduate notes on the gauge theories behind the forces.", url: "https://www.damtp.cam.ac.uk/user/tong/gaugetheory.html", type: "notes", icon: "📄" },
    { name: "David Tong — The Standard Model", desc: "Free notes assembling the full Standard Model.", url: "https://www.damtp.cam.ac.uk/user/tong/standardmodel.html", type: "notes", icon: "📄" },
    { name: "MIT 8.701 — Nuclear and Particle Physics", desc: "Full course with lecture notes and problems.", url: "https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/", type: "course", icon: "🎓" },
    { name: "CERN — The Standard Model", desc: "Authoritative, accessible overview from the source.", url: "https://home.cern/science/physics/standard-model", type: "web", icon: "🌐" },
    { name: "Particle Data Group", desc: "The official reference tables and review articles for every measured particle property.", url: "https://pdg.lbl.gov/", type: "web", icon: "🌐" }
  ]
});
