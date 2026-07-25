/* Character database for the Magnus Archive Reader.
   Coverage: MAG001–MAG010.

   Every entry is tagged with the episode that first establishes it. The reader
   only ever renders entries whose `ep` is at or below the episode you have
   selected, so a profile grows as you listen.

   All text is an original factual summary written for this project. No
   transcript dialogue is reproduced.

   Schema
     id        stable slug, used in the URL hash
     name      display name
     category  Institute | Statement Giver | Subject | Unexplained | Organisation
     aliases   alternative names, each gated by episode
     blurbs    one-line descriptor; the latest one at or below the selected
               episode is shown, so the summary line itself evolves
     entries   { ep, text } facts, rendered as a timeline
     refs      { ep, text } cross-references the show itself draws
     statement present on statement givers: their own case metadata
*/

window.TMA_CHARACTERS = [
  /* ---------------------------------------------------------------- Institute */
  {
    id: "jonathan-sims",
    name: "Jonathan Sims",
    category: "Institute",
    aliases: [{ ep: 1, text: "The Archivist" }, { ep: 1, text: "Jon" }],
    blurbs: [
      { ep: 1, text: "Newly appointed Head Archivist of the Magnus Institute, London." },
      { ep: 4, text: "Head Archivist, increasingly convinced the Archive has a job to do rather than a backlog to clear." }
    ],
    entries: [
      { ep: 1, text: "Appointed Head Archivist of the Magnus Institute following the death of his predecessor, Gertrude Robinson." },
      { ep: 1, text: "Worked at the Institute as a researcher for four years before the promotion." },
      { ep: 1, text: "Inherits an archive of nearly two centuries of statements, largely uncatalogued, and sets out to digitise it." },
      { ep: 1, text: "Has three assistants — Tim, Sasha and Martin — whom he sends out to check statements against records." },
      { ep: 1, text: "Reads each statement aloud for the record, then appends his own follow-up notes. His default posture is sceptical: he looks for the mundane explanation first and says so." },
      { ep: 2, text: "Credits whichever assistant did the legwork in his notes, and is willing to record a corroborating detail even when it undercuts his scepticism." },
      { ep: 3, text: "Openly irritated when a statement giver refuses further contact, since it leaves his follow-up unfinished." },
      { ep: 4, text: "Complains at length about the state Gertrude Robinson left the files in — no working catalogue, no cross-referencing." },
      { ep: 4, text: "Declares that tracking down the surviving books from Jurgen Leitner's library is now the Archive's highest priority. It is the first time he treats a thread as worth pursuing for its own sake." },
      { ep: 5, text: "Notes that his predecessor did keep some digital records, though only patchily and by no obvious system." },
      { ep: 6, text: "Reports a statement to the ECDC because of the infection risk it describes — the first time he treats a case as an active public-health matter rather than an archival curiosity." },
      { ep: 7, text: "Finds a statement badly misfiled and is unimpressed. Recognises the name Joseph Rayner without being able to place where from, then returns the case to storage." },
      { ep: 9, text: "Identifies the pendant described in the statement as the symbol of Maxwell Rayner's church, connecting a convicted murderer to an organised cult." },
      { ep: 10, text: "Records that physical evidence submitted with a statement — six shark teeth — is no longer in the Archives, with no record of it leaving." }
    ]
  },
  {
    id: "gertrude-robinson",
    name: "Gertrude Robinson",
    category: "Institute",
    blurbs: [
      { ep: 1, text: "The previous Head Archivist. Recently deceased." },
      { ep: 6, text: "The previous Head Archivist, whose choices about which statements to pursue look less and less arbitrary." }
    ],
    entries: [
      { ep: 1, text: "Held the post of Head Archivist before Jonathan Sims. Died shortly before he took over." },
      { ep: 4, text: "Left the Archive in disarray: statements uncatalogued, no usable index, cross-references absent. Her successor takes this as incompetence." },
      { ep: 5, text: "Did maintain some digital records, inconsistently — so the disorder was not simply a refusal to use computers." },
      { ep: 6, text: "Took no follow-up action at all on a statement describing what her successor considers a serious infection risk. She had the statement and did nothing with it." },
      { ep: 7, text: "Statements are turning up filed in the wrong places, including one of genuine historical interest." }
    ],
    refs: [
      { ep: 6, text: "A pattern is forming across the Archivist's notes: Gertrude investigated some cases thoroughly and ignored others entirely. No stated reason for the split has emerged." }
    ]
  },
  {
    id: "tim",
    name: "Tim",
    category: "Institute",
    blurbs: [{ ep: 1, text: "Research assistant in the Archive. Surname not given in the first ten statements." }],
    entries: [
      { ep: 1, text: "One of the three assistants working under the new Head Archivist." },
      { ep: 2, text: "Traces the courier firm Breekon and Hope and confirms it genuinely existed, operating until 2009 — corroborating a detail from a statement made a decade earlier." },
      { ep: 4, text: "Establishes that skin recovered from Mary Keay's body carried Sanskrit writing, matching the statement giver's description of her tattoos." },
      { ep: 8, text: "Works the property records and local history for the house on Hill Top Road." }
    ]
  },
  {
    id: "sasha",
    name: "Sasha",
    category: "Institute",
    blurbs: [{ ep: 1, text: "Research assistant in the Archive; the one usually sent to the police records." }],
    entries: [
      { ep: 1, text: "Digs through police records and finds six unsolved disappearances around Old Fishmarket Close between 2005 and 2010, loosely consistent with the statement." },
      { ep: 1, text: "Has a missing woman's phone photograph contrast-enhanced, which brings out what may be a beckoning hand in the dark of the alleyway." },
      { ep: 3, text: "Assists with the follow-up on the Patel statement." },
      { ep: 4, text: "With Martin, searches the Institute catalogue for the book Ex Altiora and finds no record of it." },
      { ep: 5, text: "Confirms through police reports that Alan Parfitt is a registered missing person and that the teeth recovered were real." },
      { ep: 8, text: "Researches the history of the Hill Top Road property alongside Tim and Martin." }
    ]
  },
  {
    id: "martin",
    name: "Martin",
    category: "Institute",
    blurbs: [
      { ep: 1, text: "Research assistant in the Archive." },
      { ep: 10, text: "Research assistant; the one who tends to be sent to speak to people in person." }
    ],
    entries: [
      { ep: 1, text: "One of the three assistants working under the new Head Archivist." },
      { ep: 4, text: "Searches the catalogue for Ex Altiora and comes up with nothing." },
      { ep: 5, text: "Re-interviews Kieran Woodward and gets very little, since Woodward has by then rationalised most of what he saw." },
      { ep: 8, text: "Interviews Anna Kasuma for background on the history of Hill Top Road." },
      { ep: 10, text: "Is present when Trevor Herbert dies of lung cancer during the process of giving his statement." }
    ]
  },
  {
    id: "magnus-institute",
    name: "The Magnus Institute",
    category: "Organisation",
    blurbs: [{ ep: 1, text: "A London research body devoted to the paranormal and the esoteric." }],
    entries: [
      { ep: 1, text: "Founded in 1818 in London. Its stated purpose is academic research into paranormal and esoteric phenomena." },
      { ep: 1, text: "Takes statements from members of the public and files them. The Archive holds close to two hundred years of them." },
      { ep: 1, text: "Employs researchers separately from Archive staff; the Archive is treated as a backwater to be tidied up." },
      { ep: 4, text: "Has no catalogue record of a Leitner book brought to its attention, despite the collection's evident significance." },
      { ep: 6, text: "Its Archivist is willing to escalate to an external public-health body when a statement suggests a communicable hazard." },
      { ep: 10, text: "Items submitted as evidence with statements can go missing from the Archives without explanation." }
    ]
  },

  /* -------------------------------------------------------- Statement givers */
  {
    id: "nathan-watts",
    name: "Nathan Watts",
    category: "Statement Giver",
    statement: { ep: 1, ref: "MAG001 — Anglerfish", given: "22 April 2012" },
    blurbs: [{ ep: 1, text: "Biochemistry student at Edinburgh, and the only person known to have walked away from the thing in the close." }],
    entries: [
      { ep: 1, text: "A biochemistry student at the University of Edinburgh, somewhat older than his classmates after taking a gap year." },
      { ep: 1, text: "Walking home drunk around midnight down Old Fishmarket Close, he was addressed from an alleyway by a swaying figure asking repeatedly for a cigarette." },
      { ep: 1, text: "The voice was flat and unvarying, and the figure's mouth never moved while it spoke." },
      { ep: 1, text: "He realised the figure's feet were not touching the ground and that it appeared to be held up from above. When he raised his phone to light it, it was gone." },
      { ep: 1, text: "He walked away and was not harmed, which by the Archive's count makes him unusual." }
    ]
  },
  {
    id: "joshua-gillespie",
    name: "Joshua Gillespie",
    category: "Statement Giver",
    statement: { ep: 2, ref: "MAG002 — Do Not Open", given: "22 November 1998" },
    blurbs: [{ ep: 2, text: "A former architecture student who kept a coffin in his flat for a year and a half." }],
    entries: [
      { ep: 2, text: "A former architecture student. While on holiday in Amsterdam he was offered £10,000 by a man called John simply to store a package." },
      { ep: 2, text: "What eventually arrived at his flat in Bournemouth was a coffin, with the words DO NOT OPEN cut into it, delivered with a key and an instruction never to use it." },
      { ep: 2, text: "Over eighteen months he heard scratching from inside, and moaning when it rained. He began sleepwalking towards the key and had to take measures against himself." },
      { ep: 2, text: "He never opened it. John and the two deliverymen eventually came to collect it; screaming started as they took it away." },
      { ep: 2, text: "Housing records show he was the only tenant in an eight-flat building for the whole of his residency, and the building was demolished soon after he left." }
    ]
  },
  {
    id: "amy-patel",
    name: "Amy Patel",
    category: "Statement Giver",
    statement: { ep: 3, ref: "MAG003 — Across the Street", given: "1 July 2007" },
    blurbs: [{ ep: 3, text: "An associate compliance analyst who watched her neighbour's window, and was watched back." }],
    entries: [
      { ep: 3, text: "Works as an associate compliance analyst. Met Graham Folger on a criminology course at Birkbeck in 2005." },
      { ep: 3, text: "Months later she was pushed into traffic near her home and suffered a head injury. While recovering she discovered Folger lived directly across the street." },
      { ep: 3, text: "She fell into the habit of watching him through his window, and noted his strange preoccupation with notebooks." },
      { ep: 3, text: "In April 2007 she saw something with too many limbs fold itself through his window." },
      { ep: 3, text: "The police found a man in the flat who looked nothing like Folger but produced Folger's passport. He then disposed of Folger's belongings and stood staring at her window every night until she moved." },
      { ep: 3, text: "Her medical records support her account rather than the hallucination theory. She declined any further contact with the Institute." }
    ]
  },
  {
    id: "dominic-swain",
    name: "Dominic Swain",
    category: "Statement Giver",
    statement: { ep: 4, ref: "MAG004 — Pageturner", given: "28 June 2013" },
    blurbs: [{ ep: 4, text: "A West End theatre technician who paid £4 for a Leitner and was paid £5,000 to give it up." }],
    entries: [
      { ep: 4, text: "Works as a theatre technician in London's West End." },
      { ep: 4, text: "In winter 2012 he bought a leather-bound Latin book, Ex Altiora, from an Oxfam shop in Notting Hill for £4. It carried the bookplate of Jurgen Leitner and was illustrated with woodcuts of mountains under empty skies." },
      { ep: 4, text: "Researching the name led him to Pinhole Books in Morden and to Mary Keay." },
      { ep: 4, text: "His book began showing Lichtenberg figures — the branching scars left by lightning — which brought back memories of a childhood friend who had been struck." },
      { ep: 4, text: "Gerard Keay tracked him down, bought the book for £5,000 and burned it in Swain's own flat." }
    ]
  },
  {
    id: "kieran-woodward",
    name: "Kieran Woodward",
    category: "Statement Giver",
    statement: { ep: 5, ref: "MAG005 — Thrown Away", given: "23 February 2009" },
    blurbs: [{ ep: 5, text: "A refuse collector on the Walthamstow round, and the one member of the crew who let it go." }],
    entries: [
      { ep: 5, text: "A refuse collector. Over several months his crew took three bags from outside 93 Lancaster Road, Walthamstow." },
      { ep: 5, text: "The first held over a hundred doll heads. The second, a long strip of paper covered in the same Latin prayer repeated over and over, burned in places. The third held roughly 2,780 human teeth." },
      { ep: 5, text: "After his colleague Alan Parfitt vanished, Woodward received a gift-wrapped bag containing packing peanuts and a metal heart engraved with Parfitt's name." },
      { ep: 5, text: "By the time Martin re-interviewed him he had rationalised most of the events and had little to add." }
    ]
  },
  {
    id: "timothy-hodge",
    name: "Timothy Hodge",
    category: "Statement Giver",
    statement: { ep: 6, ref: "MAG006 — Squirm", given: "9 December 2014" },
    blurbs: [{ ep: 6, text: "A freelance designer from Brixton who burned down his own flat." }],
    entries: [
      { ep: 6, text: "A freelance designer living in Brixton. He met Harriet Lee at a London nightclub in November 2014; she was visibly frightened." },
      { ep: 6, text: "She told him she had been attacked in Archway by a woman in a red dress who stabbed her, and that no wound had been left behind." },
      { ep: 6, text: "After they slept together he felt something moving under her skin. She collapsed in pain, and what was left of her was full of worms." },
      { ep: 6, text: "He set fire to his flat and fled. Police found no human remains and no evidence of arson, though organic matter was recovered." },
      { ep: 6, text: "He could not be found for a re-interview." }
    ]
  },
  {
    id: "clarence-berry",
    name: "Clarence Berry",
    category: "Statement Giver",
    statement: { ep: 7, ref: "MAG007 — The Piper", given: "6 November 1922" },
    blurbs: [{ ep: 7, text: "A staff sergeant with four years at the front, giving his account in 1922." }],
    entries: [
      { ep: 7, text: "A career soldier who served four years and survived a range of injuries." },
      { ep: 7, text: "Served alongside the poet Wilfred Owen during a 1917 offensive near Savy Wood." },
      { ep: 7, text: "Describes something he calls the Piper: music heard before a mortar blast that should have killed Owen." },
      { ep: 7, text: "Reads Owen's later poetry as a record of that encounter rather than as metaphor." }
    ]
  },
  {
    id: "ivo-lensik",
    name: "Ivo Lensik",
    category: "Statement Giver",
    statement: { ep: 8, ref: "MAG008 — Burned Out", given: "13 March 2007" },
    blurbs: [{ ep: 8, text: "A contractor who did the wiring on a new house at Hill Top Road, Oxford." }],
    entries: [
      { ep: 8, text: "A construction contractor hired in November 2006 to do wiring on a newly built house on Hill Top Road, Oxford." },
      { ep: 8, text: "On his third evening a man calling himself Raymond Fielding, the owner, visited and then vanished, leaving burn marks and a smell of burnt hair." },
      { ep: 8, text: "Schizophrenia runs in his family, so he assumed early symptoms and kept working — through phantom heat, the smell of burning, and glimpses of a girl in pigtails." },
      { ep: 8, text: "He felled a large dead tree in the garden and found a wooden box inside it holding an apple, which rotted into spiders." },
      { ep: 8, text: "Father Edwin Burroughs blessed the house and the disturbances appear to have stopped." }
    ]
  },
  {
    id: "julia-montauk",
    name: "Julia Montauk",
    category: "Statement Giver",
    statement: { ep: 9, ref: "MAG009 — A Father's Love", given: "3 December 2002" },
    blurbs: [{ ep: 9, text: "Daughter of the convicted murderer Robert Montauk." }],
    entries: [
      { ep: 9, text: "Daughter of Robert Montauk. Her mother disappeared when she was seven, leaving only a pendant behind." },
      { ep: 9, text: "Her father spent increasing amounts of time in a locked shed and converted a bedroom into a darkroom." },
      { ep: 9, text: "Weeks before his arrest she found photographs of corpses with symbols drawn on their faces, and admitted to him that she had seen them." },
      { ep: 9, text: "That night the streetlights went out one after another, something attacked the house, and she ran to the shed — where she saw her father mid-ritual, with preserved hearts in jars on the shelves around him." },
      { ep: 9, text: "She gave this statement in December 2002, a month after her father's death in prison." }
    ]
  },
  {
    id: "trevor-herbert",
    name: "Trevor Herbert",
    category: "Statement Giver",
    statement: { ep: 10, ref: "MAG010 — Vampire Killer", given: "10 July 2010" },
    blurbs: [{ ep: 10, text: "Homeless, from Manchester, and certain he had spent fifty years killing vampires." }],
    entries: [
      { ep: 10, text: "A homeless man from Manchester, known as Trevor the Tramp, with a heroin addiction and lung cancer." },
      { ep: 10, text: "Claims fifty years of hunting: five kills he was certain about and two he was not." },
      { ep: 10, text: "His first was in 1959. Sylvia McDonald offered him and his brother Nigel shelter; she killed Nigel, and Trevor stabbed and burned her." },
      { ep: 10, text: "In 1968 he killed Robert Arden after finding it preying on a woman, who stabbed it herself and gave him his opening." },
      { ep: 10, text: "In 1982 he killed Alard Dupont, and later understood that Dupont had been an ordinary man." },
      { ep: 10, text: "He died of lung cancer while giving the statement, with Martin present. Six shark teeth were left with the case; the originals later disappeared from the Archives." }
    ]
  },

  /* --------------------------------------------------------------- Subjects */
  {
    id: "jurgen-leitner",
    name: "Jurgen Leitner",
    category: "Subject",
    blurbs: [{ ep: 4, text: "A book collector of the 1990s whose library is now the Archive's stated priority." }],
    entries: [
      { ep: 4, text: "A wealthy collector, active in the 1990s, who assembled a private library of dangerous books." },
      { ep: 4, text: "His volumes are identifiable by his bookplate. They circulate now as ordinary second-hand stock — one turned up in a charity shop for £4." },
      { ep: 4, text: "The Institute holds no catalogue record of the Leitner book brought to its attention, despite the collection's evident significance." },
      { ep: 4, text: "The Archivist makes locating the surviving books the Archive's highest priority." }
    ]
  },
  {
    id: "mary-keay",
    name: "Mary Keay",
    category: "Subject",
    blurbs: [{ ep: 4, text: "Proprietor of Pinhole Books, Morden. Died in 2008." }],
    entries: [
      { ep: 4, text: "An elderly woman who ran Pinhole Books in Morden, and who was covered in tattooed Sanskrit." },
      { ep: 4, text: "Demonstrated a Sanskrit book that produced warped animal bones when passed through shadow." },
      { ep: 4, text: "Died in 2008. Her son Gerard was accused of her murder." },
      { ep: 4, text: "Skin recovered from her body carried Sanskrit writing, confirming the statement giver's account of her tattoos." }
    ]
  },
  {
    id: "gerard-keay",
    name: "Gerard Keay",
    category: "Subject",
    blurbs: [{ ep: 4, text: "Mary Keay's son. Buys Leitner books and destroys them." }],
    entries: [
      { ep: 4, text: "Son of Mary Keay, and accused of her murder in 2008." },
      { ep: 4, text: "Found Dominic Swain without being led there, paid £5,000 for a book bought for £4, and burned it on the spot." },
      { ep: 4, text: "Knows what the books are and appears to be working through them deliberately." }
    ]
  },
  {
    id: "michael-crew",
    name: "Michael Crew",
    category: "Subject",
    blurbs: [{ ep: 4, text: "A childhood friend of Dominic Swain, struck by lightning." }],
    entries: [
      { ep: 4, text: "A childhood friend of Dominic Swain who was struck by lightning." },
      { ep: 4, text: "The Lichtenberg scarring that appeared on Swain's copy of Ex Altiora recalled the marks left on Crew." }
    ]
  },
  {
    id: "jane-prentiss",
    name: "Jane Prentiss",
    category: "Subject",
    aliases: [{ ep: 6, text: "The woman in the red dress" }],
    blurbs: [{ ep: 6, text: "Named by the Archivist as the woman in the red dress. Considered an infection risk." }],
    entries: [
      { ep: 6, text: "Named by the Archivist as the woman in the red dress who attacked Harriet Lee in Archway." },
      { ep: 6, text: "Her attacks leave no wound. What follows is itching, the sense of being followed, an inability to stay at home — and then worms." },
      { ep: 6, text: "The Archivist reported the case to the ECDC on the grounds that whatever she carries is communicable." },
      { ep: 6, text: "Gertrude Robinson had this statement and took no action on it." }
    ]
  },
  {
    id: "harriet-lee",
    name: "Harriet Lee",
    category: "Subject",
    blurbs: [{ ep: 6, text: "An art student from Salisbury, reported missing after November 2014." }],
    entries: [
      { ep: 6, text: "An art student from Salisbury. Attacked while walking home in Archway by a woman in a red dress who stabbed her and left no wound." },
      { ep: 6, text: "Afterwards she could not bear to be at home, felt constantly followed, and itched unbearably." },
      { ep: 6, text: "She died in Timothy Hodge's flat in Brixton. She is on record as missing; no remains were recovered." }
    ]
  },
  {
    id: "graham-folger",
    name: "Graham Folger",
    category: "Subject",
    blurbs: [{ ep: 3, text: "Disappeared from his own flat in April 2007, and was replaced." }],
    entries: [
      { ep: 3, text: "Dark-haired with deep blue eyes; attended Oxford; came into money after his parents died in 2001." },
      { ep: 3, text: "Met Amy Patel on a criminology course at Birkbeck in 2005. They later turned out to live across the street from each other." },
      { ep: 3, text: "Collected notebooks and filled them with writing. One recovered journal contained the same two words repeated throughout: an instruction to keep watching." },
      { ep: 3, text: "Disappeared in April 2007. Old photographs show the dark-haired teenager Patel described; later images do not match." }
    ]
  },
  {
    id: "not-graham",
    name: "The man in Graham Folger's flat",
    category: "Unexplained",
    aliases: [{ ep: 3, text: "Not-Graham" }],
    blurbs: [{ ep: 3, text: "Took Graham Folger's flat, documents and life. Blond, square-faced, wrong." }],
    entries: [
      { ep: 3, text: "Appeared in Folger's flat the night something with too many limbs folded in through the window." },
      { ep: 3, text: "Blond and curly-haired with a square face — physically nothing like Folger — but produced Folger's passport and satisfied the police." },
      { ep: 3, text: "Disposed of Folger's belongings, then stood at the window staring at Amy Patel every night until she moved away." }
    ]
  },
  {
    id: "the-anglerfish",
    name: "The figure in the close",
    category: "Unexplained",
    aliases: [{ ep: 1, text: "The Anglerfish" }],
    blurbs: [{ ep: 1, text: "Something that hangs in an Edinburgh alleyway and asks for a cigarette." }],
    entries: [
      { ep: 1, text: "Encountered off Old Fishmarket Close, Edinburgh. It sways in the dark and asks passers-by for a cigarette in a flat, unchanging voice." },
      { ep: 1, text: "Its mouth does not move when it speaks, and its feet do not reach the ground — it appears to hang from something above." },
      { ep: 1, text: "Six people disappeared in the area between 2005 and 2010. One vanished after the same party Nathan Watts attended; his missing-person photograph showed him carrying the brand of cigarettes the figure asked for." },
      { ep: 1, text: "A photograph taken by another of the missing shows, when contrast-enhanced, what may be a hand beckoning from the dark above the figure." }
    ]
  },
  {
    id: "the-coffin",
    name: "The coffin",
    category: "Unexplained",
    blurbs: [{ ep: 2, text: "A sealed coffin with a warning carved into it, and a key nobody should use." }],
    entries: [
      { ep: 2, text: "Delivered to a flat in Bournemouth by two deliverymen, with DO NOT OPEN cut into it and a key supplied alongside." },
      { ep: 2, text: "Scratching came from inside it. It moaned when it rained. Its custodian began sleepwalking towards the key." },
      { ep: 2, text: "Screaming began when it was finally collected and taken away." }
    ]
  },
  {
    id: "the-piper",
    name: "The Piper",
    category: "Unexplained",
    blurbs: [{ ep: 7, text: "Music heard on the Western Front by men about to die, or not to." }],
    entries: [
      { ep: 7, text: "Named by Clarence Berry for the piping he heard during a 1917 offensive near Savy Wood." },
      { ep: 7, text: "Wilfred Owen heard the music immediately before a mortar blast that should have killed him and did not." },
      { ep: 7, text: "Owen returned to the front in 1918 changed — by Berry's account a markedly more ferocious soldier." }
    ]
  },
  {
    id: "wilfred-owen",
    name: "Wilfred Owen",
    category: "Subject",
    blurbs: [{ ep: 7, text: "War poet, and the man Clarence Berry says heard the Piper." }],
    entries: [
      { ep: 7, text: "An officer and poet who served roughly a year at the front." },
      { ep: 7, text: "Heard the Piper's music before the blast at Savy Wood, survived, and was evacuated to England with severe shell shock." },
      { ep: 7, text: "Returned to the front in 1918 as a changed man. Berry reads his subsequent poetry as documentation of the encounter." },
      { ep: 7, text: "Died on 4 November 1918 crossing a canal — by Berry's account, the same day peace was effectively assured." }
    ]
  },
  {
    id: "joseph-rayner",
    name: "Joseph Rayner",
    category: "Subject",
    blurbs: [{ ep: 7, text: "A dead soldier, known only from his identification tags — and a name the Archivist half-recognises." }],
    entries: [
      { ep: 7, text: "A soldier whose remains lay near Wilfred Owen's position at Savy Wood. He is known from his identification tags and nothing else." },
      { ep: 7, text: "The Archivist recognised the surname on hearing it but could not place where from, and filed the case away." }
    ],
    refs: [
      { ep: 9, text: "Two statements later the Archivist names Maxwell Rayner, a defrocked minister running a church that leaves its symbol on the dead. He does not connect the two aloud." }
    ]
  },
  {
    id: "raymond-fielding",
    name: "Raymond Fielding",
    category: "Subject",
    blurbs: [{ ep: 8, text: "Ran a halfway house on Hill Top Road in the 1960s. Died in the fire there." }],
    entries: [
      { ep: 8, text: "Ran a halfway house for troubled young people on Hill Top Road, Oxford, in the 1960s." },
      { ep: 8, text: "Disappeared, and was later found among the charred remains after the fire there. His right hand was missing." },
      { ep: 8, text: "Presented himself to Ivo Lensik in 2006 as the owner of the new house, then vanished, leaving burn marks and the smell of burnt hair." }
    ]
  },
  {
    id: "agnes-montague",
    name: "Agnes Montague",
    category: "Subject",
    blurbs: [{ ep: 8, text: "Arrived at the Hill Top Road house around the age of eleven and ended up owning it." }],
    entries: [
      { ep: 8, text: "Came to Raymond Fielding's halfway house at about eleven years old, and eventually inherited the property." },
      { ep: 8, text: "A girl in pigtails was among the things Ivo Lensik glimpsed while working on the site." },
      { ep: 8, text: "An Agnes Montague died by suicide in Sheffield on the same day Lensik felled the tree in the garden. She was found with a severed right hand — matching the hand missing from Raymond Fielding's remains." }
    ]
  },
  {
    id: "edwin-burroughs",
    name: "Father Edwin Burroughs",
    category: "Subject",
    blurbs: [{ ep: 8, text: "A Catholic priest and exorcist who blessed the Hill Top Road house." }],
    entries: [
      { ep: 8, text: "A Catholic priest with a sideline in exorcism, brought in by Ivo Lensik." },
      { ep: 8, text: "Performed blessings on the house, after which the disturbances appear to have stopped." }
    ]
  },
  {
    id: "anna-kasuma",
    name: "Anna Kasuma",
    category: "Subject",
    blurbs: [{ ep: 8, text: "A nurse who supplied the local history of Hill Top Road." }],
    entries: [
      { ep: 8, text: "A nurse who provided historical context on Hill Top Road, interviewed by Martin during the follow-up." },
      { ep: 8, text: "Her account was partly confirmed by records, though no news coverage of the original fire could be found." }
    ]
  },
  {
    id: "robert-montauk",
    name: "Robert Montauk",
    category: "Subject",
    blurbs: [{ ep: 9, text: "A police officer who murdered some forty people over five years." }],
    entries: [
      { ep: 9, text: "A police officer who killed roughly forty people over five years before his arrest in 1995." },
      { ep: 9, text: "Kept a locked shed at the bottom of the garden and converted a bedroom into a darkroom. He photographed the dead with symbols drawn on their faces." },
      { ep: 9, text: "His daughter saw him mid-ritual in the shed, cutting out a still-beating heart while chanting, with preserved hearts in jars around him. Forty were later recovered, arranged in patterns of sacred geometry." },
      { ep: 9, text: "The night she saw the photographs, the streetlights outside went out one by one and something attacked the house." },
      { ep: 9, text: "Died in prison on 1 November 2002, stabbed forty-seven times in a locked, unlit cell. No weapon and no culprit were found." }
    ],
    refs: [
      { ep: 9, text: "The Archivist's reading is that Montauk was not acting freely: the killings look like payment rather than appetite." }
    ]
  },
  {
    id: "maxwell-rayner",
    name: "Maxwell Rayner",
    category: "Subject",
    blurbs: [{ ep: 9, text: "Defrocked minister; led the People's Church of the Divine Host. Missing since 1994." }],
    entries: [
      { ep: 9, text: "A defrocked minister who led the People's Church of the Divine Host." },
      { ep: 9, text: "Disappeared in 1994, the year before Robert Montauk's arrest." },
      { ep: 9, text: "The Archivist identifies the pendant worn by Julia Montauk's mother — and by Montauk's final victim — as his church's symbol." },
      { ep: 9, text: "A Detective Rayner phoned Robert Montauk about a new case, which the statement presents as how the killings were assigned." }
    ]
  },
  {
    id: "peoples-church",
    name: "The People's Church of the Divine Host",
    category: "Organisation",
    blurbs: [{ ep: 9, text: "Maxwell Rayner's church. Its symbol turns up on the dead." }],
    entries: [
      { ep: 9, text: "Led by the defrocked minister Maxwell Rayner." },
      { ep: 9, text: "Its pendant was worn by Julia Montauk's mother, who disappeared, and by Christopher Lorne, the last victim found." },
      { ep: 9, text: "The forty hearts recovered from Robert Montauk were laid out according to sacred geometry, implying a doctrine behind the killings rather than a compulsion." }
    ]
  },
  {
    id: "christopher-lorne",
    name: "Christopher Lorne",
    category: "Subject",
    blurbs: [{ ep: 9, text: "The last of Robert Montauk's victims to be found. A member of the church." }],
    entries: [
      { ep: 9, text: "The last victim recovered, and a member of Maxwell Rayner's church." },
      { ep: 9, text: "Wore the same pendant as Julia Montauk's mother, which is what allowed the Archivist to connect the killings to the church." }
    ]
  },
  {
    id: "breekon-and-hope",
    name: "Breekon and Hope",
    category: "Organisation",
    blurbs: [{ ep: 2, text: "A delivery firm that really existed, and the two men who worked for it." }],
    entries: [
      { ep: 2, text: "The courier firm whose two deliverymen — tall and imposing — brought the coffin to Joshua Gillespie's flat and later took it away." },
      { ep: 2, text: "Tim confirmed it was a real courier service, operating until 2009." }
    ]
  },
  {
    id: "john-coffin",
    name: "John",
    category: "Subject",
    blurbs: [{ ep: 2, text: "Paid £10,000 to have a coffin stored, and came back for it." }],
    entries: [
      { ep: 2, text: "A short, unremarkable man from Liverpool who approached Joshua Gillespie in Amsterdam and offered him £10,000 to store a package." },
      { ep: 2, text: "Returned eighteen months later with the two deliverymen to collect the coffin." }
    ]
  },
  {
    id: "alan-parfitt",
    name: "Alan Parfitt",
    category: "Subject",
    blurbs: [{ ep: 5, text: "A refuse truck driver who went looking for whoever was leaving the bags." }],
    entries: [
      { ep: 5, text: "Drove the refuse truck on the Walthamstow round and became fixated on identifying whoever was leaving the bags at 93 Lancaster Road." },
      { ep: 5, text: "Took to watching the street, deteriorated, crashed the truck and lost his job." },
      { ep: 5, text: "Sent Kieran Woodward a final text saying he had found him, and disappeared in August 2009. He remains a registered missing person." },
      { ep: 5, text: "A metal heart engraved with his name was delivered to Woodward, packed in a gift bag." }
    ]
  },
  {
    id: "the-teeth",
    name: "The teeth",
    category: "Unexplained",
    blurbs: [{ ep: 5, text: "Roughly 2,780 human teeth, all identical, matching no dental records." }],
    entries: [
      { ep: 5, text: "About 2,780 human teeth, left in a bin bag outside 93 Lancaster Road, Walthamstow." },
      { ep: 5, text: "Examination found every tooth to be identical, despite appearing at different stages of decay. They match no dental records on file." },
      { ep: 5, text: "The elderly couple actually living at the address knew nothing about any of the bags." }
    ]
  },
  {
    id: "john-fellowes",
    name: "John Fellowes",
    category: "Subject",
    blurbs: [{ ep: 1, text: "Disappeared in Edinburgh in March 2010, after the same party." }],
    entries: [
      { ep: 1, text: "A student who disappeared in March 2010, having attended the same party Nathan Watts was walking home from." },
      { ep: 1, text: "In his missing-person photograph he is carrying Marlboro Reds — the brand the figure in the close asked for." }
    ]
  },
  {
    id: "ashley-dobson",
    name: "Ashley Dobson",
    category: "Subject",
    blurbs: [{ ep: 1, text: "Disappeared in May 2008. Her last photograph shows the alleyway." }],
    entries: [
      { ep: 1, text: "Disappeared in May 2008, one of six unsolved cases near Old Fishmarket Close between 2005 and 2010." },
      { ep: 1, text: "A photograph on her phone shows the same alleyway. Enhanced for contrast, it appears to show a hand beckoning out of the dark." }
    ]
  },
  {
    id: "michael-macaulay",
    name: "Michael MacAulay",
    category: "Subject",
    blurbs: [{ ep: 1, text: "The friend whose celebration Nathan Watts was walking home from." }],
    entries: [
      { ep: 1, text: "A friend of Nathan Watts, celebrating his acceptance onto a Master's programme on the night in question." }
    ]
  },
  {
    id: "katherine-mendes",
    name: "Katherine Mendes",
    category: "Subject",
    blurbs: [{ ep: 4, text: "A theatre actress and friend of Dominic Swain." }],
    entries: [
      { ep: 4, text: "An actress working in the theatre, and a friend of Dominic Swain during the period he owned Ex Altiora." }
    ]
  },
  {
    id: "sylvia-mcdonald",
    name: "Sylvia McDonald",
    category: "Unexplained",
    blurbs: [{ ep: 10, text: "Trevor Herbert's first kill, in 1959, and his brother's killer." }],
    entries: [
      { ep: 10, text: "Offered shelter to Trevor and Nigel Herbert in 1959 and fed on Nigel. She never spoke." },
      { ep: 10, text: "Trevor stabbed and burned her. Records confirm a fire at the address that year." }
    ]
  },
  {
    id: "nigel-herbert",
    name: "Nigel Herbert",
    category: "Subject",
    blurbs: [{ ep: 10, text: "Trevor Herbert's brother, killed in 1959." }],
    entries: [
      { ep: 10, text: "Trevor Herbert's brother. Killed by Sylvia McDonald in 1959, which is where Trevor's fifty years of hunting begin." }
    ]
  },
  {
    id: "robert-arden",
    name: "Robert Arden",
    category: "Unexplained",
    blurbs: [{ ep: 10, text: "Killed by Trevor Herbert in 1968." }],
    entries: [
      { ep: 10, text: "Found preying on a woman in 1968. She stabbed it herself, which gave Trevor Herbert his opening." },
      { ep: 10, text: "A disappearance matching the 1968 account is corroborated by records, though nothing confirms what Arden was." }
    ]
  },
  {
    id: "alard-dupont",
    name: "Alard Dupont",
    category: "Subject",
    blurbs: [{ ep: 10, text: "Killed by Trevor Herbert in 1982. He was not a vampire." }],
    entries: [
      { ep: 10, text: "Killed by Trevor Herbert in 1982 in the belief that he was a vampire. Herbert later came to understand that Dupont had been an ordinary man." }
    ]
  }
];
