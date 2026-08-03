/* ===== TRACK 2: RELATIVITY & THE COSMOS ===== */

addModule({
  id: "sr", track: "relativity", order: 1,
  title: "Special relativity",
  fields: ["relativity"], readMins: 24,
  summary: "One stubborn fact — light's speed is the same for everyone — remakes space and time, merges them into spacetime, and gives E = mc².",
  lesson: `
    <h3>The big picture</h3>
    <p>Special relativity (1905) is what you get when you take one experimental fact absolutely seriously: <strong>the speed of light is the same for every observer</strong>, no matter how fast they are moving. That sounds harmless. It is not. To keep it true, space and time themselves have to stretch and shrink depending on your motion. Einstein's genius was not complicated maths — it was refusing to flinch from where a simple postulate led.</p>

    <h3>The two postulates</h3>
    <ol>
      <li><strong>The laws of physics are the same in all inertial (non-accelerating) frames.</strong> There is no experiment that tells you your absolute velocity; only relative motion is real.</li>
      <li><strong>The speed of light c is the same in all inertial frames.</strong> Chase a light beam at 99% of c and it still recedes from you at exactly c.</li>
    </ol>
    <p>Newton assumed velocities simply add. Postulate 2 says they do not, at least not for light. Something has to give, and what gives is our assumption that time is universal.</p>

    <h3>Time dilation and length contraction</h3>
    <p>If light's speed is fixed for everyone, then observers in relative motion must <strong>disagree about time and distance</strong>. A moving clock ticks slow (<strong>time dilation</strong>); a moving object is shortened along its direction of motion (<strong>length contraction</strong>). The factor governing both is the Lorentz factor:</p>
    <div class="eq">γ = 1 / √(1 − v²/c²)
      <span class="why">At everyday speeds v is tiny compared to c, so γ ≈ 1 and nothing seems to happen. As v approaches c, γ shoots toward infinity — time nearly stops and lengths nearly vanish, as seen from another frame.</span></div>
    <p>This is not an illusion or a measurement error. It is real, and it is tested daily: fast-moving muons created in the upper atmosphere reach the ground only because their internal clocks run slow, and GPS satellites must correct for relativistic time effects or navigation drifts by kilometres a day.</p>
    <div class="callout"><b>The relativity of simultaneity:</b> the deepest and least intuitive consequence. Two events that are simultaneous for one observer are <em>not</em> simultaneous for another moving observer. There is no universal "now" spanning the universe. This, more than time dilation, is what breaks Newton's world.</div>

    <h3>Spacetime: Minkowski's insight</h3>
    <p>Hermann Minkowski saw the real structure: space and time are not separate stages but a single four-dimensional <strong>spacetime</strong>. Different observers slice this spacetime into "space" and "time" differently — like slicing a loaf at different angles — which is why they disagree. But they all agree on one combined measure, the <strong>spacetime interval</strong>, which mixes time and space with a crucial minus sign:</p>
    <div class="eq">(interval)² = (c·Δt)² − (Δx)² − (Δy)² − (Δz)²
      <span class="why">This quantity is the same for all observers. The minus sign is what makes time different from space and gives spacetime its 'causal' structure — the light cone that separates cause from effect.</span></div>

    <h3>E = mc²</h3>
    <p>The most famous equation in science falls straight out of the theory. Mass and energy are the same currency: mass is a hugely concentrated form of energy.</p>
    <div class="eq">E = mc²&nbsp;&nbsp;(and more fully, E² = (mc²)² + (pc)²)
      <span class="why">A tiny mass carries enormous energy because c² is huge. This is the source of the sun's power (fusion) and nuclear energy. The fuller equation also gives massless particles like light real energy and momentum through their momentum p.</span></div>
    <p>It also enforces a cosmic speed limit: to push a massive object to c would take infinite energy, because its effective inertia grows without bound. Nothing carrying information or mass can reach, let alone exceed, the speed of light.</p>
  `,
  keyIdeas: [
    "The speed of light is identical for all observers, regardless of their motion.",
    "To keep c constant, moving clocks run slow (time dilation) and moving lengths contract.",
    "Simultaneity is relative: there is no universal 'now' shared across the universe.",
    "Space and time are one four-dimensional spacetime; observers agree on the invariant spacetime interval.",
    "E = mc² means mass and energy are interchangeable; a little mass is a lot of energy.",
    "Nothing with mass or information can reach the speed of light."
  ],
  talk: {
    oneliners: [
      "Special relativity is one stubborn fact taken seriously: light's speed is the same for everyone, so time and space have to bend to allow it.",
      "Moving clocks run slow and moving rulers shrink — not as an illusion, but really; GPS has to correct for it.",
      "The biggest shock isn't time dilation, it's that 'now' is relative — simultaneous events for me aren't simultaneous for you.",
      "E = mc² just says mass is concentrated energy, and c² is the enormous exchange rate."
    ],
    myths: [
      { m: "Relativity says 'everything is relative'.", t: "Quite the opposite — it's built on absolutes: the speed of light and the spacetime interval are the same for everyone." },
      { m: "Time dilation is just an illusion or a clock malfunction.", t: "It is physically real and measured routinely, from atmospheric muons to atomic clocks on aircraft and satellites." },
      { m: "Nothing can ever travel faster than light, full stop.", t: "Nothing carrying mass or information can; abstract things like the expansion of space or a laser spot's sweep can exceed c without breaking causality." }
    ],
    terms: [
      { term: "Inertial frame", def: "A non-accelerating point of view; all such frames are physically equivalent." },
      { term: "Lorentz factor (γ)", def: "1/√(1−v²/c²); the stretch/shrink factor for time and length at speed v." },
      { term: "Time dilation", def: "A moving clock runs slow relative to a stationary observer." },
      { term: "Length contraction", def: "A moving object is shortened along its direction of motion." },
      { term: "Simultaneity (relativity of)", def: "Whether two separated events happen 'at the same time' depends on the observer." },
      { term: "Spacetime interval", def: "The observer-independent measure combining time and space, with a relative minus sign." }
    ]
  },
  test: [
    { q: "What are the two postulates of special relativity?", a: "1) The laws of physics are the same in all inertial (non-accelerating) frames. 2) The speed of light in vacuum is the same for all inertial observers, independent of the motion of source or observer." },
    { q: "Why do moving clocks run slow?", a: "Because the speed of light is fixed for everyone, keeping c constant across frames in relative motion forces time and distance to transform. The result is that a clock moving relative to you ticks slower by the Lorentz factor γ." },
    { q: "What does the relativity of simultaneity mean?", a: "Two events judged simultaneous by one observer will generally not be simultaneous for another observer moving relative to the first. There is no universal 'now' across space." },
    { q: "What is the physical content of E = mc²?", a: "Mass and energy are equivalent; mass is an extremely dense store of energy, with the conversion factor c². It underlies stellar fusion and nuclear energy, and implies massive objects cannot reach light speed." }
  ],
  resources: [
    { name: "David Tong — Dynamics and Relativity", desc: "Free notes; the special-relativity sections are excellent.", url: "https://www.damtp.cam.ac.uk/user/tong/relativity.html", type: "notes", icon: "📄" },
    { name: "MIT 8.033 — Relativity", desc: "Full undergraduate course on special (and intro general) relativity.", url: "https://ocw.mit.edu/courses/8-033-relativity-fall-2006/", type: "course", icon: "🎓" },
    { name: "Susskind — Special Relativity & Classical Field Theory", desc: "Full lecture course with the spacetime view.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "Feynman Lectures Vol. I (Ch. 15–17)", desc: "Beautifully clear chapters on relativity and spacetime.", url: "https://www.feynmanlectures.caltech.edu/", type: "book", icon: "📚" }
  ]
});

addModule({
  id: "gr", track: "relativity", order: 2,
  title: "General relativity",
  fields: ["relativity"], readMins: 28,
  summary: "Gravity is not a force but the curvature of spacetime. Mass tells spacetime how to bend; spacetime tells matter how to move.",
  lesson: `
    <h3>The big picture</h3>
    <p>General relativity (1915) is Einstein's masterpiece and, many physicists would say, the most beautiful theory in science. Its central claim overturns 250 years of Newton: <strong>gravity is not a force at all</strong>. It is the <em>curvature of spacetime</em>. Matter warps the spacetime around it, and other objects simply follow the straightest available paths through that curved geometry. What we feel as gravity is geometry.</p>

    <h3>The equivalence principle</h3>
    <p>The seed of the whole theory is a simple thought experiment. Einstein realised that standing on Earth feeling gravity is <em>indistinguishable</em> from standing in an accelerating rocket in deep space. Equally, floating in orbit feels exactly like floating in gravity-free space — astronauts are weightless not because there is no gravity up there (there is, almost as much as on the ground) but because they are in free fall. This is the <strong>equivalence principle</strong>: gravity and acceleration are locally the same thing. If that is true, gravity cannot be a normal force; it must be built into the structure of spacetime.</p>
    <div class="callout"><b>The key move:</b> a freely falling object feels no force — it is weightless. So free fall, not rest, is the "natural" state of motion. Objects in free fall are travelling in straight lines; it is spacetime itself that is curved, which makes those straight lines (geodesics) look like the curved arcs of falling and orbiting.</div>

    <h3>Curved spacetime</h3>
    <p>To make this precise, Einstein needed the mathematics of curved geometry (differential geometry, developed by Riemann). A helpful, imperfect analogy: a heavy ball on a stretched rubber sheet dents it, and a marble rolling nearby curves toward the ball — not because the ball pulls it, but because the surface is warped. Real gravity works this way, but in four dimensions, and crucially it is <em>time</em> that is most strongly curved near everyday masses. You fall toward the Earth mainly because your path through <strong>time</strong> is bent toward the massive body.</p>

    <h3>The Einstein field equations</h3>
    <p>The whole theory condenses into one deceptively compact equation:</p>
    <div class="eq">G<sub>μν</sub> = 8πG/c⁴ · T<sub>μν</sub>
      <span class="why">The left side (G, the Einstein tensor) describes the curvature of spacetime. The right side (T, the stress–energy tensor) describes the matter and energy present. The equation says curvature is produced by energy and momentum. In John Wheeler's phrase: matter tells spacetime how to curve; spacetime tells matter how to move.</span></div>
    <p>It is a set of coupled, non-linear equations — fiendish to solve — but a handful of exact solutions changed physics.</p>

    <h3>What it predicts</h3>
    <ul>
      <li><strong>Bending of light:</strong> light follows the curved geometry, so it bends around massive objects. Confirmed dramatically in the 1919 eclipse, which made Einstein world-famous. Today it gives us <em>gravitational lensing</em>.</li>
      <li><strong>Gravitational time dilation:</strong> clocks run slower deeper in a gravitational well. Time literally passes faster for your head than your feet. GPS depends on correcting for this.</li>
      <li><strong>Mercury's orbit:</strong> GR precisely explained a long-standing anomaly in Mercury's precession that Newton could not.</li>
      <li><strong>Black holes:</strong> where spacetime curves so steeply that not even light escapes, bounded by an <em>event horizon</em>. Once science fiction, now photographed (Event Horizon Telescope, 2019).</li>
      <li><strong>Gravitational waves:</strong> ripples in spacetime itself, produced by violent events like merging black holes. Predicted in 1916, directly detected by LIGO in 2015 — a century later.</li>
      <li><strong>An expanding universe:</strong> applied to everything, GR predicts the cosmos cannot be static; it must expand or contract. This launched modern cosmology.</li>
    </ul>

    <h3>Where it breaks</h3>
    <p>General relativity is spectacularly well tested, but it is not the final word. At the centre of a black hole and at the very first instant of the Big Bang, the equations predict a <strong>singularity</strong> — infinite curvature, where the theory breaks down. There, GR collides with quantum mechanics, and we have no working theory of <em>quantum gravity</em> to take over. That unfinished business is one of the great frontiers of physics.</p>
  `,
  keyIdeas: [
    "Gravity is not a force but the curvature of spacetime caused by mass and energy.",
    "The equivalence principle: gravity and acceleration are locally indistinguishable, and free fall feels weightless.",
    "The Einstein field equations link spacetime curvature to the energy and momentum present.",
    "GR predicts light bending, gravitational time dilation, black holes and gravitational waves — all confirmed.",
    "Matter tells spacetime how to curve; spacetime tells matter how to move.",
    "GR breaks down at singularities, where it must give way to an unknown theory of quantum gravity."
  ],
  talk: {
    oneliners: [
      "General relativity's one big idea: gravity isn't a force, it's the shape of spacetime — mass bends it, and things just follow the bends.",
      "The equivalence principle is the seed: standing in gravity feels exactly like accelerating in a rocket, so gravity must be geometry.",
      "You fall to Earth mainly because your path through time is curved, not because something is pulling you.",
      "Black holes and gravitational waves were pure predictions of the maths, confirmed decades later by imaging and by LIGO."
    ],
    myths: [
      { m: "In orbit there's no gravity, so astronauts float.", t: "There's nearly full gravity in orbit; they float because they're in continuous free fall, which the equivalence principle says feels weightless." },
      { m: "The rubber-sheet picture is literally how gravity works.", t: "It's a 2D analogy; real gravity is 4D spacetime curvature, and for slow objects it's the curvature of time that matters most." },
      { m: "Nothing can escape a black hole because gravity 'pulls infinitely hard'.", t: "Inside the event horizon, all future-pointing paths lead inward; it's the geometry of spacetime, not an infinite pulling force." }
    ],
    terms: [
      { term: "Equivalence principle", def: "Gravity and acceleration are locally indistinguishable." },
      { term: "Geodesic", def: "The straightest possible path through curved spacetime; what free-falling objects follow." },
      { term: "Spacetime curvature", def: "The bending of spacetime geometry by energy and momentum." },
      { term: "Event horizon", def: "The boundary of a black hole from within which nothing can escape." },
      { term: "Gravitational waves", def: "Ripples in spacetime from accelerating masses, detected by LIGO." },
      { term: "Singularity", def: "A point of infinite curvature where general relativity breaks down." }
    ]
  },
  test: [
    { q: "What is the core idea of general relativity?", a: "Gravity is not a force but the curvature of four-dimensional spacetime. Mass and energy curve spacetime, and objects follow the straightest available paths (geodesics) through that curved geometry." },
    { q: "State the equivalence principle and why it matters.", a: "Locally, the effects of gravity are indistinguishable from acceleration (and free fall is indistinguishable from being in gravity-free space). This implies gravity is not a conventional force but a feature of spacetime geometry — the foundation of GR." },
    { q: "Name three confirmed predictions of GR.", a: "Any three of: the bending of starlight by the Sun (1919 eclipse), gravitational time dilation (used in GPS), the anomalous precession of Mercury, black holes (imaged in 2019), and gravitational waves (LIGO, 2015)." },
    { q: "Where and why does general relativity break down?", a: "At singularities — the centres of black holes and the initial Big Bang — where curvature becomes infinite. There the classical theory fails and a quantum theory of gravity, which we do not yet have, is needed." }
  ],
  resources: [
    { name: "David Tong — General Relativity", desc: "Graduate-level free notes; rigorous and clear.", url: "https://www.damtp.cam.ac.uk/user/tong/gr.html", type: "notes", icon: "📄" },
    { name: "Sean Carroll — Lecture Notes on General Relativity", desc: "The classic free notes that became his textbook.", url: "https://arxiv.org/abs/gr-qc/9712019", type: "notes", icon: "📄" },
    { name: "MIT 8.962 — General Relativity", desc: "Full graduate course with video and problem sets.", url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/", type: "course", icon: "🎓" },
    { name: "Susskind — General Relativity", desc: "Accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" }
  ]
});

addModule({
  id: "cosmo", track: "relativity", order: 3,
  title: "Cosmology",
  fields: ["cosmology"], readMins: 24,
  summary: "The universe as a whole: the Big Bang, cosmic expansion, the microwave background, inflation, and the dark sector that dominates everything.",
  lesson: `
    <h3>The big picture</h3>
    <p>Cosmology is physics at the largest possible scale: the origin, structure and fate of the entire universe. What makes it remarkable is that it is now a <strong>precision science</strong>. A century ago the size and age of the cosmos were unknown; today we know its age to better than 1% (about 13.8 billion years) and have a detailed, tested history reaching back to a fraction of a second after the beginning.</p>

    <h3>The expanding universe</h3>
    <p>In the 1920s Edwin Hubble found that distant galaxies are almost all moving away from us, and the farther they are, the faster they recede. The universe is <strong>expanding</strong>. The crucial subtlety: galaxies are not flying apart <em>through</em> space; rather, <strong>space itself is stretching</strong>, carrying galaxies with it. Run the expansion backwards and everything was once compressed into an unimaginably hot, dense state — the <strong>Big Bang</strong>.</p>
    <div class="callout"><b>Common misunderstanding:</b> the Big Bang was not an explosion at a point in pre-existing space. It happened everywhere at once, because space itself was what expanded. There is no centre and no edge, and no "outside" it expanded into.</div>

    <h3>The evidence</h3>
    <ul>
      <li><strong>The cosmic microwave background (CMB):</strong> the afterglow of the hot early universe, released about 380,000 years after the Big Bang when the cosmos cooled enough for atoms to form and light to travel freely. It fills the whole sky as faint microwave radiation at 2.7 degrees above absolute zero, and its tiny temperature ripples are our baby photo of the universe. This is arguably the single strongest piece of evidence in all of cosmology.</li>
      <li><strong>Big Bang nucleosynthesis:</strong> in the first few minutes the universe was hot enough to fuse hydrogen into helium and traces of lithium. The predicted proportions (about 75% hydrogen, 25% helium) match observations precisely.</li>
      <li><strong>Large-scale structure:</strong> galaxies are arranged in a vast cosmic web of filaments and voids that grew, under gravity, from the tiny density ripples seen in the CMB.</li>
    </ul>

    <h3>Inflation</h3>
    <p>The standard Big Bang left puzzles: why is the universe so uniform in every direction, and so precisely flat? The leading answer is <strong>cosmic inflation</strong>: in the first tiny fraction of a second, the universe underwent a burst of exponential expansion, blowing a microscopic patch up to cosmic scale. This smooths out the universe, explains its flatness, and — beautifully — predicts that quantum fluctuations were stretched to become the seeds of all later structure. Those seeds are exactly the ripples we see in the CMB.</p>

    <h3>The dark sector</h3>
    <p>Here is cosmology's most humbling result: everything we can see — every star, planet, and glowing cloud of gas — is only about <strong>5% of the universe</strong>. The rest is dark and unknown:</p>
    <ul>
      <li><strong>Dark matter (~27%):</strong> invisible matter that neither emits nor absorbs light but has gravity. We infer it from how fast galaxies rotate, how they cluster, and how they bend light. It is not ordinary matter; the leading candidate is some undiscovered particle. We know it is there; we do not know what it is.</li>
      <li><strong>Dark energy (~68%):</strong> a mysterious energy of empty space that is <em>accelerating</em> the expansion of the universe, discovered in 1998. It behaves like Einstein's old "cosmological constant". Explaining it is one of the deepest unsolved problems in physics.</li>
    </ul>
    <div class="callout"><b>The sobering summary:</b> the "standard model of cosmology" (called ΛCDM) fits the data superbly, yet 95% of what it describes — dark matter and dark energy — is stuff we cannot identify. Modern cosmology is precise and deeply mysterious at the same time.</div>

    <h3>The fate of the universe</h3>
    <p>With dark energy driving accelerating expansion, the likeliest future is a cold one: galaxies drift ever farther apart, stars burn out, and the universe fades toward a dark, dilute, near-empty state — the "heat death". But because dark energy is so poorly understood, the ultimate fate is not settled.</p>
  `,
  keyIdeas: [
    "The universe is expanding — space itself stretches — and was once hot and dense: the Big Bang, about 13.8 billion years ago.",
    "The cosmic microwave background is the afterglow of the early universe and our strongest cosmological evidence.",
    "Big Bang nucleosynthesis correctly predicts the cosmic abundances of hydrogen and helium.",
    "Inflation, a burst of early exponential expansion, explains the universe's uniformity and flatness and seeds its structure.",
    "About 27% of the universe is unknown dark matter and about 68% is dark energy; ordinary matter is only ~5%.",
    "Dark energy is accelerating the expansion, pointing toward a cold long-term fate."
  ],
  talk: {
    oneliners: [
      "The Big Bang wasn't an explosion in space — it was space itself beginning to expand, everywhere at once.",
      "The cosmic microwave background is the universe's baby photo: leftover heat from 380,000 years after the beginning, filling the whole sky.",
      "Only about 5% of the universe is stuff we understand; 95% is dark matter and dark energy we can measure but can't identify.",
      "Dark energy is speeding the expansion up, which likely means a cold, empty far future rather than a big crunch."
    ],
    myths: [
      { m: "The Big Bang was an explosion that happened at one point.", t: "It happened everywhere simultaneously; space itself expanded, so there is no centre and no edge." },
      { m: "Galaxies are flying through space away from us.", t: "Space between galaxies is stretching, carrying them apart; distant ones can recede faster than light without violating relativity." },
      { m: "Dark matter is just stuff too faint to see.", t: "Its total gravity far exceeds all possible faint ordinary matter; it appears to be a genuinely new, non-luminous kind of matter." }
    ],
    terms: [
      { term: "Big Bang", def: "The hot, dense early state from which the expanding universe emerged ~13.8 billion years ago." },
      { term: "Cosmic microwave background (CMB)", def: "The relic radiation from when the universe first became transparent." },
      { term: "Inflation", def: "A brief episode of exponential expansion in the first instant, explaining uniformity and flatness." },
      { term: "Dark matter", def: "Unseen matter inferred from gravity; ~27% of the universe, composition unknown." },
      { term: "Dark energy", def: "The energy of space driving accelerating expansion; ~68% of the universe." },
      { term: "ΛCDM", def: "The standard cosmological model: dark energy (Λ) plus cold dark matter." }
    ]
  },
  test: [
    { q: "Why is it wrong to picture the Big Bang as an explosion at a point?", a: "The Big Bang was the expansion of space itself, occurring everywhere at once. There was no pre-existing space to explode into, no centre and no edge; every point sees everything receding from it." },
    { q: "What is the cosmic microwave background and why does it matter?", a: "It is the relic radiation released ~380,000 years after the Big Bang when atoms first formed and light could travel freely. Now cooled to about 2.7 K, its faint temperature ripples encode the early universe and are the strongest evidence for the hot Big Bang." },
    { q: "What does cosmic inflation explain?", a: "A burst of exponential expansion in the first fraction of a second explains why the universe is so uniform in all directions and so nearly flat, and it stretches quantum fluctuations into the density seeds that grew into galaxies." },
    { q: "What are dark matter and dark energy, roughly, and how much of the universe are they?", a: "Dark matter (~27%) is unseen matter known only through its gravity, of unknown composition. Dark energy (~68%) is an energy of space accelerating the expansion. Ordinary visible matter is only about 5%." }
  ],
  resources: [
    { name: "David Tong — Cosmology", desc: "Free graduate notes on the expanding universe and the CMB.", url: "https://www.damtp.cam.ac.uk/user/tong/cosmo.html", type: "notes", icon: "📄" },
    { name: "Susskind — Cosmology", desc: "Full accessible lecture course in the Theoretical Minimum series.", url: "https://theoreticalminimum.com/courses", type: "video", icon: "▶️" },
    { name: "ESA Planck — the CMB explained", desc: "The definitive CMB maps and what they tell us.", url: "https://www.esa.int/Science_Exploration/Space_Science/Planck", type: "web", icon: "🌐" },
    { name: "PBS Space Time (YouTube)", desc: "Rigorous, accessible episodes on cosmology and the dark sector.", url: "https://www.youtube.com/c/pbsspacetime", type: "video", icon: "▶️" }
  ]
});
