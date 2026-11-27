/* Pearson Edexcel A-level Mathematics 9MA0: Year 12 lessons */
{
const F = window.fr;
const P1 = 'Pure: Year 12', S1 = 'Statistics: Year 12', M1 = 'Mechanics: Year 12';
const PP = 'Papers 1 and 2', P3 = 'Paper 3';
window.GR.lessons['edexcel-maths'] = [

{id: 'proof', u: P1, y: 12, p: PP, t: `Proof by deduction and exhaustion`,
body: `<p>A <b>proof</b> shows a statement is true in every case, not just the ones you tried. Start from known facts and move step by step to the conclusion, ending with a sentence that states what you have shown.</p>
<p><b>Proof by deduction</b> uses algebra. Write a general even number as 2<i class="v">n</i>, an odd number as 2<i class="v">n</i> + 1, and consecutive integers as <i class="v">n</i>, <i class="v">n</i> + 1, <i class="v">n</i> + 2.</p>
<p><b>Proof by exhaustion</b> splits the problem into a finite set of cases and checks each one, for example odd and even <i class="v">n</i>.</p>
<p><b>Disproof by counter-example</b>: one case where the statement fails is enough to show it is false.</p>`,
eq: [[`even: 2<i>n</i>, odd: 2<i>n</i> + 1`, `general forms`], [`(<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup>`, `often used in completing the square proofs`]],
ex: {q: `Prove that the sum of any three consecutive integers is a multiple of 3.`,
s: [`Let the integers be <i>n</i>, <i>n</i> + 1 and <i>n</i> + 2.`, `Sum = 3<i>n</i> + 3 = 3(<i>n</i> + 1).`, `Since <i>n</i> + 1 is an integer, the sum is 3 times an integer.`],
a: `So the sum of three consecutive integers is always a multiple of 3.`},
quiz: [
 {q: `Which is a counter-example to “all prime numbers are odd”?`, o: [`1`, `2`, `9`, `15`], a: 1, why: `2 is prime and even.`},
 {q: `To prove <i>n</i><sup>2</sup> + <i>n</i> is always even by exhaustion, the cases are`, o: [`<i>n</i> positive and negative`, `<i>n</i> odd and even`, `<i>n</i> = 1, 2, 3`, `<i>n</i> prime and not prime`], a: 1, why: `Every integer is odd or even.`}],
exam: {m: 4, q: `Prove that <i>x</i><sup>2</sup> − 6<i>x</i> + 11 > 0 for all real values of <i>x</i>.`,
ms: [`Completes the square: (<i>x</i> − 3)<sup>2</sup> + 2 <span class="mk">[1]</span>`, `(<i>x</i> − 3)<sup>2</sup> ≥ 0 for all real <i>x</i> <span class="mk">[1]</span>`, `So (<i>x</i> − 3)<sup>2</sup> + 2 ≥ 2 <span class="mk">[1]</span>`, `Concludes the expression is always greater than 0 <span class="mk">[1]</span>`]}},

{id: 'indices-surds', u: P1, y: 12, p: PP, t: `Indices and surds`,
body: `<p>Index laws: multiply by adding powers, divide by subtracting, and raise a power to a power by multiplying. A negative power means a reciprocal; a fractional power means a root.</p>
<p>A <b>surd</b> is a root that cannot be simplified to a whole number, such as √2. Simplify by taking out square factors: √50 = √25 × √2 = 5√2.</p>
<p>To <b>rationalise the denominator</b>, multiply top and bottom by the surd, or by the conjugate if the denominator is a sum: for <i class="v">a</i> − √<i class="v">b</i>, multiply by <i class="v">a</i> + √<i class="v">b</i>. The difference of two squares removes the surd.</p>`,
eq: [[`<i>a</i><sup>m</sup> × <i>a</i><sup>n</sup> = <i>a</i><sup>m+n</sup>`, `multiply`], [`<i>a</i><sup>−n</sup> = ${F('1', '<i>a</i><sup>n</sup>')}`, `negative index`], [`<i>a</i><sup>m/n</sup> = (<sup>n</sup>√<i>a</i>)<sup>m</sup>`, `fractional index`], [`√<i>ab</i> = √<i>a</i> √<i>b</i>`, `surds`]],
ex: {q: `Rationalise ${F('6', '3 − √3')}.`,
s: [`Multiply top and bottom by 3 + √3.`, `Denominator: (3 − √3)(3 + √3) = 9 − 3 = 6.`, `Numerator: 6(3 + √3).`, `Divide by 6.`],
a: `3 + √3`},
quiz: [
 {q: `8<sup>2/3</sup> = `, o: [`4`, `5.33`, `16`, `2`], a: 0, why: `Cube root of 8 is 2, squared is 4.`},
 {q: `√75 simplifies to`, o: [`3√5`, `5√3`, `25√3`, `15√5`], a: 1, why: `√25 × √3 = 5√3.`},
 {q: `27<sup>−1/3</sup> = `, o: [`−3`, `−9`, `⅓`, `9`], a: 2, why: `Cube root of 27 is 3; negative power gives ⅓.`}],
exam: {m: 3, q: `Solve 4<sup><i>x</i>+1</sup> = 8<sup><i>x</i></sup>.`,
ms: [`Writes both as powers of 2: 2<sup>2(<i>x</i>+1)</sup> = 2<sup>3<i>x</i></sup> <span class="mk">[1]</span>`, `Equates powers: 2<i>x</i> + 2 = 3<i>x</i> <span class="mk">[1]</span>`, `<i>x</i> = 2 <span class="mk">[1]</span>`]}},

{id: 'quadratics', u: P1, y: 12, p: PP, t: `Quadratics, completing the square and the discriminant`,
body: `<p>Solve quadratics by factorising, the formula, or <b>completing the square</b>. Completed square form <i class="v">a</i>(<i class="v">x</i> + <i class="v">p</i>)<sup>2</sup> + <i class="v">q</i> gives the turning point (−<i class="v">p</i>, <i class="v">q</i>) directly.</p>
<p>The <b>discriminant</b> <i class="v">b</i><sup>2</sup> − 4<i class="v">ac</i> tells you how many real roots there are:</p>
<ul><li>greater than 0: two distinct real roots;</li><li>equal to 0: one repeated root (the graph touches the axis);</li><li>less than 0: no real roots.</li></ul>
<p>Many exam questions say “has equal roots” or “does not meet the <i class="v">x</i>-axis”: write the discriminant condition and solve for the unknown constant.</p>`,
eq: [[`<i>x</i> = ${F('−<i>b</i> ± √(<i>b</i><sup>2</sup> − 4<i>ac</i>)', '2<i>a</i>')}`, `quadratic formula`], [`<i>x</i><sup>2</sup> + <i>bx</i> = (<i>x</i> + ${F('<i>b</i>', '2')})<sup>2</sup> − ${F('<i>b</i><sup>2</sup>', '4')}`, `completing the square`]],
ex: {q: `Find the value of <i>k</i> for which <i>kx</i><sup>2</sup> + 4<i>x</i> + 1 = 0 has equal roots.`,
s: [`Equal roots: <i>b</i><sup>2</sup> − 4<i>ac</i> = 0.`, `16 − 4<i>k</i> = 0.`],
a: `<i>k</i> = 4`},
quiz: [
 {q: `The minimum point of <i>y</i> = (<i>x</i> − 3)<sup>2</sup> + 2 is`, o: [`(3, 2)`, `(−3, 2)`, `(3, −2)`, `(2, 3)`], a: 0, why: `The square is zero at <i>x</i> = 3, leaving 2.`},
 {q: `<i>x</i><sup>2</sup> + 2<i>x</i> + 5 = 0 has`, o: [`two real roots`, `one repeated root`, `no real roots`, `three roots`], a: 2, why: `4 − 20 = −16 < 0.`}],
exam: {m: 4, q: `The equation <i>x</i><sup>2</sup> + (<i>k</i> − 3)<i>x</i> + 4 = 0 has no real roots. Find the range of values of <i>k</i>.`,
ms: [`(<i>k</i> − 3)<sup>2</sup> − 16 < 0 <span class="mk">[1]</span>`, `Critical values: <i>k</i> − 3 = ±4, so <i>k</i> = −1 or 7 <span class="mk">[1]</span>`, `Chooses the inside region <span class="mk">[1]</span>`, `−1 < <i>k</i> < 7 <span class="mk">[1]</span>`]}},

{id: 'simultaneous', u: P1, y: 12, p: PP, t: `Simultaneous equations and inequalities`,
body: `<p>For one linear and one quadratic equation, rearrange the linear one for <i class="v">x</i> or <i class="v">y</i> and <b>substitute</b> into the quadratic. You get up to two solution pairs, which are the intersection points of a line and a curve. If the resulting quadratic has discriminant less than 0, the line misses the curve.</p>
<p>For <b>quadratic inequalities</b>: find the critical values by solving the equation, sketch the parabola, then read off where it is above or below the axis. For <i class="v">x</i><sup>2</sup> − 5<i class="v">x</i> + 6 < 0 the parabola is below the axis between its roots.</p>
<p>Use set notation when asked: {<i class="v">x</i> : <i class="v">x</i> < 2} ∪ {<i class="v">x</i> : <i class="v">x</i> > 3}. When you multiply or divide an inequality by a negative number, reverse the sign.</p>`,
eq: [],
ex: {q: `Solve <i>y</i> = <i>x</i> + 1 and <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 simultaneously.`,
s: [`Substitute: <i>x</i><sup>2</sup> + (<i>x</i> + 1)<sup>2</sup> = 25.`, `2<i>x</i><sup>2</sup> + 2<i>x</i> − 24 = 0, so <i>x</i><sup>2</sup> + <i>x</i> − 12 = 0.`, `(<i>x</i> + 4)(<i>x</i> − 3) = 0, so <i>x</i> = 3 or −4.`, `Use <i>y</i> = <i>x</i> + 1 for each.`],
a: `(3, 4) and (−4, −3)`},
quiz: [
 {q: `Solve <i>x</i><sup>2</sup> − 5<i>x</i> + 6 < 0`, o: [`<i>x</i> < 2 or <i>x</i> > 3`, `2 < <i>x</i> < 3`, `<i>x</i> < 6`, `−3 < <i>x</i> < −2`], a: 1, why: `Roots 2 and 3; a ∪-shaped curve is negative between them.`},
 {q: `Solve −2<i>x</i> > 8`, o: [`<i>x</i> > −4`, `<i>x</i> < −4`, `<i>x</i> > 4`, `<i>x</i> < 4`], a: 1, why: `Dividing by −2 reverses the sign.`}],
exam: {m: 4, q: `Find the values of <i>k</i> for which the line <i>y</i> = <i>kx</i> − 1 is a tangent to the curve <i>y</i> = <i>x</i><sup>2</sup> + 3.`,
ms: [`<i>x</i><sup>2</sup> − <i>kx</i> + 4 = 0 <span class="mk">[1]</span>`, `Tangent so discriminant = 0: <i>k</i><sup>2</sup> − 16 = 0 <span class="mk">[1]</span>`, `<i>k</i> = 4 <span class="mk">[1]</span>`, `<i>k</i> = −4 <span class="mk">[1]</span>`]}},

{id: 'factor-theorem', u: P1, y: 12, p: PP, t: `Polynomials and the factor theorem`,
body: `<p>The <b>factor theorem</b>: if f(<i class="v">a</i>) = 0, then (<i class="v">x</i> − <i class="v">a</i>) is a factor of f(<i class="v">x</i>). More generally, (<i class="v">ax</i> − <i class="v">b</i>) is a factor if f(<i class="v">b</i>/<i class="v">a</i>) = 0.</p>
<p>To factorise a cubic: try small values (±1, ±2, ±3, factors of the constant term) until one gives zero. Then divide by that factor, using algebraic long division or by comparing coefficients, to get a quadratic, and factorise that.</p>
<p>When sketching a cubic, find where it crosses the axes and use the sign of the <i class="v">x</i><sup>3</sup> term for the overall shape. A repeated factor (<i class="v">x</i> − <i class="v">a</i>)<sup>2</sup> means the curve touches the axis at <i class="v">x</i> = <i class="v">a</i>.</p>`,
eq: [[`f(<i>a</i>) = 0 ⇔ (<i>x</i> − <i>a</i>) is a factor`, `factor theorem`]],
ex: {q: `Fully factorise f(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i><sup>2</sup> − 5<i>x</i> + 6.`,
s: [`f(1) = 1 − 2 − 5 + 6 = 0, so (<i>x</i> − 1) is a factor.`, `Divide: f(<i>x</i>) = (<i>x</i> − 1)(<i>x</i><sup>2</sup> − <i>x</i> − 6).`, `Factorise the quadratic: (<i>x</i> − 3)(<i>x</i> + 2).`],
a: `f(<i>x</i>) = (<i>x</i> − 1)(<i>x</i> − 3)(<i>x</i> + 2)`},
quiz: [
 {q: `f(<i>x</i>) = <i>x</i><sup>3</sup> + <i>px</i> − 4 has factor (<i>x</i> − 2). Find <i>p</i>.`, o: [`−2`, `2`, `4`, `−4`], a: 0, why: `8 + 2<i>p</i> − 4 = 0 gives <i>p</i> = −2.`},
 {q: `Which value shows (2<i>x</i> − 1) is a factor?`, o: [`f(1) = 0`, `f(2) = 0`, `f(½) = 0`, `f(−½) = 0`], a: 2, why: `2<i>x</i> − 1 = 0 when <i>x</i> = ½.`}],
exam: {m: 4, q: `Given (<i>x</i> + 3) is a factor of 2<i>x</i><sup>3</sup> + 5<i>x</i><sup>2</sup> − 4<i>x</i> − 3, factorise the expression fully.`,
ms: [`Divides by (<i>x</i> + 3) <span class="mk">[1]</span>`, `Quotient 2<i>x</i><sup>2</sup> − <i>x</i> − 1 <span class="mk">[1]</span>`, `Factorises to (2<i>x</i> + 1)(<i>x</i> − 1) <span class="mk">[1]</span>`, `(<i>x</i> + 3)(2<i>x</i> + 1)(<i>x</i> − 1) <span class="mk">[1]</span>`]}},

{id: 'transformations', u: P1, y: 12, p: PP, t: `Graphs and transformations`,
body: `<p>Know the shapes of <i class="v">y</i> = <i class="v">x</i><sup>2</sup>, <i class="v">x</i><sup>3</sup>, 1/<i class="v">x</i> and 1/<i class="v">x</i><sup>2</sup>, including their asymptotes. Proportion: <i class="v">y</i> ∝ <i class="v">x</i> is a straight line through the origin; <i class="v">y</i> ∝ 1/<i class="v">x</i> is a reciprocal curve.</p>
<p>Transformations of <i class="v">y</i> = f(<i class="v">x</i>):</p>
<ul><li>f(<i class="v">x</i>) + <i class="v">a</i>: up by <i class="v">a</i>.</li><li>f(<i class="v">x</i> + <i class="v">a</i>): left by <i class="v">a</i> (the opposite of what it looks like).</li><li><i class="v">a</i>f(<i class="v">x</i>): vertical stretch, scale factor <i class="v">a</i>.</li><li>f(<i class="v">ax</i>): horizontal stretch, scale factor 1/<i class="v">a</i>.</li><li>−f(<i class="v">x</i>): reflect in the <i class="v">x</i>-axis; f(−<i class="v">x</i>): reflect in the <i class="v">y</i>-axis.</li></ul>
<p>Changes inside the bracket act on <i class="v">x</i> and do the opposite; changes outside act on <i class="v">y</i> and do what you expect.</p>`,
eq: [],
ex: {q: `The point (3, 5) lies on <i>y</i> = f(<i>x</i>). Find its image on <i>y</i> = f(<i>x</i> − 1) + 2, on <i>y</i> = 3f(<i>x</i>) and on <i>y</i> = f(2<i>x</i>).`,
s: [`f(<i>x</i> − 1) + 2: right 1, up 2, giving (4, 7).`, `3f(<i>x</i>): <i>y</i>-values tripled, giving (3, 15).`, `f(2<i>x</i>): <i>x</i>-values halved, giving (1.5, 5).`],
a: `(4, 7), (3, 15) and (1.5, 5)`},
quiz: [
 {q: `<i>y</i> = f(<i>x</i> + 4) is a translation of`, o: [`4 right`, `4 left`, `4 up`, `4 down`], a: 1, why: `Inside the bracket: the opposite direction.`},
 {q: `The asymptotes of <i>y</i> = 1/<i>x</i> + 2 are`, o: [`<i>x</i> = 0, <i>y</i> = 2`, `<i>x</i> = 2, <i>y</i> = 0`, `<i>x</i> = −2, <i>y</i> = 0`, `<i>x</i> = 0, <i>y</i> = 0`], a: 0, why: `The curve is moved up 2.`}],
exam: {m: 3, q: `The curve <i>y</i> = f(<i>x</i>) has a maximum at (2, 6). State the coordinates of the maximum of (a) <i>y</i> = f(<i>x</i> + 2) (b) <i>y</i> = ½f(<i>x</i>) (c) <i>y</i> = f(−<i>x</i>).`,
ms: [`(0, 6) <span class="mk">[1]</span>`, `(2, 3) <span class="mk">[1]</span>`, `(−2, 6) <span class="mk">[1]</span>`]}},

{id: 'straight-lines', u: P1, y: 12, p: PP, t: `Straight-line graphs`,
body: `<p>The gradient between (<i class="v">x</i><sub>1</sub>, <i class="v">y</i><sub>1</sub>) and (<i class="v">x</i><sub>2</sub>, <i class="v">y</i><sub>2</sub>) is the change in <i class="v">y</i> over the change in <i class="v">x</i>. The equation of a line through a point with gradient <i class="v">m</i> is <i class="v">y</i> − <i class="v">y</i><sub>1</sub> = <i class="v">m</i>(<i class="v">x</i> − <i class="v">x</i><sub>1</sub>).</p>
<p><b>Parallel</b> lines have equal gradients. <b>Perpendicular</b> lines have gradients that multiply to −1, so the perpendicular gradient is the negative reciprocal.</p>
<p>The midpoint of two points is the mean of their coordinates; the distance between them comes from Pythagoras. Edexcel often asks for the answer in the form <i class="v">ax</i> + <i class="v">by</i> + <i class="v">c</i> = 0 with integers.</p>`,
eq: [[`<i>m</i> = ${F('<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>')}`, `gradient`], [`<i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)`, `line through a point`], [`<i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1`, `perpendicular lines`]],
ex: {q: `Find the equation of the line through (2, 3) and (6, 11).`,
s: [`Gradient = (11 − 3) / (6 − 2) = 2.`, `<i>y</i> − 3 = 2(<i>x</i> − 2).`, `<i>y</i> = 2<i>x</i> − 1.`],
a: `<i>y</i> = 2<i>x</i> − 1`},
quiz: [
 {q: `A line perpendicular to <i>y</i> = 4<i>x</i> + 1 has gradient`, o: [`4`, `−4`, `¼`, `−¼`], a: 3, why: `Negative reciprocal of 4.`},
 {q: `Distance from (1, 2) to (4, 6) is`, o: [`3`, `4`, `5`, `7`], a: 2, why: `√(3² + 4²) = 5.`}],
exam: {m: 4, q: `A is (−1, 4) and B is (5, 0). Find the perpendicular bisector of AB in the form <i>ax</i> + <i>by</i> + <i>c</i> = 0.`,
ms: [`Midpoint (2, 2) <span class="mk">[1]</span>`, `Gradient AB = −⅔ <span class="mk">[1]</span>`, `Perpendicular gradient 3/2; <i>y</i> − 2 = 3/2 (<i>x</i> − 2) <span class="mk">[1]</span>`, `3<i>x</i> − 2<i>y</i> − 2 = 0 <span class="mk">[1]</span>`]}},

{id: 'circles', u: P1, y: 12, p: PP, t: `Circles`,
body: `<p>A circle with centre (<i class="v">a</i>, <i class="v">b</i>) and radius <i class="v">r</i> has equation (<i class="v">x</i> − <i class="v">a</i>)<sup>2</sup> + (<i class="v">y</i> − <i class="v">b</i>)<sup>2</sup> = <i class="v">r</i><sup>2</sup>. If the equation is expanded, complete the square in <i class="v">x</i> and in <i class="v">y</i> to find the centre and radius.</p>
<p>Circle facts you will use:</p>
<ul><li>A tangent is perpendicular to the radius at the point of contact.</li><li>The perpendicular from the centre to a chord bisects the chord.</li><li>The angle in a semicircle is a right angle, so if a triangle in a circle has a right angle, the hypotenuse is a diameter.</li></ul>
<p>To find whether a line meets a circle, substitute and use the discriminant: two points, a tangent, or no intersection.</p>`,
eq: [[`(<i>x</i> − <i>a</i>)<sup>2</sup> + (<i>y</i> − <i>b</i>)<sup>2</sup> = <i>r</i><sup>2</sup>`, `centre (<i>a</i>, <i>b</i>), radius <i>r</i>`]],
ex: {q: `Find the centre and radius of <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 6<i>x</i> + 4<i>y</i> − 12 = 0, then the tangent at (6, 2).`,
s: [`Complete the square: (<i>x</i> − 3)<sup>2</sup> − 9 + (<i>y</i> + 2)<sup>2</sup> − 4 − 12 = 0.`, `(<i>x</i> − 3)<sup>2</sup> + (<i>y</i> + 2)<sup>2</sup> = 25: centre (3, −2), radius 5.`, `Radius gradient from (3, −2) to (6, 2) is 4/3, so the tangent gradient is −3/4.`, `<i>y</i> − 2 = −¾(<i>x</i> − 6), so 3<i>x</i> + 4<i>y</i> = 26.`],
a: `Centre (3, −2), radius 5, tangent 3<i>x</i> + 4<i>y</i> − 26 = 0`},
quiz: [
 {q: `The radius of (<i>x</i> + 1)<sup>2</sup> + (<i>y</i> − 4)<sup>2</sup> = 49 is`, o: [`49`, `7`, `√7`, `14`], a: 1, why: `<i>r</i><sup>2</sup> = 49.`},
 {q: `The centre of <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 8<i>x</i> − 2<i>y</i> = 0 is`, o: [`(8, −2)`, `(−4, 1)`, `(4, −1)`, `(−8, 2)`], a: 1, why: `Halve the coefficients and change sign.`}],
exam: {m: 4, q: `Show that the line <i>y</i> = <i>x</i> + 6 does not meet the circle <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 16.`,
ms: [`Substitutes: <i>x</i><sup>2</sup> + (<i>x</i> + 6)<sup>2</sup> = 16 <span class="mk">[1]</span>`, `2<i>x</i><sup>2</sup> + 12<i>x</i> + 20 = 0 <span class="mk">[1]</span>`, `Discriminant 144 − 160 = −16 <span class="mk">[1]</span>`, `Negative, so no real roots and no intersection <span class="mk">[1]</span>`]}},

{id: 'binomial-expansion', u: P1, y: 12, p: PP, t: `Binomial expansion`,
body: `<p>For a positive whole number <i class="v">n</i>, (<i class="v">a</i> + <i class="v">b</i>)<sup><i>n</i></sup> expands into <i class="v">n</i> + 1 terms. The coefficients come from Pascal's triangle or from <sup><i>n</i></sup>C<sub><i>r</i></sub>.</p>
<p>The general term is <sup><i>n</i></sup>C<sub><i>r</i></sub> <i class="v">a</i><sup><i>n</i>−<i>r</i></sup><i class="v">b</i><sup><i>r</i></sup>. Use it to find one coefficient without expanding everything.</p>
<p>Put brackets around each term, especially negative or multiplied ones: in (1 − 2<i class="v">x</i>)<sup>6</sup>, <i class="v">b</i> = (−2<i class="v">x</i>), so the <i class="v">x</i><sup>3</sup> term has (−2)<sup>3</sup> = −8. Expansions are used to estimate values, for example 1.02<sup>5</sup> from (1 + <i class="v">x</i>)<sup>5</sup> with <i class="v">x</i> = 0.02.</p>`,
eq: [[`(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup> + <sup><i>n</i></sup>C<sub>1</sub><i>a</i><sup><i>n</i>−1</sup><i>b</i> + <sup><i>n</i></sup>C<sub>2</sub><i>a</i><sup><i>n</i>−2</sup><i>b</i><sup>2</sup> + …`, `binomial expansion`], [`<sup><i>n</i></sup>C<sub><i>r</i></sub> = ${F('<i>n</i>!', '<i>r</i>!(<i>n</i> − <i>r</i>)!')}`, `choose function`]],
ex: {q: `Find the first three terms of (2 + <i>x</i>)<sup>5</sup> in ascending powers of <i>x</i>.`,
s: [`First term: 2<sup>5</sup> = 32.`, `Second: <sup>5</sup>C<sub>1</sub> × 2<sup>4</sup> × <i>x</i> = 5 × 16<i>x</i> = 80<i>x</i>.`, `Third: <sup>5</sup>C<sub>2</sub> × 2<sup>3</sup> × <i>x</i><sup>2</sup> = 10 × 8<i>x</i><sup>2</sup> = 80<i>x</i><sup>2</sup>.`],
a: `32 + 80<i>x</i> + 80<i>x</i><sup>2</sup>`},
quiz: [
 {q: `The coefficient of <i>x</i><sup>3</sup> in (1 − 2<i>x</i>)<sup>6</sup> is`, o: [`160`, `−160`, `20`, `−120`], a: 1, why: `<sup>6</sup>C<sub>3</sub>(−2)<sup>3</sup> = 20 × −8.`},
 {q: `<sup>7</sup>C<sub>2</sub> = `, o: [`14`, `21`, `42`, `35`], a: 1, why: `7 × 6 / 2 = 21.`}],
exam: {m: 4, q: `In the expansion of (1 + <i>kx</i>)<sup>8</sup> the coefficient of <i>x</i><sup>2</sup> is 7 times the coefficient of <i>x</i>. Find <i>k</i>.`,
ms: [`Coefficient of <i>x</i>: 8<i>k</i> <span class="mk">[1]</span>`, `Coefficient of <i>x</i><sup>2</sup>: 28<i>k</i><sup>2</sup> <span class="mk">[1]</span>`, `28<i>k</i><sup>2</sup> = 56<i>k</i> <span class="mk">[1]</span>`, `<i>k</i> = 2 <span class="mk">[1]</span>`]}},

{id: 'trig-rules', u: P1, y: 12, p: PP, t: `Sine rule, cosine rule and trig graphs`,
body: `<p>In any triangle, use the <b>sine rule</b> when you know an angle and its opposite side. Use the <b>cosine rule</b> for two sides and the included angle, or for all three sides.</p>
<p>The sine rule can give an <b>ambiguous case</b>: if you find an angle from its sine, both θ and 180° − θ may fit. Check whether both give a valid triangle.</p>
<p>Know the graphs of sin, cos and tan: sin and cos have period 360° and range −1 to 1; tan has period 180° and asymptotes at 90°, 270°. Exact values for 30°, 45° and 60° come from the half-equilateral and half-square triangles.</p>`,
eq: [[`${F('<i>a</i>', 'sin <i>A</i>')} = ${F('<i>b</i>', 'sin <i>B</i>')}`, `sine rule`], [`<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i>`, `cosine rule`], [`Area = ½<i>ab</i> sin <i>C</i>`, `area of a triangle`]],
ex: {q: `In triangle ABC, <i>a</i> = 7 cm, <i>b</i> = 8 cm and angle <i>C</i> = 60°. Find <i>c</i> and the area.`,
s: [`<i>c</i><sup>2</sup> = 49 + 64 − 2 × 7 × 8 × cos 60° = 113 − 56 = 57.`, `<i>c</i> = √57 = 7.55 cm.`, `Area = ½ × 7 × 8 × sin 60° = 28 × 0.866.`],
a: `<i>c</i> = 7.55 cm, area = 24.2 cm<sup>2</sup>`},
quiz: [
 {q: `sin 30° = `, o: [`½`, `√3/2`, `1/√2`, `1`], a: 0, why: `Exact value from the half-equilateral triangle.`},
 {q: `The period of <i>y</i> = tan <i>x</i> is`, o: [`90°`, `180°`, `360°`, `720°`], a: 1, why: `tan repeats every 180°.`}],
exam: {m: 3, q: `A triangle has sides 5 cm, 6 cm and 9 cm. Find its largest angle.`,
ms: [`Largest angle opposite 9 cm <span class="mk">[1]</span>`, `cos θ = (25 + 36 − 81) / (2 × 5 × 6) = −⅓ <span class="mk">[1]</span>`, `θ = 109.5° <span class="mk">[1]</span>`]}},

{id: 'trig-equations', u: P1, y: 12, p: PP, t: `Trigonometric identities and equations`,
body: `<p>Two identities to know: tan θ = sin θ / cos θ and sin<sup>2</sup> θ + cos<sup>2</sup> θ = 1.</p>
<p>To solve an equation in a given range:</p>
<ul><li>Rearrange to sin θ = <i class="v">k</i>, cos θ = <i class="v">k</i> or tan θ = <i class="v">k</i>.</li><li>Find the principal value with your calculator.</li><li>Use the graph or CAST diagram for the other solutions in the range.</li></ul>
<p>Quadratics in sin or cos: replace cos<sup>2</sup> θ with 1 − sin<sup>2</sup> θ (or the other way) so there is only one function, then factorise. For sin 2θ = <i class="v">k</i>, first double the range, solve, then halve all the answers. Never divide both sides by sin θ or cos θ, as you would lose solutions.</p>`,
eq: [[`tan θ = ${F('sin θ', 'cos θ')}`, `identity`], [`sin<sup>2</sup> θ + cos<sup>2</sup> θ = 1`, `identity`]],
ex: {q: `Solve 2 sin<sup>2</sup> <i>x</i> + sin <i>x</i> − 1 = 0 for 0° ≤ <i>x</i> < 360°.`,
s: [`Factorise: (2 sin <i>x</i> − 1)(sin <i>x</i> + 1) = 0.`, `sin <i>x</i> = ½ gives <i>x</i> = 30° and 150°.`, `sin <i>x</i> = −1 gives <i>x</i> = 270°.`],
a: `<i>x</i> = 30°, 150°, 270°`},
quiz: [
 {q: `If cos θ = 0.5 for 0° ≤ θ < 360°, θ = `, o: [`60° only`, `60° and 120°`, `60° and 300°`, `30° and 330°`], a: 2, why: `cos is positive in the first and fourth quadrants.`},
 {q: `To solve tan 2θ = 1 for 0° ≤ θ < 360°, first solve for 2θ in`, o: [`0° to 180°`, `0° to 360°`, `0° to 720°`, `0° to 90°`], a: 2, why: `Double the range for 2θ.`}],
exam: {m: 5, q: `Solve 3 cos<sup>2</sup> θ = 2 + sin θ for 0° ≤ θ < 360°.`,
ms: [`Uses cos<sup>2</sup> θ = 1 − sin<sup>2</sup> θ: 3 − 3sin<sup>2</sup> θ = 2 + sin θ <span class="mk">[1]</span>`, `3 sin<sup>2</sup> θ + sin θ − 1 = 0 <span class="mk">[1]</span>`, `sin θ = (−1 ± √13) / 6, so 0.434 or −0.768 <span class="mk">[1]</span>`, `θ = 25.7°, 154.3° <span class="mk">[1]</span>`, `θ = 230.1°, 309.9° <span class="mk">[1]</span>`]}},

{id: 'vectors-2d', u: P1, y: 12, p: PP, t: `Vectors in two dimensions`,
body: `<p>A vector can be written in <b>i</b>, <b>j</b> form (<b>i</b> is one unit right, <b>j</b> one unit up) or as a column. Add and subtract component by component; multiplying by a scalar scales every component.</p>
<p>The <b>magnitude</b> |<i class="v">x</i><b>i</b> + <i class="v">y</i><b>j</b>| = √(<i class="v">x</i><sup>2</sup> + <i class="v">y</i><sup>2</sup>), and the direction is the angle tan<sup>−1</sup>(<i class="v">y</i>/<i class="v">x</i>) from <b>i</b>, adjusted for the quadrant. A <b>unit vector</b> is the vector divided by its magnitude.</p>
<p>The position vector of a point A is <b>OA</b>. The vector from A to B is <b>AB</b> = <b>OB</b> − <b>OA</b>. Two vectors are parallel if one is a scalar multiple of the other. In geometry proofs, write every vector in terms of two base vectors and compare.</p>`,
eq: [[`|<i>x</i><b>i</b> + <i>y</i><b>j</b>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)`, `magnitude`], [`<b>AB</b> = <b>b</b> − <b>a</b>`, `vector between points`], [`<b>â</b> = ${F('<b>a</b>', '|<b>a</b>|')}`, `unit vector`]],
ex: {q: `A is (1, 2) and B is (7, 10). Find <b>AB</b>, its magnitude and a unit vector in its direction.`,
s: [`<b>AB</b> = (7 − 1)<b>i</b> + (10 − 2)<b>j</b> = 6<b>i</b> + 8<b>j</b>.`, `|<b>AB</b>| = √(36 + 64) = 10.`, `Unit vector = (6<b>i</b> + 8<b>j</b>) / 10.`],
a: `6<b>i</b> + 8<b>j</b>, magnitude 10, unit vector 0.6<b>i</b> + 0.8<b>j</b>`},
quiz: [
 {q: `|3<b>i</b> − 4<b>j</b>| = `, o: [`1`, `5`, `7`, `25`], a: 1, why: `√(9 + 16) = 5.`},
 {q: `Which is parallel to 2<b>i</b> − 3<b>j</b>?`, o: [`3<b>i</b> − 2<b>j</b>`, `−4<b>i</b> + 6<b>j</b>`, `2<b>i</b> + 3<b>j</b>`, `6<b>i</b> + 9<b>j</b>`], a: 1, why: `−4<b>i</b> + 6<b>j</b> = −2(2<b>i</b> − 3<b>j</b>).`}],
exam: {m: 3, q: `Find the angle that 5<b>i</b> − 12<b>j</b> makes with the positive <b>i</b> direction, and its magnitude.`,
ms: [`Magnitude √(25 + 144) = 13 <span class="mk">[1]</span>`, `tan<sup>−1</sup>(12/5) = 67.4° <span class="mk">[1]</span>`, `67.4° below the <b>i</b> direction (or 292.6°) <span class="mk">[1]</span>`]}},

{id: 'differentiation', u: P1, y: 12, p: PP, t: `Differentiation from first principles and the power rule`,
body: `<p>The derivative d<i class="v">y</i>/d<i class="v">x</i> is the gradient of the curve at each point. From <b>first principles</b>, take a chord from <i class="v">x</i> to <i class="v">x</i> + <i class="v">h</i> and let <i class="v">h</i> tend to 0.</p>
<p>The <b>power rule</b>: multiply by the power, then reduce the power by 1. Rewrite roots and fractions as powers first: √<i class="v">x</i> = <i class="v">x</i><sup>½</sup>, 1/<i class="v">x</i><sup>2</sup> = <i class="v">x</i><sup>−2</sup>.</p>
<p>The derivative is itself a function. Where it is positive the function is increasing; where negative, decreasing. Differentiate again to get the second derivative, d<sup>2</sup><i class="v">y</i>/d<i class="v">x</i><sup>2</sup>, which measures how the gradient changes.</p>`,
eq: [[`f′(<i>x</i>) = lim<sub><i>h</i>→0</sub> ${F('f(<i>x</i> + <i>h</i>) − f(<i>x</i>)', '<i>h</i>')}`, `first principles`], [`${F('d', 'd<i>x</i>')}(<i>x</i><sup><i>n</i></sup>) = <i>nx</i><sup><i>n</i>−1</sup>`, `power rule`]],
ex: {q: `Differentiate <i>y</i> = 3<i>x</i><sup>4</sup> − 2√<i>x</i> + 5/<i>x</i>.`,
s: [`Rewrite: <i>y</i> = 3<i>x</i><sup>4</sup> − 2<i>x</i><sup>½</sup> + 5<i>x</i><sup>−1</sup>.`, `Differentiate each term: 12<i>x</i><sup>3</sup> − <i>x</i><sup>−½</sup> − 5<i>x</i><sup>−2</sup>.`],
a: `d<i>y</i>/d<i>x</i> = 12<i>x</i><sup>3</sup> − ${F('1', '√<i>x</i>')} − ${F('5', '<i>x</i><sup>2</sup>')}`},
quiz: [
 {q: `The derivative of <i>x</i><sup>−3</sup> is`, o: [`−3<i>x</i><sup>−2</sup>`, `−3<i>x</i><sup>−4</sup>`, `3<i>x</i><sup>−4</sup>`, `−2<i>x</i><sup>−3</sup>`], a: 1, why: `Power −3 comes down; new power −4.`},
 {q: `The gradient of <i>y</i> = <i>x</i><sup>2</sup> − 4<i>x</i> at <i>x</i> = 5 is`, o: [`5`, `6`, `10`, `−6`], a: 1, why: `2<i>x</i> − 4 = 6.`}],
exam: {m: 4, q: `Prove from first principles that the derivative of <i>x</i><sup>2</sup> is 2<i>x</i>.`,
ms: [`Gradient of chord: ((<i>x</i> + <i>h</i>)<sup>2</sup> − <i>x</i><sup>2</sup>) / <i>h</i> <span class="mk">[1]</span>`, `Expands to (2<i>xh</i> + <i>h</i><sup>2</sup>) / <i>h</i> <span class="mk">[1]</span>`, `Simplifies to 2<i>x</i> + <i>h</i> <span class="mk">[1]</span>`, `As <i>h</i> → 0, gradient → 2<i>x</i> <span class="mk">[1]</span>`]}},

{id: 'stationary-points', u: P1, y: 12, p: PP, t: `Tangents, normals and stationary points`,
body: `<p>The <b>tangent</b> at a point has the gradient of the curve there. The <b>normal</b> is perpendicular to the tangent, with gradient −1 ÷ (tangent gradient). Use <i class="v">y</i> − <i class="v">y</i><sub>1</sub> = <i class="v">m</i>(<i class="v">x</i> − <i class="v">x</i><sub>1</sub>) for both.</p>
<p><b>Stationary points</b> are where d<i class="v">y</i>/d<i class="v">x</i> = 0. To classify them, find the second derivative:</p>
<ul><li>d<sup>2</sup><i class="v">y</i>/d<i class="v">x</i><sup>2</sup> > 0: minimum.</li><li>d<sup>2</sup><i class="v">y</i>/d<i class="v">x</i><sup>2</sup> < 0: maximum.</li><li>= 0: check the gradient either side.</li></ul>
<p>In optimisation problems, write the quantity in terms of one variable, differentiate, set to zero, and check that it is a maximum or minimum.</p>`,
eq: [[`${F('d<i>y</i>', 'd<i>x</i>')} = 0`, `stationary point`], [`<i>m</i><sub>normal</sub> = −${F('1', '<i>m</i><sub>tangent</sub>')}`, `normal gradient`]],
ex: {q: `Find and classify the stationary points of <i>y</i> = <i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 9<i>x</i> + 2.`,
s: [`d<i>y</i>/d<i>x</i> = 3<i>x</i><sup>2</sup> − 6<i>x</i> − 9 = 3(<i>x</i> − 3)(<i>x</i> + 1) = 0, so <i>x</i> = 3 or −1.`, `<i>y</i>(3) = −25 and <i>y</i>(−1) = 7.`, `d<sup>2</sup><i>y</i>/d<i>x</i><sup>2</sup> = 6<i>x</i> − 6: at <i>x</i> = 3 it is 12, at <i>x</i> = −1 it is −12.`],
a: `Minimum (3, −25), maximum (−1, 7)`},
quiz: [
 {q: `At a maximum, the second derivative is`, o: [`positive`, `negative`, `always zero`, `undefined`], a: 1, why: `The gradient is decreasing through zero.`},
 {q: `The gradient of the normal where the tangent has gradient 2 is`, o: [`2`, `−2`, `½`, `−½`], a: 3, why: `Negative reciprocal.`}],
exam: {m: 5, q: `An open box has a square base of side <i>x</i> cm and volume 500 cm<sup>3</sup>. Show its surface area is <i>A</i> = <i>x</i><sup>2</sup> + 2000/<i>x</i>, and find the minimum area.`,
ms: [`Height <i>h</i> = 500/<i>x</i><sup>2</sup>; <i>A</i> = <i>x</i><sup>2</sup> + 4<i>xh</i> = <i>x</i><sup>2</sup> + 2000/<i>x</i> <span class="mk">[1]</span>`, `d<i>A</i>/d<i>x</i> = 2<i>x</i> − 2000/<i>x</i><sup>2</sup> <span class="mk">[1]</span>`, `Sets to 0: <i>x</i><sup>3</sup> = 1000, <i>x</i> = 10 <span class="mk">[1]</span>`, `<i>A</i> = 100 + 200 = 300 cm<sup>2</sup> <span class="mk">[1]</span>`, `Second derivative 2 + 4000/<i>x</i><sup>3</sup> > 0, so minimum <span class="mk">[1]</span>`]}},

{id: 'integration', u: P1, y: 12, p: PP, t: `Integration and areas under curves`,
body: `<p>Integration reverses differentiation. Add 1 to the power, then divide by the new power. Indefinite integrals need a <b>+ <i>c</i></b>. If you are given a point on the curve, substitute it to find <i class="v">c</i>.</p>
<p>A <b>definite integral</b> between limits <i class="v">a</i> and <i class="v">b</i> gives the area between the curve and the <i class="v">x</i>-axis. Area below the axis comes out negative: find where the curve crosses the axis and integrate each part separately, then add the sizes.</p>
<p>For the area between a line and a curve, integrate (top − bottom) between the intersection points.</p>`,
eq: [[`∫<i>x</i><sup><i>n</i></sup> d<i>x</i> = ${F('<i>x</i><sup><i>n</i>+1</sup>', '<i>n</i> + 1')} + <i>c</i>`, `<i>n</i> ≠ −1`], [`∫<sub><i>a</i></sub><sup><i>b</i></sup> f(<i>x</i>) d<i>x</i> = F(<i>b</i>) − F(<i>a</i>)`, `definite integral`]],
ex: {q: `Find the area enclosed by <i>y</i> = 4<i>x</i> − <i>x</i><sup>2</sup> and the <i>x</i>-axis.`,
s: [`Roots: <i>x</i>(4 − <i>x</i>) = 0, so <i>x</i> = 0 and 4.`, `∫<sub>0</sub><sup>4</sup> (4<i>x</i> − <i>x</i><sup>2</sup>) d<i>x</i> = [2<i>x</i><sup>2</sup> − <i>x</i><sup>3</sup>/3]<sub>0</sub><sup>4</sup>.`, `= 32 − 64/3 = 32/3.`],
a: `Area = 32/3 ≈ 10.7 square units`},
quiz: [
 {q: `∫(3<i>x</i><sup>2</sup> + 4<i>x</i>) d<i>x</i> = `, o: [`6<i>x</i> + 4 + <i>c</i>`, `<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> + <i>c</i>`, `<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup> + <i>c</i>`, `3<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> + <i>c</i>`], a: 1, why: `Raise each power by one and divide.`},
 {q: `∫<sub>1</sub><sup>3</sup> <i>x</i><sup>2</sup> d<i>x</i> = `, o: [`8`, `26/3`, `9`, `27`], a: 1, why: `27/3 − 1/3 = 26/3.`}],
exam: {m: 4, q: `The curve <i>y</i> = f(<i>x</i>) passes through (1, 4) and f′(<i>x</i>) = 6<i>x</i><sup>2</sup> − 2/<i>x</i><sup>2</sup>. Find f(<i>x</i>).`,
ms: [`Integrates: 2<i>x</i><sup>3</sup> <span class="mk">[1]</span>`, `+ 2<i>x</i><sup>−1</sup> <span class="mk">[1]</span>`, `Substitutes (1, 4): 4 = 2 + 2 + <i>c</i> <span class="mk">[1]</span>`, `f(<i>x</i>) = 2<i>x</i><sup>3</sup> + 2/<i>x</i>, <i>c</i> = 0 <span class="mk">[1]</span>`]}},

{id: 'exp-log', u: P1, y: 12, p: PP, t: `Exponentials and logarithms`,
body: `<p>An exponential function <i class="v">y</i> = <i class="v">a</i><sup><i>x</i></sup> grows (or decays if 0 < <i class="v">a</i> < 1) and passes through (0, 1). The special base e ≈ 2.718 has the property that the gradient of e<sup><i>x</i></sup> equals e<sup><i>x</i></sup>, and d/d<i class="v">x</i>(e<sup><i>kx</i></sup>) = <i class="v">k</i>e<sup><i>kx</i></sup>.</p>
<p>log<sub><i>a</i></sub> <i class="v">b</i> = <i class="v">c</i> means <i class="v">a</i><sup><i>c</i></sup> = <i class="v">b</i>. The natural log ln is log base e, the inverse of e<sup><i>x</i></sup>.</p>
<p>To solve <i class="v">a</i><sup><i>x</i></sup> = <i class="v">b</i>, take logs of both sides. In <b>modelling</b>, data fitting <i class="v">y</i> = <i class="v">ab</i><sup><i>x</i></sup> becomes a straight line when you plot log <i class="v">y</i> against <i class="v">x</i>, and <i class="v">y</i> = <i class="v">ax</i><sup><i>n</i></sup> when you plot log <i class="v">y</i> against log <i class="v">x</i>.</p>`,
eq: [[`log <i>a</i> + log <i>b</i> = log <i>ab</i>`, `multiply`], [`log <i>a</i> − log <i>b</i> = log ${F('<i>a</i>', '<i>b</i>')}`, `divide`], [`log <i>a</i><sup><i>n</i></sup> = <i>n</i> log <i>a</i>`, `power`], [`<i>y</i> = <i>ab</i><sup><i>x</i></sup> ⇒ log <i>y</i> = log <i>a</i> + <i>x</i> log <i>b</i>`, `linear form`]],
ex: {q: `Solve 3<sup><i>x</i></sup> = 20, giving your answer to 3 significant figures.`,
s: [`Take natural logs: <i>x</i> ln 3 = ln 20.`, `<i>x</i> = ln 20 / ln 3 = 2.996 / 1.099.`],
a: `<i>x</i> = 2.73`},
quiz: [
 {q: `log<sub>2</sub> 32 = `, o: [`4`, `5`, `16`, `6`], a: 1, why: `2<sup>5</sup> = 32.`},
 {q: `If ln <i>y</i> = 3, then <i>y</i> = `, o: [`3e`, `e<sup>3</sup>`, `ln 3`, `30`], a: 1, why: `ln is the inverse of e<sup><i>x</i></sup>.`},
 {q: `A plot of log <i>y</i> against log <i>x</i> is a straight line. The model is`, o: [`<i>y</i> = <i>ab</i><sup><i>x</i></sup>`, `<i>y</i> = <i>ax</i><sup><i>n</i></sup>`, `<i>y</i> = <i>mx</i> + <i>c</i>`, `<i>y</i> = e<sup><i>x</i></sup>`], a: 1, why: `log <i>y</i> = log <i>a</i> + <i>n</i> log <i>x</i>.`}],
exam: {m: 4, q: `Solve log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> − 2) = 3.`,
ms: [`Combines: log<sub>2</sub>(<i>x</i>(<i>x</i> − 2)) = 3 <span class="mk">[1]</span>`, `<i>x</i><sup>2</sup> − 2<i>x</i> = 8 <span class="mk">[1]</span>`, `(<i>x</i> − 4)(<i>x</i> + 2) = 0 <span class="mk">[1]</span>`, `<i>x</i> = 4 only, since log of a negative is undefined <span class="mk">[1]</span>`]}},

{id: 'sampling', u: S1, y: 12, p: P3, t: `Sampling methods and the large data set`,
body: `<p>A <b>census</b> measures every member of the population; a <b>sample</b> measures some. Samples are cheaper and quicker but may not represent the population.</p>
<ul><li><b>Simple random:</b> every sample of size <i class="v">n</i> equally likely; needs a sampling frame.</li><li><b>Systematic:</b> every <i class="v">k</i>th item from an ordered list after a random start.</li><li><b>Stratified:</b> sample each group in proportion to its size.</li><li><b>Quota:</b> fill quotas for each group; no sampling frame needed but not random.</li><li><b>Opportunity:</b> whoever is available; easy but likely biased.</li></ul>
<p>Edexcel’s <b>large data set</b> has been UK and world weather data from 1987 and 2015 (check which edition your exam uses) (temperature, rainfall, sunshine, wind, humidity, cloud). Know its stations, units and quirks, such as “tr” meaning trace rainfall of less than 0.05 mm.</p>`,
eq: [[`stratum sample = ${F('stratum size', 'population size')} × sample size`, `stratified sampling`]],
ex: {q: `A school has 400 Year 12 and 600 Year 13 students. Take a stratified sample of 50.`,
s: [`Year 12: 400/1000 × 50 = 20.`, `Year 13: 600/1000 × 50 = 30.`, `Then choose randomly within each year group.`],
a: `20 from Year 12 and 30 from Year 13`},
quiz: [
 {q: `Which method needs no sampling frame?`, o: [`simple random`, `systematic`, `stratified`, `quota`], a: 3, why: `The interviewer picks people to fill quotas.`},
 {q: `Interviewing shoppers outside one shop at 10 am is`, o: [`systematic`, `opportunity`, `stratified`, `random`], a: 1, why: `It uses whoever is there.`}],
exam: {m: 3, q: `Explain one advantage and one disadvantage of systematic sampling, and describe how to take a systematic sample of 20 from a list of 500.`,
ms: [`Advantage: simple to use, or suitable for large populations <span class="mk">[1]</span>`, `Disadvantage: needs a sampling frame, or can be biased if the list has a pattern <span class="mk">[1]</span>`, `Every 25th item after a random start between 1 and 25 <span class="mk">[1]</span>`]}},

{id: 'data', u: S1, y: 12, p: P3, t: `Data presentation, location and spread`,
body: `<p>Measures of location: mean, median and mode. Measures of spread: range, interquartile range (IQR = Q<sub>3</sub> − Q<sub>1</sub>) and standard deviation.</p>
<p>For grouped data, estimate the mean with midpoints and the median by <b>linear interpolation</b> within the median class.</p>
<p>An <b>outlier</b> is commonly any value more than 1.5 × IQR below Q<sub>1</sub> or above Q<sub>3</sub>. Box plots show the five-number summary and mark outliers with crosses.</p>
<p>In a <b>histogram</b>, area is proportional to frequency: frequency density = frequency ÷ class width. Cumulative frequency graphs let you read the median and quartiles directly.</p>`,
eq: [[`<i>x̄</i> = ${F('Σ<i>x</i>', '<i>n</i>')}`, `mean`], [`σ<sup>2</sup> = ${F('Σ<i>x</i><sup>2</sup>', '<i>n</i>')} − <i>x̄</i><sup>2</sup>`, `variance`], [`frequency density = ${F('frequency', 'class width')}`, `histograms`]],
ex: {q: `Find the mean and standard deviation of 4, 7, 7, 9, 13.`,
s: [`Mean = 40/5 = 8.`, `Σ<i>x</i><sup>2</sup> = 16 + 49 + 49 + 81 + 169 = 364.`, `Variance = 364/5 − 64 = 8.8.`, `Standard deviation = √8.8.`],
a: `Mean 8, standard deviation 2.97`},
quiz: [
 {q: `Q<sub>1</sub> = 20, Q<sub>3</sub> = 30. The upper outlier limit is`, o: [`35`, `40`, `45`, `50`], a: 2, why: `30 + 1.5 × 10 = 45.`},
 {q: `In a histogram, frequency is shown by`, o: [`height`, `area`, `width`, `colour`], a: 1, why: `Area is proportional to frequency.`}],
exam: {m: 3, q: `A class 10 ≤ <i>t</i> < 20 has frequency 18 and the median is the 25th value. There are 15 values below 10. Estimate the median by interpolation.`,
ms: [`Median is 10 values into the class <span class="mk">[1]</span>`, `10 + (10/18) × 10 <span class="mk">[1]</span>`, `15.6 <span class="mk">[1]</span>`]}},

{id: 'correlation', u: S1, y: 12, p: P3, t: `Correlation and regression`,
body: `<p>A scatter diagram shows whether two variables are related. <b>Correlation</b> describes the strength and direction of a linear relationship. Correlation does not mean causation: a third factor may drive both.</p>
<p>The <b>regression line</b> of <i class="v">y</i> on <i class="v">x</i>, <i class="v">y</i> = <i class="v">a</i> + <i class="v">bx</i>, predicts the dependent variable <i class="v">y</i> from the independent variable <i class="v">x</i>. Interpret <i class="v">b</i> in context: “for every extra unit of <i class="v">x</i>, <i class="v">y</i> increases by <i class="v">b</i>.”</p>
<p><b>Interpolation</b> (within the range of the data) is reliable. <b>Extrapolation</b> (outside the range) is not, because the pattern may not continue.</p>`,
eq: [[`<i>y</i> = <i>a</i> + <i>bx</i>`, `regression line of <i>y</i> on <i>x</i>`]],
ex: {q: `The regression line for revision hours <i>x</i> (between 5 and 50) and test score <i>y</i> is <i>y</i> = 12.5 + 0.8<i>x</i>. Predict the score for 40 hours and interpret 0.8.`,
s: [`<i>y</i> = 12.5 + 0.8 × 40 = 44.5.`, `40 is inside the data range, so this is interpolation and reliable.`, `0.8: each extra hour of revision adds about 0.8 marks.`],
a: `About 44.5 marks`},
quiz: [
 {q: `Predicting <i>y</i> for <i>x</i> = 100 when data run from 5 to 50 is`, o: [`interpolation`, `extrapolation`, `regression`, `correlation`], a: 1, why: `It lies outside the data.`},
 {q: `Strong positive correlation between ice-cream sales and sunburn shows`, o: [`ice cream causes sunburn`, `a likely common cause: hot weather`, `no link`, `negative correlation`], a: 1, why: `Correlation is not causation.`}],
exam: {m: 2, q: `Explain why a regression line of <i>y</i> on <i>x</i> should not be used to predict <i>x</i> from <i>y</i>.`,
ms: [`The line minimises errors in <i>y</i>, treating <i>x</i> as the independent variable <span class="mk">[1]</span>`, `To predict <i>x</i>, a regression line of <i>x</i> on <i>y</i> is needed <span class="mk">[1]</span>`]}},

{id: 'probability', u: S1, y: 12, p: P3, t: `Probability, Venn diagrams and tree diagrams`,
body: `<p><b>Mutually exclusive</b> events cannot happen together: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).</p>
<p><b>Independent</b> events do not affect each other: P(A ∩ B) = P(A) × P(B). To test for independence, check whether this equation holds.</p>
<p>In general, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Venn diagrams help: fill in the intersection first, then the rest of each circle, then the outside.</p>
<p>Tree diagrams show events in sequence. Multiply along the branches, add between the outcomes you want. Probabilities on branches from one point add to 1.</p>`,
eq: [[`P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`, `addition rule`], [`P(A ∩ B) = P(A) × P(B)`, `independent events`]],
ex: {q: `P(A) = 0.4, P(B) = 0.5 and P(A ∪ B) = 0.7. Are A and B independent?`,
s: [`P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2.`, `P(A) × P(B) = 0.4 × 0.5 = 0.2.`, `They are equal.`],
a: `Yes, A and B are independent.`},
quiz: [
 {q: `If A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.45, P(A ∪ B) = `, o: [`0.135`, `0.75`, `0.15`, `0.6`], a: 1, why: `Add them.`},
 {q: `Two fair dice: P(two sixes) = `, o: [`1/6`, `1/12`, `1/36`, `2/6`], a: 2, why: `1/6 × 1/6.`}],
exam: {m: 3, q: `A bag has 5 red and 3 blue counters. Two are taken without replacement. Find the probability they are different colours.`,
ms: [`P(RB) = 5/8 × 3/7 = 15/56 <span class="mk">[1]</span>`, `P(BR) = 3/8 × 5/7 = 15/56 <span class="mk">[1]</span>`, `Total 30/56 = 15/28 <span class="mk">[1]</span>`]}},

{id: 'binomial', u: S1, y: 12, p: P3, t: `The binomial distribution`,
body: `<p>A random variable <i class="v">X</i> ~ B(<i class="v">n</i>, <i class="v">p</i>) counts successes in <i class="v">n</i> trials when:</p>
<ul><li>there is a fixed number of trials;</li><li>each trial has two outcomes, success or failure;</li><li>the probability of success <i class="v">p</i> is the same each time;</li><li>trials are independent.</li></ul>
<p>Use the formula for an exact probability, and your calculator's cumulative function for P(<i class="v">X</i> ≤ <i class="v">x</i>). Translate words carefully: “at least 3” is P(<i class="v">X</i> ≥ 3) = 1 − P(<i class="v">X</i> ≤ 2); “more than 3” is 1 − P(<i class="v">X</i> ≤ 3).</p>`,
eq: [[`P(<i>X</i> = <i>r</i>) = <sup><i>n</i></sup>C<sub><i>r</i></sub><i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup>`, `binomial probability`]],
ex: {q: `<i>X</i> ~ B(10, 0.3). Find P(<i>X</i> = 2) and P(<i>X</i> ≥ 3).`,
s: [`P(<i>X</i> = 2) = <sup>10</sup>C<sub>2</sub> × 0.3<sup>2</sup> × 0.7<sup>8</sup> = 45 × 0.09 × 0.0576 = 0.2335.`, `P(<i>X</i> ≤ 2) = 0.3828 from the calculator.`, `P(<i>X</i> ≥ 3) = 1 − 0.3828.`],
a: `P(<i>X</i> = 2) = 0.2335, P(<i>X</i> ≥ 3) = 0.6172`},
quiz: [
 {q: `Which is not a condition for a binomial model?`, o: [`fixed <i>n</i>`, `independent trials`, `constant <i>p</i>`, `continuous data`], a: 3, why: `Binomial is discrete.`},
 {q: `P(<i>X</i> > 4) equals`, o: [`1 − P(<i>X</i> ≤ 4)`, `1 − P(<i>X</i> ≤ 3)`, `P(<i>X</i> ≤ 4)`, `1 − P(<i>X</i> = 4)`], a: 0, why: `“More than 4” starts at 5.`}],
exam: {m: 3, q: `15% of seeds fail to germinate. In a packet of 20, find the probability that at most 2 fail.`,
ms: [`<i>X</i> ~ B(20, 0.15) <span class="mk">[1]</span>`, `P(<i>X</i> ≤ 2) <span class="mk">[1]</span>`, `= 0.4049 <span class="mk">[1]</span>`]}},

{id: 'hypothesis', u: S1, y: 12, p: P3, t: `Hypothesis testing with the binomial`,
body: `<p>A hypothesis test checks whether data give evidence against a claim about a population parameter.</p>
<ul><li><b>H<sub>0</sub></b> (null hypothesis): the parameter has the claimed value, for example <i class="v">p</i> = 0.25.</li><li><b>H<sub>1</sub></b> (alternative): <i class="v">p</i> > 0.25, <i class="v">p</i> < 0.25 (one-tailed) or <i class="v">p</i> ≠ 0.25 (two-tailed).</li></ul>
<p>Assume H<sub>0</sub> is true and find the probability of a result at least as extreme as the one observed. If that is less than the <b>significance level</b>, reject H<sub>0</sub>. For a two-tailed test, compare each tail with half the significance level.</p>
<p>The <b>critical region</b> is the set of values that would lead to rejecting H<sub>0</sub>. Always finish with a conclusion in context, and say “there is evidence” rather than “it is proved”.</p>`,
eq: [],
ex: {q: `A spinner should land on red with probability 0.25. In 20 spins it lands on red 9 times. Test at 5% whether it lands on red more often.`,
s: [`H<sub>0</sub>: <i>p</i> = 0.25, H<sub>1</sub>: <i>p</i> > 0.25. Under H<sub>0</sub>, <i>X</i> ~ B(20, 0.25).`, `P(<i>X</i> ≥ 9) = 1 − P(<i>X</i> ≤ 8) = 1 − 0.9591 = 0.0409.`, `0.0409 < 0.05, so reject H<sub>0</sub>.`],
a: `There is evidence at the 5% level that the spinner lands on red more often than 0.25.`},
quiz: [
 {q: `A two-tailed test at 10% puts how much in each tail?`, o: [`10%`, `5%`, `2.5%`, `20%`], a: 1, why: `Split the significance level between tails.`},
 {q: `If the p-value is 0.08 at 5% significance, you`, o: [`reject H<sub>0</sub>`, `do not reject H<sub>0</sub>`, `prove H<sub>1</sub>`, `prove H<sub>0</sub>`], a: 1, why: `0.08 > 0.05.`}],
exam: {m: 4, q: `Find the critical region for a test of H<sub>0</sub>: <i>p</i> = 0.4 against H<sub>1</sub>: <i>p</i> < 0.4 with <i>n</i> = 20 at the 5% level, and its actual significance level.`,
ms: [`<i>X</i> ~ B(20, 0.4) <span class="mk">[1]</span>`, `P(<i>X</i> ≤ 3) = 0.0160, P(<i>X</i> ≤ 4) = 0.0510 <span class="mk">[1]</span>`, `Critical region <i>X</i> ≤ 3 <span class="mk">[1]</span>`, `Actual significance 1.6% <span class="mk">[1]</span>`]}},

{id: 'kinematics', u: M1, y: 12, p: P3, t: `Kinematics with constant acceleration`,
body: `<p>Mechanics uses <b>modelling assumptions</b>: a particle has mass but no size; a light string has no mass; an inextensible string does not stretch; a smooth surface has no friction. Edexcel uses <i class="v">g</i> = 9.8 m s<sup>−2</sup> unless told otherwise.</p>
<p>The five <i>suvat</i> equations apply when acceleration is constant. List <i class="v">s</i>, <i class="v">u</i>, <i class="v">v</i>, <i class="v">a</i>, <i class="v">t</i>, fill in known values, and pick the equation without the unwanted quantity.</p>
<p>Velocity–time graphs: gradient is acceleration, area is displacement. For two particles, write each one's displacement in terms of <i class="v">t</i> and set them equal to find when they meet.</p>`,
eq: [[`<i>v</i> = <i>u</i> + <i>at</i>`, ``], [`<i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>`, ``], [`<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>`, ``], [`<i>s</i> = ½(<i>u</i> + <i>v</i>)<i>t</i>`, ``]],
ex: {q: `A particle starts from rest, accelerates at 2 m s<sup>−2</sup> for 5 s, then decelerates uniformly to rest in 4 s. Find the total distance.`,
s: [`Top speed = 0 + 2 × 5 = 10 m s<sup>−1</sup>.`, `First stage: ½ × 5 × 10 = 25 m.`, `Second stage: ½ × 4 × 10 = 20 m.`],
a: `45 m`},
quiz: [
 {q: `A smooth surface means`, o: [`no friction`, `no mass`, `no gravity`, `constant speed`], a: 0, why: `Smooth is the modelling word for frictionless.`},
 {q: `A ball is thrown up at 14.7 m s<sup>−1</sup>. Time to the top (<i>g</i> = 9.8)?`, o: [`1 s`, `1.5 s`, `2 s`, `3 s`], a: 1, why: `0 = 14.7 − 9.8<i>t</i>.`}],
exam: {m: 4, q: `Car A passes a point at 20 m s<sup>−1</sup> moving at constant speed. Car B starts from rest at that point at the same moment, accelerating at 2.5 m s<sup>−2</sup>. Find when and where B catches A.`,
ms: [`<i>s</i><sub>A</sub> = 20<i>t</i> <span class="mk">[1]</span>`, `<i>s</i><sub>B</sub> = 1.25<i>t</i><sup>2</sup> <span class="mk">[1]</span>`, `1.25<i>t</i><sup>2</sup> = 20<i>t</i>, so <i>t</i> = 16 s <span class="mk">[1]</span>`, `Distance 320 m <span class="mk">[1]</span>`]}},

{id: 'forces', u: M1, y: 12, p: P3, t: `Forces, Newton's laws and connected particles`,
body: `<p>Draw a force diagram for each object. Resolve in the direction of motion and use <i class="v">F</i> = <i class="v">ma</i>; perpendicular to the motion, forces balance.</p>
<p>For <b>connected particles</b> joined by a light inextensible string, both move with the same acceleration and the tension is the same throughout the string. Write <i class="v">F</i> = <i class="v">ma</i> for each particle separately, then solve the pair of equations. Over a smooth pulley, the tension is the same on both sides.</p>
<p>For a tow bar or coupling, the force can be a tension or a thrust. For lifts, the reaction from the floor is the force a person feels as their weight.</p>`,
eq: [[`<i>F</i> = <i>ma</i>`, `resultant force`], [`<i>W</i> = <i>mg</i>`, `<i>g</i> = 9.8 m s<sup>−2</sup>`]],
ex: {q: `Particles of 3 kg and 2 kg hang on either side of a smooth pulley. Find the acceleration and the tension.`,
s: [`3 kg: 3<i>g</i> − <i>T</i> = 3<i>a</i>.`, `2 kg: <i>T</i> − 2<i>g</i> = 2<i>a</i>.`, `Add: <i>g</i> = 5<i>a</i>, so <i>a</i> = 1.96 m s<sup>−2</sup>.`, `<i>T</i> = 2(9.8 + 1.96).`],
a: `<i>a</i> = 1.96 m s<sup>−2</sup>, <i>T</i> = 23.5 N`},
quiz: [
 {q: `For connected particles on a light inextensible string, the particles have`, o: [`different accelerations`, `the same acceleration`, `zero acceleration`, `the same mass`], a: 1, why: `Inextensible means they move together.`},
 {q: `A 1500 kg car accelerates at 2 m s<sup>−2</sup> with 400 N resistance. Driving force?`, o: [`2600 N`, `3000 N`, `3400 N`, `400 N`], a: 2, why: `<i>F</i> − 400 = 3000.`}],
exam: {m: 5, q: `A 1200 kg car tows a 400 kg trailer with a light rigid tow bar. Resistances are 300 N on the car and 100 N on the trailer. The driving force is 2000 N. Find the acceleration and the tension in the tow bar.`,
ms: [`Whole system: 2000 − 400 = 1600<i>a</i> <span class="mk">[1]</span>`, `<i>a</i> = 1 m s<sup>−2</sup> <span class="mk">[1]</span>`, `Trailer: <i>T</i> − 100 = 400 × 1 <span class="mk">[1]</span>`, `<i>T</i> = 500 N <span class="mk">[1]</span>`, `Checks with car: 2000 − 300 − 500 = 1200 ✓ <span class="mk">[1]</span>`]}},

{id: 'variable-acceleration', u: M1, y: 12, p: P3, t: `Variable acceleration`,
body: `<p>When acceleration changes with time, the <i>suvat</i> equations do not apply. Use calculus instead.</p>
<p>Differentiate displacement to get velocity, and velocity to get acceleration. Integrate the other way, adding a constant each time, and use the starting conditions to find it.</p>
<p>A particle is <b>at rest</b> when <i class="v">v</i> = 0. It has <b>maximum velocity</b> when <i class="v">a</i> = 0. If a particle changes direction during an interval, the distance travelled is not the same as the displacement: find when <i class="v">v</i> = 0 and add the distances for each part.</p>`,
eq: [[`<i>v</i> = ${F('d<i>s</i>', 'd<i>t</i>')}, <i>a</i> = ${F('d<i>v</i>', 'd<i>t</i>')}`, `differentiate`], [`<i>s</i> = ∫<i>v</i> d<i>t</i>, <i>v</i> = ∫<i>a</i> d<i>t</i>`, `integrate`]],
ex: {q: `A particle has displacement <i>s</i> = <i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i>. When is it at rest?`,
s: [`<i>v</i> = d<i>s</i>/d<i>t</i> = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9.`, `Set <i>v</i> = 0: 3(<i>t</i> − 1)(<i>t</i> − 3) = 0.`],
a: `At <i>t</i> = 1 s and <i>t</i> = 3 s`},
quiz: [
 {q: `If <i>v</i> = 4<i>t</i><sup>3</sup>, then <i>a</i> = `, o: [`<i>t</i><sup>4</sup>`, `12<i>t</i><sup>2</sup>`, `4<i>t</i><sup>2</sup>`, `12<i>t</i>`], a: 1, why: `Differentiate.`},
 {q: `Maximum velocity occurs when`, o: [`<i>s</i> = 0`, `<i>v</i> = 0`, `<i>a</i> = 0`, `<i>t</i> = 0`], a: 2, why: `Stationary point of <i>v</i>.`}],
exam: {m: 4, q: `A particle starts from the origin with <i>v</i> = 6<i>t</i> − 3<i>t</i><sup>2</sup>. Find the distance travelled in the first 3 seconds.`,
ms: [`<i>s</i> = 3<i>t</i><sup>2</sup> − <i>t</i><sup>3</sup> <span class="mk">[1]</span>`, `<i>v</i> = 0 at <i>t</i> = 2, where <i>s</i> = 4 <span class="mk">[1]</span>`, `At <i>t</i> = 3, <i>s</i> = 0 <span class="mk">[1]</span>`, `Distance = 4 + 4 = 8 m <span class="mk">[1]</span>`]}}
];
}
