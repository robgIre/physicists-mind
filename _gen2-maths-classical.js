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
    { name: "Feynman Lectures Vol. II, Ch. 19", desc: "The principle of least action, explained better than anywhere else.", url: "https://www.feynmanlectures.caltech.edu/II_19.html", type: "book", icon: "📚" }
  ]
});
