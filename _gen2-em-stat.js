/* ===== REWRITTEN AT DEPTH: em, stat (replaces the thin versions in content-foundations.js) ===== */

addModule({
  id: "em", track: "foundations", order: 3,
  title: "Electromagnetism",
  fields: ["em"], readMins: 32,
  summary: "Maxwell's four equations taken one at a time, the displacement current that made them consistent, why the answer turned out to be light, and how gauge freedom and relativity were both hiding inside.",
  lesson: `
    <h3>The big picture</h3>
    <p>Electromagnetism is the first great <strong>unification</strong> in physics, and it remains the model every later attempt tries to imitate. Two apparently unrelated sciences — one about rubbed amber and lightning, the other about lodestones and compass needles — turned out to be two faces of a single object, the electromagnetic field. Then, in the middle of working out the details, James Clerk Maxwell found that his equations permitted a self-sustaining ripple travelling at a speed he could calculate from two numbers measured on a laboratory bench. The number came out as the speed of light. Nobody had asked what light was. The theory answered anyway.</p>
    <p>Everything electrical, optical and chemical in your daily life sits inside this theory. It is also the template for the rest of fundamental physics: it is the first field theory, the first gauge theory, and the theory whose internal logic forced the discovery of special relativity.</p>

    <h3>Before Maxwell: two sciences, and Faraday's field</h3>
    <p>By 1800 electricity and magnetism were separate, respectable, mostly empirical subjects. Coulomb had measured the inverse-square force between charges; magnets attracted iron and pointed north; nothing obviously connected them. The link came in 1820 when Hans Christian &Oslash;rsted noticed a compass needle twitch as he switched a current on and off. Within months Amp&egrave;re had worked out the force between current-carrying wires, and in 1831 Michael Faraday found the converse: move a magnet near a coil and a current flows. Electricity makes magnetism; changing magnetism makes electricity.</p>
    <p>Faraday's deeper contribution was conceptual, and he had almost no mathematics with which to express it. The Newtonian picture was <strong>action at a distance</strong>: a charge here simply reaches across empty space and pushes a charge there, instantaneously, with nothing in between. Faraday could not believe it. He thought of space as filled with <em>lines of force</em> — real, physical, under tension, spreading out from charges and looping around currents. On this view a charge does not act on distant charges at all. It changes the condition of the space around it, and other charges respond only to the condition <em>where they sit</em>.</p>
    <p>This is the <strong>field</strong>, and it is the single most productive idea in classical physics. It replaces instantaneous influence with a medium that carries influence at a finite speed, and it makes the field a thing in its own right rather than bookkeeping. Maxwell's achievement, between 1861 and 1865, was to give Faraday's intuition an exact mathematical form and then to notice what that form implied.</p>

    <h3>Maxwell's four equations, one at a time</h3>
    <p>All of classical electromagnetism is four statements about how the electric field E and the magnetic field B behave. Two are about <em>divergence</em>: where field lines begin and end. Two are about <em>curl</em>: what makes field lines circulate. You do not need to solve them to understand them; you need to know what each one asserts.</p>

    <h4>Gauss's law: charge is the source of the electric field</h4>
    <div class="eq">&nabla;&middot;E = &rho;/&epsilon;&#8320;
      <span class="why">The divergence of the electric field at a point equals the charge density there, divided by the permittivity of free space. In plain terms: electric field lines are created on positive charge and destroyed on negative charge, and nowhere else. Count the field lines poking out through any closed surface and you have counted the charge inside.</span></div>
    <p>This is Coulomb's inverse-square law restated locally. It says charge is the <strong>source</strong> of E. Everything about capacitors, screening, and why a hollow conductor shields its interior follows from it.</p>

    <h4>Gauss's law for magnetism: there are no magnetic charges</h4>
    <div class="eq">&nabla;&middot;B = 0
      <span class="why">The magnetic field has zero divergence everywhere. Magnetic field lines never start and never stop; they always close on themselves. There is no such thing as an isolated north pole for them to begin on.</span></div>
    <p>Break a bar magnet in half and you do not get a north pole and a south pole in separate hands — you get two smaller magnets. This equation is the mathematical statement of that stubborn experimental fact. It is also the most fragile of the four: nothing in the theory forbids <strong>magnetic monopoles</strong>, Dirac showed in 1931 that a single one anywhere in the universe would explain why electric charge comes in exact multiples, and grand unified theories predict them. We have simply never found one, so we write zero on the right-hand side.</p>

    <h4>Faraday's law: a changing magnetic field drives a circulating electric field</h4>
    <div class="eq">&nabla;&times;E = &minus;&part;B/&part;t
      <span class="why">The curl of the electric field equals minus the rate of change of the magnetic field. A magnetic field that is changing in time wraps an electric field around itself. The minus sign is Lenz's law: the induced effect always opposes the change that produced it, which is why energy is not created for free.</span></div>
    <p>This equation is why the electricity grid exists. Every generator, transformer, induction hob and contactless card reader is Faraday's law in hardware. Conceptually it is the first crack in the separation of the two fields: something magnetic is producing something electric.</p>

    <h4>The Amp&egrave;re&ndash;Maxwell law: currents and changing electric fields drive circulating magnetic fields</h4>
    <div class="eq">&nabla;&times;B = &mu;&#8320;J + &mu;&#8320;&epsilon;&#8320; &part;E/&part;t
      <span class="why">The curl of the magnetic field has two sources: the current density J flowing through the region, and the rate of change of the electric field there. The first term is &Oslash;rsted and Ampere; the second is entirely Maxwell's, and it is the reason the whole set holds together.</span></div>

    <h3>The displacement current: one added term, and everything changes</h3>
    <p>Amp&egrave;re's original law had only the current term, and it is quietly broken. Consider a capacitor being charged. Draw a loop around the wire feeding it and ask what magnetic circulation the law predicts. If you stretch a flat surface across the loop, the wire punctures it, current flows through, and you get an answer. Now stretch a bulging surface through the gap between the capacitor plates instead. Same loop, but no current passes through this surface at all — the charge stops on the plate. The law gives two different answers for the same loop depending on which surface you imagine. That is not a subtlety; it is an outright contradiction, and it is equivalent to the equations violating conservation of charge.</p>
    <p>Maxwell's fix was to notice what <em>is</em> happening between the plates: no charge crosses the gap, but the electric field there is growing. He proposed that a changing electric field acts as a source of magnetic field exactly as a real current does, and he called it the <strong>displacement current</strong>. Add that term and the two surfaces agree, charge conservation is automatic, and the four equations become mathematically consistent for the first time.</p>
    <div class="callout"><b>Why this matters so much:</b> Maxwell added the term for reasons of internal consistency, not because any experiment demanded it. It is the purest case in physics of a theory being repaired on logical grounds and then paying out an enormous, unrequested dividend — because that term is precisely what allows the fields to sustain each other in empty space with no charges and no currents anywhere.</div>

    <h3>Light falls out of the equations</h3>
    <p>Take the four equations in a vacuum: no charges, no currents. Faraday's law says a changing B makes a circulating E. The Amp&egrave;re&ndash;Maxwell law, thanks to the new term, says a changing E makes a circulating B. Each field feeds the other. Combine the two curl equations and both fields separately satisfy the same equation:</p>
    <div class="eq">&nabla;&sup2;E = &mu;&#8320;&epsilon;&#8320; &part;&sup2;E/&part;t&sup2;
      <span class="why">This is the wave equation. Its solutions are disturbances that travel without spreading or needing anything to travel through, at a speed given by one over the square root of the product of the two constants.</span></div>
    <div class="eq">c = 1/&radic;(&mu;&#8320;&epsilon;&#8320;)
      <span class="why">The speed is fixed entirely by the permittivity and permeability of free space — two constants you can measure with a capacitor and a coil, in a laboratory, in the dark, with no reference to light at all. Maxwell put the numbers in and got roughly three hundred thousand kilometres per second.</span></div>
    <p>Fizeau and others had already measured the speed of light to within a per cent of that figure. Maxwell drew the only reasonable conclusion: light <em>is</em> an electromagnetic wave. Radio, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are one phenomenon differing only in wavelength, and optics ceased to be a separate subject. Hertz generated and detected radio waves in 1887 and closed the case experimentally.</p>

    <h3>Potentials and gauge freedom</h3>
    <p>Because B has no divergence, it can always be written as the curl of something, the <strong>magnetic vector potential</strong> A. Feed that into Faraday's law and E can be written in terms of A and the familiar <strong>electric potential</strong> (voltage). Six field components collapse to four potential components, and awkward problems become tractable.</p>
    <p>But something strange comes with the convenience. The potentials are not unique. You can add the gradient of any smooth function you like to A, adjust the voltage to match, and every measurable field comes out identical:</p>
    <div class="eq">A &rarr; A + &nabla;&chi;,&nbsp;&nbsp; V &rarr; V &minus; &part;&chi;/&part;t
      <span class="why">Change the potentials this way, with any function chi you care to invent, and E and B do not budge. The description contains information the world does not.</span></div>
    <p>This redundancy is <strong>gauge freedom</strong>, and the insistence that no physical prediction may depend on which gauge you choose is <strong>gauge invariance</strong>. It looks like a nuisance. It is instead the deepest organising principle we have. Turn the logic round: <em>demand</em> that a theory of charged matter be unchanged when you rotate the quantum phase of the matter field independently at every point in spacetime, and you find you cannot do it unless you introduce a new field that transforms exactly as A does — and the field you are forced to introduce is the electromagnetic field, with Maxwell's equations attached. The force is not put in by hand; it is the price of the symmetry.</p>
    <div class="callout"><b>The template:</b> electromagnetism is the simplest gauge theory, with the simplest possible symmetry group. Make the group richer and the same construction generates the weak force and then the strong force. The entire Standard Model is this one trick, applied three times.</div>

    <h3>The Lorentz force, and fields that carry energy and momentum</h3>
    <p>Maxwell's equations tell you what the fields do given the charges. One more law is needed to tell you what the charges do given the fields:</p>
    <div class="eq">F = q(E + v &times; B)
      <span class="why">A charge feels a push along the electric field regardless of its motion, plus a push at right angles to both its velocity and the magnetic field. The magnetic part is always perpendicular to the motion, which is why magnetic fields bend charged particles into circles but never speed them up.</span></div>
    <p>Together with the four field equations this closes the theory. Now ask where the energy is. When a battery drives a current, energy leaves the battery and appears as heat in the resistor — but it does not travel along inside the wire. It flows through the space around the wire, in the field. The flow is given by the <strong>Poynting vector</strong>:</p>
    <div class="eq">S = (1/&mu;&#8320;) E &times; B
      <span class="why">Energy flows perpendicular to both fields, at a rate set by their product. Sunlight delivering roughly a kilowatt to every square metre of ground is this quantity, arriving.</span></div>
    <p>Fields also carry <strong>momentum</strong>, which is why light exerts pressure, why solar sails work, and why comet tails point away from the Sun. This is not an accounting convenience. If two charges are moved suddenly, the momentum ledger only balances at every instant if you credit the field itself with holding the difference during the light-travel time between them. The field is as real as the particles.</p>

    <h3>Why electromagnetism demanded relativity</h3>
    <p>There is a bomb buried in the wave equation. It predicts one definite speed for light — but relative to <em>what</em>? Newtonian physics says velocities add: light from a moving torch should outrun light from a stationary one. Maxwell's equations refuse. Worse, apply the Galilean transformation to them and they change form, which would mean electromagnetism is only correct in one special frame of reference. The nineteenth century named that frame the aether and went looking for it; Michelson and Morley found nothing.</p>
    <p>Einstein's 1905 resolution was to take the equations at their word. The speed of light really is the same for every observer, the aether is unnecessary, and it is space and time that must give way. The transformation rules connecting frames become the Lorentz transformations, under which Maxwell's equations are exactly invariant — they needed no modification at all, which is remarkable given that Newtonian mechanics needed rebuilding from the ground up. The <em>frames</em> module works through the Galilean and Lorentz transformations in detail; the point here is that special relativity was already inside electromagnetism, waiting to be noticed.</p>
    <p>The unification then goes one level deeper. Consider a current-carrying wire, electrically neutral overall, with a charge drifting alongside it. In your frame the charge is moving through a magnetic field and feels a magnetic force. Ride along with the charge and it is not moving at all, so there can be no magnetic force — yet it must still be deflected, because whether it hits the wire cannot depend on who is watching. In that frame the resolution is that length contraction affects the moving positive lattice and the moving conduction electrons by different amounts, so the wire is no longer neutral, and what you called magnetism has become plain electrostatic attraction. <strong>Magnetism is electrostatics seen from a moving frame.</strong> It is a relativistic effect visible at walking pace, only because the electric force is so overwhelmingly strong that a tiny relativistic correction to it is still enough to lift iron filings.</p>
    <p>Formally, E and B are not two fields at all. They are the six independent components of a single antisymmetric object, the <strong>electromagnetic field tensor</strong>, and changing frame simply rotates their values into one another the way changing your viewpoint rotates the x and y components of a vector. Written in tensor form, Maxwell's four equations collapse into two, and the theory looks like what it always was: one field, one law, and light as its own free-standing excitation.</p>
  `,
  keyIdeas: [
    "Electromagnetism unified electricity, magnetism and light into one field theory.",
    "Charges and currents create fields; other charges respond to the local field, not to distant charges directly.",
    "Maxwell's four equations describe sources and circulation of the electric and magnetic fields.",
    "Light is a self-sustaining electromagnetic wave travelling at c, spanning radio to gamma rays.",
    "Gauge symmetry — the freedom to redefine potentials without changing fields — is the template for all fundamental forces.",
    "Maxwell's equations imply a universal speed of light, which forced the discovery of special relativity.",
    "Maxwell's displacement current was added purely to remove an inconsistency in Ampere's law, and it is the term that makes electromagnetic waves possible at all.",
    "Fields carry energy and momentum in their own right, transported by the Poynting vector; magnetism is electrostatics viewed from a moving frame, and E and B are components of one field tensor."
  ],
  talk: {
    oneliners: [
      "Maxwell's real achievement was unification: electricity, magnetism and light turned out to be one thing.",
      "The fourth equation's extra term is what lets fields sustain each other and travel as light through empty space.",
      "Electric and magnetic fields are the same field viewed from different states of motion — that's why EM secretly required relativity.",
      "Gauge symmetry started here in electromagnetism and became the organising principle for every fundamental force.",
      "Maxwell got the speed of light from a capacitor and a coil — two bench constants, no optics involved, and out came three hundred thousand kilometres per second."
    ],
    myths: [
      { m: "Electric and magnetic fields are fundamentally different things.", t: "They are two aspects of one electromagnetic field; what looks electric to one observer can look magnetic to another moving observer." },
      { m: "Charges push each other across empty space instantly.", t: "They interact through the field, and disturbances travel at the speed of light, not instantaneously." },
      { m: "Light needs a medium (the 'ether') to travel through.", t: "The Michelson–Morley experiment found no ether; light is a self-supporting field disturbance needing no medium." },
      { m: "Maxwell added the displacement current because an experiment showed Ampere's law was wrong.", t: "No experiment demanded it. He added it because Ampere's law gave contradictory answers for the same loop and violated charge conservation. The prediction of light was an unrequested bonus." }
    ],
    terms: [
      { term: "Electromagnetic field", def: "The combined electric and magnetic field filling space; carries energy and momentum." },
      { term: "Gauss's law", def: "Charge is the source of the electric field." },
      { term: "Faraday's law", def: "A changing magnetic field induces a circulating electric field." },
      { term: "Gauge symmetry", def: "Freedom to change the potentials without changing any measurable field; the deep principle behind the forces." },
      { term: "Poynting vector", def: "Describes the flow of energy carried by an electromagnetic field." },
      { term: "Electromagnetic spectrum", def: "All EM waves by wavelength: radio, micro, infrared, visible, UV, X-ray, gamma." },
      { term: "Displacement current", def: "Maxwell's extra term: a changing electric field sources a magnetic field just as a real current does." },
      { term: "Field tensor", def: "The single antisymmetric object whose six components are the electric and magnetic fields; changing frame rotates them into each other." }
    ]
  },
  test: [
    { q: "What did Maxwell unify, and what did it reveal about light?", a: "He unified electricity and magnetism into a single electromagnetic field theory. His equations predicted self-propagating field waves moving at a speed equal to the measured speed of light, revealing that light is an electromagnetic wave." },
    { q: "In one line each, what do Maxwell's four equations say?", a: "1) Charge sources the electric field. 2) There are no magnetic monopoles. 3) A changing magnetic field makes a circulating electric field. 4) Currents and changing electric fields make a circulating magnetic field." },
    { q: "Why did electromagnetism force the discovery of relativity?", a: "Maxwell's equations give a single definite speed of light with no preferred frame, contradicting Newtonian velocity addition. Einstein accepted that c is the same for all observers, which required rethinking space and time — special relativity." },
    { q: "What is gauge symmetry and why does it matter beyond EM?", a: "It is the freedom to redefine the electromagnetic potentials without changing observable fields. Demanding this symmetry generates the electromagnetic force, and generalised gauge symmetries generate the strong and weak forces too." },
    { q: "Why did Ampere's law need the displacement current, and what did adding it buy?", a: "Without it the law gives different answers for the same loop depending on which surface you stretch across it, as with a charging capacitor, and it is inconsistent with charge conservation. Adding a term in which a changing electric field sources a magnetic field fixes both problems. It also lets E and B sustain each other in empty space, which is what makes electromagnetic waves, and therefore light, possible." }
  ],
  resources: [
    { name: "David Tong — Electromagnetism", desc: "Excellent free notes; Maxwell, waves, gauge potentials and the relativistic formulation.", url: "https://www.damtp.cam.ac.uk/user/tong/em.html", type: "notes", icon: "📄" },
    { name: "MIT 8.02 — Electricity & Magnetism", desc: "Full introductory course with demos, problems and video.", url: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. II", desc: "The classic treatment of fields, including the finest discussion of field energy and momentum anywhere.", url: "https://www.feynmanlectures.caltech.edu/II_toc.html", type: "book", icon: "📚" },
    { name: "MIT 8.07 — Electromagnetism II", desc: "The graduate-level follow-up (Jackson territory): radiation, waveguides, covariant formulation.", url: "https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/", type: "course", icon: "🎓" },
    { name: "Susskind — Special Relativity and Classical Field Theory", desc: "Lecture course deriving electromagnetism as a relativistic gauge field.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "stat", track: "foundations", order: 4,
  title: "Statistical mechanics & thermodynamics",
  fields: ["statistical"], readMins: 32,
  summary: "The two-level structure of thermal physics: the laws of thermodynamics from above, and the counting of microstates that derives them from below, through ensembles, partition functions, quantum statistics and critical phenomena.",
  lesson: `
    <h3>The big picture</h3>
    <p>Thermal physics runs on two levels at once, and keeping them apart is half the battle. <strong>Thermodynamics</strong> is the view from above: a small set of laws relating heat, work, temperature and entropy, derived from experiment in the age of steam and valid for engines, chemical reactions, black holes and lumps of rubber alike. Its power is precisely that it does not care what the system is made of. <strong>Statistical mechanics</strong> is the view from below: an account of where those laws come from, given that matter is made of unimaginable numbers of particles obeying ordinary mechanics.</p>
    <p>The central miracle is that reliable, near-certain laws emerge from blind randomness. No single air molecule obeys the gas laws. A mole of them obeys them to a precision no instrument can challenge, because the relative size of fluctuations shrinks like one over the square root of the number of particles, and that number has twenty-three zeros after it. Statistical mechanics is also the discipline that first found the limits of classical physics, and the place where physicists learned that collective behaviour can be genuinely new.</p>

    <h3>Thermodynamics: laws that do not care what you are made of</h3>
    <p>Thermodynamics was assembled before anyone had to believe in atoms, which is why it survived the quantum revolution untouched. It works with a handful of macroscopic variables — temperature, pressure, volume, energy, entropy — and makes statements no microscopic detail can overturn. Einstein called it the only physical theory of universal content he was convinced would never be overthrown. Four laws do the work, and each is best understood by what it <em>forbids</em>.</p>

    <h4>The zeroth law</h4>
    <p>If A is in thermal equilibrium with C and B is in thermal equilibrium with C, then A and B are in equilibrium with each other. This sounds like a triviality and is not: it is the statement that makes temperature a well-defined property of a body at all, rather than a fact about a particular pairing. Without it thermometers would not work. It forbids intransitive equilibrium.</p>

    <h4>The first law</h4>
    <p>Energy is conserved once you count heat as a form of energy transfer. Formally, the change in a system's <strong>internal energy</strong> equals the heat added minus the work done by the system.</p>
    <div class="eq">dU = &delta;Q &minus; &delta;W
      <span class="why">Internal energy U is a property the system possesses. Heat Q and work W are not — they are two different channels for energy crossing the boundary. Work is energy transferred through a coordinated, macroscopic push, like a piston moving. Heat is energy transferred through uncoordinated microscopic jostling. A given internal energy can be reached by any mixture of the two, which is why the small d and the deltas are written differently.</span></div>
    <p>What it forbids: perpetual motion of the first kind, a machine that produces energy from nothing.</p>

    <h4>The second law</h4>
    <p>The entropy of an isolated system never decreases. Equivalently, in Clausius's form, heat does not flow spontaneously from a colder body to a hotter one; in Kelvin's form, no cyclic process can convert heat entirely into work with no other effect. What it forbids is perpetual motion of the second kind — an engine drawing heat from the ocean and driving a ship with it, which would break no conservation law whatsoever, and yet cannot be built. This law is what makes the universe interesting, and it is the only fundamental law with a direction built in. That direction, and the deep problem it raises, is the subject of the <em>entropy and the arrow of time</em> module; here we stay with the machinery.</p>

    <h4>The third law</h4>
    <p>As temperature approaches absolute zero the entropy approaches a constant, which for a perfect crystal is zero. What it forbids is reaching absolute zero in any finite number of steps: each halving of the temperature costs more than the last, without limit. It also fixes the zero point of the entropy scale, turning entropy from a quantity defined only up to a constant into an absolute one.</p>

    <h3>Entropy from two directions</h3>
    <p>Entropy arrives twice in the history of physics, from opposite ends, and the fact that the two definitions agree is the foundation on which the whole subject rests. Clausius came first, in 1865, working entirely with steam engines and no atoms:</p>
    <div class="eq">dS = &delta;Q(reversible)/T
      <span class="why">Add a small amount of heat reversibly to a system at temperature T and its entropy rises by that heat divided by T. Defined this way entropy is purely operational — measurable with a thermometer and a calorimeter, with no interpretation attached and no idea what it means.</span></div>
    <p>Boltzmann came second, from the atoms, and gave it meaning:</p>
    <div class="eq">S = k ln W
      <span class="why">Entropy is Boltzmann's constant times the logarithm of W, the number of microscopic arrangements consistent with the macroscopic state you have specified. The logarithm is what makes entropy additive: combine two independent systems and the counts multiply while the entropies add.</span></div>
    <p>The two agree, and the agreement is a genuine theorem rather than a definition. Compute the microstate count for an ideal gas, take the logarithm, and you recover exactly the entropy Clausius had already measured, Boltzmann's constant serving only to convert between units of counting and units of joules per kelvin. That is the moment thermodynamics became derived rather than fundamental.</p>

    <h3>Microstates, macrostates and the three ensembles</h3>
    <p>A <strong>microstate</strong> is a complete specification of the system: every position and momentum, or in quantum language, one particular state vector. A <strong>macrostate</strong> is what you can actually measure — energy, volume, particle number, temperature — and it corresponds to an enormous set of microstates. <strong>Multiplicity</strong> W is how many. The whole subject is the art of counting these without ever writing them down.</p>
    <p>How you count depends on what the system is allowed to exchange with its surroundings, and that gives three standard <strong>ensembles</strong>:</p>
    <ul>
      <li><strong>Microcanonical:</strong> the system is isolated. Energy, volume and particle number are all fixed. The founding assumption is that every accessible microstate of that energy is equally likely, and entropy is just k times the log of how many there are. Conceptually the cleanest, computationally the most painful.</li>
      <li><strong>Canonical:</strong> the system sits in contact with a large heat bath at temperature T and can exchange energy with it. Energy now fluctuates; temperature is fixed. This describes almost every real experiment, because almost everything is in thermal contact with a room.</li>
      <li><strong>Grand canonical:</strong> the system exchanges both energy and particles with a reservoir, at fixed temperature and chemical potential. Essential for gases in equilibrium with a surface, for electrons in a metal, and for anything where particle number is not conserved.</li>
    </ul>
    <p>In the canonical ensemble the probability of a state falls exponentially with its energy — the <strong>Boltzmann distribution</strong> — and summing that weight over every state gives the single most useful object in the subject:</p>
    <div class="eq">Z = &Sigma; exp(&minus;E/kT)
      <span class="why">The partition function Z sums the Boltzmann factor over all states. It looks like a normalisation constant. It is not: it is a generating function. Take the logarithm and differentiate it with respect to temperature and you get the energy; with respect to volume and you get the pressure; with respect to chemical potential and you get the particle number. Every thermodynamic quantity is a derivative of ln Z.</span></div>
    <div class="callout"><b>The practical upshot:</b> compute Z once and you are finished. This is why statistical mechanics is a calculational subject rather than a philosophical one — the entire thermodynamics of a system is encoded in a single sum, and the work is in evaluating it.</div>

    <h3>Temperature is a derivative, and it can go negative</h3>
    <p>Temperature is not "how hot something feels" and it is not "how much heat something contains". Its actual definition is structural:</p>
    <div class="eq">1/T = &part;S/&part;U
      <span class="why">Temperature is the reciprocal of how fast entropy rises when you add energy. A cold system gains a lot of entropy per joule, so it is greedy for energy; a hot system gains little, so it gives energy up readily. Heat flows from hot to cold because that transfer raises the total entropy of the pair.</span></div>
    <p>This is not a reformulation for elegance — it is what temperature <em>is</em>, and it explains the second law's directionality in one line. It also has a startling consequence. Almost all systems have entropy that keeps rising with energy, so T is positive. But a system with a bounded energy spectrum, such as a set of spins that can only be up or down, runs out of room: past the halfway point, adding energy <em>reduces</em> the number of available arrangements, so the derivative flips sign and the temperature is negative.</p>
    <p>A negative-temperature system is not cold. It is hotter than infinitely hot: put it in contact with any positive-temperature body and energy flows out of it, every time. The sensible ordering of temperatures runs from plus zero up through plus infinity, then wraps to minus infinity and comes back up to minus zero. Population-inverted laser media are exactly this, which is why they emit so eagerly.</p>

    <h3>Free energy: what systems actually minimise</h3>
    <p>An isolated system maximises its entropy. But real systems are not isolated — they sit in a room, and the room is part of the entropy budget. Maximising the total entropy of system plus surroundings, at fixed temperature, turns out to be identical to minimising a property of the system alone:</p>
    <div class="eq">F = U &minus; TS
      <span class="why">The Helmholtz free energy. At fixed temperature and volume, a system settles where F is smallest. The two terms compete: U pulls towards low-energy, ordered configurations, while the minus TS term rewards states with many arrangements. Temperature sets the exchange rate between order and possibility.</span></div>
    <p>This single competition explains an enormous amount. Ice melts at zero degrees not because the water molecules gain energy for free but because above that temperature the entropy term outweighs the energy cost of breaking the crystal. Proteins fold, mixtures separate, and rubber contracts when heated, all for the same reason. At constant pressure the relevant quantity is the Gibbs free energy, which is why chemists use it for everything. <strong>Systems do not minimise energy; they minimise free energy.</strong> Saying otherwise is the single most common error in popular accounts.</p>

    <h3>Where classical counting fails, and quantum statistics</h3>
    <p>Classical statistical mechanics makes a clean prediction called <strong>equipartition</strong>: at equilibrium every quadratic degree of freedom holds an average energy of one half kT. Predict the heat capacity of a gas by counting degrees of freedom and you often get the right answer. Often — but not always, and the failures are spectacular.</p>
    <ul>
      <li><strong>Heat capacities collapse when cold.</strong> Diatomic gases behave as though their vibrational modes simply are not there at room temperature, and solids lose their heat capacity entirely as they approach absolute zero, in flat contradiction of the classical Dulong&ndash;Petit result. Einstein and then Debye showed why: if the energy levels of a mode are spaced further apart than kT, that mode cannot be excited at all. It is frozen out. Degrees of freedom switch off one by one as you cool.</li>
      <li><strong>The ultraviolet catastrophe.</strong> Apply equipartition to the electromagnetic field in a hot cavity and every one of the infinitely many short-wavelength modes claims its half kT. The predicted energy density diverges: any warm object should blaze with infinite ultraviolet. Planck's 1900 fix — that a mode of frequency f can only hold energy in whole multiples of hf, so high-frequency modes are too expensive to excite — was the first quantum hypothesis in physics, and he regarded it as a mathematical trick for years.</li>
    </ul>
    <p>Quantum mechanics also changes the counting itself, because identical particles are genuinely indistinguishable: swapping two of them does not produce a new microstate, and the classical overcount produces nonsense such as entropy that is not additive (the Gibbs paradox). Worse, particles come in two kinds with opposite behaviour. <strong>Fermions</strong> — electrons, protons, neutrons — refuse to share a state, giving Fermi&ndash;Dirac statistics, the Pauli exclusion principle, the structure of the periodic table, the rigidity of ordinary matter, and the degeneracy pressure holding up white dwarfs. <strong>Bosons</strong> — photons, helium-4 atoms — prefer to pile into the same state, giving Bose&ndash;Einstein statistics, lasers, superfluidity, and Bose&ndash;Einstein condensation. Identical statistics, one sign difference, two completely different worlds.</p>

    <h3>Phase transitions, universality and emergence</h3>
    <p>Heat a magnet and above a critical temperature it abruptly stops being magnetic. Cool water and it abruptly becomes ice. A <strong>phase transition</strong> is a point where a thermodynamic quantity becomes non-analytic — where the free energy has a kink — and the striking thing is that this can happen at all, since the free energy is built from perfectly smooth ingredients. It only occurs in the limit of infinitely many particles, which is the first hint that something genuinely collective is happening.</p>
    <p>Transitions are classified by an <strong>order parameter</strong>: a quantity that is zero in one phase and non-zero in the other, such as the net magnetisation of a ferromagnet or the density difference between liquid and gas. First-order transitions jump discontinuously and involve latent heat. Continuous transitions approach zero smoothly, and near that critical point the physics becomes remarkable. Quantities diverge or vanish as power laws, and the exponents in those power laws — the <strong>critical exponents</strong> — are the same for systems with nothing in common.</p>
    <p>A three-dimensional magnet at its Curie point and a fluid at its liquid&ndash;gas critical point have the same exponents to several decimal places. This is <strong>universality</strong>, and it demands an explanation. The explanation is the <strong>renormalisation group</strong>, developed by Kadanoff and Wilson in the 1960s and 70s. At the critical point fluctuations occur at every length scale simultaneously, so the system looks statistically identical at every magnification. Systematically averaging over short-distance detail and asking how the description changes shows that almost all microscopic specifics are irrelevant: they wash out under repeated coarse-graining, and only a few features — the dimensionality of space and the symmetry of the order parameter — survive to control the exponents. Systems sharing those features share their critical behaviour, whatever they are made of. The same technique was then carried into quantum field theory, where it explains why the Standard Model works despite our ignorance of physics at much higher energies.</p>
    <div class="callout"><b>More is different:</b> in his 1972 essay of that title, P. W. Anderson argued that reductionism does not imply constructionism. Knowing the laws governing the parts does not let you deduce the behaviour of the whole, because at each level of complexity genuinely new organising principles appear — superconductivity, rigidity, magnetism, the very concept of temperature — none of which is present in, or straightforwardly derivable from, the single-particle description. Statistical mechanics is where physics learned this, and it is the strongest argument in science that the higher levels are not merely convenient approximations to the lower ones.</div>
  `,
  keyIdeas: [
    "Certain macroscopic laws (temperature, pressure, the gas laws) emerge statistically from countless random atoms.",
    "The first law is energy conservation; the second law says entropy never decreases.",
    "Entropy is the logarithm of the number of microstates, S = k ln W — a count, not vague 'disorder'.",
    "The Boltzmann distribution and partition function let you compute all thermal properties from energies.",
    "The arrow of time comes from increasing entropy and the low-entropy start of the universe.",
    "Phase transitions and universality show that collective behaviour can be genuinely new — more is different.",
    "Thermodynamics and statistical mechanics are two levels of one subject: the laws come from experiment and hold whatever matter is made of, and the counting of microstates derives them from below.",
    "Temperature is the reciprocal derivative of entropy with respect to energy, systems minimise free energy rather than energy, and quantum indistinguishability splits particles into fermions and bosons with opposite statistics."
  ],
  talk: {
    oneliners: [
      "Statistical mechanics is the miracle of getting certain laws out of pure randomness — a mole of atoms is statistically bulletproof.",
      "Entropy isn't messiness, it's a count: the number of microscopic arrangements that look the same from outside.",
      "The second law has teeth because ordered states are just vastly outnumbered by disordered ones — it's counting, not a force.",
      "The arrow of time exists because the universe started in an absurdly low-entropy state and has been running up the count ever since.",
      "Compute the partition function and you are done — every thermodynamic quantity is a derivative of its logarithm."
    ],
    myths: [
      { m: "Entropy just means disorder or untidiness.", t: "It is a precise logarithmic count of microscopic arrangements consistent with the macroscopic state." },
      { m: "The second law can never be violated even briefly.", t: "It is statistical; tiny fluctuations against it happen constantly at small scales, but are astronomically unlikely at everyday scales." },
      { m: "Temperature measures how much heat something contains.", t: "Temperature measures average energy per degree of freedom and how readily a system sheds energy; heat is energy in transit." },
      { m: "Systems always settle into their lowest-energy state.", t: "At non-zero temperature they minimise free energy, U minus TS, so entropy competes with energy. That competition is why ice melts and why proteins fold the way they do." }
    ],
    terms: [
      { term: "Entropy (S)", def: "k ln W — the log of the number of microstates matching a macrostate." },
      { term: "Microstate / macrostate", def: "A specific microscopic arrangement vs the bulk description (temperature, pressure) it produces." },
      { term: "Boltzmann distribution", def: "Probability of a state falls as e^(−E/kT); the core of thermal physics." },
      { term: "Partition function (Z)", def: "The sum over all states weighted by e^(−E/kT); encodes all thermodynamics." },
      { term: "Phase transition", def: "A sudden collective change of bulk behaviour, e.g. freezing or losing magnetism." },
      { term: "Universality", def: "Different systems behaving identically near a critical point." },
      { term: "Ensemble", def: "The set of allowed microstates given what the system can exchange: microcanonical (nothing), canonical (energy), grand canonical (energy and particles)." },
      { term: "Free energy", def: "U minus TS at fixed temperature; the quantity a system actually minimises, balancing low energy against many arrangements." }
    ]
  },
  test: [
    { q: "What is entropy, really?", a: "The logarithm of the number of microscopic arrangements (microstates) that produce the same macroscopic state, times Boltzmann's constant: S = k ln W. Higher entropy means more ways to realise the state." },
    { q: "Why does the second law hold, in statistical terms?", a: "Because high-entropy (disordered) configurations vastly outnumber low-entropy ones, a system evolving randomly overwhelmingly ends up in high-entropy states. It is a consequence of counting, not a fundamental force." },
    { q: "Where does the arrow of time come from if the microscopic laws are time-symmetric?", a: "From the second law: entropy increases toward the future. That in turn requires the universe to have begun in a very low-entropy state at the Big Bang, which sets the overall direction." },
    { q: "What does 'more is different' mean?", a: "Large collections of particles can show genuinely new collective phenomena — phase transitions, magnetism, superconductivity — that are not obvious from, or reducible to, the behaviour of a single particle." },
    { q: "Define temperature properly, and explain how a negative temperature can be hotter than an infinite one.", a: "Temperature is defined by 1/T equals the derivative of entropy with respect to energy: it measures how much entropy a system gains per unit of energy added. For systems with a bounded energy spectrum, such as a set of two-level spins, adding energy past the halfway point starts reducing the number of accessible arrangements, so the derivative goes negative. Such a system sheds energy to any positive-temperature body it touches, which makes it hotter than infinitely hot rather than colder than absolute zero." }
  ],
  resources: [
    { name: "David Tong — Statistical Physics", desc: "Superb free notes on ensembles, the partition function, quantum statistics and phase transitions.", url: "https://www.damtp.cam.ac.uk/user/tong/statphys.html", type: "notes", icon: "📄" },
    { name: "David Tong — Kinetic Theory", desc: "The follow-up notes: how systems actually get to equilibrium, Boltzmann's equation and transport.", url: "https://www.damtp.cam.ac.uk/user/tong/kinetic.html", type: "notes", icon: "📄" },
    { name: "MIT 8.044 — Statistical Physics I", desc: "Full course with problem sets and solutions.", url: "https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/", type: "course", icon: "🎓" },
    { name: "MIT 8.333 — Statistical Mechanics I", desc: "Graduate treatment: ensembles, interacting systems, quantum statistics.", url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/", type: "course", icon: "🎓" },
    { name: "Susskind — Statistical Mechanics", desc: "Accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});
