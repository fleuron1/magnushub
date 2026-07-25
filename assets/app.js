/* The Magnus Archive — spoiler-safe character reader
 *
 * The gate is the episode you are CURRENTLY ON. Everything from earlier
 * episodes is revealed; the selected episode itself is not, because you have
 * not finished it yet. So at MAG010 you see the Archive as it stood after
 * MAG009.
 *
 * Characters who already exist and who feature in the episode you are on get
 * highlighted — a cast list for what you are about to hear. Characters who
 * first appear in that episode stay hidden, since naming them would spoil it.
 */
(function () {
  "use strict";

  var EPISODES = window.TMA_EPISODES || [];
  var FACTS = window.TMA_FACTS || [];
  var ROSTER = window.TMA_CHARACTERS || [];
  var MAX_EP = EPISODES.length;

  var CATEGORY_ORDER = [
    "Institute",
    "Statement Giver",
    "Subject",
    "Unexplained",
    "Organisation"
  ];

  /* ------------------------------------------------------- index the data */

  var BY_ID = {};
  ROSTER.forEach(function (c) {
    BY_ID[c.id] = {
      meta: c,
      facts: [],   // { ep, t }
      blurbs: [],
      aliases: [],
      refs: [],
      eps: {},     // episode -> true, every episode they feature in
      debut: Infinity
    };
  });

  FACTS.forEach(function (f) {
    var rec = BY_ID[f.c];
    if (!rec) return;                       // fact for an unknown id: ignore
    var row = { ep: f.ep, t: f.t };
    if (f.k === "blurb") rec.blurbs.push(row);
    else if (f.k === "alias") rec.aliases.push(row);
    else if (f.k === "ref") rec.refs.push(row);
    else if (f.k !== "seen") rec.facts.push(row);

    rec.eps[f.ep] = true;
    if (f.ep < rec.debut) rec.debut = f.ep;
  });

  var CHARACTERS = ROSTER
    .map(function (c) { return BY_ID[c.id]; })
    .filter(function (r) { return r.debut !== Infinity; });

  [BY_ID].forEach(function (m) {
    Object.keys(m).forEach(function (k) {
      ["facts", "blurbs", "aliases", "refs"].forEach(function (list) {
        m[k][list].sort(function (a, b) { return a.ep - b.ep; });
      });
    });
  });

  /* ---------------------------------------------------------------- state */

  var state = {
    ep: 1,           // the episode you are currently on
    done: false,     // have you finished it? if so it unseals
    id: null,
    view: "profile", // "profile" | "log"
    query: "",
    cats: []
  };

  var el = {};
  ["episodeRange", "gateEpisode", "gateTitle", "gateReveal", "tickRow", "epPrev",
   "epNext", "search", "filterRow", "charList", "indexEmpty", "profile",
   "timelineBtn", "themeToggle", "doneToggle", "gateKicker"].forEach(function (id) {
    el[id] = document.getElementById(id);
  });

  /* -------------------------------------------------------------- helpers */

  function pad(n) { return "MAG" + String(n).padStart(3, "0"); }

  function episode(n) {
    for (var i = 0; i < EPISODES.length; i++) {
      if (EPISODES[i].num === n) return EPISODES[i];
    }
    return null;
  }

  // Everything before the episode you are on — plus that episode itself once
  // you tick "finished", which is the only way MAG200's own content unseals.
  function reveal() { return state.done ? state.ep : state.ep - 1; }

  function upTo(list, ep) {
    return list.filter(function (e) { return e.ep <= ep; });
  }

  function isKnown(rec) { return rec.debut <= reveal(); }

  // Already introduced, and turns up again in the episode you are on.
  function isFeatured(rec) {
    return isKnown(rec) && !!rec.eps[state.ep];
  }

  function blurbFor(rec) {
    var ok = upTo(rec.blurbs, reveal());
    return ok.length ? ok[ok.length - 1].t : "";
  }

  function node(tag, cls, str) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (str != null) n.textContent = str;
    return n;
  }

  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }

  /* ----------------------------------------------------------- hash state */

  function readHash() {
    var h = window.location.hash.replace(/^#/, "");
    if (!h) return;
    // The hash is the whole state, so an absent key means off — otherwise
    // navigating from a done=1 URL to one without it leaves the flag stuck on.
    state.done = false;
    h.split("/").forEach(function (part) {
      var kv = part.split("=");
      if (kv.length !== 2) return;
      if (kv[0] === "ep") {
        var n = parseInt(kv[1], 10);
        if (n >= 1 && n <= MAX_EP) state.ep = n;
      }
      if (kv[0] === "done") state.done = kv[1] === "1";
      if (kv[0] === "c") {
        if (kv[1] === "log") { state.view = "log"; state.id = null; }
        else if (kv[1]) { state.id = kv[1]; state.view = "profile"; }
      }
    });
  }

  var writingHash = false;
  function writeHash() {
    var h = "#ep=" + state.ep + (state.done ? "/done=1" : "") +
            "/c=" + (state.view === "log" ? "log" : (state.id || ""));
    if ("#" + window.location.hash.replace(/^#/, "") === h) return;
    writingHash = true;
    window.history.replaceState(null, "", h);
    writingHash = false;
  }

  /* ----------------------------------------------------------------- gate */

  function renderGate() {
    var e = episode(state.ep);
    el.episodeRange.value = state.ep;
    el.gateEpisode.textContent = pad(state.ep);
    el.gateTitle.textContent = e ? e.title : "";
    el.epPrev.disabled = state.ep <= 1;
    el.epNext.disabled = state.ep >= MAX_EP;

    el.gateReveal.textContent = reveal() < 1
      ? "nothing revealed yet"
      : "revealed through " + pad(reveal());

    el.gateKicker.textContent = state.done ? "Finished" : "Currently on";
    el.doneToggle.setAttribute("aria-pressed", state.done ? "true" : "false");
    el.doneToggle.classList.toggle("on", state.done);
    el.doneToggle.title = state.done
      ? "Unticked, " + pad(state.ep) + " reseals"
      : "Tick once you have finished " + pad(state.ep);
  }

  function buildTicks() {
    // A tick every 10 episodes once the run is long, otherwise every episode.
    var step = MAX_EP > 20 ? 10 : 1;
    for (var n = step; n <= MAX_EP; n += step) {
      (function (num) {
        var s = node("span", null, String(num));
        s.setAttribute("role", "button");
        s.setAttribute("tabindex", "0");
        s.title = pad(num);
        s.dataset.ep = num;
        s.addEventListener("click", function () { setEp(num); });
        s.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setEp(num); }
        });
        el.tickRow.appendChild(s);
      })(n);
    }
  }

  function setEp(n) {
    n = Math.max(1, Math.min(MAX_EP, n));
    if (n === state.ep) return;
    state.ep = n;
    render();
  }

  /* ---------------------------------------------------------------- index */

  function buildFilters() {
    CATEGORY_ORDER.forEach(function (cat) {
      var b = node("button", "chip", cat === "Statement Giver" ? "Statements" : cat);
      b.type = "button";
      b.dataset.cat = cat;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        var i = state.cats.indexOf(cat);
        if (i === -1) state.cats.push(cat); else state.cats.splice(i, 1);
        render();
      });
      el.filterRow.appendChild(b);
    });
  }

  function matches(rec) {
    if (state.cats.length && state.cats.indexOf(rec.meta.category) === -1) return false;
    if (!state.query) return true;
    var q = state.query.toLowerCase();
    if (rec.meta.name.toLowerCase().indexOf(q) !== -1) return true;
    var al = upTo(rec.aliases, reveal());
    for (var i = 0; i < al.length; i++) {
      if (al[i].t.toLowerCase().indexOf(q) !== -1) return true;
    }
    return blurbFor(rec).toLowerCase().indexOf(q) !== -1;
  }

  function renderIndex() {
    clear(el.charList);

    var known = CHARACTERS.filter(isKnown).filter(matches);

    Array.prototype.forEach.call(el.filterRow.children, function (b) {
      var on = state.cats.indexOf(b.dataset.cat) !== -1;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    Array.prototype.forEach.call(el.tickRow.children, function (s) {
      s.classList.toggle("on", parseInt(s.dataset.ep, 10) === state.ep);
    });

    el.indexEmpty.hidden = known.length > 0;

    function byDebutThenName(a, b) {
      var d = a.debut - b.debut;
      return d !== 0 ? d : a.meta.name.localeCompare(b.meta.name);
    }

    function addLink(rec) {
      var featured = isFeatured(rec);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "char-link" +
        (rec.meta.id === state.id && state.view === "profile" ? " on" : "") +
        (featured ? " featured" : "");
      if (featured) {
        var dot = node("span", "dot");
        dot.title = "Features in " + pad(state.ep);
        b.appendChild(dot);
      }
      b.appendChild(document.createTextNode(rec.meta.name));
      b.appendChild(node("span", "ep-tag", pad(rec.debut)));
      b.addEventListener("click", function () {
        state.id = rec.meta.id;
        state.view = "profile";
        render();
      });
      el.charList.appendChild(b);
    }

    // Everyone featuring in the episode you are on goes in one block at the
    // top, rather than being sorted to the front of each category and so
    // scattered down the list.
    var featured = known.filter(isFeatured).sort(byDebutThenName);
    if (featured.length) {
      el.charList.appendChild(
        node("h2", "group-head featured-head", "Featuring in " + pad(state.ep)));
      featured.forEach(addLink);
    }

    // The rest, by category, with the featured block's members left out so
    // nobody appears twice.
    CATEGORY_ORDER.forEach(function (cat) {
      var group = known.filter(function (r) {
        return r.meta.category === cat && !isFeatured(r);
      });
      if (!group.length) return;
      group.sort(byDebutThenName);
      el.charList.appendChild(
        node("h2", "group-head", cat === "Statement Giver" ? "Statement Givers" : cat));
      group.forEach(addLink);
    });
  }

  /* -------------------------------------------------------------- profile */

  function renderProfile() {
    clear(el.profile);

    if (state.view === "log") { renderLog(); return; }

    var rec = BY_ID[state.id];
    if (!rec || rec.debut === Infinity) { renderWelcome(); return; }
    if (!isKnown(rec)) { renderLocked(rec); return; }

    var head = node("div", "p-head");
    head.appendChild(node("p", "p-cat", rec.meta.category));
    head.appendChild(node("h2", "p-name", rec.meta.name));

    var aliases = upTo(rec.aliases, reveal());
    if (aliases.length) {
      head.appendChild(node("p", "p-alias", "also " + aliases.map(function (a) {
        return a.t;
      }).join(" · ")));
    }

    var blurb = blurbFor(rec);
    if (blurb) head.appendChild(node("p", "p-blurb", blurb));

    if (isFeatured(rec)) {
      var flag = node("p", "featured-flag");
      flag.appendChild(node("span", "dot"));
      flag.appendChild(document.createTextNode(state.done
        ? "Features in " + pad(state.ep) + ", which you have marked finished — it is included below."
        : "Features in " + pad(state.ep) + ", the episode you are on. Nothing below reflects it yet."));
      head.appendChild(flag);
    }

    var vis = upTo(rec.facts, reveal());
    var meta = node("div", "p-meta");
    function item(k, v) {
      var d = document.createElement("div");
      d.appendChild(node("span", "k", k));
      d.appendChild(node("span", "v", v));
      meta.appendChild(d);
    }
    item("First recorded", pad(rec.debut));
    item("Last updated", pad(vis.length ? vis[vis.length - 1].ep : rec.debut));
    item("Known facts", String(vis.length));
    if (rec.meta.statement && rec.meta.statement.ep <= reveal()) {
      item("Statement given", rec.meta.statement.given);
    }
    head.appendChild(meta);
    el.profile.appendChild(head);

    el.profile.appendChild(node("h3", "sec-head", "What is known"));

    var byEp = {};
    vis.forEach(function (f) { (byEp[f.ep] = byEp[f.ep] || []).push(f.t); });
    var refs = upTo(rec.refs, reveal());
    refs.forEach(function (r) { byEp[r.ep] = byEp[r.ep] || []; });

    var list = node("ul", "tl");
    Object.keys(byEp).map(Number).sort(function (a, b) { return a - b; }).forEach(function (n) {
      var li = node("li", "tl-ep" + (n === reveal() ? " is-new" : ""));
      var epi = episode(n);
      li.appendChild(node("span", "tl-num", pad(n)));
      if (epi) li.appendChild(node("p", "tl-title", epi.title));
      byEp[n].forEach(function (t) { li.appendChild(node("p", null, t)); });
      refs.filter(function (r) { return r.ep === n; }).forEach(function (r) {
        var box = node("div", "ref-note");
        box.appendChild(node("span", "ref-k", "Cross-reference"));
        box.appendChild(node("span", null, r.t));
        li.appendChild(box);
      });
      list.appendChild(li);
    });
    el.profile.appendChild(list);

    el.profile.appendChild(node("p", "gate-msg",
      "This profile stops at " + pad(reveal()) + ". Anything established from " +
      pad(state.ep) + " onwards is not on this page."));
  }

  function renderLocked(rec) {
    var box = node("div", "locked");
    box.appendChild(node("p", "p-cat", "Not yet introduced"));
    box.appendChild(node("h2", null, rec.meta.name));
    box.appendChild(node("p", null,
      "Nothing about this figure has come up by " + pad(reveal()) +
      ". Move the gate forward to read the profile."));
    var b = node("button", "ghost-btn", "Reveal at " + pad(rec.debut + 1));
    b.type = "button";
    b.addEventListener("click", function () { setEp(rec.debut + 1); });
    box.appendChild(b);
    el.profile.appendChild(box);
  }

  function renderWelcome() {
    var head = node("div", "p-head");
    head.appendChild(node("p", "p-cat", "How this works"));
    head.appendChild(node("h2", "p-name", "Read only as far as you have listened."));
    head.appendChild(node("p", "p-blurb",
      "Set the gate to the episode you are on. Profiles show the Archive as it stood " +
      "before that episode — its own revelations stay sealed until you move past it. " +
      "Returning figures who feature in it are marked with a dot."));
    el.profile.appendChild(head);

    if (reveal() < 1) {
      el.profile.appendChild(node("p", "gate-msg",
        "You are on " + pad(state.ep) + " and nothing has been revealed yet. " +
        "Move to " + pad(2) + " once you have finished it."));
      return;
    }

    el.profile.appendChild(node("h3", "sec-head", "Revealed through " + pad(reveal())));

    var e = episode(reveal());
    if (e) el.profile.appendChild(node("p", null, e.blurb));

    var count = CHARACTERS.filter(isKnown).length;
    var featured = CHARACTERS.filter(isFeatured);
    var msg = count + " figures have appeared by " + pad(reveal()) + ".";
    if (featured.length) {
      msg += " " + featured.length + " of them return in " + pad(state.ep) + ".";
    }
    el.profile.appendChild(node("p", "gate-msg", msg));
  }

  function renderLog() {
    var head = node("div", "p-head");
    head.appendChild(node("p", "p-cat", "Statement log"));
    head.appendChild(node("h2", "p-name",
      reveal() < 1 ? "Nothing yet" : "MAG001 – " + pad(reveal())));
    head.appendChild(node("p", "p-blurb",
      "Every statement you have finished, with the figures each one introduces."));
    el.profile.appendChild(head);

    if (reveal() < 1) return;

    var ul = node("ul", "log-list");
    EPISODES.filter(function (e) { return e.num <= reveal(); })
      .sort(function (a, b) { return b.num - a.num; })   // newest first
      .forEach(function (e) {
        var li = node("li", "log-item");
        li.appendChild(node("span", "log-num", pad(e.num)));
        var body = document.createElement("div");
        body.appendChild(node("h3", "log-title", e.title));
        if (e.giver) body.appendChild(node("p", "log-meta", e.giver + (e.given ? " · " + e.given : "")));
        if (e.subject) body.appendChild(node("p", "log-body", e.subject));

        var cast = node("div", "log-cast");
        CHARACTERS.filter(function (r) { return r.debut === e.num; }).forEach(function (r) {
          var b = node("button", null, r.meta.name);
          b.type = "button";
          b.addEventListener("click", function () {
            state.id = r.meta.id; state.view = "profile"; render();
          });
          cast.appendChild(b);
        });
        if (cast.children.length) body.appendChild(cast);
        li.appendChild(body);
        ul.appendChild(li);
      });
    el.profile.appendChild(ul);
  }

  /* --------------------------------------------------------------- theme */

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var label = el.themeToggle.querySelector(".theme-label");
    if (label) label.textContent = t === "dark" ? "Paper" : "Archive";
    try { localStorage.setItem("tma-theme", t); } catch (err) { /* private mode */ }
  }

  /* -------------------------------------------------------------- render */

  // Clicking an index button focuses it, and the browser scrolls that into
  // view before the click handler runs — so by render() the position is
  // already lost. anchorY is captured on pointerdown, ahead of that.
  var anchorY = null;

  function render() {
    var y = anchorY !== null ? anchorY : window.scrollY;
    anchorY = null;
    renderGate();
    renderIndex();
    renderProfile();
    writeHash();
    // "instant" matters: the stylesheet sets scroll-behavior: smooth, which
    // would animate the correction instead of pinning it.
    if (window.scrollY !== y) window.scrollTo({ top: y, left: 0, behavior: "instant" });
  }

  /* ---------------------------------------------------------------- init */

  function init() {
    buildTicks();
    buildFilters();

    document.addEventListener("pointerdown", function (ev) {
      if (ev.target.closest && ev.target.closest(".index, .log-cast")) {
        anchorY = window.scrollY;
      }
    }, true);

    state.ep = MAX_EP;                 // default: caught up
    readHash();

    var saved = null;
    try { saved = localStorage.getItem("tma-theme"); } catch (err) { /* ignore */ }
    applyTheme(saved || "dark");

    el.episodeRange.max = MAX_EP;
    el.episodeRange.addEventListener("input", function () {
      setEp(parseInt(el.episodeRange.value, 10));
    });
    el.epPrev.addEventListener("click", function () { setEp(state.ep - 1); });
    el.epNext.addEventListener("click", function () { setEp(state.ep + 1); });

    el.doneToggle.addEventListener("click", function () {
      state.done = !state.done;
      render();
    });

    el.search.addEventListener("input", function () {
      state.query = el.search.value.trim();
      renderIndex();
    });

    el.timelineBtn.addEventListener("click", function () {
      state.view = state.view === "log" ? "profile" : "log";
      if (state.view === "log") state.id = null;
      render();
    });

    el.themeToggle.addEventListener("click", function () {
      applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    document.addEventListener("keydown", function (ev) {
      var t = ev.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA") return;
      if (ev.key === "[") { ev.preventDefault(); setEp(state.ep - 1); }
      if (ev.key === "]") { ev.preventDefault(); setEp(state.ep + 1); }
      if (ev.key === "/") { ev.preventDefault(); el.search.focus(); }
      if (ev.key === "f" || ev.key === "F") {
        ev.preventDefault(); state.done = !state.done; render();
      }
    });

    window.addEventListener("hashchange", function () {
      if (writingHash) return;
      readHash();
      render();
    });

    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
