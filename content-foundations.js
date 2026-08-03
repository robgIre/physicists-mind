/* ===== TRACK 1: FOUNDATIONS & THE CLASSICAL WORLD ===== */

addModule({
  id: "maths", track: "foundations", order: 1,
  title: "The mathematical language of physics",
  fields: ["maths"], readMins: 22,
  summary: "Why physics is written in maths, and what the core objects — vectors, fields, operators, symmetry groups — actually mean.",
  lesson: `
    <h3>The big picture</h3>
    <p>Physics is not maths, but it is <em>written in</em> maths, and you cannot follow the conversation without knowing the alphabet. The good news: a physicist does not carry a thousand formulas in their head. They carry a small number of <strong>big mathematical ideas</strong> and know which one applies. Master those and the equations stop looking like noise and start looking like sentences.</p>

    <h3>Rates of change: calculus</h3>
    <p>Almost every law of physics is a statement about how something changes. Velocity is the rate of change of position; acceleration is the rate of change of velocity. The tool for "rate of change" is the <strong>derivative</strong>, and the tool for adding up a changing quantity is the <strong>integral</strong>. They are inverses of each other.</p>
    <div class="eq">a = dv/dt = d²x/dt²
      <span class="why">Acceleration is the first derivative of velocity and the second derivative of position. Newton's laws are differential equations: you give the forces, and calculus tells you the motion.</span></div>
    <p>When a quantity depends on several variables — say temperature that varies in space <em>and</em> time — you take a <strong>partial derivative</strong>, written with a curly ∂, meaning "rate of change with respect to one variable, holding the others fixed." Equations built from partial derivatives are <strong>partial differential equations</strong> (PDEs), and they are the workhorse of physics: the wave equation, the heat equation, Maxwell's equations and Schrödinger's equation are all PDEs.</p>

    <h3>Directions and fields: vectors</h3>
    <p>A <strong>vector</strong> is a quantity with size and direction — velocity, force, an electric field. A <strong>scalar</strong> has size only — temperature, mass, energy. A <strong>field</strong> assigns a value to every point in space: a scalar field (temperature in a room) or a vector field (wind speed and direction everywhere). Vector calculus gives three key operations you will meet constantly:</p>
    <ul>
      <li><strong>Gradient</strong> (∇, "grad"): points uphill in the steepest direction of a scalar field. It turns a scalar into a vector.</li>
      <li><strong>Divergence</strong> (∇·, "div"): measures how much a vector field spreads out from a point — a source or a sink. It turns a vector into a scalar.</li>
      <li><strong>Curl</strong> (∇×): measures how much a vector field swirls around a point.</li>
    </ul>
    <p>Those three symbols are the whole grammar of Maxwell's equations. If you know what div and curl <em>mean</em>, you can read electromagnetism.</p>

    <h3>Symmetry and groups</h3>
    <p>The single most powerful idea in modern physics is <strong>symmetry</strong>: something that stays the same when you change something else. Rotate an experiment and physics is unchanged (rotational symmetry). Do it tomorrow and it still works (time-translation symmetry). The mathematics of symmetry is <strong>group theory</strong>. A "group" is just the collection of all the transformations that leave something unchanged, together with the rule for combining them.</p>
    <div class="callout"><b>Why this matters so much:</b> Noether's theorem says every continuous symmetry gives a conserved quantity. Time symmetry gives conservation of energy. Space symmetry gives conservation of momentum. Rotational symmetry gives conservation of angular momentum. Conservation laws are not lucky accidents — they are symmetry wearing a different hat.</div>
    <p>The particular groups called <strong>Lie groups</strong> (like the rotation group, or SU(2) and SU(3)) sit at the heart of particle physics: the entire Standard Model is organised by which symmetry group each force respects.</p>

    <h3>Linear algebra and operators</h3>
    <p>Quantum mechanics is written in <strong>linear algebra</strong>: states are vectors (in an abstract space called Hilbert space), and measurements are <strong>operators</strong> (matrices) that act on them. The possible outcomes of a measurement are the operator's <strong>eigenvalues</strong>, and the states with definite values are its <strong>eigenvectors</strong>. If two operators do not <em>commute</em> (order matters, AB ≠ BA), you cannot know both quantities at once — that is the uncertainty principle in one line of algebra.</p>

    <h3>Complex numbers</h3>
    <p>The number i = √(−1) is not a curiosity; it is essential. Waves are naturally described by complex exponentials, and quantum mechanics is fundamentally complex: the wavefunction is a complex number whose phase carries physical meaning. Euler's formula, e^(iθ) = cos θ + i sin θ, is the bridge between exponentials and oscillations, and it is everywhere.</p>
  `,
  keyIdeas: [
    "A derivative is a rate of change; most physical laws are differential equations.",
    "A field assigns a value to every point in space; gradient, divergence and curl describe how it varies.",
    "Symmetry means invariance under a transformation, and its maths is group theory.",
    "Noether's theorem links every continuous symmetry to a conservation law.",
    "In quantum mechanics, states are vectors and measurements are operators whose eigenvalues are the outcomes.",
    "Complex numbers and Euler's formula are the natural language of waves and quantum phase."
  ],
  talk: {
    oneliners: [
      "Physics is written in calculus because every law is really a statement about how something changes.",
      "Divergence tells you where a field has sources; curl tells you where it swirls — that's all Maxwell's equations are saying.",
      "Every conservation law is a symmetry in disguise: that's Noether's theorem, arguably the deepest idea in physics.",
      "Two measurements you can't do simultaneously correspond to operators that don't commute — uncertainty is just non-commuting matrices."
    ],
    myths: [
      { m: "You need to be a maths genius to understand physics.", t: "You need a handful of big ideas — rates of change, fields, symmetry, linear algebra — and the intuition for when each applies." },
      { m: "Complex numbers are 'imaginary' and not really real.", t: "They are as real as any other number and are physically essential; quantum phase literally is a complex number." },
      { m: "Symmetry in physics means things looking pretty or balanced.", t: "It means a transformation that leaves the physics unchanged, and it dictates the conservation laws and the forces." }
    ],
    terms: [
      { term: "Scalar / vector / tensor", def: "Quantities with, respectively, magnitude only; magnitude and direction; and more complex directional structure (e.g. stress, spacetime curvature)." },
      { term: "Field", def: "A quantity defined at every point in space and time." },
      { term: "PDE", def: "Partial differential equation — an equation relating a quantity's rates of change in space and time. The core form of physical law." },
      { term: "Group / Lie group", def: "The set of transformations that leave something invariant; Lie groups are the continuous ones central to particle physics." },
      { term: "Operator / eigenvalue", def: "In quantum theory, a measurement is an operator; its eigenvalues are the possible measured results." },
      { term: "Commutator", def: "AB − BA. If non-zero, the two quantities cannot be simultaneously known." }
    ]
  },
  test: [
    { q: "What does Noether's theorem tell us, and give two examples.", a: "Every continuous symmetry of a system corresponds to a conserved quantity. Time-translation symmetry gives energy conservation; spatial-translation symmetry gives momentum conservation; rotational symmetry gives angular-momentum conservation." },
    { q: "In plain words, what do divergence and curl measure?", a: "Divergence measures how much a vector field flows out of (or into) a point — its sources and sinks. Curl measures how much the field circulates or swirls around a point." },
    { q: "Why does the uncertainty principle come out of linear algebra?", a: "Measurements are operators. If two operators do not commute (AB ≠ BA), there is no set of states with definite values for both, so the two quantities cannot be simultaneously well-defined. Position and momentum are such a pair." },
    { q: "What is a field, and why is the concept so central?", a: "A field assigns a physical value to every point in space and time. It is central because forces (electromagnetism, gravity) and even particles themselves (in quantum field theory) are described as fields." }
  ],
  resources: [
    { name: "David Tong — Vector Calculus", desc: "Clean, free lecture notes on grad, div, curl and fields.", url: "https://www.damtp.cam.ac.uk/user/tong/vc.html", type: "notes", icon: "📄" },
    { name: "MIT 18.06 — Linear Algebra (Strang)", desc: "The legendary free course; the maths behind quantum mechanics.", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", type: "course", icon: "🎓" },
    { name: "The Feynman Lectures on Physics", desc: "Free online; unmatched for physical intuition across the board.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" },
    { name: "3Blue1Brown — Essence of Calculus / Linear Algebra", desc: "Visual intuition for the core maths (search on the channel).", url: "https://www.3blue1brown.com/", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "classical", track: "foundations", order: 2,
  title: "Classical mechanics",
  fields: ["classical"], readMins: 26,
  summary: "Newton, then the deeper reformulations — Lagrangian and Hamiltonian mechanics, least action, and why they run through all of modern physics.",
  lesson: `
    <h3>The big picture</h3>
    <p>Classical mechanics is the physics of how things move under forces, and it was essentially complete by 1900 for everyday objects. But its real importance to a modern physicist is not cannonballs and pendulums — it is the <strong>deeper reformulations</strong> (Lagrangian and Hamiltonian mechanics) that turned out to be the template for quantum mechanics, field theory and general relativity. Learn classical mechanics properly and you have quietly learned the skeleton of everything that follows.</p>

    <h3>Newton's version</h3>
    <p>Newton gave three laws, but the whole of Newtonian mechanics is really one equation:</p>
    <div class="eq">F = ma&nbsp;&nbsp;(more precisely, F = dp/dt)
      <span class="why">Force equals mass times acceleration, or exactly, force is the rate of change of momentum p = mv. Give the forces and the starting position and velocity, and the future is fixed. This is classical determinism.</span></div>
    <p>Alongside it sit the great conservation laws — energy, momentum, angular momentum — which are often far more powerful than tracking forces directly. If you know energy is conserved, you can answer questions without solving a single differential equation.</p>

    <h3>The deeper idea: least action</h3>
    <p>Here is the shift that separates a physicist from someone who just did mechanics at school. Instead of pushing objects around with forces, you can describe motion by a single quantity called the <strong>action</strong>. Define the <strong>Lagrangian</strong> as kinetic energy minus potential energy:</p>
    <div class="eq">L = T − V,&nbsp;&nbsp;&nbsp;S = ∫ L dt
      <span class="why">The action S is the Lagrangian added up over the whole path. The principle of least action says: of all conceivable paths between two points, nature takes the one where S is stationary (usually minimised).</span></div>
    <p>This is genuinely astonishing. A thrown ball does not feel forces step by step in this picture; instead, out of every possible trajectory it could take, it follows the one that extremises the action. From this single principle you can <em>derive</em> Newton's laws (via the Euler–Lagrange equations), and it works in situations where forces are awkward to write down.</p>
    <div class="callout"><b>Why physicists love it:</b> the Lagrangian approach only needs energies (scalars), not forces (vectors), so it handles constraints and weird coordinates effortlessly. And crucially, it makes symmetry central — this is where Noether's theorem lives. The same least-action machinery reappears in quantum field theory and general relativity, where you write down a Lagrangian for the whole universe's fields.</div>

    <h3>Hamiltonian mechanics</h3>
    <p>The <strong>Hamiltonian</strong> reformulation trades the Lagrangian's position-and-velocity view for a position-and-momentum view. The Hamiltonian H is usually just the total energy, T + V, expressed in terms of position and momentum. Motion is then governed by a beautifully symmetric pair of equations, and the natural arena becomes <strong>phase space</strong> — a space with an axis for every position and every momentum, where the state of a whole system is a single point that traces out a path.</p>
    <p>This matters because Hamiltonian mechanics is the <strong>direct doorway to quantum mechanics</strong>. The quantum Hamiltonian is the operator for energy, and Schrödinger's equation is built around it. Learn where H comes from classically and Schrödinger's equation stops being arbitrary.</p>

    <h3>Chaos: determinism without predictability</h3>
    <p>Classical mechanics is deterministic, but that does not mean predictable. Many systems (the weather, a double pendulum, the solar system over millions of years) are <strong>chaotic</strong>: tiny differences in starting conditions blow up exponentially, so long-term prediction becomes impossible in practice even though the laws are exact. This is the "butterfly effect", and it is a genuine feature of the classical world, not a failure of it.</p>
  `,
  keyIdeas: [
    "Newtonian mechanics is deterministic: forces plus initial conditions fix the entire future.",
    "The principle of least action reformulates motion as extremising a single quantity, the action.",
    "The Lagrangian L = T − V uses only energies and makes symmetry (and Noether's theorem) central.",
    "The Hamiltonian is usually total energy in terms of position and momentum, and is the bridge to quantum mechanics.",
    "Phase space describes a whole system's state as a single moving point.",
    "Chaos means deterministic laws can still be unpredictable due to sensitivity to initial conditions."
  ],
  talk: {
    oneliners: [
      "The real content of classical mechanics isn't F=ma, it's the principle of least action — nature picks the path that extremises the action.",
      "The Lagrangian is kinetic minus potential energy, and from that one scalar you can derive all of Newton.",
      "Hamiltonian mechanics is the classical skeleton of quantum mechanics — the Hamiltonian is just the energy operator.",
      "Chaos is why determinism doesn't guarantee predictability: exact laws, but exponential sensitivity to where you start."
    ],
    myths: [
      { m: "Classical mechanics is just F = ma and school physics.", t: "Its deep form — least action, Lagrangian and Hamiltonian mechanics — is the template for all of modern theoretical physics." },
      { m: "Chaos means randomness.", t: "Chaotic systems are fully deterministic; they are just so sensitive to initial conditions that prediction becomes practically impossible." },
      { m: "The principle of least action means objects 'know' the future.", t: "It's a mathematically equivalent reformulation of local force laws, not evidence of foresight; it just happens to be the more powerful description." }
    ],
    terms: [
      { term: "Action (S)", def: "The Lagrangian integrated over time along a path; nature extremises it." },
      { term: "Lagrangian (L)", def: "Kinetic energy minus potential energy, T − V." },
      { term: "Hamiltonian (H)", def: "Usually the total energy, expressed via position and momentum; generates time evolution." },
      { term: "Phase space", def: "The space of all positions and momenta; a system's state is one point in it." },
      { term: "Degrees of freedom", def: "The number of independent ways a system can move or be configured." },
      { term: "Chaos", def: "Exponential sensitivity to initial conditions in a deterministic system." }
    ]
  },
  test: [
    { q: "State the principle of least action in plain English.", a: "Of all the possible paths a system could take between two configurations, it follows the one for which the action (the time-integral of the Lagrangian) is stationary — usually a minimum." },
    { q: "What is the Lagrangian, and why prefer it to forces?", a: "L = T − V, kinetic minus potential energy. It uses only scalar energies rather than vector forces, so it handles awkward coordinates and constraints easily and puts symmetry (hence conservation laws) front and centre." },
    { q: "Why is Hamiltonian mechanics important for quantum theory?", a: "It reframes mechanics in terms of position and momentum and total energy (the Hamiltonian). Quantum mechanics promotes the Hamiltonian to an operator, and Schrödinger's equation is built directly around it." },
    { q: "How can a deterministic system be unpredictable?", a: "Through chaos: the laws fix the future exactly, but tiny uncertainties in the initial conditions grow exponentially, so beyond a horizon you cannot predict the outcome in practice." }
  ],
  resources: [
    { name: "David Tong — Classical Dynamics", desc: "The standard free notes on Lagrangian and Hamiltonian mechanics.", url: "https://www.damtp.cam.ac.uk/user/tong/dynamics.html", type: "notes", icon: "📄" },
    { name: "Susskind — Classical Mechanics (Theoretical Minimum)", desc: "Gentle full lecture course from first principles.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "MIT 8.01SC — Classical Mechanics", desc: "Full introductory course with problem sets and solutions.", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. I", desc: "Chapters on mechanics and the principle of least action (Ch. 19).", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" }
  ]
});

addModule({
  id: "em", track: "foundations", order: 3,
  title: "Electromagnetism",
  fields: ["em"], readMins: 24,
  summary: "Maxwell's four equations, how they unified electricity, magnetism and light, and why they secretly demanded relativity.",
  lesson: `
    <h3>The big picture</h3>
    <p>Electromagnetism was the first great <strong>unification</strong> in physics. Electricity and magnetism looked like separate phenomena until the 1800s, when a handful of experimentalists and one theorist, James Clerk Maxwell, showed they are two faces of a single thing — the electromagnetic field. And in the process Maxwell discovered what light <em>is</em>. This is the model every later unification (electroweak, the search for a theory of everything) tries to imitate.</p>

    <h3>Fields, not forces at a distance</h3>
    <p>The key conceptual move is the <strong>field</strong>. A charge does not reach across empty space to push another charge; instead it fills the space around it with an electric field, and other charges respond to the field <em>where they are</em>. Moving charges (currents) create magnetic fields. The field is a real physical thing carrying energy and momentum, not a bookkeeping trick.</p>

    <h3>Maxwell's four equations</h3>
    <p>All of classical electromagnetism is four equations. You do not need to solve them to talk about them — you need to know what each one <em>says</em>:</p>
    <div class="eq">∇·E = ρ/ε₀
      <span class="why">Gauss's law: electric charge is the source of the electric field. Field lines start on positive charge and end on negative charge.</span></div>
    <div class="eq">∇·B = 0
      <span class="why">No magnetic monopoles: magnetic field lines never start or stop, they only form loops. There is no isolated 'north pole'.</span></div>
    <div class="eq">∇×E = −∂B/∂t
      <span class="why">Faraday's law: a changing magnetic field creates a circulating electric field. This is how generators and transformers work.</span></div>
    <div class="eq">∇×B = μ₀J + μ₀ε₀ ∂E/∂t
      <span class="why">Ampère–Maxwell law: electric currents and changing electric fields create circulating magnetic fields. Maxwell's added second term was the masterstroke.</span></div>
    <p>That last extra term is the hero of the story. With it, the equations allow a self-sustaining ripple: a changing electric field makes a magnetic field, which changes and makes an electric field, and so on, propagating through empty space. Maxwell calculated its speed from two constants measured in the lab and got the speed of light.</p>
    <div class="callout"><b>The punchline:</b> light <em>is</em> an electromagnetic wave. Radio, microwaves, infrared, visible light, X-rays and gamma rays are all the same phenomenon at different wavelengths. That realisation, from pure theory, is one of the greatest moments in science.</div>

    <h3>Potentials and gauge freedom</h3>
    <p>It is often easier to work with the <strong>electric potential</strong> (voltage) and the <strong>magnetic vector potential</strong> than with the fields directly. Here a subtle and deep idea appears: you can change the potentials in a specific way without changing any measurable field. This redundancy is called <strong>gauge freedom</strong>, and the requirement that physics not depend on your gauge choice — <strong>gauge symmetry</strong> — turns out to be the organising principle of <em>all</em> the fundamental forces. Electromagnetism is the simplest gauge theory; the strong and weak forces are more elaborate ones.</p>

    <h3>Why EM demanded relativity</h3>
    <p>There is a genuine puzzle buried in Maxwell's equations: they predict a single, definite speed of light, but a speed <em>relative to what</em>? Newtonian physics says velocities should add — light from a moving torch should go faster. Maxwell's equations refuse to comply. Einstein resolved it in 1905 by taking the equations at their word: the speed of light really is the same for everyone, and space and time must bend to allow it. In a real sense, <strong>special relativity was hiding inside electromagnetism all along</strong>, waiting to be noticed. Electric and magnetic fields even turn out to be the same field seen from different frames of motion.</p>
  `,
  keyIdeas: [
    "Electromagnetism unified electricity, magnetism and light into one field theory.",
    "Charges and currents create fields; other charges respond to the local field, not to distant charges directly.",
    "Maxwell's four equations describe sources and circulation of the electric and magnetic fields.",
    "Light is a self-sustaining electromagnetic wave travelling at c, spanning radio to gamma rays.",
    "Gauge symmetry — the freedom to redefine potentials without changing fields — is the template for all fundamental forces.",
    "Maxwell's equations imply a universal speed of light, which forced the discovery of special relativity."
  ],
  talk: {
    oneliners: [
      "Maxwell's real achievement was unification: electricity, magnetism and light turned out to be one thing.",
      "The fourth equation's extra term is what lets fields sustain each other and travel as light through empty space.",
      "Electric and magnetic fields are the same field viewed from different states of motion — that's why EM secretly required relativity.",
      "Gauge symmetry started here in electromagnetism and became the organising principle for every fundamental force."
    ],
    myths: [
      { m: "Electric and magnetic fields are fundamentally different things.", t: "They are two aspects of one electromagnetic field; what looks electric to one observer can look magnetic to another moving observer." },
      { m: "Charges push each other across empty space instantly.", t: "They interact through the field, and disturbances travel at the speed of light, not instantaneously." },
      { m: "Light needs a medium (the 'ether') to travel through.", t: "The Michelson–Morley experiment found no ether; light is a self-supporting field disturbance needing no medium." }
    ],
    terms: [
      { term: "Electromagnetic field", def: "The combined electric and magnetic field filling space; carries energy and momentum." },
      { term: "Gauss's law", def: "Charge is the source of the electric field." },
      { term: "Faraday's law", def: "A changing magnetic field induces a circulating electric field." },
      { term: "Gauge symmetry", def: "Freedom to change the potentials without changing any measurable field; the deep principle behind the forces." },
      { term: "Poynting vector", def: "Describes the flow of energy carried by an electromagnetic field." },
      { term: "Electromagnetic spectrum", def: "All EM waves by wavelength: radio, micro, infrared, visible, UV, X-ray, gamma." }
    ]
  },
  test: [
    { q: "What did Maxwell unify, and what did it reveal about light?", a: "He unified electricity and magnetism into a single electromagnetic field theory. His equations predicted self-propagating field waves moving at a speed equal to the measured speed of light, revealing that light is an electromagnetic wave." },
    { q: "In one line each, what do Maxwell's four equations say?", a: "1) Charge sources the electric field. 2) There are no magnetic monopoles. 3) A changing magnetic field makes a circulating electric field. 4) Currents and changing electric fields make a circulating magnetic field." },
    { q: "Why did electromagnetism force the discovery of relativity?", a: "Maxwell's equations give a single definite speed of light with no preferred frame, contradicting Newtonian velocity addition. Einstein accepted that c is the same for all observers, which required rethinking space and time — special relativity." },
    { q: "What is gauge symmetry and why does it matter beyond EM?", a: "It is the freedom to redefine the electromagnetic potentials without changing observable fields. Demanding this symmetry generates the electromagnetic force, and generalised gauge symmetries generate the strong and weak forces too." }
  ],
  resources: [
    { name: "David Tong — Electromagnetism", desc: "Excellent free notes; covers Maxwell, waves, and the relativistic view.", url: "https://www.damtp.cam.ac.uk/user/tong/em.html", type: "notes", icon: "📄" },
    { name: "MIT 8.02 — Electricity & Magnetism", desc: "Full introductory course with demos, problems and video.", url: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. II", desc: "The classic, deeply intuitive treatment of fields and EM.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" },
    { name: "MIT 8.07 — Electromagnetism II", desc: "The graduate-level follow-up (Jackson territory).", url: "https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/", type: "course", icon: "🎓" }
  ]
});

addModule({
  id: "stat", track: "foundations", order: 4,
  title: "Statistical mechanics & thermodynamics",
  fields: ["statistical"], readMins: 24,
  summary: "How the certain laws of heat and entropy emerge from the blind statistics of countless atoms — and where the arrow of time comes from.",
  lesson: `
    <h3>The big picture</h3>
    <p>This is the field that connects the microscopic world of atoms to the everyday world of heat, pressure and temperature. Its central miracle is that <strong>reliable, near-certain laws emerge from pure randomness</strong>. No individual air molecule obeys the gas laws; a mole of them, statistically, obeys them to fantastic precision. Statistical mechanics also gives us the deepest and most unsettling idea in physics: the <strong>arrow of time</strong>.</p>

    <h3>Thermodynamics: the rules from above</h3>
    <p>Before anyone believed in atoms, thermodynamics captured the behaviour of heat in a few laws:</p>
    <ul>
      <li><strong>First law:</strong> energy is conserved. Heat and work are both forms of energy transfer; you cannot create energy from nothing.</li>
      <li><strong>Second law:</strong> entropy never decreases in an isolated system. Heat flows from hot to cold, never spontaneously the other way. This is the law with teeth.</li>
      <li><strong>Third law:</strong> you cannot reach absolute zero; entropy approaches a minimum as temperature approaches zero.</li>
    </ul>

    <h3>Entropy, properly understood</h3>
    <p>Entropy is the idea people most often get wrong. It is not "disorder" in a vague tidiness sense. It is a precise count. Boltzmann's insight, carved on his gravestone, is:</p>
    <div class="eq">S = k·ln W
      <span class="why">Entropy S equals Boltzmann's constant k times the logarithm of W, the number of microscopic arrangements (microstates) that look the same macroscopically. More ways to arrange it, more entropy.</span></div>
    <p>A gas spreads to fill a room not because it "wants" to, but because there are overwhelmingly more arrangements with it spread out than bunched in one corner. The second law is therefore not a fundamental force — it is <strong>just counting</strong>. Ordered states are rare; disordered states are common; so systems drift, blindly and statistically, toward the common ones.</p>

    <h3>Temperature and the ensembles</h3>
    <p><strong>Temperature</strong> is not "amount of heat" — it is a measure of the average energy per degree of freedom, and more deeply it controls how willing a system is to give up energy. The core computational tool is the <strong>Boltzmann distribution</strong>: the probability of a state falls off exponentially with its energy divided by temperature (e^(−E/kT)). Cold systems huddle in low-energy states; hot systems spread across many. From this one formula, backed by the <strong>partition function</strong> that sums over all states, you can compute essentially every thermal property of matter.</p>

    <h3>The arrow of time</h3>
    <div class="callout"><b>The deepest puzzle here:</b> the microscopic laws of physics are almost perfectly <em>time-symmetric</em> — run the film of two colliding molecules backwards and it looks equally valid. Yet the everyday world has an obvious direction: eggs break but never unbreak, heat spreads but never re-concentrates. Where does the arrow of time come from? The answer is entropy and, ultimately, that the universe <em>started</em> in an extraordinarily low-entropy state at the Big Bang. Time's direction is the direction of increasing entropy.</div>

    <h3>Phase transitions and emergence</h3>
    <p>When water freezes or a magnet loses its magnetism at a critical temperature, the system undergoes a <strong>phase transition</strong> — a sudden, collective change in its bulk behaviour. Near the critical point, wildly different systems behave in mathematically identical ways (<strong>universality</strong>), which hints at deep structure. This is also the birthplace of the <strong>renormalization group</strong>, an idea so powerful it was later borrowed by quantum field theory. Statistical mechanics is where physicists learned that <strong>more is different</strong>: collective behaviour can be genuinely new, not just "lots of small stuff added up".</p>
  `,
  keyIdeas: [
    "Certain macroscopic laws (temperature, pressure, the gas laws) emerge statistically from countless random atoms.",
    "The first law is energy conservation; the second law says entropy never decreases.",
    "Entropy is the logarithm of the number of microstates, S = k ln W — a count, not vague 'disorder'.",
    "The Boltzmann distribution and partition function let you compute all thermal properties from energies.",
    "The arrow of time comes from increasing entropy and the low-entropy start of the universe.",
    "Phase transitions and universality show that collective behaviour can be genuinely new — more is different."
  ],
  talk: {
    oneliners: [
      "Statistical mechanics is the miracle of getting certain laws out of pure randomness — a mole of atoms is statistically bulletproof.",
      "Entropy isn't messiness, it's a count: the number of microscopic arrangements that look the same from outside.",
      "The second law has teeth because ordered states are just vastly outnumbered by disordered ones — it's counting, not a force.",
      "The arrow of time exists because the universe started in an absurdly low-entropy state and has been running up the count ever since."
    ],
    myths: [
      { m: "Entropy just means disorder or untidiness.", t: "It is a precise logarithmic count of microscopic arrangements consistent with the macroscopic state." },
      { m: "The second law can never be violated even briefly.", t: "It is statistical; tiny fluctuations against it happen constantly at small scales, but are astronomically unlikely at everyday scales." },
      { m: "Temperature measures how much heat something contains.", t: "Temperature measures average energy per degree of freedom and how readily a system sheds energy; heat is energy in transit." }
    ],
    terms: [
      { term: "Entropy (S)", def: "k ln W — the log of the number of microstates matching a macrostate." },
      { term: "Microstate / macrostate", def: "A specific microscopic arrangement vs the bulk description (temperature, pressure) it produces." },
      { term: "Boltzmann distribution", def: "Probability of a state falls as e^(−E/kT); the core of thermal physics." },
      { term: "Partition function (Z)", def: "The sum over all states weighted by e^(−E/kT); encodes all thermodynamics." },
      { term: "Phase transition", def: "A sudden collective change of bulk behaviour, e.g. freezing or losing magnetism." },
      { term: "Universality", def: "Different systems behaving identically near a critical point." }
    ]
  },
  test: [
    { q: "What is entropy, really?", a: "The logarithm of the number of microscopic arrangements (microstates) that produce the same macroscopic state, times Boltzmann's constant: S = k ln W. Higher entropy means more ways to realise the state." },
    { q: "Why does the second law hold, in statistical terms?", a: "Because high-entropy (disordered) configurations vastly outnumber low-entropy ones, a system evolving randomly overwhelmingly ends up in high-entropy states. It is a consequence of counting, not a fundamental force." },
    { q: "Where does the arrow of time come from if the microscopic laws are time-symmetric?", a: "From the second law: entropy increases toward the future. That in turn requires the universe to have begun in a very low-entropy state at the Big Bang, which sets the overall direction." },
    { q: "What does 'more is different' mean?", a: "Large collections of particles can show genuinely new collective phenomena — phase transitions, magnetism, superconductivity — that are not obvious from, or reducible to, the behaviour of a single particle." }
  ],
  resources: [
    { name: "David Tong — Statistical Physics", desc: "Superb free notes on entropy, ensembles and phase transitions.", url: "https://www.damtp.cam.ac.uk/user/tong/statphys.html", type: "notes", icon: "📄" },
    { name: "MIT 8.044 — Statistical Physics I", desc: "Full course with problem sets and solutions.", url: "https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/", type: "course", icon: "🎓" },
    { name: "Susskind — Statistical Mechanics", desc: "Accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Sean Carroll — 'From Eternity to Here' (on time's arrow)", desc: "Popular but deep discussion of entropy and the arrow of time.", url: "https://www.preposterousuniverse.com/eternitytohere/", type: "book", icon: "📚" }
  ]
});
