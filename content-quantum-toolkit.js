/* ===== QUANTUM TOOLKIT — the systems and methods a QM course actually teaches ===== */

/* ===== TRACK 3 ADDITIONS: the quantum mechanics toolkit ===== */

addModule({
  id: "qm-oscillator", track: "quantum", order: 5,
  title: "The harmonic oscillator: the most important system in physics",
  fields: ["quantum","maths"], readMins: 28,
  summary: "Why one solved problem underpins molecules, solids, lasers and every quantum field — the ladder operators that solve it, and the zero-point energy that will not go away.",
  lesson: `
    <h3>The big picture</h3>
    <p>If you were allowed to keep exactly one solved problem from all of physics and had to throw the rest away, you would keep the harmonic oscillator. Not because a mass on a spring is interesting — it is not — but because of a piece of ordinary calculus. Take any smooth potential energy function, find a minimum, and expand it as a Taylor series about that point. The constant term is an irrelevant offset and the linear term vanishes, because at a minimum the gradient is zero. The first term that does anything is the quadratic one. So <strong>every smooth potential, near any stable equilibrium, is a harmonic oscillator</strong>, and the only question is how far you must move before the neglected higher terms bite.</p>
    <p>That single observation makes this problem the universal first approximation to almost everything. A diatomic molecule vibrating about its bond length is an oscillator. The atoms in a crystal jiggling about their lattice sites are a coupled set of oscillators, whose normal modes are the <em>phonons</em> that carry heat and sound through a solid. The electromagnetic field in a box is a set of oscillators, one per mode. And in quantum field theory a free field of any kind — electron, photon, Higgs — is literally an infinite collection of harmonic oscillators. Solve this problem once and you have the skeleton of modern physics.</p>

    <h3>The classical oscillator, briefly</h3>
    <p>Classically a mass m on a spring of stiffness k obeys F = −kx, giving a sinusoid x(t) = A cos(ωt + φ) at angular frequency ω = √(k/m). Two features matter here. The frequency is fixed by the system and independent of amplitude, which is why pendulum clocks work. And the energy E = ½kA² is a smooth continuous function of amplitude, right down to zero: put the mass at the bottom of the well at rest and it stays there forever. Quantum mechanics keeps the first feature and destroys the second twice over — the energy becomes discrete, and sitting still becomes impossible.</p>

    <h3>The quantum problem and its spectrum</h3>
    <p>Write the potential as V(x) = ½mω²x², put it into the time-independent Schrödinger equation, and you have a second-order differential equation for the energy eigenfunctions. Solving it directly is a slog: extract the asymptotic Gaussian behaviour by hand, substitute a power series for what is left, derive a recursion relation, then notice that unless the series terminates the wavefunction blows up at large distance and cannot be normalised. Demanding termination quantises the energy:</p>
    <div class="eq">Eₙ = (n + ½) ℏω,&nbsp;&nbsp; n = 0, 1, 2, 3, …
      <span class="why">The allowed energies are a ladder of evenly spaced rungs separated by ℏω, and the bottom rung sits half a rung above the classical minimum rather than at it.</span></div>
    <p>Two things about that formula are remarkable. The first is the <strong>even spacing</strong>. In the hydrogen atom the levels crowd together as you go up; here they never do. Every transition between neighbouring levels costs exactly ℏω, which is why a vibrating molecule gives a clean infrared absorption line rather than a smear, and why "adding one quantum" is a meaningful operation. The second is the ½ℏω, the <strong>zero-point energy</strong>, which refuses to go away no matter how cold you make the system.</p>

    <h3>Zero-point energy: why nothing can sit still</h3>
    <p>The ground state of a quantum oscillator is not the mass sitting motionless at the bottom of the well, and the uncertainty principle says exactly why. Sitting at the bottom would need x = 0 and p = 0 precisely, so both uncertainties would vanish and their product would be zero, in flat violation of Δx·Δp ≥ ℏ/2. Nature compromises. Squeeze the particle towards the bottom and the potential energy falls but the momentum spread grows, driving the kinetic energy up; let it spread out and the kinetic energy falls but the potential energy climbs.</p>
    <div class="eq">E ≈ p²/2m + ½mω²x²&nbsp; with&nbsp; p ≈ ℏ/2x&nbsp; ⟹&nbsp; E(min) ≈ ½ℏω
      <span class="why">Balancing the two competing terms against the uncertainty relation reproduces the exact ground-state energy on the back of an envelope. Zero-point energy is nothing more exotic than that trade-off.</span></div>
    <p>This is not a small academic point. Zero-point motion is why liquid helium never freezes under its own vapour pressure — the atoms jiggle too much to settle into a lattice. It shifts the vibrational frequencies of molecules containing different isotopes, which is measurable chemistry. And in quantum field theory it becomes the energy of the vacuum itself.</p>

    <h3>The ladder: creation and annihilation operators</h3>
    <p>Dirac found a way to get the whole spectrum without touching the differential equation, and it is one of the most elegant manoeuvres in physics. The Hamiltonian is a sum of two squares, and over the real numbers a² + b² factorises as (a + ib)(a − ib). Position and momentum do not commute, so the factorisation is not exact, but it very nearly works. Define two operators, each a complex combination of position and momentum:</p>
    <div class="eq">â = √(mω/2ℏ)·(x̂ + i p̂/mω),&nbsp;&nbsp; â† = √(mω/2ℏ)·(x̂ − i p̂/mω)
      <span class="why">These are the annihilation and creation operators. Neither is Hermitian, so neither is an observable in its own right — they are tools for moving between states, not things you measure.</span></div>
    <p>Feeding in the canonical commutator [x̂, p̂] = iℏ gives the one relation that carries all the physics: [â, â†] = 1. From that, plus the Hamiltonian rewritten as Ĥ = ℏω(â†â + ½), everything follows by algebra. If ψ is an eigenstate with energy E, then âψ has energy E − ℏω and â†ψ has energy E + ℏω — hence <em>lowering</em> and <em>raising</em> operators.</p>
    <p>Quantisation then comes from physics rather than a boundary condition. The energy of a bound system is bounded below, so the descent must stop, and the only way it can is if some state is annihilated outright by â: âψ₀ = 0. That is a simple first-order differential equation, and solving it hands you the Gaussian ground state and its energy ½ℏω in three lines. Every other state is built by repeated application of â†.</p>

    <h3>The number operator and why algebra beats calculus here</h3>
    <p>Define N̂ = â†â, the <strong>number operator</strong>. Its eigenvalues are exactly the non-negative integers n, and Ĥ = ℏω(N̂ + ½). The label n stops being an index from a recursion relation and becomes a count: the number of quanta present. The n = 3 state is not merely the fourth energy level, it is the state containing three identical units of ℏω.</p>
    <p>The algebraic route is more powerful than the differential equation for a reason deeper than brevity. The differential-equation method is tied to one system in one coordinate representation. The algebraic method uses nothing except the commutator [â, â†] = 1, so it works for <em>anything</em> satisfying that relation, whatever the underlying variables mean. Angular momentum yields to the same trick with a different algebra. And a quantum field mode satisfies exactly this commutator, which is why the whole apparatus transfers wholesale into quantum field theory without a single new idea.</p>

    <h3>The wavefunctions and Hermite polynomials</h3>
    <p>The position-space wavefunctions are worth knowing in outline. Each is a Gaussian envelope times a polynomial:</p>
    <div class="eq">ψₙ(x) ∝ Hₙ(ξ) e^(−ξ²/2),&nbsp;&nbsp; ξ = x√(mω/ℏ)
      <span class="why">Hₙ is the nth Hermite polynomial, a polynomial of degree n. The Gaussian factor kills the wavefunction at large distance; the polynomial supplies the wiggles.</span></div>
    <p>The pattern is easy to picture, and the states alternate between even and odd under x → −x because the potential is symmetric.</p>
    <ul>
      <li>Ground state: a single Gaussian bump, no nodes, with the minimum uncertainty product Δx·Δp = ℏ/2 exactly.</li>
      <li>Excited states: exactly n nodes, alternating parity, the wavefunction reaching further out as n increases.</li>
      <li>Large n: the probability density piles up near the classical turning points, where a classical oscillator moves slowest and therefore spends most of its time — the correspondence principle in action.</li>
    </ul>

    <h3>Coherent states and laser light</h3>
    <p>None of the energy eigenstates looks remotely like a classical oscillator. They are stationary — the probability density does not move at all, which is an odd thing for a swinging pendulum to do. The state that <em>does</em> behave classically is the <strong>coherent state</strong>, defined as an eigenstate of the annihilation operator: acting with â returns the same state multiplied by a complex number α. It is a superposition of many number states with a Poisson distribution of quanta.</p>
    <p>Its properties are exactly what you would want. A coherent state is a Gaussian wavepacket of the same shape as the ground state, displaced from the origin, sloshing back and forth at frequency ω without spreading — shape preserved for all time, which is special to the quadratic potential. It has the minimum uncertainty product and its average position traces the classical trajectory precisely.</p>
    <div class="callout"><b>Why this matters:</b> the light from an ideal laser is a coherent state of the electromagnetic field. That is what distinguishes laser light from thermal light of the same intensity — not just that it is monochromatic and directional, but that its photon statistics are Poissonian and its phase is well defined. Coherent states bridge the quantum field and the classical electromagnetic wave.</div>

    <h3>The payoff: second quantisation and quantum fields</h3>
    <p>Take a free quantum field — the electromagnetic field, say — and decompose it into normal modes labelled by momentum k. Each mode obeys precisely the equations of a harmonic oscillator with its own frequency ωₖ, so the field is an infinite collection of independent oscillators, one per mode. Quantise each by the ladder method and the total Hamiltonian is a sum:</p>
    <div class="eq">Ĥ = Σₖ ℏωₖ (â†ₖâₖ + ½)
      <span class="why">One oscillator for every mode of the field. The number operator for mode k now counts how many particles of momentum k are present, and â†ₖ acting on the vacuum creates one of them.</span></div>
    <p>This reinterpretation is what people mean by <strong>second quantisation</strong>, and it is the conceptual content of quantum field theory. The number operator no longer counts abstract units of vibration; it counts <em>particles</em>. The creation operator makes a photon. The vacuum is the state annihilated by every âₖ. Particle creation and destruction, which ordinary quantum mechanics cannot describe because it fixes particle number, become elementary operations, and every electron is identical to every other because both are quanta of the same field made by the same operator.</p>
    <p>The ½ comes along for the ride. Each mode contributes ½ℏωₖ of zero-point energy to the vacuum, and there are infinitely many modes. The vacuum of a quantum field is therefore neither empty nor restful; it has an energy density, and the consequences — the Casimir force, the Lamb shift in hydrogen — have been measured.</p>
    <div class="callout"><b>The cosmological constant problem:</b> that vacuum energy gravitates. Add up the zero-point contributions of all field modes up to the Planck scale and you predict a vacuum energy density roughly 10¹²⁰ times larger than the dark energy actually observed driving cosmic acceleration. It is the worst quantitative disagreement between theory and observation in the history of physics, and it comes directly out of the ½ in the harmonic oscillator formula. Nobody knows the resolution.</div>
  `,
  keyIdeas: [
    "Any smooth potential expanded about a stable minimum is quadratic to leading order, so the harmonic oscillator is the universal first approximation to almost every physical system.",
    "The quantum spectrum is E equals n plus one half times h-bar omega: evenly spaced rungs, unlike the crowding levels of an atom, so one quantum always costs the same energy.",
    "Zero-point energy of one half h-bar omega is forced by the uncertainty principle, since sitting still at the bottom would require both position and momentum to be sharp.",
    "Ladder operators solve the problem algebraically from the single commutator a with a-dagger equals one, avoiding the differential equation entirely.",
    "The number operator a-dagger a has the non-negative integers as eigenvalues, turning the level label into a count of quanta.",
    "Coherent states are eigenstates of the annihilation operator: minimum-uncertainty wavepackets that oscillate without spreading and describe ideal laser light.",
    "A free quantum field is an infinite set of oscillators, one per mode, and the creation operator makes a particle — this is second quantisation and the basis of quantum field theory."
  ],
  talk: {
    oneliners: [
      "The harmonic oscillator matters because every smooth potential is quadratic near its minimum, so it is the universal first approximation to everything.",
      "Two things stand out in the spectrum: the levels are evenly spaced, and the ground state sits half a quantum above the bottom of the well.",
      "You cannot put a quantum particle at rest at the bottom of a well, because that would need position and momentum both sharp, and uncertainty forbids it.",
      "Dirac's ladder operators get the whole spectrum from one commutator, and the same algebra transfers straight into quantum field theory.",
      "A quantum field is just an infinite pile of harmonic oscillators, one per mode, and the creation operator is what makes a particle."
    ],
    myths: [
      { m: "Zero-point energy is a free source of usable power.", t: "It is the lowest energy the system can possibly have, so by definition there is nothing below it to extract energy into. Effects like the Casimir force are real but are not a net energy supply." },
      { m: "The harmonic oscillator is a toy problem physicists use because they cannot solve anything harder.", t: "It is the leading term in the Taylor expansion of any stable potential, so it is genuinely the correct first approximation for molecular vibration, phonons and every free quantum field." },
      { m: "The energy eigenstates of the oscillator are what a quantum pendulum swinging looks like.", t: "Energy eigenstates are stationary and do not move at all. The states that behave like a classical swinging oscillator are coherent states, superpositions of many number states." },
      { m: "Creation and annihilation operators are observables measuring how many quanta there are.", t: "They are not Hermitian and are not measurable. The observable built from them is the number operator a-dagger a, whose eigenvalues are the integers." }
    ],
    terms: [
      { term: "Harmonic potential", def: "A potential proportional to displacement squared, the leading term of any smooth potential near a stable minimum." },
      { term: "Zero-point energy", def: "The irreducible half h-bar omega of the ground state, required by the uncertainty principle." },
      { term: "Annihilation operator", def: "The lowering operator a, which removes one quantum of energy and annihilates the ground state." },
      { term: "Creation operator", def: "The raising operator a-dagger, which adds one quantum; in field theory it creates a particle." },
      { term: "Number operator", def: "The Hermitian operator a-dagger a whose eigenvalues are the non-negative integers counting quanta present." },
      { term: "Hermite polynomials", def: "The polynomial factors multiplying the Gaussian in the oscillator wavefunctions; the nth has n nodes." },
      { term: "Coherent state", def: "An eigenstate of the annihilation operator: a minimum-uncertainty wavepacket that oscillates without spreading, describing laser light." },
      { term: "Second quantisation", def: "Treating a field as a collection of oscillators so that excitation numbers become particle numbers." }
    ]
  },
  test: [
    { q: "Why is the harmonic oscillator considered the most important system in physics?", a: "Because any smooth potential expanded in a Taylor series about a stable minimum has a vanishing linear term, so the quadratic term dominates. That makes the oscillator the universal first approximation to any system near equilibrium, from molecular vibrations and lattice phonons to the modes of the electromagnetic field and every free quantum field." },
    { q: "What are the two remarkable features of the energy spectrum, and what does each imply?", a: "The levels are evenly spaced by h-bar omega, so adding or removing one quantum always costs the same energy and transitions give sharp spectral lines. And the ground state has energy one half h-bar omega rather than zero, the zero-point energy, which means the system can never be brought completely to rest." },
    { q: "Explain why zero-point energy is unavoidable.", a: "Sitting motionless at the bottom of the well would mean position and momentum were both exactly determined, giving an uncertainty product of zero and violating the relation delta-x times delta-p is at least h-bar over two. Localising the particle raises its kinetic energy while spreading it out raises its potential energy, and balancing the two gives a minimum energy of one half h-bar omega." },
    { q: "Why is the ladder operator method more powerful than solving the differential equation?", a: "The differential equation approach is tied to one system in one coordinate representation. The algebraic method uses only the commutator of a with a-dagger equalling one, so it applies to anything obeying that relation. That is why the same machinery solves angular momentum and transfers directly into quantum field theory." },
    { q: "How does the oscillator become quantum field theory?", a: "A free field decomposes into normal modes, and each mode obeys harmonic oscillator equations with its own frequency. Quantising every mode gives a Hamiltonian that is a sum of oscillators, and the number operator for a mode counts particles rather than abstract quanta. The creation operator acting on the vacuum makes a particle, and each mode also contributes half h-bar omega of zero-point energy to the vacuum." }
  ],
  resources: [
    { name: "David Tong — Quantum Mechanics", desc: "Careful treatment of the oscillator, ladder operators and coherent states.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "MIT 8.04 — Quantum Physics I", desc: "Video lectures deriving the spectrum both analytically and algebraically.", url: "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/", type: "course", icon: "🎓" },
    { name: "MIT 8.05 — Quantum Physics II", desc: "Operator methods, coherent states and the route towards field quantisation.", url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. III", desc: "The conceptual picture of quantised oscillators and photons.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" }
  ]
});

addModule({
  id: "qm-hydrogen", track: "quantum", order: 6,
  title: "The hydrogen atom and the shape of the periodic table",
  fields: ["quantum","em"], readMins: 28,
  summary: "How solving one atom exactly produces the quantum numbers, the orbitals, the periodic table and, with relativity and field theory added, the 21 centimetre line.",
  lesson: `
    <h3>The big picture</h3>
    <p>Hydrogen is the only atom that can be solved exactly. One proton, one electron, one Coulomb potential, and the Schrödinger equation yields a closed-form answer with no approximations. Everything from helium onwards needs numerical methods or perturbation theory, because two electrons repel each other and the problem stops being separable. That makes hydrogen the benchmark against which the whole theory is judged: if quantum mechanics could not reproduce the spectrum that spectroscopists had been measuring for decades, it would have been dead on arrival.</p>
    <p>It did far more than reproduce it. The solution delivers the quantum numbers as forced consequences rather than assumptions, explains the shapes chemists draw as orbitals, and once you add spin and the exclusion principle it generates the entire periodic table. Mendeleev's wall chart, worked out empirically from patterns in reactivity, is a direct readout of the solutions to a differential equation. Chemistry is quantum mechanics plus one rule about identical particles.</p>

    <h3>Setting up: the Coulomb potential and separation of variables</h3>
    <p>The electron sits in the electrostatic attraction of the proton:</p>
    <div class="eq">V(r) = −e²/(4πε₀ r)
      <span class="why">An inverse-distance attraction depending only on the separation r, not on direction. That spherical symmetry is the key structural fact, and everything follows from exploiting it.</span></div>
    <p>Because the potential depends only on r, you work in spherical polars and try a factorised solution:</p>
    <div class="eq">ψ(r, θ, φ) = R(r) · Y(θ, φ)
      <span class="why">Separation of variables, splitting one hard three-dimensional partial differential equation into two ordinary ones that can be attacked independently.</span></div>
    <p>The angular equation is universal — the same for <em>any</em> spherically symmetric potential — so its solutions, the spherical harmonics, are worked out once and reused everywhere. The radial equation is where the specific 1/r shape enters and where the energies are fixed. It also carries a term proportional to l(l+1)/r², the <strong>centrifugal barrier</strong>, which pushes states with angular momentum away from the nucleus and is why only s states have any density at r = 0.</p>

    <h3>Where the quantum numbers come from</h3>
    <p>This is the part most popular accounts get backwards. The quantum numbers are not postulated or fitted to data; they fall out of the requirement that solutions be finite, single-valued and normalisable.</p>
    <ul>
      <li><strong>n, the principal quantum number</strong> (1, 2, 3, …). From the radial equation: demanding that the radial function not blow up at large r forces a power series to terminate, and n is where it terminates. It sets the energy and roughly the size.</li>
      <li><strong>l, the orbital angular momentum quantum number</strong> (0 to n−1). From the polar part of the angular equation. It fixes the magnitude of the orbital angular momentum, √(l(l+1))·ℏ, and the shape. The labels s, p, d, f mean l = 0, 1, 2, 3.</li>
      <li><strong>m, the magnetic quantum number</strong> (−l to +l). From the azimuthal part, where requiring the wavefunction to be single-valued after a full 2π rotation forces m to be an integer. It fixes the angular momentum component along a chosen axis, and hence the orientation.</li>
    </ul>
    <p>The constraint l &lt; n and the range of m are not rules bolted on; they are the conditions under which normalisable solutions exist at all. Each level n contains n² distinct combinations of l and m.</p>

    <h3>The spectrum, the Rydberg formula and the accidental degeneracy</h3>
    <p>The energies come out depending on n alone:</p>
    <div class="eq">Eₙ = −13.6 eV / n²
      <span class="why">Negative because the electron is bound; zero energy means a free electron at rest infinitely far away. The levels crowd together as n rises and converge at the ionisation limit.</span></div>
    <p>The difference between two levels gives the photon energy for a transition, which is the empirical formula Balmer and Rydberg had extracted from spectral data long before anyone knew why it worked:</p>
    <div class="eq">1/λ = R (1/n₁² − 1/n₂²)
      <span class="why">The Rydberg formula, with n₁ the lower level and n₂ the upper. Fix n₁ and vary n₂ and you get a whole series: n₁ = 1 gives the ultraviolet Lyman series, 2 the visible Balmer series, 3 the infrared Paschen series.</span></div>
    <p>That the theory reproduced these series exactly, with the Rydberg constant predicted from fundamental constants rather than fitted, was the decisive early success of quantum mechanics.</p>
    <p>One subtlety is worth flagging. The energy depends on n but not on l, so 2s and 2p are degenerate, as are 3s, 3p and 3d. Degeneracy in m is expected, since with no preferred direction the orientation cannot matter. Degeneracy in l is <strong>not</strong>, and is called an <em>accidental degeneracy</em>. It is not really accidental: it reflects a hidden symmetry peculiar to the 1/r potential, associated with the Laplace–Runge–Lenz vector, the same conserved quantity that stops Kepler orbits precessing. Change the potential even slightly, as happens in every multi-electron atom, and it breaks — which is what makes the periodic table interesting rather than trivial.</p>

    <h3>Orbitals, spherical harmonics and the shapes</h3>
    <p>An orbital is a one-electron wavefunction, and the meaningful object is |ψ|², a <strong>probability density</strong>: integrate it over a region for the probability of finding the electron there. Textbook pictures are surfaces enclosing some chosen fraction of that probability, usually 90 per cent — a drawing convention, not a boundary.</p>
    <div class="callout"><b>What an orbital is not:</b> it is not a path or trajectory — there is no orbit, and a 1s electron has zero orbital angular momentum, so it is not circling anything. Nor is it a cloud of smeared-out charge with a fraction of an electron at each point. The electron is found whole or not at all; the cloud is a map of where a measurement is likely to place it.</div>
    <p>The shapes come from the angular solutions Y(θ, φ), labelled by l and m: the <strong>spherical harmonics</strong>, the natural standing-wave patterns on a sphere. They are the right basis whenever something has spherical symmetry, which is why the same functions describe the cosmic microwave background.</p>
    <ul>
      <li><strong>s orbitals (l = 0):</strong> the harmonic is a constant, so the orbital is spherically symmetric with non-zero density at the nucleus.</li>
      <li><strong>p orbitals (l = 1):</strong> three of them, dumbbell-shaped, with a nodal plane through the nucleus. In real combinations they point along x, y and z, which is where the directionality of chemical bonding comes from.</li>
      <li><strong>d orbitals (l = 2):</strong> five of them, mostly four-lobed cloverleaves. Their splitting in a crystal environment is the whole of ligand field theory and explains the colours of transition metal compounds.</li>
    </ul>
    <p>An orbital has n − 1 nodes in total, l of them angular surfaces and the rest radial shells of zero density. One useful distinction: the 1s density is largest exactly at the nucleus, but the <em>radial distribution function</em>, weighted by the shell volume 4πr², peaks at the Bohr radius. Both are true and answer different questions.</p>

    <h3>Spin, exclusion and shell structure</h3>
    <p>Three quantum numbers are not enough. Experiments — Stern–Gerlach beam splitting, the doubling of spectral lines — showed electrons carry an intrinsic angular momentum of one half, unrelated to their motion, with two possible orientations. This <strong>spin</strong> quantum number mₛ = ±½ is the fourth label, and it is no consequence of the Schrödinger equation. It has to be added by hand, and only emerges naturally in Dirac's relativistic wave equation.</p>
    <p>Pauli then supplied the rule that changes everything: <strong>no two electrons in an atom may share all four quantum numbers</strong>. This is not a force. It is a consequence of electrons being identical fermions, whose total wavefunction must be antisymmetric under exchange; put two in the same state and the antisymmetrised wavefunction is identically zero, so the configuration does not exist.</p>
    <p>With n² states per level, each shell holds 2n² electrons: two, eight, eighteen. Electrons fill from the bottom to minimise energy, but exclusion stops them all piling into 1s, so they stack into successive shells.</p>

    <h3>How the periodic table is built</h3>
    <p>Now the wall chart writes itself. Chemistry is dominated by the outermost, least tightly bound electrons, so atoms with the same outer-shell configuration behave alike. Helium, neon and argon have closed shells and are inert. Lithium, sodium and potassium each have one easily lost electron outside a closed shell and are violently reactive. Fluorine and chlorine are one short of closure, so they grab electrons. The periodicity Mendeleev spotted is the periodicity of outer-shell occupancy, and the row lengths — two, eight, eight, eighteen — match the subshell capacities.</p>
    <p>The ordering, though, is subtle, and this is where the accidental degeneracy mattered. In multi-electron atoms the inner electrons <strong>screen</strong> the nuclear charge, and low-l orbitals penetrate closer in where the screening is weaker, so they feel more of the full charge and drop in energy. Hence 4s falls below 3d, and potassium and calcium fill 4s before the transition metals start on 3d. The familiar filling order is a rule of thumb from these competing effects, not a law, and it has real exceptions — chromium and copper both promote an electron into 3d for the stability of a half-filled or filled subshell.</p>

    <h3>Fine structure, the Lamb shift and the 21 centimetre line</h3>
    <p>Measure hydrogen precisely enough and the simple picture cracks, and each crack has been a doorway to deeper physics.</p>
    <ul>
      <li><strong>Fine structure:</strong> splittings of order a part in 10⁵, from two relativistic effects — a correction to the kinetic energy, and the coupling of the electron's spin to the magnetic field it sees from the proton's apparent motion, <em>spin–orbit coupling</em>. Together they break the l degeneracy, and the good quantum number becomes the total angular momentum j.</li>
      <li><strong>The Lamb shift:</strong> in 1947 Lamb and Retherford found 2s and 2p one-half, degenerate even in Dirac's theory, split by about 1000 MHz. Nothing in quantum mechanics could produce it. It comes from the electron interacting with vacuum fluctuations of the electromagnetic field, and explaining it triggered quantum electrodynamics.</li>
      <li><strong>Hyperfine structure:</strong> the proton has spin and a magnetic moment too, and the two spins can be parallel or antiparallel, splitting the ground state minutely. The transition between them emits a photon of wavelength 21 cm.</li>
    </ul>
    <div class="callout"><b>The 21 centimetre line:</b> extraordinarily improbable for a single atom, with a mean lifetime around 10 million years, but there is so much neutral hydrogen about that the emission is easily detected. Radio astronomers use it to map the distribution and motion of hydrogen across the Milky Way and beyond. It revealed our galaxy's spiral arms and produced the rotation curves that pointed to dark matter.</div>

    <h3>Selection rules and forbidden transitions</h3>
    <p>Not every pair of levels can exchange a photon. Whether a transition proceeds depends on an integral of the two wavefunctions against the dipole operator, and by symmetry that integral vanishes unless certain conditions hold. For electric dipole radiation the rules are Δl = ±1, Δm = 0 or ±1, and no change of spin. The content of Δl = ±1 is angular momentum conservation: a photon carries one unit of spin, so the electron's orbital angular momentum must change by one unit to balance the books, and the parity of the state must flip because the dipole operator is odd.</p>
    <p>Transitions violating these rules are called <strong>forbidden</strong>, which is misleading — they are strongly suppressed rather than impossible, and still proceed by weaker mechanisms such as magnetic dipole or two-photon emission. The 21 cm line is one, which is why it takes millions of years per atom. Forbidden lines are a diagnostic tool of astrophysics: they appear in nebulae because the gas is thin enough for an excited atom to sit undisturbed until an improbable transition happens, where in a laboratory a collision would knock it out of the state first. Some nebular lines were once attributed to a hypothetical element, nebulium, before anyone realised they were forbidden transitions of ordinary oxygen.</p>
  `,
  keyIdeas: [
    "Hydrogen is the only atom solvable exactly, which makes it the benchmark test of quantum mechanics; every heavier atom needs approximation because electron-electron repulsion spoils separability.",
    "Separating the Schrodinger equation in spherical coordinates splits it into a universal angular equation and a radial equation carrying the specific Coulomb physics.",
    "The three quantum numbers n, l and m emerge as conditions for normalisable, single-valued solutions rather than being imposed; n sets energy and size, l sets shape, m sets orientation.",
    "The energy depends only on n, reproducing the Rydberg formula and the observed spectral series, and the extra degeneracy in l is a special feature of the one-over-r potential that breaks in every other atom.",
    "An orbital is a probability distribution for finding a whole electron, not a trajectory and not a physically smeared charge cloud.",
    "Adding spin gives a fourth quantum number, and the Pauli exclusion principle then forces electrons into successive shells holding two n squared each, generating the periodic table.",
    "Precision measurements reveal fine structure from relativity and spin-orbit coupling, the Lamb shift from vacuum fluctuations, and hyperfine splitting that produces the 21 centimetre line used to map galaxies."
  ],
  talk: {
    oneliners: [
      "Hydrogen is the only atom we can solve exactly, so it is the benchmark that the whole of quantum mechanics had to pass.",
      "The quantum numbers are not assumptions — they fall out of demanding that the wavefunction be finite, normalisable and single-valued.",
      "Chemistry is essentially quantum mechanics plus the exclusion principle: the periodic table is a readout of which orbitals are filled.",
      "The energy depending only on n and not on l is an accidental degeneracy peculiar to the one-over-r potential, and its breaking is why subshell filling order gets complicated.",
      "The 21 centimetre line is a forbidden transition that takes 10 million years per atom, but there is so much hydrogen out there that radio astronomers map whole galaxies with it."
    ],
    myths: [
      { m: "Electrons orbit the nucleus in shells like planets.", t: "There are no trajectories. An orbital is a probability distribution, and an s electron has zero orbital angular momentum, so it is not circling anything at all." },
      { m: "An orbital is a cloud of electron charge smeared through space.", t: "The electron is always found whole. The cloud is a map of where a measurement is likely to locate it, not a picture of a physically spread-out object." },
      { m: "The Pauli exclusion principle is a repulsive force between electrons.", t: "It is a consequence of electrons being identical fermions whose joint wavefunction must be antisymmetric. Two electrons in the same state give a wavefunction that is identically zero, so the state simply does not exist." },
      { m: "Forbidden transitions cannot happen.", t: "They are strongly suppressed, not impossible, and proceed through weaker channels. The 21 centimetre hydrogen line and the nebular oxygen lines are forbidden transitions that astronomers observe routinely." }
    ],
    terms: [
      { term: "Principal quantum number n", def: "Emerges from the radial equation; sets the energy and the approximate size of the orbital." },
      { term: "Orbital angular momentum quantum number l", def: "Runs from zero to n minus one; fixes the magnitude of orbital angular momentum and the orbital shape, labelled s, p, d, f." },
      { term: "Magnetic quantum number m", def: "Runs from minus l to plus l; fixes the component of angular momentum along a chosen axis and hence the orientation." },
      { term: "Spherical harmonics", def: "The angular solutions common to any spherically symmetric potential; they give orbitals their shapes." },
      { term: "Accidental degeneracy", def: "The independence of hydrogen energies from l, caused by a hidden symmetry of the inverse-distance potential and broken in all other atoms." },
      { term: "Screening and penetration", def: "Inner electrons shield the nuclear charge while low-l orbitals penetrate closer in, which is why 4s fills before 3d." },
      { term: "Fine structure", def: "Small level splittings from relativistic kinetic corrections and spin-orbit coupling." },
      { term: "Selection rule", def: "A symmetry condition such as delta-l equals plus or minus one that must hold for an electric dipole transition to occur." }
    ]
  },
  test: [
    { q: "Why does hydrogen occupy such a special place in quantum theory?", a: "It is the only atom with an exact closed-form solution, because a single electron in a pure Coulomb potential separates cleanly in spherical coordinates. Any atom with two or more electrons has electron-electron repulsion that destroys separability and requires numerical or perturbative treatment. Hydrogen therefore became the benchmark that quantum mechanics had to reproduce, and it did so exactly, predicting the Rydberg constant from fundamental constants." },
    { q: "Where do the three quantum numbers come from, and what does each control?", a: "They emerge as conditions for physically acceptable solutions rather than being imposed. Requiring the radial function to remain normalisable terminates a series and produces n, which sets the energy and size. The polar angular equation produces l, which fixes the angular momentum magnitude and the orbital shape. Requiring single-valuedness after a full rotation produces integer m, which fixes the orientation." },
    { q: "What is the accidental degeneracy, and why does it matter for the periodic table?", a: "In hydrogen the energy depends only on n, so 2s and 2p have identical energy. Degeneracy in m follows from spherical symmetry, but degeneracy in l does not, and it arises from a hidden extra symmetry of the inverse-distance potential connected to the Laplace-Runge-Lenz vector. In multi-electron atoms screening and penetration break it, so subshells split and the filling order becomes subtle, with 4s dropping below 3d." },
    { q: "How does quantum mechanics generate the periodic table?", a: "Each level n holds n squared orbital states, and adding spin doubles that to two n squared electrons per shell. The exclusion principle prevents electrons sharing all four quantum numbers, so they stack into successive shells instead of collapsing into the ground state. Chemistry is governed by the outermost electrons, so elements with matching outer configurations behave alike, which is exactly the periodicity Mendeleev found empirically." },
    { q: "What is the 21 centimetre line and why is it useful despite being forbidden?", a: "It is a hyperfine transition in ground-state hydrogen where the electron and proton spins flip from parallel to antiparallel. It violates the electric dipole selection rules, so a single atom waits around 10 million years on average. There is so much neutral hydrogen in the galaxy that the emission is strong overall, and radio astronomers use it to map hydrogen distribution and rotation, revealing spiral structure and the rotation curves that indicate dark matter." }
  ],
  resources: [
    { name: "David Tong — Quantum Mechanics", desc: "The hydrogen atom, angular momentum and spherical harmonics done carefully.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "David Tong — Applications of Quantum Mechanics", desc: "Atomic structure, perturbations and where the periodic table comes from.", url: "https://www.damtp.cam.ac.uk/user/tong/aqm.html", type: "notes", icon: "📄" },
    { name: "MIT 8.05 — Quantum Physics II", desc: "Angular momentum, spin and the full hydrogen treatment with problem sets.", url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. III", desc: "Chapters on the hydrogen atom, spin one half and the periodic table.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" }
  ]
});
/* ===== TRACK 3 ADDITIONS: angular momentum & approximation methods ===== */

addModule({
  id: "qm-angmom", track: "quantum", order: 7,
  title: "Angular momentum, spin and symmetry",
  fields: ["quantum","maths"], readMins: 28,
  summary: "How rotational symmetry becomes the deepest organising structure in quantum mechanics — commutation relations, ladder operators, half-integer spin, spinors and the classification of particles.",
  lesson: `
    <h3>The big picture</h3>
    <p>In classical mechanics angular momentum is a convenience. It is r &times; p, it is conserved when the forces are central, and it saves you a page of algebra on planetary orbits. In quantum mechanics it is something far larger. Angular momentum becomes the organising skeleton of the whole theory: it labels every atomic state, dictates which transitions are allowed, explains the shape of the periodic table, forces the existence of spin — a property with no classical counterpart at all — and ultimately supplies the definition of what a particle <em>is</em>. The reason is that angular momentum is the quantum fingerprint of <strong>rotational symmetry</strong>, and symmetry, in quantum theory, is not decoration. It is structure.</p>

    <h3>Rotational symmetry and where angular momentum comes from</h3>
    <p>Noether's theorem says every continuous symmetry of the action yields a conserved quantity: time translation gives energy, spatial translation gives momentum, rotation gives angular momentum. That much is classical. Quantum mechanics tightens the link into an identity. The conserved quantity is not merely <em>associated</em> with the symmetry — the operator representing it is the <strong>generator</strong> of the symmetry. Rotate a state by a small angle &delta;&theta; about the z axis and the operator that does it is built directly out of the angular momentum operator:</p>
    <div class="eq">U(&delta;&theta;) = 1 &minus; (i/&#295;) &delta;&theta; J&#770;&#8338;
      <span class="why">To rotate a quantum state by a tiny angle, you nudge it with the angular momentum operator. Build up a finite rotation by repeating this and you get the exponential of minus i theta J-z over h-bar. Angular momentum does not just get conserved under rotations — it performs them.</span></div>
    <p>Conservation then follows immediately: if the Hamiltonian is unchanged by rotations it commutes with the generators, and anything commuting with H is constant in time. So angular momentum is conserved in hydrogen for exactly the reason it is conserved for a planet. But the quantum version buys far more, because the generators obey an algebra, and that algebra has consequences the classical picture cannot express.</p>

    <h3>The commutation relations, and what they forbid</h3>
    <p>Rotations about different axes do not commute. Take a book, rotate it ninety degrees about the vertical then ninety about the horizontal, and compare with the other order — the book ends up somewhere else. That is a fact about three-dimensional space, and because the angular momentum operators generate rotations, it is inherited exactly:</p>
    <div class="eq">[J&#770;&#8339;, J&#770;&#8340;] = i&#295; J&#770;&#8338;,&nbsp;&nbsp; and cyclically
      <span class="why">Measuring the x component then the y component is not the same as doing it in the other order, and the discrepancy is the z component. This single line is the whole algebra of rotations, transplanted into Hilbert space, and everything else in this module follows from it.</span></div>
    <p>The consequence is sharp. Two operators share eigenstates only if they commute, so a system <em>cannot</em> have definite values of all three components at once, except in the trivial case where all three vanish. What does commute with everything is the total, J&#770;&sup2;. The best you can ever do is specify the magnitude and <em>one</em> component, conventionally z — which is why every angular momentum state in physics carries exactly two labels.</p>
    <div class="callout"><b>On the vector model:</b> textbooks draw an arrow of fixed length precessing on a cone, its z component definite while x and y are smeared. The picture gets the counting right but is not literally true — the particle has no secret x and y components rotating too fast to catch. Treat the cone as a memory aid, not a description of what is happening.</div>

    <h3>Ladder operators and the allowed values</h3>
    <p>Here is one of the most elegant derivations in physics. Define the raising and lowering operators J&#770;&#8330; = J&#770;&#8339; &plusmn; iJ&#770;&#8340;. From the commutation relations alone, these shift a state's J&#770;&#8338; eigenvalue up or down by one unit of &#295; while leaving the total J&#770;&sup2; untouched, so the states of a given total form an evenly spaced ladder. It cannot be infinite, since the z component can never exceed the total, so there must be a top rung killed by the raising operator and a bottom rung killed by the lowering operator. Demand both, count the rungs, and the answer drops out:</p>
    <div class="eq">J&#770;&sup2;|j,m&rang; = j(j+1)&#295;&sup2;|j,m&rang;,&nbsp;&nbsp; J&#770;&#8338;|j,m&rang; = m&#295;|j,m&rang;,&nbsp;&nbsp; m = &minus;j, &minus;j+1, &hellip;, j
      <span class="why">The magnitude is fixed by j and the z component by m, which runs in integer steps from minus j to plus j — that is 2j plus 1 states. The magnitude is the square root of j times j plus one, always larger than the maximum z component, which is the algebraic reason the arrow can never lie flat along the axis.</span></div>
    <p>Now the striking part. Closing the ladder requires only that 2j be a whole number, which permits <strong>half-integer</strong> values as well as integers. But orbital angular momentum, the honest r &times; p of a particle moving through space, cannot be half-integer: its eigenfunctions are the spherical harmonics, and demanding a single-valued wavefunction once round the sphere forces an integer. The algebra of rotations therefore offers possibilities that orbital motion cannot fill. Either nature ignores half its own mathematics, or something else takes them up.</p>

    <h3>Spin: intrinsic angular momentum</h3>
    <p>Nature takes them up. In 1922 Stern and Gerlach fired silver atoms through a strongly non-uniform magnetic field. Randomly oriented classical magnets would have been deflected by every amount in a range, painting a continuous smear. Instead the beam split cleanly into <strong>two</strong> spots. Two is not of the form 2j+1 for any integer j — but it is exactly 2j+1 for j = &frac12;. The silver atom's outer electron carries half a unit of angular momentum that has nothing to do with motion through space.</p>
    <p>Uhlenbeck and Goudsmit named it spin, and the name has misled students ever since. Spin is <strong>intrinsic</strong>: an electron at rest, localised as tightly as you like, still has it, as fixedly as it has its charge. It also carries a magnetic moment about twice the naive classical estimate — the g-factor of roughly 2, predicted from first principles by Dirac's relativistic equation, and whose tiny deviation from 2 is the most precisely verified number in science.</p>
    <div class="callout"><b>The myth worth killing:</b> the electron is not a small spinning ball. Demand that a rigid sphere of the classical electron radius carry half a unit of h-bar and the required equatorial speed comes out hundreds of times the speed of light — and the real size limit is smaller still, so it only gets worse. Spin is not stuff going round; it is a label for how the state transforms when you rotate your frame.</div>

    <h3>Spinors, 720 degrees and SU(2)</h3>
    <p>That label behaves in a way no classical object does. Turn a spin one-half state through a full 360 degrees and you do not get the state back — you get it back multiplied by &minus;1. Only after <strong>720 degrees</strong> does it return to itself. Objects behaving like this are <strong>spinors</strong>, a different mathematical animal from vectors, which come back after one turn.</p>
    <p>An overall sign is unobservable for an isolated system, so this could have stayed a curiosity — but rotate half a beam, interfere it with the half that stayed put, and the sign becomes a visible phase difference. Neutron interferometry did exactly that in the mid-1970s. It is a measured fact.</p>
    <p>The intuition is the belt trick. Twist one end of a belt through a single full turn and you cannot undo it without turning the buckle back; twist through <em>two</em> full turns and the tangle can be worked out by passing the belt round the buckle, with neither end rotated. Two turns is topologically trivial where one turn is not. Formally, the rotation group SO(3) has a <strong>double cover</strong>, SU(2), in which every rotation corresponds to two elements differing by a sign. Integer spins see only the rotation; half-integer spins see the covering group and remember the sign.</p>

    <h3>Adding angular momenta: singlets and triplets</h3>
    <p>Real systems carry several sources of angular momentum at once — an electron's orbital motion and its spin, or two electrons in an atom. Combining them is not vector addition of arrows, since the components have no simultaneous values. You combine the state spaces instead, and the algebra fixes the rule:</p>
    <div class="eq">j&#8321; &otimes; j&#8322; = |j&#8321; &minus; j&#8322;| &oplus; &hellip; &oplus; (j&#8321; + j&#8322;)
      <span class="why">The combined system decomposes into independent ladders, one for each allowed total, running from the difference to the sum in integer steps. The numbers saying how much of each uncoupled state goes into each coupled state are the Clebsch-Gordan coefficients — tabulated once and used forever, with no physics input beyond the commutation relations.</span></div>
    <p>The key case is two spin one-halves. Four product states rearrange into one total-spin-zero state — the <strong>singlet</strong>, antisymmetric under swapping the particles — and three total-spin-one states, the <strong>triplet</strong>, symmetric under the swap. That split does enormous work: the exchange energy between the two makes chemical bonds and drives ferromagnetism, helium's spectrum divides into para and ortho families on this line, the 21-centimetre line that maps the galaxy is the singlet-to-triplet hyperfine transition, and the entangled pair used in Bell tests is a spin singlet.</p>

    <h3>Spin, statistics and the exclusion principle</h3>
    <p>The symmetry in that split is no accident. Identical particles come in exactly two kinds: half-integer spin means <strong>fermions</strong>, whose total state must be antisymmetric under exchange, and integer spin means <strong>bosons</strong>, whose state must be symmetric. Antisymmetry forbids two fermions from occupying the same state, since swapping identical labels would give both the same state and minus itself — which is zero. That is the <strong>Pauli exclusion principle</strong>: not an extra postulate bolted on to explain chemistry, but a consequence of spin.</p>
    <p>Why half-integer spin implies antisymmetry cannot be derived inside non-relativistic quantum mechanics at all. The <strong>spin-statistics theorem</strong> needs relativistic quantum field theory, where it follows from demanding causality and positive energies together — arbitrary at one level, inevitable one level down. The consequences are structural: electrons fill shells instead of piling into the ground state, so atoms have sizes and the periodic table has periods, and white dwarfs are held up by degeneracy pressure rather than heat.</p>

    <h3>The generalisation: particles as representations</h3>
    <p>Step back and the pattern is this. Angular momentum labels record how a state transforms under rotations, and the possible ways of transforming are the irreducible representations of the rotation group: spin zero a scalar, spin one-half a spinor, spin one a vector, spin two a rank-two tensor. Classifying particles is classifying representations.</p>
    <p>Wigner made this exact, and it became the modern definition. Extend the group from rotations to the full symmetry of flat spacetime — the Poincar&eacute; group of rotations, boosts and translations — and its irreducible unitary representations are labelled by precisely two numbers: <strong>mass and spin</strong>. A particle simply <em>is</em> such a representation, with massless cases labelled by helicity instead, which is why the photon has two polarisation states rather than three. The algebra you derived from a book rotated on a desk turns out to decide what kinds of particle can exist.</p>
  `,
  keyIdeas: [
    "Angular momentum is the conserved quantity that Noether's theorem attaches to rotational symmetry, and in quantum mechanics its operators are the generators of rotations themselves.",
    "The components do not commute, so a system can have a definite total angular momentum and one definite component but never all three; the precessing-arrow vector model is a memory aid, not a description of reality.",
    "The ladder operator method derives the allowed eigenvalues from the commutation relations alone, giving total j(j+1) times h-bar squared and 2j+1 states.",
    "The algebra permits half-integer values as well as integer ones; orbital motion can only supply integers, so half-integer angular momentum has no classical counterpart.",
    "Spin is intrinsic angular momentum, revealed by the two-spot Stern-Gerlach result; the electron is emphatically not a spinning ball, since a classical sphere reproducing the value would have to turn faster than light.",
    "Spin one-half states are spinors that pick up a minus sign after 360 degrees and only return after 720, because SU(2) is the double cover of the rotation group SO(3).",
    "Combining two spin one-halves gives an antisymmetric singlet and a symmetric triplet, and the spin-statistics theorem links half-integer spin to antisymmetry and hence to the Pauli exclusion principle."
  ],
  talk: {
    oneliners: [
      "Angular momentum operators do not merely get conserved under rotations — they are what performs the rotations, which is why the whole subject falls out of one commutation relation.",
      "You can know the total angular momentum and one component, never all three, so the familiar picture of a definite arrow precessing on a cone is useful but strictly false.",
      "The ladder argument allows half-integer values that no orbiting object can produce, and nature fills them with spin.",
      "Calling spin a rotation is a category error — a classical ball small enough to be an electron would need a surface speed hundreds of times the speed of light.",
      "Rotate a spin one-half state through a full turn and it comes back as minus itself; you need 720 degrees, and neutron interferometry has measured it."
    ],
    myths: [
      { m: "The electron is a tiny ball spinning on its axis.", t: "Spin is intrinsic and has no rotating substance behind it. A sphere of the classical electron radius carrying half a unit of h-bar would need an equatorial speed far above light speed, and the real size limit is smaller still." },
      { m: "In a state of definite total angular momentum, the x and y components have definite values we simply cannot measure.", t: "They have no values at all. The components do not commute, so those quantities are undefined rather than hidden, which is why the precessing-cone picture must not be taken literally." },
      { m: "Half-integer angular momentum is just an unusual case of orbital motion.", t: "Orbital angular momentum is forced to be integer by requiring the wavefunction to be single-valued on the sphere. Half-integer values exist only as intrinsic spin and have no orbital or classical analogue." },
      { m: "The Pauli exclusion principle is a separate rule invented to explain the periodic table.", t: "It follows from the antisymmetry of fermion states, and antisymmetry follows from half-integer spin via the spin-statistics theorem, which is itself a result of relativistic quantum field theory." }
    ],
    terms: [
      { term: "Generator of rotations", def: "The angular momentum operator, which builds finite rotations when exponentiated; conservation follows if it commutes with the Hamiltonian." },
      { term: "Commutation relation", def: "The rule that the x and y components of angular momentum fail to commute, their mismatch being i h-bar times the z component." },
      { term: "Ladder operators", def: "The raising and lowering combinations that step the z component up or down by one unit and fix the allowed eigenvalues." },
      { term: "Quantum numbers j and m", def: "The total angular momentum label and its z component, giving 2j+1 states with m running from minus j to plus j." },
      { term: "Spin", def: "Intrinsic angular momentum carried by a particle at rest, not associated with any motion through space." },
      { term: "Spinor", def: "A state that changes sign under a 360 degree rotation and returns only after 720, characteristic of half-integer spin." },
      { term: "SU(2) double cover", def: "The group of which each rotation has two elements differing by a sign; half-integer spins see the covering group, integer spins do not." },
      { term: "Singlet and triplet", def: "The total-spin-zero antisymmetric state and the three total-spin-one symmetric states formed by combining two spin one-halves." }
    ]
  },
  test: [
    { q: "Why can a quantum system not have definite values of all three components of angular momentum at once?", a: "Because rotations about different axes do not commute, and the angular momentum operators inherit that algebra exactly. Two operators share eigenstates only if they commute, so at most one component can be definite. The total J squared does commute with each component, so states are labelled by the total and one component only, conventionally j and m." },
    { q: "What does the ladder operator argument establish, and what is surprising about the result?", a: "Using only the commutation relations, it shows the states form an evenly spaced ladder that must terminate at top and bottom, forcing the total to satisfy J squared equals j times j plus one in units of h-bar squared with 2j+1 states. The surprise is that closing the ladder requires 2j to be an integer, which admits half-integer j — values that no orbital motion can produce." },
    { q: "In what sense is the electron not spinning?", a: "Spin is intrinsic angular momentum present even for a particle at rest, so there is no rotating material. If you model the electron as a classical sphere of the classical electron radius carrying half a unit of h-bar, the required equatorial speed exceeds the speed of light by a large factor, and the experimental size limit makes it worse. Spin describes how the state transforms under rotation, nothing more." },
    { q: "Why does a spin one-half state need 720 degrees to return to itself?", a: "Because half-integer spins are represented on SU(2), the double cover of the rotation group, so each physical rotation corresponds to two group elements differing by a sign. A 360 degree turn returns the state multiplied by minus one and only 720 degrees restores it. The belt trick shows the same topology, and neutron interferometry has confirmed the sign change experimentally." },
    { q: "How does angular momentum connect to the classification of particles?", a: "Angular momentum labels record how a state transforms under rotations, which means classifying particles is classifying irreducible representations of the symmetry group. Extending rotations to the full Poincare group of flat spacetime, Wigner showed the irreducible unitary representations are labelled by exactly two numbers, mass and spin. A particle is such a representation, with massless cases labelled by helicity instead." }
  ],
  resources: [
    { name: "David Tong — Quantum Mechanics", desc: "Builds the angular momentum algebra and spin from the commutation relations.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "MIT 8.05 — Quantum Physics II", desc: "Thorough treatment of spin, the ladder method and addition of angular momenta.", url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/", type: "course", icon: "🎓" },
    { name: "Feynman Lectures Vol. III", desc: "The classic conceptual account of spin one-half, rotations and adding angular momentum.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" },
    { name: "Susskind — Quantum Mechanics (Theoretical Minimum)", desc: "Careful lecture treatment of spin states and rotation operators.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "qm-perturbation", track: "quantum", order: 8,
  title: "Approximation methods: how quantum problems are actually solved",
  fields: ["quantum","maths"], readMins: 28,
  summary: "Almost nothing in quantum mechanics can be solved exactly, so the real skill is knowing which approximation to reach for — perturbation theory, variational methods, WKB, the golden rule, mean field, and the honest limits of each.",
  lesson: `
    <h3>The big picture</h3>
    <p>Undergraduate quantum mechanics gives a misleading impression. You meet the infinite square well, the harmonic oscillator and the hydrogen atom, you solve each exactly, and you come away thinking that solving the Schr&ouml;dinger equation is what quantum mechanics consists of. It is not. Those problems are in the textbook precisely because they are the rare cases that close in elementary functions. Add a second electron to hydrogen and the exact solution is gone. Ask about a molecule, a solid, a scattering event or a decay rate, and there is no exact answer available and never will be.</p>
    <p>So practical quantum mechanics is almost entirely <strong>approximation</strong> — and the craft is not grinding through algebra but choosing correctly. Is the extra effect small? Do you want a bound on the ground state or the whole spectrum? Is the potential smooth or sharp? Is the disturbance slow or sudden? Each answer points to a different method, and the methods are not interchangeable. This module is a map of that decision.</p>

    <h3>Time-independent perturbation theory: the workhorse</h3>
    <p>The commonest situation is that you can solve a problem you almost have. Write the real Hamiltonian as a solved part plus a small extra piece, H = H&#8320; + &lambda;V, and expand in powers of &lambda;. The leading correction is beautifully simple:</p>
    <div class="eq">E&#8345;&sup1; = &lang;n|V|n&rang;
      <span class="why">The first-order energy shift is just the average value of the disturbance in the unperturbed state. You do not need to know how the state changes — to leading order you evaluate the new energy on the old wavefunction. This one line does most of the routine work in atomic physics.</span></div>
    <p>Push to second order and the state itself must adjust, mixing in every other level:</p>
    <div class="eq">E&#8345;&sup2; = &Sigma;&#8344;&#8800;&#8345; |&lang;m|V|n&rang;|&sup2; / (E&#8345; &minus; E&#8344;)
      <span class="why">Each other level pushes on this one, in proportion to how strongly the perturbation connects them and in inverse proportion to how far apart they are. Nearby levels dominate; distant ones barely matter.</span></div>
    <p>Two things follow. For the <strong>ground state</strong> every denominator is negative, so the second-order shift is always downward — a useful sanity check. And the scheme breaks when two levels are close, because a tiny denominator means the true states are strong mixtures, so expanding about the wrong starting states is hopeless.</p>

    <h3>Degeneracy: the Stark and Zeeman effects</h3>
    <p>The extreme case is exact degeneracy, where the denominator is zero and the naive formula is meaningless. The cure is not more terms but a change of basis. Within the degenerate subspace any combination of the states is equally valid, so you must first find the combinations the perturbation itself picks out — you <strong>diagonalise the perturbation within the degenerate subspace</strong>, and its eigenvalues are the first-order shifts.</p>
    <p>The <strong>Stark effect</strong>, an atom in a static electric field, is the classic illustration. In most atoms the shift is quadratic in the field, but hydrogen's n = 2 level is degenerate between states of different orbital angular momentum, and diagonalising there gives a shift <em>linear</em> in the field — a fingerprint of hydrogen's accidental degeneracy. The <strong>Zeeman effect</strong> is the magnetic companion, and shows how much relative sizes matter: for a field weak against the internal spin-orbit coupling you work in the coupled basis and get the anomalous pattern, and for a strong field you use the uncoupled basis. Same perturbation, different correct starting point.</p>
    <div class="callout"><b>The general rule:</b> perturbation theory works when the perturbation is small compared with the <em>spacing</em> of the levels it connects, not when it is small in absolute terms. Whenever two effects are comparable in size, decide which is the background and diagonalise the other properly within whatever it makes degenerate.</div>

    <h3>The variational method: a guarantee, not an estimate</h3>
    <p>Sometimes there is no small parameter at all. The variational method needs none, and it offers something perturbation theory never can — a rigorous inequality.</p>
    <div class="eq">E[&psi;] = &lang;&psi;|H&#770;|&psi;&rang; / &lang;&psi;|&psi;&rang; &ge; E&#8320;
      <span class="why">Take literally any trial wavefunction, compute the expectation value of the energy, and the answer is guaranteed to sit at or above the true ground state energy. The proof is one line: expand the trial state in the true eigenstates and note that every term contributes at least E-nought.</span></div>
    <p>Guessing therefore cannot mislead you, only disappoint you. Build a trial function with adjustable parameters, minimise over them, and every improvement tightens a genuine upper bound. This is why the method underpins <strong>quantum chemistry</strong>: molecular orbital calculations are variational, the basis set is a family of trial functions, and enlarging it can only lower the answer towards truth. The trade-off is that the bound is only as good as the family chosen, and the energy is far more accurate than the wavefunction, since errors in the state enter only at second order.</p>

    <h3>WKB: when the potential varies slowly</h3>
    <p>A different limit: the potential changes gently over the scale of a de Broglie wavelength. Then the wavefunction is locally sinusoidal with a slowly drifting wavelength, and you can write it as an exponential of a phase found by integrating the local momentum. The result, the WKB approximation, is the bridge between quantum and classical mechanics, and it yields two of the most useful formulae in physics.</p>
    <p>In classically allowed regions the accumulated phase must fit the well, giving the old Bohr-Sommerfeld quantisation rule, now with a correction of one half from the behaviour at the turning points — which is exactly why the oscillator's ground state sits half a quantum above the bottom. In forbidden regions the momentum is imaginary and the wavefunction decays:</p>
    <div class="eq">T &asymp; exp(&minus;(2/&#295;) &int; &radic;(2m(V &minus; E)) dx)
      <span class="why">The tunnelling probability falls off exponentially with the area under the barrier. Make the barrier twice as thick and the rate does not halve, it collapses by orders of magnitude — which is why decay lifetimes span such absurd ranges.</span></div>
    <p>Gamow used precisely this for alpha decay, turning the Geiger-Nuttall relation between decay energy and lifetime, spanning twenty orders of magnitude, into a straight line. The same integral governs field emission, fusion in stellar cores and the scanning tunnelling microscope. WKB fails near the turning points where the momentum vanishes, which is where the connection formulae and the extra half come from.</p>

    <h3>Time-dependent perturbation theory, the golden rule and the Born approximation</h3>
    <p>Everything so far concerned energies of stationary states. Most experiments measure <em>rates</em>: how fast an excited atom emits, how strongly a sample absorbs, how often a beam scatters. For that you perturb in time and ask for the probability of ending in a different state. When the perturbation is weak and acts long enough for energy conservation to sharpen, the answer collapses to one expression:</p>
    <div class="eq">&Gamma; = (2&pi;/&#295;) |&lang;f|V|i&rang;|&sup2; &rho;(E&#8348;)
      <span class="why">The transition rate is the squared matrix element of the perturbation between initial and final states, multiplied by the density of final states available at that energy. Fermi called it the golden rule, and it is the single most used formula in applied quantum mechanics.</span></div>
    <p>Two factors, two kinds of physics. The matrix element gives <strong>selection rules</strong>: if symmetry forbids the connection the rate is zero, which is why some spectral lines are bright and others forbidden. The density of states supplies the phase-space dependence. Spectroscopy, photoemission, radiative decay and semiconductor recombination all run on this formula. The <strong>Born approximation</strong> is the same idea applied to a beam: treat the potential as a weak perturbation on a plane wave and the scattering amplitude becomes the Fourier transform of the potential. That is the entire logic of structure determination — measure scattered intensity against momentum transfer, transform back, and you have the shape of what you hit.</p>

    <h3>Timescales: sudden, adiabatic and Born-Oppenheimer</h3>
    <p>A third axis is speed. If a change happens far faster than the system can respond, the <strong>sudden approximation</strong> applies: the wavefunction has no time to alter, so you re-expand the old state in the new Hamiltonian's eigenstates and read off probabilities. Beta decay is the standard example — the nuclear charge changes almost instantaneously and the electron cloud is caught unprepared, so there is a calculable chance of ending up excited or ionised.</p>
    <p>At the other extreme the <strong>adiabatic theorem</strong> says that under a sufficiently slow change a system starting in the nth eigenstate stays in the nth eigenstate, however far that state has been deformed. This is the principle behind adiabatic quantum computing and, in its geometric refinement, the source of Berry's phase.</p>
    <p>The most consequential slow-limit application is the <strong>Born-Oppenheimer approximation</strong>. Nuclei are thousands of times heavier than electrons and move correspondingly sluggishly, so you freeze them, solve for the electrons at fixed nuclear positions, and use the resulting electronic energy as the potential surface on which the nuclei then move. Without this separation there is no such thing as molecular structure — no bond lengths, no reaction coordinate, no chemistry as a subject. An entire discipline rests on a mass ratio.</p>

    <h3>Many bodies: mean field and Hartree-Fock</h3>
    <p>The hardest problems are not those with a strange potential but those with many interacting particles, because the wavefunction lives in a space whose dimension grows exponentially with particle number — storing the exact state of a few dozen interacting electrons exceeds any conceivable computer. The standard escape is <strong>mean field theory</strong>: replace the messy interaction each particle feels from all the others with an averaged, self-consistent field. Guess the field, solve the one-particle problem, recompute the field, and iterate until nothing changes.</p>
    <p><strong>Hartree-Fock</strong> is the version respecting fermion antisymmetry, building the state as a Slater determinant so exchange is included exactly while correlations beyond the average are not. It is variational, so its energy is a genuine upper bound, and it is the foundation for post-Hartree-Fock methods and density functional theory. Tellingly, chemists define the <em>correlation energy</em> as the amount by which Hartree-Fock is wrong — the approximation is so central that its error has a name.</p>

    <h3>When approximation fails outright</h3>
    <p>An honest module has to say where this stops. Perturbation theory assumes the answer is a power series in a small coupling, and sometimes it is not. Even in quantum electrodynamics the series is <em>asymptotic</em> rather than convergent: the terms shrink for a while and then grow without limit, so there is a best possible accuracy beyond which extra terms make things worse. Some effects, tunnelling among them, depend on the coupling in a way no power series can reproduce.</p>
    <p>The decisive failure is <strong>strong coupling</strong>. In low-energy quantum chromodynamics the coupling is of order one, so successive terms do not shrink and the expansion is meaningless. Confinement, and the proton mass — overwhelmingly binding energy rather than the sum of its quark masses — are inherently non-perturbative. The response is to abandon expansion and compute directly, discretising spacetime onto a grid and evaluating the path integral numerically. <strong>Lattice QCD</strong> reproduces the hadron spectrum from first principles at the cost of enormous supercomputer time. The lesson generalises: perturbation theory is a superb tool with a clearly marked boundary, and knowing which side of it you are on is the judgement that separates a working physicist from someone with a formula sheet.</p>
  `,
  keyIdeas: [
    "Almost no realistic quantum problem is exactly solvable — the oscillator and hydrogen are lucky exceptions — so nearly all practical quantum mechanics is approximation, and choosing the right method is most of the skill.",
    "First-order perturbation theory gives the energy shift as the expectation value of the perturbation in the unperturbed state; the second-order sum always pushes the ground state downward and diverges when levels are close.",
    "Degenerate perturbation theory requires diagonalising the perturbation within the degenerate subspace first, which is what produces the linear Stark effect in hydrogen and the different weak and strong field Zeeman patterns.",
    "The variational method needs no small parameter and guarantees that any trial wavefunction gives an energy above the true ground state, so improving the guess can only tighten a real bound — the basis of quantum chemistry.",
    "WKB applies when the potential varies slowly, giving the Bohr-Sommerfeld quantisation condition with its half-integer correction and the exponential tunnelling formula behind alpha decay and the scanning tunnelling microscope.",
    "Fermi's golden rule gives transition rates as a squared matrix element times a density of final states, underpinning spectroscopy, decay and, in the Born approximation, scattering as a Fourier transform of the potential.",
    "Perturbation theory fails at strong coupling, as in low-energy QCD, where the series does not converge and non-perturbative methods such as lattice computation are required."
  ],
  talk: {
    oneliners: [
      "Hydrogen and the harmonic oscillator are in every textbook because they are almost the only things that can be solved exactly — everything else in quantum mechanics is approximation.",
      "Perturbation theory works when the disturbance is small compared with the spacing between the levels it connects, not when it is small in absolute terms.",
      "The variational method has a guarantee no other approximation offers: any trial wavefunction gives an energy above the truth, so a better guess is always a better bound.",
      "Fermi's golden rule is the most used formula in applied quantum mechanics — a matrix element for the selection rules, a density of states for the phase space.",
      "Without the Born-Oppenheimer approximation there are no bond lengths and no molecular structure; the whole of chemistry rests on nuclei being thousands of times heavier than electrons."
    ],
    myths: [
      { m: "Quantum mechanics means solving the Schrodinger equation exactly.", t: "Exactly solvable systems are a tiny special set. Realistic atoms, molecules, solids, scattering and decay problems are all handled by approximation schemes chosen to suit the situation." },
      { m: "Perturbation theory just needs enough terms to be accurate.", t: "The series is often asymptotic rather than convergent, even in quantum electrodynamics, so after a certain order extra terms make the answer worse. Some effects, such as tunnelling, have no power series expansion at all." },
      { m: "A variational calculation with low energy means you have found a good wavefunction.", t: "The energy is accurate to second order in the error of the state, so a mediocre wavefunction can give a respectable energy. Other properties computed from that state can be considerably worse." },
      { m: "Degenerate perturbation theory is just ordinary perturbation theory with extra care.", t: "It is a different first step. You must diagonalise the perturbation inside the degenerate subspace to identify the correct zeroth-order states, because the naive formula divides by an energy difference of zero." }
    ],
    terms: [
      { term: "Perturbation theory", def: "Expanding a hard problem as a solvable one plus a small correction, in powers of a coupling parameter." },
      { term: "Degenerate subspace", def: "A set of states with equal unperturbed energy, within which the perturbation must be diagonalised before any expansion is valid." },
      { term: "Variational principle", def: "The guarantee that the energy expectation value of any trial state is an upper bound on the true ground state energy." },
      { term: "WKB approximation", def: "A semiclassical method for slowly varying potentials, giving quantisation conditions and exponential tunnelling rates." },
      { term: "Fermi's golden rule", def: "A transition rate equal to two pi over h-bar times the squared matrix element times the density of final states." },
      { term: "Born-Oppenheimer approximation", def: "Separating slow nuclear from fast electronic motion, producing the potential energy surfaces that define molecular structure." },
      { term: "Born approximation", def: "Treating a scattering potential as a weak perturbation, making the amplitude the Fourier transform of the potential." },
      { term: "Hartree-Fock", def: "A self-consistent mean field method using a Slater determinant, exact for exchange and defining correlation energy by its own error." }
    ]
  },
  test: [
    { q: "What are the first and second order energy corrections in time-independent perturbation theory, and what does each tell you?", a: "The first-order shift is the expectation value of the perturbation in the unperturbed state, so you get the new energy without knowing how the state changes. The second-order term sums squared matrix elements to other states divided by the energy differences, showing that nearby levels dominate. For the ground state all denominators are negative, so the second-order shift is always downward." },
    { q: "Why does ordinary perturbation theory fail for degenerate levels, and what do you do instead?", a: "The second-order denominators are energy differences, which vanish for degenerate states, so the expansion is undefined. The fix is to diagonalise the perturbation within the degenerate subspace, since any combination of degenerate states is an equally valid starting point and the perturbation selects the right ones. Its eigenvalues give the first-order shifts, as in the linear Stark effect in hydrogen." },
    { q: "What makes the variational method different from perturbation theory?", a: "It requires no small parameter and provides a rigorous inequality rather than an estimate: any normalised trial wavefunction gives an energy greater than or equal to the true ground state energy. Minimising over adjustable parameters can only tighten the bound, which is why quantum chemistry is built on it. The weakness is that the bound is only as good as the trial family, and the wavefunction is less accurate than the energy." },
    { q: "State Fermi's golden rule and explain why both factors matter.", a: "The transition rate is two pi over h-bar times the squared matrix element of the perturbation between initial and final states, times the density of final states at that energy. The matrix element encodes selection rules, so symmetry-forbidden transitions have zero rate. The density of states supplies the phase-space dependence. Together they underlie spectroscopy, radiative decay and scattering rates." },
    { q: "When does perturbation theory fail outright, and what replaces it?", a: "It fails at strong coupling, where successive terms do not shrink, and it can also be asymptotic rather than convergent even at weak coupling, so accuracy saturates. Low-energy quantum chromodynamics is the standard example: confinement and the proton mass are non-perturbative. The replacement is direct numerical computation, notably lattice QCD, which discretises spacetime and evaluates the path integral on supercomputers." }
  ],
  resources: [
    { name: "MIT 8.06 — Quantum Physics III", desc: "Graduate course covering perturbation theory, variational methods, WKB and scattering.", url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/", type: "course", icon: "🎓" },
    { name: "David Tong — Applications of Quantum Mechanics", desc: "Scattering, the Born approximation and many-body methods, clearly presented.", url: "https://www.damtp.cam.ac.uk/user/tong/aqm.html", type: "notes", icon: "📄" },
    { name: "David Tong — Quantum Mechanics", desc: "Foundations underlying the approximation schemes, including the variational principle.", url: "https://www.damtp.cam.ac.uk/user/tong/quantum.html", type: "notes", icon: "📄" },
    { name: "Feynman Lectures Vol. III", desc: "Conceptual treatment of transition rates, two-state systems and time-dependent perturbations.", url: "https://www.feynmanlectures.caltech.edu/III_toc.html", type: "book", icon: "📚" }
  ]
});
/* ===== TRACK 3 ADDITION: scattering, cross sections and how we actually find things out ===== */

addModule({
  id: "qm-scattering", track: "quantum", order: 9,
  title: "Scattering: how we actually find things out",
  fields: ["quantum","particle"], readMins: 28,
  summary: "Nearly everything known about the subatomic world came from throwing things at other things and watching how they bounce, and the cross section is the number that joins the theory to the detector.",
  lesson: `
    <h3>The big picture</h3>
    <p>There is no microscope that shows you a proton. You cannot pick up a quark or photograph the inside of a nucleus. So physicists do the only thing available: they throw something at the target and watch how it comes off. That is <strong>scattering</strong>, and it is not a niche corner of quantum mechanics — it is the primary experimental method of subatomic physics. The nucleus, the quark, the W and Z bosons, the top quark and the Higgs were all found this way. The whole enterprise turns on one quantity, the <strong>cross section</strong>, where a theorist's calculation and an experimentalist's count of events meet and are compared.</p>

    <h3>The cross section: an effective area, not a size</h3>
    <p>Fire a stream of bullets at a plate hanging on a fence. Your hit rate is the flux of bullets multiplied by the plate's area. Now invert the logic: measure the hit rate and the flux, divide, and you have recovered an area. That number is the <strong>cross section</strong>, written σ. Its natural unit is the <strong>barn</strong>, 10⁻²⁸ m² — roughly the face of a heavy nucleus, and named during the Manhattan Project because on that scale a uranium nucleus was as easy to hit as a barn door.</p>
    <p>Here is the point that trips people up. A cross section is <em>not</em> the physical size of the target. It is how probable the interaction is, expressed in the language of area. The same gold nucleus presents about a barn to a slow neutron and about 10⁻¹⁴ of a barn to a neutrino, which feels only the weak force. Cross sections depend on the probe's energy and on which interaction you are testing, and they range over forty orders of magnitude.</p>
    <div class="eq">event rate = L × σ
      <span class="why">Events per second equals the instantaneous luminosity L, a property of the machine measuring how densely and how often particles are delivered, times the cross section, a property of nature. Physics lives entirely in σ; the accelerator engineers own L.</span></div>

    <h3>The differential cross section, and what angles tell you</h3>
    <p>The total cross section says how often something happens. The <strong>differential cross section</strong> says where the outgoing particles go, and that is where the structure is:</p>
    <div class="eq">dσ/dΩ = (particles scattered into solid angle dΩ per second) / (incident flux × dΩ)
      <span class="why">Read it as the effective area associated with scattering into a particular direction. Integrate it over all directions and the total cross section comes back.</span></div>
    <p>An angular distribution is a fingerprint. Scatter off a hard, small, concentrated object and you get plenty of wide-angle recoil; off something soft and diffuse and everything comes off gently in the forward direction; off an object with sharp edges and you get diffraction rings, exactly as light does off a disc, the ring spacing giving the radius. Physicists never look at the target — they read a plot of dσ/dΩ and infer the target from its shape.</p>

    <h3>Rutherford: the archetype</h3>
    <p>In 1909 Geiger and Marsden, working for Rutherford, fired alpha particles at a thin gold foil. On the plum-pudding model, with charge smeared uniformly through the atom, only gentle deflections were possible. Most alphas did go almost straight through — but roughly one in eight thousand came back at more than ninety degrees, which Rutherford said was as incredible as firing a fifteen-inch shell at tissue paper and having it bounce back at you.</p>
    <p>The rare events were the signal. A diffuse charge cannot produce a violent recoil; only a tiny, dense, massive core can. Rutherford worked out the distribution for a repelling point charge:</p>
    <div class="eq">dσ/dΩ ∝ (Z₁Z₂e²)² / (E² sin⁴(θ/2))
      <span class="why">The steep sine-to-the-fourth denominator means most scattering is at small angles, but the tail out to large θ never quite dies. Measuring how the rate fell with angle and with beam energy E confirmed a pure Coulomb force down to a scale ten thousand times smaller than the atom.</span></div>
    <div class="callout"><b>A useful coincidence:</b> Rutherford's classical calculation, the quantum Born approximation and the exact quantum treatment all give the same formula for a Coulomb potential. That is a peculiarity of the one-over-r force, not a general truth. Rutherford got the right answer with the wrong physics, and the nucleus arrived fifteen years before any quantum theory could describe it.</div>

    <h3>Form factors, resolution, and the parts inside the proton</h3>
    <p>Push the beam energy up and the deflections stop matching a point charge. The measured rate falls below the point-like prediction, and the shortfall is packaged into a <strong>form factor</strong> F(q), a function of the momentum transferred. It is the Fourier transform of the target's charge distribution: a genuine point gives F = 1 at every q, while anything with spatial extent gives an F that falls away as q rises. Hofstadter measured exactly this in the 1950s and got a proton radius of about 0.8 femtometres. Behind it sits the most important idea in experimental particle physics:</p>
    <div class="eq">resolution ≈ ℏc/q ,   with ℏc = 197 MeV·fm
      <span class="why">The distance you can resolve is inversely proportional to the momentum transferred. A transfer of 197 MeV/c probes one femtometre; 197 GeV/c probes a thousandth of that. This is de Broglie's wavelength doing the work of a lens.</span></div>
    <p>An accelerator is therefore a microscope, its resolving power bought with energy for exactly the reason an optical microscope cannot see a virus. At SLAC in 1968 Friedman, Kendall and Taylor pushed that resolution inside the proton, firing 20 GeV electrons and, like Rutherford, attending to the violent events where the target was blown apart rather than nudged. Wide-angle scattering was far commoner than a smeared-out proton allows, and the results showed <strong>scaling</strong>: the cross section depended on a dimensionless ratio rather than on the absolute momentum transfer, which happens only if the electron is bouncing off something with no internal size at all. Bjorken predicted the scaling and Feynman read it correctly — the proton is a bag of point-like <strong>partons</strong>, which turned out to be quarks and gluons. Rutherford's experiment, run again one level down.</p>

    <h3>The quantum machinery in outline</h3>
    <p>Quantum mechanically you solve for a wavefunction that, far from the target, is an incoming plane wave plus an outgoing spherical wave whose amplitude in each direction is the <strong>scattering amplitude</strong> f(θ). The link to experiment is direct: dσ/dΩ = |f(θ)|². The rest is machinery for computing f, and three tools matter. The <strong>Born approximation</strong> treats the potential as a weak perturbation and gives the cleanest result in the subject:</p>
    <div class="eq">f(q) ∝ ∫ V(r) e^(−iq·r) d³r
      <span class="why">The amplitude is the Fourier transform of the potential. Scattering is a Fourier microscope: measure the amplitude across a range of momentum transfers and you can invert to recover the shape of what you hit.</span></div>
    <p><strong>Partial wave analysis</strong> is the alternative for slow probes and strong potentials. Decompose the incoming wave into components of definite angular momentum; each is affected only by being pushed out of step, by an amount called the <strong>phase shift</strong>. The whole interaction compresses into a handful of numbers, and at low energy only the lowest partial wave survives, so scattering becomes isotropic and a single scattering length captures everything.</p>
    <p>Finally the <strong>optical theorem</strong>: σ(total) = (4π/k) Im f(0). The probability of anything happening at all is fixed by the imaginary part of the amplitude for scattering straight ahead. It is conservation of probability in disguise — whatever is removed from the forward beam must reappear somewhere, so the shadow knows the size of everything that made it.</p>

    <h3>Resonances: how unstable particles announce themselves</h3>
    <p>Plot a cross section against collision energy and you rarely get a smooth curve. You get bumps. A <strong>resonance</strong> is a short-lived state the collision creates and which then falls apart, appearing as a Breit-Wigner peak:</p>
    <div class="eq">σ(E) ∝ 1 / ((E − M)² + Γ²/4) ,   Γτ ≈ ℏ
      <span class="why">The peak sits at the particle's mass M and its full width at half maximum is Γ. Width and lifetime are inversely related, so an unstable particle has no single sharp mass: the Delta baryon lives about 10⁻²³ s and is 117 MeV wide, while the longer-lived J/psi is a needle under 0.1 MeV across.</span></div>
    <p>Most of the particle zoo was discovered as bumps in cross section plots. Even the Z boson is a 2.5 GeV-wide resonance sitting on the electron-positron cross section at 91 GeV — and measuring that width told us there are exactly three light neutrino species, since every extra one would make the Z decay faster and the bump wider.</p>

    <h3>What actually happens at a collider</h3>
    <p>At the LHC, bunches of protons cross every 25 nanoseconds, forty million times a second, and the delivered <strong>luminosity</strong> is around 10³⁴ per square centimetre per second. Multiply by the total proton-proton cross section of roughly 70 millibarns and you get about a billion collisions per second. Higgs production is about 50 picobarns, ten orders of magnitude smaller, so a Higgs turns up in maybe one collision in ten billion. Experiments quote <strong>integrated luminosity</strong>, accumulated over a run in inverse femtobarns, because that times the cross section is the number of events expected.</p>
    <p>Two consequences follow. Each bunch crossing produces not one collision but dozens overlapping in the detector, called <strong>pile-up</strong>, and disentangling them is a serious part of the analysis. And nothing on Earth can record a billion events a second, so a <strong>trigger</strong> decides in microseconds what to keep. The LHC writes about a thousand events per second and destroys the rest, permanently and unexamined — over 99.99 per cent of everything the machine produces, discarded on criteria written before the data existed. Designing a trigger is an act of physics, not plumbing.</p>

    <h3>Why the machines keep getting bigger, and what that costs</h3>
    <p>Since resolution goes as ℏc divided by momentum transfer, seeing smaller means going harder, and there is no clever way round it. In a circular machine the momentum you can hold on the ring is proportional to field times radius. Superconducting dipoles are stuck near 8 tesla and improve painfully slowly, so the only remaining variable is size: the LHC is 27 kilometres round because 13.6 TeV demands it. Electron machines fare worse, since a circulating electron radiates energy as the fourth power of its Lorentz factor, which is why LEP ended the line for circular electron colliders.</p>
    <p>The honest position is that the physics is straightforward and the economics is not. Each factor of ten in energy costs roughly a factor of ten in money and a generation of careers. The LHC took about thirty years from proposal to Higgs and cost several billion Swiss francs; proposed successors run to tens of billions and would deliver nothing until the 2050s, with no guarantee of a discovery. That argument, not the physics, will decide whether the next machine gets built.</p>
  `,
  keyIdeas: [
    "Scattering is the primary experimental method of subatomic physics: you cannot look at a nucleus or a quark, so you throw something at it and study how it comes off.",
    "The cross section has units of area but measures interaction probability, not target size, so it depends on energy and on which force is being probed; the barn is 10 to the minus 28 square metres.",
    "Event rate equals luminosity times cross section, which is the single equation joining accelerator performance to fundamental physics.",
    "The differential cross section, the angular distribution, is what carries structural information: hard, small objects produce rare wide-angle events.",
    "Resolution goes as h-bar c divided by momentum transfer, so a collider is a microscope whose resolving power is bought with energy, and form factors and deep inelastic scattering exploited exactly this to find the proton radius and then the point-like partons inside it.",
    "The quantum treatment computes a scattering amplitude whose squared modulus is the differential cross section, using the Born approximation as a Fourier transform of the potential, partial waves and phase shifts at low energy, and the optical theorem to link the forward amplitude to the total cross section.",
    "Unstable particles appear as Breit-Wigner resonances whose width is inversely proportional to lifetime, and most of the particle zoo was discovered as bumps in cross section plots."
  ],
  talk: {
    oneliners: [
      "Almost everything we know about the subatomic world came from throwing things at other things and watching very carefully how they bounce.",
      "A cross section is not the size of the target, it is the probability of an interaction dressed up in units of area, which is why a neutrino sees a nucleus as fourteen orders of magnitude smaller than a neutron does.",
      "A particle collider is a microscope: resolution is set by wavelength, wavelength is set by momentum, and that is the entire reason the machines have to keep getting bigger.",
      "Rutherford found the nucleus by taking the rare events seriously — one alpha in eight thousand bouncing straight back was the whole discovery.",
      "The LHC produces about a billion collisions a second and permanently discards more than 99.99 per cent of them within microseconds, so the trigger design is itself a physics decision."
    ],
    myths: [
      { m: "The cross section tells you how physically big the target particle is.", t: "It is an effective area encoding interaction probability. The same nucleus has a cross section of about a barn for a slow neutron and about ten to the minus fourteen barns for a neutrino." },
      { m: "Rutherford's discovery came from seeing most alpha particles deflected.", t: "Almost all of them went nearly straight through. The signal was the rare large-angle recoil, roughly one in eight thousand, which only a tiny dense core can produce." },
      { m: "Rutherford's classical formula worked because classical physics is good enough for atoms.", t: "It agrees with the full quantum result only because the Coulomb potential is a special case where the classical, Born and exact treatments coincide. For any other potential the classical answer is wrong." },
      { m: "An unstable particle has a definite mass that we measure imprecisely.", t: "A short-lived state has a genuine intrinsic width, with width times lifetime of order h-bar. The Delta baryon really is over a hundred MeV wide, and no better detector would sharpen it." }
    ],
    terms: [
      { term: "Cross section", def: "An effective area measuring the probability of a given interaction; measured in barns, where one barn is 10 to the minus 28 square metres." },
      { term: "Differential cross section", def: "The cross section per unit solid angle, giving the angular distribution of scattered particles and hence the structure of the target." },
      { term: "Luminosity", def: "A property of the machine measuring how many particles are delivered per unit area per unit time; multiply by cross section to get the event rate." },
      { term: "Momentum transfer", def: "The momentum exchanged in a collision; it sets the spatial resolution, roughly h-bar c divided by q." },
      { term: "Form factor", def: "The Fourier transform of the target's charge distribution, equal to one for a point and falling with momentum transfer for an extended object." },
      { term: "Scattering amplitude", def: "The angular amplitude of the outgoing spherical wave; its squared modulus is the differential cross section." },
      { term: "Phase shift", def: "The amount by which a given partial wave is pushed out of step by the potential; it encodes the whole interaction for that angular momentum." },
      { term: "Breit-Wigner resonance", def: "The characteristic peak shape of an unstable state, centred on its mass with a width inversely proportional to its lifetime." }
    ]
  },
  test: [
    { q: "What is a cross section, and why is it wrong to think of it as the size of the target?", a: "It is the effective area you recover by dividing the measured event rate by the incident flux, so it has units of area but measures interaction probability. The same nucleus presents about a barn to a slow neutron and about ten to the minus fourteen barns to a neutrino, because the neutrino only feels the weak force. Cross sections therefore depend on energy and on which interaction is being probed, and span some forty orders of magnitude." },
    { q: "How does event rate relate to luminosity and cross section, and why does the distinction matter?", a: "The rate of events equals the instantaneous luminosity multiplied by the cross section. Luminosity is a property of the accelerator, describing how densely and how often particles are delivered, while the cross section is a property of nature. Integrated luminosity, accumulated over a run, multiplied by the cross section gives the total number of events expected, which is how discovery reach is planned." },
    { q: "What did Rutherford's experiment actually show, and what was the lucky coincidence in his calculation?", a: "Firing alpha particles at gold foil, roughly one in eight thousand came back beyond ninety degrees, which a diffuse smeared-out charge cannot produce. The rare wide-angle events proved the positive charge sits in a tiny dense core, so the nucleus was discovered by counting rare events. The coincidence is that for a Coulomb potential the classical calculation, the Born approximation and the exact quantum result all give the same formula, so Rutherford got the right answer years before quantum mechanics existed." },
    { q: "Why is a particle collider fundamentally a microscope, and what follows from that?", a: "The distance you can resolve is roughly h-bar c divided by the momentum transferred, which is de Broglie's wavelength acting as the lens. Probing shorter distances therefore requires higher momentum transfer and nothing else will do. Since a circular machine holds momentum proportional to magnetic field times radius, and superconducting dipoles are stuck near eight tesla, the only remaining variable is the size of the ring, which is why each factor of ten in energy costs roughly a factor of ten in money." },
    { q: "How do unstable particles show up in scattering data, and what does the width of the peak tell you?", a: "They appear as resonances, bumps in the cross section plotted against collision energy, with the Breit-Wigner shape peaking at the particle's mass. The full width at half maximum is inversely related to the lifetime, with width times lifetime of order h-bar, so short-lived states are intrinsically broad. Measuring the width of the Z boson resonance, for instance, established that there are exactly three light neutrino species." }
  ],
  resources: [
    { name: "David Tong — Applications of Quantum Mechanics", desc: "Contains the clearest free treatment of scattering theory, phase shifts and the optical theorem.", url: "https://www.damtp.cam.ac.uk/user/tong/aqm.html", type: "notes", icon: "📄" },
    { name: "David Tong — Quantum Field Theory", desc: "Where cross sections, amplitudes and the relativistic scattering formalism are built properly.", url: "https://www.damtp.cam.ac.uk/user/tong/qft.html", type: "notes", icon: "📄" },
    { name: "Particle Data Group Review", desc: "The authoritative reference for kinematics, cross-section formulae and every measured resonance width.", url: "https://pdg.lbl.gov", type: "reference", icon: "📊" },
    { name: "CERN — The Large Hadron Collider", desc: "How luminosity, bunch crossings, pile-up and triggering actually work in practice.", url: "https://home.cern/science/accelerators/large-hadron-collider", type: "site", icon: "🔬" }
  ]
});
