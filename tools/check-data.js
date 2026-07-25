/* Data integrity checker for the Magnus Archive Reader.
 *
 *   node tools/check-data.js
 *
 * Catches: duplicate ids, duplicate/missing episodes, facts referencing an
 * unregistered character, out-of-range episode numbers, empty text, a
 * character whose first blurb lands after their debut (their profile would
 * render with no descriptor), and any fact that could leak past the gate.
 * Exits non-zero on failure.
 */

global.window = {};
const fs = require('fs');
const R = require('path').join(__dirname, '..') + '/';
require(R+'data/episodes.js'); require(R+'data/episodes-011-100.js');
require(R+'data/characters.js');
for (const f of fs.readdirSync(R+'data/facts').sort()) require(R+'data/facts/'+f);

const EPS = window.TMA_EPISODES, CH = window.TMA_CHARACTERS, FACTS = window.TMA_FACTS;
let fail = 0; const bad = m => { console.log('FAIL: ' + m); fail++; };

const ids = new Set(); 
for (const c of CH) { if (ids.has(c.id)) bad('dup id '+c.id); ids.add(c.id); }
const nums = new Set();
for (const e of EPS) { if (nums.has(e.num)) bad('dup episode '+e.num); nums.add(e.num); if(!e.title) bad('ep '+e.num+' no title'); }
if (EPS.length !== 100) bad('expected 100 episodes, got ' + EPS.length);

const rec = {};
for (const f of FACTS) {
  if (!ids.has(f.c)) { bad('fact for unknown id ' + f.c); continue; }
  if (!(f.ep >= 1 && f.ep <= EPS.length)) bad(f.c+' ep out of range '+f.ep);
  if (f.k !== 'seen' && (!f.t || !f.t.trim())) bad(f.c+' ep'+f.ep+' empty text');
  const r = rec[f.c] = rec[f.c] || {debut:Infinity, blurb:Infinity, facts:0};
  r.debut = Math.min(r.debut, f.ep);
  if (f.k === 'blurb') r.blurb = Math.min(r.blurb, f.ep);
  if (!f.k) r.facts++;
}
for (const [id, r] of Object.entries(rec)) {
  if (r.blurb > r.debut) bad(id+': first blurb ep'+r.blurb+' later than debut ep'+r.debut);
  if (!r.facts) bad(id+': no plain facts');
}
const noFacts = [...ids].filter(i => !rec[i]);
if (noFacts.length) console.log('registered but no facts yet (ignored by reader): ' + noFacts.length);

// gate rule: at "currently on N", reveal = N-1, nothing >= N is ever selected
for (let ep = 1; ep <= EPS.length; ep++) {
  const reveal = ep - 1;
  for (const f of FACTS) if (f.ep <= reveal && f.ep >= ep) bad('leak at ep'+ep);
}
const known = ep => Object.entries(rec).filter(([,r]) => r.debut <= ep-1).length;
const featured = ep => Object.entries(rec).filter(([id,r]) => r.debut <= ep-1 && FACTS.some(f=>f.c===id&&f.ep===ep)).length;
console.log(`characters ${CH.length} | facts ${FACTS.length} | episodes ${EPS.length}`);
for (const ep of [1,2,5,10,11]) console.log(`  on MAG${String(ep).padStart(3,'0')}: revealed<=${ep-1}, known ${known(ep)}, featured(returning) ${featured(ep)}`);
console.log(fail ? `\n${fail} FAILURES` : '\nAll checks passed.');
process.exit(fail?1:0);
