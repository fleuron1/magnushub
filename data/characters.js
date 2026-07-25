/* Roster for the Magnus Archive Reader — identity records only.
 *
 * Everything episode-tagged (facts, blurbs, aliases, cross-references, bare
 * appearances) lives in data/facts/*.js so the archive can grow one block of
 * episodes at a time without touching this file's existing rows.
 *
 * A character with no facts anywhere is ignored by the reader, so it is safe
 * to register someone here before writing their entries.
 *
 *   id        stable slug, used in the URL hash
 *   name      display name
 *   category  Institute | Statement Giver | Subject | Unexplained | Organisation
 *   statement optional case metadata for statement givers
 */

window.TMA_CHARACTERS = (window.TMA_CHARACTERS || []).concat([

  /* -- Institute ------------------------------------------------------- */
  { id: "jonathan-sims", name: "Jonathan Sims", category: "Institute" },
  { id: "gertrude-robinson", name: "Gertrude Robinson", category: "Institute" },
  { id: "tim", name: "Tim Stoker", category: "Institute" },
  { id: "sasha", name: "Sasha James", category: "Institute" },
  { id: "martin", name: "Martin Blackwood", category: "Institute" },

  /* -- Organisations --------------------------------------------------- */
  { id: "magnus-institute", name: "The Magnus Institute", category: "Organisation" },
  { id: "breekon-and-hope", name: "Breekon and Hope", category: "Organisation" },
  { id: "peoples-church", name: "The People's Church of the Divine Host", category: "Organisation" },

  /* -- Statement givers, MAG001–010 ------------------------------------ */
  { id: "nathan-watts", name: "Nathan Watts", category: "Statement Giver",
    statement: { ep: 1, ref: "MAG001 — Anglerfish", given: "22 April 2012" } },
  { id: "joshua-gillespie", name: "Joshua Gillespie", category: "Statement Giver",
    statement: { ep: 2, ref: "MAG002 — Do Not Open", given: "22 November 1998" } },
  { id: "amy-patel", name: "Amy Patel", category: "Statement Giver",
    statement: { ep: 3, ref: "MAG003 — Across the Street", given: "1 July 2007" } },
  { id: "dominic-swain", name: "Dominic Swain", category: "Statement Giver",
    statement: { ep: 4, ref: "MAG004 — Pageturner", given: "28 June 2013" } },
  { id: "kieran-woodward", name: "Kieran Woodward", category: "Statement Giver",
    statement: { ep: 5, ref: "MAG005 — Thrown Away", given: "23 February 2009" } },
  { id: "timothy-hodge", name: "Timothy Hodge", category: "Statement Giver",
    statement: { ep: 6, ref: "MAG006 — Squirm", given: "9 December 2014" } },
  { id: "clarence-berry", name: "Clarence Berry", category: "Statement Giver",
    statement: { ep: 7, ref: "MAG007 — The Piper", given: "6 November 1922" } },
  { id: "ivo-lensik", name: "Ivo Lensik", category: "Statement Giver",
    statement: { ep: 8, ref: "MAG008 — Burned Out", given: "13 March 2007" } },
  { id: "julia-montauk", name: "Julia Montauk", category: "Statement Giver",
    statement: { ep: 9, ref: "MAG009 — A Father's Love", given: "3 December 2002" } },
  { id: "trevor-herbert", name: "Trevor Herbert", category: "Statement Giver",
    statement: { ep: 10, ref: "MAG010 — Vampire Killer", given: "10 July 2010" } },

  /* -- Subjects and unexplained, MAG001–010 ---------------------------- */
  { id: "the-anglerfish", name: "The figure in the close", category: "Unexplained" },
  { id: "john-fellowes", name: "John Fellowes", category: "Subject" },
  { id: "ashley-dobson", name: "Ashley Dobson", category: "Subject" },
  { id: "michael-macaulay", name: "Michael MacAulay", category: "Subject" },
  { id: "the-coffin", name: "The coffin", category: "Unexplained" },
  { id: "john-coffin", name: "John", category: "Subject" },
  { id: "graham-folger", name: "Graham Folger", category: "Subject" },
  { id: "not-graham", name: "The man in Graham Folger's flat", category: "Unexplained" },
  { id: "jurgen-leitner", name: "Jurgen Leitner", category: "Subject" },
  { id: "mary-keay", name: "Mary Keay", category: "Subject" },
  { id: "gerard-keay", name: "Gerard Keay", category: "Subject" },
  { id: "michael-crew", name: "Michael Crew", category: "Subject" },
  { id: "katherine-mendes", name: "Katherine Mendes", category: "Subject" },
  { id: "alan-parfitt", name: "Alan Parfitt", category: "Subject" },
  { id: "the-teeth", name: "The teeth", category: "Unexplained" },
  { id: "jane-prentiss", name: "Jane Prentiss", category: "Subject" },
  { id: "harriet-lee", name: "Harriet Lee", category: "Subject" },
  { id: "the-piper", name: "The Piper", category: "Unexplained" },
  { id: "wilfred-owen", name: "Wilfred Owen", category: "Subject" },
  { id: "joseph-rayner", name: "Joseph Rayner", category: "Subject" },
  { id: "raymond-fielding", name: "Raymond Fielding", category: "Subject" },
  { id: "agnes-montague", name: "Agnes Montague", category: "Subject" },
  { id: "edwin-burroughs", name: "Father Edwin Burroughs", category: "Subject" },
  { id: "anna-kasuma", name: "Anna Kasuma", category: "Subject" },
  { id: "robert-montauk", name: "Robert Montauk", category: "Subject" },
  { id: "maxwell-rayner", name: "Maxwell Rayner", category: "Subject" },
  { id: "christopher-lorne", name: "Christopher Lorne", category: "Subject" },
  { id: "sylvia-mcdonald", name: "Sylvia McDonald", category: "Unexplained" },
  { id: "nigel-herbert", name: "Nigel Herbert", category: "Subject" },
  { id: "robert-arden", name: "Robert Arden", category: "Unexplained" },
  { id: "alard-dupont", name: "Alard Dupont", category: "Subject" }

]);
