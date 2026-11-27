/* Pearson Edexcel A-level Mathematics 9MA0: Year 13 lessons */
{
const F = window.fr;
const P2 = 'Pure: Year 13', S2 = 'Statistics: Year 13', M2 = 'Mechanics: Year 13';
const PP = 'Papers 1 and 2', P3 = 'Paper 3';
window.GR.lessons['edexcel-maths'].push(

{id: 'contradiction', u: P2, y: 13, p: PP, t: `Proof by contradiction`,
body: `<p>To prove a statement by contradiction, assume the opposite is true and show this leads to something impossible. The assumption must therefore be false, so the original statement is true.</p>
<p>Two classic proofs you must be able to write:</p>
<ul><li><b>√2 is irrational.</b> Assume √2 = <i class="v">a</i>/<i class="v">b</i> in lowest terms. Then <i class="v">a</i><sup>2</sup> = 2<i class="v">b</i><sup>2</sup>, so <i class="v">a</i> is even; write <i class="v">a</i> = 2<i class="v">k</i>. Then <i class="v">b</i><sup>2</sup> = 2<i class="v">k</i><sup>2</sup>, so <i class="v">b</i> is even too. Both even contradicts lowest terms.</li><li><b>There are infinitely many primes.</b> Assume a finite list <i class="v">p</i><sub>1</sub>, …, <i class="v">p</i><sub><i>n</i></sub>. The number <i class="v">p</i><sub>1</sub><i class="v">p</i><sub>2</sub>…<i class="v">p</i><sub><i>n</i></sub> + 1 leaves remainder 1 when divided by each, so it has a prime factor not on the list.</li></ul>
<p>Begin with “Assume, for contradiction, that…” and end with “This is a contradiction, so…”.</p>`,
eq: [],
ex: {q: `Prove by contradiction that if <i>n</i><sup>2</sup> is even, then <i>n</i> is even.`,
s: [`Assume, for contradiction, that <i>n</i><sup>2</sup> is even but <i>n</i> is odd.`, `Write <i>n</i> = 2<i>k</i> + 1, so <i>n</i><sup>2</sup> = 4<i>k</i><sup>2</sup> + 4<i>k</i> + 1 = 2(2<i>k</i><sup>2</sup> + 2<i>k</i>) + 1.`, `That is odd, contradicting <i>n</i><sup>2</sup> even.`],
a: `So if <i>n</i><sup>2</sup> is even, <i>n</i> must be even.`},
quiz: [
 {q: `The first line of a proof by contradiction that “there is no largest even number” is`, o: [`Let <i>n</i> be even`, `Assume there is a largest even number`, `Assume all numbers are even`, `Try <i>n</i> = 2`], a: 1, why: `Assume the opposite of what you want.`},
 {q: `In the √2 proof, the contradiction is that`, o: [`<i>a</i> is odd`, `<i>a</i> and <i>b</i> share a factor 2`, `√2 is negative`, `<i>b</i> = 0`], a: 1, why: `The fraction was assumed to be in lowest terms.`}],
exam: {m: 4, q: `Prove by contradiction that there are no integers <i>a</i> and <i>b</i> for which 6<i>a</i> + 3<i>b</i> = 1.`,
ms: [`Assume integers <i>a</i>, <i>b</i> exist with 6<i>a</i> + 3<i>b</i> = 1 <span class="mk">[1]</span>`, `Factorise: 3(2<i>a</i> + <i>b</i>) = 1 <span class="mk">[1]</span>`, `So 2<i>a</i> + <i>b</i> = ⅓, which is not an integer <span class="mk">[1]</span>`, `Contradiction, so no such integers exist <span class="mk">[1]</span>`]}},

{id: 'partial-fractions', u: P2, y: 13, p: PP, t: `Partial fractions`,
body: `<p>Partial fractions split one fraction into simpler ones that are easy to integrate or expand.</p>
<ul><li>Distinct linear factors: ${F('<i>A</i>', '<i>x</i> − <i>a</i>')} + ${F('<i>B</i>', '<i>x</i> − <i>b</i>')}.</li><li>A repeated factor: ${F('<i>A</i>', '<i>x</i> − <i>a</i>')} + ${F('<i>B</i>', '(<i>x</i> − <i>a</i>)<sup>2</sup>')}.</li><li>If the top has degree at least the bottom (improper fraction), divide first.</li></ul>
<p>Multiply through by the denominator, then substitute values of <i class="v">x</i> that make factors zero. If needed, compare coefficients for the rest.</p>`,
eq: [],
ex: {q: `Express ${F('5<i>x</i> + 1', '(<i>x</i> − 1)(<i>x</i> + 2)')} in partial fractions.`,
s: [`5<i>x</i> + 1 = <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1).`, `<i>x</i> = 1: 6 = 3<i>A</i>, so <i>A</i> = 2.`, `<i>x</i> = −2: −9 = −3<i>B</i>, so <i>B</i> = 3.`],
a: `${F('2', '<i>x</i> − 1')} + ${F('3', '<i>x</i> + 2')}`},
quiz: [
 {q: `The partial fraction form for ${F('1', '<i>x</i>(<i>x</i> + 1)<sup>2</sup>')} has how many terms?`, o: [`2`, `3`, `4`, `1`], a: 1, why: `<i>A</i>/<i>x</i> + <i>B</i>/(<i>x</i> + 1) + <i>C</i>/(<i>x</i> + 1)<sup>2</sup>.`},
 {q: `For an improper fraction, you must first`, o: [`differentiate`, `divide`, `square`, `expand`], a: 1, why: `Get a polynomial plus a proper fraction.`}],
exam: {m: 5, q: `Find ∫ ${F('5<i>x</i> + 1', '(<i>x</i> − 1)(<i>x</i> + 2)')} d<i>x</i>.`,
ms: [`Uses the partial fractions 2/(<i>x</i> − 1) + 3/(<i>x</i> + 2) <span class="mk">[2]</span>`, `2 ln|<i>x</i> − 1| <span class="mk">[1]</span>`, `+ 3 ln|<i>x</i> + 2| <span class="mk">[1]</span>`, `+ <i>c</i> <span class="mk">[1]</span>`]}},

{id: 'functions', u: P2, y: 13, p: PP, t: `Functions, inverses and modulus`,
body: `<p>A <b>function</b> maps each input to exactly one output. The <b>domain</b> is the set of inputs; the <b>range</b> is the set of outputs. One-to-one functions have inverses; many-to-one functions (like <i class="v">x</i><sup>2</sup> on all reals) need a restricted domain first.</p>
<p><b>Composite</b> fg(<i class="v">x</i>) means apply g first, then f. The <b>inverse</b> f<sup>−1</sup>: swap <i class="v">x</i> and <i class="v">y</i> and rearrange. Its graph is the reflection of f in <i class="v">y</i> = <i class="v">x</i>, and the domain and range swap.</p>
<p>The <b>modulus</b> |<i class="v">x</i>| is the size of <i class="v">x</i>. For <i class="v">y</i> = |f(<i class="v">x</i>)|, reflect the parts below the <i class="v">x</i>-axis upwards. For <i class="v">y</i> = f(|<i class="v">x</i>|), reflect the right half in the <i class="v">y</i>-axis. Solve |<i class="v">A</i>| = <i class="v">B</i> by solving <i class="v">A</i> = <i class="v">B</i> and <i class="v">A</i> = −<i class="v">B</i>, then check each answer.</p>`,
eq: [[`fg(<i>x</i>) = f(g(<i>x</i>))`, `g first`], [`ff<sup>−1</sup>(<i>x</i>) = <i>x</i>`, `inverse`]],
ex: {q: `f(<i>x</i>) = 2<i>x</i> + 3 and g(<i>x</i>) = <i>x</i><sup>2</sup>. Find fg(<i>x</i>), gf(<i>x</i>) and f<sup>−1</sup>(<i>x</i>).`,
s: [`fg(<i>x</i>) = f(<i>x</i><sup>2</sup>) = 2<i>x</i><sup>2</sup> + 3.`, `gf(<i>x</i>) = g(2<i>x</i> + 3) = (2<i>x</i> + 3)<sup>2</sup>.`, `For the inverse: <i>x</i> = 2<i>y</i> + 3, so <i>y</i> = (<i>x</i> − 3)/2.`],
a: `2<i>x</i><sup>2</sup> + 3, (2<i>x</i> + 3)<sup>2</sup>, f<sup>−1</sup>(<i>x</i>) = (<i>x</i> − 3)/2`},
quiz: [
 {q: `Solve |2<i>x</i> − 3| = 5`, o: [`<i>x</i> = 4 only`, `<i>x</i> = 4 or −1`, `<i>x</i> = −4 or 1`, `<i>x</i> = 1 only`], a: 1, why: `2<i>x</i> − 3 = 5 or −5.`},
 {q: `The graph of f<sup>−1</sup> is the reflection of f in`, o: [`the <i>x</i>-axis`, `the <i>y</i>-axis`, `<i>y</i> = <i>x</i>`, `<i>y</i> = −<i>x</i>`], a: 2, why: `Inputs and outputs swap.`}],
exam: {m: 4, q: `f(<i>x</i>) = e<sup><i>x</i></sup> + 2 for all real <i>x</i>. State the range of f, find f<sup>−1</sup>(<i>x</i>) and state its domain.`,
ms: [`Range f(<i>x</i>) > 2 <span class="mk">[1]</span>`, `<i>x</i> = e<sup><i>y</i></sup> + 2 rearranged <span class="mk">[1]</span>`, `f<sup>−1</sup>(<i>x</i>) = ln(<i>x</i> − 2) <span class="mk">[1]</span>`, `Domain <i>x</i> > 2 <span class="mk">[1]</span>`]}},

{id: 'sequences', u: P2, y: 13, p: PP, t: `Arithmetic and geometric sequences and series`,
body: `<p>An <b>arithmetic</b> sequence adds a common difference <i class="v">d</i> each time. A <b>geometric</b> sequence multiplies by a common ratio <i class="v">r</i>.</p>
<p>A geometric series <b>converges</b> if |<i class="v">r</i>| < 1, and its sum to infinity is <i class="v">a</i>/(1 − <i class="v">r</i>).</p>
<p>Sigma notation Σ means “add up”. A sequence can also be defined recursively, <i class="v">u</i><sub><i>n</i>+1</sub> = f(<i class="v">u</i><sub><i>n</i></sub>). Sequences can be increasing, decreasing or periodic. To find when a geometric sum first exceeds a value, set up an inequality and solve with logs.</p>`,
eq: [[`<i>u</i><sub><i>n</i></sub> = <i>a</i> + (<i>n</i> − 1)<i>d</i>`, `arithmetic term`], [`<i>S</i><sub><i>n</i></sub> = ${F('<i>n</i>', '2')}(2<i>a</i> + (<i>n</i> − 1)<i>d</i>)`, `arithmetic sum`], [`<i>u</i><sub><i>n</i></sub> = <i>ar</i><sup><i>n</i>−1</sup>`, `geometric term`], [`<i>S</i><sub><i>n</i></sub> = ${F('<i>a</i>(1 − <i>r</i><sup><i>n</i></sup>)', '1 − <i>r</i>')}, <i>S</i><sub>∞</sub> = ${F('<i>a</i>', '1 − <i>r</i>')}`, `geometric sums`]],
ex: {q: `An arithmetic series has first term 5 and common difference 3. Find the 20th term and the sum of the first 20 terms.`,
s: [`<i>u</i><sub>20</sub> = 5 + 19 × 3 = 62.`, `<i>S</i><sub>20</sub> = 20/2 × (5 + 62) = 10 × 67.`],
a: `<i>u</i><sub>20</sub> = 62, <i>S</i><sub>20</sub> = 670`},
quiz: [
 {q: `The sum to infinity of 8 + 4 + 2 + … is`, o: [`14`, `16`, `32`, `infinite`], a: 1, why: `8 / (1 − ½) = 16.`},
 {q: `A geometric series converges when`, o: [`<i>r</i> > 1`, `|<i>r</i>| < 1`, `<i>r</i> = 1`, `<i>a</i> < 1`], a: 1, why: `Terms must shrink.`}],
exam: {m: 3, q: `A geometric series has first term 6 and sum to infinity 24. Find the common ratio and the third term.`,
ms: [`6 / (1 − <i>r</i>) = 24 <span class="mk">[1]</span>`, `<i>r</i> = ¾ <span class="mk">[1]</span>`, `<i>u</i><sub>3</sub> = 6 × (¾)<sup>2</sup> = 3.375 <span class="mk">[1]</span>`]}},

{id: 'radians', u: P2, y: 13, p: PP, t: `Radians, arcs, sectors and small angles`,
body: `<p>A <b>radian</b> is the angle subtended by an arc equal in length to the radius. 2π radians = 360°, so π = 180°.</p>
<p>In radians, arc length is <i class="v">r</i>θ and sector area is ½<i class="v">r</i><sup>2</sup>θ. A segment is the sector minus the triangle: ½<i class="v">r</i><sup>2</sup>(θ − sin θ).</p>
<p>For small angles in radians: sin θ ≈ θ, tan θ ≈ θ and cos θ ≈ 1 − θ<sup>2</sup>/2. These are used to simplify expressions and in calculus proofs. All calculus with trig functions must be done in radians.</p>`,
eq: [[`<i>s</i> = <i>r</i>θ`, `arc length`], [`<i>A</i> = ½<i>r</i><sup>2</sup>θ`, `sector area`], [`sin θ ≈ θ, cos θ ≈ 1 − ${F('θ<sup>2</sup>', '2')}`, `small angles`]],
ex: {q: `A sector has radius 6 cm and angle 1.2 radians. Find the arc length and area.`,
s: [`Arc = 6 × 1.2 = 7.2 cm.`, `Area = ½ × 36 × 1.2 = 21.6 cm<sup>2</sup>.`],
a: `7.2 cm and 21.6 cm<sup>2</sup>`},
quiz: [
 {q: `135° in radians is`, o: [`π/4`, `3π/4`, `2π/3`, `5π/6`], a: 1, why: `135/180 × π.`},
 {q: `For small θ, ${F('1 − cos θ', 'θ sin θ')} ≈ `, o: [`1`, `½`, `2`, `0`], a: 1, why: `(θ<sup>2</sup>/2) / θ<sup>2</sup> = ½.`}],
exam: {m: 3, q: `A segment is cut from a circle of radius 10 cm by a chord subtending 1.5 radians at the centre. Find its area.`,
ms: [`Sector area ½ × 100 × 1.5 = 75 <span class="mk">[1]</span>`, `Triangle area ½ × 100 × sin 1.5 = 49.9 <span class="mk">[1]</span>`, `Segment 25.1 cm<sup>2</sup> <span class="mk">[1]</span>`]}},

{id: 'trig-addition', u: P2, y: 13, p: PP, t: `Compound angles, double angles and R sin(x + α)`,
body: `<p>The addition formulae expand sin(<i class="v">A</i> ± <i class="v">B</i>), cos(<i class="v">A</i> ± <i class="v">B</i>) and tan(<i class="v">A</i> ± <i class="v">B</i>). Setting <i class="v">A</i> = <i class="v">B</i> gives the double angle formulae.</p>
<p>The reciprocal functions are sec = 1/cos, cosec = 1/sin and cot = 1/tan, with identities 1 + tan<sup>2</sup> θ = sec<sup>2</sup> θ and 1 + cot<sup>2</sup> θ = cosec<sup>2</sup> θ.</p>
<p>An expression <i class="v">a</i> sin <i class="v">x</i> + <i class="v">b</i> cos <i class="v">x</i> can be written as <i class="v">R</i> sin(<i class="v">x</i> + α), with <i class="v">R</i> = √(<i class="v">a</i><sup>2</sup> + <i class="v">b</i><sup>2</sup>) and tan α = <i class="v">b</i>/<i class="v">a</i>. This gives the maximum <i class="v">R</i> and minimum −<i class="v">R</i> at once and turns hard equations into easy ones.</p>`,
eq: [[`sin(<i>A</i> + <i>B</i>) = sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i>`, `addition`], [`cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>`, `addition`], [`sin 2<i>A</i> = 2 sin <i>A</i> cos <i>A</i>`, `double angle`], [`cos 2<i>A</i> = 1 − 2 sin<sup>2</sup> <i>A</i> = 2 cos<sup>2</sup> <i>A</i> − 1`, `double angle`]],
ex: {q: `Write 3 sin <i>x</i> + 4 cos <i>x</i> in the form <i>R</i> sin(<i>x</i> + α), with 0 < α < π/2, and state its maximum.`,
s: [`<i>R</i> cos α = 3, <i>R</i> sin α = 4.`, `<i>R</i> = √(9 + 16) = 5.`, `tan α = 4/3, α = 0.927 rad.`],
a: `5 sin(<i>x</i> + 0.927), maximum value 5`},
quiz: [
 {q: `cos 2<i>A</i> in terms of sin <i>A</i> is`, o: [`1 − 2 sin<sup>2</sup> <i>A</i>`, `2 sin<sup>2</sup> <i>A</i> − 1`, `1 + 2 sin<sup>2</sup> <i>A</i>`, `sin<sup>2</sup> <i>A</i> − 1`], a: 0, why: `From cos<sup>2</sup> − sin<sup>2</sup>.`},
 {q: `1 + tan<sup>2</sup> θ = `, o: [`cosec<sup>2</sup> θ`, `sec<sup>2</sup> θ`, `cot<sup>2</sup> θ`, `1`], a: 1, why: `Divide sin<sup>2</sup> + cos<sup>2</sup> = 1 by cos<sup>2</sup>.`}],
exam: {m: 4, q: `Solve 3 sin <i>x</i> + 4 cos <i>x</i> = 2 for 0 ≤ <i>x</i> < 2π.`,
ms: [`5 sin(<i>x</i> + 0.927) = 2 <span class="mk">[1]</span>`, `<i>x</i> + 0.927 = 0.412 + 2π or π − 0.412 <span class="mk">[1]</span>`, `<i>x</i> = 1.80 <span class="mk">[1]</span>`, `<i>x</i> = 5.77 <span class="mk">[1]</span>`]}},

{id: 'parametric', u: P2, y: 13, p: PP, t: `Parametric equations`,
body: `<p>A curve can be described by giving <i class="v">x</i> and <i class="v">y</i> both in terms of a parameter <i class="v">t</i>. To convert to a Cartesian equation, eliminate <i class="v">t</i>: rearrange one equation for <i class="v">t</i> and substitute, or use a trig identity such as sin<sup>2</sup> <i class="v">t</i> + cos<sup>2</sup> <i class="v">t</i> = 1.</p>
<p>Gradient: d<i class="v">y</i>/d<i class="v">x</i> = (d<i class="v">y</i>/d<i class="v">t</i>) ÷ (d<i class="v">x</i>/d<i class="v">t</i>).</p>
<p>Area under a parametric curve: ∫<i class="v">y</i> (d<i class="v">x</i>/d<i class="v">t</i>) d<i class="v">t</i>, with the limits changed to values of <i class="v">t</i>. Parametric equations are useful for modelling motion, such as projectiles.</p>`,
eq: [[`${F('d<i>y</i>', 'd<i>x</i>')} = ${F('d<i>y</i>/d<i>t</i>', 'd<i>x</i>/d<i>t</i>')}`, `parametric gradient`], [`Area = ∫ <i>y</i> ${F('d<i>x</i>', 'd<i>t</i>')} d<i>t</i>`, `area`]],
ex: {q: `A curve has <i>x</i> = <i>t</i><sup>2</sup>, <i>y</i> = 2<i>t</i>. Find d<i>y</i>/d<i>x</i> and a Cartesian equation.`,
s: [`d<i>x</i>/d<i>t</i> = 2<i>t</i>, d<i>y</i>/d<i>t</i> = 2.`, `d<i>y</i>/d<i>x</i> = 2 / 2<i>t</i> = 1/<i>t</i>.`, `<i>t</i> = <i>y</i>/2, so <i>x</i> = <i>y</i><sup>2</sup>/4.`],
a: `d<i>y</i>/d<i>x</i> = 1/<i>t</i>, <i>y</i><sup>2</sup> = 4<i>x</i>`},
quiz: [
 {q: `<i>x</i> = 3 cos <i>t</i>, <i>y</i> = 3 sin <i>t</i> describes`, o: [`a line`, `a circle of radius 3`, `a parabola`, `an ellipse with radii 3 and 9`], a: 1, why: `<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 9.`},
 {q: `If d<i>x</i>/d<i>t</i> = 4 and d<i>y</i>/d<i>t</i> = 6, d<i>y</i>/d<i>x</i> = `, o: [`24`, `1.5`, `⅔`, `10`], a: 1, why: `6 ÷ 4.`}],
exam: {m: 4, q: `A curve has <i>x</i> = 2 + <i>t</i>, <i>y</i> = <i>t</i><sup>3</sup> − 3<i>t</i>. Find the equation of the tangent at <i>t</i> = 2.`,
ms: [`d<i>y</i>/d<i>x</i> = (3<i>t</i><sup>2</sup> − 3) / 1 <span class="mk">[1]</span>`, `At <i>t</i> = 2: gradient 9, point (4, 2) <span class="mk">[1]</span>`, `<i>y</i> − 2 = 9(<i>x</i> − 4) <span class="mk">[1]</span>`, `<i>y</i> = 9<i>x</i> − 34 <span class="mk">[1]</span>`]}},

{id: 'chain-product', u: P2, y: 13, p: PP, t: `Chain, product and quotient rules`,
body: `<p>Standard derivatives: e<sup><i>kx</i></sup> → <i class="v">k</i>e<sup><i>kx</i></sup>, ln <i class="v">x</i> → 1/<i class="v">x</i>, sin <i class="v">kx</i> → <i class="v">k</i> cos <i class="v">kx</i>, cos <i class="v">kx</i> → −<i class="v">k</i> sin <i class="v">kx</i>, tan <i class="v">kx</i> → <i class="v">k</i> sec<sup>2</sup> <i class="v">kx</i>.</p>
<p><b>Chain rule</b> for a function of a function: differentiate the outside, keep the inside, multiply by the derivative of the inside.</p>
<p><b>Product rule</b> for <i class="v">uv</i>; <b>quotient rule</b> for <i class="v">u</i>/<i class="v">v</i>. Write down <i class="v">u</i>, <i class="v">v</i>, <i class="v">u</i>′ and <i class="v">v</i>′ before combining. Factorise the answer; it makes finding stationary points much easier.</p>`,
eq: [[`${F('d<i>y</i>', 'd<i>x</i>')} = ${F('d<i>y</i>', 'd<i>u</i>')} × ${F('d<i>u</i>', 'd<i>x</i>')}`, `chain rule`], [`(<i>uv</i>)′ = <i>u</i>′<i>v</i> + <i>uv</i>′`, `product rule`], [`(${F('<i>u</i>', '<i>v</i>')})′ = ${F('<i>u</i>′<i>v</i> − <i>uv</i>′', '<i>v</i><sup>2</sup>')}`, `quotient rule`]],
ex: {q: `Differentiate <i>y</i> = <i>x</i><sup>2</sup>e<sup>3<i>x</i></sup>.`,
s: [`<i>u</i> = <i>x</i><sup>2</sup>, <i>u</i>′ = 2<i>x</i>; <i>v</i> = e<sup>3<i>x</i></sup>, <i>v</i>′ = 3e<sup>3<i>x</i></sup>.`, `<i>y</i>′ = 2<i>x</i>e<sup>3<i>x</i></sup> + 3<i>x</i><sup>2</sup>e<sup>3<i>x</i></sup>.`, `Factorise.`],
a: `<i>y</i>′ = <i>x</i>e<sup>3<i>x</i></sup>(2 + 3<i>x</i>)`},
quiz: [
 {q: `d/d<i>x</i> (3<i>x</i> + 1)<sup>5</sup> = `, o: [`5(3<i>x</i> + 1)<sup>4</sup>`, `15(3<i>x</i> + 1)<sup>4</sup>`, `3(3<i>x</i> + 1)<sup>5</sup>`, `15(3<i>x</i> + 1)<sup>5</sup>`], a: 1, why: `Outside 5( )<sup>4</sup>, times inside derivative 3.`},
 {q: `d/d<i>x</i> ln(2<i>x</i>) = `, o: [`1/(2<i>x</i>)`, `2/<i>x</i>`, `1/<i>x</i>`, `2`], a: 2, why: `2/(2<i>x</i>) = 1/<i>x</i>.`}],
exam: {m: 4, q: `Find the <i>x</i>-coordinate of the stationary point of <i>y</i> = ${F('ln <i>x</i>', '<i>x</i>')}, <i>x</i> > 0.`,
ms: [`Quotient rule: (1/<i>x</i> × <i>x</i> − ln <i>x</i>) / <i>x</i><sup>2</sup> <span class="mk">[1]</span>`, `= (1 − ln <i>x</i>) / <i>x</i><sup>2</sup> <span class="mk">[1]</span>`, `Set to 0: ln <i>x</i> = 1 <span class="mk">[1]</span>`, `<i>x</i> = e <span class="mk">[1]</span>`]}},

{id: 'implicit', u: P2, y: 13, p: PP, t: `Implicit differentiation and connected rates of change`,
body: `<p>When <i class="v">x</i> and <i class="v">y</i> are mixed together, differentiate every term with respect to <i class="v">x</i>. A term in <i class="v">y</i> gets multiplied by d<i class="v">y</i>/d<i class="v">x</i> (chain rule): d/d<i class="v">x</i>(<i class="v">y</i><sup>2</sup>) = 2<i class="v">y</i> d<i class="v">y</i>/d<i class="v">x</i>. A product like <i class="v">xy</i> needs the product rule: <i class="v">y</i> + <i class="v">x</i> d<i class="v">y</i>/d<i class="v">x</i>. Then collect the d<i class="v">y</i>/d<i class="v">x</i> terms.</p>
<p>Exponentials: d/d<i class="v">x</i>(<i class="v">a</i><sup><i>x</i></sup>) = <i class="v">a</i><sup><i>x</i></sup> ln <i class="v">a</i>.</p>
<p><b>Connected rates of change</b> link rates using the chain rule. Write down what you know (for example d<i class="v">V</i>/d<i class="v">t</i>), what you want (d<i class="v">r</i>/d<i class="v">t</i>), and a formula linking <i class="v">V</i> and <i class="v">r</i>.</p>`,
eq: [[`${F('d', 'd<i>x</i>')}(<i>y</i><sup><i>n</i></sup>) = <i>ny</i><sup><i>n</i>−1</sup>${F('d<i>y</i>', 'd<i>x</i>')}`, `implicit`], [`${F('d<i>r</i>', 'd<i>t</i>')} = ${F('d<i>r</i>', 'd<i>V</i>')} × ${F('d<i>V</i>', 'd<i>t</i>')}`, `connected rates`]],
ex: {q: `A spherical balloon is inflated at 10 cm<sup>3</sup> s<sup>−1</sup>. How fast is its radius increasing when <i>r</i> = 5 cm?`,
s: [`<i>V</i> = ⁴⁄₃π<i>r</i><sup>3</sup>, so d<i>V</i>/d<i>r</i> = 4π<i>r</i><sup>2</sup> = 100π.`, `d<i>r</i>/d<i>t</i> = (d<i>V</i>/d<i>t</i>) ÷ (d<i>V</i>/d<i>r</i>) = 10 / 100π.`],
a: `0.0318 cm s<sup>−1</sup>`},
quiz: [
 {q: `For <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25, d<i>y</i>/d<i>x</i> = `, o: [`−<i>x</i>/<i>y</i>`, `<i>x</i>/<i>y</i>`, `−<i>y</i>/<i>x</i>`, `2<i>x</i>`], a: 0, why: `2<i>x</i> + 2<i>y</i>(d<i>y</i>/d<i>x</i>) = 0.`},
 {q: `d/d<i>x</i>(2<sup><i>x</i></sup>) = `, o: [`<i>x</i>2<sup><i>x</i>−1</sup>`, `2<sup><i>x</i></sup> ln 2`, `2<sup><i>x</i></sup>`, `ln 2`], a: 1, why: `<i>a</i><sup><i>x</i></sup> = e<sup><i>x</i> ln <i>a</i></sup>.`}],
exam: {m: 4, q: `Find the gradient of <i>x</i><sup>2</sup> + 3<i>xy</i> + <i>y</i><sup>2</sup> = 11 at the point (1, 2).`,
ms: [`2<i>x</i> + 3<i>y</i> + 3<i>x</i>(d<i>y</i>/d<i>x</i>) + 2<i>y</i>(d<i>y</i>/d<i>x</i>) = 0 <span class="mk">[2]</span>`, `Substitutes (1, 2): 2 + 6 + 3<i>y</i>′ + 4<i>y</i>′ = 0 <span class="mk">[1]</span>`, `d<i>y</i>/d<i>x</i> = −8/7 <span class="mk">[1]</span>`]}},

{id: 'numerical', u: P2, y: 13, p: PP, t: `Numerical methods`,
body: `<p>Many equations cannot be solved exactly. Numerical methods find approximate roots.</p>
<ul><li><b>Change of sign:</b> if f(<i class="v">a</i>) and f(<i class="v">b</i>) have opposite signs and f is continuous, there is a root between them. It fails if there is an asymptote, or if two roots are close together.</li><li><b>Iteration:</b> rearrange f(<i class="v">x</i>) = 0 as <i class="v">x</i> = g(<i class="v">x</i>) and repeat <i class="v">x</i><sub><i>n</i>+1</sub> = g(<i class="v">x</i><sub><i>n</i></sub>). Diagrams are staircases or cobwebs; it converges if |g′(<i class="v">x</i>)| < 1 near the root.</li><li><b>Newton–Raphson:</b> follow the tangent to the axis. Fast, but fails if f′(<i class="v">x</i>) is near 0.</li><li><b>Trapezium rule:</b> estimate an integral with strips of width <i class="v">h</i>.</li></ul>`,
eq: [[`<i>x</i><sub><i>n</i>+1</sub> = <i>x</i><sub><i>n</i></sub> − ${F('f(<i>x</i><sub><i>n</i></sub>)', 'f′(<i>x</i><sub><i>n</i></sub>)')}`, `Newton–Raphson`], [`∫ ≈ ${F('<i>h</i>', '2')}(<i>y</i><sub>0</sub> + 2(<i>y</i><sub>1</sub> + … + <i>y</i><sub><i>n</i>−1</sub>) + <i>y</i><sub><i>n</i></sub>)`, `trapezium rule`]],
ex: {q: `f(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i> − 5. Show a root lies in [2, 3], then use Newton–Raphson from <i>x</i><sub>0</sub> = 2 twice.`,
s: [`f(2) = −1, f(3) = 16: sign change, so a root exists.`, `f′(<i>x</i>) = 3<i>x</i><sup>2</sup> − 2, so f′(2) = 10 and <i>x</i><sub>1</sub> = 2 − (−1)/10 = 2.1.`, `f(2.1) = 0.061, f′(2.1) = 11.23, so <i>x</i><sub>2</sub> = 2.1 − 0.061/11.23.`],
a: `<i>x</i><sub>2</sub> = 2.0946`},
quiz: [
 {q: `Newton–Raphson fails when the starting point is near`, o: [`a root`, `a stationary point`, `the origin`, `an integer`], a: 1, why: `f′(<i>x</i>) ≈ 0 sends the tangent far away.`},
 {q: `For a curve that is convex (curving upwards), the trapezium rule gives`, o: [`an underestimate`, `an overestimate`, `the exact value`, `zero`], a: 1, why: `The straight tops sit above the curve.`}],
exam: {m: 4, q: `Use the trapezium rule with 4 strips to estimate ∫<sub>0</sub><sup>2</sup> √(1 + <i>x</i><sup>2</sup>) d<i>x</i>.`,
ms: [`<i>h</i> = 0.5; <i>y</i> values 1, 1.1180, 1.4142, 1.8028, 2.2361 <span class="mk">[1]</span>`, `0.25 × (1 + 2.2361 + 2(1.1180 + 1.4142 + 1.8028)) <span class="mk">[1]</span>`, `= 0.25 × 11.9061 <span class="mk">[1]</span>`, `≈ 2.98 <span class="mk">[1]</span>`]}},

{id: 'integration-methods', u: P2, y: 13, p: PP, t: `Integration by substitution and by parts`,
body: `<p>Standard integrals: ∫e<sup><i>kx</i></sup> = e<sup><i>kx</i></sup>/<i class="v">k</i>, ∫1/<i class="v">x</i> = ln|<i class="v">x</i>|, ∫cos <i class="v">kx</i> = (sin <i class="v">kx</i>)/<i class="v">k</i>, ∫sin <i class="v">kx</i> = −(cos <i class="v">kx</i>)/<i class="v">k</i>. Recognise ∫f′(<i class="v">x</i>)/f(<i class="v">x</i>) = ln|f(<i class="v">x</i>)|.</p>
<p><b>Substitution:</b> choose <i class="v">u</i>, find d<i class="v">u</i>/d<i class="v">x</i>, replace every <i class="v">x</i> and d<i class="v">x</i>, and change the limits too.</p>
<p><b>By parts</b> for products: choose <i class="v">u</i> as the part that gets simpler when differentiated (polynomials, or ln <i class="v">x</i>, which you differentiate rather than integrate). For trig powers, use identities first: sin<sup>2</sup> <i class="v">x</i> = ½(1 − cos 2<i class="v">x</i>).</p>`,
eq: [[`∫<i>u</i> ${F('d<i>v</i>', 'd<i>x</i>')} d<i>x</i> = <i>uv</i> − ∫<i>v</i> ${F('d<i>u</i>', 'd<i>x</i>')} d<i>x</i>`, `integration by parts`], [`∫${F('f′(<i>x</i>)', 'f(<i>x</i>)')} d<i>x</i> = ln|f(<i>x</i>)| + <i>c</i>`, `log form`]],
ex: {q: `Find ∫<i>x</i>e<sup><i>x</i></sup> d<i>x</i>.`,
s: [`<i>u</i> = <i>x</i>, so <i>u</i>′ = 1; <i>v</i>′ = e<sup><i>x</i></sup>, so <i>v</i> = e<sup><i>x</i></sup>.`, `= <i>x</i>e<sup><i>x</i></sup> − ∫e<sup><i>x</i></sup> d<i>x</i>.`],
a: `<i>x</i>e<sup><i>x</i></sup> − e<sup><i>x</i></sup> + <i>c</i>`},
quiz: [
 {q: `∫ ${F('2<i>x</i>', '<i>x</i><sup>2</sup> + 1')} d<i>x</i> = `, o: [`ln(<i>x</i><sup>2</sup> + 1) + <i>c</i>`, `2 ln <i>x</i> + <i>c</i>`, `<i>x</i><sup>2</sup> ln <i>x</i> + <i>c</i>`, `1/(<i>x</i><sup>2</sup> + 1) + <i>c</i>`], a: 0, why: `Top is the derivative of the bottom.`},
 {q: `For ∫<i>x</i> ln <i>x</i> d<i>x</i> by parts, take <i>u</i> = `, o: [`<i>x</i>`, `ln <i>x</i>`, `<i>x</i> ln <i>x</i>`, `1`], a: 1, why: `ln <i>x</i> is easy to differentiate but not to integrate.`}],
exam: {m: 4, q: `Find the exact value of ∫<sub>0</sub><sup>1</sup> <i>x</i>e<sup>2<i>x</i></sup> d<i>x</i>.`,
ms: [`Parts with <i>u</i> = <i>x</i>, <i>v</i> = ½e<sup>2<i>x</i></sup> <span class="mk">[1]</span>`, `[½<i>x</i>e<sup>2<i>x</i></sup> − ¼e<sup>2<i>x</i></sup>] <span class="mk">[1]</span>`, `(½e<sup>2</sup> − ¼e<sup>2</sup>) − (0 − ¼) <span class="mk">[1]</span>`, `¼(e<sup>2</sup> + 1) <span class="mk">[1]</span>`]}},

{id: 'differential-equations', u: P2, y: 13, p: PP, t: `Differential equations`,
body: `<p>A differential equation links a function with its derivatives. At A-level you solve first-order equations by <b>separating the variables</b>: get all the <i class="v">y</i> terms with d<i class="v">y</i> on one side and all the <i class="v">x</i> terms with d<i class="v">x</i> on the other, then integrate both sides.</p>
<p>The <b>general solution</b> has a constant. A <b>particular solution</b> uses a given condition, such as <i class="v">y</i> = 3 when <i class="v">x</i> = 0, to find it.</p>
<p>In modelling, “the rate of change is proportional to” becomes d<i class="v">y</i>/d<i class="v">t</i> = <i class="v">ky</i>, giving exponential growth or decay. Always comment on the model's limitations, for example that a population cannot grow forever.</p>`,
eq: [[`${F('d<i>y</i>', 'd<i>x</i>')} = f(<i>x</i>)g(<i>y</i>) ⇒ ∫${F('1', 'g(<i>y</i>)')} d<i>y</i> = ∫f(<i>x</i>) d<i>x</i>`, `separation of variables`], [`${F('d<i>y</i>', 'd<i>t</i>')} = <i>ky</i> ⇒ <i>y</i> = <i>A</i>e<sup><i>kt</i></sup>`, `exponential model`]],
ex: {q: `Solve d<i>y</i>/d<i>x</i> = 2<i>xy</i>, given <i>y</i> = 3 when <i>x</i> = 0.`,
s: [`Separate: ∫(1/<i>y</i>) d<i>y</i> = ∫2<i>x</i> d<i>x</i>.`, `ln <i>y</i> = <i>x</i><sup>2</sup> + <i>c</i>, so <i>y</i> = <i>A</i>e<sup><i>x</i><sup>2</sup></sup>.`, `<i>x</i> = 0, <i>y</i> = 3 gives <i>A</i> = 3.`],
a: `<i>y</i> = 3e<sup><i>x</i><sup>2</sup></sup>`},
quiz: [
 {q: `“The rate of cooling is proportional to the temperature difference θ” is`, o: [`dθ/d<i>t</i> = <i>k</i>`, `dθ/d<i>t</i> = −<i>k</i>θ`, `θ = <i>kt</i>`, `dθ/d<i>t</i> = <i>kt</i>`], a: 1, why: `Rate of change of θ, negative for decrease.`},
 {q: `A general solution differs from a particular solution by`, o: [`a constant`, `a derivative`, `the variable`, `nothing`], a: 0, why: `The particular solution fixes the constant.`}],
exam: {m: 5, q: `A population <i>P</i> grows with d<i>P</i>/d<i>t</i> = 0.04<i>P</i>, where <i>t</i> is in years and <i>P</i> = 500 at <i>t</i> = 0. Find when the population reaches 2000 and give one limitation.`,
ms: [`<i>P</i> = <i>A</i>e<sup>0.04<i>t</i></sup> <span class="mk">[1]</span>`, `<i>A</i> = 500 <span class="mk">[1]</span>`, `e<sup>0.04<i>t</i></sup> = 4, <i>t</i> = ln 4 / 0.04 <span class="mk">[1]</span>`, `<i>t</i> = 34.7 years <span class="mk">[1]</span>`, `Limitation: predicts unlimited growth; food or space would limit it <span class="mk">[1]</span>`]}},

{id: 'vectors-3d', u: P2, y: 13, p: PP, t: `Vectors in three dimensions`,
body: `<p>In 3D, add a third unit vector <b>k</b> along the <i class="v">z</i>-axis. Everything from 2D carries over: add components, multiply by scalars, and find magnitudes with Pythagoras in three dimensions.</p>
<p>The distance between two points (<i class="v">x</i><sub>1</sub>, <i class="v">y</i><sub>1</sub>, <i class="v">z</i><sub>1</sub>) and (<i class="v">x</i><sub>2</sub>, <i class="v">y</i><sub>2</sub>, <i class="v">z</i><sub>2</sub>) is √(Δ<i class="v">x</i><sup>2</sup> + Δ<i class="v">y</i><sup>2</sup> + Δ<i class="v">z</i><sup>2</sup>).</p>
<p>The angle a vector makes with an axis comes from its direction cosine, for example cos θ<sub><i>x</i></sub> = <i class="v">x</i>/|<b>a</b>|. Show points are collinear by showing one vector between them is a multiple of another and they share a point.</p>`,
eq: [[`|<i>x</i><b>i</b> + <i>y</i><b>j</b> + <i>z</i><b>k</b>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>)`, `magnitude`], [`cos θ<sub><i>x</i></sub> = ${F('<i>x</i>', '|<b>a</b>|')}`, `angle with <i>x</i>-axis`]],
ex: {q: `Find the distance between (1, 2, 3) and (4, 6, 15).`,
s: [`Differences: 3, 4, 12.`, `Distance = √(9 + 16 + 144) = √169.`],
a: `13`},
quiz: [
 {q: `|2<b>i</b> − <b>j</b> + 2<b>k</b>| = `, o: [`3`, `5`, `9`, `√5`], a: 0, why: `√(4 + 1 + 4) = 3.`},
 {q: `Which is parallel to <b>i</b> + 2<b>j</b> − <b>k</b>?`, o: [`2<b>i</b> + 4<b>j</b> + 2<b>k</b>`, `−3<b>i</b> − 6<b>j</b> + 3<b>k</b>`, `<b>i</b> − 2<b>j</b> + <b>k</b>`, `2<b>i</b> + <b>j</b> − <b>k</b>`], a: 1, why: `It is −3 times the vector.`}],
exam: {m: 3, q: `Find the angle that 2<b>i</b> + 3<b>j</b> − 6<b>k</b> makes with the positive <i>z</i>-axis.`,
ms: [`Magnitude √(4 + 9 + 36) = 7 <span class="mk">[1]</span>`, `cos θ = −6/7 <span class="mk">[1]</span>`, `θ = 149.0° <span class="mk">[1]</span>`]}},

{id: 'conditional', u: S2, y: 13, p: P3, t: `Conditional probability`,
body: `<p><b>Conditional probability</b> P(A | B) is the probability of A given that B has happened. Restrict attention to B, then ask what fraction of it is also A.</p>
<p>Two-way tables, Venn diagrams and tree diagrams all work. On a tree, the second set of branches are conditional probabilities.</p>
<p>A and B are independent exactly when P(A | B) = P(A). Set notation: A′ is “not A”, ∩ is “and”, ∪ is “or”. Medical test questions are classic: a positive result for a rare condition is often a false positive.</p>`,
eq: [[`P(A | B) = ${F('P(A ∩ B)', 'P(B)')}`, `conditional probability`], [`P(A ∩ B) = P(A | B) × P(B)`, `multiplication rule`]],
ex: {q: `2% of people have a condition. A test detects it 95% of the time and gives a false positive 10% of the time. Given a positive test, find the probability the person has the condition.`,
s: [`P(condition and positive) = 0.02 × 0.95 = 0.019.`, `P(no condition and positive) = 0.98 × 0.10 = 0.098.`, `P(positive) = 0.117.`, `P(condition | positive) = 0.019 / 0.117.`],
a: `About 0.162`},
quiz: [
 {q: `P(A ∩ B) = 0.12, P(B) = 0.4. P(A | B) = `, o: [`0.048`, `0.3`, `0.52`, `0.12`], a: 1, why: `0.12 / 0.4.`},
 {q: `If P(A | B) = P(A), then A and B are`, o: [`mutually exclusive`, `independent`, `equal`, `complementary`], a: 1, why: `Knowing B does not change A.`}],
exam: {m: 3, q: `In a group of 60 students, 35 study Maths, 20 study Physics and 12 study both. A student is chosen at random. Given they study Physics, find the probability they study Maths.`,
ms: [`P(M ∩ P) = 12/60 <span class="mk">[1]</span>`, `P(P) = 20/60 <span class="mk">[1]</span>`, `12/20 = 0.6 <span class="mk">[1]</span>`]}},

{id: 'normal', u: S2, y: 13, p: P3, t: `The normal distribution`,
body: `<p>The normal distribution <i class="v">X</i> ~ N(μ, σ<sup>2</sup>) is a symmetrical, bell-shaped model for continuous data. About 68% of values are within one standard deviation of the mean, 95% within two, and 99.7% within three. Points of inflection are at μ ± σ.</p>
<p>Standardise with <i class="v">Z</i> = (<i class="v">X</i> − μ)/σ, so <i class="v">Z</i> ~ N(0, 1). Your calculator gives normal probabilities and inverse normal values directly.</p>
<p>To find an unknown μ or σ, use the inverse normal to get a <i class="v">z</i>-value and solve <i class="v">x</i> = μ + <i class="v">z</i>σ. A binomial B(<i class="v">n</i>, <i class="v">p</i>) can be approximated by N(<i class="v">np</i>, <i class="v">np</i>(1 − <i class="v">p</i>)) when <i class="v">n</i> is large and <i class="v">p</i> near 0.5, with a continuity correction.</p>`,
eq: [[`<i>Z</i> = ${F('<i>X</i> − μ', 'σ')}`, `standardising`], [`P(<i>X</i> = <i>a</i>) = 0`, `continuous distribution`]],
ex: {q: `<i>X</i> ~ N(50, 4<sup>2</sup>). Find P(<i>X</i> < 56) and the value <i>a</i> with P(<i>X</i> < <i>a</i>) = 0.9.`,
s: [`<i>z</i> = (56 − 50)/4 = 1.5, so P = 0.9332.`, `For 0.9, inverse normal gives <i>z</i> = 1.2816.`, `<i>a</i> = 50 + 1.2816 × 4.`],
a: `0.9332 and <i>a</i> = 55.1`},
quiz: [
 {q: `About what percentage of a normal distribution lies within 2σ of the mean?`, o: [`68%`, `95%`, `99.7%`, `50%`], a: 1, why: `The 68–95–99.7 rule.`},
 {q: `For a normal distribution, P(<i>X</i> = 10) is`, o: [`0.5`, `0`, `depends on σ`, `1`], a: 1, why: `Any single value has zero probability for continuous data.`}],
exam: {m: 4, q: `Lengths are normally distributed. 10% are below 12 cm and 20% are above 18 cm. Find the mean and standard deviation.`,
ms: [`(12 − μ)/σ = −1.2816 <span class="mk">[1]</span>`, `(18 − μ)/σ = 0.8416 <span class="mk">[1]</span>`, `Subtract: 6 = 2.1232σ, σ = 2.83 <span class="mk">[1]</span>`, `μ = 15.6 <span class="mk">[1]</span>`]}},

{id: 'normal-tests', u: S2, y: 13, p: P3, t: `Hypothesis tests with the normal and correlation`,
body: `<p>If <i class="v">X</i> ~ N(μ, σ<sup>2</sup>), the mean of a sample of size <i class="v">n</i> has distribution <i class="v">X̄</i> ~ N(μ, σ<sup>2</sup>/<i class="v">n</i>). Use this to test a claim about the population mean.</p>
<p>Steps: state H<sub>0</sub> and H<sub>1</sub> in terms of μ; find the test statistic <i class="v">z</i> = (<i class="v">x̄</i> − μ)/(σ/√<i class="v">n</i>); compare with the critical value (1.6449 for a one-tailed test at 5%, 1.96 for two-tailed); conclude in context.</p>
<p>For <b>correlation</b>, test H<sub>0</sub>: ρ = 0 against H<sub>1</sub>: ρ > 0, ρ < 0 or ρ ≠ 0, comparing the sample's product moment correlation coefficient <i class="v">r</i> with the critical value from tables for that sample size.</p>`,
eq: [[`<i>X̄</i> ~ N(μ, ${F('σ<sup>2</sup>', '<i>n</i>')})`, `distribution of the sample mean`], [`<i>z</i> = ${F('<i>x̄</i> − μ', 'σ/√<i>n</i>')}`, `test statistic`]],
ex: {q: `<i>X</i> ~ N(μ, 3<sup>2</sup>). A sample of 25 has mean 21.2. Test H<sub>0</sub>: μ = 20 against H<sub>1</sub>: μ > 20 at 5%.`,
s: [`<i>z</i> = (21.2 − 20) / (3/5) = 1.2/0.6 = 2.0.`, `Critical value 1.6449.`, `2.0 > 1.6449, so reject H<sub>0</sub>.`],
a: `There is evidence at 5% that the mean is greater than 20.`},
quiz: [
 {q: `The standard deviation of <i>X̄</i> for <i>n</i> = 16 and σ = 8 is`, o: [`8`, `2`, `0.5`, `4`], a: 1, why: `8/√16 = 2.`},
 {q: `The 5% two-tailed critical value for <i>Z</i> is`, o: [`1.6449`, `1.96`, `2.3263`, `2.5758`], a: 1, why: `2.5% in each tail.`}],
exam: {m: 3, q: `A sample of 10 pairs has <i>r</i> = 0.62. Test at 5% whether there is positive correlation. The critical value is 0.5494.`,
ms: [`H<sub>0</sub>: ρ = 0, H<sub>1</sub>: ρ > 0 <span class="mk">[1]</span>`, `0.62 > 0.5494, so reject H<sub>0</sub> <span class="mk">[1]</span>`, `Evidence of positive correlation in the population <span class="mk">[1]</span>`]}},

{id: 'moments-maths', u: M2, y: 13, p: P3, t: `Moments`,
body: `<p>The moment of a force about a point is force × perpendicular distance. For a rigid body in equilibrium, the resultant force is zero and the total moment about any point is zero.</p>
<p>A <b>uniform</b> rod has its weight at its midpoint. A <b>non-uniform</b> rod's centre of mass must be found. When a rod is “on the point of tilting” about a support, the reaction at the other support is zero. Take moments about the tilting point.</p>
<p>Choose the point for moments wisely: through an unknown force, so it drops out. Then resolve vertically for the other unknown.</p>`,
eq: [[`moment = <i>Fd</i>`, `<i>d</i> perpendicular`], [`Σ clockwise = Σ anticlockwise`, `equilibrium`]],
ex: {q: `A uniform rod AB, length 4 m and mass 10 kg, rests on supports at A and at C, where AC = 3 m. Find the reactions.`,
s: [`Weight 10<i>g</i> = 98 N acts 2 m from A.`, `Moments about A: <i>R</i><sub>C</sub> × 3 = 98 × 2, so <i>R</i><sub>C</sub> = 65.3 N.`, `Resolve: <i>R</i><sub>A</sub> = 98 − 65.3.`],
a: `<i>R</i><sub>A</sub> = 32.7 N, <i>R</i><sub>C</sub> = 65.3 N`},
quiz: [
 {q: `When a rod is about to tilt about support C, the reaction at the other support is`, o: [`maximum`, `zero`, `equal to the weight`, `negative`], a: 1, why: `The rod is just leaving that support.`},
 {q: `The weight of a uniform rod acts`, o: [`at one end`, `at the midpoint`, `at a support`, `nowhere`], a: 1, why: `By symmetry.`}],
exam: {m: 3, q: `For the rod above, a particle of mass <i>m</i> kg is placed at B. Find the largest <i>m</i> for which the rod does not tilt about C.`,
ms: [`On the point of tilting, <i>R</i><sub>A</sub> = 0 <span class="mk">[1]</span>`, `Moments about C: 10<i>g</i> × 1 = <i>mg</i> × 1 <span class="mk">[1]</span>`, `<i>m</i> = 10 <span class="mk">[1]</span>`]}},

{id: 'projectiles-maths', u: M2, y: 13, p: P3, t: `Projectiles`,
body: `<p>Model a projectile as a particle with no air resistance. Resolve the initial velocity: horizontal <i class="v">U</i> cos α (constant), vertical <i class="v">U</i> sin α (acceleration −<i class="v">g</i>). The time is shared between the two directions.</p>
<p>Useful results on level ground: time of flight 2<i class="v">U</i> sin α / <i class="v">g</i>, maximum height <i class="v">U</i><sup>2</sup> sin<sup>2</sup> α / 2<i class="v">g</i>, range <i class="v">U</i><sup>2</sup> sin 2α / <i class="v">g</i>. Edexcel expects you to derive these, not quote them.</p>
<p>The equation of the trajectory comes from eliminating <i class="v">t</i>: <i class="v">y</i> = <i class="v">x</i> tan α − <i class="v">gx</i><sup>2</sup>/(2<i class="v">U</i><sup>2</sup> cos<sup>2</sup> α).</p>`,
eq: [[`<i>x</i> = (<i>U</i> cos α)<i>t</i>`, `horizontal`], [`<i>y</i> = (<i>U</i> sin α)<i>t</i> − ½<i>gt</i><sup>2</sup>`, `vertical`]],
ex: {q: `A ball is projected from the ground at 20 m s<sup>−1</sup> at 30° to the horizontal. Find the time of flight, range and greatest height (<i>g</i> = 9.8).`,
s: [`Vertical: <i>U</i> sin 30° = 10 m s<sup>−1</sup>. Lands when 10<i>t</i> − 4.9<i>t</i><sup>2</sup> = 0, so <i>t</i> = 2.04 s.`, `Horizontal: 20 cos 30° = 17.32 m s<sup>−1</sup>. Range = 17.32 × 2.04 = 35.3 m.`, `Height: 0 = 10<sup>2</sup> − 2 × 9.8 × <i>h</i>, so <i>h</i> = 5.10 m.`],
a: `2.04 s, 35.3 m, 5.10 m`},
quiz: [
 {q: `At the top of a projectile's path`, o: [`speed is zero`, `vertical velocity is zero`, `acceleration is zero`, `horizontal velocity is zero`], a: 1, why: `It still moves horizontally.`},
 {q: `On level ground, the maximum range occurs at`, o: [`30°`, `45°`, `60°`, `90°`], a: 1, why: `sin 2α is greatest at α = 45°.`}],
exam: {m: 4, q: `A stone is thrown horizontally at 12 m s<sup>−1</sup> from a cliff 40 m high. Find its speed as it hits the sea.`,
ms: [`Vertical: <i>v</i><sup>2</sup> = 2 × 9.8 × 40 = 784 <span class="mk">[1]</span>`, `<i>v</i><sub>y</sub> = 28 m s<sup>−1</sup> <span class="mk">[1]</span>`, `Speed = √(12<sup>2</sup> + 28<sup>2</sup>) <span class="mk">[1]</span>`, `30.5 m s<sup>−1</sup> <span class="mk">[1]</span>`]}},

{id: 'friction', u: M2, y: 13, p: P3, t: `Friction and inclined planes`,
body: `<p>Friction opposes motion or the tendency to move. Its maximum value is μ<i class="v">R</i>, where μ is the coefficient of friction and <i class="v">R</i> the normal reaction. If the body is <b>limiting equilibrium</b> (on the point of moving) or actually moving, friction equals μ<i class="v">R</i>; otherwise it is just enough to prevent motion.</p>
<p>On an inclined plane, resolve parallel and perpendicular to the slope. The weight splits into <i class="v">mg</i> sin θ down the slope and <i class="v">mg</i> cos θ into the slope. If a force pulls at an angle to the slope, it changes <i class="v">R</i>, and so changes the friction.</p>
<p>Statics problems: forces balance. Dynamics: resultant along the slope = <i class="v">ma</i>.</p>`,
eq: [[`<i>F</i> ≤ μ<i>R</i>`, `friction`], [`<i>R</i> = <i>mg</i> cos θ`, `on a slope, no other perpendicular forces`]],
ex: {q: `A 5 kg block on a rough horizontal surface (μ = 0.3) is pulled by a horizontal 25 N force. Find its acceleration.`,
s: [`<i>R</i> = 5 × 9.8 = 49 N.`, `Friction = 0.3 × 49 = 14.7 N.`, `25 − 14.7 = 5<i>a</i>.`],
a: `<i>a</i> = 2.06 m s<sup>−2</sup>`},
quiz: [
 {q: `A block is at rest on a rough slope. Friction is`, o: [`always μ<i>R</i>`, `at most μ<i>R</i>`, `zero`, `greater than μ<i>R</i>`], a: 1, why: `It is only μ<i>R</i> when limiting.`},
 {q: `On a smooth slope at angle θ, the acceleration of a sliding particle is`, o: [`<i>g</i>`, `<i>g</i> sin θ`, `<i>g</i> cos θ`, `<i>g</i> tan θ`], a: 1, why: `Only the component down the slope acts.`}],
exam: {m: 4, q: `A 2 kg particle is released from rest on a rough slope inclined at 30°, μ = 0.2. Find its acceleration.`,
ms: [`<i>R</i> = 2<i>g</i> cos 30° = 16.97 N <span class="mk">[1]</span>`, `Friction = 0.2 × 16.97 = 3.39 N <span class="mk">[1]</span>`, `2<i>g</i> sin 30° − 3.39 = 2<i>a</i> <span class="mk">[1]</span>`, `<i>a</i> = 3.20 m s<sup>−2</sup> <span class="mk">[1]</span>`]}},

{id: 'vector-kinematics', u: M2, y: 13, p: P3, t: `Vectors in kinematics`,
body: `<p>In two dimensions, position, velocity and acceleration are vectors in <b>i</b> and <b>j</b>. Differentiate and integrate each component separately.</p>
<p>With constant acceleration, use the vector <i>suvat</i> forms: <b>v</b> = <b>u</b> + <b>a</b><i class="v">t</i> and <b>r</b> = <b>r</b><sub>0</sub> + <b>u</b><i class="v">t</i> + ½<b>a</b><i class="v">t</i><sup>2</sup>.</p>
<p>Speed is the magnitude of velocity. A particle moves parallel to <b>i</b> when its <b>j</b> component of velocity is zero, and is due north-east when its components are equal and positive. Two particles collide if their position vectors are equal at the same time.</p>`,
eq: [[`<b>v</b> = ${F('d<b>r</b>', 'd<i>t</i>')}, <b>a</b> = ${F('d<b>v</b>', 'd<i>t</i>')}`, `calculus`], [`<b>r</b> = <b>u</b><i>t</i> + ½<b>a</b><i>t</i><sup>2</sup>`, `constant acceleration`]],
ex: {q: `A particle has velocity <b>v</b> = 3<i>t</i><sup>2</sup><b>i</b> + 4<i>t</i><b>j</b>. Find its acceleration and the magnitude at <i>t</i> = 1.`,
s: [`<b>a</b> = 6<i>t</i><b>i</b> + 4<b>j</b>.`, `At <i>t</i> = 1: <b>a</b> = 6<b>i</b> + 4<b>j</b>.`, `|<b>a</b>| = √(36 + 16) = √52.`],
a: `6<i>t</i><b>i</b> + 4<b>j</b>; 7.21 m s<sup>−2</sup> at <i>t</i> = 1`},
quiz: [
 {q: `A particle with velocity (5<b>i</b> − 12<b>j</b>) m s<sup>−1</sup> has speed`, o: [`7 m s<sup>−1</sup>`, `13 m s<sup>−1</sup>`, `17 m s<sup>−1</sup>`, `−7 m s<sup>−1</sup>`], a: 1, why: `√(25 + 144).`},
 {q: `A particle moves parallel to <b>i</b> when`, o: [`the <b>i</b> component of <b>v</b> is 0`, `the <b>j</b> component of <b>v</b> is 0`, `<b>a</b> = 0`, `<b>r</b> = 0`], a: 1, why: `Then it has no <b>j</b> motion.`}],
exam: {m: 4, q: `A particle starts at (2<b>i</b> + <b>j</b>) m with velocity (3<b>i</b> − <b>j</b>) m s<sup>−1</sup> and constant acceleration (<b>i</b> + 2<b>j</b>) m s<sup>−2</sup>. Find when it is moving parallel to <b>i</b> and its position then.`,
ms: [`<b>v</b> = (3 + <i>t</i>)<b>i</b> + (−1 + 2<i>t</i>)<b>j</b> <span class="mk">[1]</span>`, `Parallel to <b>i</b> when −1 + 2<i>t</i> = 0, <i>t</i> = 0.5 s <span class="mk">[1]</span>`, `<b>r</b> = (2<b>i</b> + <b>j</b>) + 0.5(3<b>i</b> − <b>j</b>) + ½(0.25)(<b>i</b> + 2<b>j</b>) <span class="mk">[1]</span>`, `<b>r</b> = 3.625<b>i</b> + 0.75<b>j</b> <span class="mk">[1]</span>`]}}
);
}
