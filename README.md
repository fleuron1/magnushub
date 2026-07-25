# The Magnus Archive — a spoiler-safe character reader

A character wiki for *The Magnus Archives* that only tells you what you already
know. Set the episode gate to the last episode you have listened to, and every
profile shows the Archive's understanding **as of that point** — later
revelations are never drawn on the page.

**Coverage: MAG001–MAG010.**

## How it works

- **The gate.** A slider at the top sets your episode. Everything below it is
  visible; everything above it is filtered out before render, not hidden with
  CSS.
- **Profiles grow.** Each fact is tagged with the episode that establishes it,
  so a profile is a timeline rather than a fixed page. Jonathan Sims at MAG001
  is a man tidying a filing system; at MAG010 he is chasing a book collector and
  losing evidence.
- **Descriptors evolve too.** The one-line summary under each name is itself
  episode-tagged, so it re-words as the character changes.
- **Cross-references** are marked separately, in amber, and gated the same way —
  they only appear once the show itself has drawn the connection.
- **Statement log** lists every episode up to the gate with its statement giver,
  date, subject, and the figures it introduces.

## Using it

| Action | How |
| --- | --- |
| Change episode | Drag the slider, click a tick number, or press <kbd>[</kbd> / <kbd>]</kbd> |
| Search | Type in the index box, or press <kbd>/</kbd> |
| Filter | Click the category chips |
| Share a view | The URL hash carries both episode and character, e.g. `#ep=4/c=jurgen-leitner` |
| Switch theme | The Paper/Archive button, top right |

## A caveat worth stating plainly

The whole dataset ships to the browser inside `data/characters.js`. The gate
filters what gets rendered, which is genuinely enough to protect you from
reading ahead by accident — but anyone who opens devtools or the repository can
read the file. It is a courtesy, not a vault.

## Running it

No build step, no dependencies. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Publishing to GitHub Pages

The site is plain static files at the repository root, so Pages needs no
configuration beyond being switched on:

1. **Settings → Pages**
2. **Source: Deploy from a branch**
3. Branch `main`, folder `/ (root)` → **Save**

It will be served at `https://fleuron1.github.io/magnushub/` within a minute or
two. A workflow at `.github/workflows/pages.yml` is also included if you would
rather deploy through GitHub Actions — for that, set **Source: GitHub Actions**
instead.

## Extending past episode 10

Adding an episode is two edits, no code changes:

1. Append the episode to `data/episodes.js`.
2. In `data/characters.js`, add `{ ep: 11, text: "…" }` entries to existing
   characters and append any new ones.

The slider range, index, filters and statement log all derive from the data, so
they pick up the new episode automatically.

### Character schema

```js
{
  id: "jonathan-sims",              // slug, used in the URL hash
  name: "Jonathan Sims",
  category: "Institute",            // Institute | Statement Giver | Subject |
                                    // Unexplained | Organisation
  aliases:  [{ ep: 1, text: "The Archivist" }],
  blurbs:   [{ ep: 1, text: "One-line descriptor, latest ≤ gate wins." }],
  entries:  [{ ep: 1, text: "A fact, tagged with the episode establishing it." }],
  refs:     [{ ep: 9, text: "A connection the show itself draws." }],
  statement: { ep: 1, ref: "MAG001 — Anglerfish", given: "22 April 2012" }
}
```

A character's "first recorded" episode is computed as the lowest `ep` in
`entries`, so there is no separate field to keep in sync.

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
