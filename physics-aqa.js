/* AQA A-level Physics 7408: Year 12 lessons */
{
const F = window.fr;
const U1 = 'Measurements and their errors', U2 = 'Particles and radiation', U3 = 'Waves', U4 = 'Mechanics and materials', U5 = 'Electricity';
window.GR.lessons['aqa-physics'] = [

{id: 'si-units', u: U1, y: 12, p: 'Papers 1 to 3', t: `SI units, prefixes and estimation`,
body: `<p>Every quantity in physics is a number times a unit. The seven SI base units are the kilogram (kg), metre (m), second (s), ampere (A), kelvin (K), mole (mol) and candela (cd). AQA examines the first six. Every other unit is <b>derived</b> from these: a newton is kg m s<sup>−2</sup> because <i class="v">F</i> = <i class="v">ma</i>.</p>
<p>Prefixes scale a unit by powers of ten. Learn them from pico to tera: p 10<sup>−12</sup>, n 10<sup>−9</sup>, μ 10<sup>−6</sup>, m 10<sup>−3</sup>, c 10<sup>−2</sup>, k 10<sup>3</sup>, M 10<sup>6</sup>, G 10<sup>9</sup>, T 10<sup>12</sup>. Always convert to base units before you put numbers into an equation.</p>
<p><b>Homogeneity:</b> both sides of a correct equation must have the same base units. This lets you check an equation or find the unit of a constant.</p>
<p><b>Estimation</b> questions want an order of magnitude. Pick sensible values (a person is about 70 kg, a car about 1000 kg, a step about 0.2 m high), show them, and give the answer to one or two significant figures.</p>`,
eq: [[`1 eV = 1.60 × 10<sup>−19</sup> J`, `electronvolt to joules`], [`1 kWh = 3.6 × 10<sup>6</sup> J`, `kilowatt-hour to joules`]],
ex: {q: `Show that the watt can be written in SI base units as kg m<sup>2</sup> s<sup>−3</sup>.`,
s: [`Power is energy per unit time, so W = J s<sup>−1</sup>.`, `Work done is force times distance, so J = N m.`, `Force is mass times acceleration, so N = kg m s<sup>−2</sup>.`, `Combine: W = (kg m s<sup>−2</sup>)(m)(s<sup>−1</sup>).`],
a: `W = kg m<sup>2</sup> s<sup>−3</sup>`},
quiz: [
 {q: `A wavelength is 350 nm. What is it in metres?`, o: [`3.5 × 10<sup>−7</sup> m`, `3.5 × 10<sup>−6</sup> m`, `3.5 × 10<sup>−9</sup> m`, `3.5 × 10<sup>−10</sup> m`], a: 0, why: `nano means 10<sup>−9</sup>, so 350 × 10<sup>−9</sup> m = 3.5 × 10<sup>−7</sup> m.`},
 {q: `Which of these is an SI base unit?`, o: [`newton`, `coulomb`, `ampere`, `volt`], a: 2, why: `The ampere is a base unit. The coulomb is derived: 1 C = 1 A s.`},
 {q: `What are the base units of momentum?`, o: [`kg m s<sup>−2</sup>`, `kg m s<sup>−1</sup>`, `kg m<sup>2</sup> s<sup>−1</sup>`, `N s<sup>−1</sup>`], a: 1, why: `Momentum is mass times velocity: kg × m s<sup>−1</sup>.`}],
exam: {m: 3, q: `Estimate the kinetic energy of a sprinter running at top speed. Show your estimates clearly.`,
ms: [`Sensible mass stated, 60 to 90 kg <span class="mk">[1]</span>`, `Sensible top speed stated, 8 to 12 m s<sup>−1</sup> <span class="mk">[1]</span>`, `Uses ½<i>mv</i><sup>2</sup> to get an answer of order 10<sup>3</sup> J, for example 70 kg at 10 m s<sup>−1</sup> gives 3500 J <span class="mk">[1]</span>`]}},

{id: 'uncertainty', u: U1, y: 12, p: 'Papers 1 to 3', t: `Errors and uncertainties`,
body: `<p><b>Random errors</b> scatter readings either side of the true value. Reduce their effect by repeating and averaging. <b>Systematic errors</b> shift every reading the same way, for example a zero error on a micrometer. Repeating does not help; you must correct the method or the instrument.</p>
<p><b>Precision</b> means repeated readings are close together. <b>Accuracy</b> means the result is close to the true value. A reading can be precise but inaccurate if there is a systematic error.</p>
<p>The <b>absolute uncertainty</b> of a single reading is usually ± half the smallest division, or ± the resolution for a digital meter. For repeated readings use half the range. <b>Percentage uncertainty</b> is the absolute uncertainty divided by the value, times 100.</p>
<ul><li>Adding or subtracting: add the absolute uncertainties.</li><li>Multiplying or dividing: add the percentage uncertainties.</li><li>Raising to a power: multiply the percentage uncertainty by the power.</li></ul>
<p>On a graph, draw error bars and both the line of best fit and the steepest or shallowest line that still passes through all bars. The uncertainty in the gradient is the difference between them.</p>`,
eq: [[`% uncertainty = ${F('absolute uncertainty', 'value')} × 100`, `for any measured quantity`], [`%(<i>x</i><sup>n</sup>) = <i>n</i> × %(<i>x</i>)`, `powers multiply the percentage`]],
ex: {q: `A sheet is measured as 25.0 ± 0.1 cm long and 12.0 ± 0.2 cm wide. Find its area with an absolute uncertainty.`,
s: [`Area = 25.0 × 12.0 = 300 cm<sup>2</sup>.`, `Percentage uncertainties: 0.1 / 25.0 = 0.4% and 0.2 / 12.0 = 1.7%.`, `Multiplying, so add them: 0.4% + 1.7% = 2.1%.`, `Absolute uncertainty = 2.1% of 300 = 6.3 cm<sup>2</sup>, rounded to 6 cm<sup>2</sup>.`],
a: `Area = 300 ± 6 cm<sup>2</sup>`},
quiz: [
 {q: `A stopwatch always starts 0.2 s late. This is`, o: [`a random error`, `a systematic error`, `a zero uncertainty`, `a parallax error`], a: 1, why: `Every reading is shifted by the same amount, so it is systematic.`},
 {q: `The radius of a wire has 2% uncertainty. What is the uncertainty in its cross-sectional area?`, o: [`1%`, `2%`, `4%`, `8%`], a: 2, why: `<i>A</i> = π<i>r</i><sup>2</sup>, so double the percentage: 2 × 2% = 4%.`},
 {q: `Repeat readings are 4.2, 4.4, 4.3 and 4.5 s. The uncertainty in the mean is about`, o: [`± 0.05 s`, `± 0.15 s`, `± 0.3 s`, `± 0.5 s`], a: 1, why: `Half the range: (4.5 − 4.2) / 2 = 0.15 s.`}],
exam: {m: 3, q: `A student measures the diameter of a ball bearing as 8.00 mm with a micrometer of resolution 0.01 mm. Calculate the percentage uncertainty in the volume of the ball bearing.`,
ms: [`Percentage uncertainty in diameter = 0.01 / 8.00 × 100 = 0.125% <span class="mk">[1]</span>`, `Volume depends on <i>d</i><sup>3</sup> so multiply by 3 <span class="mk">[1]</span>`, `0.375%, accept 0.4% <span class="mk">[1]</span>`]}},

{id: 'atom', u: U2, y: 12, p: 'Paper 1', t: `Constituents of the atom and specific charge`,
body: `<p>An atom has a tiny nucleus of protons and neutrons (nucleons) with electrons around it. A proton has charge +1.60 × 10<sup>−19</sup> C, an electron −1.60 × 10<sup>−19</sup> C, and a neutron is neutral. Protons and neutrons each have a mass of about 1.67 × 10<sup>−27</sup> kg; an electron is about 1/1840 of that.</p>
<p>A nuclide is written <sup>A</sup><sub>Z</sub>X, where <i class="v">Z</i> is the proton number and <i class="v">A</i> the nucleon number. <b>Isotopes</b> have the same <i class="v">Z</i> but different numbers of neutrons, so the same chemistry but different nuclear stability.</p>
<p><b>Specific charge</b> is charge divided by mass, in C kg<sup>−1</sup>. The electron has the largest specific charge of any particle you meet at A-level, 1.76 × 10<sup>11</sup> C kg<sup>−1</sup>.</p>
<p>The <b>strong nuclear force</b> holds the nucleus together. It is attractive from about 0.5 fm to 3 fm and repulsive below 0.5 fm, so nucleons do not collapse into each other. Unstable nuclei decay: α emission for large nuclei, β<sup>−</sup> for neutron-rich nuclei.</p>`,
eq: [[`specific charge = ${F('<i>Q</i>', '<i>m</i>')}`, `C kg<sup>−1</sup>`], [`<sup>A</sup><sub>Z</sub>X → <sup>A−4</sup><sub>Z−2</sub>Y + <sup>4</sup><sub>2</sub>α`, `alpha decay`], [`<sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z+1</sub>Y + β<sup>−</sup> + ν̄<sub>e</sub>`, `beta-minus decay`]],
ex: {q: `Calculate the specific charge of a carbon-14 nucleus, <sup>14</sup><sub>6</sub>C.`,
s: [`It has 6 protons and 8 neutrons.`, `Charge = 6 × 1.60 × 10<sup>−19</sup> = 9.60 × 10<sup>−19</sup> C.`, `Mass ≈ 14 × 1.67 × 10<sup>−27</sup> = 2.34 × 10<sup>−26</sup> kg.`, `Specific charge = 9.60 × 10<sup>−19</sup> / 2.34 × 10<sup>−26</sup>.`],
a: `4.1 × 10<sup>7</sup> C kg<sup>−1</sup>`},
quiz: [
 {q: `How many neutrons are in <sup>235</sup><sub>92</sub>U?`, o: [`92`, `143`, `235`, `327`], a: 1, why: `235 − 92 = 143.`},
 {q: `Isotopes of an element have`, o: [`the same nucleon number`, `the same number of neutrons`, `the same proton number`, `the same mass`], a: 2, why: `Same element means same proton number; the neutron number differs.`},
 {q: `At a separation of 0.3 fm the strong force between two nucleons is`, o: [`attractive`, `repulsive`, `zero`, `the same as gravity`], a: 1, why: `Below about 0.5 fm the strong force is repulsive.`}],
exam: {m: 3, q: `Radium-226 (<i>Z</i> = 88) decays by alpha emission to radon. Write the decay equation and state one reason why the specific charge of the alpha particle is smaller than that of a proton.`,
ms: [`<sup>226</sup><sub>88</sub>Ra → <sup>222</sup><sub>86</sub>Rn + <sup>4</sup><sub>2</sub>α, correct nucleon numbers <span class="mk">[1]</span>`, `Correct proton numbers <span class="mk">[1]</span>`, `Alpha has twice the charge but about four times the mass of a proton <span class="mk">[1]</span>`]}},

{id: 'antiparticles', u: U2, y: 12, p: 'Paper 1', t: `Photons, antiparticles, pair production and annihilation`,
body: `<p>Electromagnetic radiation comes in packets called <b>photons</b>. Each photon has energy <i class="v">E</i> = <i class="v">hf</i> = <i class="v">hc</i>/λ.</p>
<p>Every particle has an <b>antiparticle</b> with the same rest energy but opposite charge, baryon number and lepton number. The positron e<sup>+</sup> is the antielectron, the antiproton p̄ has charge −1.</p>
<p><b>Pair production:</b> a photon with enough energy becomes a particle and its antiparticle, usually near a nucleus that takes some momentum. The minimum photon energy is twice the rest energy of the particle.</p>
<p><b>Annihilation:</b> a particle and its antiparticle meet and their mass turns into two photons. Two photons are needed so that momentum is conserved. This is how PET scanners detect positrons.</p>
<p>Rest energies are given in MeV in the data booklet: electron 0.511 MeV, proton 938 MeV. Convert using 1 MeV = 1.60 × 10<sup>−13</sup> J.</p>`,
eq: [[`<i>E</i> = <i>hf</i> = ${F('<i>hc</i>', 'λ')}`, `photon energy, <i>h</i> = 6.63 × 10<sup>−34</sup> J s`], [`<i>E</i><sub>min</sub> = 2<i>E</i><sub>0</sub>`, `pair production threshold`], [`<i>hf</i><sub>min</sub> = <i>E</i><sub>0</sub>`, `each photon from annihilation at rest`]],
ex: {q: `An electron and a positron, both at rest, annihilate. Find the frequency of each photon produced.`,
s: [`Two photons share 2 × 0.511 MeV, so each has 0.511 MeV.`, `Convert: 0.511 × 10<sup>6</sup> × 1.60 × 10<sup>−19</sup> = 8.18 × 10<sup>−14</sup> J.`, `<i>f</i> = <i>E</i> / <i>h</i> = 8.18 × 10<sup>−14</sup> / 6.63 × 10<sup>−34</sup>.`],
a: `<i>f</i> = 1.23 × 10<sup>20</sup> Hz`},
quiz: [
 {q: `Why does annihilation produce two photons, not one?`, o: [`To conserve charge`, `To conserve momentum`, `To conserve baryon number`, `Because photons are massless`], a: 1, why: `The pair has zero total momentum, so two photons must travel in opposite directions.`},
 {q: `Minimum photon energy to produce a proton–antiproton pair:`, o: [`469 MeV`, `938 MeV`, `1876 MeV`, `1.02 MeV`], a: 2, why: `2 × 938 MeV = 1876 MeV.`},
 {q: `Which property is the same for a particle and its antiparticle?`, o: [`charge`, `baryon number`, `rest energy`, `lepton number`], a: 2, why: `Rest energy and mass are identical; the quantum numbers are opposite.`}],
exam: {m: 3, q: `A gamma photon of energy 1.20 MeV passes close to a nucleus and produces an electron–positron pair. Calculate the total kinetic energy of the pair in joules.`,
ms: [`Energy used for rest mass = 2 × 0.511 = 1.022 MeV <span class="mk">[1]</span>`, `Kinetic energy = 1.20 − 1.022 = 0.178 MeV <span class="mk">[1]</span>`, `0.178 × 1.60 × 10<sup>−13</sup> = 2.85 × 10<sup>−14</sup> J <span class="mk">[1]</span>`]}},

{id: 'quarks', u: U2, y: 12, p: 'Paper 1', t: `Classifying particles and quarks`,
body: `<p><b>Hadrons</b> feel the strong force and are made of quarks. <b>Baryons</b> are three quarks (proton uud, neutron udd), <b>antibaryons</b> three antiquarks, and <b>mesons</b> a quark and an antiquark. The pions (π<sup>+</sup> = ud̄, π<sup>0</sup>, π<sup>−</sup> = ūd) and kaons (which contain a strange quark) are the mesons on the specification.</p>
<p><b>Leptons</b> do not feel the strong force: the electron, muon and their neutrinos. They are fundamental, with no smaller parts.</p>
<p>Quark properties: up has charge +2/3, down −1/3, strange −1/3. Each quark has baryon number +1/3. Strangeness is −1 for the strange quark and +1 for the anti-strange.</p>
<p>The proton is the only stable baryon; all others eventually decay into it. Kaons decay into pions, and pions into muons or photons. Strange particles are produced in pairs by the strong interaction but decay through the weak interaction, which is why they live relatively long.</p>`,
eq: [[`u: +⅔<i>e</i>, d: −⅓<i>e</i>, s: −⅓<i>e</i>`, `quark charges`], [`<i>B</i> = +⅓ per quark`, `so baryons have <i>B</i> = 1, mesons <i>B</i> = 0`], [`<i>S</i>(s) = −1, <i>S</i>(s̄) = +1`, `strangeness`]],
ex: {q: `The Σ<sup>+</sup> baryon has quark content uus. Find its charge, baryon number and strangeness.`,
s: [`Charge = +⅔ + ⅔ − ⅓ = +1.`, `Baryon number = ⅓ + ⅓ + ⅓ = 1.`, `It contains one strange quark, so strangeness = −1.`],
a: `<i>Q</i> = +1, <i>B</i> = 1, <i>S</i> = −1`},
quiz: [
 {q: `A K<sup>+</sup> meson has quark content`, o: [`us̄`, `ūs`, `ud̄`, `uus`], a: 0, why: `K<sup>+</sup> = us̄: charge +⅔ + ⅓ = +1, strangeness +1.`},
 {q: `Which particle is a lepton?`, o: [`pion`, `muon`, `neutron`, `kaon`], a: 1, why: `The muon does not feel the strong force and is fundamental.`},
 {q: `The only stable baryon is the`, o: [`neutron`, `pion`, `proton`, `Σ<sup>0</sup>`], a: 2, why: `Free neutrons decay in about 15 minutes; the proton is stable.`}],
exam: {m: 3, q: `State the quark content of a neutron and explain why the neutron is a hadron but the electron is not.`,
ms: [`udd <span class="mk">[1]</span>`, `Neutron is made of quarks so feels the strong interaction <span class="mk">[1]</span>`, `Electron is a fundamental lepton and does not feel the strong interaction <span class="mk">[1]</span>`]}},

{id: 'interactions', u: U2, y: 12, p: 'Paper 1', t: `Particle interactions and conservation laws`,
body: `<p>Forces act through <b>exchange particles</b>. The electromagnetic force uses virtual photons, the weak interaction uses W<sup>+</sup> and W<sup>−</sup> bosons, and the strong force between nucleons uses pions.</p>
<p>The <b>weak interaction</b> is the only one that changes quark type. In β<sup>−</sup> decay a down quark becomes an up quark (n → p + e<sup>−</sup> + ν̄<sub>e</sub>) via a W<sup>−</sup>. In β<sup>+</sup> decay and electron capture, an up quark becomes down via a W<sup>+</sup>.</p>
<p>Every interaction conserves <b>charge</b>, <b>baryon number</b>, <b>lepton number</b> (electron and muon numbers separately) and energy and momentum. <b>Strangeness</b> is conserved in strong interactions but can change by 0 or ±1 in weak ones.</p>
<p>Draw Feynman diagrams with particles as lines, the exchange particle as a wavy line between them, and time running up the page. Check the charge at each vertex.</p>`,
eq: [[`n → p + e<sup>−</sup> + ν̄<sub>e</sub>`, `β<sup>−</sup> decay, d → u`], [`p → n + e<sup>+</sup> + ν<sub>e</sub>`, `β<sup>+</sup> decay inside a nucleus`], [`p + e<sup>−</sup> → n + ν<sub>e</sub>`, `electron capture`]],
ex: {q: `Is the reaction p + π<sup>−</sup> → n + π<sup>0</sup> possible?`,
s: [`Charge: +1 − 1 = 0 on the left, 0 + 0 = 0 on the right. Conserved.`, `Baryon number: 1 + 0 = 1 on the left, 1 + 0 = 1 on the right. Conserved.`, `Lepton number: 0 on both sides. Conserved.`, `Strangeness: 0 on both sides, so it can go by the strong interaction.`],
a: `Yes, every conservation law is satisfied.`},
quiz: [
 {q: `Which exchange particle acts in β<sup>−</sup> decay?`, o: [`photon`, `W<sup>+</sup>`, `W<sup>−</sup>`, `pion`], a: 2, why: `d → u + W<sup>−</sup>, then W<sup>−</sup> → e<sup>−</sup> + ν̄<sub>e</sub>.`},
 {q: `Why is p → n + e<sup>+</sup> + ν̄<sub>e</sub> impossible?`, o: [`charge is not conserved`, `baryon number is not conserved`, `lepton number is not conserved`, `strangeness changes`], a: 2, why: `e<sup>+</sup> has <i>L</i> = −1 and ν̄<sub>e</sub> has <i>L</i> = −1, total −2 instead of 0.`},
 {q: `Strangeness can change in`, o: [`strong interactions only`, `weak interactions only`, `all interactions`, `no interactions`], a: 1, why: `Only the weak interaction changes quark flavour.`}],
exam: {m: 4, q: `Draw a Feynman diagram for electron capture and name the exchange particle. Show that lepton number is conserved.`,
ms: [`Proton and electron lines in, neutron and neutrino lines out <span class="mk">[1]</span>`, `W<sup>+</sup> exchanged from proton side to electron side (or W<sup>−</sup> the other way) <span class="mk">[1]</span>`, `Names W boson correctly <span class="mk">[1]</span>`, `<i>L</i>: 0 + 1 = 0 + 1 <span class="mk">[1]</span>`]}},

{id: 'photoelectric', u: U2, y: 12, p: 'Paper 1', t: `The photoelectric effect`,
body: `<p>Shining ultraviolet light on a clean metal surface can release electrons. Three observations cannot be explained by waves:</p>
<ul><li>No electrons are emitted below a <b>threshold frequency</b>, however bright the light.</li><li>Emission is instant.</li><li>The maximum kinetic energy of the electrons depends on frequency, not intensity.</li></ul>
<p>Einstein's explanation: light arrives as photons, and one photon gives all its energy to one electron. The electron needs at least the <b>work function</b> φ to escape. Whatever is left over is kinetic energy. A brighter light means more photons per second, so more electrons per second, but not faster ones.</p>
<p>The <b>stopping potential</b> <i class="v">V</i><sub>s</sub> is the voltage needed to stop the fastest electrons: <i class="v">eV</i><sub>s</sub> = <i class="v">E</i><sub>k(max)</sub>. A graph of <i class="v">E</i><sub>k(max)</sub> against <i class="v">f</i> is a straight line with gradient <i class="v">h</i> and <i class="v">y</i>-intercept −φ.</p>`,
eq: [[`<i>hf</i> = φ + <i>E</i><sub>k(max)</sub>`, `photoelectric equation`], [`φ = <i>hf</i><sub>0</sub>`, `threshold frequency`], [`<i>eV</i><sub>s</sub> = <i>E</i><sub>k(max)</sub>`, `stopping potential`]],
ex: {q: `Light of wavelength 250 nm falls on zinc, work function 4.3 eV. Find the stopping potential.`,
s: [`Photon energy <i>E</i> = <i>hc</i>/λ = 6.63 × 10<sup>−34</sup> × 3.00 × 10<sup>8</sup> / 250 × 10<sup>−9</sup> = 7.96 × 10<sup>−19</sup> J.`, `In electronvolts: 7.96 × 10<sup>−19</sup> / 1.60 × 10<sup>−19</sup> = 4.97 eV.`, `<i>E</i><sub>k(max)</sub> = 4.97 − 4.3 = 0.67 eV.`, `Stopping potential in volts equals <i>E</i><sub>k(max)</sub> in eV.`],
a: `<i>V</i><sub>s</sub> ≈ 0.67 V`},
quiz: [
 {q: `Doubling the intensity of light above the threshold frequency`, o: [`doubles <i>E</i><sub>k(max)</sub>`, `doubles the number of electrons per second`, `halves the work function`, `has no effect`], a: 1, why: `Twice as many photons per second release twice as many electrons, each with the same maximum energy.`},
 {q: `On a graph of <i>E</i><sub>k(max)</sub> against <i>f</i>, the gradient is`, o: [`φ`, `<i>e</i>`, `<i>h</i>`, `<i>f</i><sub>0</sub>`], a: 2, why: `Rearrange: <i>E</i><sub>k(max)</sub> = <i>hf</i> − φ.`},
 {q: `A metal has φ = 2.0 eV. Will 700 nm light (1.78 eV photons) release electrons?`, o: [`Yes, if bright enough`, `No`, `Yes, slowly`, `Only from the surface`], a: 1, why: `Each photon has less energy than the work function, so no single electron gets enough.`}],
exam: {m: 4, q: `Explain why the wave model of light cannot account for the existence of a threshold frequency, and how the photon model does.`,
ms: [`Wave model: energy delivered continuously, so any frequency should eventually free electrons if intense or long enough <span class="mk">[1]</span>`, `Photon model: energy comes in packets <i>E</i> = <i>hf</i> <span class="mk">[1]</span>`, `One photon is absorbed by one electron <span class="mk">[1]</span>`, `If <i>hf</i> < φ no electron gains enough energy to escape, whatever the intensity <span class="mk">[1]</span>`]}},

{id: 'energy-levels', u: U2, y: 12, p: 'Paper 1', t: `Energy levels and line spectra`,
body: `<p>Electrons in atoms can only have certain energies, called <b>energy levels</b>. The lowest is the ground state. Levels are given as negative values in eV because 0 eV means the electron has just escaped (ionisation).</p>
<p><b>Excitation:</b> an electron moves up when it absorbs exactly the right energy from a photon, or any energy at least equal to the gap from a colliding free electron. <b>De-excitation:</b> it drops back and emits a photon with energy equal to the gap.</p>
<p>Because the gaps are fixed, each element gives a <b>line emission spectrum</b> of sharp colours. A cool gas in front of a white source gives an <b>absorption spectrum</b>: dark lines at the same wavelengths.</p>
<p>A <b>fluorescent tube</b> uses this twice. Mercury atoms excited by collisions emit UV photons; the phosphor coating absorbs UV and cascades down in smaller steps, emitting visible light.</p>`,
eq: [[`Δ<i>E</i> = <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub> = <i>hf</i>`, `photon from a transition`], [`ionisation energy = |ground state energy|`, `for example 13.6 eV for hydrogen`]],
ex: {q: `In hydrogen, the n = 3 level is −1.51 eV and n = 2 is −3.40 eV. Find the wavelength emitted in the 3 → 2 transition.`,
s: [`Δ<i>E</i> = −1.51 − (−3.40) = 1.89 eV.`, `In joules: 1.89 × 1.60 × 10<sup>−19</sup> = 3.02 × 10<sup>−19</sup> J.`, `λ = <i>hc</i>/Δ<i>E</i> = 1.99 × 10<sup>−25</sup> / 3.02 × 10<sup>−19</sup>.`],
a: `λ ≈ 658 nm, red light`},
quiz: [
 {q: `An electron drops from −0.85 eV to −3.40 eV. Photon energy?`, o: [`0.85 eV`, `2.55 eV`, `3.40 eV`, `4.25 eV`], a: 1, why: `−0.85 − (−3.40) = 2.55 eV.`},
 {q: `Why are energy levels negative?`, o: [`Electrons have negative charge`, `Zero is defined as the ionised state`, `Atoms lose energy`, `It is a convention for photons`], a: 1, why: `Energy must be added to reach 0 eV, the point where the electron is free.`},
 {q: `In a fluorescent tube the phosphor`, o: [`emits UV`, `absorbs visible light`, `absorbs UV and emits visible light`, `ionises mercury`], a: 2, why: `Absorbing high-energy UV and de-exciting in smaller steps gives visible photons.`}],
exam: {m: 3, q: `A free electron with kinetic energy 11.0 eV collides with a hydrogen atom in its ground state (−13.6 eV). The n = 2 level is −3.40 eV. Explain whether the atom can be excited and find the electron's energy afterwards if it is.`,
ms: [`Gap from n = 1 to n = 2 is 10.2 eV <span class="mk">[1]</span>`, `11.0 eV is more than 10.2 eV, so excitation to n = 2 is possible (not to n = 3, gap 12.1 eV) <span class="mk">[1]</span>`, `Electron leaves with 11.0 − 10.2 = 0.8 eV <span class="mk">[1]</span>`]}},

{id: 'duality', u: U2, y: 12, p: 'Paper 1', t: `Wave–particle duality`,
body: `<p>Light behaves as a wave in diffraction and interference, and as particles in the photoelectric effect. Matter does the same: electrons fired at a thin graphite film produce diffraction rings, which only waves can make.</p>
<p>De Broglie proposed that every moving particle has a wavelength λ = <i class="v">h</i>/<i class="v">p</i>, where <i class="v">p</i> = <i class="v">mv</i> is its momentum. Faster electrons have shorter wavelengths, so the rings get smaller as the accelerating voltage rises.</p>
<p>Diffraction is only noticeable when the wavelength is similar to the size of the gap or object. Electrons accelerated through a few kV have λ around 10<sup>−11</sup> m, similar to the spacing of atoms, which is why they diffract through crystals. A thrown ball has λ about 10<sup>−34</sup> m, far too small to see.</p>
<p>Scientific ideas like this are accepted only after evidence is checked by other scientists; electron diffraction confirmed de Broglie's idea a few years after he published it.</p>`,
eq: [[`λ = ${F('<i>h</i>', '<i>mv</i>')}`, `de Broglie wavelength`], [`<i>eV</i> = ½<i>mv</i><sup>2</sup>`, `electron accelerated through pd <i>V</i>`]],
ex: {q: `Find the de Broglie wavelength of an electron moving at 4.0 × 10<sup>6</sup> m s<sup>−1</sup>.`,
s: [`Momentum <i>p</i> = 9.11 × 10<sup>−31</sup> × 4.0 × 10<sup>6</sup> = 3.64 × 10<sup>−24</sup> kg m s<sup>−1</sup>.`, `λ = 6.63 × 10<sup>−34</sup> / 3.64 × 10<sup>−24</sup>.`],
a: `λ = 1.8 × 10<sup>−10</sup> m`},
quiz: [
 {q: `Increasing the accelerating voltage in electron diffraction makes the rings`, o: [`larger`, `smaller`, `brighter only`, `disappear`], a: 1, why: `Higher speed, higher momentum, shorter wavelength, less diffraction.`},
 {q: `Which observation shows the wave nature of electrons?`, o: [`photoelectric effect`, `electron diffraction`, `line spectra`, `ionisation`], a: 1, why: `Diffraction is a wave behaviour.`},
 {q: `A proton and an electron have the same speed. Which has the longer de Broglie wavelength?`, o: [`proton`, `electron`, `same`, `depends on charge`], a: 1, why: `λ = <i>h</i>/<i>mv</i>; the electron has much smaller mass.`}],
exam: {m: 3, q: `Electrons are accelerated from rest through 2.0 kV. Calculate their de Broglie wavelength.`,
ms: [`<i>E</i><sub>k</sub> = 2000 × 1.60 × 10<sup>−19</sup> = 3.2 × 10<sup>−16</sup> J <span class="mk">[1]</span>`, `<i>p</i> = √(2<i>mE</i><sub>k</sub>) = √(2 × 9.11 × 10<sup>−31</sup> × 3.2 × 10<sup>−16</sup>) = 2.41 × 10<sup>−23</sup> kg m s<sup>−1</sup> <span class="mk">[1]</span>`, `λ = <i>h</i>/<i>p</i> = 2.7 × 10<sup>−11</sup> m <span class="mk">[1]</span>`]}},

{id: 'progressive', u: U3, y: 12, p: 'Paper 1', t: `Progressive waves`,
body: `<p>A progressive wave carries energy from one place to another without moving the medium along with it. Each particle oscillates about its rest position.</p>
<ul><li><b>Amplitude</b>: maximum displacement from equilibrium.</li><li><b>Wavelength</b> λ: distance between two points in phase, for example crest to crest.</li><li><b>Frequency</b> <i class="v">f</i>: number of waves passing a point per second.</li><li><b>Period</b> <i class="v">T</i>: time for one complete oscillation, <i class="v">T</i> = 1/<i class="v">f</i>.</li></ul>
<p><b>Phase difference</b> tells you how far one point is ahead of another in its cycle, measured in radians or degrees. Points a whole wavelength apart are in phase (0 or 2π). Points half a wavelength apart are in antiphase (π).</p>
<p>The wave speed depends on the medium, not on the source. Changing the frequency of the source changes the wavelength, not the speed.</p>`,
eq: [[`<i>c</i> = <i>f</i>λ`, `wave speed`], [`<i>f</i> = ${F('1', '<i>T</i>')}`, `frequency and period`], [`phase difference = ${F('2π<i>x</i>', 'λ')}`, `for points <i>x</i> apart`]],
ex: {q: `A wave has frequency 50 Hz and speed 20 m s<sup>−1</sup>. Find the phase difference between two points 0.10 m apart.`,
s: [`λ = <i>c</i>/<i>f</i> = 20 / 50 = 0.40 m.`, `Fraction of a wavelength: 0.10 / 0.40 = ¼.`, `Phase difference = ¼ × 2π.`],
a: `π/2 rad, or 90°`},
quiz: [
 {q: `A wave has period 0.02 s. Its frequency is`, o: [`0.02 Hz`, `2 Hz`, `50 Hz`, `200 Hz`], a: 2, why: `<i>f</i> = 1/0.02 = 50 Hz.`},
 {q: `Two points 1.5λ apart are`, o: [`in phase`, `in antiphase`, `π/2 out of phase`, `3π/2 out of phase`], a: 1, why: `1.5λ means 3π, which is the same as π: antiphase.`},
 {q: `Sound goes from air into water. What stays the same?`, o: [`speed`, `wavelength`, `frequency`, `amplitude`], a: 2, why: `Frequency is set by the source.`}],
exam: {m: 2, q: `Radio waves of frequency 98.4 MHz travel at 3.00 × 10<sup>8</sup> m s<sup>−1</sup>. Calculate their wavelength.`,
ms: [`λ = <i>c</i>/<i>f</i> = 3.00 × 10<sup>8</sup> / 98.4 × 10<sup>6</sup> <span class="mk">[1]</span>`, `3.05 m <span class="mk">[1]</span>`]}},

{id: 'polarisation', u: U3, y: 12, p: 'Paper 1', t: `Longitudinal and transverse waves, polarisation`,
body: `<p>In a <b>transverse</b> wave the oscillations are perpendicular to the direction of energy transfer: all electromagnetic waves, waves on a string, ripples. In a <b>longitudinal</b> wave the oscillations are parallel, giving compressions and rarefactions: sound, and the P-waves of earthquakes.</p>
<p>All electromagnetic waves travel at 3.00 × 10<sup>8</sup> m s<sup>−1</sup> in a vacuum.</p>
<p><b>Polarisation</b> restricts the oscillations to one plane. Only transverse waves can be polarised, so polarisation is the proof that a wave is transverse.</p>
<p>A polaroid filter lets through only light oscillating in one plane. Two filters with axes at 90° block all light. Light reflected from water or glass is partly polarised, which is why polarising sunglasses cut glare. TV and radio aerials must be aligned with the plane of the transmitted waves to get the strongest signal.</p>`,
eq: [],
ex: {q: `Unpolarised light passes through two polaroids. The second is rotated through 360°. Describe what is seen.`,
s: [`After the first polaroid, the light is plane-polarised.`, `When the second polaroid's axis is parallel to the first, the light passes: maximum brightness.`, `At 90° and 270° the axes are crossed: no light passes.`, `So brightness goes max, zero, max, zero in one turn.`],
a: `Two maxima and two minima (zero) per full rotation`},
quiz: [
 {q: `Which wave cannot be polarised?`, o: [`microwaves`, `sound in air`, `light`, `waves on a rope`], a: 1, why: `Sound in air is longitudinal.`},
 {q: `Polarising sunglasses reduce glare because reflected light is`, o: [`longitudinal`, `partly polarised`, `slower`, `ultraviolet`], a: 1, why: `The lenses block the plane in which most reflected light oscillates.`},
 {q: `A compression is found in`, o: [`transverse waves`, `longitudinal waves`, `all EM waves`, `stationary waves only`], a: 1, why: `Particles crowd together where the oscillations along the direction of travel meet.`}],
exam: {m: 3, q: `Describe an experiment using microwaves to show that they are transverse.`,
ms: [`Microwave transmitter and receiver facing each other, with a metal grille or rotating the receiver between them <span class="mk">[1]</span>`, `Rotate the grille or receiver through 90° and observe the signal on a meter <span class="mk">[1]</span>`, `Signal falls to a minimum and rises again, showing the waves are polarised, so transverse <span class="mk">[1]</span>`]}},

{id: 'stationary', u: U3, y: 12, p: 'Paper 1', t: `Stationary waves`,
body: `<p>A <b>stationary wave</b> forms when two waves of the same frequency and amplitude travel in opposite directions and superpose, usually a wave and its reflection. Energy is stored, not transferred.</p>
<p><b>Nodes</b> are points of zero amplitude, where the waves always cancel. <b>Antinodes</b> are points of maximum amplitude. Adjacent nodes are λ/2 apart. All points between two neighbouring nodes oscillate in phase; points in neighbouring loops are in antiphase.</p>
<p>On a string fixed at both ends, the ends are nodes. The <b>first harmonic</b> has one loop, so <i class="v">L</i> = λ/2. Higher harmonics have 2, 3, 4 loops at 2, 3, 4 times the first harmonic frequency.</p>
<p>The frequency of the first harmonic depends on the length <i class="v">L</i>, the tension <i class="v">T</i> and the mass per unit length μ. Shorter, tighter or lighter strings sound higher. This is a required practical.</p>`,
eq: [[`<i>f</i> = ${F('1', '2<i>L</i>')} √${F('<i>T</i>', 'μ')}`, `first harmonic of a string`], [`node to node = ${F('λ', '2')}`, `in any stationary wave`]],
ex: {q: `A guitar string is 0.80 m long, under 60 N tension, with mass per unit length 6.0 × 10<sup>−4</sup> kg m<sup>−1</sup>. Find its first harmonic.`,
s: [`√(<i>T</i>/μ) = √(60 / 6.0 × 10<sup>−4</sup>) = √(1.0 × 10<sup>5</sup>) = 316 m s<sup>−1</sup>.`, `2<i>L</i> = 1.60 m.`, `<i>f</i> = 316 / 1.60.`],
a: `<i>f</i> ≈ 198 Hz`},
quiz: [
 {q: `The distance between adjacent nodes is 0.25 m. The wavelength is`, o: [`0.125 m`, `0.25 m`, `0.50 m`, `1.0 m`], a: 2, why: `Node to node is λ/2, so λ = 0.50 m.`},
 {q: `Quadrupling the tension in a string changes the first harmonic frequency by a factor of`, o: [`½`, `2`, `4`, `16`], a: 1, why: `<i>f</i> ∝ √<i>T</i>, and √4 = 2.`},
 {q: `Points in adjacent loops of a stationary wave are`, o: [`in phase`, `in antiphase`, `π/2 apart`, `random`], a: 1, why: `They move in opposite directions at the same time.`}],
exam: {m: 4, q: `Explain how a stationary wave forms on a string fixed at both ends, and why nodes form at certain points.`,
ms: [`Wave travels along the string and reflects at the fixed end <span class="mk">[1]</span>`, `Incident and reflected waves have the same frequency and similar amplitude, travelling in opposite directions <span class="mk">[1]</span>`, `They superpose <span class="mk">[1]</span>`, `At nodes the waves are always in antiphase and cancel, giving zero displacement <span class="mk">[1]</span>`]}},

{id: 'interference', u: U3, y: 12, p: 'Paper 1', t: `Interference and Young's double slit`,
body: `<p>When waves from two <b>coherent</b> sources overlap (same frequency and a constant phase difference), they interfere. Where the <b>path difference</b> is a whole number of wavelengths they arrive in phase and add: a bright fringe. Where it is a half-odd number of wavelengths they cancel: a dark fringe.</p>
<p>Young's double slit splits one beam of light into two coherent sources. A laser is ideal because it is monochromatic and coherent. The fringes are equally spaced. The fringe spacing <i class="v">w</i> grows with wavelength and screen distance <i class="v">D</i>, and shrinks as the slits get further apart (<i class="v">s</i>).</p>
<p>With white light the central fringe is white, and the others are spectra with blue nearest the centre, because blue has the shortest wavelength.</p>
<p><b>Laser safety:</b> never look into the beam, avoid reflective surfaces, and wear goggles where needed. Young's experiment was historic evidence that light is a wave.</p>`,
eq: [[`<i>w</i> = ${F('λ<i>D</i>', '<i>s</i>')}`, `fringe spacing`], [`path difference = <i>n</i>λ`, `bright fringe`], [`path difference = (<i>n</i> + ½)λ`, `dark fringe`]],
ex: {q: `A 633 nm laser shines through slits 0.50 mm apart onto a screen 2.0 m away. Find the fringe spacing.`,
s: [`Convert: λ = 633 × 10<sup>−9</sup> m, <i>s</i> = 0.50 × 10<sup>−3</sup> m.`, `<i>w</i> = λ<i>D</i>/<i>s</i> = 633 × 10<sup>−9</sup> × 2.0 / 0.50 × 10<sup>−3</sup>.`],
a: `<i>w</i> = 2.5 × 10<sup>−3</sup> m = 2.5 mm`},
quiz: [
 {q: `Moving the screen twice as far from the slits makes the fringe spacing`, o: [`half`, `the same`, `double`, `four times`], a: 2, why: `<i>w</i> ∝ <i>D</i>.`},
 {q: `Two sources are coherent if they have`, o: [`the same amplitude`, `the same frequency and constant phase difference`, `the same intensity`, `the same direction`], a: 1, why: `That is the definition of coherence.`},
 {q: `A path difference of 2.5λ gives`, o: [`a bright fringe`, `a dark fringe`, `half brightness`, `no pattern`], a: 1, why: `Half-odd numbers of wavelengths give destructive interference.`}],
exam: {m: 3, q: `In a double-slit experiment, 10 fringe spacings measure 24 mm on a screen 1.5 m from slits 0.40 mm apart. Calculate the wavelength.`,
ms: [`<i>w</i> = 24 / 10 = 2.4 mm <span class="mk">[1]</span>`, `λ = <i>ws</i>/<i>D</i> = 2.4 × 10<sup>−3</sup> × 0.40 × 10<sup>−3</sup> / 1.5 <span class="mk">[1]</span>`, `6.4 × 10<sup>−7</sup> m <span class="mk">[1]</span>`]}},

{id: 'grating', u: U3, y: 12, p: 'Paper 1', t: `Diffraction and diffraction gratings`,
body: `<p><b>Diffraction</b> is the spreading of a wave through a gap or around an edge. It is greatest when the gap is about the same size as the wavelength.</p>
<p>Single-slit diffraction of monochromatic light gives a wide, bright central maximum, twice the width of the others, with dimmer side maxima. A narrower slit or a longer wavelength gives a wider central maximum.</p>
<p>A <b>diffraction grating</b> has hundreds of slits per millimetre. It produces sharp, bright maxima at angles θ given by <i class="v">d</i> sin θ = <i class="v">n</i>λ, where <i class="v">d</i> is the slit spacing and <i class="v">n</i> the order. The highest possible order is the largest whole number below <i class="v">d</i>/λ, because sin θ cannot exceed 1.</p>
<p>Gratings are used in spectrometers to measure wavelengths precisely, and in X-ray crystallography, where the regular atoms of a crystal act as the grating.</p>`,
eq: [[`<i>d</i> sin θ = <i>n</i>λ`, `grating equation`], [`<i>d</i> = ${F('1', 'lines per metre')}`, `slit spacing`]],
ex: {q: `Sodium light (589 nm) falls on a grating with 300 lines per mm. Find the first-order angle and the highest order seen.`,
s: [`<i>d</i> = 1 / (300 × 10<sup>3</sup>) = 3.33 × 10<sup>−6</sup> m.`, `sin θ = λ/<i>d</i> = 589 × 10<sup>−9</sup> / 3.33 × 10<sup>−6</sup> = 0.177, so θ = 10.2°.`, `<i>d</i>/λ = 5.66, so the largest whole number is 5.`],
a: `θ₁ = 10.2°, highest order 5`},
quiz: [
 {q: `A grating with more lines per mm spreads the orders`, o: [`further apart`, `closer together`, `no differently`, `into colours only`], a: 0, why: `Smaller <i>d</i> means larger sin θ for each order.`},
 {q: `The central maximum in single-slit diffraction is`, o: [`the same width as others`, `twice as wide as others`, `dark`, `half as wide`], a: 1, why: `It is twice the width and much brighter.`},
 {q: `Diffraction is most noticeable when the gap is`, o: [`much bigger than λ`, `about λ`, `zero`, `curved`], a: 1, why: `Spreading is greatest when gap and wavelength are similar.`}],
exam: {m: 3, q: `A laser beam through a grating with 500 lines per mm gives a second-order maximum at 39.3°. Calculate the wavelength.`,
ms: [`<i>d</i> = 2.0 × 10<sup>−6</sup> m <span class="mk">[1]</span>`, `λ = <i>d</i> sin θ / <i>n</i> = 2.0 × 10<sup>−6</sup> × sin 39.3° / 2 <span class="mk">[1]</span>`, `6.33 × 10<sup>−7</sup> m <span class="mk">[1]</span>`]}},

{id: 'refraction', u: U3, y: 12, p: 'Paper 1', t: `Refraction, total internal reflection and optical fibres`,
body: `<p>Light changes speed when it enters a new material and bends if it arrives at an angle. The <b>refractive index</b> <i class="v">n</i> = <i class="v">c</i>/<i class="v">c</i><sub>s</sub> compares the speed in a vacuum with the speed in the material. Air is taken as 1.00.</p>
<p>Going into a denser material (higher <i class="v">n</i>), light bends towards the normal. Going out, it bends away.</p>
<p>If light goes from high to low <i class="v">n</i> at more than the <b>critical angle</b>, none refracts out: it all reflects. This is <b>total internal reflection</b>.</p>
<p>An <b>optical fibre</b> has a high-<i class="v">n</i> core inside a lower-<i class="v">n</i> cladding. The cladding protects the core and stops signals crossing between fibres. Two effects spread a pulse: <b>material dispersion</b> (different wavelengths travel at different speeds; fix with monochromatic light) and <b>modal dispersion</b> (rays take different paths; fix with a very narrow core). Absorption reduces the amplitude.</p>`,
eq: [[`<i>n</i> = ${F('<i>c</i>', '<i>c</i><sub>s</sub>')}`, `refractive index`], [`<i>n</i><sub>1</sub> sin θ<sub>1</sub> = <i>n</i><sub>2</sub> sin θ<sub>2</sub>`, `Snell's law`], [`sin θ<sub>c</sub> = ${F('<i>n</i><sub>2</sub>', '<i>n</i><sub>1</sub>')}`, `critical angle, <i>n</i><sub>1</sub> > <i>n</i><sub>2</sub>`]],
ex: {q: `A fibre has a core of refractive index 1.50 and cladding of 1.45. Find the critical angle at the core–cladding boundary.`,
s: [`sin θ<sub>c</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = 1.45 / 1.50 = 0.967.`, `θ<sub>c</sub> = sin<sup>−1</sup>(0.967).`],
a: `θ<sub>c</sub> ≈ 75.2°`},
quiz: [
 {q: `Light travels at 2.0 × 10<sup>8</sup> m s<sup>−1</sup> in glass. The refractive index is`, o: [`0.67`, `1.33`, `1.5`, `2.0`], a: 2, why: `3.0 × 10<sup>8</sup> / 2.0 × 10<sup>8</sup> = 1.5.`},
 {q: `Modal dispersion is reduced by`, o: [`using white light`, `a narrower core`, `a thicker cladding`, `a brighter source`], a: 1, why: `A narrow core leaves only one path for rays.`},
 {q: `TIR can happen when light goes from`, o: [`air into glass`, `glass into air`, `air into water`, `any boundary`], a: 1, why: `It needs light going from higher to lower refractive index.`}],
exam: {m: 3, q: `Explain why an optical fibre has a cladding, giving two reasons.`,
ms: [`Cladding has lower refractive index than the core, so TIR happens at the boundary <span class="mk">[1]</span>`, `Protects the core from scratches that would let light escape <span class="mk">[1]</span>`, `Prevents signal crossover between neighbouring fibres <span class="mk">[1]</span>`]}},

{id: 'vectors', u: U4, y: 12, p: 'Paper 1', t: `Scalars, vectors and resolving forces`,
body: `<p>A <b>scalar</b> has size only: mass, speed, distance, energy, temperature. A <b>vector</b> has size and direction: displacement, velocity, force, acceleration, momentum.</p>
<p>Add vectors tip to tail. If two vectors are at right angles, use Pythagoras for the size of the resultant and trigonometry for its angle. For other angles, draw a scale diagram or use the cosine rule.</p>
<p><b>Resolving</b> splits a vector into two perpendicular components. A force <i class="v">F</i> at angle θ to the horizontal has a horizontal component <i class="v">F</i> cos θ and a vertical component <i class="v">F</i> sin θ.</p>
<p>An object is in <b>equilibrium</b> when the resultant force is zero. The force vectors then form a closed triangle, and components in any two perpendicular directions each add to zero. On a slope, resolve weight into <i class="v">mg</i> sin θ down the slope and <i class="v">mg</i> cos θ into the slope.</p>`,
eq: [[`<i>F</i><sub>x</sub> = <i>F</i> cos θ, <i>F</i><sub>y</sub> = <i>F</i> sin θ`, `components`], [`<i>R</i> = √(<i>F</i><sub>x</sub><sup>2</sup> + <i>F</i><sub>y</sub><sup>2</sup>)`, `resultant of perpendicular vectors`]],
ex: {q: `A sledge is pulled by a rope with a force of 40 N at 30° above the horizontal. Find the horizontal and vertical components.`,
s: [`Horizontal: 40 cos 30° = 40 × 0.866 = 34.6 N.`, `Vertical: 40 sin 30° = 40 × 0.5 = 20.0 N.`],
a: `34.6 N horizontally, 20.0 N upwards`},
quiz: [
 {q: `Which is a vector?`, o: [`speed`, `energy`, `weight`, `mass`], a: 2, why: `Weight is a force, so it has a direction: downwards.`},
 {q: `Forces of 3 N and 4 N act at right angles. The resultant is`, o: [`1 N`, `5 N`, `7 N`, `12 N`], a: 1, why: `√(3² + 4²) = 5 N.`},
 {q: `A 10 kg box rests on a 30° slope. The weight component down the slope is about`, o: [`49 N`, `85 N`, `98 N`, `10 N`], a: 0, why: `<i>mg</i> sin 30° = 98.1 × 0.5 = 49 N.`}],
exam: {m: 3, q: `A 2.0 kg picture hangs from two strings, each at 40° to the horizontal. Calculate the tension in each string.`,
ms: [`Weight = 2.0 × 9.81 = 19.6 N <span class="mk">[1]</span>`, `Vertical components balance: 2<i>T</i> sin 40° = 19.6 <span class="mk">[1]</span>`, `<i>T</i> = 15.3 N <span class="mk">[1]</span>`]}},

{id: 'moments', u: U4, y: 12, p: 'Paper 1', t: `Moments, couples and centre of mass`,
body: `<p>The <b>moment</b> of a force about a point is the force times the <b>perpendicular</b> distance from the point to the line of action of the force. Units: N m.</p>
<p><b>Principle of moments:</b> for an object in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments. Choose the pivot at an unknown force to remove it from the equation.</p>
<p>A <b>couple</b> is a pair of equal, opposite forces whose lines of action do not meet. It turns an object without moving it along. Its moment (torque) is one force times the perpendicular distance between them.</p>
<p>The <b>centre of mass</b> is the point where the weight seems to act. For a uniform object it is at the geometric centre. An object topples when its centre of mass moves beyond its base, because the weight then has a moment about the edge.</p>`,
eq: [[`moment = <i>Fd</i>`, `<i>d</i> perpendicular to the force`], [`Σ clockwise = Σ anticlockwise`, `equilibrium`], [`couple = <i>F</i> × <i>d</i>`, `<i>d</i> between the two forces`]],
ex: {q: `A uniform 4.0 m plank of weight 200 N rests on supports at each end. A 300 N load sits 1.0 m from the left end. Find the support forces.`,
s: [`Take moments about the left support: right force × 4.0 = 200 × 2.0 + 300 × 1.0.`, `<i>R</i><sub>right</sub> × 4.0 = 700, so <i>R</i><sub>right</sub> = 175 N.`, `Up forces equal down forces: <i>R</i><sub>left</sub> = 500 − 175.`],
a: `<i>R</i><sub>left</sub> = 325 N, <i>R</i><sub>right</sub> = 175 N`},
quiz: [
 {q: `A 20 N force acts 0.30 m from a pivot, at right angles. Its moment is`, o: [`6 N m`, `60 N m`, `0.015 N m`, `66 N m`], a: 0, why: `20 × 0.30 = 6.0 N m.`},
 {q: `A couple produces`, o: [`linear acceleration only`, `rotation without translation`, `no effect`, `equilibrium`], a: 1, why: `The resultant force is zero, but the moment is not.`},
 {q: `A bus is more stable if its centre of mass is`, o: [`higher`, `lower`, `at the front`, `outside the base`], a: 1, why: `A low centre of mass has to tilt further before it leaves the base.`}],
exam: {m: 3, q: `A 0.60 m spanner is used to undo a nut. A force of 80 N is applied at the end at 60° to the spanner. Calculate the moment about the nut.`,
ms: [`Perpendicular component = 80 sin 60° = 69.3 N, or perpendicular distance = 0.60 sin 60° <span class="mk">[1]</span>`, `Moment = 69.3 × 0.60 <span class="mk">[1]</span>`, `41.6 N m <span class="mk">[1]</span>`]}},

{id: 'motion-graphs', u: U4, y: 12, p: 'Paper 1', t: `Motion graphs`,
body: `<p><b>Displacement–time</b> graphs: the gradient is velocity. A curve means the velocity is changing; draw a tangent to find the instantaneous velocity.</p>
<p><b>Velocity–time</b> graphs: the gradient is acceleration, and the area under the line is displacement. Area below the time axis counts as negative displacement.</p>
<p><b>Acceleration–time</b> graphs: the area under the line is the change in velocity.</p>
<p>Speed is a scalar; velocity is a vector. A ball thrown upwards has a velocity–time graph that is a straight line crossing zero at the top, with a constant gradient of −9.81 m s<sup>−2</sup>, because gravity acts the whole time, even at the top where the velocity is momentarily zero.</p>`,
eq: [[`<i>v</i> = ${F('Δ<i>s</i>', 'Δ<i>t</i>')}`, `gradient of <i>s</i>–<i>t</i>`], [`<i>a</i> = ${F('Δ<i>v</i>', 'Δ<i>t</i>')}`, `gradient of <i>v</i>–<i>t</i>`], [`<i>s</i> = area under <i>v</i>–<i>t</i>`, `displacement`]],
ex: {q: `A cyclist accelerates uniformly from rest to 12 m s<sup>−1</sup> in 4.0 s, then rides at constant speed for 6.0 s. Find the distance travelled.`,
s: [`First part is a triangle: ½ × 4.0 × 12 = 24 m.`, `Second part is a rectangle: 6.0 × 12 = 72 m.`, `Add the areas.`],
a: `96 m`},
quiz: [
 {q: `The gradient of a velocity–time graph gives`, o: [`displacement`, `acceleration`, `speed`, `force`], a: 1, why: `Change in velocity divided by time.`},
 {q: `At the top of its flight, a ball thrown upwards has`, o: [`zero acceleration`, `zero velocity`, `zero velocity and acceleration`, `maximum velocity`], a: 1, why: `It stops for an instant, but gravity still accelerates it at 9.81 m s<sup>−2</sup>.`},
 {q: `A curved displacement–time graph that gets steeper shows`, o: [`constant velocity`, `deceleration`, `acceleration`, `rest`], a: 2, why: `Increasing gradient means increasing velocity.`}],
exam: {m: 3, q: `Sketch the velocity–time graph of a ball dropped onto a hard floor that bounces back up twice. Take upwards as positive.`,
ms: [`Straight lines of the same negative gradient throughout flight <span class="mk">[1]</span>`, `Velocity reverses sign suddenly at each bounce <span class="mk">[1]</span>`, `Speed after each bounce smaller than just before it <span class="mk">[1]</span>`]}},

{id: 'suvat', u: U4, y: 12, p: 'Paper 1', t: `Equations of motion (SUVAT)`,
body: `<p>When acceleration is <b>constant</b>, five quantities describe motion in a straight line: displacement <i class="v">s</i>, initial velocity <i class="v">u</i>, final velocity <i class="v">v</i>, acceleration <i class="v">a</i> and time <i class="v">t</i>. If you know any three, you can find the other two.</p>
<p>Method: write down <i class="v">s</i>, <i class="v">u</i>, <i class="v">v</i>, <i class="v">a</i>, <i class="v">t</i>, fill in what you know, mark what you want, and choose the equation that leaves out the quantity you neither know nor need.</p>
<p>Choose a positive direction and stick to it. For objects moving up and then down, take up as positive and <i class="v">a</i> = −9.81 m s<sup>−2</sup>.</p>
<p>Measuring <i class="v">g</i> is a required practical: drop a ball through light gates or use a trapdoor and electromagnet, plot 2<i class="v">s</i> against <i class="v">t</i><sup>2</sup>, and the gradient is <i class="v">g</i>.</p>`,
eq: [[`<i>v</i> = <i>u</i> + <i>at</i>`, `no <i>s</i>`], [`<i>s</i> = ${F('(<i>u</i> + <i>v</i>)', '2')}<i>t</i>`, `no <i>a</i>`], [`<i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>`, `no <i>v</i>`], [`<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>`, `no <i>t</i>`]],
ex: {q: `A car at 25 m s<sup>−1</sup> brakes at 5.0 m s<sup>−2</sup>. How far does it travel before stopping?`,
s: [`<i>u</i> = 25, <i>v</i> = 0, <i>a</i> = −5.0, <i>s</i> = ?`, `No <i>t</i>, so use <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>.`, `0 = 625 − 10<i>s</i>, so <i>s</i> = 62.5 m.`],
a: `62.5 m`},
quiz: [
 {q: `A stone is dropped from rest. How far does it fall in 2.0 s?`, o: [`9.8 m`, `19.6 m`, `39.2 m`, `4.9 m`], a: 1, why: `<i>s</i> = ½ × 9.81 × 2.0² = 19.6 m.`},
 {q: `SUVAT equations can be used only when`, o: [`velocity is constant`, `acceleration is constant`, `the object is falling`, `there is no friction`], a: 1, why: `They are derived assuming uniform acceleration.`},
 {q: `A ball is thrown up at 15 m s<sup>−1</sup>. Time to reach the top?`, o: [`0.65 s`, `1.5 s`, `3.1 s`, `15 s`], a: 1, why: `0 = 15 − 9.81<i>t</i>, so <i>t</i> = 1.53 s.`}],
exam: {m: 3, q: `A train accelerates uniformly from 5.0 m s<sup>−1</sup> to 20 m s<sup>−1</sup> over 750 m. Find its acceleration and the time taken.`,
ms: [`<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>: 400 = 25 + 1500<i>a</i> <span class="mk">[1]</span>`, `<i>a</i> = 0.25 m s<sup>−2</sup> <span class="mk">[1]</span>`, `<i>t</i> = (20 − 5.0) / 0.25 = 60 s <span class="mk">[1]</span>`]}},

{id: 'projectiles', u: U4, y: 12, p: 'Paper 1', t: `Projectile motion`,
body: `<p>A projectile moves under gravity alone (ignoring air resistance). Treat the horizontal and vertical motions <b>separately</b>; the only thing they share is time.</p>
<ul><li>Horizontally: no force, so constant velocity <i class="v">u</i> cos θ.</li><li>Vertically: constant acceleration <i class="v">g</i> downwards, starting at <i class="v">u</i> sin θ.</li></ul>
<p>Find the time from the vertical motion, then use it in the horizontal motion to get the range. Without air resistance the path is a parabola, and launching at 45° gives the greatest range on level ground.</p>
<p><b>Air resistance</b> reduces both the horizontal and vertical velocity, so the range and the maximum height are smaller and the path is no longer symmetrical: the descent is steeper than the climb. Drag rises with speed, which is why falling objects reach terminal speed.</p>`,
eq: [[`<i>u</i><sub>x</sub> = <i>u</i> cos θ`, `constant horizontal velocity`], [`<i>u</i><sub>y</sub> = <i>u</i> sin θ`, `initial vertical velocity`], [`<i>R</i> = ${F('<i>u</i><sup>2</sup> sin 2θ', '<i>g</i>')}`, `range on level ground, no drag`]],
ex: {q: `A ball is thrown horizontally at 15 m s<sup>−1</sup> from the top of a 20 m cliff. How far from the base does it land?`,
s: [`Vertically: <i>u</i> = 0, <i>s</i> = 20 m, <i>a</i> = 9.81 m s<sup>−2</sup>.`, `20 = ½ × 9.81 × <i>t</i><sup>2</sup>, so <i>t</i> = √(4.08) = 2.02 s.`, `Horizontally: distance = 15 × 2.02.`],
a: `30 m from the base`},
quiz: [
 {q: `Ignoring air resistance, the horizontal velocity of a projectile`, o: [`increases`, `decreases`, `stays constant`, `is zero at the top`], a: 2, why: `No horizontal force acts.`},
 {q: `Two balls leave a table at the same moment: one dropped, one pushed off horizontally. Which lands first?`, o: [`the dropped one`, `the pushed one`, `both together`, `depends on mass`], a: 2, why: `Vertical motion is identical for both.`},
 {q: `Air resistance makes the range`, o: [`larger`, `smaller`, `unchanged`, `zero`], a: 1, why: `It slows the horizontal motion.`}],
exam: {m: 4, q: `A football is kicked at 18 m s<sup>−1</sup> at 35° above level ground. Calculate the maximum height reached.`,
ms: [`<i>u</i><sub>y</sub> = 18 sin 35° = 10.3 m s<sup>−1</sup> <span class="mk">[1]</span>`, `At the top <i>v</i><sub>y</sub> = 0 <span class="mk">[1]</span>`, `0 = 10.3² − 2 × 9.81 × <i>h</i> <span class="mk">[1]</span>`, `<i>h</i> = 5.4 m <span class="mk">[1]</span>`]}},

{id: 'newton', u: U4, y: 12, p: 'Paper 1', t: `Newton's laws of motion`,
body: `<p><b>First law:</b> an object stays at rest or moves at constant velocity unless a resultant force acts on it.</p>
<p><b>Second law:</b> the resultant force equals the rate of change of momentum. For constant mass this is <i class="v">F</i> = <i class="v">ma</i>. The acceleration is in the direction of the resultant force.</p>
<p><b>Third law:</b> if A exerts a force on B, B exerts an equal and opposite force on A. The two forces are the same type and act on <b>different</b> objects, so they never cancel each other. Your weight and the floor's push on you are not a third-law pair; your weight and your gravitational pull on the Earth are.</p>
<p>Draw a <b>free-body diagram</b> for one object at a time with every force on it, then use <i class="v">F</i> = <i class="v">ma</i> along the direction of motion. For lifts, the tension or reaction is bigger than <i class="v">mg</i> when accelerating upwards and smaller when accelerating downwards.</p>`,
eq: [[`<i>F</i> = <i>ma</i>`, `resultant force, constant mass`], [`<i>W</i> = <i>mg</i>`, `weight, <i>g</i> = 9.81 N kg<sup>−1</sup>`]],
ex: {q: `A lift of mass 800 kg accelerates upwards at 1.5 m s<sup>−2</sup>. Find the tension in the cable.`,
s: [`Resultant force upwards: <i>T</i> − <i>mg</i> = <i>ma</i>.`, `<i>T</i> = <i>m</i>(<i>g</i> + <i>a</i>) = 800 × (9.81 + 1.5).`],
a: `<i>T</i> = 9.0 × 10<sup>3</sup> N`},
quiz: [
 {q: `A car moves at constant velocity. The resultant force on it is`, o: [`forwards`, `backwards`, `zero`, `equal to its weight`], a: 2, why: `First law: constant velocity means no resultant force.`},
 {q: `A third-law pair of forces acts on`, o: [`the same object`, `different objects`, `only stationary objects`, `only in collisions`], a: 1, why: `That is why they cannot cancel.`},
 {q: `A 1200 kg car accelerates at 2.0 m s<sup>−2</sup> against 600 N of drag. Driving force?`, o: [`1800 N`, `2400 N`, `3000 N`, `600 N`], a: 2, why: `<i>F</i> − 600 = 1200 × 2.0, so <i>F</i> = 3000 N.`}],
exam: {m: 3, q: `A 70 kg person stands on bathroom scales in a lift that decelerates at 2.0 m s<sup>−2</sup> while moving upwards. Calculate the scale reading in newtons.`,
ms: [`Acceleration is 2.0 m s<sup>−2</sup> downwards <span class="mk">[1]</span>`, `<i>mg</i> − <i>R</i> = <i>ma</i>, so <i>R</i> = 70 × (9.81 − 2.0) <span class="mk">[1]</span>`, `<i>R</i> = 547 N <span class="mk">[1]</span>`]}},

{id: 'momentum', u: U4, y: 12, p: 'Paper 1', t: `Momentum, impulse and collisions`,
body: `<p><b>Momentum</b> <i class="v">p</i> = <i class="v">mv</i> is a vector. In any interaction where no external force acts, the total momentum is conserved.</p>
<p><b>Impulse</b> is force times time, <i class="v">F</i>Δ<i class="v">t</i>, and equals the change in momentum. It is the area under a force–time graph. Crumple zones, airbags and helmets increase the collision time, so the same change in momentum happens with a smaller force.</p>
<p>In an <b>elastic</b> collision kinetic energy is conserved as well as momentum. In an <b>inelastic</b> collision some kinetic energy becomes heat, sound and deformation. Total energy is always conserved.</p>
<p>An <b>explosion</b> starts with zero momentum, so the pieces fly off with equal and opposite momenta. A gun recoils for this reason.</p>`,
eq: [[`<i>p</i> = <i>mv</i>`, `momentum, kg m s<sup>−1</sup>`], [`<i>F</i> = ${F('Δ(<i>mv</i>)', 'Δ<i>t</i>')}`, `Newton's second law`], [`<i>F</i>Δ<i>t</i> = Δ(<i>mv</i>)`, `impulse, N s`]],
ex: {q: `A 2.0 kg trolley at 3.0 m s<sup>−1</sup> hits a stationary 1.0 kg trolley and they stick together. Find their speed and say whether the collision is elastic.`,
s: [`Momentum before = 2.0 × 3.0 = 6.0 kg m s<sup>−1</sup>.`, `After: 3.0 × <i>v</i> = 6.0, so <i>v</i> = 2.0 m s<sup>−1</sup>.`, `KE before = ½ × 2.0 × 3.0² = 9.0 J. KE after = ½ × 3.0 × 2.0² = 6.0 J.`],
a: `2.0 m s<sup>−1</sup>; inelastic, 3.0 J of kinetic energy is lost`},
quiz: [
 {q: `The area under a force–time graph is`, o: [`work done`, `impulse`, `power`, `acceleration`], a: 1, why: `∫<i>F</i> d<i>t</i> = change in momentum.`},
 {q: `An airbag reduces injury by`, o: [`reducing the change in momentum`, `increasing the collision time`, `increasing the force`, `removing kinetic energy instantly`], a: 1, why: `Same Δ<i>p</i> over longer Δ<i>t</i> means smaller force.`},
 {q: `In every collision with no external forces, what is always conserved?`, o: [`kinetic energy`, `momentum`, `speed`, `velocity of each object`], a: 1, why: `Momentum is always conserved; kinetic energy only in elastic collisions.`}],
exam: {m: 3, q: `A 0.16 kg cricket ball arrives at 30 m s<sup>−1</sup> and is hit straight back at 40 m s<sup>−1</sup>. The bat is in contact for 2.0 ms. Calculate the average force on the ball.`,
ms: [`Change in velocity = 70 m s<sup>−1</sup> (direction change) <span class="mk">[1]</span>`, `Δ<i>p</i> = 0.16 × 70 = 11.2 kg m s<sup>−1</sup> <span class="mk">[1]</span>`, `<i>F</i> = 11.2 / 2.0 × 10<sup>−3</sup> = 5600 N <span class="mk">[1]</span>`]}},

{id: 'work-power', u: U4, y: 12, p: 'Paper 1', t: `Work, energy, power and efficiency`,
body: `<p><b>Work done</b> is force times distance moved in the direction of the force: <i class="v">W</i> = <i class="v">Fs</i> cos θ. Work done is energy transferred. The area under a force–displacement graph is the work done.</p>
<p>Kinetic energy is ½<i class="v">mv</i><sup>2</sup>. A change in gravitational potential energy near the Earth is <i class="v">mg</i>Δ<i class="v">h</i>. If there is no friction, energy lost from one store equals energy gained by the other: a falling object has ½<i class="v">mv</i><sup>2</sup> = <i class="v">mgh</i>.</p>
<p><b>Power</b> is the rate of doing work, in watts. For an object moving at constant speed against a resistive force, the power needed is <i class="v">P</i> = <i class="v">Fv</i>.</p>
<p><b>Efficiency</b> compares useful output with total input. It is never more than 100%, because some energy is always dissipated as heat.</p>`,
eq: [[`<i>W</i> = <i>Fs</i> cos θ`, `work done`], [`<i>E</i><sub>k</sub> = ½<i>mv</i><sup>2</sup>`, `kinetic energy`], [`Δ<i>E</i><sub>p</sub> = <i>mg</i>Δ<i>h</i>`, `gravitational PE`], [`<i>P</i> = ${F('Δ<i>W</i>', 'Δ<i>t</i>')} = <i>Fv</i>`, `power`], [`efficiency = ${F('useful output power', 'input power')}`, `× 100 for %`]],
ex: {q: `A 400 W motor lifts a 50 kg load through 12 m in 20 s. Find its efficiency.`,
s: [`Useful energy = <i>mgh</i> = 50 × 9.81 × 12 = 5890 J.`, `Useful power = 5890 / 20 = 294 W.`, `Efficiency = 294 / 400.`],
a: `74%`},
quiz: [
 {q: `A force of 50 N pulls a box 4.0 m along the floor at 60° to the horizontal. Work done?`, o: [`100 J`, `173 J`, `200 J`, `25 J`], a: 0, why: `50 × 4.0 × cos 60° = 100 J.`},
 {q: `A car at 30 m s<sup>−1</sup> faces 900 N drag. Power to keep it going?`, o: [`30 W`, `2.7 kW`, `27 kW`, `270 kW`], a: 2, why: `<i>P</i> = <i>Fv</i> = 900 × 30 = 27 000 W.`},
 {q: `Doubling speed changes kinetic energy by a factor of`, o: [`2`, `4`, `8`, `½`], a: 1, why: `<i>E</i><sub>k</sub> ∝ <i>v</i><sup>2</sup>.`}],
exam: {m: 3, q: `A 60 kg skier starts from rest and descends 25 m vertically. She reaches 18 m s<sup>−1</sup> at the bottom. Calculate the energy dissipated by friction and drag.`,
ms: [`PE lost = 60 × 9.81 × 25 = 14 700 J <span class="mk">[1]</span>`, `KE gained = ½ × 60 × 18² = 9720 J <span class="mk">[1]</span>`, `Dissipated = 4990 J, about 5.0 kJ <span class="mk">[1]</span>`]}},

{id: 'density-hooke', u: U4, y: 12, p: 'Paper 1', t: `Density, Hooke's law and elastic energy`,
body: `<p><b>Density</b> ρ = <i class="v">m</i>/<i class="v">V</i>, in kg m<sup>−3</sup>. Water is 1000 kg m<sup>−3</sup>.</p>
<p><b>Hooke's law</b>: the extension of a spring or wire is proportional to the force, up to the <b>limit of proportionality</b>. The spring constant <i class="v">k</i> is the stiffness, in N m<sup>−1</sup>. Beyond the <b>elastic limit</b> the material deforms plastically and will not return to its original length.</p>
<p>Springs in series: 1/<i class="v">k</i> = 1/<i class="v">k</i><sub>1</sub> + 1/<i class="v">k</i><sub>2</sub>, so the combination is less stiff. Springs in parallel: <i class="v">k</i> = <i class="v">k</i><sub>1</sub> + <i class="v">k</i><sub>2</sub>, stiffer.</p>
<p>The <b>elastic strain energy</b> stored equals the area under the force–extension graph. On loading and unloading a rubber band, the curves differ; the area between them is the energy dissipated as heat.</p>`,
eq: [[`ρ = ${F('<i>m</i>', '<i>V</i>')}`, `density`], [`<i>F</i> = <i>k</i>Δ<i>L</i>`, `Hooke's law`], [`<i>E</i> = ½<i>F</i>Δ<i>L</i> = ½<i>k</i>Δ<i>L</i><sup>2</sup>`, `elastic strain energy`]],
ex: {q: `A spring with <i>k</i> = 40 N m<sup>−1</sup> is stretched by 0.15 m. Find the force needed and the energy stored.`,
s: [`<i>F</i> = <i>k</i>Δ<i>L</i> = 40 × 0.15 = 6.0 N.`, `<i>E</i> = ½<i>k</i>Δ<i>L</i><sup>2</sup> = ½ × 40 × 0.15².`],
a: `6.0 N, 0.45 J`},
quiz: [
 {q: `Two identical springs, each <i>k</i> = 20 N m<sup>−1</sup>, are joined in series. The combined <i>k</i> is`, o: [`10 N m<sup>−1</sup>`, `20 N m<sup>−1</sup>`, `40 N m<sup>−1</sup>`, `400 N m<sup>−1</sup>`], a: 0, why: `1/<i>k</i> = 1/20 + 1/20, so <i>k</i> = 10 N m<sup>−1</sup>.`},
 {q: `Plastic deformation means`, o: [`the object returns to its shape`, `the object stays permanently stretched`, `the object breaks`, `Hooke's law applies`], a: 1, why: `Beyond the elastic limit, atoms slide to new positions.`},
 {q: `The area under a force–extension graph is`, o: [`stiffness`, `stress`, `work done or energy stored`, `strain`], a: 2, why: `Force times distance summed up.`}],
exam: {m: 3, q: `A catapult band obeys Hooke's law with <i>k</i> = 250 N m<sup>−1</sup> and is pulled back 0.20 m. All the stored energy goes to a 0.025 kg stone. Calculate the launch speed.`,
ms: [`<i>E</i> = ½ × 250 × 0.20² = 5.0 J <span class="mk">[1]</span>`, `5.0 = ½ × 0.025 × <i>v</i><sup>2</sup> <span class="mk">[1]</span>`, `<i>v</i> = 20 m s<sup>−1</sup> <span class="mk">[1]</span>`]}},

{id: 'young-modulus', u: U4, y: 12, p: 'Paper 1', t: `Stress, strain and the Young modulus`,
body: `<p><b>Tensile stress</b> is force per unit cross-sectional area. <b>Tensile strain</b> is extension divided by original length, with no units. The <b>Young modulus</b> is stress divided by strain, and describes the stiffness of the material itself, whatever the shape of the sample.</p>
<p>On a stress–strain graph the gradient of the straight part is the Young modulus. Key points: limit of proportionality, elastic limit, yield point (the material suddenly stretches a lot), and <b>ultimate tensile stress</b>, the highest stress before breaking.</p>
<ul><li><b>Brittle</b> materials such as glass break with no plastic deformation.</li><li><b>Ductile</b> materials such as copper can be drawn into wires.</li><li>Polymers such as rubber show large elastic strains with hysteresis.</li></ul>
<p>Required practical: hang masses on a long thin wire, measure the diameter with a micrometer in several places, read extensions with a vernier scale, and plot stress against strain.</p>`,
eq: [[`stress σ = ${F('<i>F</i>', '<i>A</i>')}`, `Pa`], [`strain ε = ${F('Δ<i>L</i>', '<i>L</i>')}`, `no unit`], [`<i>E</i> = ${F('σ', 'ε')} = ${F('<i>FL</i>', '<i>A</i>Δ<i>L</i>')}`, `Young modulus, Pa`]],
ex: {q: `A steel wire 2.0 m long and 0.50 mm in diameter holds a 50 N load. The Young modulus of steel is 2.0 × 10<sup>11</sup> Pa. Find the extension.`,
s: [`<i>A</i> = π(0.25 × 10<sup>−3</sup>)<sup>2</sup> = 1.96 × 10<sup>−7</sup> m<sup>2</sup>.`, `Stress = 50 / 1.96 × 10<sup>−7</sup> = 2.55 × 10<sup>8</sup> Pa.`, `Strain = stress / <i>E</i> = 1.27 × 10<sup>−3</sup>.`, `Δ<i>L</i> = strain × <i>L</i> = 1.27 × 10<sup>−3</sup> × 2.0.`],
a: `Δ<i>L</i> = 2.5 × 10<sup>−3</sup> m = 2.5 mm`},
quiz: [
 {q: `The Young modulus is the gradient of`, o: [`force–extension`, `stress–strain`, `strain–stress`, `force–strain`], a: 1, why: `In the linear region, <i>E</i> = σ/ε.`},
 {q: `A brittle material`, o: [`stretches a lot before breaking`, `breaks with little or no plastic deformation`, `has no Young modulus`, `is always weak`], a: 1, why: `Glass and ceramics snap suddenly.`},
 {q: `Why use a long, thin wire in the practical?`, o: [`to make it stronger`, `to get a measurable extension`, `to reduce stress`, `to avoid heating`], a: 1, why: `Longer and thinner gives bigger extension for the same force, so smaller percentage uncertainty.`}],
exam: {m: 2, q: `State the difference between the elastic limit and the limit of proportionality.`,
ms: [`Limit of proportionality: point beyond which extension is no longer proportional to force <span class="mk">[1]</span>`, `Elastic limit: point beyond which the material will not return to its original length when the force is removed <span class="mk">[1]</span>`]}},

{id: 'current-pd', u: U5, y: 12, p: 'Paper 1', t: `Current, potential difference and resistance`,
body: `<p><b>Current</b> is the rate of flow of charge. One ampere is one coulomb per second. In metals the charge carriers are electrons, but conventional current is drawn from + to −.</p>
<p><b>Potential difference</b> is the work done per unit charge moving between two points. One volt is one joule per coulomb.</p>
<p><b>Resistance</b> <i class="v">R</i> = <i class="v">V</i>/<i class="v">I</i>. An <b>ohmic conductor</b> (a metal at constant temperature) has <i class="v">I</i> proportional to <i class="v">V</i>, a straight line through the origin.</p>
<ul><li>A filament lamp's graph curves: as it heats up, ions vibrate more, so resistance rises.</li><li>A semiconductor diode conducts only in the forward direction, above about 0.6 V.</li><li>An NTC thermistor's resistance falls as temperature rises, because more charge carriers are released.</li></ul>`,
eq: [[`<i>I</i> = ${F('Δ<i>Q</i>', 'Δ<i>t</i>')}`, `current`], [`<i>V</i> = ${F('<i>W</i>', '<i>Q</i>')}`, `potential difference`], [`<i>R</i> = ${F('<i>V</i>', '<i>I</i>')}`, `resistance`], [`<i>P</i> = <i>IV</i> = <i>I</i><sup>2</sup><i>R</i> = ${F('<i>V</i><sup>2</sup>', '<i>R</i>')}`, `power`]],
ex: {q: `A 12 V heater draws 3.0 A for 2.0 minutes. Find the charge that flows and the energy transferred.`,
s: [`<i>Q</i> = <i>It</i> = 3.0 × 120 = 360 C.`, `<i>W</i> = <i>QV</i> = 360 × 12.`],
a: `360 C, 4320 J`},
quiz: [
 {q: `The resistance of a filament lamp increases with current because`, o: [`the wire gets longer`, `more electrons are released`, `the metal ions vibrate more`, `the voltage falls`], a: 2, why: `Hotter means more ion vibration, so more collisions.`},
 {q: `A 2.0 kΩ resistor has 6.0 V across it. The current is`, o: [`3.0 mA`, `0.33 mA`, `12 mA`, `3.0 A`], a: 0, why: `6.0 / 2000 = 3.0 × 10<sup>−3</sup> A.`},
 {q: `A 60 W bulb runs on 230 V. Current?`, o: [`0.26 A`, `3.8 A`, `13 800 A`, `0.0043 A`], a: 0, why: `<i>I</i> = <i>P</i>/<i>V</i> = 60 / 230 = 0.26 A.`}],
exam: {m: 3, q: `Sketch the <i>I</i>–<i>V</i> characteristic of a semiconductor diode and explain its shape.`,
ms: [`Near-zero current in reverse bias <span class="mk">[1]</span>`, `Current rises sharply above about 0.6 V in forward bias <span class="mk">[1]</span>`, `Diode has very high resistance in reverse and low resistance once the threshold is passed <span class="mk">[1]</span>`]}},

{id: 'resistivity', u: U5, y: 12, p: 'Paper 1', t: `Resistivity and superconductivity`,
body: `<p>The resistance of a wire depends on its length <i class="v">L</i>, cross-sectional area <i class="v">A</i> and the material's <b>resistivity</b> ρ: <i class="v">R</i> = ρ<i class="v">L</i>/<i class="v">A</i>. Resistivity is a property of the material, in Ω m.</p>
<p>Required practical: measure the diameter with a micrometer in several places, then measure <i class="v">R</i> for different lengths with an ammeter and voltmeter. A graph of <i class="v">R</i> against <i class="v">L</i> has gradient ρ/<i class="v">A</i>. Keep the current small so the wire does not heat up.</p>
<p>Metals' resistivity rises with temperature. Semiconductors such as thermistors fall.</p>
<p>A <b>superconductor</b> has zero resistivity below its <b>critical temperature</b>. Uses include strong magnets for MRI scanners and particle accelerators, and power cables with no energy losses.</p>`,
eq: [[`ρ = ${F('<i>RA</i>', '<i>L</i>')}`, `resistivity, Ω m`], [`<i>A</i> = ${F('π<i>d</i><sup>2</sup>', '4')}`, `wire of diameter <i>d</i>`]],
ex: {q: `A constantan wire 1.5 m long has diameter 0.30 mm. Constantan has ρ = 4.9 × 10<sup>−7</sup> Ω m. Find its resistance.`,
s: [`<i>A</i> = π(0.15 × 10<sup>−3</sup>)<sup>2</sup> = 7.07 × 10<sup>−8</sup> m<sup>2</sup>.`, `<i>R</i> = ρ<i>L</i>/<i>A</i> = 4.9 × 10<sup>−7</sup> × 1.5 / 7.07 × 10<sup>−8</sup>.`],
a: `<i>R</i> ≈ 10 Ω`},
quiz: [
 {q: `Doubling the diameter of a wire changes its resistance by a factor of`, o: [`2`, `½`, `¼`, `4`], a: 2, why: `Area goes up by 4, so resistance falls to a quarter.`},
 {q: `Below its critical temperature a superconductor has`, o: [`infinite resistance`, `zero resistivity`, `negative resistance`, `the same resistance`], a: 1, why: `That is the definition of superconductivity.`},
 {q: `In the resistivity practical, a graph of <i>R</i> against <i>L</i> has gradient`, o: [`ρ`, `ρ/<i>A</i>`, `<i>A</i>/ρ`, `ρ<i>A</i>`], a: 1, why: `<i>R</i> = (ρ/<i>A</i>)<i>L</i>.`}],
exam: {m: 2, q: `Give one use of superconductors and explain the advantage.`,
ms: [`For example MRI magnets, power cables or particle accelerator magnets <span class="mk">[1]</span>`, `Zero resistance so no energy dissipated as heat, allowing very large currents or strong fields <span class="mk">[1]</span>`]}},

{id: 'circuits', u: U5, y: 12, p: 'Paper 1', t: `Series and parallel circuits`,
body: `<p>In <b>series</b> the same current flows through each component, the potential differences add up to the supply, and total resistance is the sum.</p>
<p>In <b>parallel</b> each branch has the same potential difference, the currents add up, and 1/<i class="v">R</i><sub>T</sub> is the sum of the reciprocals. The total resistance is always less than the smallest branch.</p>
<p><b>Kirchhoff's first law</b> (conservation of charge): the current into a junction equals the current out. <b>Kirchhoff's second law</b> (conservation of energy): around any closed loop, the sum of the emfs equals the sum of the potential differences.</p>
<p>An ideal ammeter has zero resistance and goes in series. An ideal voltmeter has infinite resistance and goes in parallel.</p>`,
eq: [[`<i>R</i><sub>T</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + …`, `series`], [`${F('1', '<i>R</i><sub>T</sub>')} = ${F('1', '<i>R</i><sub>1</sub>')} + ${F('1', '<i>R</i><sub>2</sub>')} + …`, `parallel`]],
ex: {q: `A 6.0 Ω and a 3.0 Ω resistor in parallel are in series with a 4.0 Ω resistor across a 12 V supply. Find the current through the 3.0 Ω resistor.`,
s: [`Parallel pair: 1/<i>R</i> = 1/6 + 1/3 = 1/2, so <i>R</i> = 2.0 Ω.`, `Total = 2.0 + 4.0 = 6.0 Ω, so supply current = 12 / 6.0 = 2.0 A.`, `pd across the pair = 2.0 × 2.0 = 4.0 V.`, `Current in 3.0 Ω = 4.0 / 3.0.`],
a: `1.3 A`},
quiz: [
 {q: `Three 6 Ω resistors in parallel have a total resistance of`, o: [`2 Ω`, `6 Ω`, `18 Ω`, `0.5 Ω`], a: 0, why: `1/<i>R</i> = 3/6, so <i>R</i> = 2 Ω.`},
 {q: `Kirchhoff's first law is a consequence of conservation of`, o: [`energy`, `charge`, `momentum`, `mass`], a: 1, why: `Charge cannot pile up or vanish at a junction.`},
 {q: `Adding another bulb in parallel to a battery with no internal resistance makes the other bulbs`, o: [`dimmer`, `brighter`, `the same`, `go out`], a: 2, why: `Each branch still has the full supply pd.`}],
exam: {m: 3, q: `Two resistors of 10 Ω and 15 Ω are in parallel across a 6.0 V battery of negligible internal resistance. Calculate the total current from the battery.`,
ms: [`<i>R</i><sub>T</sub> = (10 × 15)/(10 + 15) = 6.0 Ω <span class="mk">[1]</span>`, `<i>I</i> = 6.0 / 6.0 <span class="mk">[1]</span>`, `1.0 A <span class="mk">[1]</span>`]}},

{id: 'potential-divider', u: U5, y: 12, p: 'Paper 1', t: `Potential dividers`,
body: `<p>Two resistors in series share the supply voltage in proportion to their resistances. Taking the output across one of them gives a <b>potential divider</b>: a way to get a chosen fraction of the supply.</p>
<p>Replace one resistor with a sensor to make a circuit that responds to its surroundings:</p>
<ul><li>An <b>LDR</b> has lower resistance in brighter light.</li><li>An <b>NTC thermistor</b> has lower resistance when hotter.</li></ul>
<p>If the output is taken across the sensor, the output falls as its resistance falls. If it is taken across the fixed resistor, the output rises. Choose which way round to match what should happen, for example a street light switching on when it gets dark.</p>
<p>A <b>potentiometer</b> is a variable potential divider with a sliding contact, giving any output from 0 V to the full supply.</p>`,
eq: [[`<i>V</i><sub>out</sub> = <i>V</i><sub>in</sub> × ${F('<i>R</i><sub>2</sub>', '<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>')}`, `output across <i>R</i><sub>2</sub>`]],
ex: {q: `A 9.0 V supply is across a 10 kΩ resistor and an NTC thermistor of 5.0 kΩ in series. Find the pd across the thermistor and say what happens when it gets warmer.`,
s: [`<i>V</i> = 9.0 × 5.0 / (10 + 5.0) = 3.0 V.`, `Warmer means lower thermistor resistance.`, `Its share of the total resistance falls, so its pd falls.`],
a: `3.0 V, falling as temperature rises`},
quiz: [
 {q: `Two equal resistors are across 12 V. The pd across one is`, o: [`3 V`, `6 V`, `12 V`, `24 V`], a: 1, why: `Equal resistances share equally.`},
 {q: `For a lamp to switch on in the dark, the output should be across`, o: [`the LDR`, `the fixed resistor`, `the supply`, `neither`], a: 0, why: `In the dark the LDR's resistance rises, so its pd rises.`},
 {q: `A potentiometer can give outputs from`, o: [`0 V to supply pd`, `only half the supply`, `supply to double`, `only fixed values`], a: 0, why: `The slider can be at either end.`}],
exam: {m: 3, q: `A potential divider uses a 4.7 kΩ resistor and an LDR across 5.0 V. In bright light the output across the LDR is 1.0 V. Calculate the resistance of the LDR in bright light.`,
ms: [`pd across fixed resistor = 4.0 V <span class="mk">[1]</span>`, `Current = 4.0 / 4700 = 8.5 × 10<sup>−4</sup> A <span class="mk">[1]</span>`, `<i>R</i><sub>LDR</sub> = 1.0 / 8.5 × 10<sup>−4</sup> = 1.2 kΩ <span class="mk">[1]</span>`]}},

{id: 'emf', u: U5, y: 12, p: 'Paper 1', t: `EMF and internal resistance`,
body: `<p>The <b>electromotive force</b> ε of a source is the energy it gives each coulomb of charge passing through it. Real cells have <b>internal resistance</b> <i class="v">r</i>, so some of that energy is used up inside the cell.</p>
<p>The pd across the external circuit, the <b>terminal pd</b>, is less than the emf by the <b>lost volts</b> <i class="v">Ir</i>. The more current drawn, the bigger the lost volts.</p>
<p>Required practical: vary an external resistor, record <i class="v">V</i> and <i class="v">I</i>, and plot <i class="v">V</i> against <i class="v">I</i>. Since <i class="v">V</i> = ε − <i class="v">Ir</i>, the <i class="v">y</i>-intercept is ε and the gradient is −<i class="v">r</i>.</p>
<p>Car batteries need very low internal resistance to give the huge current for the starter motor. High-voltage supplies are built with high internal resistance so the current stays safe if they are short-circuited.</p>`,
eq: [[`ε = ${F('<i>E</i>', '<i>Q</i>')}`, `emf`], [`ε = <i>I</i>(<i>R</i> + <i>r</i>)`, `whole circuit`], [`<i>V</i> = ε − <i>Ir</i>`, `terminal pd`]],
ex: {q: `A cell of emf 1.5 V and internal resistance 0.50 Ω is connected to a 2.5 Ω resistor. Find the current and terminal pd.`,
s: [`<i>I</i> = ε / (<i>R</i> + <i>r</i>) = 1.5 / 3.0 = 0.50 A.`, `Lost volts = <i>Ir</i> = 0.50 × 0.50 = 0.25 V.`, `<i>V</i> = 1.5 − 0.25.`],
a: `0.50 A, terminal pd 1.25 V`},
quiz: [
 {q: `On a <i>V</i>–<i>I</i> graph for a cell, the gradient is`, o: [`ε`, `<i>r</i>`, `−<i>r</i>`, `<i>R</i>`], a: 2, why: `<i>V</i> = ε − <i>rI</i>, a straight line falling with gradient −<i>r</i>.`},
 {q: `When no current flows, the terminal pd equals`, o: [`zero`, `the emf`, `the lost volts`, `<i>Ir</i>`], a: 1, why: `No current, no lost volts.`},
 {q: `A car battery has low internal resistance so that`, o: [`it lasts longer`, `it can supply a large current`, `it is safer`, `its emf is higher`], a: 1, why: `Lost volts would be huge otherwise.`}],
exam: {m: 3, q: `A battery gives a terminal pd of 8.4 V when supplying 1.2 A and 9.0 V on open circuit. Calculate its internal resistance and the power wasted inside it.`,
ms: [`emf = 9.0 V; lost volts = 0.6 V <span class="mk">[1]</span>`, `<i>r</i> = 0.6 / 1.2 = 0.50 Ω <span class="mk">[1]</span>`, `<i>P</i> = <i>I</i><sup>2</sup><i>r</i> = 1.2² × 0.50 = 0.72 W <span class="mk">[1]</span>`]}}
];
}
