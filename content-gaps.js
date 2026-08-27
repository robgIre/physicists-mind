/* ===== ADDITIONS TO EXISTING TRACKS ===== */

/* ===== GAP FILLERS: frames & transformations, Dirac ===== */

addModule({
  id: "frames", track: "foundations", order: 5,
  title: "Frames and transformations: Galilean, Lorentz and the rest",
  fields: ["classical","relativity","maths"], readMins: 28,
  summary: "A precise guide to what each kind of transformation actually does — Galilean, Lorentz, canonical, gauge, conformal — and why a Lagrangian is not a transformation at all.",
  lesson: `
    <h3>The big picture</h3>
    <p>Every physical statement is made from some point of view. You pick an origin, some axes and a clock, you write down numbers, and you get an equation. Someone else, moving relative to you, picks their own and gets different numbers. A <strong>transformation</strong> is the dictionary between the two descriptions, and much of theoretical physics is working out which things survive translation. The trouble is that "transformation" is used for at least half a dozen genuinely different operations, and one word that sounds like it belongs on the list — <em>Lagrangian</em> — is not a transformation at all, and carries three unrelated meanings of its own. This module gives each word exactly one job.</p>

    <h3>What a reference frame is, and what a transformation does</h3>
    <p>A <strong>reference frame</strong> is a physical choice, not a mathematical one: an origin, a set of axes, a synchronised clock, and a state of motion. A <strong>coordinate system</strong> is the labelling scheme you lay on top of it — Cartesian, spherical, whatever is convenient. Nature does not care about either. A ball flies through the air whether or not you have drawn axes on the world, and the job of a transformation is to convert your labels into someone else's without changing the ball.</p>
    <p>Two words do most of the work. A quantity is <strong>invariant</strong> if it comes out the same number in every frame — mass, electric charge, the spacetime interval. An equation is <strong>covariant</strong> if it keeps the same <em>form</em> in every frame, though the individual symbols take different values. Newton's second law is covariant under Galilean transformations; Maxwell's equations are covariant under Lorentz transformations. Anything that is neither invariant nor covariant is an accident of your viewpoint rather than a fact about the world.</p>
    <p>One more term: an <strong>inertial frame</strong> is one in which a body with no forces on it moves in a straight line at constant speed. Both Galilean and Lorentz transformations move you between inertial frames; accelerating and rotating frames need extra machinery, and general relativity is what happens when you take that machinery seriously.</p>

    <h3>Galilean transformations: the Newtonian dictionary</h3>
    <p>Suppose your friend's frame slides past yours at constant velocity v along the x axis. Galileo's answer, and Newton's, is the obvious one:</p>
    <div class="eq">x&prime; = x &minus; vt,&nbsp;&nbsp; y&prime; = y,&nbsp;&nbsp; z&prime; = z,&nbsp;&nbsp; t&prime; = t
      <span class="why">Positions shift by however far the moving frame has travelled; time is simply copied across untouched. That last innocent-looking equation, t prime equals t, is the entire Newtonian worldview in five characters.</span></div>
    <p>Because time is shared, <strong>simultaneity is absolute</strong>: if two events happen at once for you, they happen at once for everybody. Durations and lengths are absolute, and velocities simply add — a ball thrown at 20 m/s from a train doing 30 m/s moves at 50 m/s over the ground. Differentiate twice and the velocity term drops out, so accelerations match in both frames. Since Newtonian forces depend on separations between bodies, which are also unchanged, F = ma has exactly the same form for both of you.</p>
    <p>That is <strong>Galilean invariance</strong>, and it delivers the principle of relativity in its original form: no mechanical experiment inside a smoothly moving ship can tell you the ship is moving. Galileo made the point with butterflies and dripping water in a sealed cabin below decks. The full set of transformations preserving Newtonian mechanics — rotations, spatial translations, time translation and these velocity boosts — forms the <strong>Galilean group</strong>.</p>

    <h3>Why Galilean transformations are fatal to Maxwell</h3>
    <p>Now feed a light wave into that dictionary. Maxwell's equations combine into a wave equation whose solutions travel at a fixed speed c, set by two constants you can measure with capacitors and coils on a bench. Apply the Galilean transformation and the wave equation does not come back in the same form: the transformed version describes waves moving at c &minus; v one way and c + v the other. Electromagnetism would therefore be true in only one special frame — and that frame would be detectable, which is exactly what the principle of relativity forbids.</p>
    <p>Nineteenth-century physics took the obvious escape route and named the special frame the <strong>aether</strong>. Michelson and Morley went looking for the Earth's motion through it and found nothing. Hendrik Lorentz and Henri Poincar&eacute; patched the hole by writing down new transformation equations under which Maxwell's equations <em>are</em> invariant, complete with a contraction of moving matter and a quantity Lorentz called "local time" — which he regarded as a mathematical convenience rather than anything a clock would show.</p>
    <div class="callout"><b>The key historical point:</b> Lorentz and Poincar&eacute; found the transformation first, but treated it as a mechanical artefact of moving through the aether. Einstein's 1905 contribution was to throw the aether away and reinterpret the same equations as statements about space and time themselves. Same algebra, completely different physics.</div>

    <h3>Lorentz transformations: space and time mix</h3>
    <p>For a boost of speed v along x, the correct dictionary is:</p>
    <div class="eq">x&prime; = &gamma;(x &minus; vt),&nbsp;&nbsp; t&prime; = &gamma;(t &minus; vx/c&sup2;),&nbsp;&nbsp; &gamma; = 1/&radic;(1 &minus; v&sup2;/c&sup2;)
      <span class="why">Space and time now transform into each other. The vx/c-squared term in the time equation is the whole of relativity: how much time passes for you depends on where in space the event happened, so simultaneity stops being universal.</span></div>
    <p>Set v much smaller than c and &gamma; is indistinguishable from 1 while vx/c&sup2; is negligible, so you recover x&prime; = x &minus; vt and t&prime; = t exactly. The Galilean transformation is not wrong, it is the low-speed limit — which is why nobody noticed for two hundred years.</p>
    <p>What Lorentz transformations preserve is not lengths or durations separately but the <strong>spacetime interval</strong>, (c&Delta;t)&sup2; &minus; (&Delta;x)&sup2; &minus; (&Delta;y)&sup2; &minus; (&Delta;z)&sup2;. That minus sign is the difference between a boost and a rotation. A rotation preserves x&sup2; + y&sup2; and is parametrised by an angle with sines and cosines; a boost preserves the interval and is parametrised by a <strong>rapidity</strong> &phi; with hyperbolic functions, where tanh &phi; = v/c. Rapidities add along a line, which is exactly why velocities do not:</p>
    <div class="eq">w = (u + v) / (1 + uv/c&sup2;)
      <span class="why">Combine two speeds relativistically and the denominator holds the answer below c. Feed in u = v = 0.9c and you get about 0.994c, not 1.8c. Adding rapidities without limit still never pushes the velocity past light speed.</span></div>
    <p>The Lorentz transformations form a <strong>group</strong>: compose two and you get another, every one has an inverse, and the identity is included. Add the four spacetime translations and you get the <strong>Poincar&eacute; group</strong>, the full symmetry of flat spacetime — three rotations, three boosts, four translations. Particle physicists define a particle as an irreducible representation of this group, which is where mass and spin come from as labels.</p>

    <h3>The word that causes the trouble: a Lagrangian is not a transformation</h3>
    <p>Here is the distinction to nail down. A <strong>Lagrangian</strong> is not a change of viewpoint, not a coordinate rule, and not a relative of the Galilean or Lorentz transformations. It is a <em>function</em>: for a simple mechanical system, kinetic energy minus potential energy, L = T &minus; V, whose time integral along a path is the action S. The physical path is the one for which S is stationary, and imposing that condition gives the Euler&ndash;Lagrange equations, which reproduce F = ma exactly.</p>
    <p><strong>Lagrangian mechanics</strong> is therefore a reformulation of dynamics — a different route to the same equations of motion, using scalars instead of vectors. It answers "what does this system do?" A transformation answers "how does my description relate to yours?" You can use Lagrangian mechanics in a single frame all day without transforming anything.</p>
    <p>The two ideas do connect, and the connection is the central technique of modern theoretical physics. Because the action is a single scalar, you can <em>demand</em> that it be invariant under a chosen transformation group. Build a Lagrangian unchanged by Lorentz transformations and every equation of motion it produces is automatically relativistic. That is literally how relativistic theories are constructed. And <strong>Noether's theorem</strong> completes the circle: every continuous symmetry of the Lagrangian yields a conserved quantity — time translation gives energy, spatial translation gives momentum, rotation gives angular momentum. Symmetry group in, conservation law out.</p>

    <h3>Lagrangian versus Eulerian: the third meaning</h3>
    <p>Fluid dynamics uses the same surname for something else again. The <strong>Lagrangian description</strong> follows an individual fluid parcel as it moves, like riding in a balloon. The <strong>Eulerian description</strong> fixes a point in space and records what flows past, like a weather station. Both describe the same river; they are bookkeeping choices, not physics.</p>
    <p>The bridge is the material derivative, D/Dt = &part;/&part;t + u&middot;&nabla;, converting a rate of change at a fixed point into the rate felt by a moving parcel. None of this has anything to do with L = T &minus; V; the collision of names is pure accident.</p>

    <h3>The other transformations worth recognising</h3>
    <p>Four more appear constantly. One line each on what they preserve is enough to keep them straight.</p>
    <ul>
      <li><strong>Canonical transformations</strong> — changes of variables in Hamiltonian mechanics that mix positions and momenta while preserving Hamilton's equations and all Poisson brackets. They preserve the symplectic structure of phase space, not distances.</li>
      <li><strong>Gauge transformations</strong> — changes to the potentials that leave every measurable field untouched. These are internal, not spacetime, transformations: you are relabelling a redundancy, and demanding that nothing observable depends on the choice generates the fundamental forces.</li>
      <li><strong>Conformal transformations</strong> — these preserve angles but allow lengths to be rescaled. They matter at critical points in statistical mechanics, where a system looks the same at every magnification.</li>
      <li><strong>Diffeomorphisms</strong>, or general coordinate transformations — arbitrary smooth relabellings of spacetime, not restricted to inertial frames. General relativity demands that physics be unchanged under all of them, which is why its equations are written with tensors.</li>
    </ul>
    <p>Finally, the discrete transformations are flips rather than continuous slides: parity P mirrors space, time reversal T runs the clock backwards, charge conjugation C swaps particles for antiparticles. Nature does not respect all of these — the weak force violates P and CP — which is itself one of the deepest facts in physics.</p>
    <div class="callout"><b>The one-line glossary:</b> Galilean transformation, low-speed frame change with absolute time. Lorentz transformation, high-speed frame change that mixes space and time. Poincar&eacute; group, Lorentz plus translations. Lagrangian, the function T &minus; V whose action you extremise. Lagrangian description, following a fluid parcel. Canonical transformation, phase-space change preserving Hamilton's equations. Gauge transformation, redundancy in the potentials. Diffeomorphism, arbitrary smooth coordinate relabelling.</div>
  `,
  keyIdeas: [
    "A reference frame is a physical viewpoint; a coordinate transformation is the dictionary between two viewpoints, and physics looks for quantities and equation forms that survive it.",
    "Galilean transformations assume a universal time, so simultaneity is absolute and velocities simply add; Newton's laws keep their form under them.",
    "Galilean transformations do not leave the wave equation or the speed of light invariant, so electromagnetism would pick out a preferred frame — the crisis that produced special relativity.",
    "Lorentz and Poincare wrote the correct transformation first as an aether fix; Einstein reinterpreted it as a statement about space and time themselves.",
    "Lorentz transformations mix space and time, preserve the spacetime interval, form a group, and reduce exactly to Galilean transformations at low speed.",
    "A Lagrangian is a function whose action you extremise to get equations of motion, not a change of frame; you connect the two by demanding the Lagrangian be invariant under the relevant symmetry group, and Noether's theorem then hands you a conservation law.",
    "Canonical, gauge, conformal and general coordinate transformations each preserve something different: Hamilton's equations, the measurable fields, angles, and the tensor form of the equations respectively."
  ],
  talk: {
    oneliners: [
      "Galilean transformations keep time universal; Lorentz transformations mix space into time, and that single change is all of special relativity.",
      "The Galilean transformation is not wrong, it is just the low-speed limit — set v much less than c and the Lorentz formulae collapse straight back onto it.",
      "Maxwell's equations are not Galilean-invariant, which is why electromagnetism forced physics to change its transformation rules rather than the other way round.",
      "A Lagrangian is a function, not a transformation — but you pick it to be invariant under a transformation group, and that is precisely how you build a relativistic theory.",
      "Watch out for the word Lagrangian: in mechanics it means T minus V, in fluids it means following a parcel rather than watching a fixed point."
    ],
    myths: [
      { m: "Lorentz transformations replaced Galilean ones because Galileo made a mistake.", t: "Galilean transformations are the exact low-speed limit of Lorentz transformations; they remain correct to extraordinary accuracy for anything slower than a rocket." },
      { m: "Einstein derived the Lorentz transformation from scratch.", t: "Lorentz and Poincare had the equations first, as a mechanical fix for the aether. Einstein's contribution was reinterpreting them as facts about space and time and discarding the aether." },
      { m: "A Lagrangian is a way of changing reference frame.", t: "It is a scalar function whose action is extremised to yield equations of motion. Changing frame and reformulating dynamics are separate operations." },
      { m: "Relativistic velocity addition is a special rule bolted on to stop things exceeding c.", t: "It falls out automatically from composing two Lorentz boosts; rapidities add linearly without bound and the velocity still never reaches c." }
    ],
    terms: [
      { term: "Reference frame", def: "A physical viewpoint: an origin, axes, a clock and a state of motion." },
      { term: "Invariant vs covariant", def: "Invariant means the number is unchanged between frames; covariant means the equation keeps the same form." },
      { term: "Galilean transformation", def: "Frame change with x prime equals x minus vt and t prime equals t; absolute time and simply additive velocities." },
      { term: "Lorentz transformation", def: "Frame change that mixes space and time via the gamma factor and preserves the spacetime interval." },
      { term: "Rapidity", def: "The hyperbolic-angle parameter of a boost, with tanh of rapidity equal to v over c; rapidities add linearly." },
      { term: "Poincare group", def: "The Lorentz transformations together with spacetime translations: the full symmetry of flat spacetime." },
      { term: "Canonical transformation", def: "A change of phase-space variables preserving Hamilton's equations and the Poisson brackets." },
      { term: "Diffeomorphism", def: "An arbitrary smooth relabelling of spacetime coordinates; general relativity demands physics be unchanged under these." }
    ]
  },
  test: [
    { q: "What exactly does a Galilean transformation assume, and where does it fail?", a: "It assumes a universal time shared by all observers, so t prime equals t while positions shift by vt. This makes simultaneity absolute and velocities simply additive. It fails for electromagnetism: applied to the wave equation it produces light speeds of c plus or minus v, which would make Maxwell's equations true in only one preferred frame." },
    { q: "How do Lorentz transformations differ from Galilean ones, and why is the difference invisible in everyday life?", a: "Lorentz transformations mix space into time through the gamma factor and the term vx over c squared in the time equation, so simultaneity becomes relative. At everyday speeds gamma is indistinguishable from one and the mixing term is negligible, so the formulae reduce exactly to the Galilean case." },
    { q: "Why can relativistic velocity addition never exceed c?", a: "Composing two boosts adds their rapidities, and velocity is the hyperbolic tangent of rapidity, which approaches but never reaches one. Equivalently, the velocity addition formula divides by one plus uv over c squared, and that denominator always holds the result below c." },
    { q: "Is a Lagrangian a kind of transformation? Explain the actual relationship.", a: "No. A Lagrangian is a scalar function, T minus V in simple mechanics, whose action you extremise to obtain the equations of motion. The connection to transformations is that you choose the Lagrangian to be invariant under a symmetry group: a Lorentz-invariant Lagrangian automatically generates relativistic dynamics, and Noether's theorem converts each continuous symmetry into a conservation law." },
    { q: "Name three other kinds of transformation and say what each preserves.", a: "Canonical transformations mix positions and momenta while preserving Hamilton's equations and the Poisson brackets. Gauge transformations change the potentials while leaving every measurable field unchanged. Diffeomorphisms are arbitrary smooth coordinate relabellings, under which general relativity demands the physics be unchanged. Conformal transformations preserve angles while allowing lengths to be rescaled." }
  ],
  resources: [
    { name: "David Tong — Dynamics and Relativity", desc: "Careful treatment of Galilean and Lorentz transformations side by side.", url: "https://www.damtp.cam.ac.uk/user/tong/relativity.html", type: "notes", icon: "📄" },
    { name: "David Tong — Classical Dynamics", desc: "Where Lagrangians, Noether's theorem and canonical transformations are developed properly.", url: "https://www.damtp.cam.ac.uk/user/tong/dynamics.html", type: "notes", icon: "📄" },
    { name: "MIT 8.033 — Relativity", desc: "Undergraduate course building the Lorentz transformation from the postulates.", url: "https://ocw.mit.edu/courses/8-033-relativity-fall-2006/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. I", desc: "Chapter 15 on the Lorentz transformation and Chapter 19 on least action.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" }
  ]
});

addModule({
  id: "dirac", track: "quantum", order: 2,
  title: "Dirac, spin and antimatter",
  fields: ["quantum","qft","maths"], readMins: 28,
  summary: "How demanding an equation that respects both quantum mechanics and relativity forced matrices, produced spin one half for free, and predicted antimatter.",
  lesson: `
    <h3>The big picture</h3>
    <p>In 1928 Paul Dirac wanted one thing: a wave equation consistent with both quantum mechanics and special relativity. What he got was far more than he asked for. The equation came out with four components instead of one, and those extra components turned out to describe <strong>spin one half</strong> — a property that had been bolted on to quantum theory by hand for years — together with a second set of solutions that nobody wanted and which turned out to be <strong>antimatter</strong>. Demanding consistency between two accepted theories produced two enormous discoveries that were not being looked for. It is the cleanest example in physics of mathematics knowing more than its author.</p>

    <h3>Why the Schr&ouml;dinger equation cannot be relativistic</h3>
    <p>Look at the structure of Schr&ouml;dinger's equation and the problem is visible immediately. It has one time derivative and two space derivatives. Relativity insists that space and time enter on an equal footing, transforming into each other under a Lorentz boost, so an equation that differentiates them a different number of times cannot possibly keep its form when you change frame. Underneath this is the fact that Schr&ouml;dinger built his equation from the Newtonian energy relation, kinetic energy equals p squared over 2m, which is simply the wrong relation at high speed.</p>
    <p>The obvious repair is to start from the relativistic relation instead, E&sup2; = (pc)&sup2; + (mc&sup2;)&sup2;, and promote it to an operator equation. That gives the <strong>Klein&ndash;Gordon equation</strong>, second order in both time and space and manifestly Lorentz covariant. Unfortunately, read as a single-particle wave equation in the Schr&ouml;dinger style, it misbehaves badly. Being second order in time, it needs both the wavefunction and its time derivative as initial data, and the quantity playing the role of probability density can come out <strong>negative</strong> — not a technical annoyance but nonsense. It also carries negative-energy solutions, so nothing stops an electron cascading down towards minus infinity in energy.</p>
    <div class="callout"><b>Worth flagging:</b> the Klein&ndash;Gordon equation is not wrong. It is the correct equation for spin-zero particles such as the Higgs boson and the pion. What was wrong was the interpretation — reading it as a probability amplitude for one particle rather than as the equation of motion for a field. That correction took another two decades.</div>

    <h3>Dirac's demand, and the algebra that forced matrices</h3>
    <p>Dirac's move was to insist on an equation <strong>first order in time</strong>, to keep a sensible positive probability density like Schr&ouml;dinger's, and therefore, by relativity, <strong>first order in space too</strong>. So he wrote down the most general first-order form he could and demanded that squaring it reproduce the Klein&ndash;Gordon equation, since any relativistic particle must satisfy the correct energy&ndash;momentum relation.</p>
    <p>That demand is severe. Squaring a first-order expression generates cross terms between the different coefficients, and those cross terms all have to vanish, while the squares of the coefficients have to come out right. In other words the coefficients must <em>anticommute</em>: multiply two of them in the opposite order and you get minus the original. No ordinary numbers can do that. Dirac realised the coefficients had to be <strong>matrices</strong>, and the smallest ones that work are four by four. These are the <strong>gamma matrices</strong>, and the condition they satisfy is the whole content of the construction:</p>
    <div class="eq">&gamma;^&mu; &gamma;^&nu; + &gamma;^&nu; &gamma;^&mu; = 2 &eta;^(&mu;&nu;) I
      <span class="why">Swapping the order of two gamma matrices flips the sign, except that a matrix multiplied by itself gives plus or minus the identity according to the spacetime metric eta. This anticommutation relation is what makes the equation square correctly to Klein-Gordon, and it is why the coefficients cannot be plain numbers.</span></div>
    <p>With those in hand the equation itself is compact:</p>
    <div class="eq">(i&#8463; &gamma;^&mu; &part;_&mu; &minus; mc) &psi; = 0
      <span class="why">Read it as: the four-dimensional rate of change of the field, contracted with the gamma matrices, is set by the mass. Because the gammas are matrices, psi cannot be a single number — it must be a four-component column, and that forced multiplicity is where spin and antimatter come from.</span></div>

    <h3>Spin one half falls out</h3>
    <p>Here is the moment. Electron spin had been known experimentally since Stern and Gerlach in 1922 and written into quantum mechanics by Pauli in 1927, but only by hand: Pauli appended a two-component spinor and a set of matrices because the data demanded it. Nothing explained why the electron should have spin one half at all.</p>
    <p>Dirac put in nothing about spin. He asked only for a first-order relativistic equation. The four-component object he was forced into decomposes into two two-component <strong>spinors</strong>, and applying the equation to an electron in a magnetic field produces exactly the spin one-half behaviour Pauli had assumed. Spin was not inserted; it emerged as a consequence of combining quantum mechanics with relativity.</p>
    <p>The theory then went further and got a number right that nobody could otherwise explain. The <strong>g-factor</strong> measures how strongly a particle's spin couples to a magnetic field. Classical reasoning about a spinning charge predicts g = 1; experiment gave very nearly 2, and this factor of two was an outright mystery. The Dirac equation predicts g = 2 automatically. Later, quantum electrodynamics explained the tiny remaining discrepancy — the anomalous magnetic moment — to twelve significant figures, but the leading 2 is Dirac's.</p>

    <h3>Negative energies, the sea, and the positron</h3>
    <p>The four components come in two pairs, and the second pair carries <strong>negative energy</strong>. Dirac could not throw them away: quantum mechanics requires a complete set of solutions, and an electron sitting in a positive-energy state would in principle be able to radiate a photon and fall into a negative-energy one, so ordinary matter should be unstable in a fraction of a second.</p>
    <p>His original fix was the <strong>Dirac sea</strong>: assume every negative-energy state in the universe is already occupied. Since electrons are fermions and no two can share a state, an ordinary electron then has nowhere to fall. A <em>hole</em> in this sea — a missing negative-energy electron — would behave like a particle with the electron's mass but the opposite charge. In 1931 Dirac accepted the consequence and predicted a new particle. Carl Anderson found it in cloud-chamber photographs of cosmic rays in 1932: a track curving the wrong way in a magnetic field. The <strong>positron</strong> was real, and Anderson had a Nobel Prize within four years.</p>
    <p>The sea is now retired. It only works for fermions, so it cannot explain the antiparticles of bosons, and an infinite reservoir of charge and energy filling all space is an uncomfortable object. Quantum field theory replaces it cleanly: the negative-energy solutions are reinterpreted as positive-energy antiparticle states of the same field. Nothing infinite is required. The sea was scaffolding that got the right answer for the wrong reason.</p>

    <h3>What antimatter actually is</h3>
    <p>Antimatter has a reputation for exoticism that it does not deserve. An antiparticle is the same particle with its charges reversed — electric charge, and the other quantum numbers such as lepton and baryon number. Identical mass, identical spin, identical lifetime. An antielectron in isolation behaves exactly like an electron with a plus sign. It is only exotic in our corner of the universe because there is almost none of it left, and that scarcity is itself an open problem: the early universe should have produced equal amounts, and why it did not is the <strong>baryon asymmetry</strong> question.</p>
    <p>It is also routine technology. Positron emission tomography, the PET scan, is named after it: a tracer emits positrons, they annihilate with nearby electrons, and the resulting pair of gamma rays is what the scanner images. Antihydrogen is made and trapped at CERN. The relevant deep symmetry is <strong>CPT</strong>: reverse charge, mirror space and run time backwards together, and any sensible quantum field theory is unchanged. CPT is why a particle and its antiparticle must have precisely equal masses and lifetimes.</p>

    <h3>Spin, statistics, and why you do not fall through your chair</h3>
    <p>The <strong>spin-statistics theorem</strong> is one of the most consequential results in physics and it follows from combining relativity, quantum mechanics and the requirement that causality hold. Particles with half-integer spin must have <strong>antisymmetric</strong> multi-particle states: swap two of them and the wavefunction changes sign. Particles with integer spin are symmetric. Try it the other way round and the theory produces either negative energies or influences travelling faster than light.</p>
    <p>Antisymmetry has an immediate consequence. Put two identical fermions in the same state and swapping them changes nothing while also flipping the sign, so the amplitude must be zero. That is the <strong>Pauli exclusion principle</strong>, and it is not an extra postulate but a corollary. From it follows the entire structure of the periodic table: electrons stack into successive shells rather than all collapsing into the lowest orbital, which gives elements their distinct chemistry. It also gives matter its bulk. Solid objects resist interpenetration mainly because their electrons cannot occupy the same states, which is the honest reason you do not fall through your chair — far more than electrostatic repulsion.</p>
    <p>Push the same principle to astrophysical scale and you get <strong>degeneracy pressure</strong>. A white dwarf is held up not by heat but by the sheer refusal of its electrons to share states; a neutron star is the same story with neutrons at nuclear density. Both have limits — the Chandrasekhar mass for white dwarfs — beyond which gravity wins.</p>

    <h3>The modern reading: a field equation</h3>
    <p>Dirac wrote his equation as a relativistic replacement for Schr&ouml;dinger's, describing one electron. That reading does not survive scrutiny. Relativity permits particle creation whenever the available energy exceeds 2mc&sup2;, so no single-particle description can be consistent: try to localise an electron within its Compton wavelength and you have enough energy to make electron&ndash;positron pairs.</p>
    <p>The modern view is that &psi; is not a wavefunction at all but a <strong>quantum field</strong> defined at every point of spacetime, and the Dirac equation is that field's equation of motion — derived, as usual, from a Lorentz-invariant Lagrangian. Electrons and positrons are its excitations, negative-energy solutions become antiparticle creation operators, and the sea evaporates. Dirac's equation is not superseded by quantum field theory; it is the backbone of it. Every fermion in the Standard Model — every quark, every lepton — obeys it.</p>
  `,
  keyIdeas: [
    "The Schrodinger equation cannot be relativistic because it is first order in time but second order in space, treating them unequally, and it is built on the Newtonian energy relation.",
    "The Klein-Gordon equation is properly relativistic but, read as a single-particle wave equation, gives negative probability densities; it is in fact the correct field equation for spin-zero particles.",
    "Demanding an equation first order in both time and space that squares to Klein-Gordon forces the coefficients to anticommute, which forces them to be four-by-four matrices: the gamma matrices.",
    "Four-component spinors emerged from the algebra, and spin one half fell out of the theory rather than being inserted by hand, along with the correct electron g-factor of approximately 2.",
    "Negative-energy solutions led Dirac to the sea and to predicting the positron, found by Anderson in 1932; field theory has since replaced the sea with antiparticle excitations of the same field.",
    "The spin-statistics theorem makes half-integer spin imply antisymmetry, giving the Pauli exclusion principle, the periodic table, the solidity of matter and degeneracy pressure in white dwarfs and neutron stars.",
    "The Dirac equation is best understood not as a single-particle wave equation but as the equation of motion for a quantum field, which is how it sits inside the Standard Model."
  ],
  talk: {
    oneliners: [
      "Dirac asked only for an equation that respected both quantum mechanics and relativity, and spin and antimatter came out of the algebra uninvited.",
      "Requiring the equation to be first order in space and time forced the coefficients to anticommute, and nothing but matrices can anticommute.",
      "The theory predicted the electron's g-factor of 2, which classical reasoning said should be 1 — that factor of two had been an outright mystery.",
      "Antimatter is not exotic: an antiparticle is the same particle with its charges flipped, same mass, same spin, and PET scanners use it every day.",
      "You do not fall through your chair mainly because of the Pauli exclusion principle, which is a consequence of the electron having half-integer spin."
    ],
    myths: [
      { m: "Antimatter is a strange, unstable, exotic form of matter.", t: "An antiparticle has identical mass, spin and lifetime to its partner and differs only in the sign of its charges. It seems rare only because our universe happens to be made of matter." },
      { m: "Dirac added spin to his equation to match the experiments.", t: "He put in nothing about spin. He required a first-order relativistic equation, and the four-component structure that resulted produced spin one half automatically." },
      { m: "The Dirac sea is how physicists still explain antiparticles.", t: "It is superseded. Quantum field theory reinterprets the negative-energy solutions as antiparticle excitations, with no infinite filled reservoir required, and unlike the sea it also works for bosons." },
      { m: "The Klein-Gordon equation was simply wrong.", t: "It is the correct equation for spin-zero particles such as the Higgs and the pion. What was wrong was treating it as a single-particle probability amplitude rather than a field equation." }
    ],
    terms: [
      { term: "Klein-Gordon equation", def: "The relativistic wave equation second order in space and time; correct for spin-zero fields, but not a valid single-particle probability equation." },
      { term: "Gamma matrices", def: "The four anticommuting four-by-four matrices whose algebra makes the Dirac equation square to Klein-Gordon." },
      { term: "Anticommutation", def: "Reversing the order of two objects gives minus the original product; impossible for ordinary numbers, natural for matrices." },
      { term: "Spinor", def: "A multi-component object that transforms under rotations in a way requiring a full turn of 720 degrees to return to itself." },
      { term: "g-factor", def: "The strength of a particle's magnetic coupling to its spin; the Dirac equation predicts approximately 2 for the electron." },
      { term: "Dirac sea", def: "The original picture of all negative-energy states being filled, with holes appearing as positrons; now superseded by the field-theoretic reading." },
      { term: "Spin-statistics theorem", def: "Half-integer spin implies antisymmetric states (fermions), integer spin implies symmetric states (bosons)." },
      { term: "CPT symmetry", def: "The combined reversal of charge, space and time under which any sensible quantum field theory is invariant, forcing particles and antiparticles to share mass and lifetime." }
    ]
  },
  test: [
    { q: "Why is the Schrodinger equation incompatible with special relativity?", a: "It contains one time derivative and two space derivatives, so it treats space and time on unequal footing and cannot keep its form under a Lorentz boost. It is also built from the Newtonian kinetic energy relation p squared over 2m rather than the relativistic energy-momentum relation." },
    { q: "What was wrong with reading the Klein-Gordon equation as a single-particle wave equation?", a: "Being second order in time, it requires both the wavefunction and its time derivative as initial data, and the natural probability density can come out negative, which is meaningless. It also carries unbounded negative-energy solutions. The equation itself is fine as a field equation for spin-zero particles." },
    { q: "Why did Dirac's requirements force him to use matrices?", a: "He demanded an equation first order in both time and space whose square reproduces the Klein-Gordon equation. Squaring generates cross terms that must cancel, which requires the coefficients to anticommute — reversing their order flips the sign. Ordinary numbers cannot do that, so the coefficients had to be matrices, the smallest working set being four by four." },
    { q: "In what sense did spin emerge from the Dirac equation rather than being assumed?", a: "Pauli had inserted spin into quantum mechanics by hand to match experiment. Dirac assumed nothing about spin, only relativistic consistency and first-order form. The four-component spinor forced on him by the matrix algebra reproduces spin one half exactly, and predicts the electron g-factor of approximately 2, which classical reasoning could not explain." },
    { q: "Trace the chain from the spin-statistics theorem to why you do not fall through your chair.", a: "Spin-statistics says half-integer spin particles must have antisymmetric multi-particle states. Antisymmetry means two identical fermions cannot occupy the same state, which is the Pauli exclusion principle. Electrons therefore stack into shells rather than collapsing together, giving atoms structure and matter its bulk, so solids resist interpenetration. The same principle scaled up gives the degeneracy pressure holding up white dwarfs and neutron stars." }
  ],
  resources: [
    { name: "David Tong — Quantum Field Theory", desc: "The Dirac equation, spinors and spin-statistics developed properly in the modern field language.", url: "https://www.damtp.cam.ac.uk/user/tong/qft.html", type: "notes", icon: "📄" },
    { name: "Nobel Prize 1933 — Dirac and Schrödinger", desc: "Official prize page for the discovery of new productive forms of atomic theory.", url: "https://www.nobelprize.org/prizes/physics/1933/summary/", type: "reference", icon: "🏅" },
    { name: "Nobel Prize 1936 — Carl Anderson", desc: "Awarded for the discovery of the positron in cosmic rays.", url: "https://www.nobelprize.org/prizes/physics/1936/summary/", type: "reference", icon: "🏅" },
    { name: "MIT 8.323 — Relativistic Quantum Field Theory I", desc: "Graduate course covering Klein-Gordon, Dirac fields and quantisation.", url: "https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/", type: "course", icon: "🎓" }
  ]
});
addModule({
  id: "interpretations", track: "quantum", order: 4,
  title: "What quantum mechanics means: the interpretations",
  fields: ["quantum","philosophy","frontiers"], readMins: 32,
  summary: "Every interpretation of quantum mechanics predicts the same experimental results, so the argument is about what the formalism says the world actually is — and that argument is live.",
  lesson: `
    <h3>The big picture</h3>
    <p>Quantum mechanics works. The recipe — write a wavefunction, evolve it with the Schrödinger equation, square the amplitude to get probabilities — has never failed a test. What nobody agrees on is what the recipe is telling us about reality, and the positions on offer differ not by a decimal place but by whether there is one world or an unimaginable number of them.</p>
    <p>Separate three layers: the mathematics, agreed; the experimental predictions, agreed; the story about what exists, not agreed. An interpretation is a proposal about that third layer. Most are empirically identical to one another. One family is not, and that matters enormously.</p>

    <h3>The measurement problem, stated precisely</h3>
    <p>The measurement problem is often described vaguely as "why does the wavefunction collapse?". It is much sharper than that. It is an inconsistency between three claims, each compelling on its own:</p>
    <ul>
      <li><strong>Completeness.</strong> The wavefunction is a complete description of a system — nothing else about it is left to specify.</li>
      <li><strong>Unitarity.</strong> The wavefunction always evolves smoothly and linearly by the Schrödinger equation, with no exceptions.</li>
      <li><strong>Definiteness.</strong> Measurements have single, definite outcomes — the pointer ends up somewhere, not smeared across the dial.</li>
    </ul>
    <p>Take all three at face value and you get a contradiction. Linearity is the culprit: if the apparatus reads "up" for spin up and "down" for spin down, it must read a <em>superposition of both</em> when the spin starts superposed. Nothing in the equation picks one. The Born rule is bolted on afterwards as a separate axiom describing an event the equation does not contain.</p>
    <div class="callout"><b>The clean way to see it:</b> every interpretation is a decision about which of the three claims to give up. Many Worlds drops definiteness (all outcomes happen, in separate branches). Pilot wave drops completeness (there are also actual particle positions). Objective collapse drops unitarity (the equation is modified). Epistemic views deny the wavefunction was ever a description of the system at all.</div>

    <h3>Decoherence: essential, and not a solution</h3>
    <p>Decoherence comes first, because it is the real physics underneath the whole debate — and the single most misunderstood idea in the subject.</p>
    <p>No system is isolated. A dust grain in interstellar space is struck by microwave background photons; a cat is soaked in air molecules and thermal radiation. Each interaction entangles the system with its environment, and once the environmental states attached to different system states are effectively orthogonal, the interference terms between them become unobservable in any measurement confined to the system. The timescales are brutal: for anything macroscopic, coherence between distinct positions dies far faster than you could hope to detect it.</p>
    <div class="eq">reduced density matrix goes diagonal in the pointer basis
      <span class="why">Trace out the environment and the off-diagonal terms — the ones responsible for interference — decay to nothing, extremely fast. The system then behaves for all practical purposes like a classical statistical mixture of outcomes.</span></div>
    <p>So decoherence explains why we never see a cup interfering with itself, and it picks out a preferred set of states — those stable under environmental monitoring, typically position-like — which is why the world looks like objects in places.</p>
    <div class="callout"><b>State this plainly:</b> decoherence does not solve the measurement problem. It turns a superposition into something that <em>looks like</em> a mixture, but a mixture of possibilities is not a single actuality. The global wavefunction is still unitary; nothing has been selected. You have explained the absence of interference, not the presence of one outcome. Anyone who says decoherence closed the question has skipped the hard part.</div>

    <h3>Copenhagen and its descendants</h3>
    <p>The historical default, associated with Bohr and Heisenberg, is less a single doctrine than a family of attitudes. Its moves are instrumentalist: the formalism is a tool for predicting experimental results, the results are described in ordinary classical language, and asking what the electron is "really doing" in between is a question the theory does not answer.</p>
    <p>Its weakness is the <strong>cut</strong>. Copenhagen needs a boundary between quantum system and classical apparatus, but never says where the boundary lies or what physically distinguishes the two sides. Apparatus is made of atoms. If atoms obey quantum mechanics, the cut is bookkeeping, not law. Bohr's replies are subtle and still argued over, but they are not an equation.</p>
    <p>This is why many working physicists are Copenhagen-ish in practice without any metaphysical commitment: it is an attitude that lets you compute.</p>

    <h3>Many Worlds: the wavefunction is all there is</h3>
    <p>Everett's 1957 proposal, now the interpretation most associated with Sean Carroll, is the most austere response available: take the Schrödinger equation completely seriously, everywhere, always, and add nothing.</p>
    <p>On this view the wavefunction is not a calculational device but a physically real object, and unitary evolution is the whole story. There is no collapse, because collapse was never in the equation. Measurement is what happens when a small system becomes entangled with a large one: the apparatus entangles with the electron, the observer with the apparatus, the laboratory with the air. The resulting global state contains a term in which the pointer reads "up" and a copy of you sees "up", and another in which both read "down". Decoherence guarantees those terms cannot subsequently interfere detectably. They have, for all practical purposes, become separate worlds.</p>
    <p>Carroll's central argument is that this is <em>subtraction, not addition</em>. Textbook quantum mechanics has two dynamical rules: smooth unitary evolution, plus a collapse postulate that fires under conditions nobody can state precisely. Everett deletes the second. What remains is one equation with no exceptions, no observers with special powers, no vague classical cut and no stochastic ingredient. The worlds are not an extra assumption; they are what the surviving equation already describes if you read it literally. Carroll argues a theory should be judged by the simplicity of its formalism, not the number of objects it implies — a universe with many branches is no worse than one with many galaxies.</p>
    <p>The commonest objection is <strong>ontological extravagance</strong>: it seems wasteful to conjure vast numbers of unobservable worlds to explain one detector click. The standard reply is that the worlds are not conjured — they are terms in a wavefunction you already believed in, and denying them means adding machinery, not removing it. Whether that convinces depends on how you weigh parsimony of laws against parsimony of stuff.</p>

    <h3>Many Worlds: preferred basis and the probability problem</h3>
    <p>Two technical objections bite harder.</p>
    <p>The <strong>preferred basis problem</strong>: a wavefunction can be decomposed in infinitely many ways, so what makes "pointer up" plus "pointer down" the meaningful split rather than some bizarre combination of the two? Everettians answer with decoherence: the environment monitors position-like quantities, not arbitrary bases, and that dynamically singles out a robust quasi-classical branching structure. This is the strongest part of the modern Everettian programme, though it makes branches emergent and approximate, with no exact fact about how many worlds there are.</p>
    <p>The <strong>probability problem</strong> is harder and remains the live objection. If every outcome occurs, what does it mean to say one has probability 0.7? Everyone gets an outcome; nothing is left for probability to be about. Worse, the Born rule weights branches by squared amplitude, and counting branches gives the wrong answer. Two responses dominate:</p>
    <ul>
      <li><strong>Deutsch and Wallace's decision-theoretic derivation.</strong> Instead of treating probability as a frequency, ask what betting odds a rational agent in a branching universe is compelled to accept. Wallace argues from rationality axioms plus the structure of branching that the only coherent answer is squared-amplitude weighting — the Born rule as a theorem rather than a postulate.</li>
      <li><strong>Carroll and Sebens' self-locating uncertainty.</strong> Between branching and reading the result, you know the global wavefunction perfectly but not <em>which branch you are in</em>. That is genuine ignorance about your own location, and they argue a natural invariance requirement on credences in that situation forces the squared-amplitude rule.</li>
    </ul>
    <p>Both are serious work; neither is settled. Critics argue the decision-theoretic axioms quietly smuggle in probabilistic assumptions, and that self-locating uncertainty has a timing difficulty, since decoherence arguably completes branching before the window of ignorance exists. Honest summary: proponents find these derivations of the Born rule compelling, opponents find them question-begging.</p>

    <h3>Pilot wave: de Broglie-Bohm</h3>
    <p>Pilot wave theory keeps definite outcomes by adding to the wavefunction rather than subtracting from it. Particles are real and always have definite positions. The wavefunction also exists and still obeys the Schrödinger equation, but now plays a second role: it guides the particles.</p>
    <div class="eq">particle velocity is fixed by the gradient of the wavefunction's phase
      <span class="why">Given the wavefunction and the actual particle positions at one moment, every future position is determined. Nothing is random. Apparent randomness comes only from ignorance of the initial positions, distributed according to the squared amplitude.</span></div>
    <p>The theory reproduces every prediction of standard quantum mechanics and dissolves the measurement problem: the particle goes through one slit, and the empty branch of the wavefunction carries no particle. Bell regarded its existence as proof that the impossibility claims made against hidden variables were overstated.</p>
    <p>The price is explicit: <strong>non-locality</strong>. One particle's velocity depends instantaneously on the configuration of all the others, however distant. This permits no signalling, but it does require a preferred notion of simultaneity, which sits uncomfortably with relativity. Extending the theory naturally to relativistic quantum field theory — with particle creation and no privileged frame — has also proved awkward. Versions exist; none has the effortless generality of the non-relativistic theory.</p>

    <h3>Objective collapse: the testable option</h3>
    <p>Objective collapse theories take the opposite route from Everett: collapse is a real physical process, so the Schrödinger equation is wrong. They add a stochastic non-linear term that barely touches a small system but drives large superpositions to localise rapidly.</p>
    <p>The Ghirardi-Rimini-Weber model has each particle undergo spontaneous localisation at an extremely low rate. Negligible for one particle; for a body of many particles the collective rate is enormous, so macroscopic superpositions die instantly while atoms behave normally. Continuous spontaneous localisation smooths this into a continuous noise process. Penrose proposes something different: gravity is responsible, and a superposition of two mass distributions collapses on a timescale set by the gravitational self-energy difference.</p>
    <p>The crucial point is methodological. These are <strong>not interpretations</strong>. They are rival theories with free parameters, so they can be ruled out. Matter-wave interferometry with ever larger molecules, ultra-sensitive force and heating measurements, underground low-noise experiments and gravitational-wave detector technology have all been used to squeeze the parameter space, and some parameter choices are already excluded.</p>

    <h3>QBism, relational quantum mechanics and superdeterminism</h3>
    <p><strong>QBism</strong> treats the wavefunction as neither a physical object nor an objective state but an agent's personal degrees of belief about the outcomes of actions the agent might take. Collapse becomes unmysterious: it is Bayesian updating, the same thing that happens to your credences when you look at a card, and the Born rule is a normative constraint on coherent betting. The objection is that this leaves no account of the world when nobody is asking; advocates reply that quantum mechanics is a user's manual for embedded agents, not a view from nowhere.</p>
    <p><strong>Relational quantum mechanics</strong>, developed by Rovelli, keeps physical states but relativises them. There is no observer-independent state; there are only facts about a system relative to another system it has interacted with. If a detector has interacted with a photon, the outcome is a fact for the detector, while relative to a third system that has interacted with neither, no such fact yet obtains. The analogy is velocity in relativity: observer-dependent is not the same as wrong. Critics press on whether this supports a single shared world.</p>
    <p><strong>Superdeterminism</strong> escapes Bell's theorem by denying statistical independence: the settings an experimenter chooses are correlated with the hidden properties of the particles, because everything shares a common past. It cannot be refuted by experiment. Most physicists reject it because it undermines the assumption that settings can be varied freely, which is what makes any experiment evidence for anything, and because no superdeterministic model has yet delivered detailed quantum predictions.</p>

    <h3>What is actually settled</h3>
    <p>First, <strong>Bell tests decided something real</strong>. The 2022 Nobel Prize recognised experiments that closed the major loopholes, and the conclusion is firm: no theory that is both local and supplies pre-existing values for all measurable quantities can reproduce the observed correlations. Nature is either non-local, or lacks definite pre-existing values, or violates statistical independence. Local hidden variables are dead.</p>
    <p>Second, <strong>the mainstream interpretations agree on every prediction made to date</strong>. Many Worlds, pilot wave, Copenhagen, QBism and relational quantum mechanics are empirically equivalent, and for most of them no experiment even in principle distinguishes them.</p>
    <p>Third, <strong>the choice rests on theoretical virtues rather than evidence</strong>: parsimony of laws versus parsimony of ontology, whether you can tolerate fundamental non-locality, whether a theory owes you a story about the world or only about your observations. Physicists weigh these differently, which is why reasonable people disagree.</p>
    <div class="callout"><b>The exception that matters:</b> objective collapse models are falsifiable and are being tested piece by piece. If a spontaneous collapse signal were found, the debate would end overnight. If the parameter space is squeezed to nothing, that eliminates a family of options by elimination. Either way, that is where empirical progress is actually happening.</div>
  `,
  keyIdeas: [
    "The measurement problem is the mutual inconsistency of three claims: the wavefunction is complete, evolution is always unitary, and measurements have single definite outcomes.",
    "Every interpretation is a choice about which of those three claims to abandon.",
    "Decoherence explains why interference between macroscopically distinct alternatives becomes unobservable almost instantly, but it does not select a single outcome and so does not solve the measurement problem.",
    "Copenhagen is best understood as an instrumentalist attitude whose central weakness is the undefined boundary between quantum system and classical apparatus.",
    "Many Worlds takes the wavefunction as real and unitary evolution as complete, so measurement is entanglement producing branches, and Carroll argues this is austere because it removes the collapse axiom rather than adding anything.",
    "The main open difficulty for Many Worlds is what probability means when every outcome occurs, with the Deutsch-Wallace decision-theoretic and Carroll-Sebens self-locating arguments as leading but contested answers.",
    "Pilot wave theory restores determinism and definite particle positions at the cost of explicit non-locality and difficulty extending to relativistic quantum field theory.",
    "Objective collapse models are genuinely falsifiable and are being constrained by experiment, which makes them the exception in a debate otherwise decided on theoretical virtues.",
  ],
  talk: {
    oneliners: [
      "The measurement problem isn't fuzzy — it's three specific claims that cannot all be true at once, and every interpretation drops one of them.",
      "Decoherence tells you why you never see a cat interfering with itself, but it never picks which cat you get; that gap is the whole argument.",
      "Carroll's case for Many Worlds is that it's the stingy option: you delete the collapse postulate and the branches are just what the surviving equation already says.",
      "The hardest objection to Many Worlds isn't that it's extravagant, it's what probability could possibly mean when every outcome definitely happens.",
      "Objective collapse is the only part of this debate an experiment can settle, and the parameter space is being squeezed year by year.",
    ],
    myths: [
      { m: "Decoherence solved the measurement problem.", t: "It explains the loss of observable interference and the emergence of a classical-looking world, but the global state is still a superposition and no single outcome has been selected." },
      { m: "Many Worlds means new universes are created every time something happens.", t: "Nothing is created. The branches are terms already present in a wavefunction evolving by one unmodified equation, becoming dynamically unable to interfere." },
      { m: "Bell tests proved that quantum mechanics is non-local.", t: "They ruled out local theories with pre-existing values. Pilot wave responds by being non-local, Many Worlds by denying single outcomes, and both are consistent with the data." },
      { m: "The interpretations are pure philosophy with no physical content.", t: "Objective collapse theories modify the dynamics and make different predictions, and experiments are actively constraining them." },
    ],
    terms: [
      { term: "Measurement problem", def: "The inconsistency between completeness of the wavefunction, always-unitary evolution and single definite outcomes." },
      { term: "Decoherence", def: "Entanglement with the environment that rapidly destroys observable interference between distinct alternatives." },
      { term: "Preferred basis problem", def: "The question of what picks out the physically meaningful decomposition of a superposition into branches." },
      { term: "Everett / Many Worlds", def: "The view that the wavefunction is real, evolution is always unitary and measurement produces non-interfering branches." },
      { term: "Self-locating uncertainty", def: "Ignorance about which branch you occupy after branching, used by Carroll and Sebens to argue for the Born rule." },
      { term: "Pilot wave (de Broglie-Bohm)", def: "A deterministic theory with real particle positions guided by the wavefunction, at the cost of explicit non-locality." },
      { term: "Objective collapse (GRW, CSL)", def: "Modified dynamics in which collapse is a real, stochastic physical process, making the theory testable." },
      { term: "Relational quantum mechanics", def: "Rovelli's view that facts about a system exist only relative to another system that has interacted with it." },
    ]
  },
  test: [
    { q: "State the measurement problem precisely.", a: "It is the inconsistency of three claims: that the wavefunction completely describes a system, that it always evolves unitarily by the Schrödinger equation, and that measurements yield single definite outcomes. Linearity means a superposed input produces a superposed apparatus state, so definiteness fails. Each interpretation abandons one of the three." },
    { q: "Why is it wrong to say decoherence solves the measurement problem?", a: "Decoherence entangles a system with its environment, which destroys observable interference between macroscopically distinct alternatives extremely quickly and picks out a quasi-classical pointer basis. But the global evolution remains unitary and the result is something that merely resembles a statistical mixture. A mixture of possibilities is not one actual outcome, so the selection problem is untouched." },
    { q: "What is Sean Carroll's core argument that Many Worlds is the most economical interpretation?", a: "Textbook quantum mechanics has two rules, unitary evolution plus a collapse postulate that nobody can state precisely. Everett deletes the second and keeps only the equation. The branches are not an added assumption but what the remaining formalism already describes, so the theory is simpler in its laws even though it implies a great deal of stuff." },
    { q: "What is the probability problem in Many Worlds and how have Everettians responded?", a: "If every outcome occurs, it is unclear what it means for an outcome to have probability 0.7, and branch counting gives the wrong weights. Deutsch and Wallace derive the Born rule from decision-theoretic rationality axioms applied to a branching agent. Carroll and Sebens derive it from self-locating uncertainty about which branch one occupies. Critics argue both assume what they set out to prove, so the issue is unresolved." },
    { q: "Which interpretations are experimentally distinguishable, and what has actually been settled?", a: "Objective collapse models such as GRW, CSL and Penrose's gravitational proposal modify the dynamics, so they make different predictions and experiments are steadily excluding parts of their parameter space. The other mainstream interpretations agree on all predictions to date. What is settled experimentally is that local hidden variable theories are ruled out by loophole-free Bell tests." },
  ],
  resources: [
    { name: "SEP — Many-Worlds Interpretation", desc: "Thorough survey of Everettian quantum mechanics, including the probability problem.", url: "https://plato.stanford.edu/entries/qm-manyworlds/", type: "notes", icon: "📄" },
    { name: "SEP — The Role of Decoherence in Quantum Mechanics", desc: "Careful account of what decoherence does and does not achieve.", url: "https://plato.stanford.edu/entries/qm-decoherence/", type: "notes", icon: "📄" },
    { name: "SEP — Bohmian Mechanics", desc: "The pilot wave theory in detail, including its non-locality and relativistic difficulties.", url: "https://plato.stanford.edu/entries/qm-bohm/", type: "notes", icon: "📄" },
    { name: "SEP — Collapse Theories", desc: "GRW, CSL and gravitationally induced collapse, with the experimental constraints.", url: "https://plato.stanford.edu/entries/qm-collapse/", type: "notes", icon: "📄" },
    { name: "SEP — Relational Quantum Mechanics", desc: "Rovelli's proposal that facts are relative to the interacting system.", url: "https://plato.stanford.edu/entries/qm-relational/", type: "notes", icon: "📄" },
  ]
});
