/* Episode-tagged facts, MAG001–MAG010.
 *
 *   c  character id (must exist in data/characters.js)
 *   ep episode that establishes the fact
 *   t  the text
 *   k  "blurb"  one-line descriptor; latest one at or below the gate wins
 *      "alias"  alternative name
 *      "ref"    a cross-reference the show itself draws
 *      "seen"   the character features but nothing new is established
 *      omitted  an ordinary fact
 *
 * All text is original summary written for this project.
 */

window.TMA_FACTS = (window.TMA_FACTS || []).concat([

/* ------------------------------------------------------------- Institute */

{c:"jonathan-sims",ep:1,k:"blurb",t:"Newly appointed Head Archivist of the Magnus Institute, London."},
{c:"jonathan-sims",ep:1,k:"alias",t:"The Archivist"},
{c:"jonathan-sims",ep:1,k:"alias",t:"Jon"},
{c:"jonathan-sims",ep:1,t:"Appointed Head Archivist of the Magnus Institute following the death of his predecessor, Gertrude Robinson."},
{c:"jonathan-sims",ep:1,t:"Worked at the Institute as a researcher for four years before the promotion."},
{c:"jonathan-sims",ep:1,t:"Inherits an archive of nearly two centuries of statements, largely uncatalogued, and sets out to digitise it."},
{c:"jonathan-sims",ep:1,t:"Has three assistants — Tim, Sasha and Martin — whom he sends out to check statements against records."},
{c:"jonathan-sims",ep:1,t:"Reads each statement aloud for the record, then appends his own follow-up notes. His default posture is sceptical: he looks for the mundane explanation first and says so."},
{c:"jonathan-sims",ep:2,t:"Credits whichever assistant did the legwork in his notes, and is willing to record a corroborating detail even when it undercuts his scepticism."},
{c:"jonathan-sims",ep:3,t:"Openly irritated when a statement giver refuses further contact, since it leaves his follow-up unfinished."},
{c:"jonathan-sims",ep:4,k:"blurb",t:"Head Archivist, increasingly convinced the Archive has a job to do rather than a backlog to clear."},
{c:"jonathan-sims",ep:4,t:"Complains at length about the state Gertrude Robinson left the files in — no working catalogue, no cross-referencing."},
{c:"jonathan-sims",ep:4,t:"Declares that tracking down the surviving books from Jurgen Leitner's library is now the Archive's highest priority. It is the first time he treats a thread as worth pursuing for its own sake."},
{c:"jonathan-sims",ep:5,t:"Notes that his predecessor did keep some digital records, though only patchily and by no obvious system."},
{c:"jonathan-sims",ep:6,t:"Reports a statement to the ECDC because of the infection risk it describes — the first time he treats a case as an active public-health matter rather than an archival curiosity."},
{c:"jonathan-sims",ep:7,t:"Finds a statement badly misfiled and is unimpressed. Recognises the name Joseph Rayner without being able to place where from, then returns the case to storage."},
{c:"jonathan-sims",ep:9,t:"Identifies the pendant described in the statement as the symbol of Maxwell Rayner's church, connecting a convicted murderer to an organised cult."},
{c:"jonathan-sims",ep:10,t:"Records that physical evidence submitted with a statement — six shark teeth — is no longer in the Archives, with no record of it leaving."},

{c:"gertrude-robinson",ep:1,k:"blurb",t:"The previous Head Archivist. Recently deceased."},
{c:"gertrude-robinson",ep:1,t:"Held the post of Head Archivist before Jonathan Sims. Died shortly before he took over."},
{c:"gertrude-robinson",ep:4,t:"Left the Archive in disarray: statements uncatalogued, no usable index, cross-references absent. Her successor takes this as incompetence."},
{c:"gertrude-robinson",ep:5,t:"Did maintain some digital records, inconsistently — so the disorder was not simply a refusal to use computers."},
{c:"gertrude-robinson",ep:6,k:"blurb",t:"The previous Head Archivist, whose choices about which statements to pursue look less and less arbitrary."},
{c:"gertrude-robinson",ep:6,t:"Took no follow-up action at all on a statement describing what her successor considers a serious infection risk. She had the statement and did nothing with it."},
{c:"gertrude-robinson",ep:6,k:"ref",t:"A pattern is forming across the Archivist's notes: Gertrude investigated some cases thoroughly and ignored others entirely. No stated reason for the split has emerged."},
{c:"gertrude-robinson",ep:7,t:"Statements are turning up filed in the wrong places, including one of genuine historical interest."},

{c:"tim",ep:1,k:"blurb",t:"Research assistant in the Archive."},
{c:"tim",ep:1,t:"One of the three assistants working under the new Head Archivist."},
{c:"tim",ep:2,t:"Traces the courier firm Breekon and Hope and confirms it genuinely existed, operating until 2009 — corroborating a detail from a statement made a decade earlier."},
{c:"tim",ep:4,t:"Establishes that skin recovered from Mary Keay's body carried Sanskrit writing, matching the statement giver's description of her tattoos."},
{c:"tim",ep:8,t:"Works the property records and local history for the house on Hill Top Road."},

{c:"sasha",ep:1,k:"blurb",t:"Research assistant in the Archive; the one usually sent to the police records."},
{c:"sasha",ep:1,t:"Digs through police records and finds six unsolved disappearances around Old Fishmarket Close between 2005 and 2010, loosely consistent with the statement."},
{c:"sasha",ep:1,t:"Has a missing woman's phone photograph contrast-enhanced, which brings out what may be a beckoning hand in the dark of the alleyway."},
{c:"sasha",ep:3,t:"Assists with the follow-up on the Patel statement."},
{c:"sasha",ep:4,t:"With Martin, searches the Institute catalogue for the book Ex Altiora and finds no record of it."},
{c:"sasha",ep:5,t:"Confirms through police reports that Alan Parfitt is a registered missing person and that the teeth recovered were real."},
{c:"sasha",ep:8,t:"Researches the history of the Hill Top Road property alongside Tim and Martin."},

{c:"martin",ep:1,k:"blurb",t:"Research assistant in the Archive."},
{c:"martin",ep:1,t:"One of the three assistants working under the new Head Archivist."},
{c:"martin",ep:4,t:"Searches the catalogue for Ex Altiora and comes up with nothing."},
{c:"martin",ep:5,t:"Re-interviews Kieran Woodward and gets very little, since Woodward has by then rationalised most of what he saw."},
{c:"martin",ep:8,t:"Interviews Anna Kasuma for background on the history of Hill Top Road."},
{c:"martin",ep:10,k:"blurb",t:"Research assistant; the one who tends to be sent to speak to people in person."},
{c:"martin",ep:10,t:"Is present when Trevor Herbert dies of lung cancer during the process of giving his statement."},

{c:"magnus-institute",ep:1,k:"blurb",t:"A London research body devoted to the paranormal and the esoteric."},
{c:"magnus-institute",ep:1,t:"Founded in 1818 in London. Its stated purpose is academic research into paranormal and esoteric phenomena."},
{c:"magnus-institute",ep:1,t:"Takes statements from members of the public and files them. The Archive holds close to two hundred years of them."},
{c:"magnus-institute",ep:1,t:"Employs researchers separately from Archive staff; the Archive is treated as a backwater to be tidied up."},
{c:"magnus-institute",ep:4,t:"Has no catalogue record of a Leitner book brought to its attention, despite the collection's evident significance."},
{c:"magnus-institute",ep:6,t:"Its Archivist is willing to escalate to an external public-health body when a statement suggests a communicable hazard."},
{c:"magnus-institute",ep:10,t:"Items submitted as evidence with statements can go missing from the Archives without explanation."},

/* --------------------------------------------------------------- MAG001 */

{c:"nathan-watts",ep:1,k:"blurb",t:"Biochemistry student at Edinburgh, and the only person known to have walked away from the thing in the close."},
{c:"nathan-watts",ep:1,t:"A biochemistry student at the University of Edinburgh, somewhat older than his classmates after taking a gap year."},
{c:"nathan-watts",ep:1,t:"Walking home drunk around midnight down Old Fishmarket Close, he was addressed from an alleyway by a swaying figure asking repeatedly for a cigarette."},
{c:"nathan-watts",ep:1,t:"The voice was flat and unvarying, and the figure's mouth never moved while it spoke."},
{c:"nathan-watts",ep:1,t:"He realised the figure's feet were not touching the ground and that it appeared to be held up from above. When he raised his phone to light it, it was gone."},
{c:"nathan-watts",ep:1,t:"He walked away and was not harmed, which by the Archive's count makes him unusual."},

{c:"the-anglerfish",ep:1,k:"blurb",t:"Something that hangs in an Edinburgh alleyway and asks for a cigarette."},
{c:"the-anglerfish",ep:1,k:"alias",t:"The Anglerfish"},
{c:"the-anglerfish",ep:1,t:"Encountered off Old Fishmarket Close, Edinburgh. It sways in the dark and asks passers-by for a cigarette in a flat, unchanging voice."},
{c:"the-anglerfish",ep:1,t:"Its mouth does not move when it speaks, and its feet do not reach the ground — it appears to hang from something above."},
{c:"the-anglerfish",ep:1,t:"Six people disappeared in the area between 2005 and 2010. One vanished after the same party Nathan Watts attended; his missing-person photograph showed him carrying the brand of cigarettes the figure asked for."},
{c:"the-anglerfish",ep:1,t:"A photograph taken by another of the missing shows, when contrast-enhanced, what may be a hand beckoning from the dark above the figure."},

{c:"john-fellowes",ep:1,k:"blurb",t:"Disappeared in Edinburgh in March 2010, after the same party."},
{c:"john-fellowes",ep:1,t:"A student who disappeared in March 2010, having attended the same party Nathan Watts was walking home from."},
{c:"john-fellowes",ep:1,t:"In his missing-person photograph he is carrying Marlboro Reds — the brand the figure in the close asked for."},

{c:"ashley-dobson",ep:1,k:"blurb",t:"Disappeared in May 2008. Her last photograph shows the alleyway."},
{c:"ashley-dobson",ep:1,t:"Disappeared in May 2008, one of six unsolved cases near Old Fishmarket Close between 2005 and 2010."},
{c:"ashley-dobson",ep:1,t:"A photograph on her phone shows the same alleyway. Enhanced for contrast, it appears to show a hand beckoning out of the dark."},

{c:"michael-macaulay",ep:1,k:"blurb",t:"The friend whose celebration Nathan Watts was walking home from."},
{c:"michael-macaulay",ep:1,t:"A friend of Nathan Watts, celebrating his acceptance onto a Master's programme on the night in question."},

/* --------------------------------------------------------------- MAG002 */

{c:"joshua-gillespie",ep:2,k:"blurb",t:"A former architecture student who kept a coffin in his flat for a year and a half."},
{c:"joshua-gillespie",ep:2,t:"A former architecture student. While on holiday in Amsterdam he was offered £10,000 by a man called John simply to store a package."},
{c:"joshua-gillespie",ep:2,t:"What eventually arrived at his flat in Bournemouth was a coffin, with the words DO NOT OPEN cut into it, delivered with a key and an instruction never to use it."},
{c:"joshua-gillespie",ep:2,t:"Over eighteen months he heard scratching from inside, and moaning when it rained. He began sleepwalking towards the key and had to take measures against himself."},
{c:"joshua-gillespie",ep:2,t:"He never opened it. John and the two deliverymen eventually came to collect it; screaming started as they took it away."},
{c:"joshua-gillespie",ep:2,t:"Housing records show he was the only tenant in an eight-flat building for the whole of his residency, and the building was demolished soon after he left."},

{c:"the-coffin",ep:2,k:"blurb",t:"A sealed coffin with a warning carved into it, and a key nobody should use."},
{c:"the-coffin",ep:2,t:"Delivered to a flat in Bournemouth by two deliverymen, with DO NOT OPEN cut into it and a key supplied alongside."},
{c:"the-coffin",ep:2,t:"Scratching came from inside it. It moaned when it rained. Its custodian began sleepwalking towards the key."},
{c:"the-coffin",ep:2,t:"Screaming began when it was finally collected and taken away."},

{c:"breekon-and-hope",ep:2,k:"blurb",t:"A delivery firm that really existed, and the two men who worked for it."},
{c:"breekon-and-hope",ep:2,t:"The courier firm whose two deliverymen — tall and imposing — brought the coffin to Joshua Gillespie's flat and later took it away."},
{c:"breekon-and-hope",ep:2,t:"Tim confirmed it was a real courier service, operating until 2009."},

{c:"john-coffin",ep:2,k:"blurb",t:"Paid £10,000 to have a coffin stored, and came back for it."},
{c:"john-coffin",ep:2,t:"A short, unremarkable man from Liverpool who approached Joshua Gillespie in Amsterdam and offered him £10,000 to store a package."},
{c:"john-coffin",ep:2,t:"Returned eighteen months later with the two deliverymen to collect the coffin."},

/* --------------------------------------------------------------- MAG003 */

{c:"amy-patel",ep:3,k:"blurb",t:"An associate compliance analyst who watched her neighbour's window, and was watched back."},
{c:"amy-patel",ep:3,t:"Works as an associate compliance analyst. Met Graham Folger on a criminology course at Birkbeck in 2005."},
{c:"amy-patel",ep:3,t:"Months later she was pushed into traffic near her home and suffered a head injury. While recovering she discovered Folger lived directly across the street."},
{c:"amy-patel",ep:3,t:"She fell into the habit of watching him through his window, and noted his strange preoccupation with notebooks."},
{c:"amy-patel",ep:3,t:"In April 2007 she saw something with too many limbs fold itself through his window."},
{c:"amy-patel",ep:3,t:"The police found a man in the flat who looked nothing like Folger but produced Folger's passport. He then disposed of Folger's belongings and stood staring at her window every night until she moved."},
{c:"amy-patel",ep:3,t:"Her medical records support her account rather than the hallucination theory. She declined any further contact with the Institute."},

{c:"graham-folger",ep:3,k:"blurb",t:"Disappeared from his own flat in April 2007, and was replaced."},
{c:"graham-folger",ep:3,t:"Dark-haired with deep blue eyes; attended Oxford; came into money after his parents died in 2001."},
{c:"graham-folger",ep:3,t:"Met Amy Patel on a criminology course at Birkbeck in 2005. They later turned out to live across the street from each other."},
{c:"graham-folger",ep:3,t:"Collected notebooks and filled them with writing. One recovered journal contained the same two words repeated throughout: an instruction to keep watching."},
{c:"graham-folger",ep:3,t:"Disappeared in April 2007. Old photographs show the dark-haired teenager Patel described; later images do not match."},

{c:"not-graham",ep:3,k:"blurb",t:"Took Graham Folger's flat, documents and life. Blond, square-faced, wrong."},
{c:"not-graham",ep:3,k:"alias",t:"Not-Graham"},
{c:"not-graham",ep:3,t:"Appeared in Folger's flat the night something with too many limbs folded in through the window."},
{c:"not-graham",ep:3,t:"Blond and curly-haired with a square face — physically nothing like Folger — but produced Folger's passport and satisfied the police."},
{c:"not-graham",ep:3,t:"Disposed of Folger's belongings, then stood at the window staring at Amy Patel every night until she moved away."},

/* --------------------------------------------------------------- MAG004 */

{c:"dominic-swain",ep:4,k:"blurb",t:"A West End theatre technician who paid £4 for a Leitner and was paid £5,000 to give it up."},
{c:"dominic-swain",ep:4,t:"Works as a theatre technician in London's West End."},
{c:"dominic-swain",ep:4,t:"In winter 2012 he bought a leather-bound Latin book, Ex Altiora, from an Oxfam shop in Notting Hill for £4. It carried the bookplate of Jurgen Leitner and was illustrated with woodcuts of mountains under empty skies."},
{c:"dominic-swain",ep:4,t:"Researching the name led him to Pinhole Books in Morden and to Mary Keay."},
{c:"dominic-swain",ep:4,t:"His book began showing Lichtenberg figures — the branching scars left by lightning — which brought back memories of a childhood friend who had been struck."},
{c:"dominic-swain",ep:4,t:"Gerard Keay tracked him down, bought the book for £5,000 and burned it in Swain's own flat."},

{c:"jurgen-leitner",ep:4,k:"blurb",t:"A book collector of the 1990s whose library is now the Archive's stated priority."},
{c:"jurgen-leitner",ep:4,t:"A wealthy collector, active in the 1990s, who assembled a private library of dangerous books."},
{c:"jurgen-leitner",ep:4,t:"His volumes are identifiable by his bookplate. They circulate now as ordinary second-hand stock — one turned up in a charity shop for £4."},
{c:"jurgen-leitner",ep:4,t:"The Institute holds no catalogue record of the Leitner book brought to its attention, despite the collection's evident significance."},
{c:"jurgen-leitner",ep:4,t:"The Archivist makes locating the surviving books the Archive's highest priority."},

{c:"mary-keay",ep:4,k:"blurb",t:"Proprietor of Pinhole Books, Morden. Died in 2008."},
{c:"mary-keay",ep:4,t:"An elderly woman who ran Pinhole Books in Morden, and who was covered in tattooed Sanskrit."},
{c:"mary-keay",ep:4,t:"Demonstrated a Sanskrit book that produced warped animal bones when passed through shadow."},
{c:"mary-keay",ep:4,t:"Died in 2008. Her son Gerard was accused of her murder."},
{c:"mary-keay",ep:4,t:"Skin recovered from her body carried Sanskrit writing, confirming the statement giver's account of her tattoos."},

{c:"gerard-keay",ep:4,k:"blurb",t:"Mary Keay's son. Buys Leitner books and destroys them."},
{c:"gerard-keay",ep:4,t:"Son of Mary Keay, and accused of her murder in 2008."},
{c:"gerard-keay",ep:4,t:"Found Dominic Swain without being led there, paid £5,000 for a book bought for £4, and burned it on the spot."},
{c:"gerard-keay",ep:4,t:"Knows what the books are and appears to be working through them deliberately."},

{c:"michael-crew",ep:4,k:"blurb",t:"A childhood friend of Dominic Swain, struck by lightning."},
{c:"michael-crew",ep:4,t:"A childhood friend of Dominic Swain who was struck by lightning."},
{c:"michael-crew",ep:4,t:"The Lichtenberg scarring that appeared on Swain's copy of Ex Altiora recalled the marks left on Crew."},

{c:"katherine-mendes",ep:4,k:"blurb",t:"A theatre actress and friend of Dominic Swain."},
{c:"katherine-mendes",ep:4,t:"An actress working in the theatre, and a friend of Dominic Swain during the period he owned Ex Altiora."},

/* --------------------------------------------------------------- MAG005 */

{c:"kieran-woodward",ep:5,k:"blurb",t:"A refuse collector on the Walthamstow round, and the one member of the crew who let it go."},
{c:"kieran-woodward",ep:5,t:"A refuse collector. Over several months his crew took three bags from outside 93 Lancaster Road, Walthamstow."},
{c:"kieran-woodward",ep:5,t:"The first held over a hundred doll heads. The second, a long strip of paper covered in the same Latin prayer repeated over and over, burned in places. The third held roughly 2,780 human teeth."},
{c:"kieran-woodward",ep:5,t:"After his colleague Alan Parfitt vanished, Woodward received a gift-wrapped bag containing packing peanuts and a metal heart engraved with Parfitt's name."},
{c:"kieran-woodward",ep:5,t:"By the time Martin re-interviewed him he had rationalised most of the events and had little to add."},

{c:"alan-parfitt",ep:5,k:"blurb",t:"A refuse truck driver who went looking for whoever was leaving the bags."},
{c:"alan-parfitt",ep:5,t:"Drove the refuse truck on the Walthamstow round and became fixated on identifying whoever was leaving the bags at 93 Lancaster Road."},
{c:"alan-parfitt",ep:5,t:"Took to watching the street, deteriorated, crashed the truck and lost his job."},
{c:"alan-parfitt",ep:5,t:"Sent Kieran Woodward a final text saying he had found him, and disappeared in August 2009. He remains a registered missing person."},
{c:"alan-parfitt",ep:5,t:"A metal heart engraved with his name was delivered to Woodward, packed in a gift bag."},

{c:"the-teeth",ep:5,k:"blurb",t:"Roughly 2,780 human teeth, all identical, matching no dental records."},
{c:"the-teeth",ep:5,t:"About 2,780 human teeth, left in a bin bag outside 93 Lancaster Road, Walthamstow."},
{c:"the-teeth",ep:5,t:"Examination found every tooth to be identical, despite appearing at different stages of decay. They match no dental records on file."},
{c:"the-teeth",ep:5,t:"The elderly couple actually living at the address knew nothing about any of the bags."},

/* --------------------------------------------------------------- MAG006 */

{c:"timothy-hodge",ep:6,k:"blurb",t:"A freelance designer from Brixton who burned down his own flat."},
{c:"timothy-hodge",ep:6,t:"A freelance designer living in Brixton. He met Harriet Lee at a London nightclub in November 2014; she was visibly frightened."},
{c:"timothy-hodge",ep:6,t:"She told him she had been attacked in Archway by a woman in a red dress who stabbed her, and that no wound had been left behind."},
{c:"timothy-hodge",ep:6,t:"After they slept together he felt something moving under her skin. She collapsed in pain, and what was left of her was full of worms."},
{c:"timothy-hodge",ep:6,t:"He set fire to his flat and fled. Police found no human remains and no evidence of arson, though organic matter was recovered."},
{c:"timothy-hodge",ep:6,t:"He could not be found for a re-interview."},

{c:"jane-prentiss",ep:6,k:"blurb",t:"Named by the Archivist as the woman in the red dress. Considered an infection risk."},
{c:"jane-prentiss",ep:6,k:"alias",t:"The woman in the red dress"},
{c:"jane-prentiss",ep:6,t:"Named by the Archivist as the woman in the red dress who attacked Harriet Lee in Archway."},
{c:"jane-prentiss",ep:6,t:"Her attacks leave no wound. What follows is itching, the sense of being followed, an inability to stay at home — and then worms."},
{c:"jane-prentiss",ep:6,t:"The Archivist reported the case to the ECDC on the grounds that whatever she carries is communicable."},
{c:"jane-prentiss",ep:6,t:"Gertrude Robinson had this statement and took no action on it."},

{c:"harriet-lee",ep:6,k:"blurb",t:"An art student from Salisbury, reported missing after November 2014."},
{c:"harriet-lee",ep:6,t:"An art student from Salisbury. Attacked while walking home in Archway by a woman in a red dress who stabbed her and left no wound."},
{c:"harriet-lee",ep:6,t:"Afterwards she could not bear to be at home, felt constantly followed, and itched unbearably."},
{c:"harriet-lee",ep:6,t:"She died in Timothy Hodge's flat in Brixton. She is on record as missing; no remains were recovered."},

/* --------------------------------------------------------------- MAG007 */

{c:"clarence-berry",ep:7,k:"blurb",t:"A staff sergeant with four years at the front, giving his account in 1922."},
{c:"clarence-berry",ep:7,t:"A career soldier who served four years and survived a range of injuries."},
{c:"clarence-berry",ep:7,t:"Served alongside the poet Wilfred Owen during a 1917 offensive near Savy Wood."},
{c:"clarence-berry",ep:7,t:"Describes something he calls the Piper: music heard before a mortar blast that should have killed Owen."},
{c:"clarence-berry",ep:7,t:"Reads Owen's later poetry as a record of that encounter rather than as metaphor."},

{c:"the-piper",ep:7,k:"blurb",t:"Music heard on the Western Front by men about to die, or not to."},
{c:"the-piper",ep:7,t:"Named by Clarence Berry for the piping he heard during a 1917 offensive near Savy Wood."},
{c:"the-piper",ep:7,t:"Wilfred Owen heard the music immediately before a mortar blast that should have killed him and did not."},
{c:"the-piper",ep:7,t:"Owen returned to the front in 1918 changed — by Berry's account a markedly more ferocious soldier."},

{c:"wilfred-owen",ep:7,k:"blurb",t:"War poet, and the man Clarence Berry says heard the Piper."},
{c:"wilfred-owen",ep:7,t:"An officer and poet who served roughly a year at the front."},
{c:"wilfred-owen",ep:7,t:"Heard the Piper's music before the blast at Savy Wood, survived, and was evacuated to England with severe shell shock."},
{c:"wilfred-owen",ep:7,t:"Returned to the front in 1918 as a changed man. Berry reads his subsequent poetry as documentation of the encounter."},
{c:"wilfred-owen",ep:7,t:"Died on 4 November 1918 crossing a canal — by Berry's account, the same day peace was effectively assured."},

{c:"joseph-rayner",ep:7,k:"blurb",t:"A dead soldier, known only from his identification tags — and a name the Archivist half-recognises."},
{c:"joseph-rayner",ep:7,t:"A soldier whose remains lay near Wilfred Owen's position at Savy Wood. He is known from his identification tags and nothing else."},
{c:"joseph-rayner",ep:7,t:"The Archivist recognised the surname on hearing it but could not place where from, and filed the case away."},
{c:"joseph-rayner",ep:9,k:"ref",t:"Two statements later the Archivist names Maxwell Rayner, a defrocked minister running a church that leaves its symbol on the dead. He does not connect the two aloud."},

/* --------------------------------------------------------------- MAG008 */

{c:"ivo-lensik",ep:8,k:"blurb",t:"A contractor who did the wiring on a new house at Hill Top Road, Oxford."},
{c:"ivo-lensik",ep:8,t:"A construction contractor hired in November 2006 to do wiring on a newly built house on Hill Top Road, Oxford."},
{c:"ivo-lensik",ep:8,t:"On his third evening a man calling himself Raymond Fielding, the owner, visited and then vanished, leaving burn marks and a smell of burnt hair."},
{c:"ivo-lensik",ep:8,t:"Schizophrenia runs in his family, so he assumed early symptoms and kept working — through phantom heat, the smell of burning, and glimpses of a girl in pigtails."},
{c:"ivo-lensik",ep:8,t:"He felled a large dead tree in the garden and found a wooden box inside it holding an apple, which rotted into spiders."},
{c:"ivo-lensik",ep:8,t:"Father Edwin Burroughs blessed the house and the disturbances appear to have stopped."},

{c:"raymond-fielding",ep:8,k:"blurb",t:"Ran a halfway house on Hill Top Road in the 1960s. Died in the fire there."},
{c:"raymond-fielding",ep:8,t:"Ran a halfway house for troubled young people on Hill Top Road, Oxford, in the 1960s."},
{c:"raymond-fielding",ep:8,t:"Disappeared, and was later found among the charred remains after the fire there. His right hand was missing."},
{c:"raymond-fielding",ep:8,t:"Presented himself to Ivo Lensik in 2006 as the owner of the new house, then vanished, leaving burn marks and the smell of burnt hair."},

{c:"agnes-montague",ep:8,k:"blurb",t:"Arrived at the Hill Top Road house around the age of eleven and ended up owning it."},
{c:"agnes-montague",ep:8,t:"Came to Raymond Fielding's halfway house at about eleven years old, and eventually inherited the property."},
{c:"agnes-montague",ep:8,t:"A girl in pigtails was among the things Ivo Lensik glimpsed while working on the site."},
{c:"agnes-montague",ep:8,t:"An Agnes Montague died by suicide in Sheffield on the same day Lensik felled the tree in the garden. She was found with a severed right hand — matching the hand missing from Raymond Fielding's remains."},

{c:"edwin-burroughs",ep:8,k:"blurb",t:"A Catholic priest and exorcist who blessed the Hill Top Road house."},
{c:"edwin-burroughs",ep:8,t:"A Catholic priest with a sideline in exorcism, brought in by Ivo Lensik."},
{c:"edwin-burroughs",ep:8,t:"Performed blessings on the house, after which the disturbances appear to have stopped."},

{c:"anna-kasuma",ep:8,k:"blurb",t:"A nurse who supplied the local history of Hill Top Road."},
{c:"anna-kasuma",ep:8,t:"A nurse who provided historical context on Hill Top Road, interviewed by Martin during the follow-up."},
{c:"anna-kasuma",ep:8,t:"Her account was partly confirmed by records, though no news coverage of the original fire could be found."},

/* --------------------------------------------------------------- MAG009 */

{c:"julia-montauk",ep:9,k:"blurb",t:"Daughter of the convicted murderer Robert Montauk."},
{c:"julia-montauk",ep:9,t:"Daughter of Robert Montauk. Her mother disappeared when she was seven, leaving only a pendant behind."},
{c:"julia-montauk",ep:9,t:"Her father spent increasing amounts of time in a locked shed and converted a bedroom into a darkroom."},
{c:"julia-montauk",ep:9,t:"Weeks before his arrest she found photographs of corpses with symbols drawn on their faces, and admitted to him that she had seen them."},
{c:"julia-montauk",ep:9,t:"That night the streetlights went out one after another, something attacked the house, and she ran to the shed — where she saw her father mid-ritual, with preserved hearts in jars on the shelves around him."},
{c:"julia-montauk",ep:9,t:"She gave this statement in December 2002, a month after her father's death in prison."},

{c:"robert-montauk",ep:9,k:"blurb",t:"A police officer who murdered some forty people over five years."},
{c:"robert-montauk",ep:9,t:"A police officer who killed roughly forty people over five years before his arrest in 1995."},
{c:"robert-montauk",ep:9,t:"Kept a locked shed at the bottom of the garden and converted a bedroom into a darkroom. He photographed the dead with symbols drawn on their faces."},
{c:"robert-montauk",ep:9,t:"His daughter saw him mid-ritual in the shed, cutting out a still-beating heart while chanting, with preserved hearts in jars around him. Forty were later recovered, arranged in patterns of sacred geometry."},
{c:"robert-montauk",ep:9,t:"The night she saw the photographs, the streetlights outside went out one by one and something attacked the house."},
{c:"robert-montauk",ep:9,t:"Died in prison on 1 November 2002, stabbed forty-seven times in a locked, unlit cell. No weapon and no culprit were found."},
{c:"robert-montauk",ep:9,k:"ref",t:"The Archivist's reading is that Montauk was not acting freely: the killings look like payment rather than appetite."},

{c:"maxwell-rayner",ep:9,k:"blurb",t:"Defrocked minister; led the People's Church of the Divine Host. Missing since 1994."},
{c:"maxwell-rayner",ep:9,t:"A defrocked minister who led the People's Church of the Divine Host."},
{c:"maxwell-rayner",ep:9,t:"Disappeared in 1994, the year before Robert Montauk's arrest."},
{c:"maxwell-rayner",ep:9,t:"The Archivist identifies the pendant worn by Julia Montauk's mother — and by Montauk's final victim — as his church's symbol."},
{c:"maxwell-rayner",ep:9,t:"A Detective Rayner phoned Robert Montauk about a new case, which the statement presents as how the killings were assigned."},

{c:"peoples-church",ep:9,k:"blurb",t:"Maxwell Rayner's church. Its symbol turns up on the dead."},
{c:"peoples-church",ep:9,t:"Led by the defrocked minister Maxwell Rayner."},
{c:"peoples-church",ep:9,t:"Its pendant was worn by Julia Montauk's mother, who disappeared, and by Christopher Lorne, the last victim found."},
{c:"peoples-church",ep:9,t:"The forty hearts recovered from Robert Montauk were laid out according to sacred geometry, implying a doctrine behind the killings rather than a compulsion."},

{c:"christopher-lorne",ep:9,k:"blurb",t:"The last of Robert Montauk's victims to be found. A member of the church."},
{c:"christopher-lorne",ep:9,t:"The last victim recovered, and a member of Maxwell Rayner's church."},
{c:"christopher-lorne",ep:9,t:"Wore the same pendant as Julia Montauk's mother, which is what allowed the Archivist to connect the killings to the church."},

/* --------------------------------------------------------------- MAG010 */

{c:"trevor-herbert",ep:10,k:"blurb",t:"Homeless, from Manchester, and certain he had spent fifty years killing vampires."},
{c:"trevor-herbert",ep:10,k:"alias",t:"Trevor the Tramp"},
{c:"trevor-herbert",ep:10,t:"A homeless man from Manchester, known as Trevor the Tramp, with a heroin addiction and lung cancer."},
{c:"trevor-herbert",ep:10,t:"Claims fifty years of hunting: five kills he was certain about and two he was not."},
{c:"trevor-herbert",ep:10,t:"His first was in 1959. Sylvia McDonald offered him and his brother Nigel shelter; she killed Nigel, and Trevor stabbed and burned her."},
{c:"trevor-herbert",ep:10,t:"In 1968 he killed Robert Arden after finding it preying on a woman, who stabbed it herself and gave him his opening."},
{c:"trevor-herbert",ep:10,t:"In 1982 he killed Alard Dupont, and later understood that Dupont had been an ordinary man."},
{c:"trevor-herbert",ep:10,t:"He died of lung cancer while giving the statement, with Martin present. Six shark teeth were left with the case; the originals later disappeared from the Archives."},

{c:"sylvia-mcdonald",ep:10,k:"blurb",t:"Trevor Herbert's first kill, in 1959, and his brother's killer."},
{c:"sylvia-mcdonald",ep:10,t:"Offered shelter to Trevor and Nigel Herbert in 1959 and fed on Nigel. She never spoke."},
{c:"sylvia-mcdonald",ep:10,t:"Trevor stabbed and burned her. Records confirm a fire at the address that year."},

{c:"nigel-herbert",ep:10,k:"blurb",t:"Trevor Herbert's brother, killed in 1959."},
{c:"nigel-herbert",ep:10,t:"Trevor Herbert's brother. Killed by Sylvia McDonald in 1959, which is where Trevor's fifty years of hunting begin."},

{c:"robert-arden",ep:10,k:"blurb",t:"Killed by Trevor Herbert in 1968."},
{c:"robert-arden",ep:10,t:"Found preying on a woman in 1968. She stabbed it herself, which gave Trevor Herbert his opening."},
{c:"robert-arden",ep:10,t:"A disappearance matching the 1968 account is corroborated by records, though nothing confirms what Arden was."},

{c:"alard-dupont",ep:10,k:"blurb",t:"Killed by Trevor Herbert in 1982. He was not a vampire."},
{c:"alard-dupont",ep:10,t:"Killed by Trevor Herbert in 1982 in the belief that he was a vampire. Herbert later came to understand that Dupont had been an ordinary man."}

]);
