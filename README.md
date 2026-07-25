# The Magnus Archive — a spoiler-safe character reader

A character wiki for *The Magnus Archives* that only tells you what you already
know. Set the slider to the episode you are **currently on**, and every profile
shows the Archive as it stood *before* that episode — its own revelations stay
sealed until you move past it.

**Coverage: MAG001–MAG200 — the complete run.** 401 figures, ~2,250
episode-tagged facts.

## How it works

- **The gate is the episode you are on, not the last one you finished.** At
  MAG010 you see everything through MAG009. Move to MAG011 and MAG010's
  revelations unlock. This is deliberate: you can look someone up *while*
  listening without the page spoiling the episode playing in your ears.
- **Returning cast is highlighted.** Characters you already know who feature in
  the episode you are on get an amber dot in the index and a banner on their
  profile — a cast list for what you are about to hear. Characters who *debut*
  in that episode stay hidden, because naming them would give it away.
- **Nothing past the gate is rendered.** Filtering happens before the DOM is
  built, not with CSS.
- **Profiles grow.** Each fact is tagged with the episode that establishes it,
  so a profile is a timeline. Jonathan Sims at MAG001 is a man tidying a filing
  system; by MAG200 he is something else entirely, and you can watch the
  turn happen one episode at a time.
- **"Finished it"** unseals the episode you are on, for when you have just
  ended one and want to look something up before starting the next. It is also
  the only way to reach MAG200's own content, there being no MAG201 to move to.
  Keyboard shortcut <kbd>f</kbd>; it travels in the URL as `done=1`.
- **Descriptors evolve too.** The one-line summary under each name is itself
  episode-tagged, so it re-words as the character changes.
- **Cross-references** are marked separately, in amber, and gated the same way —
  they only appear once the show itself has drawn the connection.
- **Statement log** lists every episode up to the gate with its statement giver,
  date, subject, and the figures it introduces.
- **Selecting a character never scrolls the page.** The position is pinned
  across the re-render.

Because the gate means "currently on", the last episode's own content is only
reachable by ticking **Finished it** — there is no MAG201 to move forward to.

## Using it

| Action | How |
| --- | --- |
| Change episode | Drag the slider, click a tick number, or press <kbd>[</kbd> / <kbd>]</kbd> |
| Unseal the current episode | Tick **Finished it**, or press <kbd>f</kbd> |
| Search | Type in the index box, or press <kbd>/</kbd> |
| Filter | Click the category chips |
| Share a view | The URL hash carries both episode and character, e.g. `#ep=4/c=jurgen-leitner` |
| Switch theme | The Paper/Archive button, top right |

## A caveat worth stating plainly

The whole dataset ships to the browser inside `data/`. The gate filters what
gets rendered, which is genuinely enough to protect you from reading ahead by
accident — but anyone who opens devtools or the repository can read the files.
It is a courtesy, not a vault.

## Running it

No build step, no dependencies. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Publishing to GitHub Pages

The site is plain static files at the repository root. The workflow at
`.github/workflows/pages.yml` deploys it on every push to `main` and switches
Pages on itself the first time it runs, so no manual setup is needed. The site
is served at `https://fleuron1.github.io/magnushub/`.

If your account or organisation restricts Actions from enabling Pages, turn it
on by hand instead — **Settings → Pages → Source: Deploy from a branch**, branch
`main`, folder `/ (root)` — which serves the same files without using the
workflow at all.

## Data layout

The archive is built to grow ten episodes at a time without touching existing
rows.

```
data/episodes.js           MAG001–010 episode index
data/episodes-011-100.js   MAG011–100 episode index
data/episodes-101-200.js   MAG101–200 episode index
data/characters.js         roster: identity rows only
data/facts/f001-010.js     episode-tagged facts, one file per block of ten
data/facts/f011-020.js     … through f191-200.js
```

**`characters.js`** holds only identity — a character with no facts anywhere is
ignored by the reader, so it is safe to register someone before writing their
entries.

```js
{ id: "jonathan-sims",          // slug, used in the URL hash
  name: "Jonathan Sims",
  category: "Institute",        // Institute | Statement Giver | Subject |
                                // Unexplained | Organisation
  statement: { ep: 1, ref: "MAG001 — Anglerfish", given: "22 April 2012" } }
```

**`data/facts/*.js`** holds everything episode-tagged, as flat records:

```js
{ c: "jonathan-sims", ep: 4, t: "A fact, tagged with the episode that establishes it." }
{ c: "jonathan-sims", ep: 1, k: "blurb", t: "One-line descriptor; latest ≤ gate wins." }
{ c: "jonathan-sims", ep: 1, k: "alias", t: "The Archivist" }
{ c: "joseph-rayner",  ep: 9, k: "ref",   t: "A connection the show itself draws." }
{ c: "gerard-keay",    ep: 12, k: "seen" }   // features, but nothing new established
```

`k: "seen"` is how you mark a character as appearing in an episode without
adding a fact — that is what drives the returning-cast highlight.

A character's debut is computed as their lowest `ep`, so there is no separate
field to keep in sync. Every character needs a `blurb` at or before their debut.

## Adding more episodes

1. Append the episodes to a new index file, e.g. `data/episodes-201-210.js`.
2. Create `data/facts/f201-210.js` following the same pattern, and add
   `<script>` tags for both in `index.html`.

The checker reads its file list straight out of `index.html`, so a new data
file is validated the moment the page loads it.

The slider range, index, filters, ticks and statement log all derive from the
data. Run the checker after any edit:

```bash
node tools/check-data.js
```

It catches unregistered ids, gaps in the episode run, out-of-range episodes,
missing descriptors at a character's debut, and any fact that could leak past
the gate. It exits non-zero on failure.

## Sources and credit

*The Magnus Archives* is a podcast by [Rusty Quill](https://rustyquill.com/).
This is an unofficial fan reference and is not affiliated with or endorsed by
them. Episode details were checked against the public
[transcript archive](https://snarp.github.io/magnus_archives_transcripts/).

All profile text here is original summary written for this project — plot facts
and character details, not transcript dialogue. Nothing is reproduced from the
scripts.

## Licence

MIT, for the code. The underlying work belongs to Rusty Quill.
