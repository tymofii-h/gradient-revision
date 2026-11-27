/* AQA A-level Physics 7408: Year 13 lessons */
{
const F = window.fr;
const U6 = 'Further mechanics', U7 = 'Thermal physics', U8 = 'Fields and their consequences', U9 = 'Nuclear physics', U10 = 'Option: Astrophysics';
window.GR.lessons['aqa-physics'].push(

{id: 'circular', u: U6, y: 13, p: 'Paper 1', t: `Circular motion`,
body: `<p>An object moving in a circle at constant speed is still <b>accelerating</b>, because its direction keeps changing. The acceleration points to the centre of the circle and is called <b>centripetal</b>.</p>
<p>A resultant force towards the centre is needed to cause it. This is not a new type of force; it is provided by something real: tension in a string, friction on car tyres, gravity for a satellite.</p>
<p>Angular speed ω is the angle turned per second, in rad s<sup>−1</sup>. One full turn is 2π radians, so ω = 2π<i class="v">f</i> = 2π/<i class="v">T</i>. The linear speed is <i class="v">v</i> = ω<i class="v">r</i>.</p>
<p>If the centripetal force disappears, the object moves off along the tangent. No outward force acts; the feeling of being thrown outwards is your body's inertia.</p>`,
eq: [[`ω = ${F('<i>v</i>', '<i>r</i>')} = 2π<i>f</i>`, `angular speed`], [`<i>a</i> = ${F('<i>v</i><sup>2</sup>', '<i>r</i>')} = ω<sup>2</sup><i>r</i>`, `centripetal acceleration`], [`<i>F</i> = ${F('<i>mv</i><sup>2</sup>', '<i>r</i>')} = <i>m</i>ω<sup>2</sup><i>r</i>`, `centripetal force`]],
ex: {q: `A 900 kg car goes round a bend of radius 50 m at 15 m s<sup>−1</sup>. What friction force must the tyres provide?`,
s: [`<i>F</i> = <i>mv</i><sup>2</sup>/<i>r</i>.`, `<i>F</i> = 900 × 15² / 50 = 900 × 225 / 50.`],
a: `4.05 × 10<sup>3</sup> N towards the centre of the bend`},
quiz: [
 {q: `A wheel turns at 3.0 revolutions per second. Its angular speed is`, o: [`3.0 rad s<sup>−1</sup>`, `9.4 rad s<sup>−1</sup>`, `18.8 rad s<sup>−1</sup>`, `0.33 rad s<sup>−1</sup>`], a: 2, why: `ω = 2π × 3.0 = 18.8 rad s<sup>−1</sup>.`},
 {q: `The centripetal force on the Moon is provided by`, o: [`its speed`, `Earth's gravity`, `inertia`, `centrifugal force`], a: 1, why: `Gravity pulls it towards Earth's centre.`},
 {q: `Doubling the speed at the same radius makes the centripetal force`, o: [`double`, `four times`, `half`, `the same`], a: 1, why: `<i>F</i> ∝ <i>v</i><sup>2</sup>.`}],
exam: {m: 3, q: `A 0.20 kg ball on a string moves in a horizontal circle of radius 0.50 m, making 3.0 revolutions per second. Calculate the tension in the string.`,
ms: [`ω = 2π × 3.0 = 18.8 rad s<sup>−1</sup> <span class="mk">[1]</span>`, `<i>F</i> = <i>m</i>ω<sup>2</sup><i>r</i> = 0.20 × 18.8² × 0.50 <span class="mk">[1]</span>`, `35.5 N <span class="mk">[1]</span>`]}},

{id: 'shm', u: U6, y: 13, p: 'Paper 1', t: `Simple harmonic motion`,
body: `<p>Motion is <b>simple harmonic</b> when the acceleration is proportional to the displacement from equilibrium and always directed back towards it: <i class="v">a</i> = −ω<sup>2</sup><i class="v">x</i>.</p>
<p>The displacement follows a cosine (or sine) curve. Velocity is greatest at the centre and zero at the extremes. Acceleration is greatest at the extremes and zero at the centre. Velocity is π/2 out of phase with displacement; acceleration is in antiphase with it.</p>
<p>The period of SHM does not depend on the amplitude. Such a system is called <b>isochronous</b>, which is why pendulums keep good time.</p>
<p>Energy swaps between kinetic and potential twice per cycle. Without damping the total energy is constant and proportional to <i class="v">A</i><sup>2</sup>.</p>`,
eq: [[`<i>a</i> = −ω<sup>2</sup><i>x</i>`, `defining equation`], [`<i>x</i> = <i>A</i> cos ω<i>t</i>`, `starting from maximum displacement`], [`<i>v</i> = ±ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)`, `speed at displacement <i>x</i>`], [`<i>v</i><sub>max</sub> = ω<i>A</i>, <i>a</i><sub>max</sub> = ω<sup>2</sup><i>A</i>`, `maximum values`]],
ex: {q: `A mass oscillates with amplitude 0.040 m at 2.5 Hz. Find its maximum speed and maximum acceleration.`,
s: [`ω = 2π × 2.5 = 15.7 rad s<sup>−1</sup>.`, `<i>v</i><sub>max</sub> = ω<i>A</i> = 15.7 × 0.040 = 0.63 m s<sup>−1</sup>.`, `<i>a</i><sub>max</sub> = ω<sup>2</sup><i>A</i> = 15.7² × 0.040.`],
a: `0.63 m s<sup>−1</sup> and 9.9 m s<sup>−2</sup>`},
quiz: [
 {q: `In SHM, where is the speed greatest?`, o: [`at maximum displacement`, `at equilibrium`, `halfway out`, `everywhere equal`], a: 1, why: `All potential energy has become kinetic at the centre.`},
 {q: `Doubling the amplitude of SHM changes the period by a factor of`, o: [`1`, `2`, `√2`, `4`], a: 0, why: `SHM is isochronous: period is independent of amplitude.`},
 {q: `Acceleration and displacement in SHM are`, o: [`in phase`, `in antiphase`, `π/2 apart`, `unrelated`], a: 1, why: `<i>a</i> = −ω<sup>2</sup><i>x</i>: always opposite in sign.`}],
exam: {m: 3, q: `A particle in SHM has amplitude 5.0 cm and period 0.80 s. Calculate its speed when it is 3.0 cm from equilibrium.`,
ms: [`ω = 2π / 0.80 = 7.85 rad s<sup>−1</sup> <span class="mk">[1]</span>`, `<i>v</i> = ω√(0.050² − 0.030²) = 7.85 × 0.040 <span class="mk">[1]</span>`, `0.31 m s<sup>−1</sup> <span class="mk">[1]</span>`]}},

{id: 'shm-systems', u: U6, y: 13, p: 'Paper 1', t: `Mass–spring systems and pendulums`,
body: `<p>A mass on a spring obeys SHM because the restoring force is <i class="v">kx</i>. Its period depends on the mass and spring constant only, not on <i class="v">g</i>: the same spring oscillates at the same rate on the Moon.</p>
<p>A <b>simple pendulum</b> approximates SHM only for small angles, below about 10°. Its period depends on the length and <i class="v">g</i>, not on the mass of the bob.</p>
<p>Required practical: time 10 or 20 oscillations and divide to reduce the percentage uncertainty in timing. Start timing as the bob passes the centre, where it moves fastest, using a fiducial marker. Plot <i class="v">T</i><sup>2</sup> against <i class="v">l</i>: the gradient is 4π<sup>2</sup>/<i class="v">g</i>.</p>`,
eq: [[`<i>T</i> = 2π√${F('<i>m</i>', '<i>k</i>')}`, `mass on a spring`], [`<i>T</i> = 2π√${F('<i>l</i>', '<i>g</i>')}`, `simple pendulum, small angles`]],
ex: {q: `What length of pendulum has a period of exactly 2.0 s?`,
s: [`Rearrange: <i>l</i> = <i>gT</i><sup>2</sup> / 4π<sup>2</sup>.`, `<i>l</i> = 9.81 × 4.0 / 39.5.`],
a: `<i>l</i> = 0.99 m`},
quiz: [
 {q: `Quadrupling the mass on a spring changes the period by a factor of`, o: [`¼`, `½`, `2`, `4`], a: 2, why: `<i>T</i> ∝ √<i>m</i>, √4 = 2.`},
 {q: `A pendulum is taken to the Moon. Its period`, o: [`increases`, `decreases`, `stays the same`, `becomes zero`], a: 0, why: `Smaller <i>g</i> means longer period.`},
 {q: `Why time 20 swings rather than one?`, o: [`to reduce the percentage uncertainty`, `to make the swings smaller`, `to avoid damping`, `to increase <i>g</i>`], a: 0, why: `Reaction-time error is shared over 20 periods.`}],
exam: {m: 3, q: `A 0.50 kg mass on a spring of stiffness 20 N m<sup>−1</sup> is pulled down 4.0 cm and released. Calculate the period and the maximum speed.`,
ms: [`<i>T</i> = 2π√(0.50/20) = 0.99 s <span class="mk">[1]</span>`, `ω = 2π/<i>T</i> = 6.3 rad s<sup>−1</sup> <span class="mk">[1]</span>`, `<i>v</i><sub>max</sub> = ω<i>A</i> = 6.3 × 0.040 = 0.25 m s<sup>−1</sup> <span class="mk">[1]</span>`]}},

{id: 'resonance', u: U6, y: 13, p: 'Paper 1', t: `Damping, forced vibrations and resonance`,
body: `<p><b>Free vibrations</b> happen at the system's natural frequency with no energy added. <b>Damping</b> removes energy, so the amplitude falls over time.</p>
<ul><li><b>Light damping:</b> the amplitude decays gradually over many cycles.</li><li><b>Critical damping:</b> the system returns to equilibrium in the shortest time without overshooting, as in car suspension.</li><li><b>Heavy damping:</b> it returns very slowly without oscillating, as in a door closer.</li></ul>
<p>A <b>forced vibration</b> is driven by a periodic force at the driving frequency. When the driving frequency equals the natural frequency, energy transfer is most efficient and the amplitude is largest: <b>resonance</b>. At resonance the displacement is π/2 behind the driver.</p>
<p>More damping makes the resonance peak lower and broader, and moves it slightly below the natural frequency. Resonance is useful in radio tuning and musical instruments, and dangerous in bridges and buildings during earthquakes.</p>`,
eq: [],
ex: {q: `A washing machine shakes violently at one spin speed, then runs smoothly at higher speeds. Explain.`,
s: [`The spinning drum applies a periodic driving force.`, `At one speed its frequency equals the natural frequency of the machine's body.`, `Resonance occurs: energy transfer is maximum and the amplitude is large.`, `At higher speeds the driving frequency no longer matches, so the amplitude is small.`],
a: `Resonance at the speed where driving frequency equals natural frequency`},
quiz: [
 {q: `Critical damping is used in`, o: [`a guitar string`, `car suspension`, `a swing`, `a radio tuner`], a: 1, why: `It stops the car bouncing as quickly as possible.`},
 {q: `Increasing damping makes the resonance peak`, o: [`taller and sharper`, `lower and broader`, `move to higher frequency`, `disappear immediately`], a: 1, why: `More energy is lost each cycle.`},
 {q: `At resonance, the phase difference between driver and oscillator is`, o: [`0`, `π/2`, `π`, `2π`], a: 1, why: `The oscillator lags the driver by π/2.`}],
exam: {m: 3, q: `Explain why soldiers are told to break step when crossing a footbridge.`,
ms: [`Marching in step gives a periodic driving force <span class="mk">[1]</span>`, `If its frequency matches the bridge's natural frequency, resonance occurs <span class="mk">[1]</span>`, `Large amplitude oscillations could damage the bridge <span class="mk">[1]</span>`]}},

{id: 'thermal-energy', u: U7, y: 13, p: 'Paper 2', t: `Specific heat capacity and latent heat`,
body: `<p><b>Internal energy</b> is the sum of the randomly distributed kinetic and potential energies of all the particles in a body. Heating raises it; so does doing work on it.</p>
<p><b>Specific heat capacity</b> <i class="v">c</i> is the energy needed to raise the temperature of 1 kg by 1 K. Water's is high, 4200 J kg<sup>−1</sup> K<sup>−1</sup>.</p>
<p>During a change of state the temperature stays constant. The energy breaks bonds, raising the potential energy of particles but not their kinetic energy. <b>Specific latent heat</b> <i class="v">l</i> is the energy to change the state of 1 kg without changing temperature: fusion for melting, vaporisation for boiling.</p>
<p>In a mixing problem, energy lost by the hot object equals energy gained by the cold one, if none escapes to the surroundings.</p>`,
eq: [[`<i>Q</i> = <i>mc</i>Δθ`, `heating without change of state`], [`<i>Q</i> = <i>ml</i>`, `change of state`]],
ex: {q: `A 2.0 kW kettle holds 0.50 kg of water at 20 °C. How long does it take to reach 100 °C? (<i>c</i> = 4200 J kg<sup>−1</sup> K<sup>−1</sup>)`,
s: [`<i>Q</i> = 0.50 × 4200 × 80 = 1.68 × 10<sup>5</sup> J.`, `<i>t</i> = <i>Q</i>/<i>P</i> = 1.68 × 10<sup>5</sup> / 2000.`],
a: `84 s, assuming no energy is lost`},
quiz: [
 {q: `While ice melts at 0 °C, the energy supplied increases the particles'`, o: [`kinetic energy`, `potential energy`, `temperature`, `speed`], a: 1, why: `Temperature is constant, so mean kinetic energy is constant.`},
 {q: `Energy to boil away 0.20 kg of water at 100 °C? (<i>l</i> = 2.26 × 10<sup>6</sup> J kg<sup>−1</sup>)`, o: [`4.5 × 10<sup>5</sup> J`, `1.1 × 10<sup>7</sup> J`, `2.3 × 10<sup>6</sup> J`, `8.4 × 10<sup>4</sup> J`], a: 0, why: `0.20 × 2.26 × 10<sup>6</sup> = 4.52 × 10<sup>5</sup> J.`},
 {q: `Internal energy is`, o: [`only kinetic energy`, `random kinetic plus potential energy of particles`, `temperature`, `heat`], a: 1, why: `It includes both stores of all particles.`}],
exam: {m: 3, q: `Calculate the energy needed to turn 0.20 kg of ice at −10 °C into water at 0 °C. <i>c</i><sub>ice</sub> = 2100 J kg<sup>−1</sup> K<sup>−1</sup>, <i>l</i><sub>f</sub> = 3.34 × 10<sup>5</sup> J kg<sup>−1</sup>.`,
ms: [`Warming ice: 0.20 × 2100 × 10 = 4200 J <span class="mk">[1]</span>`, `Melting: 0.20 × 3.34 × 10<sup>5</sup> = 66 800 J <span class="mk">[1]</span>`, `Total 71 000 J <span class="mk">[1]</span>`]}},

{id: 'ideal-gas', u: U7, y: 13, p: 'Paper 2', t: `Ideal gas laws`,
body: `<p>For a fixed mass of gas, three laws come from experiment:</p>
<ul><li><b>Boyle's law:</b> <i class="v">pV</i> is constant at constant temperature.</li><li><b>Charles's law:</b> <i class="v">V</i>/<i class="v">T</i> is constant at constant pressure.</li><li><b>Pressure law:</b> <i class="v">p</i>/<i class="v">T</i> is constant at constant volume.</li></ul>
<p>Temperatures must be in <b>kelvin</b>: <i class="v">T</i> (K) = θ (°C) + 273. Extrapolating a pressure–temperature graph to zero pressure gives <b>absolute zero</b>, 0 K or −273 °C, where particles have minimum kinetic energy.</p>
<p>Combining them gives the ideal gas equation, <i class="v">pV</i> = <i class="v">nRT</i> for <i class="v">n</i> moles, or <i class="v">pV</i> = <i class="v">NkT</i> for <i class="v">N</i> molecules. Work done by a gas expanding at constant pressure is <i class="v">p</i>Δ<i class="v">V</i>.</p>`,
eq: [[`<i>pV</i> = <i>nRT</i>`, `<i>R</i> = 8.31 J mol<sup>−1</sup> K<sup>−1</sup>`], [`<i>pV</i> = <i>NkT</i>`, `<i>k</i> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>`], [`<i>W</i> = <i>p</i>Δ<i>V</i>`, `work done at constant pressure`]],
ex: {q: `How many moles of gas are in a 0.020 m<sup>3</sup> container at 1.0 × 10<sup>5</sup> Pa and 300 K?`,
s: [`<i>n</i> = <i>pV</i> / <i>RT</i>.`, `<i>n</i> = 1.0 × 10<sup>5</sup> × 0.020 / (8.31 × 300) = 2000 / 2493.`],
a: `<i>n</i> = 0.80 mol`},
quiz: [
 {q: `27 °C in kelvin is`, o: [`246 K`, `273 K`, `300 K`, `327 K`], a: 2, why: `27 + 273 = 300 K.`},
 {q: `At constant temperature, halving the volume makes the pressure`, o: [`half`, `double`, `the same`, `four times`], a: 1, why: `Boyle's law: <i>pV</i> constant.`},
 {q: `Absolute zero is where`, o: [`gas pressure would be zero`, `water freezes`, `particles move fastest`, `volume is maximum`], a: 0, why: `Extrapolating the pressure law to <i>p</i> = 0 gives −273 °C.`}],
exam: {m: 3, q: `A car tyre is at 2.4 × 10<sup>5</sup> Pa at 280 K. After driving, the air inside is at 300 K. Assuming constant volume, calculate the new pressure.`,
ms: [`<i>p</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>p</i><sub>2</sub>/<i>T</i><sub>2</sub> <span class="mk">[1]</span>`, `<i>p</i><sub>2</sub> = 2.4 × 10<sup>5</sup> × 300 / 280 <span class="mk">[1]</span>`, `2.6 × 10<sup>5</sup> Pa <span class="mk">[1]</span>`]}},

{id: 'kinetic-theory', u: U7, y: 13, p: 'Paper 2', t: `Molecular kinetic theory`,
body: `<p>Kinetic theory explains gas pressure from molecules. Molecules hit the container walls; each collision changes their momentum, so the wall feels a force. Pressure is that force per unit area.</p>
<p>Assumptions of an ideal gas:</p>
<ul><li>A large number of molecules in random motion.</li><li>Molecules have negligible volume compared with the container.</li><li>Collisions are perfectly elastic.</li><li>No forces between molecules except during collisions, and collisions take negligible time.</li></ul>
<p>From these, <i class="v">pV</i> = ⅓<i class="v">Nm</i>(<i class="v">c</i><sub>rms</sub>)<sup>2</sup>. Comparing with <i class="v">pV</i> = <i class="v">NkT</i> shows that the mean kinetic energy of a molecule is (3/2)<i class="v">kT</i>: temperature is a measure of average molecular kinetic energy.</p>
<p>Brownian motion, the random jiggling of smoke particles seen under a microscope, was evidence for moving molecules.</p>`,
eq: [[`<i>pV</i> = ⅓<i>Nm</i>(<i>c</i><sub>rms</sub>)<sup>2</sup>`, `kinetic theory`], [`½<i>m</i>(<i>c</i><sub>rms</sub>)<sup>2</sup> = ${F('3', '2')}<i>kT</i> = ${F('3<i>RT</i>', '2<i>N</i><sub>A</sub>')}`, `mean kinetic energy`]],
ex: {q: `Find the rms speed of nitrogen molecules (mass 4.65 × 10<sup>−26</sup> kg) at 300 K.`,
s: [`Mean KE = 1.5 × 1.38 × 10<sup>−23</sup> × 300 = 6.21 × 10<sup>−21</sup> J.`, `<i>c</i><sub>rms</sub><sup>2</sup> = 2 × 6.21 × 10<sup>−21</sup> / 4.65 × 10<sup>−26</sup> = 2.67 × 10<sup>5</sup>.`, `Take the square root.`],
a: `<i>c</i><sub>rms</sub> ≈ 517 m s<sup>−1</sup>`},
quiz: [
 {q: `Doubling the kelvin temperature of a gas changes the rms speed by a factor of`, o: [`2`, `√2`, `4`, `½`], a: 1, why: `Mean KE ∝ <i>T</i>, so <i>c</i><sub>rms</sub> ∝ √<i>T</i>.`},
 {q: `Which is not an ideal gas assumption?`, o: [`elastic collisions`, `negligible molecular volume`, `strong forces between molecules`, `random motion`], a: 2, why: `Ideal gases have no intermolecular forces except in collisions.`},
 {q: `Brownian motion is evidence that`, o: [`atoms have nuclei`, `molecules are moving randomly`, `gases are heavy`, `light is a wave`], a: 1, why: `Invisible fast molecules bombard the visible particles.`}],
exam: {m: 4, q: `Use kinetic theory to explain why the pressure of a gas rises when it is heated in a sealed container.`,
ms: [`Molecules gain kinetic energy and move faster <span class="mk">[1]</span>`, `They hit the walls more often <span class="mk">[1]</span>`, `Each collision has a greater change of momentum <span class="mk">[1]</span>`, `So a greater force per unit area on the walls <span class="mk">[1]</span>`]}},

{id: 'gravitation', u: U8, y: 13, p: 'Paper 2', t: `Newton's law of gravitation and field strength`,
body: `<p>Every mass attracts every other mass. <b>Newton's law of gravitation</b>: the force is proportional to the product of the masses and inversely proportional to the square of the distance between their centres.</p>
<p><b>Gravitational field strength</b> <i class="v">g</i> is the force per unit mass at a point, in N kg<sup>−1</sup>. It is a vector pointing towards the mass.</p>
<p>Outside a uniform sphere, the field is the same as if all its mass were at the centre: radial field lines, getting further apart with distance. Near the Earth's surface the field is almost uniform, with parallel, equally spaced lines.</p>
<p>Inside the Earth, <i class="v">g</i> falls linearly to zero at the centre. Outside, it falls as 1/<i class="v">r</i><sup>2</sup>.</p>`,
eq: [[`<i>F</i> = ${F('<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>', '<i>r</i><sup>2</sup>')}`, `<i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup> kg<sup>−2</sup>`], [`<i>g</i> = ${F('<i>F</i>', '<i>m</i>')} = ${F('<i>GM</i>', '<i>r</i><sup>2</sup>')}`, `field strength`]],
ex: {q: `Show that <i>g</i> at Earth's surface is about 9.8 N kg<sup>−1</sup>. <i>M</i> = 5.97 × 10<sup>24</sup> kg, <i>R</i> = 6.37 × 10<sup>6</sup> m.`,
s: [`<i>GM</i> = 6.67 × 10<sup>−11</sup> × 5.97 × 10<sup>24</sup> = 3.98 × 10<sup>14</sup>.`, `<i>R</i><sup>2</sup> = (6.37 × 10<sup>6</sup>)<sup>2</sup> = 4.06 × 10<sup>13</sup>.`, `<i>g</i> = 3.98 × 10<sup>14</sup> / 4.06 × 10<sup>13</sup>.`],
a: `<i>g</i> = 9.81 N kg<sup>−1</sup>`},
quiz: [
 {q: `Doubling the distance between two masses makes the force`, o: [`½`, `¼`, `2×`, `4×`], a: 1, why: `Inverse square law.`},
 {q: `Units of gravitational field strength:`, o: [`N`, `N kg<sup>−1</sup>`, `J kg<sup>−1</sup>`, `kg m<sup>−2</sup>`], a: 1, why: `Force per unit mass.`},
 {q: `Near Earth's surface the field is approximately`, o: [`radial and strong`, `uniform`, `zero`, `repulsive`], a: 1, why: `Over small heights the lines are nearly parallel.`}],
exam: {m: 2, q: `The ISS orbits 400 km above the surface. Calculate <i>g</i> at that height.`,
ms: [`<i>r</i> = 6.37 × 10<sup>6</sup> + 4.0 × 10<sup>5</sup> = 6.77 × 10<sup>6</sup> m <span class="mk">[1]</span>`, `<i>g</i> = 3.98 × 10<sup>14</sup> / (6.77 × 10<sup>6</sup>)<sup>2</sup> = 8.7 N kg<sup>−1</sup> <span class="mk">[1]</span>`]}},

{id: 'grav-potential', u: U8, y: 13, p: 'Paper 2', t: `Gravitational potential and escape velocity`,
body: `<p><b>Gravitational potential</b> <i class="v">V</i> at a point is the work done per unit mass to bring a small mass from infinity to that point. It is zero at infinity and negative everywhere else, because gravity is attractive and you would have to do work to pull the mass back out.</p>
<p>The work done moving a mass <i class="v">m</i> between two points is <i class="v">m</i>Δ<i class="v">V</i>. <b>Equipotentials</b> are surfaces of equal potential; no work is done moving along them, and they cross field lines at right angles.</p>
<p>Field strength is minus the potential gradient: <i class="v">g</i> = −Δ<i class="v">V</i>/Δ<i class="v">r</i>. The area under a <i class="v">g</i>–<i class="v">r</i> graph is Δ<i class="v">V</i>.</p>
<p><b>Escape velocity</b> is the minimum speed needed to reach infinity with no further energy input: kinetic energy must equal the potential energy needed, ½<i class="v">mv</i><sup>2</sup> = <i class="v">GMm</i>/<i class="v">r</i>. It does not depend on the mass that escapes.</p>`,
eq: [[`<i>V</i> = −${F('<i>GM</i>', '<i>r</i>')}`, `potential, J kg<sup>−1</sup>`], [`Δ<i>W</i> = <i>m</i>Δ<i>V</i>`, `work done`], [`<i>g</i> = −${F('Δ<i>V</i>', 'Δ<i>r</i>')}`, `potential gradient`], [`<i>v</i><sub>esc</sub> = √${F('2<i>GM</i>', '<i>r</i>')}`, `escape velocity`]],
ex: {q: `Calculate the escape velocity from Earth's surface. <i>GM</i> = 3.98 × 10<sup>14</sup> N m<sup>2</sup> kg<sup>−1</sup>, <i>R</i> = 6.37 × 10<sup>6</sup> m.`,
s: [`<i>v</i><sup>2</sup> = 2<i>GM</i>/<i>R</i> = 2 × 3.98 × 10<sup>14</sup> / 6.37 × 10<sup>6</sup> = 1.25 × 10<sup>8</sup>.`, `Take the square root.`],
a: `<i>v</i> = 1.1 × 10<sup>4</sup> m s<sup>−1</sup>, about 11 km s<sup>−1</sup>`},
quiz: [
 {q: `Gravitational potential at infinity is`, o: [`negative`, `zero`, `positive`, `infinite`], a: 1, why: `By definition.`},
 {q: `No work is done moving a mass along`, o: [`a field line`, `an equipotential`, `a radius`, `any path`], a: 1, why: `Δ<i>V</i> = 0 along an equipotential.`},
 {q: `Escape velocity depends on`, o: [`the escaping mass`, `the planet's mass and radius`, `direction of launch`, `air only`], a: 1, why: `<i>m</i> cancels from the energy equation.`}],
exam: {m: 3, q: `Calculate the work needed to lift a 1200 kg satellite from Earth's surface to an orbit radius of 4.2 × 10<sup>7</sup> m.`,
ms: [`<i>V</i> at surface = −3.98 × 10<sup>14</sup> / 6.37 × 10<sup>6</sup> = −6.25 × 10<sup>7</sup> J kg<sup>−1</sup> <span class="mk">[1]</span>`, `<i>V</i> at orbit = −9.5 × 10<sup>6</sup> J kg<sup>−1</sup> <span class="mk">[1]</span>`, `<i>W</i> = 1200 × 5.3 × 10<sup>7</sup> = 6.4 × 10<sup>10</sup> J <span class="mk">[1]</span>`]}},

{id: 'orbits', u: U8, y: 13, p: 'Paper 2', t: `Orbits of planets and satellites`,
body: `<p>For a circular orbit, gravity provides the centripetal force: <i class="v">GMm</i>/<i class="v">r</i><sup>2</sup> = <i class="v">mv</i><sup>2</sup>/<i class="v">r</i>. So orbital speed falls with radius, and the orbit does not depend on the satellite's mass.</p>
<p>Combining with <i class="v">v</i> = 2π<i class="v">r</i>/<i class="v">T</i> gives <i class="v">T</i><sup>2</sup> ∝ <i class="v">r</i><sup>3</sup>, Kepler's third law.</p>
<p>Total energy of an orbiting satellite = kinetic + potential = −<i class="v">GMm</i>/2<i class="v">r</i>. Moving to a higher orbit needs energy, even though the satellite ends up moving more slowly.</p>
<p>A <b>geostationary</b> satellite orbits above the equator, west to east, with a period of 24 hours, so it stays above one point. It is used for TV and communications. <b>Low orbit</b> satellites move fast, cover the whole surface over time, and suit imaging and weather.</p>`,
eq: [[`<i>v</i> = √${F('<i>GM</i>', '<i>r</i>')}`, `orbital speed`], [`<i>T</i><sup>2</sup> = ${F('4π<sup>2</sup>', '<i>GM</i>')}<i>r</i><sup>3</sup>`, `Kepler's third law`], [`<i>E</i><sub>total</sub> = −${F('<i>GMm</i>', '2<i>r</i>')}`, `orbital energy`]],
ex: {q: `Find the orbital radius of a geostationary satellite. <i>GM</i> = 3.98 × 10<sup>14</sup> N m<sup>2</sup> kg<sup>−1</sup>.`,
s: [`<i>T</i> = 24 h = 86 400 s.`, `<i>r</i><sup>3</sup> = <i>GMT</i><sup>2</sup>/4π<sup>2</sup> = 3.98 × 10<sup>14</sup> × 86 400² / 39.5 = 7.5 × 10<sup>22</sup> m<sup>3</sup>.`, `Take the cube root.`],
a: `<i>r</i> = 4.2 × 10<sup>7</sup> m, about 36 000 km above the surface`},
quiz: [
 {q: `A satellite in a higher orbit moves`, o: [`faster`, `slower`, `at the same speed`, `backwards`], a: 1, why: `<i>v</i> ∝ 1/√<i>r</i>.`},
 {q: `If orbit radius is 4 times larger, the period is`, o: [`2×`, `4×`, `8×`, `16×`], a: 2, why: `<i>T</i> ∝ <i>r</i><sup>3/2</sup>; 4<sup>1.5</sup> = 8.`},
 {q: `A geostationary satellite has a period of`, o: [`90 minutes`, `12 hours`, `24 hours`, `one month`], a: 2, why: `It turns with the Earth.`}],
exam: {m: 3, q: `Explain why astronauts on the ISS feel weightless even though <i>g</i> there is about 8.7 N kg<sup>−1</sup>.`,
ms: [`The ISS and astronauts are in free fall, both accelerating towards Earth at <i>g</i> <span class="mk">[1]</span>`, `There is no contact (reaction) force from the floor <span class="mk">[1]</span>`, `Weightlessness is the absence of a reaction force, not the absence of gravity <span class="mk">[1]</span>`]}},

{id: 'electric-fields', u: U8, y: 13, p: 'Paper 2', t: `Electric fields and Coulomb's law`,
body: `<p><b>Coulomb's law</b>: the force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation. Like charges repel; unlike attract.</p>
<p><b>Electric field strength</b> <i class="v">E</i> is force per unit positive charge, in N C<sup>−1</sup>. Around a point charge the field is radial. Between two parallel plates it is uniform: <i class="v">E</i> = <i class="v">V</i>/<i class="v">d</i>, in V m<sup>−1</sup>.</p>
<p>A charged particle in a uniform field feels a constant force, so it follows a parabolic path, just like a projectile under gravity.</p>
<p><b>Electric potential</b> <i class="v">V</i> = <i class="v">Q</i>/4πε<sub>0</sub><i class="v">r</i> is positive near a positive charge. Compared with gravity, electric forces are vastly stronger between particles: for two protons, about 10<sup>36</sup> times larger.</p>`,
eq: [[`<i>F</i> = ${F('1', '4πε<sub>0</sub>')} ${F('<i>Q</i><sub>1</sub><i>Q</i><sub>2</sub>', '<i>r</i><sup>2</sup>')}`, `ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> F m<sup>−1</sup>`], [`<i>E</i> = ${F('<i>F</i>', '<i>Q</i>')} = ${F('<i>V</i>', '<i>d</i>')}`, `field strength, uniform field`], [`<i>V</i> = ${F('<i>Q</i>', '4πε<sub>0</sub><i>r</i>')}`, `potential of a point charge`]],
ex: {q: `Find the electrostatic force between the proton and electron in hydrogen, 5.3 × 10<sup>−11</sup> m apart.`,
s: [`1/4πε<sub>0</sub> = 8.99 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>.`, `<i>F</i> = 8.99 × 10<sup>9</sup> × (1.60 × 10<sup>−19</sup>)<sup>2</sup> / (5.3 × 10<sup>−11</sup>)<sup>2</sup>.`],
a: `<i>F</i> = 8.2 × 10<sup>−8</sup> N, attractive`},
quiz: [
 {q: `Plates 0.020 m apart have 500 V across them. <i>E</i> = `, o: [`10 V m<sup>−1</sup>`, `2.5 × 10<sup>4</sup> V m<sup>−1</sup>`, `25 V m<sup>−1</sup>`, `1.0 × 10<sup>4</sup> V m<sup>−1</sup>`], a: 1, why: `500 / 0.020 = 25 000 V m<sup>−1</sup>.`},
 {q: `An electron enters a uniform field at right angles. Its path is`, o: [`straight`, `circular`, `parabolic`, `spiral`], a: 2, why: `Constant force perpendicular to initial velocity.`},
 {q: `Electric potential near a negative charge is`, o: [`positive`, `negative`, `zero`, `infinite`], a: 1, why: `<i>V</i> takes the sign of <i>Q</i>.`}],
exam: {m: 3, q: `An electron is between plates 4.0 cm apart with 2000 V across them. Calculate its acceleration.`,
ms: [`<i>E</i> = 2000 / 0.040 = 5.0 × 10<sup>4</sup> V m<sup>−1</sup> <span class="mk">[1]</span>`, `<i>F</i> = <i>eE</i> = 8.0 × 10<sup>−15</sup> N <span class="mk">[1]</span>`, `<i>a</i> = <i>F</i>/<i>m</i> = 8.8 × 10<sup>15</sup> m s<sup>−2</sup> <span class="mk">[1]</span>`]}},

{id: 'capacitors', u: U8, y: 13, p: 'Paper 2', t: `Capacitors and capacitance`,
body: `<p>A capacitor stores charge on two conducting plates separated by an insulator (the <b>dielectric</b>). <b>Capacitance</b> is the charge stored per volt, measured in farads.</p>
<p>A dielectric increases capacitance. Its polar molecules line up in the field, opposing it, so more charge can be stored for the same pd. The relative permittivity ε<sub>r</sub> measures how much.</p>
<p>The energy stored is the area under a <i class="v">Q</i>–<i class="v">V</i> graph, a triangle, so <i class="v">E</i> = ½<i class="v">QV</i>. When charging from a battery, the battery supplies <i class="v">QV</i> but only half is stored; the rest is dissipated in the resistance.</p>
<p>Uses include camera flashes (quick release of energy), smoothing power supplies, and backup power for memory.</p>`,
eq: [[`<i>C</i> = ${F('<i>Q</i>', '<i>V</i>')}`, `capacitance, F`], [`<i>C</i> = ${F('<i>A</i>ε<sub>0</sub>ε<sub>r</sub>', '<i>d</i>')}`, `parallel plates`], [`<i>E</i> = ½<i>QV</i> = ½<i>CV</i><sup>2</sup> = ${F('<i>Q</i><sup>2</sup>', '2<i>C</i>')}`, `energy stored`]],
ex: {q: `A 470 μF capacitor is charged to 12 V. Find the charge and energy stored.`,
s: [`<i>Q</i> = <i>CV</i> = 470 × 10<sup>−6</sup> × 12 = 5.64 × 10<sup>−3</sup> C.`, `<i>E</i> = ½<i>CV</i><sup>2</sup> = ½ × 470 × 10<sup>−6</sup> × 144.`],
a: `5.6 mC and 0.034 J`},
quiz: [
 {q: `Doubling the pd on a capacitor changes the energy stored by`, o: [`2×`, `4×`, `½`, `no change`], a: 1, why: `<i>E</i> ∝ <i>V</i><sup>2</sup>.`},
 {q: `Halving the plate separation makes <i>C</i>`, o: [`half`, `double`, `four times`, `the same`], a: 1, why: `<i>C</i> ∝ 1/<i>d</i>.`},
 {q: `The area under a <i>Q</i>–<i>V</i> graph is`, o: [`capacitance`, `energy stored`, `current`, `time constant`], a: 1, why: `Work done putting the charge on.`}],
exam: {m: 2, q: `Explain how a dielectric increases the capacitance of a capacitor.`,
ms: [`Polar molecules in the dielectric align with the field, producing an opposing field <span class="mk">[1]</span>`, `This reduces the pd for a given charge, so more charge is stored per volt <span class="mk">[1]</span>`]}},

{id: 'capacitor-discharge', u: U8, y: 13, p: 'Paper 2', t: `Charging and discharging capacitors`,
body: `<p>When a capacitor discharges through a resistor, the current is largest at first and falls as the pd falls. Charge, pd and current all fall <b>exponentially</b> with time.</p>
<p>The <b>time constant</b> <i class="v">RC</i> is the time for them to fall to 1/e, about 37%, of the starting value. After 5<i class="v">RC</i> the capacitor is almost fully discharged. The half-life is 0.69<i class="v">RC</i>.</p>
<p>When charging, <i class="v">Q</i> and <i class="v">V</i> rise towards their maximum as 1 − e<sup>−<i>t</i>/<i>RC</i></sup>, while the current still falls exponentially.</p>
<p>Required practical: record <i class="v">V</i> at regular times during discharge and plot ln <i class="v">V</i> against <i class="v">t</i>. The straight line has gradient −1/<i class="v">RC</i>.</p>`,
eq: [[`<i>Q</i> = <i>Q</i><sub>0</sub>e<sup>−<i>t</i>/<i>RC</i></sup>`, `discharge (same form for <i>V</i> and <i>I</i>)`], [`<i>Q</i> = <i>Q</i><sub>0</sub>(1 − e<sup>−<i>t</i>/<i>RC</i></sup>)`, `charging`], [`<i>T</i><sub>½</sub> = 0.69<i>RC</i>`, `half-life`]],
ex: {q: `A 100 μF capacitor charged to 12 V discharges through 50 kΩ. Find the pd after 3.0 s.`,
s: [`<i>RC</i> = 50 × 10<sup>3</sup> × 100 × 10<sup>−6</sup> = 5.0 s.`, `<i>V</i> = 12 e<sup>−3.0/5.0</sup> = 12 e<sup>−0.60</sup> = 12 × 0.549.`],
a: `<i>V</i> ≈ 6.6 V`},
quiz: [
 {q: `After one time constant, a discharging capacitor has`, o: [`0%`, `37%`, `50%`, `63%`], a: 1, why: `e<sup>−1</sup> = 0.37.`},
 {q: `Increasing the resistance makes discharge`, o: [`faster`, `slower`, `unchanged`, `instant`], a: 1, why: `Larger <i>RC</i>.`},
 {q: `A graph of ln <i>V</i> against <i>t</i> for discharge has gradient`, o: [`<i>RC</i>`, `−<i>RC</i>`, `−1/<i>RC</i>`, `1/<i>RC</i>`], a: 2, why: `ln <i>V</i> = ln <i>V</i><sub>0</sub> − <i>t</i>/<i>RC</i>.`}],
exam: {m: 3, q: `A 220 μF capacitor discharges through 10 kΩ. Calculate the time for the pd to fall to 25% of its starting value.`,
ms: [`<i>RC</i> = 2.2 s <span class="mk">[1]</span>`, `0.25 = e<sup>−<i>t</i>/2.2</sup>, so <i>t</i> = 2.2 ln 4 <span class="mk">[1]</span>`, `3.0 s <span class="mk">[1]</span>`]}},

{id: 'magnetic-force', u: U8, y: 13, p: 'Paper 2', t: `Magnetic fields and the motor effect`,
body: `<p>A current-carrying wire in a magnetic field feels a force at right angles to both the current and the field. Use <b>Fleming's left-hand rule</b>: First finger is Field, seCond finger is Current, thuMb is Motion.</p>
<p><b>Magnetic flux density</b> <i class="v">B</i>, in tesla, is the force per unit length per unit current on a wire at right angles to the field.</p>
<p>A charged particle moving through a field feels <i class="v">F</i> = <i class="v">BQv</i>. The force is always perpendicular to the velocity, so it does no work and the particle moves in a circle at constant speed.</p>
<p>The <b>cyclotron</b> uses this: particles spiral outwards in a magnetic field and are accelerated by an alternating pd across a gap each half turn.</p>`,
eq: [[`<i>F</i> = <i>BIl</i>`, `wire perpendicular to field`], [`<i>F</i> = <i>BQv</i>`, `moving charge`], [`<i>r</i> = ${F('<i>mv</i>', '<i>BQ</i>')}`, `radius of circular path`]],
ex: {q: `A 5.0 cm wire carries 3.0 A at right angles to a 0.20 T field. Find the force on it.`,
s: [`<i>F</i> = <i>BIl</i> = 0.20 × 3.0 × 0.050.`],
a: `<i>F</i> = 0.030 N`},
quiz: [
 {q: `The force on a moving charge in a magnetic field does no work because`, o: [`it is too small`, `it is perpendicular to velocity`, `charge is conserved`, `the field is uniform`], a: 1, why: `Work needs a force component along the motion.`},
 {q: `Doubling a particle's speed changes its circle radius by`, o: [`½`, `2`, `4`, `no change`], a: 1, why: `<i>r</i> ∝ <i>v</i>.`},
 {q: `In Fleming's left-hand rule the thumb shows`, o: [`field`, `current`, `force`, `flux`], a: 2, why: `ThuMb = Motion, the direction of force.`}],
exam: {m: 3, q: `An electron moves at 2.0 × 10<sup>7</sup> m s<sup>−1</sup> perpendicular to a 1.5 mT field. Calculate the radius of its path.`,
ms: [`<i>r</i> = <i>mv</i>/<i>BQ</i> <span class="mk">[1]</span>`, `= 9.11 × 10<sup>−31</sup> × 2.0 × 10<sup>7</sup> / (1.5 × 10<sup>−3</sup> × 1.60 × 10<sup>−19</sup>) <span class="mk">[1]</span>`, `0.076 m <span class="mk">[1]</span>`]}},

{id: 'induction', u: U8, y: 13, p: 'Paper 2', t: `Electromagnetic induction`,
body: `<p><b>Magnetic flux</b> Φ = <i class="v">BA</i> through an area perpendicular to the field, in webers. <b>Flux linkage</b> is <i class="v">N</i>Φ for a coil of <i class="v">N</i> turns. If the coil is at an angle, use <i class="v">N</i>Φ = <i class="v">BAN</i> cos θ, where θ is between the field and the normal to the coil.</p>
<p><b>Faraday's law:</b> the induced emf equals the rate of change of flux linkage. <b>Lenz's law:</b> the induced current flows in a direction that opposes the change producing it. This is conservation of energy: you must do work to push a magnet into a coil.</p>
<p>A coil rotating in a uniform field produces a sinusoidal emf, the basis of generators. The peak emf is <i class="v">BAN</i>ω.</p>
<p>Moving a straight conductor of length <i class="v">l</i> at speed <i class="v">v</i> through a field gives an emf <i class="v">Blv</i>.</p>`,
eq: [[`Φ = <i>BA</i>`, `flux, Wb`], [`ε = <i>N</i>${F('ΔΦ', 'Δ<i>t</i>')}`, `Faraday's law`], [`ε = <i>BAN</i>ω sin ω<i>t</i>`, `rotating coil`]],
ex: {q: `A 200-turn coil of area 4.0 × 10<sup>−3</sup> m<sup>2</sup> is in a 0.50 T field, which falls to zero in 0.10 s. Find the average emf.`,
s: [`Change in flux linkage = 200 × 0.50 × 4.0 × 10<sup>−3</sup> = 0.40 Wb turns.`, `ε = 0.40 / 0.10.`],
a: `ε = 4.0 V`},
quiz: [
 {q: `Lenz's law is a consequence of conservation of`, o: [`charge`, `momentum`, `energy`, `flux`], a: 2, why: `If the current helped the change, energy would come from nowhere.`},
 {q: `Doubling the rotation speed of a generator coil changes the peak emf by`, o: [`½`, `2`, `4`, `no change`], a: 1, why: `ε<sub>0</sub> = <i>BAN</i>ω.`},
 {q: `Flux linkage through a coil parallel to the field is`, o: [`maximum`, `zero`, `<i>BAN</i>`, `negative`], a: 1, why: `No field lines pass through it.`}],
exam: {m: 3, q: `A magnet is dropped through a coil connected to a data logger. Describe and explain the emf–time graph.`,
ms: [`Emf pulse as the magnet enters, then an opposite pulse as it leaves <span class="mk">[1]</span>`, `Second pulse is larger and shorter because the magnet is moving faster <span class="mk">[1]</span>`, `Areas under both pulses are equal, as the total change in flux linkage is the same <span class="mk">[1]</span>`]}},

{id: 'transformers', u: U8, y: 13, p: 'Paper 2', t: `Alternating current and transformers`,
body: `<p>An alternating pd changes direction regularly. The <b>rms</b> value is the steady direct pd that would deliver the same power. For a sine wave, rms = peak / √2. UK mains is 230 V rms, about 325 V peak, at 50 Hz.</p>
<p>An oscilloscope shows a pd against time. Use the volts per division and time per division settings to read the peak and period.</p>
<p>A <b>transformer</b> has two coils on a laminated iron core. The alternating current in the primary makes a changing flux, which induces an emf in the secondary. The turns ratio sets the voltage ratio.</p>
<p>Losses: resistance of the coils (thick copper wire), eddy currents in the core (laminations), and magnetic hysteresis (soft iron core). The <b>National Grid</b> transmits at very high voltage so the current is low, cutting <i class="v">I</i><sup>2</sup><i class="v">R</i> losses in the cables.</p>`,
eq: [[`<i>V</i><sub>rms</sub> = ${F('<i>V</i><sub>0</sub>', '√2')}`, `rms value`], [`${F('<i>N</i><sub>s</sub>', '<i>N</i><sub>p</sub>')} = ${F('<i>V</i><sub>s</sub>', '<i>V</i><sub>p</sub>')}`, `transformer turns ratio`], [`efficiency = ${F('<i>I</i><sub>s</sub><i>V</i><sub>s</sub>', '<i>I</i><sub>p</sub><i>V</i><sub>p</sub>')}`, `× 100 for %`]],
ex: {q: `A transformer converts 230 V mains to 12 V. The primary has 1150 turns. How many turns does the secondary need?`,
s: [`<i>N</i><sub>s</sub> = <i>N</i><sub>p</sub> × <i>V</i><sub>s</sub> / <i>V</i><sub>p</sub>.`, `<i>N</i><sub>s</sub> = 1150 × 12 / 230.`],
a: `60 turns`},
quiz: [
 {q: `The peak value of 230 V rms mains is about`, o: [`163 V`, `230 V`, `325 V`, `460 V`], a: 2, why: `230 × √2 = 325 V.`},
 {q: `A transformer core is laminated to reduce`, o: [`resistance of the coils`, `eddy currents`, `the turns ratio`, `frequency`], a: 1, why: `Insulating layers break up the eddy current paths.`},
 {q: `Power is transmitted at high voltage to`, o: [`increase current`, `reduce current and heat loss`, `make it safer at home`, `increase frequency`], a: 1, why: `Same power at lower current, and losses go as <i>I</i><sup>2</sup>.`}],
exam: {m: 3, q: `A power station sends 500 MW along cables of total resistance 2.0 Ω. Compare the power lost at 25 kV and at 400 kV.`,
ms: [`At 25 kV: <i>I</i> = 20 000 A, loss = 20 000² × 2.0 = 800 MW, more than is sent, so impossible in practice <span class="mk">[1]</span>`, `At 400 kV: <i>I</i> = 1250 A, loss = 1250² × 2.0 = 3.1 MW <span class="mk">[1]</span>`, `Higher voltage cuts the loss by a factor of 256 <span class="mk">[1]</span>`]}},

{id: 'rutherford', u: U9, y: 13, p: 'Paper 2', t: `Rutherford scattering and the nucleus`,
body: `<p>Alpha particles were fired at thin gold foil in a vacuum. Observations and conclusions:</p>
<ul><li>Most went straight through, so the atom is mostly empty space.</li><li>A few were deflected by large angles, so the positive charge and most of the mass are in a tiny, dense nucleus.</li><li>Very few (about 1 in 10 000) bounced back.</li></ul>
<p>This replaced the plum pudding model, where positive charge was spread through the atom.</p>
<p>For a head-on collision, all the alpha's kinetic energy becomes electric potential energy at the <b>distance of closest approach</b>. This gives an upper limit for the nuclear radius.</p>
<p>A better measurement uses high-energy electron diffraction. Electrons are leptons, so they do not feel the strong force and give a cleaner result.</p>`,
eq: [[`<i>E</i><sub>k</sub> = ${F('<i>Qq</i>', '4πε<sub>0</sub><i>r</i>')}`, `closest approach`], [`sin θ ≈ ${F('0.61λ', '<i>R</i>')}`, `first minimum, electron diffraction by a nucleus`]],
ex: {q: `A 5.0 MeV alpha particle approaches a gold nucleus (<i>Z</i> = 79) head on. Find the distance of closest approach.`,
s: [`<i>E</i><sub>k</sub> = 5.0 × 10<sup>6</sup> × 1.60 × 10<sup>−19</sup> = 8.0 × 10<sup>−13</sup> J.`, `<i>Qq</i> = (2 × 1.60 × 10<sup>−19</sup>)(79 × 1.60 × 10<sup>−19</sup>) = 4.04 × 10<sup>−36</sup> C<sup>2</sup>.`, `<i>r</i> = 8.99 × 10<sup>9</sup> × 4.04 × 10<sup>−36</sup> / 8.0 × 10<sup>−13</sup>.`],
a: `<i>r</i> ≈ 4.5 × 10<sup>−14</sup> m`},
quiz: [
 {q: `Most alpha particles passed straight through because`, o: [`gold is thin`, `the atom is mostly empty space`, `alphas are fast`, `the nucleus is negative`], a: 1, why: `They never came close to a nucleus.`},
 {q: `Why use electrons rather than alphas to measure nuclear radius?`, o: [`they are heavier`, `they do not feel the strong force`, `they are positive`, `they are slower`], a: 1, why: `Alphas near the nucleus are affected by the strong force.`},
 {q: `The experiment had to be done in a vacuum because`, o: [`alphas would be absorbed by air`, `gold reacts with air`, `light interferes`, `the detector needs it`], a: 0, why: `Alphas travel only a few cm in air.`}],
exam: {m: 3, q: `Describe the evidence from alpha scattering that the nucleus is small and positively charged.`,
ms: [`Most alphas undeflected, so most of the atom is empty <span class="mk">[1]</span>`, `Some deflected through large angles, so repelled by a concentrated positive charge <span class="mk">[1]</span>`, `Very few bounce back, so the nucleus is very small compared with the atom <span class="mk">[1]</span>`]}},

{id: 'radiation', u: U9, y: 13, p: 'Paper 2', t: `Alpha, beta and gamma radiation`,
body: `<p><b>Alpha</b> (helium nucleus): strongly ionising, stopped by paper or a few cm of air. <b>Beta-minus</b> (fast electron): moderately ionising, stopped by a few mm of aluminium. <b>Gamma</b> (EM photon): weakly ionising, reduced by several cm of lead.</p>
<p>Always subtract the <b>background count</b> before analysing data. Sources include radon gas, rocks, cosmic rays and medical uses.</p>
<p>Gamma intensity follows an <b>inverse square law</b>: double the distance and the intensity falls to a quarter. This is why sources are handled with long tongs. Required practical: measure corrected count rate at several distances and plot against 1/<i class="v">x</i><sup>2</sup>.</p>
<p>Safety: keep the time short, the distance large, and use shielding. Applications include smoke alarms (alpha), thickness control (beta) and sterilising equipment or medical tracers (gamma).</p>`,
eq: [[`<i>I</i> = ${F('<i>k</i>', '<i>x</i><sup>2</sup>')}`, `gamma inverse square law`]],
ex: {q: `A gamma source gives a corrected count rate of 400 counts per minute at 10 cm. What is it at 20 cm?`,
s: [`The distance doubles.`, `Intensity falls by 2<sup>2</sup> = 4.`, `400 / 4.`],
a: `100 counts per minute`},
quiz: [
 {q: `Which radiation is most ionising?`, o: [`alpha`, `beta`, `gamma`, `X-ray`], a: 0, why: `Large charge and mass, so it interacts strongly.`},
 {q: `Paper thickness in a factory is monitored with`, o: [`alpha`, `beta`, `gamma`, `neutrons`], a: 1, why: `Alpha would be stopped completely, gamma barely changed.`},
 {q: `Background radiation must be`, o: [`added`, `subtracted`, `ignored`, `doubled`], a: 1, why: `To find the count rate from the source alone.`}],
exam: {m: 3, q: `Describe how you would show that a source emits only beta radiation.`,
ms: [`Measure background, then count rate close to the source with a GM tube <span class="mk">[1]</span>`, `Paper causes no drop, so no alpha <span class="mk">[1]</span>`, `A few mm of aluminium reduces count to background, so no gamma <span class="mk">[1]</span>`]}},

{id: 'decay', u: U9, y: 13, p: 'Paper 2', t: `Radioactive decay and half-life`,
body: `<p>Decay is <b>random</b> (you cannot predict which nucleus decays next) and <b>spontaneous</b> (not affected by temperature or pressure). Each nucleus has a constant probability per second of decaying: the <b>decay constant</b> λ.</p>
<p>The <b>activity</b> <i class="v">A</i>, in becquerels, is the number of decays per second. It is proportional to the number of undecayed nuclei: <i class="v">A</i> = λ<i class="v">N</i>. So <i class="v">N</i> and <i class="v">A</i> fall exponentially.</p>
<p>The <b>half-life</b> is the time for half the nuclei to decay. It is linked to λ by <i class="v">T</i><sub>½</sub> = ln 2 / λ.</p>
<p>Medical tracers need a short half-life (hours) so the patient's dose is low, but long enough to complete the scan. Technetium-99m, with a 6 hour half-life and pure gamma emission, is the classic choice. Carbon-14 dating uses its 5730 year half-life.</p>`,
eq: [[`<i>A</i> = λ<i>N</i>`, `activity, Bq`], [`<i>N</i> = <i>N</i><sub>0</sub>e<sup>−λ<i>t</i></sup>`, `same form for <i>A</i>`], [`<i>T</i><sub>½</sub> = ${F('ln 2', 'λ')}`, `half-life`]],
ex: {q: `Wood from an ancient site has 25% of the carbon-14 activity of living wood. Half-life is 5730 years. How old is it?`,
s: [`100% → 50% → 25% is two half-lives.`, `Age = 2 × 5730.`],
a: `About 11 500 years`},
quiz: [
 {q: `After 3 half-lives, the fraction left is`, o: [`⅓`, `⅙`, `⅛`, `1/9`], a: 2, why: `(½)<sup>3</sup> = ⅛.`},
 {q: `Heating a radioactive sample makes its decay rate`, o: [`faster`, `slower`, `unchanged`, `zero`], a: 2, why: `Decay is spontaneous.`},
 {q: `A source has λ = 0.10 s<sup>−1</sup>. Its half-life is`, o: [`0.069 s`, `6.9 s`, `10 s`, `0.10 s`], a: 1, why: `0.693 / 0.10 = 6.9 s.`}],
exam: {m: 3, q: `Iodine-131 has a half-life of 8.0 days. Calculate the number of nuclei in a sample with activity 4.0 × 10<sup>6</sup> Bq.`,
ms: [`<i>T</i><sub>½</sub> = 8.0 × 86 400 = 6.9 × 10<sup>5</sup> s <span class="mk">[1]</span>`, `λ = 0.693 / 6.9 × 10<sup>5</sup> = 1.0 × 10<sup>−6</sup> s<sup>−1</sup> <span class="mk">[1]</span>`, `<i>N</i> = <i>A</i>/λ = 4.0 × 10<sup>12</sup> <span class="mk">[1]</span>`]}},

{id: 'nuclear-radius', u: U9, y: 13, p: 'Paper 2', t: `Nuclear radius and density`,
body: `<p>Experiments show the radius of a nucleus depends on its nucleon number: <i class="v">R</i> = <i class="v">R</i><sub>0</sub><i class="v">A</i><sup>1/3</sup>, where <i class="v">R</i><sub>0</sub> is about 1.2 fm.</p>
<p>A graph of <i class="v">R</i> against <i class="v">A</i><sup>1/3</sup> is a straight line through the origin with gradient <i class="v">R</i><sub>0</sub>. A graph of ln <i class="v">R</i> against ln <i class="v">A</i> has gradient ⅓.</p>
<p>Because volume ∝ <i class="v">R</i><sup>3</sup> ∝ <i class="v">A</i>, every nucleus has the same density, about 2 × 10<sup>17</sup> kg m<sup>−3</sup>. This is far higher than ordinary matter, because atoms are mostly empty space and nucleons are packed tightly.</p>`,
eq: [[`<i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>`, `<i>R</i><sub>0</sub> ≈ 1.2 fm`], [`ρ = ${F('<i>Au</i>', '⁴⁄₃π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>')}`, `independent of <i>A</i>`]],
ex: {q: `Estimate the radius of a gold-197 nucleus.`,
s: [`197<sup>1/3</sup> = 5.82.`, `<i>R</i> = 1.2 × 5.82 fm.`],
a: `<i>R</i> ≈ 7.0 fm = 7.0 × 10<sup>−15</sup> m`},
quiz: [
 {q: `A nucleus with 8 times the nucleon number has a radius`, o: [`8×`, `4×`, `2×`, `the same`], a: 2, why: `8<sup>1/3</sup> = 2.`},
 {q: `Nuclear density is`, o: [`larger for heavy nuclei`, `about the same for all nuclei`, `smaller for heavy nuclei`, `the same as water`], a: 1, why: `Volume and mass both scale with <i>A</i>.`},
 {q: `A graph of ln <i>R</i> against ln <i>A</i> has gradient`, o: [`3`, `1`, `⅓`, `<i>R</i><sub>0</sub>`], a: 2, why: `ln <i>R</i> = ln <i>R</i><sub>0</sub> + ⅓ ln <i>A</i>.`}],
exam: {m: 2, q: `Show that the density of nuclear matter is about 10<sup>17</sup> kg m<sup>−3</sup>. Take <i>R</i><sub>0</sub> = 1.2 fm and nucleon mass 1.66 × 10<sup>−27</sup> kg.`,
ms: [`Volume per nucleon = ⁴⁄₃π(1.2 × 10<sup>−15</sup>)<sup>3</sup> = 7.2 × 10<sup>−45</sup> m<sup>3</sup> <span class="mk">[1]</span>`, `ρ = 1.66 × 10<sup>−27</sup> / 7.2 × 10<sup>−45</sup> = 2.3 × 10<sup>17</sup> kg m<sup>−3</sup> <span class="mk">[1]</span>`]}},

{id: 'binding-energy', u: U9, y: 13, p: 'Paper 2', t: `Mass defect and binding energy`,
body: `<p>A nucleus has less mass than the protons and neutrons it is made of. The difference is the <b>mass defect</b>. By <i class="v">E</i> = <i class="v">mc</i><sup>2</sup>, it equals the <b>binding energy</b>: the energy needed to separate the nucleus into its nucleons.</p>
<p>Nuclear masses are given in atomic mass units, where 1 u = 1.661 × 10<sup>−27</sup> kg, equivalent to 931.5 MeV.</p>
<p>The <b>binding energy per nucleon</b> curve rises steeply for light nuclei, peaks at iron-56 (about 8.8 MeV), and falls gently for heavy nuclei. Iron is the most stable nucleus.</p>
<p>Any reaction that moves nuclei towards iron releases energy: <b>fusion</b> of light nuclei and <b>fission</b> of heavy nuclei. The energy released equals the increase in total binding energy.</p>`,
eq: [[`<i>E</i> = <i>mc</i><sup>2</sup>`, `mass–energy equivalence`], [`1 u = 931.5 MeV`, `energy equivalent`], [`Δ<i>m</i> = <i>Zm</i><sub>p</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub> − <i>m</i><sub>nucleus</sub>`, `mass defect`]],
ex: {q: `A helium-4 nucleus has mass 4.00150 u. A proton is 1.00728 u and a neutron 1.00867 u. Find the binding energy per nucleon.`,
s: [`Nucleons: 2 × 1.00728 + 2 × 1.00867 = 4.03190 u.`, `Mass defect = 4.03190 − 4.00150 = 0.03040 u.`, `Binding energy = 0.03040 × 931.5 = 28.3 MeV.`, `Per nucleon: 28.3 / 4.`],
a: `7.1 MeV per nucleon`},
quiz: [
 {q: `The most stable nucleus is about`, o: [`hydrogen-1`, `helium-4`, `iron-56`, `uranium-238`], a: 2, why: `It has the highest binding energy per nucleon.`},
 {q: `Fusion releases energy because the product has`, o: [`more mass`, `higher binding energy per nucleon`, `more protons`, `less binding energy`], a: 1, why: `Mass decreases, and the extra binding energy is released.`},
 {q: `Binding energy is the energy`, o: [`stored in the nucleus`, `needed to separate a nucleus into nucleons`, `of the electrons`, `of one nucleon`], a: 1, why: `That is the definition.`}],
exam: {m: 3, q: `Explain why both fission of uranium and fusion of hydrogen release energy.`,
ms: [`Binding energy per nucleon peaks near iron <span class="mk">[1]</span>`, `Fission of heavy nuclei and fusion of light nuclei both produce nuclei with higher binding energy per nucleon <span class="mk">[1]</span>`, `Total mass decreases and the mass difference is released as energy, <i>E</i> = <i>mc</i><sup>2</sup> <span class="mk">[1]</span>`]}},

{id: 'fission-fusion', u: U9, y: 13, p: 'Paper 2', t: `Fission, fusion and nuclear reactors`,
body: `<p><b>Induced fission:</b> uranium-235 absorbs a slow (thermal) neutron, becomes unstable U-236, and splits into two smaller nuclei plus 2 or 3 fast neutrons and about 200 MeV of energy. Those neutrons can cause further fissions: a <b>chain reaction</b>. The <b>critical mass</b> is the minimum mass for the chain reaction to keep going.</p>
<p>In a thermal reactor:</p>
<ul><li>The <b>moderator</b> (water or graphite) slows neutrons by elastic collisions so they are likely to be absorbed by U-235.</li><li><b>Control rods</b> (boron or cadmium) absorb neutrons to keep exactly one further fission per fission.</li><li>The <b>coolant</b> carries heat away to make steam.</li></ul>
<p>Spent fuel is highly radioactive and must be stored for thousands of years. <b>Fusion</b> of hydrogen isotopes needs very high temperatures to overcome the electrostatic repulsion between nuclei; it powers stars but is not yet practical on Earth.</p>`,
eq: [[`<sup>1</sup><sub>0</sub>n + <sup>235</sup><sub>92</sub>U → <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3<sup>1</sup><sub>0</sub>n`, `a typical fission`]],
ex: {q: `Each U-235 fission releases about 200 MeV. Estimate the energy from fission of 1.0 kg of U-235.`,
s: [`Moles: 1000 g / 235 g mol<sup>−1</sup> = 4.26 mol.`, `Nuclei: 4.26 × 6.02 × 10<sup>23</sup> = 2.56 × 10<sup>24</sup>.`, `Energy per fission: 200 × 1.60 × 10<sup>−13</sup> = 3.2 × 10<sup>−11</sup> J.`, `Total = 2.56 × 10<sup>24</sup> × 3.2 × 10<sup>−11</sup>.`],
a: `About 8 × 10<sup>13</sup> J`},
quiz: [
 {q: `The moderator's job is to`, o: [`absorb neutrons`, `slow neutrons down`, `cool the reactor`, `shield workers`], a: 1, why: `Slow neutrons are more likely to cause fission.`},
 {q: `Control rods are lowered to`, o: [`increase power`, `reduce the rate of fission`, `remove heat`, `add fuel`], a: 1, why: `They absorb neutrons.`},
 {q: `Fusion needs very high temperatures because`, o: [`nuclei must overcome electrostatic repulsion`, `neutrons must be slow`, `the strong force is repulsive`, `of the critical mass`], a: 0, why: `Nuclei need large kinetic energy to get close enough for the strong force.`}],
exam: {m: 3, q: `Explain why a good moderator has nuclei with a mass similar to a neutron.`,
ms: [`Neutrons lose energy by elastic collisions with moderator nuclei <span class="mk">[1]</span>`, `In a collision between similar masses, a large fraction of kinetic energy is transferred <span class="mk">[1]</span>`, `So fewer collisions are needed to slow the neutron to thermal speed <span class="mk">[1]</span>`]}},

{id: 'telescopes', u: U10, y: 13, p: 'Paper 3B', t: `Telescopes and their resolving power`,
body: `<p>An <b>astronomical refracting telescope</b> uses two converging lenses. In normal adjustment the lenses are separated by <i class="v">f</i><sub>o</sub> + <i class="v">f</i><sub>e</sub>, and the final image is at infinity. Angular magnification is <i class="v">f</i><sub>o</sub>/<i class="v">f</i><sub>e</sub>.</p>
<p>A <b>Cassegrain reflector</b> uses a concave parabolic primary mirror and a convex secondary. Mirrors avoid <b>chromatic aberration</b> (colours focusing at different points) and can be made much larger, because they are supported from behind.</p>
<p>The <b>Rayleigh criterion</b> gives the smallest angle two objects can be resolved by: θ ≈ λ/<i class="v">D</i>. A bigger dish or mirror resolves finer detail. Radio telescopes must be huge because radio wavelengths are long.</p>
<p><b>CCDs</b> have a quantum efficiency of about 80%, compared with about 1% for the eye, so they detect fainter objects and record images over long exposures.</p>`,
eq: [[`<i>M</i> = ${F('<i>f</i><sub>o</sub>', '<i>f</i><sub>e</sub>')}`, `angular magnification`], [`θ ≈ ${F('λ', '<i>D</i>')}`, `Rayleigh criterion, radians`]],
ex: {q: `Find the minimum angular resolution of a 2.4 m space telescope at 550 nm.`,
s: [`θ = λ/<i>D</i> = 550 × 10<sup>−9</sup> / 2.4.`],
a: `θ ≈ 2.3 × 10<sup>−7</sup> rad`},
quiz: [
 {q: `Chromatic aberration affects`, o: [`mirrors`, `lenses`, `CCDs`, `radio dishes`], a: 1, why: `Different wavelengths refract by different amounts.`},
 {q: `To resolve finer detail, a telescope needs`, o: [`a smaller aperture`, `a larger aperture`, `longer wavelengths`, `a shorter tube`], a: 1, why: `θ ∝ 1/<i>D</i>.`},
 {q: `The quantum efficiency of a CCD is about`, o: [`1%`, `20%`, `80%`, `100%`], a: 2, why: `Far higher than the eye's.`}],
exam: {m: 2, q: `A refracting telescope has an objective of focal length 1.2 m and an eyepiece of 25 mm. Calculate the angular magnification and the lens separation in normal adjustment.`,
ms: [`<i>M</i> = 1.2 / 0.025 = 48 <span class="mk">[1]</span>`, `Separation = 1.2 + 0.025 = 1.225 m <span class="mk">[1]</span>`]}},

{id: 'stars', u: U10, y: 13, p: 'Paper 3B', t: `Classifying stars`,
body: `<p><b>Apparent magnitude</b> <i class="v">m</i> is how bright a star looks from Earth. The scale runs backwards: brighter stars have smaller numbers, and a difference of 1 magnitude means about 2.51 times the brightness. <b>Absolute magnitude</b> <i class="v">M</i> is how bright it would look from 10 parsecs.</p>
<p>A <b>parsec</b> is the distance at which 1 AU subtends 1 arcsecond, about 3.08 × 10<sup>16</sup> m. A light year is 9.46 × 10<sup>15</sup> m.</p>
<p>Stars behave approximately as <b>black bodies</b>. <b>Wien's law</b> links the peak wavelength to surface temperature; <b>Stefan's law</b> gives the power output.</p>
<p>The <b>Hertzsprung–Russell diagram</b> plots absolute magnitude against temperature (hot on the left). Main sequence stars run diagonally; giants are top right, white dwarfs bottom left. Spectral classes in order of falling temperature: O B A F G K M.</p>`,
eq: [[`<i>m</i> − <i>M</i> = 5 log ${F('<i>d</i>', '10')}`, `<i>d</i> in parsecs`], [`λ<sub>max</sub><i>T</i> = 2.9 × 10<sup>−3</sup> m K`, `Wien's law`], [`<i>P</i> = σ<i>AT</i><sup>4</sup>`, `Stefan's law, σ = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>`]],
ex: {q: `The Sun's spectrum peaks at 500 nm. Find its surface temperature.`,
s: [`<i>T</i> = 2.9 × 10<sup>−3</sup> / λ<sub>max</sub>.`, `<i>T</i> = 2.9 × 10<sup>−3</sup> / 500 × 10<sup>−9</sup>.`],
a: `<i>T</i> ≈ 5800 K`},
quiz: [
 {q: `A star with apparent magnitude 1 is how many times brighter than one with magnitude 6?`, o: [`5`, `12.6`, `100`, `251`], a: 2, why: `2.51<sup>5</sup> ≈ 100.`},
 {q: `On the HR diagram, white dwarfs are`, o: [`top right`, `bottom left`, `top left`, `bottom right`], a: 1, why: `Hot but dim.`},
 {q: `Which spectral class is hottest?`, o: [`M`, `G`, `A`, `O`], a: 3, why: `O stars exceed 25 000 K.`}],
exam: {m: 2, q: `A star has apparent magnitude 6.0 and is 100 pc away. Calculate its absolute magnitude.`,
ms: [`<i>M</i> = <i>m</i> − 5 log(<i>d</i>/10) = 6.0 − 5 log 10 <span class="mk">[1]</span>`, `<i>M</i> = 1.0 <span class="mk">[1]</span>`]}},

{id: 'cosmology', u: U10, y: 13, p: 'Paper 3B', t: `Doppler shift, Hubble's law and the Big Bang`,
body: `<p>Light from a source moving away is stretched to longer wavelengths: <b>red shift</b>. For speeds much less than light, <i class="v">z</i> = Δλ/λ = <i class="v">v</i>/<i class="v">c</i>.</p>
<p><b>Hubble's law:</b> the recession speed of distant galaxies is proportional to their distance. The constant <i class="v">H</i><sub>0</sub> is about 70 km s<sup>−1</sup> Mpc<sup>−1</sup>. The age of the universe is roughly 1/<i class="v">H</i><sub>0</sub>, about 14 billion years.</p>
<p>Evidence for the <b>Big Bang</b>: galaxies receding, the <b>cosmic microwave background</b> radiation at 2.7 K, and the observed ratio of hydrogen to helium. Type Ia supernovae act as standard candles; they showed the expansion is accelerating, which is explained by <b>dark energy</b>.</p>
<p>Exoplanets are found by the radial velocity method (the star wobbles, so its spectrum shifts) and by the transit method (the star dims slightly as a planet crosses it).</p>`,
eq: [[`<i>z</i> = ${F('Δλ', 'λ')} ≈ ${F('<i>v</i>', '<i>c</i>')}`, `Doppler red shift`], [`<i>v</i> = <i>H</i><sub>0</sub><i>d</i>`, `Hubble's law`], [`age ≈ ${F('1', '<i>H</i><sub>0</sub>')}`, `<i>H</i><sub>0</sub> in s<sup>−1</sup>`]],
ex: {q: `A hydrogen line at 656.3 nm in the lab is seen at 662.9 nm from a galaxy. Find its distance using <i>H</i><sub>0</sub> = 70 km s<sup>−1</sup> Mpc<sup>−1</sup>.`,
s: [`<i>z</i> = 6.6 / 656.3 = 0.0101.`, `<i>v</i> = <i>zc</i> = 0.0101 × 3.00 × 10<sup>5</sup> km s<sup>−1</sup> = 3020 km s<sup>−1</sup>.`, `<i>d</i> = <i>v</i>/<i>H</i><sub>0</sub> = 3020 / 70.`],
a: `<i>d</i> ≈ 43 Mpc`},
quiz: [
 {q: `The cosmic microwave background is evidence for`, o: [`dark matter`, `the Big Bang`, `exoplanets`, `black holes`], a: 1, why: `It is the cooled radiation from the early hot universe.`},
 {q: `A galaxy twice as far away recedes`, o: [`half as fast`, `at the same speed`, `twice as fast`, `four times as fast`], a: 2, why: `<i>v</i> ∝ <i>d</i>.`},
 {q: `The transit method detects a planet by`, o: [`its gravity on Earth`, `a drop in the star's brightness`, `its own light`, `its radio signals`], a: 1, why: `The planet blocks a little of the star's light.`}],
exam: {m: 3, q: `Use <i>H</i><sub>0</sub> = 70 km s<sup>−1</sup> Mpc<sup>−1</sup> to estimate the age of the universe in years. 1 Mpc = 3.09 × 10<sup>22</sup> m.`,
ms: [`<i>H</i><sub>0</sub> = 70 × 10<sup>3</sup> / 3.09 × 10<sup>22</sup> = 2.27 × 10<sup>−18</sup> s<sup>−1</sup> <span class="mk">[1]</span>`, `Age = 1/<i>H</i><sub>0</sub> = 4.4 × 10<sup>17</sup> s <span class="mk">[1]</span>`, `= 1.4 × 10<sup>10</sup> years <span class="mk">[1]</span>`]}}
);
}
