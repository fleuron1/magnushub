/* The Magnus Archive — spoiler-safe character reader
 *
 * The whole app is one rule: nothing with an episode number above the selected
 * gate is ever put into the DOM. Filtering happens before render, not with CSS.
 */
(function () {
  "use strict";

  var EPISODES = window.TMA_EPISODES || [];
  var CHARACTERS = window.TMA_CHARACTERS || [];
  var MAX_EP = EPISODES.length;

  var CATEGORY_ORDER = [
    "Institute",
    "Statement Giver",
    "Subject",
    "Unexplained",
    "Organisation"
  ];

  var state = {
    ep: MAX_EP,
    id: null,
    view: "profile", // "profile" | "log"
    query: "",
    cats: []
  };

  var el = {
    range: document.getElementById("episodeRange"),
    gateEp: document.getElementById("gateEpisode"),
    gateTitle: document.getElementById("gateTitle"),
    tickRow: document.getElementById("tickRow"),
    prev: document.getElementById("epPrev"),
    next: document.getElementById("epNext"),
    search: document.getElementById("search"),
    filterRow: document.getElementById("filterRow"),
    list: document.getElementById("charList"),
    empty: document.getElementById("indexEmpty"),
    profile: document.getElementById("profile"),
    timelineBtn: document.getElementById("timelineBtn"),
    theme: document.getElementById("themeToggle")
  };

  /* ------------------------------------------------------------ helpers */

  function pad(n) { return "MAG" + String(n).padStart(3, "0"); }

  function episode(n) {
    for (var i = 0; i < EPISODES.length; i++) {
      if (EPISODES[i].num === n) return EPISODES[i];
    }
    return null;
  }

  // Entries at or below the gate.
  function visible(list, ep) {
    if (!list) return [];
    return list.filter(function (e) { return e.ep <= ep; });
  }

  // First episode a character is established in.
  function debut(c) {
    var eps = (c.entries || []).map(function (e) { return e.ep; });
    return eps.length ? Math.min.apply(null, eps) : Infinity;
  }

  function isKnown(c, ep) { return debut(c) <= ep; }

  // Latest blurb at or below the gate.
  function blurbFor(c, ep) {
    var ok = visible(c.blurbs, ep);
    return ok.length ? ok[ok.length - 1].text : "";
  }

  function text(tag, cls, str) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (str != null) n.textContent = str;
    return n;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  /* ---------------------------------------------------------- hash state */

  function readHash() {
    var h = window.location.hash.replace(/^#/, "");
    if (!h) return;
    h.split("/").forEach(function (part) {
      var kv = part.split("=");
      if (kv.length !== 2) return;
      if (kv[0] === "ep") {
        var n = parseInt(kv[1], 10);
        if (n >= 1 && n <= MAX_EP) state.ep = n;
      }
      if (kv[0] === "c") {
        if (kv[1] === "log") { state.view = "log"; state.id = null; }
        else { state.id = kv[1]; state.view = "profile"; }
      }
    });
  }

  var writingHash = false;
  function writeHash() {
    var h = "#ep=" + state.ep + "/c=" + (state.view === "log" ? "log" : (state.id || ""));
    if ("#" + window.location.hash.replace(/^#/, "") === h) return;
    writingHash = true;
    window.history.replaceState(null, "", h);
    writingHash = false;
  }

  /* --------------------------------------------------------------- gate */

  function renderGate() {
    var e = episode(state.ep);
    el.range.value = state.ep;
    el.gateEp.textContent = pad(state.ep);
    el.gateTitle.textContent = e ? e.title : "";
    el.prev.disabled = state.ep <= 1;
    el.next.disabled = state.ep >= MAX_EP;

    var ticks = el.tickRow.children;
    for (var i = 0; i < ticks.length; i++) {
      ticks[i].classList.toggle("on", (i + 1) === state.ep);
    }
  }

  function buildTicks() {
    for (var n = 1; n <= MAX_EP; n++) {
      (function (num) {
        var s = text("span", null, String(num));
        s.setAttribute("role", "button");
        s.setAttribute("tabindex", "0");
        s.title = pad(num);
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

    // If the open profile is no longer introduced, fall back gracefully.
    if (state.id) {
      var c = CHARACTERS.filter(function (x) { return x.id === state.id; })[0];
      if (c && !isKnown(c, state.ep)) {
        // keep it selected; the profile renders a "not yet" panel instead
      }
    }
    render();
  }

  /* -------------------------------------------------------------- index */

  function buildFilters() {
    CATEGORY_ORDER.forEach(function (cat) {
      var b = text("button", "chip", cat === "Statement Giver" ? "Statements" : cat);
      b.type = "button";
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        var i = state.cats.indexOf(cat);
        if (i === -1) state.cats.push(cat); else state.cats.splice(i, 1);
        render();
      });
      b.dataset.cat = cat;
      el.filterRow.appendChild(b);
    });
  }

  function matches(c) {
    if (state.cats.length && state.cats.indexOf(c.category) === -1) return false;
    if (!state.query) return true;
    var q = state.query.toLowerCase();
    if (c.name.toLowerCase().indexOf(q) !== -1) return true;
    var al = visible(c.aliases, state.ep);
    for (var i = 0; i < al.length; i++) {
      if (al[i].text.toLowerCase().indexOf(q) !== -1) return true;
    }
    return blurbFor(c, state.ep).toLowerCase().indexOf(q) !== -1;
  }

  function renderIndex() {
    clear(el.list);

    var known = CHARACTERS
      .filter(function (c) { return isKnown(c, state.ep); })
      .filter(matches);

    Array.prototype.forEach.call(el.filterRow.children, function (b) {
      var on = state.cats.indexOf(b.dataset.cat) !== -1;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    el.empty.hidden = known.length > 0;

    CATEGORY_ORDER.forEach(function (cat) {
      var group = known.filter(function (c) { return c.category === cat; });
      if (!group.length) return;

      group.sort(function (a, b) {
        var d = debut(a) - debut(b);
        return d !== 0 ? d : a.name.localeCompare(b.name);
      });

      el.list.appendChild(text("h2", "group-head", cat === "Statement Giver" ? "Statement Givers" : cat));

      group.forEach(function (c) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "char-link" + (c.id === state.id && state.view === "profile" ? " on" : "");
        b.appendChild(document.createTextNode(c.name));
        b.appendChild(text("span", "ep-tag", pad(debut(c))));
        b.addEventListener("click", function () {
          state.id = c.id;
          state.view = "profile";
          render();
          if (window.matchMedia("(max-width: 900px)").matches) {
            el.profile.scrollIntoView({ block: "start" });
          }
        });
        el.list.appendChild(b);
      });
    });
  }

  /* ------------------------------------------------------------ profile */

  function renderProfile() {
    clear(el.profile);

    if (state.view === "log") return renderLog();

    var c = CHARACTERS.filter(function (x) { return x.id === state.id; })[0];
    if (!c) return renderWelcome();
    if (!isKnown(c, state.ep)) return renderLocked(c);

    var head = text("div", "p-head");
    head.appendChild(text("p", "p-cat", c.category));
    head.appendChild(text("h2", "p-name", c.name));

    var aliases = visible(c.aliases, state.ep);
    if (aliases.length) {
      head.appendChild(text("p", "p-alias", "also " + aliases.map(function (a) {
        return a.text;
      }).join(" · ")));
    }

    var blurb = blurbFor(c, state.ep);
    if (blurb) head.appendChild(text("p", "p-blurb", blurb));

    // metadata strip
    var meta = text("div", "p-meta");
    function metaItem(k, v) {
      var d = document.createElement("div");
      d.appendChild(text("span", "k", k));
      d.appendChild(text("span", "v", v));
      meta.appendChild(d);
    }
    metaItem("First recorded", pad(debut(c)));

    var vis = visible(c.entries, state.ep);
    var lastEp = vis.length ? vis[vis.length - 1].ep : debut(c);
    metaItem("Last updated", pad(lastEp));
    metaItem("Known facts", String(vis.length));

    if (c.statement && c.statement.ep <= state.ep) {
      metaItem("Statement given", c.statement.given);
    }
    head.appendChild(meta);
    el.profile.appendChild(head);

    // timeline, grouped by episode
    el.profile.appendChild(text("h3", "sec-head", "What is known"));

    var byEp = {};
    vis.forEach(function (e) {
      (byEp[e.ep] = byEp[e.ep] || []).push(e.text);
    });

    var refs = visible(c.refs, state.ep);
    refs.forEach(function (r) { byEp[r.ep] = byEp[r.ep] || []; });

    var list = text("ul", "tl");
    Object.keys(byEp).map(Number).sort(function (a, b) { return a - b; }).forEach(function (n) {
      var li = text("li", "tl-ep" + (n === state.ep ? " is-new" : ""));
      var epi = episode(n);
      li.appendChild(text("span", "tl-num", pad(n)));
      if (epi) li.appendChild(text("p", "tl-title", epi.title));

      byEp[n].forEach(function (t) { li.appendChild(text("p", null, t)); });

      refs.filter(function (r) { return r.ep === n; }).forEach(function (r) {
        var box = text("div", "ref-note");
        box.appendChild(text("span", "ref-k", "Cross-reference"));
        box.appendChild(text("span", null, r.text));
        li.appendChild(box);
      });

      list.appendChild(li);
    });
    el.profile.appendChild(list);

    // honest gate notice, without counting what is ahead
    if (state.ep < MAX_EP) {
      el.profile.appendChild(text("p", "gate-msg",
        "This profile stops at " + pad(state.ep) + ". Anything established later is not on this page."));
    }
  }

  function renderLocked(c) {
    var box = text("div", "locked");
    box.appendChild(text("p", "p-cat", "Not yet introduced"));
    box.appendChild(text("h2", null, c.name));
    box.appendChild(text("p", null,
      "Nothing about this figure has come up by " + pad(state.ep) + ". Move the gate forward to read the profile."));

    var b = text("button", "ghost-btn", "Reveal at " + pad(debut(c)));
    b.type = "button";
    b.addEventListener("click", function () { setEp(debut(c)); });
    box.appendChild(b);
    el.profile.appendChild(box);
  }

  function renderWelcome() {
    var head = text("div", "p-head");
    head.appendChild(text("p", "p-cat", "How this works"));
    head.appendChild(text("h2", "p-name", "Read only as far as you have listened."));
    head.appendChild(text("p", "p-blurb",
      "Set the gate to the last episode you have heard. Every profile then shows only what the Archive knew by that point — later revelations are not rendered at all."));
    el.profile.appendChild(head);

    el.profile.appendChild(text("h3", "sec-head", "Currently at " + pad(state.ep)));

    var e = episode(state.ep);
    if (e) {
      var p = text("p", null, e.blurb);
      el.profile.appendChild(p);
    }

    var count = CHARACTERS.filter(function (c) { return isKnown(c, state.ep); }).length;
    el.profile.appendChild(text("p", "gate-msg",
      count + " figures have appeared by " + pad(state.ep) +
      ". Pick one from the index, or open the statement log to read the run in order."));
  }

  function renderLog() {
    var head = text("div", "p-head");
    head.appendChild(text("p", "p-cat", "Statement log"));
    head.appendChild(text("h2", "p-name", "MAG001 – " + pad(state.ep)));
    head.appendChild(text("p", "p-blurb",
      "Every statement recorded up to your gate, with the figures each one introduces."));
    el.profile.appendChild(head);

    var ul = text("ul", "log-list");
    EPISODES.filter(function (e) { return e.num <= state.ep; }).forEach(function (e) {
      var li = text("li", "log-item");
      li.appendChild(text("span", "log-num", pad(e.num)));

      var body = document.createElement("div");
      body.appendChild(text("h3", "log-title", e.title));
      body.appendChild(text("p", "log-meta", e.giver + " · " + e.given));
      body.appendChild(text("p", "log-body", e.subject));

      var cast = text("div", "log-cast");
      CHARACTERS.filter(function (c) { return debut(c) === e.num; }).forEach(function (c) {
        var b = text("button", null, c.name);
        b.type = "button";
        b.addEventListener("click", function () {
          state.id = c.id; state.view = "profile"; render();
          el.profile.scrollIntoView({ block: "start" });
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
    var label = el.theme.querySelector(".theme-label");
    if (label) label.textContent = t === "dark" ? "Paper" : "Archive";
    try { localStorage.setItem("tma-theme", t); } catch (err) { /* private mode */ }
  }

  /* -------------------------------------------------------------- render */

  function render() {
    renderGate();
    renderIndex();
    renderProfile();
    writeHash();
  }

  /* --------------------------------------------------------------- init */

  function init() {
    buildTicks();
    buildFilters();
    readHash();

    var saved = null;
    try { saved = localStorage.getItem("tma-theme"); } catch (err) { /* ignore */ }
    applyTheme(saved || "dark");

    el.range.max = MAX_EP;
    el.range.addEventListener("input", function () { setEp(parseInt(el.range.value, 10)); });
    el.prev.addEventListener("click", function () { setEp(state.ep - 1); });
    el.next.addEventListener("click", function () { setEp(state.ep + 1); });

    el.search.addEventListener("input", function () {
      state.query = el.search.value.trim();
      renderIndex();
    });

    el.timelineBtn.addEventListener("click", function () {
      state.view = state.view === "log" ? "profile" : "log";
      if (state.view === "log") state.id = null;
      render();
      el.profile.scrollIntoView({ block: "start" });
    });

    el.theme.addEventListener("click", function () {
      applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    document.addEventListener("keydown", function (ev) {
      var t = ev.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA") return;
      if (ev.key === "[") { ev.preventDefault(); setEp(state.ep - 1); }
      if (ev.key === "]") { ev.preventDefault(); setEp(state.ep + 1); }
      if (ev.key === "/") { ev.preventDefault(); el.search.focus(); }
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
