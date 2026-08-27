/* ===== GEN-2 REWRITES: cosmo (relativity track), qm (quantum track) ===== */

addModule({
  id: "cosmo", track: "relativity", order: 3,
  title: "Cosmology",
  fields: ["cosmology"], readMins: 24,
  summary: "The universe as a whole: the Big Bang, cosmic expansion, the microwave background, inflation, and the dark sector that dominates everything.",
  lesson: `
    <h3>The big picture</h3>
    <p>Cosmology is physics applied to the one system there is only one of. It asks how the universe began, what it is made of, how structure grew inside it and where it is going — and, remarkably, it now answers with error bars. A century ago nobody knew whether the Milky Way was the whole of creation. Today the age of the universe is pinned to about 13.8 billion years at better than one per cent, and there is a quantitative, tested history running from the first second to the present galaxy distribution.</p>
    <p>What makes that possible is one simplifying move. Solving Einstein's equations for a real, lumpy universe is hopeless, but assume the universe is the same everywhere and in every direction and they collapse to a pair of ordinary differential equations. Everything below rests on that assumption and on the evidence that it holds.</p>

    <h3>The cosmological principle, and the fact that it is an assumption</h3>
    <p>The <strong>cosmological principle</strong> states that on large enough scales the universe is <strong>homogeneous</strong> — the same at every location — and <strong>isotropic</strong> — the same in every direction. The two are logically distinct. A universe with a preferred axis could be homogeneous but not isotropic; a universe with us at the centre of an onion could be isotropic about our point but not homogeneous.</p>
    <p>This began as a philosophical preference, a refusal to grant ourselves a special place. It is now a measured claim. Isotropy is confirmed to about one part in a hundred thousand by the microwave background temperature across the sky, once the dipole from our own motion is subtracted. Homogeneity is harder, since we see distant regions only at earlier times, but galaxy surveys show the distribution becoming statistically uniform above roughly 300 million light years. Below that scale the universe is emphatically lumpy — that is what galaxies, clusters and voids are — so the principle is a statement about averages.</p>

    <h3>FLRW, the scale factor, and what expansion really means</h3>
    <p>Impose homogeneity and isotropy on general relativity and the geometry of spacetime is forced into a single form, the <strong>Friedmann–Lemaître–Robertson–Walker</strong> metric:</p>
    <div class="eq">ds² = −c²dt² + a(t)²[ dr²/(1−kr²) + r²dΩ² ]
      <span class="why">All the freedom in the whole universe reduces to one function of time, the scale factor a(t), and one number k for the spatial curvature — positive for a closed universe, zero for flat, negative for open. Solving cosmology means solving for a(t).</span></div>
    <p>The <strong>scale factor</strong> is a ruler for space itself, conventionally set to 1 today. If a doubles, the distance between any two galaxies that are simply sitting still doubles. This is the crucial conceptual point and it is almost always taught badly. Galaxies are not projectiles flying outwards through a pre-existing void. They are essentially at rest in their local patch of space, and the space between them is growing. There is therefore no centre — every observer sees the same recession — and no edge, and nothing outside for the universe to expand into. The expansion is a property of the geometry, not a motion within it.</p>
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
      <li><strong>Matter</strong> thins as ρ ∝ a⁻³ — the particle count is fixed, the volume grows.</li>
      <li><strong>Radiation</strong> thins as ρ ∝ a⁻⁴ — the same volume effect, plus each photon is redshifted and loses energy.</li>
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
    <p>Assemble these and you get <strong>ΛCDM</strong>, the concordance model: a flat universe, roughly 5% baryons, 27% cold dark matter, 68% dark energy, described by about six parameters that fit thousands of independent measurements. Its problems are honest and public. The <strong>Hubble tension</strong> is the sharpest: the expansion rate inferred from the CMB, around 67 km/s/Mpc, disagrees at more than four sigma with the value measured directly from Cepheids and supernovae, around 73. That is either an unfound systematic or a crack in the model. Beyond it sit the identity of dark matter, the theoretical catastrophe of the cosmological constant's predicted value, the lithium problem, and what preceded inflation — where the black hole and quantum gravity tracks pick up the story.</p>
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
    <p>The deeper reason is that position and momentum wavefunctions are <strong>Fourier transforms</strong> of one another, and any Fourier pair obeys a bandwidth theorem: a signal sharply localised in time necessarily contains a wide spread of frequencies. Uncertainty is that mathematical fact wearing physical clothes. It is also why matter is stable — confining an electron to the nucleus would force an enormous momentum spread and energy cost, so atoms have a floor size they cannot fall below.</p>

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
    <p>In 1964 John Bell turned that from philosophy into experiment. He proved that <em>any</em> theory in which particles carry predetermined local properties must satisfy an inequality on measurement correlations, and that quantum mechanics violates it. Experiments by Freedman and Clauser, then Aspect, and finally the loophole-free tests of 2015, all found the quantum prediction and ruled out local hidden variables — work recognised by the 2022 Nobel Prize. Be precise about what this establishes: nature is not both local and realistic in Bell's sense. It does not prove signals travel faster than light, and it does not select an interpretation.</p>
    <div class="callout"><b>Important nuance:</b> entanglement cannot send information faster than light. Each local outcome is random and uncontrollable; the correlations only become visible when the two sets of results are compared over an ordinary channel. Relativity survives intact.</div>
    <p>Why, then, does the everyday world look classical? <strong>Decoherence</strong> is the answer. No system is truly isolated; air molecules, photons and thermal vibrations constantly interact with it, entangling the system with its surroundings. The interference terms are not destroyed but leak irretrievably into those environmental correlations, and for anything macroscopic this happens in vanishingly small fractions of a second. Superposition survives only where isolation can be maintained, which is precisely the engineering problem quantum computing exists to solve. The <strong>correspondence principle</strong> completes the picture: for large quantum numbers and large actions, quantum predictions reproduce classical ones, and Ehrenfest's theorem shows expectation values obey Newton's laws. Classical physics is not overthrown; it is the limiting case.</p>
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
