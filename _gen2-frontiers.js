addModule({
  id: "frontiers", track: "particles", order: 2,
  title: "Frontiers & open questions",
  fields: ["frontiers"], readMins: 26,
  summary: "The orientation map of what physics does not know: the three different kinds of open problem, why they are routinely confused, why the experimental well has run dry, and how physicists reason when data cannot decide.",
  lesson: `
    <h3>The big picture</h3>
    <p>Every other module here tells you something physics knows. This one is the map of what it does not — and, more usefully, the map of how the unknowns relate to each other. That second part matters, because the famous open problems get listed as though they were all the same species of difficulty. Dark matter sits next to the hierarchy problem sits next to the singularity at the centre of a black hole, as if a physicist were equally stuck on all three. They are not the same kind of problem at all: they carry different standards of evidence and wildly different odds of being resolved. Sorting them is the single most useful thing you can do if you want to discuss the frontier without sounding like a documentary voiceover.</p>
    <p>The honest headline is this. We hold two theories that each work superbly in their own domain and that are known to be mutually incompatible — and we have had no decisive new experimental anomaly in fundamental physics for a long time. Either condition alone is ordinary. Having both at once is historically unusual, and it is the real reason the field feels stuck. There is a known crack in the foundations and, at present, no experimental crowbar to open it with.</p>

    <h3>Two theories, one border, no bridge</h3>
    <p>General relativity describes gravity as the geometry of spacetime: smooth, deterministic, answerable to no external stage, and successful in every test from Mercury's perihelion to gravitational waves to the imaging of black hole shadows. Quantum field theory describes everything else as quantised fields living <em>on</em> a spacetime stage, and in the case of quantum electrodynamics is confirmed to about a part in a trillion. Each is the best-tested theory in its class. Neither has a single confirmed experimental failure.</p>
    <p>They cannot both be the last word, because they disagree about what spacetime is. General relativity treats geometry as a classical object; quantum theory insists that anything carrying energy must be quantum. Put a massive object into a superposition of two locations and ask which spacetime it curves. Neither theory answers, and the combination gives nonsense. That is not philosophical hand-wringing — it is a precise technical failure, worked through properly in the quantum gravity track.</p>
    <div class="callout"><b>A precision worth having:</b> it is wrong to say we have no quantum theory of gravity at all. Treated as an effective field theory, gravity gives perfectly good quantum corrections to Newton's law at ordinary energies. The breakdown is specifically at very high energy, where the theory demands an unending series of new undetermined constants and loses all predictive power. Say <em>incompatible at the Planck scale</em>, not <em>incompatible</em>.</div>

    <h3>Three kinds of open problem</h3>
    <p>Here is the sorting that makes the rest of the field legible. Almost every celebrated puzzle falls into one of three categories, and the categories are not equivalent.</p>

    <h4>Kind one: genuine inconsistencies</h4>
    <p>The theory demonstrably fails: it returns infinities, or two established principles give contradictory answers to the same question. Quantum gravity at the Planck scale is the flagship. So are <strong>singularities</strong> — general relativity predicts regions where curvature diverges and prediction stops, and the Penrose and Hawking theorems showed this is generic rather than an artefact of assuming perfect symmetry. The theory forecasts its own breakdown. The <strong>black hole information paradox</strong> belongs here too: Hawking radiation appears thermal and information-free, while quantum mechanics forbids a pure state evolving into a mixed one. These cannot all stand as they are, and no aesthetic judgement is required to see it.</p>

    <h4>Kind two: missing ingredients</h4>
    <p>The theory is internally consistent but incomplete: observation shows that something exists which the theory does not contain. <strong>Dark matter</strong> is inferred independently from rotation curves, cluster masses, lensing, structure formation and the microwave background peaks, and the Standard Model has no candidate. <strong>Dark energy</strong> is the measured fact of cosmic acceleration. <strong>Neutrino masses</strong> are the cleanest case of all: the original Standard Model forbids them, oscillation proved they exist, and that remains the one confirmed piece of beyond-Standard-Model physics in the particle sector. The <strong>matter-antimatter asymmetry</strong> is similar — the Standard Model's CP violation is orders of magnitude too feeble to produce the universe we live in. These are the problems with the clearest route forward, because data is the arbiter and data keeps arriving.</p>

    <h4>Kind three: aesthetic and naturalness discomforts</h4>
    <p>Nothing is broken. Every prediction works. The complaint is that the numbers look unreasonable. The <strong>hierarchy problem</strong> asks why the Higgs mass sits so far below the Planck scale when quantum corrections should drag it up, which requires a cancellation of extraordinary precision. The <strong>strong CP problem</strong> asks why a parameter that could naturally be of order one is measured to be smaller than about ten to the minus ten. And the Standard Model's roughly <strong>nineteen free parameters</strong> are inputs we measure rather than results we derive. The grievance is about explanation, not correctness. The universe is entitled to reply that the number simply is what it is.</p>

    <h3>Why the third kind is genuinely different</h3>
    <p>This is the distinction most popular accounts blur. Kinds one and two are anchored to something outside our heads: a mathematical contradiction, or a measurement. Kind three is anchored to a judgement about which numbers deserve an explanation. That judgement has a name — <strong>naturalness</strong> — and the field bet very heavily on it.</p>
    <p>The bet was concrete. If naturalness is a reliable guide, the hierarchy problem should be solved by new particles near the TeV scale, and the Large Hadron Collider should have found them. Supersymmetry was the favoured mechanism, with partner particles cancelling the dangerous corrections. The LHC found the Higgs boson in 2012 and, so far, nothing else. Supersymmetric partners, technicolour, low-scale extra dimensions and composite Higgs models have all been excluded across broad swathes of their most motivated territory.</p>
    <p>Naturalness is not worthless — it correctly anticipated the pion mass splitting and the charm quark. But it failed spectacularly for the cosmological constant.</p>
    <div class="eq">predicted vacuum energy / observed vacuum energy ≈ 10¹²⁰
      <span class="why">Summing quantum zero-point energies with a Planck-scale cutoff overshoots the measured dark energy density by something like 120 orders of magnitude. Even a very conservative cutoff leaves tens of orders. Naturalness said this could not happen. It happened.</span></div>
    <p>So the argument now runs three ways. One camp holds that naturalness is right and the new particles are merely heavier or hiding in awkward corners of parameter space. A second holds that the principle is right but was implemented badly, and looks for mechanisms that select the Higgs mass dynamically. A third holds that naturalness is simply the wrong guide, that some parameters may be environmentally selected across a landscape of vacua, and that apparent tuning is therefore not evidence of anything. No data available today settles this. It is a live methodological argument about how physics should be done, and stating all three positions fairly is worth more than picking one.</p>

    <h3>The experimental drought</h3>
    <p>Why not simply go and look? Because the scale where the inconsistencies bite is not merely far away, it is unreachably far away.</p>
    <div class="eq">E(Planck) / E(LHC) ≈ 10¹⁹ GeV / 10⁴ GeV ≈ 10¹⁵
      <span class="why">The gap is fifteen orders of magnitude in energy. Collider energy scales roughly with machine size and magnet strength, so closing that gap by brute force means an accelerator of galactic dimensions. This is not an engineering shortfall to be chipped away at — it is a wall.</span></div>
    <p>The drought is not an absence of results. It is an absence of <em>surprising</em> results. The last two genuinely unforeseen anomalies both landed in 1998: neutrino oscillation and the acceleration of cosmic expansion. Everything spectacular since has confirmed theory we already had. The Higgs boson in 2012 completed the Standard Model as written down in the 1970s. Gravitational waves in 2015 confirmed a 1916 prediction. The Event Horizon Telescope images matched general relativity. Triumphs, all of them, and none of them a crack to prise open.</p>
    <p>The structural consequence is that <strong>cosmology and precision measurement have overtaken colliders</strong> as the likeliest source of the next real surprise. The early universe is the only accelerator that ever reached the interesting energies, and the microwave background and large-scale structure are its detector readout. Meanwhile low-energy precision experiments probe heavy new physics indirectly, through virtual contributions in loops, so a table-top apparatus can be sensitive to mass scales no collider will ever reach directly — and that route is cheaper, faster and far more diverse in its failure modes.</p>

    <h3>Reasoning under a drought</h3>
    <p>What do physicists actually do when experiment cannot adjudicate? Four things, in descending order of how defensible they are.</p>
    <ul>
      <li><strong>Internal consistency.</strong> Does the candidate contradict itself? Unitarity, anomaly cancellation, causality and the absence of runaway instabilities are brutal filters, and this is the strongest non-empirical constraint there is.</li>
      <li><strong>Recovery of known physics.</strong> Any successor must reproduce general relativity and the Standard Model in the appropriate limit. This eliminates far more ideas than outside commentary suggests.</li>
      <li><strong>Explanatory unification.</strong> Does one idea account for several previously unrelated facts at once? A real virtue, and historically a good omen. Still not evidence.</li>
      <li><strong>Beauty, elegance and simplicity.</strong> The weakest criterion and the most seductive. It has guided magnificent successes and an enormous number of dead ends, and from the inside there is no way to tell which you are in.</li>
    </ul>
    <p>The risk is specific and worth naming. When no decisive data arrives for decades, criteria meant to be tie-breakers quietly become the decision procedure. A community can spend a generation refining a framework, make real internal progress, and mistake that for progress about the world. But the opposite error is just as real: a rule forbidding work on anything not yet measurable would have strangled atomic theory in the 1890s and the neutrino in 1930, both unmeasurable for decades and both right.</p>
    <div class="callout"><b>The defensible position:</b> non-empirical reasoning is legitimate as a guide to <em>what to work on</em> and illegitimate as grounds for <em>belief</em>. Elegance tells you where to dig. It never tells you what is buried there.</div>

    <h3>Where a surprise could realistically come from</h3>
    <p>A decade-scale view of where the next anomaly might actually appear:</p>
    <ul>
      <li><strong>Cosmology.</strong> Whether dark energy is a true constant or evolves; the disagreement between local and cosmological measurements of the expansion rate; and primordial gravitational waves in the microwave background, which would probe energies far above any collider.</li>
      <li><strong>Neutrinos.</strong> The mass ordering, the absolute mass scale, and above all whether neutrinos are their own antiparticles — arguably the best-motivated single discovery still on the table.</li>
      <li><strong>Low-energy precision.</strong> Electric dipole moments, rare decays, atomic clocks and interferometers, all sensitive to heavy physics through virtual effects.</li>
      <li><strong>Gravitational-wave astronomy.</strong> Ringdown spectroscopy testing whether black holes are exactly as general relativity says, unexpected source populations, stochastic backgrounds.</li>
      <li><strong>Axion searches</strong>, genuinely scanning a motivated window rather than hoping, and capable of solving a category-three and a category-two problem in one stroke.</li>
      <li><strong>Direct tests of whether gravity is quantum</strong>, via gravitationally induced entanglement between small masses. Beyond current capability and interpretively contested, but a serious programme rather than a daydream.</li>
    </ul>
    <p>Notice the pattern: not one of those is a bigger collider. That structural change matters more than any individual result.</p>

    <h3>Where to go from here</h3>
    <p>This module is deliberately a map rather than a treatment. The detail lives elsewhere in the portal.</p>
    <ul>
      <li><strong>Strings, quantum gravity and the frontier</strong> takes the central inconsistency apart technically, then works through string theory, M-theory, the landscape and the falsifiability argument, loop quantum gravity and the other contenders, closing with a problem-by-problem inventory of current status.</li>
      <li><strong>Black holes, horizons and information</strong> handles the information paradox properly, with Hawking radiation, black hole thermodynamics and holography.</li>
      <li><strong>Time, cause and the arrow</strong> covers the arrow of time, the problem of time in quantum gravity, and the case that time is emergent.</li>
      <li><strong>The breakthroughs that changed everything</strong> is the corrective: it shows how past revolutions actually arrived. Almost always from an anomaly nobody ordered, rarely from a beautiful idea pursued ahead of data.</li>
    </ul>
    <div class="callout"><b>The mature take:</b> physics is not nearly finished, and it is not in crisis either. It is in the awkward state of knowing exactly where its foundations crack while lacking the experimental leverage to open them. Distinguish an inconsistency from a missing ingredient from a matter of taste, be honest that the naturalness bet did not pay out, and say plainly that the next revolution will probably arrive from cosmology or precision measurement rather than from a bigger machine. That is how a working physicist talks about the frontier.</div>
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
