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
{c:"jonathan-sims",ep:1,t:"Appointed Head Archivist of the Magnus Institute following the death of his predecessor, Gertrude Robinson. He inherits the post rather than competing for it, and is not told much about how it came to be vacant."},
{c:"jonathan-sims",ep:1,t:"Worked at the Institute as a researcher for four years before the promotion, so he knows the building and its habits without having had any authority in it."},
{c:"jonathan-sims",ep:1,t:"Inherits an archive of nearly two centuries of statements, largely uncatalogued and stored without any system he can identify. His stated plan is to digitise the lot and re-investigate as he goes."},
{c:"jonathan-sims",ep:1,t:"Has three assistants — Tim, Sasha and Martin — whom he sends out to check statements against police records, company registers and news archives. He treats the work as verification rather than investigation."},
{c:"jonathan-sims",ep:1,t:"Reads each statement aloud for the record, then appends his own follow-up notes. The recording is a workaround: some statements will not digitise properly and have to be read onto tape instead."},
{c:"jonathan-sims",ep:1,t:"His default posture is sceptical, and he says so on the record — he looks for the mundane explanation first, and is dismissive when he cannot find one."},
{c:"jonathan-sims",ep:2,t:"Credits whichever assistant did the legwork in his notes, and is willing to record a corroborating detail even when it undercuts his own reading of a case."},
{c:"jonathan-sims",ep:2,t:"Treats a statement from 1998 as worth checking eighteen years later, which is the first sign he regards the archive as live evidence rather than a closed backlog."},
{c:"jonathan-sims",ep:3,t:"Openly irritated when a statement giver refuses further contact. His complaint is procedural — it leaves the follow-up unfinished — rather than any concern for the person."},
{c:"jonathan-sims",ep:3,t:"Prefers a medical explanation where one is available, and is visibly annoyed when the medical records support the witness instead of undermining her."},
{c:"jonathan-sims",ep:4,k:"blurb",t:"Head Archivist, increasingly convinced the Archive has a job to do rather than a backlog to clear."},
{c:"jonathan-sims",ep:4,t:"Complains at length about the state Gertrude Robinson left the files in: no working catalogue, no cross-referencing, and no evident logic to what was kept where."},
{c:"jonathan-sims",ep:4,t:"Declares that tracking down the surviving books from Jurgen Leitner's library is now the Archive's highest priority. It is the first time he treats a thread as worth pursuing for its own sake rather than to close a case."},
{c:"jonathan-sims",ep:4,t:"Assigns the search to all three assistants at once, which is the first time he commits the whole team to a single line of enquiry."},
{c:"jonathan-sims",ep:5,t:"Notes that his predecessor did keep some digital records, though only patchily and by no obvious system — which makes the paper chaos look like a choice rather than a limitation."},
{c:"jonathan-sims",ep:6,t:"Reports a statement to the ECDC because of the infection risk it describes. It is the first time he treats a case as an active public-health matter rather than an archival curiosity."},
{c:"jonathan-sims",ep:6,t:"He is unsettled enough by this one to say so on tape, while still framing his unease as a reasonable response to a possible epidemic."},
{c:"jonathan-sims",ep:7,t:"Finds a statement badly misfiled and is unimpressed — a 1922 account of genuine historical interest, sitting where nobody would ever look for it."},
{c:"jonathan-sims",ep:7,t:"Recognises the name Joseph Rayner on hearing it but cannot place where from, says so aloud, and files the case away without pursuing it."},
{c:"jonathan-sims",ep:8,t:"Accepts a statement's account of a haunted house more readily when a priest is involved, and is candid that this is inconsistent of him."},
{c:"jonathan-sims",ep:9,t:"Identifies the pendant described in the statement as the symbol of Maxwell Rayner's church, connecting a convicted murderer to an organised group rather than a private compulsion."},
{c:"jonathan-sims",ep:9,t:"Argues on tape that Robert Montauk was not killing for pleasure but paying something — the first time he reads a case as a transaction rather than a pathology."},
{c:"jonathan-sims",ep:10,t:"Records that physical evidence submitted with a statement — six shark teeth — is no longer in the Archives, with no record of it leaving and nobody able to account for it."},
{c:"jonathan-sims",ep:10,t:"He notes the loss flatly, as an administrative failure, and does not connect it to anything else."},

{c:"gertrude-robinson",ep:1,k:"blurb",t:"The previous Head Archivist. Recently deceased."},
{c:"gertrude-robinson",ep:1,t:"Held the post of Head Archivist before Jonathan Sims, and died shortly before he took over. The circumstances are not explained to him or to anyone else."},
{c:"gertrude-robinson",ep:1,t:"She left no handover of any kind — no index, no notes on priorities, nothing to indicate what she had been working on."},
{c:"gertrude-robinson",ep:4,t:"Left the Archive in disarray: statements uncatalogued, no usable index, cross-references absent. Her successor takes this as straightforward incompetence."},
{c:"gertrude-robinson",ep:4,t:"There is no Institute record of a Leitner book ever having been brought in, despite the collection's evident significance — which means either she never logged one, or the log is gone."},
{c:"gertrude-robinson",ep:5,t:"Did maintain some digital records, inconsistently and with no discernible pattern. The disorder was not simply a refusal to use computers."},
{c:"gertrude-robinson",ep:6,k:"blurb",t:"The previous Head Archivist, whose choices about which statements to pursue look less and less arbitrary."},
{c:"gertrude-robinson",ep:6,t:"Took no follow-up action at all on a statement describing what her successor considers a serious communicable hazard. She had the account and did nothing traceable with it."},
{c:"gertrude-robinson",ep:6,k:"ref",t:"A pattern is forming across the Archivist's notes: she investigated some cases exhaustively and ignored others entirely. No stated reason for the split has emerged."},
{c:"gertrude-robinson",ep:7,t:"Statements are turning up filed in the wrong places, including one of genuine historical interest that had been sitting somewhere nobody would search."},
{c:"gertrude-robinson",ep:9,t:"The Montauk case was on file throughout her tenure with the cult connection unremarked, which either she missed or chose not to write down."},

{c:"tim",ep:1,k:"blurb",t:"Research assistant in the Archive."},
{c:"tim",ep:1,t:"One of the three assistants working under the new Head Archivist, and the one most often sent to check business and property records."},
{c:"tim",ep:2,t:"Traces the courier firm Breekon and Hope and confirms it genuinely existed, operating until 2009 — corroborating a detail from a statement made a decade earlier."},
{c:"tim",ep:2,t:"His finding is the first time an assistant's legwork supports a statement rather than undermining it, and the Archivist records it without much comment."},
{c:"tim",ep:4,t:"Establishes that skin recovered from Mary Keay's body carried Sanskrit writing, matching the statement giver's description of her tattoos."},
{c:"tim",ep:4,t:"Works the police file on the Keay case, which is how the Sanskrit detail surfaces at all — it is not in any public account."},
{c:"tim",ep:8,t:"Works the property records and local history for the house on Hill Top Road, and turns up the fire and the earlier building on the site."},

{c:"sasha",ep:1,k:"blurb",t:"Research assistant in the Archive; the one usually sent to the police records."},
{c:"sasha",ep:1,t:"Digs through police records and finds six unsolved disappearances around Old Fishmarket Close between 2005 and 2010 — a cluster nobody had connected."},
{c:"sasha",ep:1,t:"Has a missing woman's phone photograph contrast-enhanced, which brings out what may be a beckoning hand in the dark above the alleyway."},
{c:"sasha",ep:1,t:"The enhancement is her own initiative rather than an instruction, which sets the pattern for how she works."},
{c:"sasha",ep:3,t:"Assists on the Patel follow-up, pulling the medical records that turn out to support the witness rather than contradict her."},
{c:"sasha",ep:4,t:"With Martin, searches the Institute catalogue for the book Ex Altiora and finds no record of it — not even a note that it was ever considered."},
{c:"sasha",ep:5,t:"Confirms through police reports that Alan Parfitt is a registered missing person and that the teeth recovered were real and examined."},
{c:"sasha",ep:8,t:"Researches the history of the Hill Top Road property alongside Tim and Martin, working the older records for the site."},

{c:"martin",ep:1,k:"blurb",t:"Research assistant in the Archive."},
{c:"martin",ep:1,t:"One of the three assistants working under the new Head Archivist, and the one most often sent to speak to people rather than to records."},
{c:"martin",ep:4,t:"Searches the catalogue for Ex Altiora and comes up with nothing, which the Archivist treats as a failure of the catalogue rather than of Martin."},
{c:"martin",ep:5,t:"Re-interviews Kieran Woodward and gets very little. By then the man has rationalised most of what he saw, and Martin does not push him."},
{c:"martin",ep:8,t:"Interviews Anna Kasuma for background on the history of Hill Top Road, and gets a fuller local account than the records hold."},
{c:"martin",ep:10,k:"blurb",t:"Research assistant; the one who tends to be sent to speak to people in person."},
{c:"martin",ep:10,t:"Is present when Trevor Herbert dies of lung cancer during the process of giving his statement — the first time a member of Archive staff is in the room for a death."},

{c:"magnus-institute",ep:1,k:"blurb",t:"A London research body devoted to the paranormal and the esoteric."},
{c:"magnus-institute",ep:1,t:"Founded in 1818 in London. Its stated purpose is academic research into paranormal and esoteric phenomena, and it presents itself as a scholarly body."},
{c:"magnus-institute",ep:1,t:"Takes statements from members of the public and files them. The Archive holds close to two hundred years of them, going back to the founding."},
{c:"magnus-institute",ep:1,t:"Employs researchers separately from Archive staff. The Archive is treated internally as a backwater to be tidied up rather than a working department."},
{c:"magnus-institute",ep:1,t:"Some statements cannot be digitised — recording equipment and computers fail around them — and have to be read onto tape by hand."},
{c:"magnus-institute",ep:4,t:"Has no catalogue record of a Leitner book ever reaching it, despite the collection's evident significance to anyone who has heard of it."},
{c:"magnus-institute",ep:6,t:"Its Archivist is willing to escalate to an external public-health body when a statement suggests a communicable hazard, which suggests the Institute is not entirely closed off."},
{c:"magnus-institute",ep:10,t:"Items submitted as evidence with statements can go missing from the Archives without explanation and without a record of removal."},

/* --------------------------------------------------------------- MAG001 */

{c:"nathan-watts",ep:1,k:"blurb",t:"Biochemistry student at Edinburgh, and the only person known to have walked away from the thing in the close."},
{c:"nathan-watts",ep:1,t:"A biochemistry student at the University of Edinburgh, somewhat older than his classmates after taking a gap year, and by his own account not given to imagining things."},
{c:"nathan-watts",ep:1,t:"Walking home drunk around midnight down Old Fishmarket Close after a friend's celebration, he was addressed from an alleyway by a swaying figure asking repeatedly for a cigarette."},
{c:"nathan-watts",ep:1,t:"The voice was flat and unvarying — the same request in the same intonation, over and over, without any of the adjustment a person makes when repeating themselves."},
{c:"nathan-watts",ep:1,t:"The figure's mouth never moved while it spoke. He noticed this before he noticed anything else was wrong."},
{c:"nathan-watts",ep:1,t:"He realised its feet were not touching the ground, and that it appeared to be held up from above rather than standing. When he raised his phone to light it, it was gone."},
{c:"nathan-watts",ep:1,t:"He walked away and was not harmed, which by the Archive's count makes him unusual — six other people in that area did not."},
{c:"nathan-watts",ep:1,t:"He gave the statement two years after the event, which the Archivist notes without drawing any conclusion from it."},

{c:"the-anglerfish",ep:1,k:"blurb",t:"Something that hangs in an Edinburgh alleyway and asks for a cigarette."},
{c:"the-anglerfish",ep:1,k:"alias",t:"The Anglerfish"},
{c:"the-anglerfish",ep:1,t:"Encountered off Old Fishmarket Close, Edinburgh. It sways in the dark at the mouth of an alleyway and asks passers-by for a cigarette in a flat, unchanging voice."},
{c:"the-anglerfish",ep:1,t:"Its mouth does not move when it speaks, and its feet do not reach the ground — it appears to hang from something above, which is where the name comes from."},
{c:"the-anglerfish",ep:1,t:"The lure is specific rather than general: it asks for something small and reasonable, in a way designed to make stopping feel like ordinary politeness."},
{c:"the-anglerfish",ep:1,t:"Six people disappeared in the area between 2005 and 2010. One vanished after the same party Nathan Watts attended, and his missing-person photograph showed him carrying the exact brand the figure asked for."},
{c:"the-anglerfish",ep:1,t:"A photograph taken by another of the missing shows, when contrast-enhanced, what may be a hand beckoning from the dark above the figure."},

{c:"john-fellowes",ep:1,k:"blurb",t:"Disappeared in Edinburgh in March 2010, after the same party."},
{c:"john-fellowes",ep:1,t:"A student who disappeared in March 2010, having attended the same party Nathan Watts was walking home from that night."},
{c:"john-fellowes",ep:1,t:"In his missing-person photograph he is carrying Marlboro Reds — the exact brand the figure in the close asked Watts for, which is the detail that connects the two."},
{c:"john-fellowes",ep:1,t:"His case was never resolved, and nothing in the police file connects it to the other five."},

{c:"ashley-dobson",ep:1,k:"blurb",t:"Disappeared in May 2008. Her last photograph shows the alleyway."},
{c:"ashley-dobson",ep:1,t:"Disappeared in May 2008, one of six unsolved cases clustered near Old Fishmarket Close between 2005 and 2010."},
{c:"ashley-dobson",ep:1,t:"A photograph on her phone shows the same alleyway Watts describes, taken shortly before she vanished."},
{c:"ashley-dobson",ep:1,t:"Enhanced for contrast at Sasha's request, the photograph appears to show a hand beckoning out of the dark above the entrance."},

{c:"michael-macaulay",ep:1,k:"blurb",t:"The friend whose celebration Nathan Watts was walking home from."},
{c:"michael-macaulay",ep:1,t:"A friend of Nathan Watts, celebrating his acceptance onto a Master's programme on the night in question."},
{c:"michael-macaulay",ep:1,t:"His party is the only thing linking Watts to John Fellowes — both men were there, and only one of them got home."},

/* --------------------------------------------------------------- MAG002 */

{c:"joshua-gillespie",ep:2,k:"blurb",t:"A former architecture student who kept a coffin in his flat for a year and a half."},
{c:"joshua-gillespie",ep:2,t:"A former architecture student, travelling in Europe after dropping out. While on holiday in Amsterdam he was approached by a man called John and offered £10,000 simply to store a package."},
{c:"joshua-gillespie",ep:2,t:"The offer was deliberately undemanding: no explanation, no conditions beyond keeping it, and the money paid without argument."},
{c:"joshua-gillespie",ep:2,t:"What eventually arrived at his flat in Bournemouth was a coffin, chained, with the words DO NOT OPEN cut into the lid, delivered with a key and an instruction never to use it."},
{c:"joshua-gillespie",ep:2,t:"Over eighteen months he heard scratching from inside, and a low moaning whenever it rained. Neither ever came at a moment he could show anyone else."},
{c:"joshua-gillespie",ep:2,t:"He began sleepwalking towards the key and had to take measures against himself — moving it, hiding it, and eventually locking himself in at night."},
{c:"joshua-gillespie",ep:2,t:"He never opened it. John and the two deliverymen eventually came to collect it, and screaming started as they carried it out."},
{c:"joshua-gillespie",ep:2,t:"Housing records show he was the only tenant in an eight-flat building for the whole of his residency, which nobody at the time thought worth mentioning to him."},
{c:"joshua-gillespie",ep:2,t:"The building was demolished soon after he left, which removes any possibility of examining the flat."},

{c:"the-coffin",ep:2,k:"blurb",t:"A sealed coffin with a warning carved into it, and a key nobody should use."},
{c:"the-coffin",ep:2,t:"Delivered to a flat in Bournemouth by two deliverymen, chained shut, with DO NOT OPEN cut into the wood and a key supplied alongside it."},
{c:"the-coffin",ep:2,t:"Supplying the key with the warning is the whole of its method: it does not need to be opened by force, only eventually."},
{c:"the-coffin",ep:2,t:"Scratching came from inside it. It moaned when it rained. Its custodian began sleepwalking towards the key without ever deciding to."},
{c:"the-coffin",ep:2,t:"Screaming began when it was finally collected and taken away, which is the only sound anyone else was present for."},

{c:"breekon-and-hope",ep:2,k:"blurb",t:"A delivery firm that really existed, and the two men who worked for it."},
{c:"breekon-and-hope",ep:2,t:"The courier firm whose two deliverymen — tall, heavy-set and unhurried — brought the coffin to Joshua Gillespie's flat and returned eighteen months later to take it away."},
{c:"breekon-and-hope",ep:2,t:"The pair worked as a unit and neither was ever named individually. The firm name is all anyone had."},
{c:"breekon-and-hope",ep:2,t:"Tim confirmed it was a real registered courier service, operating until 2009 — so the detail checks out even where the rest of the account does not."},

{c:"john-coffin",ep:2,k:"blurb",t:"Paid £10,000 to have a coffin stored, and came back for it."},
{c:"john-coffin",ep:2,t:"A short, unremarkable man from Liverpool who approached Joshua Gillespie in an Amsterdam bar and offered him £10,000 to store a package, sight unseen."},
{c:"john-coffin",ep:2,t:"He gave no explanation and asked no questions, and was entirely at ease about handing a large sum to a stranger."},
{c:"john-coffin",ep:2,t:"Returned eighteen months later with the two deliverymen to collect the coffin, on no notice."},

/* --------------------------------------------------------------- MAG003 */

{c:"amy-patel",ep:3,k:"blurb",t:"An associate compliance analyst who watched her neighbour's window, and was watched back."},
{c:"amy-patel",ep:3,t:"Works as an associate compliance analyst. She met Graham Folger on a criminology evening course at Birkbeck in 2005, and the two were friendly without being close."},
{c:"amy-patel",ep:3,t:"Months later she was pushed into traffic near her home and suffered a head injury. She never saw who pushed her, and the incident is on record."},
{c:"amy-patel",ep:3,t:"While recovering, largely housebound, she discovered Folger lived directly across the street — a coincidence she found unsettling rather than pleasant."},
{c:"amy-patel",ep:3,t:"She fell into the habit of watching him through his window, at first idly and then as a fixture of her day, and noted his strange preoccupation with notebooks."},
{c:"amy-patel",ep:3,t:"In April 2007 she saw something with too many limbs fold itself through his window from outside."},
{c:"amy-patel",ep:3,t:"The police found a man in the flat who looked nothing like Folger but produced Folger's passport, and they accepted it."},
{c:"amy-patel",ep:3,t:"He then disposed of Folger's belongings and stood at the window staring at her, every night, until she moved out."},
{c:"amy-patel",ep:3,t:"Her medical records support her account rather than the hallucination theory, which the Archivist notes with some reluctance."},
{c:"amy-patel",ep:3,t:"She declined any further contact with the Institute, and would not be re-interviewed."},

{c:"graham-folger",ep:3,k:"blurb",t:"Disappeared from his own flat in April 2007, and was replaced."},
{c:"graham-folger",ep:3,t:"Dark-haired with deep blue eyes, distinctive enough that Amy Patel recognised him immediately across a street. He attended Oxford and came into money after his parents died in 2001."},
{c:"graham-folger",ep:3,t:"Met Amy Patel on a criminology course at Birkbeck in 2005. Neither realised at the time that they lived opposite one another."},
{c:"graham-folger",ep:3,t:"Collected notebooks compulsively and filled them with writing. One recovered journal contained the same two words repeated throughout — an instruction to keep watching."},
{c:"graham-folger",ep:3,t:"Disappeared in April 2007, the night the thing came through the window. No missing-person case was ever opened, because as far as the records went he was still there."},
{c:"graham-folger",ep:3,t:"Old photographs show the dark-haired teenager Patel described. Photographs taken after April 2007 do not match him at all."},

{c:"not-graham",ep:3,k:"blurb",t:"Took Graham Folger's flat, documents and life. Blond, square-faced, wrong."},
{c:"not-graham",ep:3,k:"alias",t:"Not-Graham"},
{c:"not-graham",ep:3,t:"Appeared in Folger's flat on the night something with too many limbs folded in through the window, and was there when police arrived."},
{c:"not-graham",ep:3,t:"Blond and curly-haired with a square face — physically nothing like Folger — but produced Folger's passport and satisfied the officers without difficulty."},
{c:"not-graham",ep:3,t:"He disposed of Folger's belongings methodically over the following days, in full view of the window opposite."},
{c:"not-graham",ep:3,t:"He then stood at that window staring across at Amy Patel every night until she moved away. He never approached her, and never did anything actionable."},

/* --------------------------------------------------------------- MAG004 */

{c:"dominic-swain",ep:4,k:"blurb",t:"A West End theatre technician who paid £4 for a Leitner and was paid £5,000 to give it up."},
{c:"dominic-swain",ep:4,t:"Works as a theatre technician in London's West End, and describes himself as a casual collector of odd second-hand books rather than an occultist."},
{c:"dominic-swain",ep:4,t:"In winter 2012 he bought a leather-bound Latin book, Ex Altiora, from an Oxfam shop in Notting Hill for £4."},
{c:"dominic-swain",ep:4,t:"It carried the bookplate of Jurgen Leitner and was illustrated with woodcuts of mountains under empty skies — landscapes with nothing in them, which he found harder to look at than he expected."},
{c:"dominic-swain",ep:4,t:"Researching the bookplate led him to Pinhole Books in Morden, and to Mary Keay, who recognised what he had before he finished describing it."},
{c:"dominic-swain",ep:4,t:"His copy began showing Lichtenberg figures — the branching scars left by lightning — appearing on the pages and spreading between readings."},
{c:"dominic-swain",ep:4,t:"The marks brought back memories of a childhood friend who had been struck by lightning, which he had not thought about in years."},
{c:"dominic-swain",ep:4,t:"Gerard Keay tracked him down without being given an address, bought the book for £5,000, and burned it in Swain's own flat while he watched."},

{c:"jurgen-leitner",ep:4,k:"blurb",t:"A book collector of the 1990s whose library is now the Archive's stated priority."},
{c:"jurgen-leitner",ep:4,t:"A wealthy collector, active in the 1990s, who assembled a private library of books that were dangerous in ways their owners rarely understood in advance."},
{c:"jurgen-leitner",ep:4,t:"His volumes are identifiable by his bookplate, which is the only thing they reliably have in common — they are otherwise unremarkable objects."},
{c:"jurgen-leitner",ep:4,t:"The collection is dispersed. Its books circulate now as ordinary second-hand stock, and one turned up in a charity shop for £4."},
{c:"jurgen-leitner",ep:4,t:"The Institute holds no catalogue record of any Leitner book reaching it, which the Archivist finds difficult to explain innocently."},
{c:"jurgen-leitner",ep:4,t:"The Archivist makes locating the surviving books the Archive's highest priority, and assigns all three assistants to it."},

{c:"mary-keay",ep:4,k:"blurb",t:"Proprietor of Pinhole Books, Morden. Died in 2008."},
{c:"mary-keay",ep:4,t:"An elderly woman who ran Pinhole Books in Morden — a shop with very little stock, most of it not for sale."},
{c:"mary-keay",ep:4,t:"She was covered in tattooed Sanskrit, across her arms and further, and made no attempt to hide it from a customer she had just met."},
{c:"mary-keay",ep:4,t:"She knew exactly what Ex Altiora was on sight, and treated Swain's ignorance of it as the interesting part of the transaction."},
{c:"mary-keay",ep:4,t:"Demonstrated a Sanskrit book of her own that produced warped animal bones when passed through shadow — done casually, as a party trick."},
{c:"mary-keay",ep:4,t:"Died in 2008. Her son Gerard was accused of her murder, and the case did not proceed."},
{c:"mary-keay",ep:4,t:"Skin recovered from her body carried Sanskrit writing, confirming the statement giver's account of her tattoos years after the fact."},

{c:"gerard-keay",ep:4,k:"blurb",t:"Mary Keay's son. Buys Leitner books and destroys them."},
{c:"gerard-keay",ep:4,t:"Son of Mary Keay, and accused of her murder in 2008. Tall, black-haired, and unmistakably not there to browse."},
{c:"gerard-keay",ep:4,t:"Found Dominic Swain without being led there — Swain never gave the shop his address, and Keay arrived at his flat regardless."},
{c:"gerard-keay",ep:4,t:"Paid £5,000 for a book bought for £4, in cash, and burned it on the spot rather than taking it away."},
{c:"gerard-keay",ep:4,t:"He knew what the book was, what it was doing, and how to stop it, and was matter-of-fact about all three."},
{c:"gerard-keay",ep:4,t:"He appears to be working through the collection deliberately rather than encountering it by chance."},

{c:"michael-crew",ep:4,k:"blurb",t:"A childhood friend of Dominic Swain, struck by lightning."},
{c:"michael-crew",ep:4,t:"A childhood friend of Dominic Swain who was struck by lightning as a boy and survived it."},
{c:"michael-crew",ep:4,t:"The strike left branching Lichtenberg scarring on him, which is what Swain remembered when the same pattern began appearing on the pages of his book."},
{c:"michael-crew",ep:4,t:"He is mentioned only as a memory here — Swain had lost touch with him long before the book."},

{c:"katherine-mendes",ep:4,k:"blurb",t:"A theatre actress and friend of Dominic Swain."},
{c:"katherine-mendes",ep:4,t:"An actress working in the theatre, and a friend of Dominic Swain during the period he owned Ex Altiora."},
{c:"katherine-mendes",ep:4,t:"She is the person he talked to about the book while he still had it, which is how any of it was witnessed at all."},

/* --------------------------------------------------------------- MAG005 */

{c:"kieran-woodward",ep:5,k:"blurb",t:"A refuse collector on the Walthamstow round, and the one member of the crew who let it go."},
{c:"kieran-woodward",ep:5,t:"A refuse collector working the Walthamstow round. Over several months his crew took three bags from outside 93 Lancaster Road, spaced far enough apart to seem unrelated at first."},
{c:"kieran-woodward",ep:5,t:"The first held over a hundred doll heads, all detached, with nothing else in the bag."},
{c:"kieran-woodward",ep:5,t:"The second held a long strip of paper covered in the same Latin prayer repeated over and over, burned through in places."},
{c:"kieran-woodward",ep:5,t:"The third held roughly 2,780 human teeth, which is the point at which the police became involved."},
{c:"kieran-woodward",ep:5,t:"After his colleague Alan Parfitt vanished, Woodward received a gift-wrapped bag containing packing peanuts and a metal heart engraved with Parfitt's name."},
{c:"kieran-woodward",ep:5,t:"He chose to stop thinking about it, and largely succeeded. By the time Martin re-interviewed him he had rationalised most of it and had little to add."},

{c:"alan-parfitt",ep:5,k:"blurb",t:"A refuse truck driver who went looking for whoever was leaving the bags."},
{c:"alan-parfitt",ep:5,t:"Drove the refuse truck on the Walthamstow round, and became fixated on identifying whoever was leaving the bags at 93 Lancaster Road."},
{c:"alan-parfitt",ep:5,t:"The elderly couple actually living at the address knew nothing about any of it, which he refused to accept."},
{c:"alan-parfitt",ep:5,t:"He took to watching the street on his own time, stopped sleeping properly, and deteriorated visibly over a matter of weeks."},
{c:"alan-parfitt",ep:5,t:"He crashed the truck and lost his job, which removed the last structure from his days and did not stop him watching."},
{c:"alan-parfitt",ep:5,t:"He sent Kieran Woodward a final text saying he had found him, and disappeared in August 2009. He remains a registered missing person."},
{c:"alan-parfitt",ep:5,t:"A metal heart engraved with his name was delivered to Woodward afterwards, packed in a gift bag with packing peanuts."},

{c:"the-teeth",ep:5,k:"blurb",t:"Roughly 2,780 human teeth, all identical, matching no dental records."},
{c:"the-teeth",ep:5,t:"About 2,780 human teeth, left in an ordinary bin bag outside 93 Lancaster Road, Walthamstow."},
{c:"the-teeth",ep:5,t:"Examination found every tooth to be identical to every other, despite appearing at different stages of decay — the same tooth, many times over."},
{c:"the-teeth",ep:5,t:"They match no dental records on file anywhere, so they belong to nobody who has ever been to a dentist."},
{c:"the-teeth",ep:5,t:"The elderly couple living at the address knew nothing about any of the three bags, and no charges were brought."},

/* --------------------------------------------------------------- MAG006 */

{c:"timothy-hodge",ep:6,k:"blurb",t:"A freelance designer from Brixton who burned down his own flat."},
{c:"timothy-hodge",ep:6,t:"A freelance designer living in Brixton. He met Harriet Lee at a London nightclub in November 2014, and noticed she was visibly frightened before they spoke."},
{c:"timothy-hodge",ep:6,t:"She told him she had been attacked in Archway by a woman in a red dress who stabbed her, and that no wound had been left behind at all."},
{c:"timothy-hodge",ep:6,t:"She could not bear to go home, which is how she ended up back at his flat."},
{c:"timothy-hodge",ep:6,t:"After they slept together he felt something moving under her skin, in a way he initially tried to explain away."},
{c:"timothy-hodge",ep:6,t:"She collapsed in pain, and what was left of her came apart into worms."},
{c:"timothy-hodge",ep:6,t:"He set fire to his flat and fled. Police found no human remains and no evidence of arson, though organic matter was recovered from the scene."},
{c:"timothy-hodge",ep:6,t:"He could not be found for a re-interview, and had given no contact details that led anywhere."},

{c:"jane-prentiss",ep:6,k:"blurb",t:"Named by the Archivist as the woman in the red dress. Considered an infection risk."},
{c:"jane-prentiss",ep:6,k:"alias",t:"The woman in the red dress"},
{c:"jane-prentiss",ep:6,t:"Named by the Archivist as the woman in the red dress who attacked Harriet Lee in Archway — a name he has from elsewhere in the files, not from the statement."},
{c:"jane-prentiss",ep:6,t:"Her attacks leave no wound. What follows instead is itching, the sense of being followed, an inability to stay at home — and then worms."},
{c:"jane-prentiss",ep:6,t:"The delay between attack and collapse is days rather than minutes, which is what makes her difficult to connect to anything."},
{c:"jane-prentiss",ep:6,t:"The Archivist reported the case to the ECDC on the grounds that whatever she carries appears to be communicable."},
{c:"jane-prentiss",ep:6,t:"Gertrude Robinson had this statement on file and took no action on it whatsoever."},

{c:"harriet-lee",ep:6,k:"blurb",t:"An art student from Salisbury, reported missing after November 2014."},
{c:"harriet-lee",ep:6,t:"An art student from Salisbury, in London and living alone. She was attacked while walking home in Archway by a woman in a red dress who stabbed her and left no wound."},
{c:"harriet-lee",ep:6,t:"Afterwards she could not bear to be at her own flat, felt constantly followed, and itched unbearably — none of which a doctor could account for."},
{c:"harriet-lee",ep:6,t:"She went out to nightclubs to avoid being alone, which is how she met Timothy Hodge."},
{c:"harriet-lee",ep:6,t:"She died in his flat in Brixton. She is on record as missing rather than dead, because no remains were ever recovered."},

/* --------------------------------------------------------------- MAG007 */

{c:"clarence-berry",ep:7,k:"blurb",t:"A staff sergeant with four years at the front, giving his account in 1922."},
{c:"clarence-berry",ep:7,t:"A career soldier who served four years at the front and survived a range of injuries, giving his statement four years after the armistice."},
{c:"clarence-berry",ep:7,t:"He is unsentimental about the war and dismissive of the idea that he is telling a ghost story."},
{c:"clarence-berry",ep:7,t:"Served alongside the poet Wilfred Owen during a 1917 offensive near Savy Wood, and knew him as an officer rather than a writer."},
{c:"clarence-berry",ep:7,t:"Describes something he calls the Piper: music heard immediately before a mortar blast that should have killed Owen and did not."},
{c:"clarence-berry",ep:7,t:"He is clear that the music came first and the shell second, and that this order matters."},
{c:"clarence-berry",ep:7,t:"He reads Owen's later poetry as a plain record of that encounter rather than as metaphor, which is his reason for giving the statement at all."},

{c:"the-piper",ep:7,k:"blurb",t:"Music heard on the Western Front by men about to die, or not to."},
{c:"the-piper",ep:7,t:"Named by Clarence Berry for the piping he heard during a 1917 offensive near Savy Wood — audible over shelling, from no identifiable direction."},
{c:"the-piper",ep:7,t:"Wilfred Owen heard the music immediately before a mortar blast that should have killed him and did not."},
{c:"the-piper",ep:7,t:"Owen returned to the front in 1918 changed — by Berry's account a markedly more ferocious soldier than the man who left."},
{c:"the-piper",ep:7,t:"Whatever it does, surviving it appears to be the cost rather than the reprieve."},

{c:"wilfred-owen",ep:7,k:"blurb",t:"War poet, and the man Clarence Berry says heard the Piper."},
{c:"wilfred-owen",ep:7,t:"An officer and poet who served roughly a year at the front, and whose reputation rests on work written after 1917."},
{c:"wilfred-owen",ep:7,t:"Heard the Piper's music before the blast at Savy Wood, survived it, and was evacuated to England with severe shell shock."},
{c:"wilfred-owen",ep:7,t:"He returned to the front in 1918 as a changed man, and Berry reads his subsequent poetry as documentation rather than art."},
{c:"wilfred-owen",ep:7,t:"He died on 4 November 1918 crossing a canal — by Berry's account, the same day peace was effectively assured."},

{c:"joseph-rayner",ep:7,k:"blurb",t:"A dead soldier, known only from his identification tags — and a name the Archivist half-recognises."},
{c:"joseph-rayner",ep:7,t:"A soldier whose remains lay near Wilfred Owen's position at Savy Wood. He is known from his identification tags and from nothing else at all."},
{c:"joseph-rayner",ep:7,t:"He has no part in the account beyond being present and dead, which is why the name is easy to pass over."},
{c:"joseph-rayner",ep:7,t:"The Archivist recognised the surname on hearing it, said so aloud, could not place where from, and filed the case away."},
{c:"joseph-rayner",ep:9,k:"ref",t:"Two statements later the Archivist names Maxwell Rayner, a defrocked minister running a church that leaves its symbol on the dead. He does not connect the two aloud."},

/* --------------------------------------------------------------- MAG008 */

{c:"ivo-lensik",ep:8,k:"blurb",t:"A contractor who did the wiring on a new house at Hill Top Road, Oxford."},
{c:"ivo-lensik",ep:8,t:"A construction contractor hired in November 2006 to do wiring on a newly built house on Hill Top Road, Oxford — a new building on an old plot."},
{c:"ivo-lensik",ep:8,t:"On his third evening a man calling himself Raymond Fielding visited, claimed to be the owner, and then was simply not there — leaving burn marks and a smell of burnt hair behind him."},
{c:"ivo-lensik",ep:8,t:"Schizophrenia runs in his family, so he assumed early symptoms and kept working rather than report any of it."},
{c:"ivo-lensik",ep:8,t:"What followed was phantom heat with no source, the smell of burning, and repeated glimpses of a girl in pigtails who was never there when he looked properly."},
{c:"ivo-lensik",ep:8,t:"He felled a large dead tree in the garden and found a wooden box sealed inside the trunk, holding a single apple."},
{c:"ivo-lensik",ep:8,t:"The apple rotted into spiders in front of him, which is the point at which he stopped attributing it to illness."},
{c:"ivo-lensik",ep:8,t:"He brought in Father Edwin Burroughs, who blessed the house, and the disturbances appear to have stopped afterwards."},

{c:"raymond-fielding",ep:8,k:"blurb",t:"Ran a halfway house on Hill Top Road in the 1960s. Died in the fire there."},
{c:"raymond-fielding",ep:8,t:"Ran a halfway house for troubled young people on Hill Top Road, Oxford, through the 1960s."},
{c:"raymond-fielding",ep:8,t:"He disappeared, and was later found among the charred remains after the fire that destroyed the house."},
{c:"raymond-fielding",ep:8,t:"His right hand was missing from the remains, which was never explained at the time."},
{c:"raymond-fielding",ep:8,t:"He presented himself to Ivo Lensik in 2006 as the owner of the new house — four decades after his own death — and then vanished, leaving burn marks and the smell of burnt hair."},

{c:"agnes-montague",ep:8,k:"blurb",t:"Arrived at the Hill Top Road house around the age of eleven and ended up owning it."},
{c:"agnes-montague",ep:8,t:"Came to Raymond Fielding's halfway house at about eleven years old, and eventually inherited the property outright."},
{c:"agnes-montague",ep:8,t:"A girl in pigtails was among the things Ivo Lensik repeatedly glimpsed while working on the site, forty years later."},
{c:"agnes-montague",ep:8,t:"An Agnes Montague died by suicide in Sheffield on the same day Lensik felled the tree in the garden."},
{c:"agnes-montague",ep:8,t:"She was found with a severed right hand — matching the hand missing from Raymond Fielding's remains decades earlier."},

{c:"edwin-burroughs",ep:8,k:"blurb",t:"A Catholic priest and exorcist who blessed the Hill Top Road house."},
{c:"edwin-burroughs",ep:8,t:"A Catholic priest with a sideline in exorcism, brought in by Ivo Lensik on the recommendation of someone who took the problem seriously."},
{c:"edwin-burroughs",ep:8,t:"He performed blessings on the house, and Lensik's disturbances appear to have stopped afterwards."},
{c:"edwin-burroughs",ep:8,t:"He is described only in passing here, as the solution to somebody else's problem."},

{c:"anna-kasuma",ep:8,k:"blurb",t:"A nurse who supplied the local history of Hill Top Road."},
{c:"anna-kasuma",ep:8,t:"A nurse at a local hospital who provided historical context on Hill Top Road, interviewed by Martin during the follow-up."},
{c:"anna-kasuma",ep:8,t:"Her account of the halfway house and the fire was partly confirmed by records."},
{c:"anna-kasuma",ep:8,t:"No news coverage of the original fire could be found at all, which for a fatal house fire is difficult to explain."},

/* --------------------------------------------------------------- MAG009 */

{c:"julia-montauk",ep:9,k:"blurb",t:"Daughter of the convicted murderer Robert Montauk."},
{c:"julia-montauk",ep:9,t:"Daughter of Robert Montauk, and a child throughout the period he was killing. Her mother disappeared when she was seven, leaving only a pendant behind."},
{c:"julia-montauk",ep:9,t:"Her father spent increasing amounts of time in a locked shed at the bottom of the garden, and converted a bedroom into a darkroom she was not allowed into."},
{c:"julia-montauk",ep:9,t:"Weeks before his arrest she got into the darkroom and found photographs of corpses with symbols drawn on their faces."},
{c:"julia-montauk",ep:9,t:"She admitted to him that she had seen them, which she describes as the worst decision of her life."},
{c:"julia-montauk",ep:9,t:"That night the streetlights outside went out one after another, and something attacked the house from outside."},
{c:"julia-montauk",ep:9,t:"She ran to the shed and saw her father mid-ritual, with preserved hearts in jars on the shelves around him."},
{c:"julia-montauk",ep:9,t:"She gave this statement in December 2002, a month after her father's death in prison, and appears to have come to the Institute deliberately rather than been sought out."},

{c:"robert-montauk",ep:9,k:"blurb",t:"A police officer who murdered some forty people over five years."},
{c:"robert-montauk",ep:9,t:"A serving police officer who killed roughly forty people over five years before his arrest in 1995, using the job to stay ahead of the investigation."},
{c:"robert-montauk",ep:9,t:"He kept a locked shed at the bottom of the garden and converted a bedroom into a darkroom, and photographed the dead with symbols drawn on their faces."},
{c:"robert-montauk",ep:9,t:"His daughter saw him mid-ritual in the shed, cutting out a still-beating heart while chanting, with preserved hearts in jars around him."},
{c:"robert-montauk",ep:9,t:"Forty hearts were later recovered, arranged in patterns of sacred geometry rather than simply stored."},
{c:"robert-montauk",ep:9,t:"The night his daughter confronted him, the streetlights went out one by one and something attacked the house — which suggests he was as frightened of something as she was of him."},
{c:"robert-montauk",ep:9,t:"He died in prison on 1 November 2002, stabbed forty-seven times in a locked, unlit cell. No weapon and no culprit were ever found."},
{c:"robert-montauk",ep:9,k:"ref",t:"The Archivist's reading is that Montauk was not acting freely: the killings look like payment rather than appetite."},

{c:"maxwell-rayner",ep:9,k:"blurb",t:"Defrocked minister; led the People's Church of the Divine Host. Missing since 1994."},
{c:"maxwell-rayner",ep:9,t:"A defrocked minister who led the People's Church of the Divine Host, a group small enough to avoid attention and organised enough to leave a mark."},
{c:"maxwell-rayner",ep:9,t:"He disappeared in 1994, the year before Robert Montauk's arrest, and has not been accounted for since."},
{c:"maxwell-rayner",ep:9,t:"The Archivist identifies the pendant worn by Julia Montauk's mother — and by Montauk's final victim — as his church's symbol."},
{c:"maxwell-rayner",ep:9,t:"A Detective Rayner phoned Robert Montauk about a new case shortly before each killing, which the statement presents as how the work was assigned."},

{c:"peoples-church",ep:9,k:"blurb",t:"Maxwell Rayner's church. Its symbol turns up on the dead."},
{c:"peoples-church",ep:9,t:"Led by the defrocked minister Maxwell Rayner, and small enough that no public record of its membership exists."},
{c:"peoples-church",ep:9,t:"Its pendant was worn by Julia Montauk's mother, who disappeared, and by Christopher Lorne, the last victim recovered."},
{c:"peoples-church",ep:9,t:"The forty hearts recovered from Robert Montauk were laid out according to sacred geometry, implying a doctrine behind the killings rather than a compulsion."},
{c:"peoples-church",ep:9,t:"Its symbol is a closed eye, which is the detail that allows the Archivist to connect the case to the church at all."},

{c:"christopher-lorne",ep:9,k:"blurb",t:"The last of Robert Montauk's victims to be found. A member of the church."},
{c:"christopher-lorne",ep:9,t:"The last victim recovered, and a member of Maxwell Rayner's church rather than a stranger to it."},
{c:"christopher-lorne",ep:9,t:"He wore the same pendant as Julia Montauk's mother, which is what allowed the Archivist to connect the killings to the church at all."},
{c:"christopher-lorne",ep:9,t:"That a victim and a disappeared woman wore the same symbol suggests the church was supplying the dead as well as ordering them."},

/* --------------------------------------------------------------- MAG010 */

{c:"trevor-herbert",ep:10,k:"blurb",t:"Homeless, from Manchester, and certain he had spent fifty years killing vampires."},
{c:"trevor-herbert",ep:10,k:"alias",t:"Trevor the Tramp"},
{c:"trevor-herbert",ep:10,t:"A homeless man from Manchester, known as Trevor the Tramp, with a long heroin addiction and advanced lung cancer by the time he gave his statement."},
{c:"trevor-herbert",ep:10,t:"He claims fifty years of hunting: five kills he was certain about and two he was not, and is precise about the distinction."},
{c:"trevor-herbert",ep:10,t:"His first was in 1959. Sylvia McDonald offered him and his brother Nigel shelter for the night; she killed Nigel, and Trevor stabbed and burned her."},
{c:"trevor-herbert",ep:10,t:"In 1968 he killed Robert Arden after finding it preying on a woman. She stabbed it herself first, which is what gave him his opening."},
{c:"trevor-herbert",ep:10,t:"In 1982 he killed Alard Dupont, and came to understand afterwards that Dupont had been an ordinary man."},
{c:"trevor-herbert",ep:10,t:"He does not present any of it as heroic, and is matter-of-fact about the ones he got wrong."},
{c:"trevor-herbert",ep:10,t:"He died of lung cancer while giving the statement, with Martin present."},
{c:"trevor-herbert",ep:10,t:"Six shark teeth were left with the case as evidence. The originals later disappeared from the Archives with no record of removal."},

{c:"sylvia-mcdonald",ep:10,k:"blurb",t:"Trevor Herbert's first kill, in 1959, and his brother's killer."},
{c:"sylvia-mcdonald",ep:10,t:"Offered shelter to Trevor and Nigel Herbert in 1959, in the ordinary way of someone taking in two boys with nowhere to go."},
{c:"sylvia-mcdonald",ep:10,t:"She fed on Nigel. She never spoke once, throughout the entire encounter."},
{c:"sylvia-mcdonald",ep:10,t:"Trevor stabbed and burned her, and records confirm a fire at the address that year."},

{c:"nigel-herbert",ep:10,k:"blurb",t:"Trevor Herbert's brother, killed in 1959."},
{c:"nigel-herbert",ep:10,t:"Trevor Herbert's brother, and the reason he went into the house at all."},
{c:"nigel-herbert",ep:10,t:"Killed by Sylvia McDonald in 1959, which is where Trevor's fifty years of hunting begin."},

{c:"robert-arden",ep:10,k:"blurb",t:"Killed by Trevor Herbert in 1968."},
{c:"robert-arden",ep:10,t:"Found preying on a woman in 1968. She stabbed it herself before Herbert reached them, which gave him his opening."},
{c:"robert-arden",ep:10,t:"A disappearance matching the 1968 account is corroborated by records, though nothing confirms what Arden actually was."},

{c:"alard-dupont",ep:10,k:"blurb",t:"Killed by Trevor Herbert in 1982. He was not a vampire."},
{c:"alard-dupont",ep:10,t:"Killed by Trevor Herbert in 1982 in the belief that he was a vampire."},
{c:"alard-dupont",ep:10,t:"Herbert later came to understand that Dupont had been an ordinary man, and includes him in the count anyway."}

]);
