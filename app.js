{
const app = document.getElementById('app');
const GR = window.GR || {courses: [], lessons: {}};
const C = GR.courses, L = GR.lessons;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strip = s => String(s).replace(/<[^>]+>/g, '');
const SUBJ = ['Physics', 'Maths', 'Further Maths', 'Chemistry', 'Biology', 'Computer Science'];

let P = {};
try { P = JSON.parse(localStorage.getItem('gradient-progress') || '{}') || {}; } catch (e) { P = {}; }
const save = () => { try { localStorage.setItem('gradient-progress', JSON.stringify(P)); } catch (e) {} };
const isDone = (c, l) => !!(P[c] && P[c][l]);
const setDone = (c, l, v) => { P[c] = P[c] || {}; if (v) P[c][l] = Date.now(); else delete P[c][l]; save(); };

const course = id => C.find(c => c.id === id);
const units = c => {
  const ls = L[c.id];
  if (ls) {
    const out = [];
    ls.forEach(l => { let u = out.find(x => x.name === l.u); if (!u) { u = {y: l.y, name: l.u, items: []}; out.push(u); } u.items.push(l); });
    return out;
  }
  return (c.units || []).map(u => ({y: u.y, name: u.name, items: u.topics.map(t => ({t}))}));
};
const count = c => units(c).reduce((n, u) => n + u.items.length, 0);
const doneN = c => (L[c.id] || []).filter(l => isDone(c.id, l.id)).length;
const pct = c => L[c.id] ? Math.round(doneN(c) / L[c.id].length * 100) : 0;
const lessonHref = (c, l) => '#l-' + c + '--' + l;
const nextLesson = c => { const ls = L[c.id] || []; return ls.find(l => !isDone(c.id, l.id)) || ls[0]; };

let ro = null, raf = 0, filt = {s: 'All', q: ''}, yr = 'all';

/* ---------- home ---------- */
function home() {
  const ready = C.filter(c => L[c.id]);
  const lessons = ready.reduce((n, c) => n + L[c.id].length, 0);
  const topics = C.reduce((n, c) => n + count(c), 0);
  app.innerHTML = `
  <section class="band hero"><div class="wrap">
    <div class="head">
      <div>
        <h1>Revise every A-level topic, from Year 12 to Year 13</h1>
        <p>Short lessons in plain English, the equations you must know, worked examples you reveal step by step, quick checks and exam-style questions with mark schemes.</p>
        <div class="stats"><div><b>${C.length}</b>courses</div><div><b>${topics}</b>topics mapped</div><div><b>${lessons}</b>full lessons</div></div>
      </div>
      <div class="acts">
        <a class="btn light" href="#c-aqa-physics">Start AQA Physics</a>
        <a class="btn line" href="#c-edexcel-maths">Start Edexcel Maths</a>
      </div>
    </div>
    <div class="fig" id="hfig" role="img" aria-label="A projectile path on graph paper, with its horizontal and vertical velocity components drawn at one point"></div>
  </div></section>
  <section class="band"><div class="wrap">
    <h2>Courses</h2>
    <div class="tools">
      <input class="search" id="q" type="search" placeholder="Search a topic, for example moments or integration" value="${esc(filt.q)}" aria-label="Search topics">
      <div class="chips" role="group" aria-label="Subject">${['All', ...SUBJ].map(s => `<button class="chip" data-s="${s}" aria-pressed="${filt.s === s}">${s}</button>`).join('')}</div>
    </div>
    <div id="cat"></div>
  </div></section>`;
  const q = document.getElementById('q');
  q.addEventListener('input', () => { filt.q = q.value; cat(); });
  app.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    filt.s = b.dataset.s; app.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x === b)); cat();
  }));
  cat();
  heroFig();
}

function cat() {
  const box = document.getElementById('cat');
  const q = filt.q.trim().toLowerCase();
  const list = C.filter(c => filt.s === 'All' || c.subj === filt.s);
  let html = '';
  if (q.length > 1) {
    const hits = [];
    list.forEach(c => units(c).forEach(u => u.items.forEach(it => {
      if (strip(it.t).toLowerCase().includes(q) || u.name.toLowerCase().includes(q))
        hits.push(`<a class="res" href="${it.id ? lessonHref(c.id, it.id) : '#c-' + c.id}"><b>${it.t}</b><span>${esc(c.board)} ${esc(c.subj)}, ${esc(u.name)}, Year ${u.y}</span></a>`);
    })));
    html += `<p class="small">${hits.length} topic${hits.length === 1 ? '' : 's'} match “${esc(filt.q.trim())}”</p><div class="results">${hits.slice(0, 40).join('')}</div>`;
  }
  html += SUBJ.filter(s => list.some(c => c.subj === s)).map(s => `
    <div class="subj">
      <div><h3>${s}</h3><div class="sp">A-level, Year 12 and Year 13</div></div>
      <div class="boards">${list.filter(c => c.subj === s).map(c => `
        <a class="board ${L[c.id] ? 'full' : ''}" href="#c-${c.id}">
          <div class="n">${esc(c.board)} ${esc(c.subj)}</div>
          <div class="d">Specification ${esc(c.code)}, ${count(c)} topics</div>
          ${L[c.id] ? `<span class="tag go">${L[c.id].length} full lessons</span><div class="meter"><i style="width:${pct(c)}%"></i></div>` : `<span class="tag">Topic map</span>`}
        </a>`).join('')}</div>
    </div>`).join('');
  box.innerHTML = html;
}

function heroFig() {
  const s = document.getElementById('hfig');
  if (!s) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let geo = null;
  const draw = () => {
    const W = s.clientWidth, H = s.clientHeight;
    if (!W || !H) return;
    const x0 = 34, x1 = W - 34, base = H - 34, h = H * 0.66, g = 22;
    const pos = t => [x0 + (x1 - x0) * t, base - h * 4 * t * (1 - t)];
    geo = {pos};
    let grid = '';
    for (let x = x0 % g; x < W; x += g) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
    for (let y = base % g; y < H; y += g) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
    let path = '';
    for (let i = 0; i <= 60; i++) { const [x, y] = pos(i / 60); path += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); }
    const vx = (x1 - x0) * 0.16, vyk = h * 4 * 0.16;
    let ghosts = '';
    [0.15, 0.5, 0.85].forEach(t => {
      const [x, y] = pos(t), vy = vyk * (1 - 2 * t);
      ghosts += `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
        <line x1="${x}" y1="${y}" x2="${x + vx}" y2="${y - vy}" stroke="#fff" stroke-width="2.5" marker-end="url(#ah)"/>`;
    });
    const t0 = 0.28, [cx, cy] = pos(t0), cvy = vyk * (1 - 2 * t0);
    const wide = W > 560;
    s.innerHTML = `<svg viewBox="0 0 ${W} ${H}" aria-hidden="true">
      <defs>
        <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#fff"/></marker>
        <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ff8a7f"/></marker>
      </defs>
      <g stroke="#fff" stroke-opacity=".1">${grid}</g>
      <line x1="0" y1="${base}" x2="${W}" y2="${base}" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/>
      <path d="${path}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6" stroke-opacity=".85"/>
      ${ghosts}
      <line x1="${cx}" y1="${cy}" x2="${cx + vx}" y2="${cy}" stroke="#ff8a7f" stroke-width="3" marker-end="url(#ar)"/>
      <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - cvy}" stroke="#ff8a7f" stroke-width="3" marker-end="url(#ar)"/>
      <text x="${cx + vx / 2 - 8}" y="${cy + 24}"><tspan font-style="italic">v</tspan><tspan font-size="12" dy="4">x</tspan></text>
      <text x="${cx - 34}" y="${cy - cvy / 2}"><tspan font-style="italic">v</tspan><tspan font-size="12" dy="4">y</tspan></text>
      <line x1="${x0}" y1="${base + 18}" x2="${x1}" y2="${base + 18}" stroke="#fff" stroke-opacity=".7" marker-start="url(#ah)" marker-end="url(#ah)"/>
      <text x="${(x0 + x1) / 2 - 30}" y="${base + 14}">range <tspan font-style="italic">R</tspan></text>
      ${wide ? `<text x="${W - 300}" y="34">a = −9.81 m s⁻² (vertical only)</text><text x="${W - 300}" y="60"><tspan font-style="italic">R</tspan> = <tspan font-style="italic">u</tspan>² sin 2θ / <tspan font-style="italic">g</tspan></text>` : ''}
      <circle id="ball" cx="${pos(0)[0]}" cy="${pos(0)[1]}" r="9" fill="#ff8a7f" stroke="#fff" stroke-width="2"/>
    </svg>`;
    if (reduce) { const b = s.querySelector('#ball'), [bx, by] = pos(0.5); b.setAttribute('cx', bx); b.setAttribute('cy', by); }
  };
  ro = new ResizeObserver(draw);
  ro.observe(s);
  if (reduce) return;
  let t = 0;
  const step = () => {
    const b = s.querySelector('#ball');
    if (b && geo) { const [x, y] = geo.pos(t); b.setAttribute('cx', x); b.setAttribute('cy', y); }
    t += 0.004; if (t > 1) t = 0;
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
}

/* ---------- course ---------- */
function coursePage(id) {
  const c = course(id);
  if (!c) return home();
  const us = units(c), has = !!L[c.id], nl = has && nextLesson(c);
  const show = us.filter(u => yr === 'all' || String(u.y) === yr);
  app.innerHTML = `
  <section class="band chead"><div class="wrap">
    <div class="crumb"><a href="#home">Courses</a> / ${esc(c.subj)}</div>
    <div class="row">
      <div>
        <h1>${esc(c.board)} A-level ${esc(c.subj)}</h1>
        <p>Specification ${esc(c.code)}. ${esc(c.papers)}</p>
      </div>
      ${has ? `<div class="prog"><b>${pct(c)}%</b> complete<div class="meter"><i style="width:${pct(c)}%;background:#fff"></i></div>
        <div class="small" style="color:#dfe5ff;margin-top:8px">${doneN(c)} of ${L[c.id].length} lessons done</div>
        <a class="btn light" href="${lessonHref(c.id, nl.id)}">${doneN(c) ? 'Continue' : 'Start'}: ${strip(nl.t)}</a></div>`
      : `<div class="prog"><b>${count(c)}</b> topics<div class="small" style="color:#dfe5ff;margin-top:6px">Full specification map, Year 12 and Year 13</div></div>`}
    </div>
  </div></section>
  <section class="band"><div class="wrap">
    <div class="ytabs" role="group" aria-label="Year">${[['all', 'Both years'], ['12', 'Year 12'], ['13', 'Year 13']].map(([v, n]) => `<button class="chip" data-y="${v}" aria-pressed="${yr === v}">${n}</button>`).join('')}</div>
    ${has ? '' : `<div class="note">This course has its full topic map. Lessons are written for AQA Physics and Edexcel Maths first; use this map as your checklist meanwhile.</div>`}
    ${show.map(u => `
      <div class="unit">
        <div><h3>${esc(u.name)}</h3><div class="uy">Year ${u.y}${has ? `, ${u.items.filter(l => isDone(c.id, l.id)).length} of ${u.items.length} done` : `, ${u.items.length} topics`}</div></div>
        <ul class="topics">${u.items.map(it => it.id
          ? `<li><a href="${lessonHref(c.id, it.id)}"><span class="dot ${isDone(c.id, it.id) ? 'y' : ''}"></span><span class="grow">${it.t}</span><span class="k">${(it.quiz || []).length} checks</span></a></li>`
          : `<li><span class="t"><span class="dot"></span><span class="grow">${esc(it.t)}</span></span></li>`).join('')}</ul>
      </div>`).join('')}
  </div></section>`;
  app.querySelectorAll('[data-y]').forEach(b => b.addEventListener('click', () => { yr = b.dataset.y; coursePage(id); }));
}

/* ---------- lesson ---------- */
function lessonPage(cid, lid) {
  const c = course(cid), ls = L[cid] || [];
  const i = ls.findIndex(l => l.id === lid);
  if (!c || i < 0) return coursePage(cid);
  const l = ls[i], prev = ls[i - 1], next = ls[i + 1];
  const sib = ls.filter(x => x.u === l.u);
  const d = isDone(cid, l.id);
  app.innerHTML = `
  <div class="lesson">
    <aside class="rail" aria-label="Topics in this unit">
      <h3>${esc(l.u)}</h3>
      <ul class="topics">${sib.map(x => `<li><a class="${x.id === l.id ? 'cur' : ''}" href="${lessonHref(cid, x.id)}"><span class="dot ${isDone(cid, x.id) ? 'y' : ''}"></span><span class="grow">${x.t}</span></a></li>`).join('')}</ul>
      <p><a href="#c-${cid}">All ${esc(c.board)} ${esc(c.subj)} topics</a></p>
    </aside>
    <article>
      <div class="crumb"><a href="#home">Courses</a> / <a href="#c-${cid}">${esc(c.board)} ${esc(c.subj)}</a></div>
      <h1>${l.t}</h1>
      <div class="meta">Year ${l.y}, ${esc(l.u)}${l.p ? `, ${l.p}` : ''}</div>
      <div class="body">${l.body}</div>
      ${l.eq && l.eq.length ? `<section class="box eqs"><h2>Learn these</h2>${l.eq.map(([f, n]) => `<div class="eq"><b>${f}</b><span>${n}</span></div>`).join('')}</section>` : ''}
      ${l.ex ? `<section class="box ex"><h2>Worked example</h2><div class="q">${l.ex.q}</div>
        <ol class="steps">${l.ex.s.map((st, k) => `<li ${k ? 'hidden' : ''}>${st}</li>`).join('')}</ol>
        <div class="ans" hidden>${l.ex.a}</div>
        <div class="row-btn"><button class="btn" id="nstep">Show next step</button><button class="btn ghost" id="astep">Show full solution</button></div></section>` : ''}
      ${l.quiz && l.quiz.length ? `<section class="box quiz"><h2>Quick check</h2>${l.quiz.map((q, k) => `
        <div class="qq" data-k="${k}"><p>${q.q}</p><div class="opts">${q.o.map((o, j) => `<button class="opt" data-j="${j}">${o}</button>`).join('')}</div><div class="why" hidden></div></div>`).join('')}
        <p class="small" id="score"></p></section>` : ''}
      ${l.exam ? `<section class="box exam"><h2>Exam-style question <span class="mk">[${l.exam.m} marks]</span></h2><div>${l.exam.q}</div>
        <label class="small" for="draft">Write your answer first, then check the mark scheme.</label>
        <textarea id="draft"></textarea>
        <details><summary>Show mark scheme</summary><ol>${l.exam.ms.map(x => `<li>${x}</li>`).join('')}</ol></details></section>` : ''}
      <button class="btn ${d ? 'done' : ''}" id="mark">${d ? 'Completed, tap to undo' : 'Mark lesson complete'}</button>
      <nav class="pager" aria-label="Lesson navigation">
        ${prev ? `<a href="${lessonHref(cid, prev.id)}"><small>Previous</small>${prev.t}</a>` : ''}
        ${next ? `<a class="nx" href="${lessonHref(cid, next.id)}"><small>Next</small>${next.t}</a>` : `<a class="nx" href="#c-${cid}"><small>Finished</small>Back to course</a>`}
      </nav>
    </article>
  </div>`;

  const key = 'draft-' + cid + '-' + lid, ta = document.getElementById('draft');
  if (ta) { try { ta.value = localStorage.getItem(key) || ''; } catch (e) {} ta.addEventListener('input', () => { try { localStorage.setItem(key, ta.value); } catch (e) {} }); }

  const ns = document.getElementById('nstep');
  if (ns) {
    const items = [...app.querySelectorAll('.steps li')], ans = app.querySelector('.ans');
    const reveal = all => {
      const h = items.find(x => x.hidden);
      if (all) items.forEach(x => x.hidden = false); else if (h) h.hidden = false;
      if (!items.some(x => x.hidden)) { ans.hidden = false; ns.disabled = true; ns.textContent = 'Solution shown'; }
    };
    ns.addEventListener('click', () => reveal(false));
    document.getElementById('astep').addEventListener('click', () => reveal(true));
  }

  let right = 0, answered = 0;
  app.querySelectorAll('.qq').forEach(box => {
    const q = l.quiz[+box.dataset.k];
    box.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      const j = +b.dataset.j, ok = j === q.a;
      box.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.j === q.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      const w = box.querySelector('.why'); w.hidden = false;
      w.innerHTML = (ok ? '<b style="color:var(--ok)">Correct.</b> ' : '<b style="color:var(--red)">Not quite.</b> ') + q.why;
      answered++; if (ok) right++;
      if (answered === l.quiz.length) document.getElementById('score').textContent = `You got ${right} of ${l.quiz.length}. ${right === l.quiz.length ? 'Mark the lesson complete and move on.' : 'Reread the part you missed, then try the exam question.'}`;
    }));
  });

  document.getElementById('mark').addEventListener('click', () => {
    setDone(cid, l.id, !isDone(cid, l.id));
    if (isDone(cid, l.id) && next) location.hash = lessonHref(cid, next.id).slice(1); else lessonPage(cid, lid);
  });
}

/* ---------- progress ---------- */
function progressPage() {
  const started = C.filter(c => L[c.id] && doneN(c) > 0);
  app.innerHTML = `<section class="band"><div class="wrap">
    <h1>My progress</h1>
    <p class="meta">Saved in this browser only. Clearing site data resets it.</p>
    ${started.length ? `<div class="plist">${started.map(c => { const n = nextLesson(c); return `
      <a class="pc" href="${lessonHref(c.id, n.id)}"><div><b>${esc(c.board)} ${esc(c.subj)}</b>
      <div class="small">${doneN(c)} of ${L[c.id].length} lessons done. Next: ${strip(n.t)}</div><div class="meter"><i style="width:${pct(c)}%"></i></div></div>
      <div class="pct">${pct(c)}%</div></a>`; }).join('')}</div>
      <p style="margin-top:24px"><button class="btn ghost" id="reset">Reset all progress</button> <span id="rq" class="small"></span></p>`
    : `<div class="empty"><h2>Nothing finished yet</h2><p>Open a lesson and press “Mark lesson complete” at the bottom. Your courses will show up here with the next lesson to do.</p>
      <a class="btn" href="#c-aqa-physics">Start AQA Physics</a> <a class="btn ghost" href="#c-edexcel-maths">Start Edexcel Maths</a></div>`}
  </div></section>`;
  const r = document.getElementById('reset');
  if (r) {
    let armed = false;
    r.addEventListener('click', () => {
      if (!armed) { armed = true; r.textContent = 'Press again to confirm'; document.getElementById('rq').textContent = 'This clears every lesson you marked.'; return; }
      P = {}; save(); progressPage();
    });
  }
}

/* ---------- router ---------- */
function route() {
  if (ro) { ro.disconnect(); ro = null; }
  cancelAnimationFrame(raf);
  const h = decodeURIComponent(location.hash.slice(1));
  let nav = 'home';
  if (h.startsWith('c-')) { const id = h.slice(2); if (id !== route.last) yr = 'all'; route.last = id; coursePage(id); }
  else if (h.startsWith('l-')) { const [c, l] = h.slice(2).split('--'); lessonPage(c, l); }
  else if (h === 'progress') { nav = 'progress'; progressPage(); }
  else home();
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === nav && !h.startsWith('c-') && !h.startsWith('l-')));
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
route();
}
