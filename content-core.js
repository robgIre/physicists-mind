/* ===== CORE CURRICULUM — foundations, relativity, quantum, particles =====
   The original eleven modules, rewritten at full depth (Aug 2026).
   ============================================================ */

/* ===== REWRITES: maths (foundations #1) and classical (foundations #2) =====
   Drop-in replacements for the two modules of the same id in content-foundations.js.
   id / track / order / fields preserved exactly. Existing keyIdeas kept verbatim
   and in order at the head of the array; new ones appended. */

addModule({
  id: "maths", track: "foundations", order: 1,
  title: "The mathematical language of physics",
  fields: ["maths"], readMins: 28,
  summary: "Why physics is written in maths rather than merely helped by it, and what the core objects — calculus, vectors and tensors, fields, operators, complex numbers, symmetry groups, probability — actually mean.",
  lesson: `
    <h3>The big picture</h3>
    <p>Physics is not mathematics, but it is <em>written in</em> mathematics, and you cannot follow the conversation without knowing the alphabet. A working physicist does not carry a thousand formulae in their head; they carry a small number of <strong>big mathematical ideas</strong> and an instinct for which one applies. Master those and the equations stop looking like noise and start looking like sentences.</p>
    <p>This module is a map, not a course. Each idea is developed properly elsewhere: least action in classical mechanics, tensors in general relativity, operators in quantum mechanics, Lie groups in particle physics, probability in statistical mechanics. What follows is the shared grammar underneath them all.</p>

    <h3>Why maths is the language, not a tool</h3>
    <p>There is a weak version of the claim and a strong one. The weak version says maths is convenient bookkeeping: nature does its thing and we describe it with numbers because numbers are tidy. The strong version, which most physicists half-believe, is that the mathematical structure <em>is</em> the physical content — find the right group, symmetry or geometry and you have found the thing itself, not a description of it.</p>
    <p>The evidence for the strong version is embarrassing in its abundance. Eugene Wigner called it <strong>the unreasonable effectiveness of mathematics in the natural sciences</strong>: mathematicians invent structures for internal reasons decades before anyone needs them, and physicists later find that nature was using them all along. Riemann built curved-space geometry in the 1850s out of curiosity; Einstein needed exactly that for gravity sixty years later. Hilbert spaces were functional analysis before they were quantum mechanics; group representations were abstract algebra before they classified the particles.</p>
    <div class="callout"><b>The test that matters:</b> a good theory does not merely fit the data you built it on — it predicts things nobody was looking for. Dirac's equation demanded antimatter before anyone had seen a positron: the equation was doing the thinking. The honest counterweight is selection bias — we remember the hits and forget the mathematics that led nowhere.</div>

    <h3>Calculus: the mathematics of change</h3>
    <p>Almost every law of physics is a statement about how something changes. The tool for a rate of change is the <strong>derivative</strong>; the tool for adding up a continuously varying quantity is the <strong>integral</strong>. They are inverses of one another — the fundamental theorem of calculus, and quietly one of the most useful facts in science.</p>
    <div class="eq">a = dv/dt = d²x/dt²
      <span class="why">Acceleration is the first derivative of velocity and the second of position. Newton's second law is therefore not arithmetic but a differential equation: give it the forces and the starting conditions and calculus hands you the whole future motion.</span></div>
    <p>Read a derivative as a <em>rate</em> and an integral as an <em>accumulation</em> and most equations become interpretable on sight: work is force accumulated along a path. When a quantity depends on several variables — temperature varying in space <em>and</em> time — you take a <strong>partial derivative</strong>, the rate of change in one variable with the others held fixed.</p>
    <p>The structural point is this. Physical laws almost never tell you what a quantity <em>is</em>; they tell you how it <em>changes</em>. A law of physics is nearly always a <strong>differential equation</strong>, and where partial derivatives appear, a <strong>partial differential equation</strong>. The wave equation, the heat equation, Maxwell's equations, Schrödinger's equation and the Einstein field equations are all PDEs.</p>

    <h3>Vectors, scalars and why tensors become unavoidable</h3>
    <p>A <strong>scalar</strong> has magnitude only; a <strong>vector</strong> has magnitude and direction. That is school physics. The grown-up definitions concern behaviour under a change of coordinates: a scalar is a quantity whose value does not change, and a vector is a set of components that changes in one specific, predictable way.</p>
    <p>That shift is the point. Physics wants statements that hold regardless of where you put your axes, because the axes are your invention. Once you insist on that, you need objects with richer transformation behaviour than vectors: <strong>tensors</strong>. A tensor carries several directional indices at once and transforms correctly in each. Stress needs one: a force acting across a surface depends on the direction of the force <em>and</em> the orientation of the surface, so stress is a rank-2 tensor. Spacetime curvature needs rank 4.</p>
    <div class="callout"><b>Why physicists care so much:</b> an equation between tensors of the same type, if it holds in one coordinate system, holds in <em>all</em> of them automatically. That is the technical reason general relativity is written in tensor language — not decoration, but the guarantee that you are describing the world and not your graph paper.</div>

    <h3>Fields, and what div, grad and curl actually measure</h3>
    <p>A <strong>field</strong> assigns a value to every point of space and time — one number per point for a scalar field, a magnitude and direction for a vector field. Fields are the central object of modern physics: forces are fields, and in quantum field theory particles are ripples in fields. Vector calculus has three operations for describing how a field varies.</p>
    <ul>
      <li><strong>Gradient</strong>: scalar field in, vector field out. It points in the direction of steepest increase and its length is the steepness. Force is very often minus the gradient of a potential — things roll downhill.</li>
      <li><strong>Divergence</strong>: vector field in, scalar field out. It measures how much the field spreads out of a point, detecting <em>sources and sinks</em>: positive is a tap, negative a plughole, zero means whatever flows in flows out.</li>
      <li><strong>Curl</strong>: vector field in, vector field out. It measures <em>circulation</em> around a point. Drop a tiny paddle wheel into the flow; if it spins the curl is non-zero, and the curl vector points along the spin axis.</li>
    </ul>
    <p>Those three are the entire grammar of Maxwell's equations: charge is the source of the electric field, the magnetic field has no sources because monopoles do not exist, and each field's curl is driven by the other field's rate of change — which is how a light wave propagates itself.</p>

    <h3>Linear algebra, eigenvalues and why observables are operators</h3>
    <p>Linear algebra is the mathematics of vector spaces and the transformations acting on them, and it is the native language of quantum mechanics. A quantum state is a vector in an abstract, infinite-dimensional Hilbert space, and a measurable quantity — position, momentum, energy, spin — is an <strong>operator</strong>: a rule taking one state vector to another.</p>
    <p>Most vectors get rotated and stretched by an operator. A special few come back pointing the same way, merely scaled: the <strong>eigenvectors</strong>, with the scaling factors as <strong>eigenvalues</strong>. This is where quantum mechanics gets its rules rather than by decree. The eigenvectors of an observable's operator are the states with a definite value of that quantity, and the eigenvalues are the possible measurement results. Where the eigenvalues form a discrete set the quantity is quantised — discreteness of energy levels is an eigenvalue problem, nothing more mysterious.</p>
    <div class="eq">Â|ψ⟩ = a|ψ⟩
      <span class="why">Acting with an observable's operator on one of its eigenstates returns the same state times a number, and that number is what you will measure. Solving this equation is what finding the energy levels of an atom actually consists of.</span></div>
    <p>Observables are Hermitian operators, and the reason is not aesthetic: Hermitian operators have guaranteed real eigenvalues, and measurement results must be real. If two operators do not <strong>commute</strong> — if AB is not BA — they share no eigenvectors, so no state can have a definite value for both. The uncertainty principle is that fact in one line of algebra.</p>

    <h3>Complex numbers: unavoidable, not merely convenient</h3>
    <p>The square root of minus one is not a curiosity engineers tolerate. The bridge is Euler's formula, tying exponentials to rotation: a complex exponential is a point going round a circle at steady speed, its real and imaginary parts a cosine and a sine.</p>
    <div class="eq">e^(iθ) = cos θ + i sin θ
      <span class="why">Exponentials and oscillations are one object seen from two sides. This is why every wave calculation is done with complex exponentials: differentiating one returns the same function times a constant, turning calculus into algebra.</span></div>
    <p>In classical wave physics this is a labour-saving device. One complex number carries both amplitude and phase, and phase is what makes waves interfere; you calculate complex and take the real part at the end. You could do it all with trigonometric identities, but nobody does, because it is miserable.</p>
    <p>Quantum mechanics is different in kind. The wavefunction is <em>genuinely</em> complex and you cannot take the real part at the end. Probability amplitudes are complex numbers, and the relative phase between two of them decides whether they interfere constructively or destructively — directly observable in the double-slit experiment. Remove the complex numbers and the interference goes with them. The explicit factor of i in the Schrödinger equation is why the theory gives wave behaviour and unitary evolution rather than diffusion.</p>

    <h3>Symmetry and group theory</h3>
    <p>The most powerful organising idea in modern physics is <strong>symmetry</strong>: a transformation that leaves something unchanged. Rotate an experiment and the physics is the same; run it tomorrow and it still works. The mathematics of symmetry is <strong>group theory</strong>. A group is the set of transformations leaving something invariant, plus the rule for composing them — two in succession give another member, every one can be undone, and doing nothing counts.</p>
    <p>The two flavours matter. <strong>Discrete groups</strong> have separate, countable elements: the rotations mapping a hexagon onto itself, or parity, time reversal and charge conjugation. <strong>Continuous groups</strong> have elements labelled by a smoothly varying parameter — you can rotate by any angle at all. The continuous ones that are also smooth manifolds are <strong>Lie groups</strong>, and they run the Standard Model: the rotation group, the Lorentz group and the internal symmetry groups U(1), SU(2) and SU(3) are all Lie groups, and the Standard Model amounts to a statement of which group each force respects and how the particles sit inside its representations.</p>
    <div class="callout"><b>Noether's theorem, the deepest single result here:</b> every continuous symmetry yields a conserved quantity. Symmetry under shifts in time gives energy, under shifts in space momentum, under rotations angular momentum. Conservation laws are not lucky accidents found by experiment — they are symmetry wearing a different hat. Discrete symmetries do not work this way, one practical reason to keep the distinction straight.</div>

    <h3>Probability, statistics and dimensional analysis</h3>
    <h4>Probability is not an apology for ignorance</h4>
    <p>In classical statistical mechanics probability really is bookkeeping for ignorance: the air in a room is deterministic, and we use statistics because tracking the molecules is hopeless rather than impossible in principle. Quantum mechanics is different. The Born rule makes probability the squared modulus of an amplitude, and Bell's theorem plus the experiments that followed rule out the comfortable reading in which the particle secretly had a definite value all along; the probability is a feature of nature, not of the observer. Either way, distributions, expectation values and error propagation are compulsory: every experimental claim is a statistical claim, and a number without an uncertainty is not a measurement.</p>
    <h4>Dimensional analysis: the cheapest tool in physics</h4>
    <p>Every quantity carries dimensions built from mass, length, time, charge and temperature, and any equation must be dimensionally consistent. This trivial-sounding rule is startlingly powerful. It catches algebraic errors instantly and fixes how a result must scale before you have solved anything: a pendulum's period can depend on length and gravity in only one consistent way, so it must go as the square root of length over gravity, leaving only a numerical factor to compute.</p>
    <p>Push further and you get the Planck scale, obtained purely by combining the gravitational constant, the speed of light and Planck's constant into a length, a time and a mass. That is where quantum gravity must live, and dimensional analysis alone says so. It also identifies the dimensionless ratios — the Reynolds number, the fine-structure constant — that decide which regime a system is in. It is the most underrated skill in the subject.</p>
  `,
  keyIdeas: [
    "A derivative is a rate of change; most physical laws are differential equations.",
    "A field assigns a value to every point in space; gradient, divergence and curl describe how it varies.",
    "Symmetry means invariance under a transformation, and its maths is group theory.",
    "Noether's theorem links every continuous symmetry to a conservation law.",
    "In quantum mechanics, states are vectors and measurements are operators whose eigenvalues are the outcomes.",
    "Complex numbers and Euler's formula are the natural language of waves and quantum phase.",
    "Tensors exist so that a physical statement can be made without reference to any particular coordinate system: an equation between tensors holds in every frame at once.",
    "Dimensional analysis is the cheapest check in physics — it catches errors, fixes how a result must scale, and identifies the dimensionless ratios that decide a system's behaviour."
  ],
  talk: {
    oneliners: [
      "Physics is written in calculus because every law is really a statement about how something changes.",
      "Divergence tells you where a field has sources; curl tells you where it swirls — that's all Maxwell's equations are saying.",
      "Every conservation law is a symmetry in disguise: that's Noether's theorem, arguably the deepest idea in physics.",
      "Two measurements you can't do simultaneously correspond to operators that don't commute — uncertainty is just non-commuting matrices.",
      "Wigner called it the unreasonable effectiveness of mathematics: Riemann built curved geometry out of pure curiosity in the 1850s and Einstein needed exactly that for gravity sixty years later."
    ],
    myths: [
      { m: "You need to be a maths genius to understand physics.", t: "You need a handful of big ideas — rates of change, fields, symmetry, linear algebra — and the intuition for when each applies." },
      { m: "Complex numbers are 'imaginary' and not really real.", t: "They are as real as any other number and are physically essential; quantum phase literally is a complex number, and unlike in classical wave problems you cannot take the real part at the end." },
      { m: "Symmetry in physics means things looking pretty or balanced.", t: "It means a transformation that leaves the physics unchanged, and it dictates the conservation laws and the forces." },
      { m: "Tensors are just multi-dimensional arrays of numbers.", t: "The array is the shadow. What makes something a tensor is how its components transform when you change coordinates, which is exactly what guarantees a tensor equation holds in every frame." }
    ],
    terms: [
      { term: "Scalar / vector / tensor", def: "Quantities distinguished by how their components transform under a change of coordinates: unchanged, changed as a single direction, or carrying several directional indices at once." },
      { term: "Field", def: "A quantity defined at every point in space and time; the central object of modern physics." },
      { term: "PDE", def: "Partial differential equation — an equation relating a quantity's rates of change in space and time. The core form of physical law." },
      { term: "Grad / div / curl", def: "The three vector-calculus operations: steepest increase of a scalar field, spreading from sources, and circulation around a point." },
      { term: "Group / Lie group", def: "The set of transformations that leave something invariant; Lie groups are the continuous ones central to particle physics." },
      { term: "Operator / eigenvalue", def: "In quantum theory a measurement is an operator; its eigenvectors are the states of definite value and its eigenvalues are the possible measured results." },
      { term: "Commutator", def: "AB minus BA. If non-zero, the two operators share no eigenstates and the quantities cannot be simultaneously definite." },
      { term: "Dimensional analysis", def: "Checking or deriving relationships by requiring that both sides of an equation have the same physical dimensions." }
    ]
  },
  test: [
    { q: "What does Noether's theorem tell us, and give two examples.", a: "Every continuous symmetry of a system corresponds to a conserved quantity. Time-translation symmetry gives energy conservation; spatial-translation symmetry gives momentum conservation; rotational symmetry gives angular-momentum conservation. Note that it applies to continuous symmetries, not discrete ones such as parity." },
    { q: "In plain words, what do gradient, divergence and curl measure?", a: "Gradient turns a scalar field into a vector pointing in the direction of steepest increase, with length equal to the steepness. Divergence measures how much a vector field flows out of a point, detecting sources and sinks. Curl measures how much the field circulates around a point, as a tiny paddle wheel dropped into the flow would reveal." },
    { q: "Why does the uncertainty principle come out of linear algebra?", a: "Observables are represented by operators. Two operators that do not commute share no common set of eigenvectors, so there is no state in which both quantities have a definite value. Position and momentum are such a pair, so uncertainty is a structural fact about the algebra rather than a limitation of instruments." },
    { q: "Why are tensors needed once you demand coordinate independence?", a: "Because physics should not depend on where you put your axes. A tensor is defined by how its components transform under a change of coordinates, and an equation setting two tensors of the same type equal will hold in every coordinate system if it holds in one. That guarantee is exactly why general relativity is written in tensor language." },
    { q: "What is meant by the unreasonable effectiveness of mathematics, and what is the honest counterargument?", a: "Wigner's observation that mathematical structures invented for purely internal reasons repeatedly turn out to describe nature — Riemannian geometry before general relativity, Hilbert spaces before quantum mechanics, group representations before particle classification. The counterargument is selection bias: we remember the hits, forget the mathematics that led nowhere, and physicists tend to pick problems that yield to the tools they already have." }
  ],
  resources: [
    { name: "David Tong — Vector Calculus", desc: "Clean, free lecture notes on grad, div, curl and fields.", url: "https://www.damtp.cam.ac.uk/user/tong/vc.html", type: "notes", icon: "📄" },
    { name: "MIT 18.06 — Linear Algebra (Strang)", desc: "The legendary free course; eigenvalues and eigenvectors done properly, and the maths behind quantum mechanics.", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", type: "course", icon: "🎓" },
    { name: "MIT 18.03 — Differential Equations", desc: "The equation type that almost every physical law turns out to be.", url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/", type: "course", icon: "🎓" },
    { name: "The Feynman Lectures on Physics", desc: "Free online; unmatched for physical intuition, and Vol. II Ch. 2–3 is the best short account of vector fields anywhere.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" },
    { name: "3Blue1Brown — Essence of Calculus / Linear Algebra", desc: "Visual intuition for derivatives, integrals, eigenvectors and complex exponentials.", url: "https://www.3blue1brown.com/", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "classical", track: "foundations", order: 2,
  title: "Classical mechanics",
  fields: ["classical"], readMins: 30,
  summary: "Newton, then the deeper reformulations — least action, Lagrangian and Hamiltonian mechanics, phase space, Poisson brackets and chaos — and why these are the formulations that survive into quantum theory and general relativity.",
  lesson: `
    <h3>The big picture</h3>
    <p>Classical mechanics is the physics of how things move under forces, and for everyday objects it was essentially complete by 1900. Its importance to a modern physicist is not cannonballs and pendulums but the <strong>deeper reformulations</strong> — Lagrangian and Hamiltonian mechanics — which became the template for quantum mechanics, quantum field theory and general relativity.</p>
    <p>Keep one thing in view throughout. Newtonian, Lagrangian and Hamiltonian mechanics make identical predictions for classical systems; they are not competing theories. But they are not merely elegant repackagings either, because when physics moved beyond the classical world Newton's formulation did not come with it and the other two did. You cannot write the Standard Model as forces on particles; you can write it as a Lagrangian in about one line.</p>

    <h3>Newton's three laws, and what each actually asserts</h3>
    <p>Everyone can recite them; rather fewer can say what each is doing. They are not three statements of the same kind.</p>
    <ul>
      <li><strong>The first law</strong> looks like a special case of the second and is usually taught as one. It is not. Its job is <em>definitional</em>: a frame is inertial precisely when a body free of forces moves in a straight line at constant speed in it. Without that the second law is empty, because F = ma is simply false in a rotating or accelerating frame unless you invent fictitious forces.</li>
      <li><strong>The second law</strong> is the dynamical content, and properly stated it is not F = ma but that force is the rate of change of momentum — the version that still works when mass changes, as in a rocket burning fuel.</li>
      <li><strong>The third law</strong> says forces come in equal and opposite pairs. Its deep content is conservation of momentum for an isolated system, since internal forces cancel pairwise; in its strong form, with the pairs along the line joining the bodies, it gives conservation of angular momentum too.</li>
    </ul>
    <div class="eq">F = dp/dt,&nbsp;&nbsp; p = mv
      <span class="why">Force is the rate of change of momentum. Give the forces plus initial position and velocity and the entire future is fixed. It is a second-order differential equation, which is why two initial conditions are needed rather than one.</span></div>

    <h3>Momentum, energy, and why conservation laws beat force diagrams</h3>
    <p>Alongside the laws sit the conservation laws: energy, momentum, angular momentum. In practice they are far more powerful than tracking forces. Knowing energy is conserved gives you the final speed of a ball rolling down a complicated track without solving anything, and without knowing the shape of the track. Force diagrams need everything in between; conservation laws need only the endpoints.</p>
    <p>There is a reason beyond convenience. Conservation laws are the visible face of symmetry, via Noether's theorem: momentum conservation is space being the same everywhere, energy conservation is the laws being the same at all times, angular momentum conservation is space having no preferred direction. Symmetries are more robust than force laws — you can trust them even when the dynamics is unknown, which is why a particle physicist's first question about a proposed process is which conservation laws it would violate.</p>

    <h3>The deeper idea: the principle of least action</h3>
    <p>Here is the shift that separates a physicist from someone who did mechanics at school. Rather than pushing objects around with forces step by step, attach a single number to each possible path: define the <strong>Lagrangian</strong> as kinetic minus potential energy, and the <strong>action</strong> as the Lagrangian accumulated along a path through time.</p>
    <div class="eq">L = T − V,&nbsp;&nbsp;&nbsp; S = ∫ L dt
      <span class="why">The action is a number assigned to an entire trajectory, not to an instant. Feed in a candidate path from start to finish and out comes one number. That makes the action a functional: a function whose input is itself a function.</span></div>
    <p>Of all conceivable paths connecting a fixed starting configuration to a fixed final one, the path nature takes is the one for which the action is <strong>stationary</strong> — small deformations change the action only at second order, so to first order it does not change at all.</p>
    <div class="callout"><b>The name is wrong and it matters:</b> "least action" is traditional but inaccurate. The physical path is a stationary point, which may be a minimum, a maximum or a saddle. For short paths it is usually a minimum; past a conjugate point it typically is not. The correct name is Hamilton's principle of stationary action.</div>
    <p>This invites a bad interpretation. The ball does not survey all possible futures and pick the best one; the principle is mathematically equivalent to the local force law. Yet the teleological flavour is not entirely an illusion: in Feynman's path integral a particle genuinely contributes amplitude along every path, and the classical trajectory is where neighbouring paths have nearly equal action and interfere constructively instead of cancelling. Least action is the classical shadow of quantum interference.</p>

    <h3>Euler–Lagrange equations, generalised coordinates and constraints</h3>
    <p>Imposing stationarity, using the calculus of variations, yields one equation per coordinate:</p>
    <div class="eq">d/dt (∂L/∂q̇) − ∂L/∂q = 0
      <span class="why">One equation per degree of freedom. Feed in the Lagrangian for a particle in a potential and this reproduces Newton's second law exactly. Feed in something more exotic and it still works, which Newton's formulation does not.</span></div>
    <p>The letter q is doing a lot of work. It is a <strong>generalised coordinate</strong>: any independent variable pinning down the configuration of the system — an angle, an arc length, a separation. It need not be Cartesian and need not have units of length.</p>
    <p>Why prefer this to F = ma? Take a bead sliding on a wire bent into a spiral. Newton makes you handle three Cartesian coordinates and work out the normal force the wire exerts at every instant — a force you do not know in advance and do not care about. The Lagrangian approach notices the bead has one degree of freedom, takes distance along the wire as the single coordinate, and turns the handle. One equation instead of three plus an unknown, and the constraint force never appears because your coordinates cannot violate the constraint.</p>
    <p><strong>Degrees of freedom</strong> counts the independent ways a system can be configured: 3N for N free particles, minus one per independent constraint. Holonomic constraints, expressible as equations relating the coordinates, simply reduce the count. Add that L is a single scalar, so awkward coordinates cost nothing, and that a coordinate absent from L has a conserved conjugate momentum immediately, and the appeal is obvious.</p>

    <h3>Hamiltonian mechanics and phase space</h3>
    <p>The Hamiltonian reformulation swaps positions and velocities for positions and <em>momenta</em>. The exchange is a <strong>Legendre transform</strong>, the same operation relating the thermodynamic potentials: define the conjugate momentum as the derivative of L with respect to the velocity, then trade the velocity for it.</p>
    <div class="eq">H = Σ p q̇ − L,&nbsp;&nbsp;&nbsp; q̇ = ∂H/∂p,&nbsp;&nbsp; ṗ = −∂H/∂q
      <span class="why">The Legendre transform converts L into H, which for familiar systems is simply the total energy T + V expressed via position and momentum. In place of one second-order equation per coordinate you get two first-order ones, almost symmetric under swapping q and p apart from a minus sign.</span></div>
    <p>The arena is now <strong>phase space</strong>: one axis per coordinate and one per momentum, so n degrees of freedom give a 2n-dimensional space. The whole state of the system is a single point and its history a single curve. Because Hamilton's equations are first order, exactly one trajectory passes through each point, so phase-space paths never cross.</p>

    <h3>Poisson brackets, Liouville, and the bridge to quantum mechanics</h3>
    <p>An algebraic structure lurks in Hamiltonian mechanics. For any two functions of position and momentum, define the <strong>Poisson bracket</strong> from their derivatives with respect to q and p. The time evolution of any quantity is then its bracket with the Hamiltonian, and a quantity is conserved exactly when that bracket vanishes. The bracket of a coordinate with its own conjugate momentum equals one.</p>
    <div class="eq">{q, p} = 1&nbsp;&nbsp;→&nbsp;&nbsp;[x̂, p̂] = iℏ
      <span class="why">The classical Poisson bracket of position with momentum is one; the quantum commutator of the corresponding operators is i times h-bar. Dirac saw that the whole algebraic structure carries over if every Poisson bracket is replaced by a commutator divided by i h-bar. That substitution is canonical quantisation.</span></div>
    <p>This is not a loose analogy but the route from classical to quantum mechanics. Dirac's 1925 observation is why the classical Hamiltonian tells you what the quantum one should be, and why Schrödinger's equation is not an arbitrary guess.</p>
    <p><strong>Liouville's theorem</strong> is the other great structural result. Take a blob of nearby initial conditions and let every point evolve: the blob distorts and threads itself through phase space extraordinarily, but its <em>volume</em> never changes. Hamiltonian flow is incompressible. This justifies counting states by phase-space volume in statistical mechanics, and it is the classical ancestor of quantum unitarity.</p>
    <p>Two further tools are worth recognising. <strong>Canonical transformations</strong> mix positions and momenta while preserving Hamilton's equations and all Poisson brackets, letting you hunt for coordinates in which a problem becomes trivial. <strong>Hamilton–Jacobi theory</strong> pushes that to its end, seeking a transformation that makes the new Hamiltonian vanish so every coordinate is constant. Its equation closely resembles the eikonal equation of wave optics — and that analogy led Schrödinger to his equation.</p>

    <h3>Rigid bodies, small oscillations and normal modes</h3>
    <p><strong>Rigid body motion</strong> concerns objects that rotate as a whole. The key object is the inertia tensor, relating angular velocity to angular momentum; it is a tensor precisely because those two vectors need not point the same way, which is the source of every counter-intuitive gyroscope demonstration. Diagonalise it for the principal axes: rotation about the axes of largest and smallest moment of inertia is stable, rotation about the intermediate axis is not, as throwing a phone in the air will confirm.</p>
    <p><strong>Small oscillations</strong> is where the harmonic oscillator earns its status as the most important system in physics. Expand the potential energy of any system about a stable equilibrium: the constant is irrelevant, the linear term vanishes because you are at a minimum, and the first surviving term is quadratic. Every stable system, whatever it is made of, behaves as a harmonic oscillator for small enough displacements.</p>
    <p>With many degrees of freedom this becomes an eigenvalue problem whose solutions are the <strong>normal modes</strong>: collective motions in which every part oscillates at the same frequency and which do not interfere with one another. Any small motion is a superposition of them. The technique reappears as phonons in crystals, as molecular vibration spectra, and — after quantisation — as the particles of quantum field theory, where a field is an infinite collection of coupled oscillators and a particle is one quantum of excitation in one mode.</p>

    <h3>Chaos: determinism without predictability</h3>
    <p>Classical mechanics is deterministic, but determinism does not deliver predictability. Many systems are <strong>chaotic</strong>: differences in initial conditions grow exponentially, at a rate set by the Lyapunov exponent, so any uncertainty in your starting data — and there is always some — doubles repeatedly until it swamps the answer. Because the growth is exponential, better measurements buy very little: cutting the initial error a thousandfold extends the useful horizon by a fixed and usually disappointing amount of time.</p>
    <p>The double pendulum shows it on a desk, the weather at the scale of civilisation, the solar system over tens of millions of years. Chaos needs no randomness and no quantum mechanics — three-body gravitational motion under exact Newtonian laws is enough — but it does require nonlinearity and at least three dimensions of phase space, which is why the harmonic oscillator never displays it.</p>
    <div class="callout"><b>The philosophical payload:</b> Laplace imagined a demon that, knowing every position and momentum exactly, could compute the whole future. Chaos does not refute the demon — with truly exact data the future really is fixed — but any imprecision at all reduces the demon to a forecaster with a horizon. Determinism is a statement about the laws; predictability is a statement about us.</div>
  `,
  keyIdeas: [
    "Newtonian mechanics is deterministic: forces plus initial conditions fix the entire future.",
    "The principle of least action reformulates motion as extremising a single quantity, the action.",
    "The Lagrangian L = T − V uses only energies and makes symmetry (and Noether's theorem) central.",
    "The Hamiltonian is usually total energy in terms of position and momentum, and is the bridge to quantum mechanics.",
    "Phase space describes a whole system's state as a single moving point.",
    "Chaos means deterministic laws can still be unpredictable due to sensitivity to initial conditions.",
    "Newton's first law is not a special case of the second: it defines which frames are inertial, and without it F = ma has no content.",
    "The Poisson bracket structure of Hamiltonian mechanics maps directly onto quantum commutators, and Liouville's theorem — conservation of phase-space volume — is the classical ancestor of quantum unitarity."
  ],
  talk: {
    oneliners: [
      "The real content of classical mechanics isn't F=ma, it's the principle of least action — nature picks the path that extremises the action.",
      "The Lagrangian is kinetic minus potential energy, and from that one scalar you can derive all of Newton.",
      "Hamiltonian mechanics is the classical skeleton of quantum mechanics — the Hamiltonian is just the energy operator.",
      "Chaos is why determinism doesn't guarantee predictability: exact laws, but exponential sensitivity to where you start.",
      "Newton's first law isn't a special case of the second — it's the definition of an inertial frame, which is what makes the second law a claim about the world rather than about your choice of axes."
    ],
    myths: [
      { m: "Classical mechanics is just F = ma and school physics.", t: "Its deep form — least action, Lagrangian and Hamiltonian mechanics — is the template for all of modern theoretical physics, and it is the form that survived into quantum field theory and general relativity." },
      { m: "Chaos means randomness.", t: "Chaotic systems are fully deterministic; they are just so sensitive to initial conditions that prediction becomes practically impossible beyond a horizon." },
      { m: "The principle of least action means objects 'know' the future.", t: "It's a mathematically equivalent reformulation of local force laws, not evidence of foresight. In the quantum path integral the particle really does sample every path, and the classical one is simply where neighbouring paths interfere constructively." },
      { m: "The action is always minimised — that's why it's called least action.", t: "The physical path makes the action stationary, which can be a minimum, a maximum or a saddle point. The proper name is Hamilton's principle of stationary action." }
    ],
    terms: [
      { term: "Action (S)", def: "The Lagrangian integrated over time along a path; a functional whose input is an entire trajectory. Nature makes it stationary." },
      { term: "Lagrangian (L)", def: "Kinetic energy minus potential energy, T minus V; a single scalar from which the equations of motion follow." },
      { term: "Generalised coordinates", def: "Any independent set of variables fixing a system's configuration — angles, separations, arc lengths — not necessarily Cartesian positions." },
      { term: "Hamiltonian (H)", def: "The Legendre transform of L, usually the total energy expressed via position and momentum; generates time evolution." },
      { term: "Phase space", def: "The 2n-dimensional space of all positions and momenta; a system's state is one point in it and trajectories never cross." },
      { term: "Poisson bracket", def: "The algebraic structure on phase-space functions whose bracket with H gives time evolution; becomes the quantum commutator divided by i h-bar." },
      { term: "Normal mode", def: "A collective oscillation in which every part moves at the same frequency; any small motion is a superposition of them." },
      { term: "Chaos", def: "Exponential sensitivity to initial conditions in a deterministic nonlinear system, quantified by the Lyapunov exponent." }
    ]
  },
  test: [
    { q: "State the principle of least action in plain English, and correct the name.", a: "Of all the paths a system could take between two fixed configurations, it follows the one for which the action — the time integral of the Lagrangian — is stationary, meaning small deformations of the path change it only at second order. The name is misleading: the stationary point may be a minimum, a maximum or a saddle, so the accurate title is Hamilton's principle of stationary action." },
    { q: "What is the Lagrangian, and why prefer it to forces? Give a concrete case.", a: "L = T − V, kinetic minus potential energy, a single scalar rather than a set of vectors. For a bead on a bent wire, Newton needs three Cartesian coordinates plus an unknown constraint force from the wire; the Lagrangian approach uses one generalised coordinate along the wire, and the constraint force never appears because the coordinates cannot violate the constraint. It also makes symmetries visible: any coordinate absent from L has a conserved conjugate momentum." },
    { q: "How exactly do Poisson brackets bridge classical and quantum mechanics?", a: "In Hamiltonian mechanics the time evolution of any quantity is its Poisson bracket with H, and the bracket of a coordinate with its conjugate momentum is one. Dirac noticed that the whole algebraic structure carries over if each Poisson bracket is replaced by the corresponding commutator divided by i h-bar, giving the canonical commutation relation between position and momentum operators. That substitution is canonical quantisation, and it is why the classical Hamiltonian tells you the quantum one." },
    { q: "What does Liouville's theorem say and why does it matter?", a: "A region of phase space carried along by Hamiltonian evolution keeps the same volume, however grotesquely its shape distorts, so Hamiltonian flow is incompressible. It underpins statistical mechanics by justifying the counting of states by phase-space volume, and it is the classical counterpart of unitarity in quantum mechanics, where probability is likewise conserved." },
    { q: "Why is the harmonic oscillator considered the most important system in physics?", a: "Expand the potential energy of any system about a stable equilibrium: the constant is irrelevant, the linear term vanishes at a minimum, and the leading surviving term is quadratic. So every stable system is a harmonic oscillator for small enough displacements. With many degrees of freedom this becomes a normal-mode eigenvalue problem, which reappears as phonons in solids, molecular spectra, and — once quantised — the particles of quantum field theory." }
  ],
  resources: [
    { name: "David Tong — Classical Dynamics", desc: "The standard free notes on Lagrangian and Hamiltonian mechanics, Poisson brackets and canonical transformations.", url: "https://www.damtp.cam.ac.uk/user/tong/dynamics.html", type: "notes", icon: "📄" },
    { name: "David Tong — Dynamics and Relativity", desc: "The Newtonian groundwork, inertial frames and central-force motion, done carefully.", url: "https://www.damtp.cam.ac.uk/user/tong/relativity.html", type: "notes", icon: "📄" },
    { name: "Susskind — Classical Mechanics (Theoretical Minimum)", desc: "Gentle full lecture course from first principles through to Poisson brackets and Liouville.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "MIT 8.01SC — Classical Mechanics", desc: "Full introductory course with problem sets and solutions.", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures on Physics", desc: "Vol. I on mechanics, and Vol. II Ch. 19 on the principle of least action — explained better than anywhere else.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" }
  ]
});
/* ===== REWRITTEN AT DEPTH: em, stat (replaces the thin versions in content-foundations.js) ===== */

addModule({
  id: "em", track: "foundations", order: 3,
  title: "Electromagnetism",
  fields: ["em"], readMins: 32,
  summary: "Maxwell's four equations taken one at a time, the displacement current that made them consistent, why the answer turned out to be light, and how gauge freedom and relativity were both hiding inside.",
  lesson: `
    <h3>The big picture</h3>
    <p>Electromagnetism is the first great <strong>unification</strong> in physics. Two apparently unrelated sciences — one about rubbed amber and lightning, the other about lodestones and compass needles — turned out to be two faces of a single object, the electromagnetic field. Then, working out the details, James Clerk Maxwell found that his equations permitted a self-sustaining ripple travelling at a speed he could calculate from two numbers measured on a laboratory bench. The number came out as the speed of light. Nobody had asked what light was. The theory answered anyway.</p>
    <p>It is also the template for everything after it: the first field theory, the first gauge theory, and the theory whose internal logic forced the discovery of relativity.</p>

    <h3>Before Maxwell: two sciences, and Faraday's field</h3>
    <p>By 1800 electricity and magnetism were separate, mostly empirical subjects: Coulomb had the inverse-square force between charges, magnets pointed north, and nothing obviously connected the two. The link came in 1820, when Hans Christian &Oslash;rsted saw a compass needle twitch as he switched a current on and off. Within months Amp&egrave;re had the force between current-carrying wires, and in 1831 Michael Faraday found the converse: move a magnet near a coil and a current flows.</p>
    <p>Faraday's deeper contribution was conceptual, and he had almost no mathematics with which to express it. The Newtonian picture was <strong>action at a distance</strong>: a charge here reaches across empty space and pushes a charge there, instantaneously, with nothing in between. Faraday could not believe it. He pictured space filled with <em>lines of force</em> — real, under tension, spreading from charges and looping around currents. A charge does not act on distant charges at all; it changes the condition of the space around it, and other charges respond only to the condition <em>where they sit</em>.</p>
    <p>This is the <strong>field</strong>, the most productive idea in classical physics: influence propagates through a medium at finite speed, and the field is a thing in its own right. Maxwell gave the intuition exact form and then noticed what it implied.</p>

    <h3>Maxwell's four equations, one at a time</h3>
    <p>All of classical electromagnetism is four statements about E and B. Two concern <em>divergence</em>, where field lines begin and end; two concern <em>curl</em>, what makes them circulate.</p>

    <h4>Gauss's law: charge is the source of the electric field</h4>
    <div class="eq">&nabla;&middot;E = &rho;/&epsilon;&#8320;
      <span class="why">The divergence of the electric field at a point equals the charge density there, over the permittivity of free space. Field lines are created on positive charge and destroyed on negative charge and nowhere else: count the lines through any closed surface and you have counted the charge inside.</span></div>
    <p>This is Coulomb's inverse-square law restated locally: charge is the <strong>source</strong> of E.</p>

    <h4>Gauss's law for magnetism: there are no magnetic charges</h4>
    <div class="eq">&nabla;&middot;B = 0
      <span class="why">The magnetic field has zero divergence everywhere. Its lines never start and never stop; they close on themselves. There is no isolated north pole for them to begin on.</span></div>
    <p>Break a bar magnet in half and you get two smaller magnets. This equation states that stubborn fact, and it is the most fragile of the four: nothing forbids <strong>magnetic monopoles</strong>, Dirac showed in 1931 that one would explain why charge comes in exact multiples, and grand unified theories predict them. We have never found one.</p>

    <h4>Faraday's law: a changing magnetic field drives a circulating electric field</h4>
    <div class="eq">&nabla;&times;E = &minus;&part;B/&part;t
      <span class="why">A magnetic field changing in time wraps an electric field around itself. The minus sign is Lenz's law, the induced effect always opposing the change that produced it, which is why energy is not created for free.</span></div>
    <p>Every generator and transformer is Faraday's law in hardware, and conceptually it is the first crack in the separation of the two fields.</p>

    <h4>The Amp&egrave;re&ndash;Maxwell law: currents and changing electric fields drive circulating magnetic fields</h4>
    <div class="eq">&nabla;&times;B = &mu;&#8320;J + &mu;&#8320;&epsilon;&#8320; &part;E/&part;t
      <span class="why">The curl of the magnetic field has two sources: the current density J flowing through the region, and the rate of change of the electric field there. The first term is &Oslash;rsted and Ampere; the second is entirely Maxwell's, and it is the reason the whole set holds together.</span></div>

    <h3>The displacement current: one added term, and everything changes</h3>
    <p>Amp&egrave;re's original law had only the current term, and it is quietly broken. Take a capacitor being charged and draw a loop around the wire feeding it. Stretch a flat surface across the loop: the wire punctures it, current flows through, you get an answer. Now stretch a bulging surface through the gap between the plates instead. Same loop, but no current crosses this surface at all — the charge stops on the plate. One loop, two answers, depending on a surface you were free to imagine however you liked. That is a contradiction, and it amounts to violating conservation of charge.</p>
    <p>Maxwell's fix was to notice what <em>is</em> happening between the plates: no charge crosses the gap, but the electric field there is growing. He proposed that a changing electric field sources a magnetic field exactly as a real current does, and called it the <strong>displacement current</strong>. Add it and the two surfaces agree, charge conservation becomes automatic, and the four equations are consistent for the first time.</p>
    <div class="callout"><b>Why this matters so much:</b> Maxwell added the term for internal consistency, not because any experiment demanded it — and that term is precisely what lets the fields sustain each other in empty space, with no charges anywhere.</div>

    <h3>Light falls out of the equations</h3>
    <p>Take the four equations in a vacuum. Faraday's law says a changing B makes a circulating E; the Amp&egrave;re&ndash;Maxwell law, thanks to the new term, says a changing E makes a circulating B. Each field feeds the other. Combine the two curl equations and each field separately satisfies:</p>
    <div class="eq">&nabla;&sup2;E = &mu;&#8320;&epsilon;&#8320; &part;&sup2;E/&part;t&sup2;
      <span class="why">This is the wave equation. Its solutions are disturbances that travel without spreading and without needing anything to travel through.</span></div>
    <div class="eq">c = 1/&radic;(&mu;&#8320;&epsilon;&#8320;)
      <span class="why">The speed is fixed by the permittivity and permeability of free space — two constants measurable with a capacitor and a coil, in a laboratory, in the dark, with no reference to light at all. Maxwell put the numbers in and got three hundred thousand kilometres per second.</span></div>
    <p>Fizeau had already measured the speed of light to within a per cent of that figure. Maxwell drew the only reasonable conclusion: light <em>is</em> an electromagnetic wave. Radio, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are one phenomenon differing only in wavelength. Hertz generated and detected radio waves in 1887.</p>

    <h3>Potentials and gauge freedom</h3>
    <p>Because B has no divergence it can be written as the curl of something, the <strong>magnetic vector potential</strong> A. Feed that into Faraday's law and E follows from A and the familiar <strong>electric potential</strong> (voltage). But the potentials are not unique: add the gradient of any smooth function to A, adjust the voltage to match, and every measurable field is identical.</p>
    <div class="eq">A &rarr; A + &nabla;&chi;,&nbsp;&nbsp; V &rarr; V &minus; &part;&chi;/&part;t
      <span class="why">Change the potentials this way, with any function chi you care to invent, and E and B do not budge. The description contains information the world does not.</span></div>
    <p>This redundancy is <strong>gauge freedom</strong>, and the insistence that no prediction may depend on which gauge you choose is <strong>gauge invariance</strong>. It looks like a nuisance; it is the deepest organising principle we have. Turn the logic round: <em>demand</em> that a theory of charged matter be unchanged when you rotate the quantum phase of the matter field independently at every point in spacetime, and it cannot be done unless you introduce a new field transforming exactly as A does — the electromagnetic field, Maxwell's equations attached. The force is the price of the symmetry.</p>
    <div class="callout"><b>The template:</b> electromagnetism is the simplest gauge theory. Make the symmetry group richer and the same construction generates the weak and strong forces. The Standard Model is this one trick, applied three times.</div>

    <h3>The Lorentz force, and fields that carry energy and momentum</h3>
    <p>Maxwell's equations say what the fields do given the charges. One more law says what the charges do given the fields:</p>
    <div class="eq">F = q(E + v &times; B)
      <span class="why">A charge feels a push along the electric field whatever its motion, plus a push at right angles to both its velocity and the magnetic field. That second part is always perpendicular to the motion, which is why magnetic fields bend charged particles into circles but never speed them up.</span></div>
    <p>Together with the four field equations, this closes the theory. Now ask where the energy is. When a battery drives a current, energy appears as heat in the resistor — but it does not travel inside the wire. It flows through the space around it, in the field, at a rate given by the <strong>Poynting vector</strong>:</p>
    <div class="eq">S = (1/&mu;&#8320;) E &times; B
      <span class="why">Energy flows perpendicular to both fields, at a rate set by their product. Sunlight delivering a kilowatt to every square metre of ground is this quantity, arriving.</span></div>
    <p>Fields also carry <strong>momentum</strong>, which is why light exerts pressure and comet tails point away from the Sun. Move two charges suddenly and the momentum ledger only balances at every instant if the field holds the difference during the light-travel time between them. The field is as real as the particles.</p>

    <h3>Why electromagnetism demanded relativity</h3>
    <p>There is a bomb buried in the wave equation. It predicts one definite speed for light — relative to <em>what</em>? Newtonian physics says velocities add, so light from a moving torch should outrun light from a stationary one. Maxwell's equations refuse. Worse, apply the Galilean transformation and they change form, making electromagnetism correct in one special frame only. The nineteenth century named that frame the aether; Michelson and Morley found nothing.</p>
    <p>Einstein's 1905 resolution was to take the equations at their word. The speed of light really is the same for every observer, the aether is unnecessary, and space and time must give way. The correct frame-change rules are the Lorentz transformations, under which Maxwell's equations are exactly invariant — they needed no modification, which is remarkable given that Newtonian mechanics had to be rebuilt. The <em>frames</em> module works through those transformations in detail; the point here is that relativity was already inside electromagnetism, waiting to be noticed.</p>
    <p>The unification then goes deeper. Take a neutral current-carrying wire with a charge drifting alongside it. In your frame the charge moves through a magnetic field and feels a magnetic force. Ride along with it and it is not moving, so there can be no magnetic force — yet it must still be deflected, because whether it hits the wire cannot depend on who is watching. In that frame, length contraction affects the positive lattice and the conduction electrons by different amounts, the wire is no longer neutral, and magnetism has become plain electrostatic attraction. <strong>Magnetism is electrostatics seen from a moving frame</strong> — a relativistic effect visible at walking pace, only because the electric force is so strong that a tiny correction to it still lifts iron filings.</p>
    <p>Formally, E and B are not two fields. They are the six components of one antisymmetric object, the <strong>electromagnetic field tensor</strong>, and changing frame rotates their values into each other as changing viewpoint rotates the x and y parts of a vector. In tensor form the four equations collapse to two: one field, one law.</p>
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
    <p>Thermal physics runs on two levels at once, and keeping them apart is half the battle. <strong>Thermodynamics</strong> is the view from above: a small set of laws relating heat, work, temperature and entropy, derived in the age of steam and valid for engines, chemical reactions and black holes alike. Its power is that it does not care what the system is made of. <strong>Statistical mechanics</strong> is the view from below: an account of where those laws come from, given that matter is made of vast numbers of particles obeying ordinary mechanics.</p>
    <p>The central miracle is that near-certain laws emerge from blind randomness. No single air molecule obeys the gas laws; a mole of them obeys them to a precision no instrument can challenge, because relative fluctuations shrink as one over the square root of the particle number.</p>

    <h3>Thermodynamics: laws that do not care what you are made of</h3>
    <p>Thermodynamics was assembled before anyone had to believe in atoms, which is why it survived the quantum revolution untouched. It uses a handful of macroscopic variables and makes statements no microscopic detail can overturn. Four laws do the work, each best understood by what it <em>forbids</em>.</p>

    <h4>The zeroth law</h4>
    <p>If A is in thermal equilibrium with C and B is too, then A and B are in equilibrium with each other. This sounds trivial and is not: it is what makes temperature a property of a body rather than of a particular pairing. Without it thermometers would not work. It forbids intransitive equilibria.</p>

    <h4>The first law</h4>
    <p>Energy is conserved once you count heat as a form of energy transfer. Formally, the change in a system's <strong>internal energy</strong> equals the heat added minus the work done by the system.</p>
    <div class="eq">dU = &delta;Q &minus; &delta;W
      <span class="why">Internal energy U is a property the system possesses. Heat Q and work W are not — they are two channels for energy crossing the boundary. Work is a coordinated macroscopic push, like a piston moving; heat is uncoordinated microscopic jostling. Any mixture of the two reaches the same U, which is why the d and the deltas differ.</span></div>
    <p>What it forbids: perpetual motion of the first kind, a machine producing energy from nothing.</p>

    <h4>The second law</h4>
    <p>The entropy of an isolated system never decreases. In Clausius's form, heat does not flow spontaneously from cold to hot; in Kelvin's, no cyclic process converts heat entirely into work with no other effect. What it forbids is perpetual motion of the second kind — an engine drawing heat from the ocean to drive a ship, which breaks no conservation law and yet cannot be built. It is the only fundamental law with a direction built in; that direction belongs to the <em>entropy and the arrow of time</em> module.</p>

    <h4>The third law</h4>
    <p>As temperature approaches absolute zero, entropy approaches a constant, zero for a perfect crystal. What it forbids is reaching absolute zero in finitely many steps: each halving of the temperature costs more than the last. It also fixes the zero of the entropy scale.</p>

    <h3>Entropy from two directions</h3>
    <p>Entropy arrives twice in the history of physics, from opposite ends, and that the two definitions agree is the foundation of the whole subject. Clausius came first, in 1865, with steam engines and no atoms:</p>
    <div class="eq">dS = &delta;Q(reversible)/T
      <span class="why">Add heat reversibly to a system at temperature T and its entropy rises by that heat divided by T. Defined this way entropy is purely operational — measurable with a thermometer and a calorimeter, with no interpretation attached.</span></div>
    <p>Boltzmann came second, and gave it meaning:</p>
    <div class="eq">S = k ln W
      <span class="why">Entropy is Boltzmann's constant times the logarithm of W, the number of microscopic arrangements consistent with the macrostate. The logarithm makes entropy additive: combine two independent systems and the counts multiply while the entropies add.</span></div>
    <p>The agreement is a theorem, not a definition. Count the microstates of an ideal gas, take the logarithm, and you recover exactly the entropy Clausius had measured, Boltzmann's constant serving only to convert counting into joules per kelvin. That is the moment thermodynamics became derived rather than fundamental.</p>

    <h3>Microstates, macrostates and the three ensembles</h3>
    <p>A <strong>microstate</strong> is a complete specification: every position and momentum, or in quantum language one state vector. A <strong>macrostate</strong> is what you can measure — energy, volume, temperature — and corresponds to an enormous set of microstates. <strong>Multiplicity</strong> W is how many. How you count depends on what the system may exchange with its surroundings:</p>
    <ul>
      <li><strong>Microcanonical:</strong> isolated, energy and particle number fixed. Every accessible microstate of that energy is equally likely, and entropy is k times the log of how many there are.</li>
      <li><strong>Canonical:</strong> in contact with a heat bath at temperature T, free to exchange energy. Energy fluctuates, temperature is fixed. This describes almost every real experiment.</li>
      <li><strong>Grand canonical:</strong> exchanges energy and particles with a reservoir at fixed temperature and chemical potential. Needed for electrons in a metal.</li>
    </ul>
    <p>In the canonical ensemble the probability of a state falls exponentially with its energy — the <strong>Boltzmann distribution</strong> — and summing that weight over all states gives the most useful object in the subject:</p>
    <div class="eq">Z = &Sigma; exp(&minus;E/kT)
      <span class="why">Z sums the Boltzmann factor over all states. It looks like a normalisation constant; it is really a generating function. Take its logarithm and differentiate with respect to temperature for the energy, volume for the pressure, chemical potential for the particle number. Every thermodynamic quantity is a derivative of ln Z.</span></div>
    <div class="callout"><b>The practical upshot:</b> compute Z once and you are finished. All the thermodynamics sits in one sum, and all the work is in evaluating it.</div>

    <h3>Temperature is a derivative, and it can go negative</h3>
    <p>Temperature is not "how hot something feels" and not "how much heat something contains". Its actual definition is structural:</p>
    <div class="eq">1/T = &part;S/&part;U
      <span class="why">Temperature is the reciprocal of how fast entropy rises when you add energy. A cold system gains a lot of entropy per joule, so it is greedy for energy; a hot one gains little and gives energy up readily. Heat flows from hot to cold because that raises the total entropy of the pair.</span></div>
    <p>This is what temperature <em>is</em>, and it explains the second law's directionality in a line. It also has a startling consequence. Almost all systems have entropy that keeps rising with energy, so T is positive. But a system with a bounded energy spectrum, such as spins that can only be up or down, runs out of room: past the halfway point, adding energy <em>reduces</em> the number of arrangements, the derivative flips sign, and the temperature is negative.</p>
    <p>Such a system is not cold. It is hotter than infinitely hot: touch it to any positive-temperature body and energy flows out of it. The sensible ordering runs from plus zero through plus infinity, wraps to minus infinity, and returns to minus zero. Population-inverted laser media are exactly this.</p>

    <h3>Free energy: what systems actually minimise</h3>
    <p>An isolated system maximises entropy. Real systems sit in a room, and the room is part of the budget. Maximising the total entropy of system plus surroundings at fixed temperature turns out to be identical to minimising a property of the system alone:</p>
    <div class="eq">F = U &minus; TS
      <span class="why">The Helmholtz free energy. At fixed temperature and volume a system settles where F is smallest. The terms compete: U pulls towards ordered low-energy configurations while the minus TS term rewards states with many arrangements. Temperature sets the exchange rate between order and possibility.</span></div>
    <p>That competition explains a great deal. Ice melts at zero degrees because above it the entropy term outweighs the energy cost of breaking the crystal; proteins fold and rubber contracts when heated for the same reason. At constant pressure the relevant quantity is the Gibbs free energy. <strong>Systems do not minimise energy; they minimise free energy.</strong></p>

    <h3>Where classical counting fails, and quantum statistics</h3>
    <p>Classical statistical mechanics predicts <strong>equipartition</strong>: at equilibrium every quadratic degree of freedom holds an average energy of one half kT. Count degrees of freedom and you often get the right heat capacity. Not always, and the failures are spectacular.</p>
    <ul>
      <li><strong>Heat capacities collapse when cold.</strong> Diatomic gases behave as though their vibrational modes are not there at room temperature, and solids lose their heat capacity entirely near absolute zero, contradicting the classical Dulong&ndash;Petit result. Einstein and then Debye showed why: if a mode's energy levels are spaced further apart than kT, it cannot be excited at all. Degrees of freedom freeze out as you cool.</li>
      <li><strong>The ultraviolet catastrophe.</strong> Apply equipartition to the electromagnetic field in a hot cavity and every one of the infinitely many short-wavelength modes claims its half kT, so the energy density diverges and any warm object should blaze with infinite ultraviolet. Planck's 1900 fix — a mode of frequency f can hold energy only in whole multiples of hf, making high-frequency modes too expensive to excite — was the first quantum hypothesis in physics.</li>
    </ul>
    <p>Quantum mechanics also changes the counting itself. Identical particles are genuinely indistinguishable, so swapping two does not make a new microstate, and the classical overcount yields nonsense such as non-additive entropy (the Gibbs paradox). Worse, particles come in two kinds with opposite behaviour. <strong>Fermions</strong> — electrons, protons, neutrons — refuse to share a state, giving Fermi&ndash;Dirac statistics, the Pauli exclusion principle, the periodic table, the rigidity of matter and the pressure holding up white dwarfs. <strong>Bosons</strong> — photons, helium-4 atoms — pile into the same state, giving Bose&ndash;Einstein statistics, lasers and superfluidity. One sign, two different worlds.</p>

    <h3>Phase transitions, universality and emergence</h3>
    <p>Heat a magnet past a critical temperature and it abruptly stops being magnetic. A <strong>phase transition</strong> is a point where the free energy becomes non-analytic, which is striking, since the free energy is built from smooth ingredients. It only occurs in the limit of infinitely many particles — the first hint that something collective is going on.</p>
    <p>Transitions are classified by an <strong>order parameter</strong>: a quantity zero in one phase and non-zero in the other, such as the magnetisation of a ferromagnet. First-order transitions jump discontinuously and carry latent heat. Continuous ones approach zero smoothly, and near the critical point quantities diverge or vanish as power laws whose <strong>critical exponents</strong> turn out to be identical for systems with nothing in common: a three-dimensional magnet at its Curie point and a fluid at its liquid&ndash;gas critical point share them to several decimal places.</p>
    <p>This is <strong>universality</strong>, and the explanation is the <strong>renormalisation group</strong>, from Kadanoff and Wilson. At a critical point fluctuations occur at every length scale at once, so the system looks statistically identical at every magnification. Averaging over short-distance detail shows that almost all microscopic specifics are irrelevant: they wash out under repeated coarse-graining, and only the dimensionality of space and the symmetry of the order parameter survive to fix the exponents. Systems sharing those two features share their critical behaviour, whatever they are made of. The technique was later carried into quantum field theory, where it explains why the Standard Model works despite our ignorance of higher energies.</p>
    <div class="callout"><b>More is different:</b> in his 1972 essay of that title, P. W. Anderson argued that reductionism does not imply constructionism. Knowing the laws governing the parts does not let you deduce the behaviour of the whole, because at each level of complexity new organising principles appear — superconductivity, rigidity, magnetism, the very concept of temperature — none present in the single-particle description.</div>
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
    { name: "Feynman Lectures Vol. I", desc: "Chapters 39 to 46 on kinetic theory, the laws of thermodynamics and ratchets.", url: "https://www.feynmanlectures.caltech.edu/I_toc.html", type: "book", icon: "📚" },
    { name: "Susskind — Statistical Mechanics", desc: "Accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});
/* ===== TRACK 2: RELATIVITY & THE COSMOS — DEEPENED REWRITES (sr, gr) ===== */

addModule({
  id: "sr", track: "relativity", order: 1,
  title: "Special relativity",
  fields: ["relativity"], readMins: 30,
  summary: "Two modest postulates dismantle universal time: simultaneity becomes relative, clocks and rulers disagree, spacetime replaces space and time, and mass turns out to be the invariant length of a four-vector.",
  lesson: `
    <h3>The big picture</h3>
    <p>Special relativity is the shortest route in physics from almost nothing to almost everything. Einstein's 1905 paper assumes two things, neither exotic, and extracts from them that clocks disagree, that rulers disagree, that "now" has no universal meaning, that mass and energy are one quantity in different units, and that there is a speed no material object can reach. Nothing is smuggled in. The theory is usually introduced as a theory of light, which damages understanding: it is about the <strong>structure of spacetime</strong>, and light matters only because it travels at the invariant speed. Every other theory must respect that structure.</p>

    <h3>Two postulates, and how much they cost</h3>
    <p>The first postulate is old and uncontroversial. <strong>The laws of physics take the same form in every inertial frame</strong>: no experiment inside a smoothly moving laboratory can reveal its velocity. Newtonian mechanics already obeys it. The second is the one that breaks things. <strong>Light in vacuum travels at the same speed c for every inertial observer</strong>, whatever the motion of source or observer. Chase a beam at ninety-nine per cent of c and it still retreats at precisely c.</p>
    <p>Both cannot hold in a Newtonian universe, where velocities simply add. Einstein surrendered the assumption nobody had noticed they were making: that a single universal time ticks for everyone. Give that up and the rest is algebra — the Lorentz transformation, rapidity, velocity addition, and the historical road through Maxwell, Michelson and Morley, Lorentz and Poincar&eacute; — all worked through in the <em>Frames and transformations</em> module. This one is about what those equations mean.</p>

    <h3>Simultaneity goes first</h3>
    <p>Most courses teach time dilation first. That is the wrong order: time dilation is a <em>consequence</em> of something more basic, the collapse of universal simultaneity. Take Einstein's own thought experiment. A long train runs at high speed, and lightning strikes both ends at once, scorching marks into train and embankment. Anna stands on the embankment midway between the marks; Ben sits at the centre of the train.</p>
    <p>Light from both strikes reaches Anna together. She is equidistant from the marks and light travels at c, so she rightly concludes the strikes were <strong>simultaneous</strong>. Ben is moving toward the front strike, so its light reaches him first. Apply the second postulate strictly: light travels at c for Ben too, and he sits midway between the ends of his own train. Equal distances, equal speeds, unequal arrival times — only one conclusion is open to him: the front was struck <em>first</em>. He is not mistaken and not compensating for anything; in his frame the strikes were not simultaneous.</p>
    <div class="callout"><b>Why this is the root of everything:</b> measuring a length says where the two ends of an object are <em>at the same time</em>, and comparing clocks asks what each reads <em>at the same time</em>. Observers who disagree about simultaneity must disagree about lengths and clock readings. Length contraction and time dilation are not extra postulates; they are what that disagreement looks like when you measure something.</div>

    <h3>Time dilation, from a light clock</h3>
    <p>The cleanest derivation needs nothing beyond Pythagoras. Build a clock from two mirrors a distance L apart with a light pulse bouncing between them; one tick is a round trip, taking 2L/c in the clock's rest frame. Watch it fly past sideways at speed v and the pulse can no longer go straight up and down, because the mirrors move while it is in flight. It takes a longer diagonal path at the same speed c, so the tick takes longer.</p>
    <div class="eq">(c&middot;t/2)&sup2; = L&sup2; + (v&middot;t/2)&sup2;
      <span class="why">The light path's diagonal is the hypotenuse of a right triangle: vertical side the mirror separation, horizontal side how far the clock moved in half a tick. Solve for t and you get the rest tick multiplied by the Lorentz factor.</span></div>
    <div class="eq">&gamma; = 1 / &radic;(1 &minus; v&sup2;/c&sup2;)
      <span class="why">At everyday speeds gamma differs from one in about the twelfth decimal place and nothing appears to happen. As v approaches c it runs away to infinity: clocks nearly stop and lengths nearly vanish as judged from another frame.</span></div>
    <p>Nothing there used light except as a carrier. Every clock in the moving frame must slow by the same factor: if a light clock and a wristwatch drifted apart you would have an experiment detecting absolute motion, forbidden by the first postulate. Chemistry, radioactive decay and ageing all slow together.</p>

    <h3>Length contraction, and the twins</h3>
    <p>The companion result is that an object of rest length L measures L/&gamma; along its direction of motion and is unchanged across it. The muon experiment shows the two effects are one fact seen twice. A muon created by cosmic rays high in the atmosphere lives about 2.2 microseconds and ought to decay long before reaching the ground, yet muons arrive in quantity. From the ground, its clock runs slow so it survives the trip. In its own frame the clock is normal, but the atmosphere rushes past contracted to a fraction of its thickness, so there is far less distance to cover. Same count, two descriptions.</p>
    <p>Which brings us to the twin paradox. One twin flies to a distant star and returns; the other stays home. Each sees the other's clock run slow while they separate, so why is the outcome not symmetric? The resolution needs no general relativity. <strong>The travelling twin is not in a single inertial frame.</strong> To come back she must turn around, and an accelerometer registers the turn. At that moment she changes inertial frame, and her judgement of which distant events count as "now" swings sharply forward, so the stay-at-home clock jumps ahead in her accounting. Her twin never accelerates and never makes that correction.</p>
    <p>The asymmetry is real and measurable: both twins agree at the reunion about who is younger, because that is a single local comparison of two clocks at one event. Hafele and Keating flew caesium clocks around the world in 1971 and found offsets of hundreds of nanoseconds, matching prediction.</p>

    <h3>Spacetime, the interval and proper time</h3>
    <p>Hermann Minkowski supplied the geometry in 1908: space and time are not separate stages but a single four-dimensional <strong>spacetime</strong>. Different observers slice it into "space" and "time" at different angles, like cutting a loaf on the diagonal, which is why they disagree about durations and lengths. All agree on one combined measure, the <strong>spacetime interval</strong>:</p>
    <div class="eq">&Delta;s&sup2; = (c&Delta;t)&sup2; &minus; (&Delta;x)&sup2; &minus; (&Delta;y)&sup2; &minus; (&Delta;z)&sup2;
      <span class="why">The same number for every inertial observer. That minus sign is the whole difference between Minkowski and Euclidean geometry, and it is what makes time different in kind from space rather than a fourth direction.</span></div>
    <p>The minus sign generates causal structure. If the interval is timelike, one event can influence the other and every observer agrees which came first. If it is spacelike, no signal connects them and observers disagree about their order — harmless, since neither can cause the other. If it is zero, only light connects them, and that boundary case sweeps out the <strong>light cone</strong> separating an event's causal past and future from the elsewhere it can never touch.</p>
    <p>Along a timelike path, the interval divided by c is the <strong>proper time</strong>: what a clock carried along that path actually reads. Coordinate time depends on your frame; proper time is a measurement everyone agrees on. Straight worldlines maximise proper time, which is the geometric statement of the twin paradox — the inertial twin takes the longest-in-time route.</p>

    <h3>Four-vectors: the natural language</h3>
    <p>Once you accept the geometry, the sensible way to write physics is in objects that transform cleanly under Lorentz transformations: <strong>four-vectors</strong>. The <strong>four-position</strong> gathers an event's time and space coordinates into one object. The <strong>four-velocity</strong> is its rate of change with respect to <em>proper time</em> rather than coordinate time, and that choice is the crucial one, because proper time is invariant. Multiply four-velocity by rest mass and you have the <strong>four-momentum</strong>, whose time component is energy divided by c and whose space components are the relativistic momentum.</p>
    <p>Every four-vector has an invariant length, computed with the same minus signs as the interval. For four-momentum that length has a striking meaning:</p>
    <div class="eq">(E/c)&sup2; &minus; |p|&sup2; = (mc)&sup2;
      <span class="why">The invariant length of the four-momentum is the rest mass. Energy and momentum each depend on who is looking; this combination does not. Mass is not a quantity of stuff but a geometric invariant of a four-vector.</span></div>
    <p>This is why four-vectors earn their keep. Conservation of energy and of momentum become one law: four-momentum is conserved, and observers merely slice it into time and space parts differently. Particle physicists work in these terms because invariant mass survives the change of frame.</p>

    <h3>What E = mc&sup2; actually says</h3>
    <p>Rearranging that invariant gives the relation that deserves the fame:</p>
    <div class="eq">E&sup2; = (pc)&sup2; + (mc&sup2;)&sup2;
      <span class="why">The full energy-momentum relation. Set momentum to zero and you recover E = mc squared, the rest energy. Set mass to zero and you get E = pc, correctly giving massless particles such as photons real energy and momentum despite having no mass at all.</span></div>
    <p>E = mc&sup2; is therefore the special case for a body at rest, and it says precisely that <strong>a body at rest has an energy proportional to its mass</strong>, with c&sup2; as the exchange rate. It is not an alchemical conversion; mass <em>is</em> energy, already present, and nuclear reactions release a fraction of it by rearranging binding. Fusing hydrogen to helium liberates about 0.7 per cent of the mass, enough to run the Sun.</p>
    <div class="callout"><b>A deprecated way of speaking:</b> older texts say mass "increases with speed", defining a relativistic mass of gamma times m. Modern practice is that <em>mass is invariant</em> — the rest mass, full stop — and that energy and momentum are what grow. The speed limit is then stated correctly: accelerating a massive body to c needs infinite energy because gamma diverges, not because anything gets heavier.</div>

    <h3>Doppler, aberration and the record</h3>
    <p>Two more effects complete the picture. The <strong>relativistic Doppler shift</strong> combines the classical shift from approach or recession with time dilation of the source's own oscillation. That extra factor produces something classically impossible: a <strong>transverse Doppler shift</strong>, a pure redshift seen even when the source moves exactly perpendicular to the line of sight. Ives and Stilwell measured it in 1938, and it remains one of the cleanest confirmations of time dilation. <strong>Relativistic aberration</strong> is the companion effect on direction: apparent star positions crowd toward the direction of travel, and radiation from a fast source is beamed forward into a cone of angle roughly 1/&gamma;, which is why the jets of active galaxies look so bright when aimed at us.</p>
    <p>The evidence is not thin. Atmospheric muons reach the ground; storage-ring muons at CERN live longer by exactly gamma; accelerators would miss every target if built on Newtonian dynamics; and GPS would drift kilometres a day without correction. Every particle-physics result of the last seventy years is a relativity test that passed.</p>
    <p>Special relativity is not a theory about light, or fast rockets, or strange things at the edge of the possible. It is a constraint on <em>the shape of spacetime itself</em> that every other theory must respect. Quantum mechanics had to be rebuilt as quantum field theory to comply, and that alone forces antimatter and spin. Relativity is not one theory among many; it is the frame the others hang in.</p>
  `,
  keyIdeas: [
    "The speed of light is identical for all observers, regardless of their motion.",
    "To keep c constant, moving clocks run slow (time dilation) and moving lengths contract.",
    "Simultaneity is relative: there is no universal 'now' shared across the universe.",
    "Space and time are one four-dimensional spacetime; observers agree on the invariant spacetime interval.",
    "E = mc² means mass and energy are interchangeable; a little mass is a lot of energy.",
    "Nothing with mass or information can reach the speed of light.",
    "Proper time is what a clock physically reads along its own worldline, and the twin paradox resolves because only the travelling twin accelerates and changes inertial frame — a real, measured asymmetry.",
    "Four-momentum unifies energy and momentum into one conserved four-vector whose invariant length is the rest mass, so E squared equals (pc) squared plus (mc squared) squared is the fundamental relation and handles massless particles correctly."
  ],
  talk: {
    oneliners: [
      "Special relativity is one stubborn fact taken seriously: light's speed is the same for everyone, so time and space have to bend to allow it.",
      "Moving clocks run slow and moving rulers shrink — not as an illusion, but really; GPS has to correct for it.",
      "The biggest shock isn't time dilation, it's that 'now' is relative — simultaneous events for me aren't simultaneous for you.",
      "E = mc² just says mass is concentrated energy, and c² is the enormous exchange rate.",
      "The twin paradox isn't a paradox: only one twin turns around, feels it, and swaps inertial frames, and that asymmetry is measurable."
    ],
    myths: [
      { m: "Relativity says 'everything is relative'.", t: "Quite the opposite — it's built on absolutes: the speed of light and the spacetime interval are the same for everyone." },
      { m: "Time dilation is just an illusion or a clock malfunction.", t: "It is physically real and measured routinely, from atmospheric muons to atomic clocks on aircraft and satellites." },
      { m: "Nothing can ever travel faster than light, full stop.", t: "Nothing carrying mass or information can; abstract things like the expansion of space or a laser spot's sweep can exceed c without breaking causality." },
      { m: "Mass increases as you approach the speed of light.", t: "That is deprecated language. Mass is the invariant length of the four-momentum and never changes; it is the energy and momentum that grow without bound as gamma diverges." }
    ],
    terms: [
      { term: "Inertial frame", def: "A non-accelerating point of view; all such frames are physically equivalent." },
      { term: "Lorentz factor (γ)", def: "1/√(1−v²/c²); the stretch/shrink factor for time and length at speed v." },
      { term: "Time dilation", def: "A moving clock runs slow relative to a stationary observer." },
      { term: "Length contraction", def: "A moving object is shortened along its direction of motion." },
      { term: "Simultaneity (relativity of)", def: "Whether two separated events happen 'at the same time' depends on the observer." },
      { term: "Spacetime interval", def: "The observer-independent measure combining time and space, with a relative minus sign." },
      { term: "Proper time", def: "The interval measured along a worldline; what a clock carried on that path actually reads, and an invariant everyone agrees on." },
      { term: "Four-momentum", def: "The four-vector combining energy and momentum; its invariant length is the rest mass, giving E squared equals (pc) squared plus (mc squared) squared." }
    ]
  },
  test: [
    { q: "What are the two postulates of special relativity?", a: "1) The laws of physics are the same in all inertial (non-accelerating) frames. 2) The speed of light in vacuum is the same for all inertial observers, independent of the motion of source or observer." },
    { q: "Why do moving clocks run slow?", a: "Because the speed of light is fixed for everyone, keeping c constant across frames in relative motion forces time and distance to transform. The result is that a clock moving relative to you ticks slower by the Lorentz factor γ." },
    { q: "What does the relativity of simultaneity mean?", a: "Two events judged simultaneous by one observer will generally not be simultaneous for another observer moving relative to the first. There is no universal 'now' across space." },
    { q: "What is the physical content of E = mc²?", a: "Mass and energy are equivalent; mass is an extremely dense store of energy, with the conversion factor c². It underlies stellar fusion and nuclear energy, and implies massive objects cannot reach light speed." },
    { q: "Resolve the twin paradox, and say why the four-momentum picture matters.", a: "The situation is not symmetric: the travelling twin must turn around, feels the acceleration, and changes inertial frame, so her judgement of which distant events are simultaneous swings forward and the stay-at-home clock jumps ahead in her accounting. The stay-at-home twin never accelerates and ages more, and the difference is a single local comparison at the reunion, confirmed by flown atomic clocks and storage-ring muons. Four-momentum matters because it packages energy and momentum into one conserved object whose invariant length is the rest mass, so E squared equals (pc) squared plus (mc squared) squared is more fundamental than E = mc squared and correctly gives massless photons energy E = pc." }
  ],
  resources: [
    { name: "David Tong — Dynamics and Relativity", desc: "Free notes; the special-relativity sections are excellent.", url: "https://www.damtp.cam.ac.uk/user/tong/relativity.html", type: "notes", icon: "📄" },
    { name: "MIT 8.033 — Relativity", desc: "Full undergraduate course on special (and intro general) relativity.", url: "https://ocw.mit.edu/courses/8-033-relativity-fall-2006/", type: "course", icon: "🎓" },
    { name: "Susskind — Special Relativity & Classical Field Theory", desc: "Full lecture course with the spacetime view.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Feynman Lectures Vol. I (Ch. 15–17)", desc: "Beautifully clear chapters on relativity, spacetime and relativistic energy and momentum.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" },
    { name: "Sean Carroll — Lecture Notes on General Relativity (Ch. 1)", desc: "Chapter 1 is a first-class treatment of Minkowski geometry, four-vectors and tensors.", url: "https://arxiv.org/abs/gr-qc/9712019", type: "notes", icon: "📄" }
  ]
});

addModule({
  id: "gr", track: "relativity", order: 2,
  title: "General relativity",
  fields: ["relativity"], readMins: 32,
  summary: "Gravity is not a force but the curvature of spacetime. The equivalence principle forces the geometric picture, the field equations tie curvature to energy and momentum, and the theory predicts its own breakdown at singularities.",
  lesson: `
    <h3>The big picture</h3>
    <p>General relativity, completed in November 1915 after eight years of struggle, is Einstein's masterpiece and by common consent the most beautiful theory in physics. Its central claim overturns two and a half centuries of Newton: <strong>gravity is not a force</strong>. It is the curvature of spacetime. Matter and energy warp the geometry around them, and everything else follows the straightest paths through it. Weight is not a pull but the ground pushing us off the path we would otherwise take. Special relativity gave spacetime a fixed geometry all physics must respect; general relativity makes that geometry <em>dynamical</em> — a participant rather than a stage.</p>

    <h3>The happiest thought</h3>
    <p>Einstein called it the happiest thought of his life: a person in free fall does not feel their own weight. That is the seed of the theory, and it splits in two.</p>
    <p>The <strong>weak equivalence principle</strong>, tested by Galileo and refined ever since, is that all bodies fall with the same acceleration whatever their mass or composition. In Newtonian terms this is an odd coincidence: the mass in F = ma has no reason to equal the mass in the law of gravitation, yet they agree to better than one part in 10&#185;&#8309;. The <strong>strong equivalence principle</strong> promotes it: in a small enough region, <em>all</em> experiments in a freely falling laboratory give the same results as in an inertial laboratory in deep space.</p>
    <p>The elevator thought experiment makes this concrete. Seal yourself in a windowless lift. If you float, you cannot tell whether you are adrift in empty space or plummeting down a shaft; if you stand at normal weight, you cannot tell whether you are parked on Earth or towed through deep space at 9.8 metres per second squared. Shine a torch horizontally across the accelerating lift and the beam strikes the far wall below the height it left, because the lift rose during the flight. The same must happen in a gravitational field, so <strong>light must bend in gravity</strong> — Einstein's conclusion in 1907, eight years before the equations.</p>

    <h3>Tides: what separates real gravity from acceleration</h3>
    <p>The word doing the work above is <em>locally</em>. Equivalence is exact only over a region small enough that the field is uniform, and no real field is. Release two balls side by side in a lift falling toward Earth and they drift slowly <em>together</em>, because both fall toward the planet's centre and those directions are not quite parallel. Release two one above the other and they drift <em>apart</em>, because the lower is pulled harder. In an accelerating rocket, neither happens.</p>
    <p>These <strong>tidal effects</strong> are the observable, frame-independent content of gravity, and they are what curvature means. No choice of coordinates removes them, which is the signature of genuine curvature rather than an awkward map. Ocean tides are the same thing at planetary scale: the Moon pulls the near side harder than the far side.</p>
    <div class="callout"><b>The key move:</b> a freely falling body feels nothing, so free fall — not rest — is the natural state of motion, and free-falling objects travel in straight lines. It is spacetime that is curved, which makes those straight lines look, to us on a planet, like the arcs of falling stones and the ellipses of orbits.</div>

    <h3>The geometric turn</h3>
    <p>The straightest available path through a curved geometry is a <strong>geodesic</strong>, and gravitational motion reduces to one sentence: <em>free bodies follow timelike geodesics</em>. On a sphere geodesics are great circles, which is why flights from London to Los Angeles arc north over Greenland. In spacetime the same logic applies in four dimensions with a minus sign, and the geodesic is the path of <strong>maximum proper time</strong>.</p>
    <p>This dissolves a very old question. The Moon is not being pulled and is not held up; it coasts along the straightest track available in the geometry the Earth's mass has made, and that track closes on itself. Its four-acceleration is zero. Meanwhile you, sitting still in a chair, <em>are</em> accelerating, because the chair pushes you off the geodesic you would follow if the floor gave way. Newton's puzzle of action at a distance never arises.</p>
    <p>For anything moving slowly compared with light, the dominant curvature is not of space but of <strong>time</strong>. You fall toward the Earth mainly because clocks tick slower closer to it, so the path of maximum proper time bends downward. The rubber-sheet picture is an analogy of the wrong dimension: it shows curved space and quietly assumes the gravity it is meant to explain.</p>

    <h3>The metric, and what curvature measures</h3>
    <p>All the geometry lives in one object, the <strong>metric tensor</strong>: it gives the interval between two nearby events from their coordinate separations.</p>
    <div class="eq">ds&sup2; = g<sub>&mu;&nu;</sub> dx^&mu; dx^&nu;
      <span class="why">Ten independent functions of position. In flat spacetime they reduce to the plus and minus ones of Minkowski geometry; near a mass they vary from place to place, and that variation is the gravitational field.</span></div>
    <p>This is why the theory is written in tensors: physics must not depend on arbitrary coordinate labels, so the equations use objects that transform properly under any relabelling. Two derived objects do the heavy lifting. The <strong>Christoffel symbols</strong> say how much a vector's components must change to keep it pointing the same way as you slide it along. They encode the apparent gravitational acceleration, and being partly coordinate artefacts they can always be set to zero at a point — the equivalence principle in mathematical dress.</p>
    <p>What you cannot make vanish is the <strong>Riemann curvature tensor</strong>. It measures the failure of parallel transport to commute: carry a vector around a small closed loop and in curved spacetime it returns rotated. More physically it measures <em>geodesic deviation</em> — the rate at which two initially parallel free-falling paths converge or diverge, which is the tidal effect above. If it vanishes everywhere, spacetime is flat and any apparent gravity is a coordinate illusion.</p>

    <h3>The field equations</h3>
    <p>The theory compresses into one line — really ten coupled non-linear equations:</p>
    <div class="eq">G<sub>&mu;&nu;</sub> + &Lambda;g<sub>&mu;&nu;</sub> = (8&pi;G/c&#8308;) T<sub>&mu;&nu;</sub>
      <span class="why">The left side is pure geometry: the Einstein tensor, a combination of curvature that is automatically conserved, plus an optional cosmological constant term. The right side is pure content: the stress-energy tensor, covering all matter, radiation, pressure and stress. The constant in front is fixed by requiring Newtonian gravity in the weak, slow limit.</span></div>
    <p>John Wheeler's summary is unimprovable: <strong>spacetime tells matter how to move; matter tells spacetime how to curve</strong>. The two halves are not independent, which makes the equations hard. Curvature depends on the matter, the matter's motion depends on the curvature, and gravitational energy itself gravitates — so the equations are non-linear and solutions cannot be added. Exact solutions are rare, and the field runs on approximations and supercomputers.</p>

    <h3>What gravitates, and the classic tests</h3>
    <p>The right-hand side quietly corrects Newton. The source of gravity is not mass but the <strong>stress-energy tensor</strong>, which includes energy density, momentum density and, crucially, <strong>pressure and stress</strong>. Pressure gravitates. A box of light has weight though photons are massless, and inside a collapsing star the pressure resisting collapse adds to the gravity driving it. It is also why a negative-pressure component behaves repulsively and accelerates expansion.</p>
    <ul>
      <li><strong>Mercury's perihelion.</strong> Mercury's orbital ellipse slowly rotates. Newtonian perturbations account for nearly all of it, but 43 arcseconds per century stayed unexplained for half a century, prompting astronomers to invent an unseen planet. Einstein's theory produced the 43 arcseconds with no free parameters — a prediction of an <em>existing</em> anomaly, not a retrofit.</li>
      <li><strong>Light bending, and 1919.</strong> The equivalence principle alone gives a deflection of 0.87 arcseconds at the Sun's limb. Full general relativity gives exactly twice that, 1.75 arcseconds, because for something moving at c the curvature of space contributes as much as the curvature of time. Eddington's eclipse expeditions of May 1919 found the larger value and made Einstein famous. The data were noisy, but radio interferometry has since confirmed the prediction to a hundredth of a per cent, and lensing is now a routine tool for mapping dark matter.</li>
      <li><strong>Gravitational redshift.</strong> Light climbing out of a well loses energy and reddens. Pound and Rebka caught it in 1959 over 22.5 metres of a Harvard tower, using the M&ouml;ssbauer effect to measure a shift of two parts in 10&#185;&#8309;.</li>
      <li><strong>The Shapiro delay.</strong> Radar passing near the Sun returns measurably late, because it crosses a region where clocks run slow — roughly 200 microseconds for a grazing round trip. Predicted by Irwin Shapiro in 1964, confirmed with Venus and Viking, and measured to parts in 10&#8309; with Cassini.</li>
    </ul>

    <h3>Time dilation in your pocket, frame dragging, and waves</h3>
    <p>Gravitational time dilation is not exotic: clocks deeper in a potential well genuinely run slow, your head ages faster than your feet, and optical clocks resolve the difference over a height change of centimetres. The consequence is in every phone. GPS satellites lose about 7 microseconds a day to their orbital speed and gain about 45 to the weaker gravity at altitude. The net 38 microseconds would put positions out by roughly 10 km per day, so satellite clocks are detuned before launch.</p>
    <p><strong>Frame dragging</strong> has no Newtonian analogue: a rotating mass drags spacetime around with it, so an orbiting gyroscope slowly precesses. Gravity Probe B measured this around the Earth in 2011, some 37 milliarcseconds per year, and LAGEOS confirmed it.</p>
    <p><strong>Gravitational waves</strong> are ripples in the metric itself, travelling at c. With no negative gravitational charge there is no dipole radiation as in electromagnetism; the leading term is <strong>quadrupole</strong>, so a spherically symmetric pulsation radiates nothing. The waves are <em>transverse</em>, stretching space along one axis while squeezing the perpendicular one and then reversing, in two polarisations called plus and cross. Einstein predicted them in 1916, doubted them in 1936, and was right: Hulse and Taylor watched a binary pulsar's orbit decay at the predicted rate, and LIGO caught a merger on 14 September 2015 at a strain of one part in 10&sup2;&sup1;, smaller than a proton across a four-kilometre arm.</p>

    <h3>Cosmology, and where the theory ends</h3>
    <p>Applied to the universe as a whole, the field equations refuse a static cosmos. Einstein, believing in 1917 that it was static, added the cosmological constant &Lambda; to hold it still, then dropped it after Hubble found expansion. The story that he called it his "biggest blunder" comes second-hand through George Gamow and is <em>probably apocryphal</em>. The joke is on everyone, because the accelerating expansion found in 1998 put it back at the centre of cosmology as the leading description of dark energy.</p>
    <p>The theory also marks out where it stops. The Penrose-Hawking singularity theorems show that under very general conditions, gravitational collapse and the cosmological past both lead inevitably to <strong>singularities</strong> — places where curvature invariants diverge, geodesics end, and prediction ceases. This is not a quirk of one solution: general relativity predicts its own breakdown. At the centre of a black hole and the first instant of the Big Bang the classical description must give way to something quantum, and no complete theory of quantum gravity exists.</p>
    <div class="callout"><b>Where to go next:</b> event horizons, the Schwarzschild and Kerr geometries, infall and horizon thermodynamics belong to the <em>black holes</em> track; the Planck-scale breakdown and its candidate resolutions to the <em>quantum gravity</em> track. This module stops at the boundary of both.</div>
  `,
  keyIdeas: [
    "Gravity is not a force but the curvature of spacetime caused by mass and energy.",
    "The equivalence principle: gravity and acceleration are locally indistinguishable, and free fall feels weightless.",
    "The Einstein field equations link spacetime curvature to the energy and momentum present.",
    "GR predicts light bending, gravitational time dilation, black holes and gravitational waves — all confirmed.",
    "Matter tells spacetime how to curve; spacetime tells matter how to move.",
    "GR breaks down at singularities, where it must give way to an unknown theory of quantum gravity.",
    "Tidal effects are the frame-independent content of gravity and cannot be transformed away, which is exactly what the Riemann curvature tensor measures; the metric encodes all geometry, while the Christoffel symbols, which can always be zeroed at a point, encode the apparent gravitational acceleration.",
    "The source of gravity is the full stress-energy tensor, so pressure and energy gravitate as well as mass, and gravitational waves are transverse quadrupole ripples in the metric because gravity has no dipole radiation."
  ],
  talk: {
    oneliners: [
      "General relativity's one big idea: gravity isn't a force, it's the shape of spacetime — mass bends it, and things just follow the bends.",
      "The equivalence principle is the seed: standing in gravity feels exactly like accelerating in a rocket, so gravity must be geometry.",
      "You fall to Earth mainly because your path through time is curved, not because something is pulling you.",
      "Black holes and gravitational waves were pure predictions of the maths, confirmed decades later by imaging and by LIGO.",
      "Acceleration and gravity are only the same locally — tides give real gravity away, and tides are precisely what curvature means."
    ],
    myths: [
      { m: "In orbit there's no gravity, so astronauts float.", t: "There's nearly full gravity in orbit; they float because they're in continuous free fall, which the equivalence principle says feels weightless." },
      { m: "The rubber-sheet picture is literally how gravity works.", t: "It's a 2D analogy; real gravity is 4D spacetime curvature, and for slow objects it's the curvature of time that matters most." },
      { m: "Nothing can escape a black hole because gravity 'pulls infinitely hard'.", t: "Inside the event horizon, all future-pointing paths lead inward; it's the geometry of spacetime, not an infinite pulling force." },
      { m: "Einstein called the cosmological constant his biggest blunder.", t: "The quote reaches us only second-hand through Gamow and is probably apocryphal. In any case the constant is back, as the leading description of dark energy since 1998." }
    ],
    terms: [
      { term: "Equivalence principle", def: "Gravity and acceleration are locally indistinguishable." },
      { term: "Geodesic", def: "The straightest possible path through curved spacetime; what free-falling objects follow." },
      { term: "Spacetime curvature", def: "The bending of spacetime geometry by energy and momentum." },
      { term: "Event horizon", def: "The boundary of a black hole from within which nothing can escape." },
      { term: "Gravitational waves", def: "Ripples in spacetime from accelerating masses, detected by LIGO." },
      { term: "Singularity", def: "A point of infinite curvature where general relativity breaks down." },
      { term: "Metric tensor", def: "The object giving the interval between nearby events; it encodes all the geometry, and its variation from place to place is the gravitational field." },
      { term: "Riemann curvature tensor", def: "The measure of genuine curvature, equal to the rate at which neighbouring geodesics converge or diverge; it cannot be transformed away by any choice of coordinates." }
    ]
  },
  test: [
    { q: "What is the core idea of general relativity?", a: "Gravity is not a force but the curvature of four-dimensional spacetime. Mass and energy curve spacetime, and objects follow the straightest available paths (geodesics) through that curved geometry." },
    { q: "State the equivalence principle and why it matters.", a: "Locally, the effects of gravity are indistinguishable from acceleration (and free fall is indistinguishable from being in gravity-free space). This implies gravity is not a conventional force but a feature of spacetime geometry — the foundation of GR." },
    { q: "Name three confirmed predictions of GR.", a: "Any three of: the bending of starlight by the Sun (1919 eclipse), gravitational time dilation (used in GPS), the anomalous precession of Mercury, black holes (imaged in 2019), and gravitational waves (LIGO, 2015)." },
    { q: "Where and why does general relativity break down?", a: "At singularities — the centres of black holes and the initial Big Bang — where curvature becomes infinite. There the classical theory fails and a quantum theory of gravity, which we do not yet have, is needed." },
    { q: "What distinguishes real gravity from mere acceleration, and what sources it?", a: "Tidal effects. Equivalence holds only locally; over any finite region a real gravitational field makes neighbouring free-falling paths converge or diverge, and no change of coordinates removes that. This geodesic deviation is exactly what the Riemann curvature tensor measures. The source on the right-hand side of the field equations is the full stress-energy tensor, so energy, momentum, pressure and stress all gravitate, not just mass." }
  ],
  resources: [
    { name: "David Tong — General Relativity", desc: "Graduate-level free notes; rigorous and clear.", url: "https://www.damtp.cam.ac.uk/user/tong/gr.html", type: "notes", icon: "📄" },
    { name: "Sean Carroll — Lecture Notes on General Relativity", desc: "The classic free notes that became his textbook; the best route into tensors and curvature.", url: "https://arxiv.org/abs/gr-qc/9712019", type: "notes", icon: "📄" },
    { name: "MIT 8.962 — General Relativity", desc: "Full graduate course with lecture notes and problem sets.", url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/", type: "course", icon: "🎓" },
    { name: "Susskind — General Relativity", desc: "Accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Feynman Lectures Vol. II (Ch. 42, Curved Space)", desc: "Feynman's own conceptual account of curvature and gravitation.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" }
  ]
});
/* ===== GEN-2 REWRITES: cosmo (relativity track), qm (quantum track) ===== */

addModule({
  id: "cosmo", track: "relativity", order: 3,
  title: "Cosmology",
  fields: ["cosmology"], readMins: 24,
  summary: "The universe as a whole: the Big Bang, cosmic expansion, the microwave background, inflation, and the dark sector that dominates everything.",
  lesson: `
    <h3>The big picture</h3>
    <p>Cosmology is physics applied to the one system there is only one of. It asks how the universe began, what it is made of, how structure grew inside it and where it is going — and it now answers with error bars. A century ago nobody knew whether the Milky Way was the whole of creation. Today its age is pinned to about 13.8 billion years at better than one per cent, with a tested history running from the first second to the present galaxy distribution.</p>
    <p>What makes that possible is one simplifying move. Solving Einstein's equations for a real, lumpy universe is hopeless, but assume the universe is the same everywhere and in every direction and they collapse to a pair of ordinary differential equations. Everything below rests on that assumption and on the evidence that it holds.</p>

    <h3>The cosmological principle, and the fact that it is an assumption</h3>
    <p>The <strong>cosmological principle</strong> states that on large enough scales the universe is <strong>homogeneous</strong> — the same at every location — and <strong>isotropic</strong> — the same in every direction. The two are logically distinct. A universe with a preferred axis could be homogeneous but not isotropic; a universe with us at the centre of an onion could be isotropic about our point but not homogeneous.</p>
    <p>This began as a philosophical preference, a refusal to grant ourselves a special place. It is now a measured claim. Isotropy is confirmed to about one part in a hundred thousand by the microwave background temperature across the sky, once the dipole from our own motion is subtracted. Homogeneity is harder, since we see distant regions only at earlier times, but galaxy surveys show the distribution becoming statistically uniform above roughly 300 million light years. Below that scale the universe is emphatically lumpy — that is what galaxies, clusters and voids are — so the principle is a statement about averages.</p>

    <h3>FLRW, the scale factor, and what expansion really means</h3>
    <p>Impose homogeneity and isotropy on general relativity and the geometry of spacetime is forced into a single form, the <strong>Friedmann–Lemaître–Robertson–Walker</strong> metric:</p>
    <div class="eq">ds² = −c²dt² + a(t)²[ dr²/(1−kr²) + r²dΩ² ]
      <span class="why">All the freedom in the whole universe reduces to one function of time, the scale factor a(t), and one number k for the spatial curvature — positive for a closed universe, zero for flat, negative for open. Solving cosmology means solving for a(t).</span></div>
    <p>The <strong>scale factor</strong> is a ruler for space itself, conventionally set to 1 today. If a doubles, the distance between two galaxies simply sitting still doubles. This is the crucial point and it is almost always taught badly. Galaxies are not projectiles flying outwards through a pre-existing void; they are at rest in their local patch of space, and the space between them is growing. There is therefore no centre — every observer sees the same recession — no edge, and nothing outside to expand into. Expansion is a property of the geometry, not a motion within it.</p>
    <p>The redshift of distant galaxies follows directly. A photon's wavelength is stretched in step with space while it travels, so the observed <strong>cosmological redshift</strong> is not a Doppler shift caused by the source's velocity:</p>
    <div class="eq">1 + z = a(now) / a(then)
      <span class="why">A galaxy at redshift 1 emitted its light when the universe was half its present size. Redshift is a direct read-out of the scale factor, which makes it cosmology's fundamental clock and distance marker.</span></div>
    <div class="callout"><b>Common misunderstanding:</b> the Big Bang was not an explosion at a point in existing space. It happened everywhere at once, because space itself was what expanded. Galaxies beyond a certain distance recede faster than light, and this violates nothing — special relativity limits motion <em>through</em> space, not the stretching of space.</div>

    <h3>Hubble's law, and the constant that is not constant</h3>
    <p>In 1929 Edwin Hubble, building on Vesto Slipher's redshifts and Henrietta Leavitt's period–luminosity relation for Cepheid variables, showed that recession speed rises in proportion to distance. Georges Lemaître had derived the relation from Einstein's equations two years earlier.</p>
    <div class="eq">v = H₀ d,  with H(t) = (da/dt) / a
      <span class="why">The recession speed of a distant galaxy is its distance times the expansion rate. H is the fractional growth rate of the scale factor per unit time — it is not a velocity, and it is not fixed.</span></div>
    <p>The distinction that trips people up: the <strong>Hubble parameter</strong> H(t) is a function of time, while the <strong>Hubble constant</strong> H₀ is simply its value now, roughly 70 kilometres per second per megaparsec. H has fallen enormously since the early universe and, if dark energy is a true cosmological constant, will settle to a fixed non-zero value in the far future.</p>

    <h3>The Friedmann equations and the three eras</h3>
    <p>Feed the FLRW metric into Einstein's field equations and two equations fall out. The first is the important one:</p>
    <div class="eq">(ȧ/a)² = 8πGρ/3 − kc²/a² + Λc²/3
      <span class="why">The square of the expansion rate is set by the total energy density, the spatial curvature and the cosmological constant. It reads like an energy-conservation statement: gravity from everything in the universe pulls the expansion down, curvature and Λ adjust it.</span></div>
    <p>The second Friedmann equation gives the acceleration and shows that pressure gravitates too, which is why something with sufficiently negative pressure can push the expansion faster. The reason cosmic history has distinct chapters is that the ingredients <strong>dilute differently</strong>:</p>
    <ul>
      <li><strong>Matter</strong> thins as ρ ∝ a⁻³ — fixed particle count, growing volume.</li>
      <li><strong>Radiation</strong> thins as ρ ∝ a⁻⁴ — same volume effect, plus each photon redshifts and loses energy.</li>
      <li><strong>Dark energy</strong>, if it is a cosmological constant, does not thin at all: ρ stays constant as space grows.</li>
    </ul>
    <p>Run that backwards and radiation must have dominated the early universe, giving the <strong>radiation era</strong>. Matter overtook it at around 50,000 years, opening the <strong>matter era</strong> in which structure could grow. Dark energy, diluting not at all, was destined to win eventually; it took over about five billion years ago, and we live early in the <strong>dark energy era</strong>. The sequence is not an add-on to the model. It is arithmetic.</p>

    <h3>Thermal history and Big Bang nucleosynthesis</h3>
    <p>An expanding universe cools, so running the clock back means heating everything up, and the history is a sequence of things freezing out as the temperature drops. Within the first second the quark–gluon plasma condenses into protons and neutrons, neutrinos decouple and stop interacting, and electrons and positrons annihilate. From roughly one to twenty minutes the universe is a fusion reactor: <strong>Big Bang nucleosynthesis</strong> builds deuterium, helium-3, helium-4 and traces of lithium-7 before expansion shuts the reactions off.</p>
    <p>This is cosmology's cleanest quantitative triumph. The theory has essentially one free parameter, the ratio of baryons to photons, and from it predicts the primordial abundances: about 75% hydrogen and 25% helium-4 by mass, deuterium at a few parts in a hundred thousand. Observations of old, unprocessed gas match across abundances spanning nine orders of magnitude, and the baryon density inferred agrees with the independent value from the microwave background. Lithium-7 is the outlier, predicted about three times higher than measured.</p>

    <h3>The microwave background and its acoustic peaks</h3>
    <p>For 380,000 years the universe was an opaque plasma of nuclei, electrons and photons. As it cooled through about 3,000 K, electrons combined with nuclei — <strong>recombination</strong> — the fog cleared, and the photons streamed freely ever after. Stretched by a factor of about 1,100 since, they arrive as the <strong>cosmic microwave background</strong> at 2.725 K, the most perfect blackbody ever measured, with temperature ripples of one part in a hundred thousand.</p>
    <p>Those ripples are not noise. Before recombination, photon pressure fought gravity in the plasma and set up standing sound waves; recombination froze them instantly, so the CMB is a snapshot of an oscillating fluid. Plot the fluctuation power against angular scale and you get a series of <strong>acoustic peaks</strong>, each encoding something specific. The position of the first peak measures the geometry, and says space is flat to within a fraction of a per cent. The ratio of odd to even peak heights measures how much baryonic matter loaded the fluid. The third peak and the damping tail pin down the total matter density and hence the dark matter. This single plot is where most precision cosmological parameters come from.</p>

    <h3>Inflation: three problems, one mechanism</h3>
    <p>The hot Big Bang left three embarrassments. The <strong>horizon problem</strong>: patches of sky more than a degree or two apart were never in causal contact, yet their temperatures agree to one part in a hundred thousand. The <strong>flatness problem</strong>: curvature grows relative to everything else as the universe expands, so flatness today demands flatness at the start to something like one part in 10⁶⁰. The <strong>monopole problem</strong>: grand unified theories predict a flood of magnetic monopoles, and none has ever been seen.</p>
    <p>Alan Guth's 1980 proposal fixes all three at once. A brief epoch of exponential expansion inflates a microscopic causally connected patch to more than the size of the observable universe. Prior contact explains the uniformity, stretching flattens curvature the way inflating a balloon flattens its surface, and dilution reduces any monopoles to undetectably few.</p>
    <p>The prediction that made inflation more than a fix is different in kind. Quantum fluctuations in the inflating field are stretched to cosmic scale and frozen as density perturbations, and the theory says they should form a <strong>nearly scale-invariant</strong> spectrum — almost, but not exactly, equal power at every size, with a slight tilt. Measurements give a spectral index of about 0.965, tilted as predicted. Those fluctuations are the seeds of every galaxy. Inflation's remaining prediction, a primordial gravitational wave background, has not been detected.</p>

    <h3>The dark sector and the concordance model</h3>
    <p>Everything luminous is about 5% of the universe. The evidence for <strong>dark matter</strong> is independent and mutually consistent: galaxy rotation curves stay flat far beyond the visible disc instead of falling off; gravitational lensing weighs clusters and finds far more mass than their light implies; the <strong>Bullet Cluster</strong>, where two clusters collided and the lensing mass sailed through while the hot gas was stripped and left behind, shows the mass is not the gas; and the CMB peak heights demand a component that does not interact with photons. It must be cold, meaning slow-moving, or structure would not have formed as observed. Its identity remains unknown.</p>
    <p><strong>Dark energy</strong> arrived in 1998, when two teams using type Ia supernovae as standard candles found distant ones fainter than expected: the expansion is <em>accelerating</em>. The CMB and galaxy clustering confirm it independently. It behaves like Einstein's cosmological constant, an energy of empty space with negative pressure, and accounts for about 68% of the total.</p>
    <p>Assemble these and you get <strong>ΛCDM</strong>, the concordance model: a flat universe, roughly 5% baryons, 27% cold dark matter, 68% dark energy, described by about six parameters that fit thousands of independent measurements. Its problems are public. The <strong>Hubble tension</strong> is sharpest: the expansion rate inferred from the CMB, around 67 km/s/Mpc, disagrees at more than four sigma with the value measured directly from Cepheids and supernovae, around 73. That is either an unfound systematic or a crack in the model. Beyond it sit the identity of dark matter, the catastrophic predicted value of the cosmological constant, the lithium problem, and what preceded inflation — where the black hole and quantum gravity tracks pick up the story.</p>
  `,
  keyIdeas: [
    "The universe is expanding — space itself stretches — and was once hot and dense: the Big Bang, about 13.8 billion years ago.",
    "The cosmic microwave background is the afterglow of the early universe and our strongest cosmological evidence.",
    "Big Bang nucleosynthesis correctly predicts the cosmic abundances of hydrogen and helium.",
    "Inflation, a burst of early exponential expansion, explains the universe's uniformity and flatness and seeds its structure.",
    "About 27% of the universe is unknown dark matter and about 68% is dark energy; ordinary matter is only ~5%.",
    "Dark energy is accelerating the expansion, pointing toward a cold long-term fate.",
    "The cosmological principle — large-scale homogeneity and isotropy — is an assumption that has been tested and holds above roughly 300 million light years; it reduces Einstein's equations to the FLRW metric with a single scale factor.",
    "Matter, radiation and dark energy dilute at different rates as the scale factor grows, which is why cosmic history divides into a radiation era, a matter era and the current dark energy era."
  ],
  talk: {
    oneliners: [
      "The Big Bang wasn't an explosion in space — it was space itself beginning to expand, everywhere at once.",
      "The cosmic microwave background is the universe's baby photo: leftover heat from 380,000 years after the beginning, filling the whole sky.",
      "Only about 5% of the universe is stuff we understand; 95% is dark matter and dark energy we can measure but can't identify.",
      "Dark energy is speeding the expansion up, which likely means a cold, empty far future rather than a big crunch.",
      "The Hubble constant isn't constant — it's the current value of a parameter that has been falling since the beginning, and the two best ways of measuring it now disagree."
    ],
    myths: [
      { m: "The Big Bang was an explosion that happened at one point.", t: "It happened everywhere simultaneously; space itself expanded, so there is no centre and no edge." },
      { m: "Galaxies are flying through space away from us.", t: "Space between galaxies is stretching, carrying them apart; distant ones can recede faster than light without violating relativity." },
      { m: "Dark matter is just stuff too faint to see.", t: "Its total gravity far exceeds all possible faint ordinary matter; the Bullet Cluster shows the mass is separated from the gas, and the CMB requires a component that does not interact with light." },
      { m: "Cosmological redshift is a Doppler shift from galaxies moving away.", t: "The wavelength is stretched by the expansion of space during the photon's journey; the redshift measures how much the scale factor has grown, not a velocity." }
    ],
    terms: [
      { term: "Big Bang", def: "The hot, dense early state from which the expanding universe emerged ~13.8 billion years ago." },
      { term: "Cosmic microwave background (CMB)", def: "The relic radiation from when the universe first became transparent." },
      { term: "Inflation", def: "A brief episode of exponential expansion in the first instant, explaining uniformity and flatness." },
      { term: "Dark matter", def: "Unseen matter inferred from gravity; ~27% of the universe, composition unknown." },
      { term: "Dark energy", def: "The energy of space driving accelerating expansion; ~68% of the universe." },
      { term: "ΛCDM", def: "The standard cosmological model: dark energy (Λ) plus cold dark matter." },
      { term: "Scale factor a(t)", def: "The single function describing how distances between comoving points grow; set to 1 today, and redshift measures it directly." },
      { term: "Acoustic peaks", def: "The oscillations in the CMB power spectrum left by sound waves in the pre-recombination plasma; their positions and heights fix geometry, baryon density and total matter." }
    ]
  },
  test: [
    { q: "Why is it wrong to picture the Big Bang as an explosion at a point?", a: "The Big Bang was the expansion of space itself, occurring everywhere at once. There was no pre-existing space to explode into, no centre and no edge; every point sees everything receding from it. Galaxies are essentially at rest locally while the space between them grows." },
    { q: "What is the cosmic microwave background and what do its acoustic peaks encode?", a: "It is the relic radiation released ~380,000 years after the Big Bang, when electrons combined with nuclei and the universe became transparent. Its ripples are frozen sound waves from the earlier plasma. The first peak's angular position shows space is flat, the odd-to-even peak ratio measures the baryon density, and the third peak and damping tail fix the total matter density and hence dark matter." },
    { q: "Why does cosmic history divide into a radiation era, a matter era and a dark energy era?", a: "Because the components dilute differently as the scale factor grows. Radiation falls as a to the minus four, matter as a to the minus three, and a cosmological constant not at all. So radiation dominated first, matter overtook it around 50,000 years, and dark energy inevitably took over about five billion years ago." },
    { q: "What three problems does inflation solve, and what does it predict?", a: "The horizon problem, that causally disconnected regions have the same temperature; the flatness problem, that curvature had to be fine-tuned to roughly one part in ten to the sixty; and the monopole problem, the absence of predicted grand-unified relics. Exponential expansion of a tiny causal patch fixes all three, and it further predicts a nearly scale-invariant spectrum of primordial fluctuations, confirmed by a measured spectral index of about 0.965." },
    { q: "What is the Hubble tension and why does it matter?", a: "The expansion rate inferred indirectly from the cosmic microwave background is about 67 km/s/Mpc, while direct measurement using Cepheid variables and type Ia supernovae gives about 73. The disagreement exceeds four sigma and has survived repeated scrutiny. It is either an undiscovered systematic error or a genuine failure of ΛCDM, which would be the first real crack in the concordance model." }
  ],
  resources: [
    { name: "David Tong — Cosmology", desc: "Free graduate notes on the expanding universe and the CMB.", url: "https://www.damtp.cam.ac.uk/user/tong/cosmo.html", type: "notes", icon: "📄" },
    { name: "MIT 8.286 — The Early Universe", desc: "Alan Guth's full course on FLRW, thermal history and inflation.", url: "https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/", type: "course", icon: "🎓" },
    { name: "Susskind — Cosmology", desc: "Full accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "ESA Planck — the CMB explained", desc: "The definitive CMB maps and what they tell us.", url: "https://www.esa.int/Science_Exploration/Space_Science/Planck", type: "web", icon: "🌐" },
    { name: "PBS Space Time (YouTube)", desc: "Rigorous, accessible episodes on cosmology and the dark sector.", url: "https://www.youtube.com/c/pbsspacetime", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "qm", track: "quantum", order: 1,
  title: "Quantum mechanics",
  fields: ["quantum"], readMins: 28,
  summary: "The rules of the very small: superposition, the wavefunction, uncertainty, measurement and entanglement — strange, but the most tested theory ever.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum mechanics is the physics of the very small — atoms, electrons, photons — and it is the most precisely tested theory in the history of science. It is also genuinely strange: at this scale the world does not behave like scaled-down billiard balls. Objects can be in several states at once, cannot have every property defined simultaneously, and are governed by probabilities that appear to be fundamental rather than a record of our ignorance. Crucially, "strange" does not mean "vague". Quantum mechanics is mathematically exact, and the electron's magnetic moment is confirmed to twelve significant figures.</p>
    <p>Be clear from the start about the scope. Here we set out the machinery: what the state is, how it evolves, what a measurement predicts, and what the theory says about atoms, spin and correlations. What the formalism <em>means</em> — whether the wavefunction is real, whether collapse happens, whether there are other worlds — is a separate and unresolved argument with its own dedicated module on interpretations. Everything below is agreed regardless of which side of that argument you take.</p>

    <h3>Wave–particle duality and the double slit</h3>
    <p>The founding shock: things we thought were particles behave like waves, and things we thought were waves behave like particles. Planck and Einstein forced light into quanta of energy E = hf to explain blackbody radiation and the photoelectric effect. De Broglie then ran the argument backwards, assigning every particle a wavelength λ = h/p — a prediction confirmed when Davisson and Germer diffracted electrons off a nickel crystal.</p>
    <p>The cleanest demonstration is the double slit. Fire electrons one at a time at a screen with two slits and each lands as a single dot, unmistakably particle-like. Over thousands of runs an <strong>interference pattern</strong> assembles itself, as though each electron passed through both slits and interfered with itself. Install a detector to see which slit was used and the interference disappears — not because the detector is clumsy, but because the two paths are no longer indistinguishable. Feynman called this the one mystery of quantum mechanics, and meant it literally.</p>

    <h3>The state: Hilbert space, superposition and operators</h3>
    <p>The state of a quantum system is a <strong>wavefunction</strong> ψ, better thought of as a <strong>vector in Hilbert space</strong> — a complex vector space with an inner product. Because it is a vector space, any two valid states can be added: that is <strong>superposition</strong>, and it is a consequence of the mathematics rather than an extra assumption. An electron's spin can be a combination of up and down; an atom can be in two places at once. Note that superposition means a definite complex combination, not "we don't know which".</p>
    <p><strong>Observables</strong> — position, momentum, energy, angular momentum — are not numbers attached to the state but <strong>Hermitian operators</strong> acting on it. The possible results of measuring an observable are that operator's <strong>eigenvalues</strong>, and Hermiticity is exactly the condition guaranteeing they are real. The corresponding <strong>eigenstates</strong> form a basis, so any state can be written as a superposition of them, and the coefficients in that expansion carry all the predictive content. This is why quantisation is not bolted on: discrete energy levels are simply the eigenvalue spectrum of a particular operator.</p>

    <h3>The Schrödinger equation</h3>
    <p>Between measurements the state evolves smoothly and deterministically, governed by the Hamiltonian operator Ĥ, which represents the total energy:</p>
    <div class="eq">iℏ ∂ψ/∂t = Ĥψ
      <span class="why">The rate of change of the wavefunction is set by the energy operator. Given ψ now, this fixes ψ at every later time, completely deterministically and reversibly. No randomness lives in this equation.</span></div>
    <p>For a Hamiltonian with no explicit time dependence you can separate variables, and the spatial part satisfies the <strong>time-independent Schrödinger equation</strong>:</p>
    <div class="eq">Ĥψ = Eψ
      <span class="why">An eigenvalue problem. The allowed energies E are the eigenvalues and the stationary states are the eigenfunctions; a system in one of them keeps the same probability distribution for ever.</span></div>
    <p>"Solving a quantum system" almost always means solving this equation for a given potential: find the allowed energies and the corresponding wavefunctions, then build any other state as a superposition of them and let each term rotate in phase at its own rate.</p>

    <h3>The Born rule, normalisation and expectation values</h3>
    <p>The wavefunction is not directly observable. What connects it to experiment is Max Born's rule:</p>
    <div class="eq">probability ∝ |ψ|²
      <span class="why">The likelihood of finding the system in a given state is the squared magnitude of the amplitude there. Because amplitudes are complex and can cancel, interference survives — squaring at the end is what makes quantum probability different from classical probability.</span></div>
    <p>Because total probability must be 1, states are <strong>normalised</strong>: the integral of |ψ|² over all space equals one. Normalisation is preserved by Schrödinger evolution, which is another way of saying the dynamics is unitary. For repeated measurements on identically prepared systems, the average result is the <strong>expectation value</strong>:</p>
    <div class="eq">⟨A⟩ = ∫ ψ* Â ψ dx
      <span class="why">Sandwich the operator between the state and its conjugate and integrate. This is the number an experiment actually reports after many runs, and it is how theory meets the lab bench.</span></div>
    <div class="callout"><b>The measurement problem:</b> the smooth unitary evolution above and the single definite outcome you observe are not obviously compatible. This gap is real, unsolved, and the reason interpretations of quantum mechanics exist — see the dedicated module. It does not affect any prediction made here.</div>

    <h3>Uncertainty as a theorem about commutators</h3>
    <p>Uncertainty is usually mis-taught as measurement clumsiness — bounce a photon off an electron and you disturb it. That story is wrong and the real one is better. Operators need not commute, and position and momentum do not:</p>
    <div class="eq">[x̂, p̂] = x̂p̂ − p̂x̂ = iℏ
      <span class="why">The order of operations matters, and the mismatch is Planck's constant. Non-commuting observables have no common set of eigenstates, so there is no state in which both have definite values.</span></div>
    <p>From that algebraic fact alone, with no physical assumptions about measurement, a general theorem follows for any two observables:</p>
    <div class="eq">ΔA · ΔB ≥ |⟨[Â, B̂]⟩| / 2
      <span class="why">The product of the spreads is bounded below by the expectation of the commutator. Put position and momentum in and you get Δx·Δp ≥ ℏ/2 as a special case, not as a separate postulate.</span></div>
    <p>The deeper reason is that position and momentum wavefunctions are <strong>Fourier transforms</strong> of one another, and any Fourier pair obeys a bandwidth theorem: a signal sharply localised in time contains a wide spread of frequencies. Uncertainty is that mathematical fact wearing physical clothes. It is also why matter is stable — confining an electron to the nucleus would force an enormous momentum spread and energy cost, so atoms have a floor size.</p>

    <h3>The systems you can actually solve, and tunnelling</h3>
    <p>Only a handful of potentials admit exact solutions, and they carry the whole subject. Each has its own module here; what matters now is why they are the canon.</p>
    <ul>
      <li><strong>The infinite square well</strong> — a particle in a box. Requiring the wavefunction to vanish at the walls admits only whole numbers of half-wavelengths, so energies come out as E ∝ n². Quantisation arises from <em>boundary conditions</em>, exactly as with a guitar string. Nothing mystical is added.</li>
      <li><strong>The harmonic oscillator</strong> — any potential near a minimum. Its levels are evenly spaced, E = (n + ½)ℏω, and the half is <strong>zero-point energy</strong>: the ground state still moves, because sitting perfectly still would violate uncertainty. The ladder-operator solution is the direct ancestor of particle creation and annihilation in quantum field theory.</li>
      <li><strong>The hydrogen atom</strong> — the Coulomb potential solved exactly, yielding the Bohr energies and the quantum numbers n, l and m from boundary conditions in three dimensions. Add spin and the Pauli principle and the shell structure, and therefore the periodic table, is derived rather than catalogued.</li>
    </ul>
    <p>Barriers give the other headline result. Because the wavefunction decays exponentially rather than stopping dead inside a classically forbidden region, a particle meeting a thin barrier has a real probability of appearing on the far side. <strong>Tunnelling</strong> drives fusion in the Sun, alpha decay, the scanning tunnelling microscope and the flash memory in your phone.</p>

    <h3>Spin, identical particles and the exclusion principle</h3>
    <p><strong>Spin</strong> is intrinsic angular momentum with no classical analogue whatsoever. An electron is not a spinning ball; it is a point particle that nonetheless carries a fixed angular momentum of ℏ/2 and an associated magnetic moment. Stern and Gerlach sent silver atoms through a non-uniform magnetic field in 1922 and got two sharp spots rather than a continuous smear — the projection of spin along any axis takes only discrete values. Measure spin along x after preparing it along z and you get an even split, because those operators do not commute either.</p>
    <p>Spin sorts all particles into two families. <strong>Bosons</strong> have integer spin and <strong>fermions</strong> half-integer spin, and the difference is a statement about exchange symmetry: swap two identical particles and a bosonic state is unchanged while a fermionic state changes sign. Identical particles are genuinely indistinguishable, not merely similar, so this symmetry is enforced. Antisymmetry immediately forbids two fermions from occupying the same state, since swapping would give a state equal to minus itself, hence zero. That is the <strong>Pauli exclusion principle</strong> — not a force, but a consequence of symmetry — and it is why electrons stack into shells, why chemistry exists and why solid objects resist being squashed. Bosons do the opposite and pile into the same state, which is what lasers and Bose–Einstein condensates are.</p>

    <h3>Entanglement, Bell's theorem, and why the world looks classical</h3>
    <p>When systems interact their states can become <strong>entangled</strong>: a joint state that cannot be factorised into separate descriptions of each part. Neither particle has a state of its own; only the pair does. Measure one and you instantly know something about the other, however far apart they are. Einstein, Podolsky and Rosen argued in 1935 that this showed quantum mechanics was incomplete, and that hidden variables must be carrying predetermined answers.</p>
    <p>In 1964 John Bell turned that from philosophy into experiment. He proved that <em>any</em> theory in which particles carry predetermined local properties must satisfy an inequality on measurement correlations, and that quantum mechanics violates it. Experiments by Freedman and Clauser, then Aspect, and finally the loophole-free tests of 2015 all found the quantum prediction and ruled out local hidden variables — work recognised by the 2022 Nobel Prize. Be precise about what this establishes: nature is not both local and realistic in Bell's sense. It does not prove signals travel faster than light, and it does not select an interpretation.</p>
    <div class="callout"><b>Important nuance:</b> entanglement cannot send information faster than light. Each local outcome is random and uncontrollable; the correlations only become visible when the two sets of results are compared over an ordinary channel. Relativity survives intact.</div>
    <p>Why, then, does the everyday world look classical? <strong>Decoherence</strong> is the answer. No system is truly isolated; air molecules, photons and thermal vibrations constantly entangle it with its surroundings. The interference terms are not destroyed but leak irretrievably into those environmental correlations, and for anything macroscopic this takes vanishingly small fractions of a second. Superposition survives only where isolation is maintained, which is exactly the engineering problem quantum computing exists to solve. The <strong>correspondence principle</strong> completes the picture: at large quantum numbers quantum predictions reproduce classical ones, and Ehrenfest's theorem shows expectation values obey Newton's laws. Classical physics is the limiting case, not a casualty.</p>
  `,
  keyIdeas: [
    "Matter and light show both wave and particle behaviour, revealed by the double-slit experiment.",
    "A system is described by a wavefunction that can be in a superposition of possibilities at once.",
    "The Schrödinger equation evolves the wavefunction smoothly and deterministically.",
    "Measurement yields a single random outcome with probability |ψ|² — the only randomness in the theory.",
    "The uncertainty principle sets a hard limit on jointly knowing complementary properties like position and momentum.",
    "Entanglement links particles into one joint state with correlations stronger than any local classical theory, but cannot signal faster than light.",
    "The state is a vector in Hilbert space and observables are Hermitian operators whose eigenvalues are the possible measurement results; uncertainty follows from the fact that some of those operators do not commute.",
    "Spin is intrinsic angular momentum with no classical analogue, and the exchange symmetry of identical particles splits everything into bosons and fermions, giving the Pauli exclusion principle and the structure of matter."
  ],
  talk: {
    oneliners: [
      "Quantum mechanics is strange but exact — it's the most precisely tested theory we have, confirmed to eleven decimal places.",
      "Between measurements a system evolves deterministically; all the randomness enters only when you look, with probability given by |ψ|².",
      "Uncertainty isn't clumsy measurement — it's a theorem about operators that don't commute, and it follows from position and momentum being Fourier transforms of each other.",
      "Entanglement is real 'spooky' correlation, proven by Bell tests, but it can't carry information faster than light.",
      "The exclusion principle isn't a force — it's what antisymmetry under swapping two identical fermions forces on you, and it's why matter takes up space."
    ],
    myths: [
      { m: "The observer effect means human consciousness collapses the wavefunction.", t: "'Measurement' means any irreversible interaction with the environment (decoherence); no conscious mind is required." },
      { m: "The uncertainty principle is about disturbing a particle when you measure it.", t: "It is a mathematical consequence of non-commuting operators, provable with no reference to measurement at all." },
      { m: "Entanglement lets you send messages instantly.", t: "Each local result is random; the correlations only appear when results are compared over a normal, light-speed-limited channel." },
      { m: "Electron spin means the electron is physically rotating.", t: "It is a point particle with intrinsic angular momentum and no classical analogue; a spinning ball model gives the wrong magnetic moment and would need a surface exceeding light speed." }
    ],
    terms: [
      { term: "Wavefunction (ψ)", def: "The mathematical object encoding all knowable information about a quantum system." },
      { term: "Superposition", def: "Being in a combination of multiple states at once until measured." },
      { term: "Born rule", def: "Probability of an outcome equals the squared amplitude |ψ|²." },
      { term: "Uncertainty principle", def: "A hard limit on simultaneously defining complementary quantities like position and momentum." },
      { term: "Entanglement", def: "A joint state of two or more particles with correlations unexplained by local classical theory." },
      { term: "Quantisation / tunnelling", def: "Discrete energy levels in bound systems; wave-like passage through classically forbidden barriers." },
      { term: "Hermitian operator", def: "The mathematical representation of an observable; its real eigenvalues are the possible measurement results." },
      { term: "Decoherence", def: "The leaking of quantum interference into environmental correlations, which is why large objects look classical." }
    ]
  },
  test: [
    { q: "What does the double-slit experiment demonstrate?", a: "That quantum objects show both wave and particle behaviour: single electrons arrive as dots (particle-like) yet build an interference pattern over many runs (wave-like), and observing which slit they take destroys the interference because the paths cease to be indistinguishable." },
    { q: "Where does randomness enter quantum mechanics?", a: "Only at measurement. The wavefunction evolves deterministically and unitarily via the Schrödinger equation; when measured, it yields a single outcome at random, with probability given by |ψ|² (the Born rule). Why that transition happens is the measurement problem, treated in the interpretations module." },
    { q: "Explain the uncertainty principle without appealing to measurement disturbance.", a: "Observables are Hermitian operators, and position and momentum do not commute: their commutator is i times h-bar. Non-commuting operators share no common eigenstates, so no state assigns both a definite value. The general theorem bounds the product of the spreads by half the expectation of the commutator, and it is equivalent to the bandwidth theorem for Fourier-conjugate variables." },
    { q: "Why does the Pauli exclusion principle follow from exchange symmetry?", a: "Identical fermions are genuinely indistinguishable, and swapping two of them must change the sign of the joint state. If both occupied the same state the swap would leave it unchanged while also negating it, so the state must be zero — that configuration simply does not exist. It is a symmetry requirement, not a force." },
    { q: "What did the Bell tests actually establish, and why does the world still look classical?", a: "They showed that measured correlations violate Bell's inequality, ruling out any theory in which particles carry predetermined local properties. They did not demonstrate faster-than-light signalling and did not settle interpretation. The world looks classical because of decoherence: interaction with the environment entangles a system with countless degrees of freedom, hiding interference almost instantly for anything macroscopic, with the correspondence principle recovering Newtonian behaviour in the large-scale limit." }
  ],
  resources: [
    { name: "David Tong — Quantum Mechanics", desc: "Clear free lecture notes covering the foundations.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "MIT 8.04 — Quantum Physics I", desc: "Full course with video lectures and problem sets.", url: "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/", type: "course", icon: "🎓" },
    { name: "MIT 8.05 — Quantum Physics II", desc: "The Hilbert space and operator formulation done properly, plus spin and entanglement.", url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/", type: "course", icon: "🎓" },
    { name: "Susskind — Quantum Mechanics (Theoretical Minimum)", desc: "Full lecture course building the theory carefully.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Feynman Lectures Vol. III", desc: "The finest conceptual introduction to quantum mechanics.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" }
  ]
});
/* ===== REWRITTEN AT DEPTH: qft (track 3) and sm (track 4) ===== */

addModule({
  id: "qft", track: "quantum", order: 3,
  title: "Quantum field theory",
  fields: ["qft","quantum"], readMins: 28,
  summary: "The deepest layer of reality we know: not particles, but quantum fields filling all space. Particles are just their ripples.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum field theory is the framework you are forced into if you insist on quantum mechanics and special relativity at once, and it is the deepest description of nature physicists possess. Its central move is a change of worldview: <strong>the fundamental objects are fields, not particles</strong>. There is one electron field spread through all of space, one photon field, one for each kind of quark. What we call a particle is a <strong>quantised excitation</strong> of one of them — a ripple carrying a discrete packet of energy and momentum. That explains something otherwise inexplicable: every electron ever measured has exactly the same mass, charge and spin, because every electron is the same ripple in the same field. There is no factory tolerance because there is no factory.</p>

    <h3>Why relativity forces field theory</h3>
    <p>Ordinary quantum mechanics describes a fixed number of particles: one electron in a box, two in an atom. That is quietly incompatible with relativity. Once energy converts into mass through E = mc squared, particle number cannot be conserved — collide two protons hard enough and pions, kaons and antiprotons appear that were not there before.</p>
    <p>A sharper version says where the trouble starts. Pin down a particle's position ever more precisely and uncertainty gives a wider spread in energy. Push the localisation below the particle's <strong>Compton wavelength</strong> and that uncertainty exceeds the cost of creating a fresh particle–antiparticle pair.</p>
    <div class="eq">λ = ℏ / (mc)
      <span class="why">The Compton wavelength of a particle of mass m. Confine it inside a region smaller than this and the energy required is enough to make new pairs, so instead of one sharply located particle you get several fuzzy ones.</span></div>
    <p>So a well-localised single particle dissolves at short distances. A field has no such problem: it is defined at every point of spacetime whatever happens, and adding energy simply excites more ripples. Creation and destruction are built in.</p>

    <h3>Quantising a field: operators and the Fock space</h3>
    <p>The standard route is <strong>canonical quantisation</strong>: the recipe that turned classical mechanics into quantum mechanics, applied to a system with infinitely many degrees of freedom. Promote the field value at each point and its conjugate momentum from numbers to operators.</p>
    <div class="eq">[ φ(x), π(y) ] = iℏ δ(x − y)
      <span class="why">Field and conjugate momentum at the same instant fail to commute, exactly as position and momentum do for one particle. The delta function says this holds point by point, so a field is an infinite set of coupled oscillators.</span></div>
    <p>That last remark is the trick. Expand the field in modes and a free field is a set of harmonic oscillators, one per momentum — the one problem in quantum mechanics solved completely, using raising and lowering operators. In field theory these become <strong>creation and annihilation operators</strong>, adding or removing one quantum. Start from the vacuum, apply them repeatedly, and you build the <strong>Fock space</strong>, in which particle number is a variable rather than an input. Particles were never assumed: they are outputs of the procedure, and their spin and mass are labels classifying how the field transforms under the Poincaré group — so relativity itself dictates what kinds of particle can exist.</p>

    <h3>The vacuum is an active medium</h3>
    <p>If every mode is an oscillator, every mode has a zero-point energy, because a quantum oscillator cannot sit perfectly still without violating uncertainty. The ground state of a field is therefore not nothing but a state of unavoidable jitter — measurable on a bench.</p>
    <div class="callout"><b>Two hard experimental facts:</b> the <em>Lamb shift</em> — two hydrogen levels the Dirac equation says must have identical energy are split by about a thousand megahertz, because the electron continually interacts with the fluctuating electromagnetic field. And the <em>Casimir effect</em> — two uncharged plates in vacuum attract, because they exclude some field modes from the gap and the imbalance of zero-point pressure pushes them together.</div>
    <p>A caveat: summed over all modes the vacuum energy diverges, and cutting it off at the Planck scale gives a number 120 orders of magnitude above the observed dark energy — the <strong>cosmological constant problem</strong>.</p>

    <h3>Lagrangians, and symmetry as the design principle</h3>
    <p>Nobody builds a field theory by guessing equations of motion. You write down a <strong>Lagrangian density</strong> — one scalar function of the fields and their derivatives — and the equations follow by extremising its integral, the action. Constraints are far easier to impose on a single scalar: make the Lagrangian Lorentz invariant and every equation it generates is automatically relativistic.</p>
    <p>Symmetry then does two jobs. Noether's theorem converts each continuous symmetry into a conserved quantity — time translation gives energy, rotation gives angular momentum, an internal phase symmetry gives electric charge. The less obvious half is that symmetry is a <em>construction principle</em>: fix the group and the field content, write down every term the symmetry allows, and the theory is essentially determined. The Standard Model Lagrangian is not a lucky guess but close to the most general thing its symmetries permit.</p>

    <h3>Local gauge invariance: the symmetry that manufactures a force</h3>
    <p>This is the deepest single idea in modern physics. Start with the Dirac Lagrangian for a free electron field. It is unchanged if you multiply the field by a constant phase factor — rotate the phase of every electron everywhere by the same amount and nothing observable alters. That is a <strong>global</strong> U(1) symmetry, and by Noether it conserves electric charge.</p>
    <p>Now ask a harder question: why should the phase convention chosen here match the one chosen across the galaxy? Insist that the phase can be rotated by a different amount at every point — a <strong>local</strong> symmetry — and the free Lagrangian promptly fails. The derivative compares the field at neighbouring points, and if those have been rotated differently the comparison picks up a spurious term proportional to the rate of change of the phase.</p>
    <p>The fix is a new field whose job is to absorb that unwanted term. Replace the ordinary derivative with a <strong>covariant derivative</strong>:</p>
    <div class="eq">D = ∂ − i g A
      <span class="why">The derivative now contains a new vector field A, coupled with strength g. When the local phase is rotated, A shifts by exactly the amount needed to cancel the unwanted term. The price of local symmetry is a new field — and that field is the photon.</span></div>
    <p>Three things follow without further input. The new field must be a <strong>spin-1 boson</strong>, because it carries a spacetime index to pair with the derivative. It must be <strong>massless</strong>, because a mass term for it is not gauge invariant — which is why electromagnetism has infinite range. And giving it dynamics in the simplest gauge-invariant way reproduces <strong>Maxwell's equations exactly</strong>.</p>
    <p>Replace U(1) with a non-abelian group and you get <strong>Yang–Mills theory</strong>. Because the group elements no longer commute, the gauge fields themselves carry the charge they mediate and so interact with one another — which is why gluons behave nothing like photons, and the origin of confinement and asymptotic freedom.</p>
    <div class="callout"><b>The nuance a good examiner will probe:</b> a gauge symmetry is strictly a <em>redundancy</em> in the description, not a symmetry relating distinct physical states, so it does not literally cause a force. It constrains the possible theories so tightly that a massless spin-1 carrier is the only thing that fits.</div>

    <h3>Path integrals, and diagrams as bookkeeping</h3>
    <p>Feynman's <strong>path integral</strong> is the alternative formulation, and it starts somewhere else entirely: to get the amplitude for a system to go from one configuration to another, sum over every conceivable history connecting them, each weighted by a phase.</p>
    <div class="eq">amplitude = sum over all histories of exp(iS/ℏ)
      <span class="why">S is the action of each history. Every path contributes equally in magnitude but differs in phase. Wild paths have rapidly varying phases and cancel against their neighbours; near the path of stationary action the phases line up and add. Classical least action is what interference looks like when the action is large.</span></div>
    <p>Symmetries are manifest here because the action is a scalar, and the link to statistical mechanics is explicit: rotate time to imaginary values and the path integral becomes a partition function. Expanding perturbatively in the coupling gives a series of integrals, and <strong>Feynman diagrams</strong> are the notation for tracking them. A diagram is a mnemonic for a specific expression, not a photograph. External lines are particles genuinely prepared or detected; internal lines are terms in an integral. Those internal lines are the so-called <strong>virtual particles</strong>, and they are not objects: they need not obey the relation between energy, momentum and mass that real particles do, and their number depends on where you truncate. The consequences are real; the pictures are not.</p>

    <h3>Renormalisation and effective field theory</h3>
    <p>Push past leading order and the loop integrals diverge, because you are integrating over arbitrarily large internal momenta — that is, over arbitrarily short distances. This once looked fatal. The modern reading, due largely to Wilson, is that the infinities were telling us something.</p>
    <p>A quantum field theory is an <strong>effective theory</strong>, valid up to some energy scale and silent above it, and the divergences are the mathematics protesting at being extrapolated past it. Accept a cutoff and the Lagrangian's parameters stop being measurable; they are bare values that depend on it. Express predictions in terms of what you measure at a stated energy and the cutoff dependence cancels.</p>
    <p>The <strong>renormalisation group</strong> makes this dynamic: change the scale at which the couplings are defined and they flow. In quantum electrodynamics vacuum polarisation screens charge, so the coupling grows at short distance. In quantum chromodynamics the gluon self-interaction flips the sign and the coupling shrinks — <strong>asymptotic freedom</strong>, which is why quarks act nearly free inside a proton yet cannot be extracted. The nobel track has the history; the point here is that both are one equation with a different sign.</p>

    <h3>Broken symmetry, anomalies, and the same mathematics elsewhere</h3>
    <p>A symmetry of the equations need not be a symmetry of the state they describe: a ferromagnet obeys rotationally invariant physics yet picks a magnetisation direction below its critical temperature. This is <strong>spontaneous symmetry breaking</strong>, and in field theory it happens when the potential's minimum lies away from zero field.</p>
    <div class="eq">V = −μ²|φ|² + λ|φ|⁴
      <span class="why">The wrong-sign quadratic term pushes the minimum away from the origin, so the field settles at a non-zero value everywhere — a Mexican-hat potential. The vacuum picks a direction the Lagrangian did not specify. Excitations along the brim are cheap; excitations up the wall are expensive.</span></div>
    <p>Goldstone's theorem says breaking a continuous global symmetry gives a massless boson for each broken generator — the cheap excitations along the brim, of which pions are roughly an example. Break a <em>gauge</em> symmetry instead and those would-be Goldstone bosons become the extra polarisation states a massless gauge boson lacks, so the gauge boson acquires mass. That is the <strong>Higgs mechanism</strong>, and the radial excitation up the wall is the Higgs boson.</p>
    <p>An <strong>anomaly</strong>, meanwhile, is a symmetry of the classical Lagrangian that quantisation destroys. Sometimes it is a gift, correctly predicting the neutral pion's decay to two photons. For a gauge symmetry it is fatal — and the Standard Model's anomalies cancel only because the charges of quarks and leptons within a generation stand in exactly the right ratio.</p>
    <p>None of this is confined to particle physics. The renormalisation group came from critical points and spontaneous symmetry breaking from superconductivity, and a superconductor is simply a place where the photon has mass. The same mathematics describes phase transitions, superfluids and the quantum Hall effect — the strongest hint that quantum field theory is less a theory of particles than a general language for systems with many coupled degrees of freedom.</p>
  `,
  keyIdeas: [
    "The fundamental objects are quantum fields filling all space; particles are quantised ripples in them.",
    "QFT unites quantum mechanics with special relativity and naturally allows particles to be created and destroyed.",
    "The vacuum is not empty: quantum fields fluctuate, producing measurable effects like the Casimir force.",
    "Forces arise from the exchange of field quanta (photons, gluons, W and Z bosons), organised by Feynman diagrams.",
    "QED is the most accurately tested theory in science, matching experiment to about one part in a trillion.",
    "Renormalization removes naive infinities and explains how force strengths run with energy scale (e.g. asymptotic freedom).",
    "Demanding that a symmetry hold independently at every point forces a new massless spin-1 field into the theory: local U(1) invariance yields electromagnetism, and non-abelian groups yield self-interacting gauge bosons.",
    "A quantum field theory is an effective theory valid up to some energy scale, and the path integral, spontaneous symmetry breaking and the renormalisation group are shared wholesale with condensed matter physics."
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
      { term: "Covariant derivative", def: "An ordinary derivative modified by a gauge field so comparisons between neighbouring points stay meaningful under a local symmetry." },
      { term: "Effective field theory", def: "A theory deliberately valid only below some energy scale, with unknown high-energy physics absorbed into its measured parameters." }
    ]
  },
  test: [
    { q: "What is the central conceptual shift in quantum field theory?", a: "That fields, not particles, are fundamental. A quantum field fills all of space, and each particle is a quantised excitation (ripple) of a field. This is why all particles of a given type are perfectly identical." },
    { q: "Why can't ordinary quantum mechanics handle high-energy physics?", a: "It assumes a fixed number of particles, but relativity (E = mc²) allows energy to create and destroy particles. QFT, being fields, naturally accommodates changing particle number, uniting quantum mechanics with special relativity." },
    { q: "How do forces work in QFT?", a: "Through the exchange of force-carrier particles: electromagnetism via photons, the strong force via gluons, the weak force via W and Z bosons. Feynman diagrams represent and quantify these exchanges." },
    { q: "What problem does renormalization solve, and what deeper idea does it reveal?", a: "Naive QFT calculations give infinities; renormalization removes them by recognising that measured parameters already include vacuum effects at a given scale. It reveals that force strengths 'run' with energy — e.g. the strong force weakens at high energy (asymptotic freedom)." },
    { q: "Walk through how demanding a local gauge symmetry produces electromagnetism.", a: "The free electron Lagrangian is unchanged by a constant phase rotation. Demand that the phase can vary from point to point and the derivative term spoils the invariance, because it compares fields at neighbouring points rotated by different amounts. Restoring invariance requires a new vector field inside a covariant derivative, which shifts to cancel the unwanted term. Gauge invariance then forbids a mass for that field, and its simplest kinetic term reproduces Maxwell's equations, so the photon drops out of the requirement." }
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
    <p>The Standard Model is a single quantum field theory that lists every fundamental particle we have found and describes three of the four forces acting between them. It has survived half a century of increasingly severe testing, including the discovery of the Higgs boson in 2012, and in places agrees with measurement to parts per billion. It is also, and this is the interesting part, <em>known</em> to be incomplete: no gravity, no dark matter, no explanation for the excess of matter over antimatter, and around nineteen numbers measured and typed in by hand. It is simultaneously the most successful theory in science and a precise signpost to what we do not understand. The nobel track covers how each piece was discovered and the quantum-gravity track covers what may lie beyond; this module is what the theory actually says.</p>

    <h3>The inventory: matter in three generations</h3>
    <p>Matter is built from <strong>fermions</strong>, spin one-half particles that obey the exclusion principle, which is why matter takes up space. They come in two families.</p>
    <ul>
      <li><strong>Quarks</strong> — up, down, charm, strange, top and bottom. They carry colour charge, feel all three forces, and are never seen in isolation. A proton is two ups and a down; a neutron is two downs and an up.</li>
      <li><strong>Leptons</strong> — the electron, muon and tau, each paired with its own neutrino. Leptons carry no colour, so they ignore the strong force entirely. Neutrinos interact only weakly, which is why roughly a hundred trillion pass through your body each second without effect.</li>
    </ul>
    <p>The awkward fact is that the list repeats. The muon is a heavier copy of the electron and the tau heavier still, and the quarks and neutrinos duplicate in the same way, giving <strong>three generations</strong> with identical charges but wildly different masses. Ordinary matter needs only the first. When the muon turned up, Isidor Rabi asked "who ordered that?" and the question is still open. We do know the number is three: how quickly the Z boson decays fixes the number of light neutrino species at 2.99, so there is no fourth conventional generation. Why three, and why the masses span twelve orders of magnitude, nobody can say.</p>

    <h3>The gauge group, in plain terms</h3>
    <p>The Standard Model is defined by a symmetry group, and every force in it comes from insisting that the symmetry hold independently at each point of spacetime.</p>
    <div class="eq">SU(3) × SU(2) × U(1)
      <span class="why">Three local symmetries stacked together. SU(3) acts on the colour charge of quarks and gives the strong force with its eight gluons. SU(2) acts on left-handed particle pairs and U(1) acts on a charge called hypercharge; together those two break down to give the photon plus the W and Z. The number of force carriers is not chosen, it is counted from the group.</span></div>
    <p>Each factor produces its own gauge bosons and the tally comes straight from the mathematics: eight gluons from SU(3), three from SU(2), one from U(1). The last four mix, once the Higgs field takes its vacuum value, into the massless photon and the massive W-plus, W-minus and Z. This is the sense in which the Standard Model is not an arbitrary catalogue. Choose the group and the fermion content, and the interactions are essentially forced.</p>

    <h3>Quantum chromodynamics: colour, confinement and the origin of mass</h3>
    <p>Quarks carry a charge with three values, whimsically labelled red, green and blue. The crucial structural difference from electromagnetism is that gluons themselves carry colour, because SU(3) is non-abelian. Photons are electrically neutral and pass through one another; gluons pull on each other.</p>
    <p>That self-interaction produces two behaviours with no everyday analogue. <strong>Asymptotic freedom</strong>: probe a proton at very high energy and the coupling is weak, so quarks rattle about almost freely inside. <strong>Confinement</strong>: pull two quarks apart and the gluon field collapses into a narrow flux tube whose energy grows roughly linearly with separation, about one giga-electronvolt per femtometre. Keep pulling and it becomes cheaper for the vacuum to create a new quark–antiquark pair than to stretch the tube, so the string snaps and you get two mesons rather than two free quarks. No isolated quark has ever been seen and the theory says none ever will be.</p>
    <div class="callout"><b>Where your mass actually comes from:</b> add up the rest masses of the three valence quarks in a proton and you get roughly 1 per cent of the proton's mass. The other 99 per cent is gluon field energy and quark kinetic energy, converted to mass by E = mc squared. Lattice QCD reproduces the proton mass from first principles this way, so almost all of your body's mass is binding energy, not Higgs-given mass.</div>

    <h3>The electroweak sector: why the weak force is weak</h3>
    <p>Electromagnetism and the weak force are two faces of one interaction. Above about 100 giga-electronvolts they behave as a single unified force; below it the Higgs field's vacuum value breaks the symmetry and they separate. The weak force is feeble at everyday energies for one reason, and it is not that its coupling is small — the SU(2) coupling is actually slightly larger than the electromagnetic one.</p>
    <div class="eq">strength ≈ g² / (q² − M²)
      <span class="why">The amplitude for exchanging a carrier of mass M at small momentum transfer q is suppressed by the carrier's mass squared. The W and Z weigh about 80 and 91 giga-electronvolts, so at nuclear energies the denominator is enormous and the interaction is throttled. Massive carriers also mean a range of about a thousandth of a proton radius.</span></div>
    <p>The weak force also has a property no other interaction shares: it distinguishes left from right. The W bosons couple <em>only</em> to left-handed particles and right-handed antiparticles. Parity is not slightly violated but maximally violated, established by Wu's cobalt-60 experiment in 1956 and still one of the strangest features of nature. The weak interaction is also the only one that changes a quark's flavour, turning a down into an up and thereby driving beta decay and the fusion chain that powers the Sun.</p>

    <h3>Flavour mixing, the CKM matrix and CP violation</h3>
    <p>Here is a subtlety worth having straight. The quark states with definite mass are not the states the weak force acts on. The two bases are related by a rotation, the <strong>CKM matrix</strong>, whose entries say how likely each quark is to convert into each other quark under a W emission. It is close to the identity — up prefers to become down — but the off-diagonal entries are non-zero, which is why a charm quark can decay to a strange quark or, more rarely, a down.</p>
    <p>Because the CKM matrix has three mixing angles and one irreducible complex phase, it cannot be made entirely real. That phase permits <strong>CP violation</strong>: matter and antimatter behave slightly differently. It was first seen in neutral kaons in 1964 and is now measured precisely in B mesons at LHCb and Belle. This matters, because a universe made of matter requires CP violation. The problem is quantitative: the CKM phase supplies an effect around ten orders of magnitude too small.</p>

    <h3>The Higgs: mass for the bosons, Yukawa couplings for the fermions</h3>
    <p>Gauge invariance forbids writing a mass term for the W and Z by hand, and also forbids a straightforward fermion mass term, because left- and right-handed fields transform differently under SU(2). The Higgs field solves both problems, but by two distinct mechanisms that are often conflated.</p>
    <p>For the gauge bosons the mechanism is genuine and predictive. The Higgs field settles at a non-zero value of about 246 giga-electronvolts everywhere, electroweak symmetry breaks, and three of the four electroweak bosons absorb the would-be Goldstone modes and become massive while one combination stays massless as the photon. The W and Z masses, and their precise relationship through the weak mixing angle, are <em>predictions</em>, confirmed to fractions of a per cent.</p>
    <div class="eq">m = y v / √2
      <span class="why">A fermion's mass is its Yukawa coupling y times the Higgs vacuum value v. The couplings run from about 1 for the top quark down to 0.000003 for the electron, and nothing in the theory predicts them — they are measured, then written back in.</span></div>
    <p>For the fermions, then, the Higgs does not so much explain mass as reformulate it: twelve arbitrary numbers become twelve arbitrary couplings. What it does buy is a testable consequence — the Higgs must couple to each particle in proportion to its mass, and the LHC has confirmed this for the top, bottom, tau and now the muon. The pattern holds, which is real evidence, but the values stay unexplained.</p>

    <h3>How we actually know: accelerators, cross sections and resonances</h3>
    <p>All of this rests on a few experimental techniques. Accelerators drive beams to high energy and collide them, either into a fixed target or head-on; the LHC reaches 13.6 tera-electronvolts, and the available energy sets which particles can be made. Detectors are built in concentric layers: silicon trackers close in, recording charged tracks curving in a magnetic field to give momentum and charge; then electromagnetic and hadronic calorimeters to absorb particles and measure energy; then muon chambers outside, because muons are the only charged particles that get that far. Neutrinos are inferred from missing momentum.</p>
    <p>Two quantities carry the physics. The <strong>cross section</strong> is an effective target area expressing how likely a process is. The <strong>resonance</strong> is how a short-lived particle announces itself: a bump in the rate plotted against the combined mass of its decay products, whose centre gives the mass and whose width, by the uncertainty principle, gives the lifetime. That is how the Z was pinned down, how the top quark was found, and how the Higgs appeared in 2012 as an excess near 125 giga-electronvolts in two independent channels. Because interesting events are rare, everything is statistical, which is why the discovery threshold is five standard deviations.</p>
    <p>The precision record is remarkable. The electron's magnetic moment agrees with theory at about a part in a trillion. LEP measured the Z mass to better than a part in ten thousand. Predicted particles keep turning up where the theory said: the W and Z in 1983, the top quark in 1995, the Higgs in 2012.</p>

    <h3>Nineteen numbers, and what the Standard Model leaves out</h3>
    <p>Count the inputs and you get roughly nineteen free parameters: nine charged-fermion masses, four CKM parameters, three gauge couplings, the Higgs mass and vacuum value, and the strong CP angle. Add neutrino masses and mixing and it rises to about twenty-six. For a theory claiming to be fundamental this is unsatisfying, and not merely as a matter of taste: a theory with twenty-six dials is a framework you tune rather than an explanation. The top quark is 340,000 times heavier than the electron and nobody can say why.</p>
    <p>The definite gaps are these. <strong>Gravity</strong> is simply absent. <strong>Dark matter</strong>, five times more abundant than ordinary matter, has no candidate here. <strong>Dark energy</strong> is unaccounted for. <strong>Neutrino masses</strong> are established by oscillation experiments but the original theory sets them to zero, so it must be extended. And the <strong>matter–antimatter asymmetry</strong> that allowed anything to exist is far larger than the CKM phase can generate. The Standard Model is right about everything it describes and silent about most of the universe by mass and energy — and both halves of that sentence are why particle physics continues.</p>
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
      { m: "The Standard Model explains why particles have the masses they do.", t: "It predicts the W and Z masses from symmetry breaking, but every fermion mass is a Yukawa coupling measured from experiment and inserted by hand." }
    ],
    terms: [
      { term: "Fermion", def: "Matter particle (quarks and leptons); makes up ordinary matter." },
      { term: "Boson", def: "Force-carrier particle (photon, gluon, W, Z, Higgs)." },
      { term: "Quark / lepton", def: "The two families of fermions; quarks feel the strong force, leptons don't." },
      { term: "Gauge symmetry", def: "The symmetry principle (U(1), SU(2), SU(3)) that generates each force." },
      { term: "Confinement / asymptotic freedom", def: "Quarks can't be isolated, yet feel little force at very short range." },
      { term: "Higgs field / boson", def: "The all-pervading field giving fundamental particles mass; its excitation found in 2012." },
      { term: "CKM matrix", def: "The rotation between quarks as the weak force sees them and quarks of definite mass; its complex phase is the source of CP violation." },
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
    { name: "Particle Data Group", desc: "The official reference tables and reviews for every measured particle property.", url: "https://pdg.lbl.gov/", type: "web", icon: "🌐" }
  ]
});
addModule({
  id: "frontiers", track: "particles", order: 2,
  title: "Frontiers & open questions",
  fields: ["frontiers"], readMins: 26,
  summary: "The orientation map of what physics does not know: the three different kinds of open problem, why they are routinely confused, why the experimental well has run dry, and how physicists reason when data cannot decide.",
  lesson: `
    <h3>The big picture</h3>
    <p>Every other module here tells you something physics knows. This one maps what it does not — and, more usefully, how the unknowns relate to each other. That second part matters, because the famous open problems get listed as though they were all the same species of difficulty. Dark matter sits next to the hierarchy problem sits next to the singularity at the centre of a black hole, as if a physicist were equally stuck on all three. They are not: they carry different standards of evidence and wildly different odds of resolution. Sorting them is the most useful thing you can do if you want to discuss the frontier without sounding like a documentary.</p>
    <p>The honest headline is this. We hold two theories that each work superbly in their own domain and are known to be mutually incompatible — and we have had no decisive new experimental anomaly for a long time. Either condition alone is ordinary. Having both at once is historically unusual, and it is the real reason the field feels stuck: a known crack in the foundations, and no experimental crowbar to open it with.</p>

    <h3>Two theories, one border, no bridge</h3>
    <p>General relativity describes gravity as the geometry of spacetime: smooth, deterministic, and successful in every test from Mercury's perihelion to gravitational waves to the imaging of black hole shadows. Quantum field theory describes everything else as quantised fields living <em>on</em> a spacetime stage, and in the case of quantum electrodynamics is confirmed to about a part in a trillion. Each is the best-tested theory in its class, and neither has a single confirmed failure.</p>
    <p>They cannot both be the last word, because they disagree about what spacetime is. General relativity treats geometry as a classical object; quantum theory insists anything carrying energy must be quantum. Put a mass into a superposition of two locations and ask which spacetime it curves. Neither theory answers, and the combination gives nonsense. That is not philosophical hand-wringing — it is a precise technical failure, worked through in the quantum gravity track.</p>
    <div class="callout"><b>A precision worth having:</b> it is wrong to say we have no quantum theory of gravity at all. Treated as an effective field theory, gravity gives perfectly good quantum corrections at ordinary energies. The breakdown is at very high energy, where the theory demands endless undetermined constants and loses predictive power. Say <em>incompatible at the Planck scale</em>, not <em>incompatible</em>.</div>

    <h3>Three kinds of open problem</h3>
    <p>Here is the sorting that makes the field legible. Almost every celebrated puzzle falls into one of three categories, and they are not equivalent.</p>

    <h4>Kind one: genuine inconsistencies</h4>
    <p>The theory demonstrably fails: it returns infinities, or two established principles give contradictory answers to the same question. Quantum gravity at the Planck scale is the flagship. So are <strong>singularities</strong> — general relativity predicts regions where curvature diverges and prediction stops, and the Penrose and Hawking theorems showed this is generic, not an artefact of assumed symmetry. The theory forecasts its own failure. The <strong>black hole information paradox</strong> belongs here too: Hawking radiation appears thermal and information-free, while quantum mechanics forbids a pure state evolving into a mixed one. These cannot all stand, and no aesthetic judgement is needed to see it.</p>

    <h4>Kind two: missing ingredients</h4>
    <p>The theory is consistent but incomplete: observation shows something exists which the theory does not contain. <strong>Dark matter</strong> is inferred independently from rotation curves, cluster masses, lensing, structure formation and the microwave background peaks, and the Standard Model has no candidate. <strong>Dark energy</strong> is the measured fact of cosmic acceleration. <strong>Neutrino masses</strong> are the cleanest case: the original Standard Model forbids them, oscillation proved they exist, and that remains the one confirmed piece of beyond-Standard-Model physics in the particle sector. The <strong>matter-antimatter asymmetry</strong> is similar — Standard Model CP violation is orders of magnitude too feeble to produce the universe we live in. These problems have the clearest route forward, because data is the arbiter and data keeps arriving.</p>

    <h4>Kind three: aesthetic and naturalness discomforts</h4>
    <p>Nothing is broken. Every prediction works. The complaint is that the numbers look unreasonable. The <strong>hierarchy problem</strong> asks why the Higgs mass sits so far below the Planck scale when quantum corrections should drag it up, requiring a cancellation of extraordinary precision. The <strong>strong CP problem</strong> asks why a parameter that could naturally be of order one measures smaller than about ten to the minus ten. And the Standard Model's roughly <strong>nineteen free parameters</strong> are inputs we measure, not results we derive. The grievance is about explanation, not correctness — and the universe is entitled to reply that the number simply is what it is.</p>

    <h3>Why the third kind is genuinely different</h3>
    <p>This is the distinction most popular accounts blur. Kinds one and two are anchored to something outside our heads: a contradiction, or a measurement. Kind three rests on a judgement about which numbers deserve explaining. That judgement has a name — <strong>naturalness</strong> — and the field bet very heavily on it.</p>
    <p>The bet was concrete. If naturalness is a reliable guide, the hierarchy problem should be solved by new particles near the TeV scale, and the Large Hadron Collider should have found them. Supersymmetry was the favoured mechanism, its partner particles cancelling the dangerous corrections. The LHC found the Higgs boson in 2012 and, so far, nothing else. Superpartners, technicolour, low-scale extra dimensions and composite Higgs models are all excluded across broad swathes of their most motivated territory.</p>
    <p>Naturalness is not worthless — it correctly anticipated the pion mass splitting and the charm quark. But it failed spectacularly for the cosmological constant.</p>
    <div class="eq">predicted vacuum energy / observed vacuum energy ≈ 10¹²⁰
      <span class="why">Summing quantum zero-point energies with a Planck-scale cutoff overshoots the measured dark energy density by something like 120 orders of magnitude, and even a conservative cutoff leaves tens of orders. Naturalness said this could not happen. It happened.</span></div>
    <p>So the argument now runs three ways. One camp holds that naturalness is right and the partners are merely heavier or hiding in awkward corners. A second holds the principle is right but was implemented badly, and hunts for mechanisms that select the Higgs mass dynamically. A third holds that naturalness is the wrong guide altogether, that some parameters may be environmentally selected across a landscape of vacua, and that apparent tuning is therefore not evidence of anything. No available data settles it. Stating all three positions fairly is worth more than picking one.</p>

    <h3>The experimental drought</h3>
    <p>Why not simply go and look? Because the scale where the inconsistencies bite is unreachably far away.</p>
    <div class="eq">E(Planck) / E(LHC) ≈ 10¹⁹ GeV / 10⁴ GeV ≈ 10¹⁵
      <span class="why">Fifteen orders of magnitude. Collider energy scales roughly with machine size and magnet strength, so closing that gap by brute force means an accelerator of galactic dimensions. Not an engineering shortfall to chip away at — a wall.</span></div>
    <p>The drought is not an absence of results but an absence of <em>surprising</em> results. The last two genuinely unforeseen anomalies both landed in 1998: neutrino oscillation and cosmic acceleration. Everything spectacular since has confirmed theory we already had. The Higgs in 2012 completed the Standard Model as written in the 1970s. Gravitational waves in 2015 confirmed a 1916 prediction. The Event Horizon Telescope images matched general relativity. Triumphs, all of them, and none a crack to prise open.</p>
    <p>The consequence is that <strong>cosmology and precision measurement have overtaken colliders</strong> as the likeliest source of the next surprise. The early universe is the only accelerator that ever reached the interesting energies, and the microwave background and large-scale structure are its detector readout. Meanwhile low-energy precision experiments probe heavy new physics through virtual loops, so a table-top apparatus can reach mass scales no collider will — and that route is cheaper, faster and more diverse in its failure modes.</p>

    <h3>Reasoning under a drought</h3>
    <p>What do physicists actually do when experiment cannot adjudicate? Four things, in descending order of defensibility.</p>
    <ul>
      <li><strong>Internal consistency.</strong> Unitarity, anomaly cancellation, causality and freedom from runaway instabilities are brutal filters, and this is the strongest non-empirical constraint there is.</li>
      <li><strong>Recovery of known physics.</strong> Any successor must reproduce general relativity and the Standard Model in the right limit, which kills far more ideas than outside commentary suggests.</li>
      <li><strong>Explanatory unification.</strong> Does one idea account for several unrelated facts at once? A real virtue, historically a good omen, still not evidence.</li>
      <li><strong>Beauty, elegance and simplicity.</strong> The weakest criterion and the most seductive, having guided magnificent successes and countless dead ends alike, with no way to tell from the inside which you are in.</li>
    </ul>
    <p>The risk is specific. When no decisive data arrives for decades, criteria meant to be tie-breakers quietly become the decision procedure, and a community can mistake internal progress for progress about the world. The opposite error is just as real: forbidding work on anything not yet measurable would have strangled atomic theory in the 1890s and the neutrino in 1930, both unmeasurable for decades and both right.</p>
    <div class="callout"><b>The defensible position:</b> non-empirical reasoning is legitimate as a guide to <em>what to work on</em> and illegitimate as grounds for <em>belief</em>. Elegance tells you where to dig, never what is buried there.</div>

    <h3>Where a surprise could realistically come from</h3>
    <p>A decade-scale view of where the next anomaly might appear:</p>
    <ul>
      <li><strong>Cosmology.</strong> Whether dark energy is constant or evolving; the disagreement between local and cosmological measurements of the expansion rate; and primordial gravitational waves in the microwave background, probing energies far above any collider.</li>
      <li><strong>Neutrinos.</strong> The mass ordering, the absolute scale, and above all whether neutrinos are their own antiparticles — arguably the best-motivated single discovery still on the table.</li>
      <li><strong>Low-energy precision.</strong> Electric dipole moments, rare decays, atomic clocks and interferometers, sensitive to heavy physics through virtual effects.</li>
      <li><strong>Gravitational-wave astronomy.</strong> Ringdown spectroscopy testing whether black holes are exactly as general relativity says, plus unexpected populations and stochastic backgrounds.</li>
      <li><strong>Axion searches</strong>, scanning a motivated window rather than hoping, and capable of solving a category-three and category-two problem at once.</li>
      <li><strong>Direct tests of whether gravity is quantum</strong>, via gravitationally induced entanglement between small masses — beyond current capability and interpretively contested, but a serious programme.</li>
    </ul>
    <p>Notice the pattern: not one is a bigger collider. That structural change matters more than any individual result.</p>

    <h3>Where to go from here</h3>
    <p>This module is a map, not a treatment. The detail lives elsewhere.</p>
    <ul>
      <li><strong>Strings, quantum gravity and the frontier</strong> takes the central inconsistency apart technically, then works through string theory, M-theory, the landscape and the falsifiability argument, loop quantum gravity and the other contenders, closing with a problem-by-problem inventory of status.</li>
      <li><strong>Black holes, horizons and information</strong> handles the information paradox properly, with Hawking radiation, thermodynamics and holography.</li>
      <li><strong>Time, cause and the arrow</strong> covers the arrow of time, the problem of time in quantum gravity, and the case for emergent time.</li>
      <li><strong>The breakthroughs that changed everything</strong> is the corrective: past revolutions almost always arrived from an anomaly nobody ordered, rarely from a beautiful idea pursued ahead of data.</li>
    </ul>
    <div class="callout"><b>The mature take:</b> physics is not nearly finished, and it is not in crisis either. It is in the awkward state of knowing where its foundations crack while lacking the leverage to open them. Distinguish an inconsistency from a missing ingredient from a matter of taste, be honest that the naturalness bet did not pay out, and say plainly that the next revolution will likely come from cosmology or precision measurement, not a bigger machine.</div>
  `,
  keyIdeas: [
    "General relativity and quantum theory are both superbly tested yet mathematically incompatible.",
    "A quantum theory of gravity is the central open problem; it only matters at black hole centres and the Big Bang.",
    "String theory and loop quantum gravity are leading but unconfirmed candidates for quantum gravity.",
    "Dark matter and dark energy make up ~95% of the universe and remain unidentified.",
    "The vacuum-energy calculation misses observed dark energy by up to 120 orders of magnitude.",
    "The measurement problem, matter–antimatter asymmetry and fine-tuning of the constants are all unresolved.",
    "Open problems come in three distinct kinds: genuine inconsistencies where the theory fails, missing ingredients that observation demands, and aesthetic or naturalness discomforts where nothing is broken but the parameters look unreasonable.",
    "The field bet heavily on naturalness, the LHC did not reward it, and whether tuning is evidence of anything at all is now a live methodological argument rather than a technical one."
  ],
  talk: {
    oneliners: [
      "Our two best theories — general relativity and quantum field theory — are both superbly confirmed and flatly incompatible; reconciling them is the big prize.",
      "Quantum gravity only bites where both matter: inside black holes and at the Big Bang, and there neither theory works.",
      "String theory unifies everything on paper and naturally includes gravity, but it needs extra dimensions and has no confirmed prediction yet.",
      "The vacuum energy calculation is off from observed dark energy by up to 120 orders of magnitude — the worst prediction in physics.",
      "The useful move is to sort the open problems into three kinds: things that are broken, things that are missing, and things that merely look ugly — and only the first two are forced on us by nature."
    ],
    myths: [
      { m: "Physics is basically finished bar a few details.", t: "We can't unify our two main theories, can't identify 95% of the universe, and can't explain the constants of nature." },
      { m: "String theory is confirmed / proven.", t: "It is a promising mathematical framework with no experimental confirmation, and it's actively debated." },
      { m: "Many-Worlds (or Copenhagen) is the correct interpretation.", t: "The interpretations make identical predictions; which, if any, is 'right' is unresolved — that's the measurement problem." },
      { m: "All the famous open problems are the same sort of unsolved mystery.", t: "They are three different kinds. Singularities and the information paradox are outright inconsistencies; dark matter and neutrino mass are missing ingredients demanded by data; the hierarchy problem and the nineteen free parameters break nothing at all and rest on a judgement about which numbers deserve explaining." }
    ],
    terms: [
      { term: "Quantum gravity", def: "A sought-after theory unifying general relativity with quantum mechanics." },
      { term: "String theory", def: "Framework where particles are vibrating strings; naturally includes gravity, needs extra dimensions." },
      { term: "Cosmological constant problem", def: "The vast mismatch between predicted vacuum energy and observed dark energy." },
      { term: "Measurement problem", def: "The unresolved question of how quantum superpositions become definite outcomes." },
      { term: "Baryon asymmetry", def: "The unexplained excess of matter over antimatter." },
      { term: "Fine-tuning / naturalness", def: "Why the constants of nature sit in life-permitting, seemingly special ranges." },
      { term: "Planck scale", def: "The energy of roughly ten to the nineteen GeV where quantum gravity must matter, about fifteen orders of magnitude beyond collider reach." },
      { term: "Non-empirical theory assessment", def: "Judging a theory by internal consistency, recovery of known physics, unification and elegance when no experiment can decide between candidates." }
    ]
  },
  test: [
    { q: "Why is quantum gravity such a hard, central problem?", a: "General relativity (smooth curved spacetime) and quantum field theory (jittery probabilistic fields) are both superbly tested but mathematically incompatible. Attempts to quantise gravity produce uncontrollable infinities. It only matters where both regimes overlap — black hole singularities and the Big Bang — and there we have no working theory." },
    { q: "Why is dark energy considered such an embarrassment for theory?", a: "When quantum field theory estimates the energy of the vacuum, it exceeds the observed dark-energy density by up to about 120 orders of magnitude — the largest known discrepancy between theory and observation. Note that dark energy straddles two of the three categories: as an observed acceleration it is a missing ingredient, but as a number theory gets catastrophically wrong it is closer to an outright inconsistency. It is also the clearest case where naturalness reasoning failed." },
    { q: "What is the measurement problem?", a: "Quantum mechanics describes smooth, deterministic evolution of superpositions but doesn't cleanly explain how or why a single definite outcome appears on measurement. Competing interpretations (Copenhagen, Many-Worlds, pilot-wave) agree on predictions but disagree on what's really happening; it remains unresolved." },
    { q: "Set out the three kinds of open problem and explain why the third is different in character.", a: "Genuine inconsistencies are cases where the theory demonstrably fails, such as quantum gravity at the Planck scale, singularities and the black hole information paradox. Missing ingredients are things observation proves exist but the theory lacks, such as dark matter, dark energy, neutrino masses and the matter-antimatter asymmetry. Aesthetic or naturalness discomforts break nothing at all: the hierarchy problem, the strong CP problem and the roughly nineteen free parameters are cases where every prediction works but the numbers look unreasonable. The third kind is different because it rests on a human judgement about which values deserve explanation rather than on a contradiction or a measurement, and that judgement, naturalness, has a mixed record and was not vindicated by the LHC." },
    { q: "Why has the source of likely new discoveries shifted away from colliders?", a: "The Planck scale sits around ten to the nineteen GeV against roughly ten to the fourth for the LHC, a gap of some fifteen orders of magnitude that no plausible machine can close. Meanwhile the last genuinely unexpected anomalies, neutrino oscillation and cosmic acceleration, both date from 1998, and the great results since have confirmed existing theory rather than challenged it. Cosmology reaches energies no accelerator can, and low-energy precision experiments probe heavy new physics indirectly through virtual effects, so both are now more likely sources of the next surprise." }
  ],
  resources: [
    { name: "David Tong — String Theory", desc: "Free graduate lecture notes on the leading unification candidate.", url: "https://www.damtp.cam.ac.uk/user/tong/string.html", type: "notes", icon: "📄" },
    { name: "Particle Data Group — Review of Particle Physics", desc: "The authoritative reference for current measurements, limits and exclusions. Check here before quoting any number.", url: "https://pdg.lbl.gov/", type: "web", icon: "🌐" },
    { name: "Sean Carroll — Mindscape / 'The Biggest Ideas'", desc: "Deep, accessible discussion of open problems and interpretations.", url: "https://www.preposterousuniverse.com/podcast/", type: "video", icon: "▶️" },
    { name: "PBS Space Time (YouTube)", desc: "Rigorous episodes on quantum gravity, dark energy and interpretations.", url: "https://www.youtube.com/c/pbsspacetime", type: "video", icon: "▶️" },
    { name: "Quanta Magazine — Fundamental Physics", desc: "Excellent, current reporting on the frontiers.", url: "https://www.quantamagazine.org/physics/", type: "web", icon: "🌐" }
  ]
});
