/* ============================================================
   Physicist's Mind — app logic
   ============================================================ */
(function () {
  "use strict";
  var FIELDS = window.PHYS_FIELDS, TRACKS = window.PHYS_TRACKS, MODS = window.PHYS_MODULES;
  var KEY = "physmind_v1";

  /* ---------- state ---------- */
  var state = load();
  function load() {
    try { return Object.assign({ absorbed: {}, pace: 45, collapsed: {}, filter: "all" }, JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return { absorbed: {}, pace: 45, collapsed: {}, filter: "all" }; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function ticks(id) { return state.absorbed[id] || []; }
  function isTicked(id, i) { return ticks(id).indexOf(i) !== -1; }
  function toggleTick(id, i) {
    var arr = ticks(id).slice();
    var p = arr.indexOf(i);
    if (p === -1) arr.push(i); else arr.splice(p, 1);
    state.absorbed[id] = arr; save();
  }
  function modPct(m) { return m.keyIdeas.length ? Math.round(ticks(m.id).length / m.keyIdeas.length * 100) : 0; }
  /* Reading time is measured from the actual lesson, not hand-typed, so the
     planner tells the truth. 160 wpm allows for equations and re-reading. */
  function readMins(m) {
    if (m._rm == null) {
      var w = String(m.lesson || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
      m._rm = Math.max(2, Math.round(w / 160));
    }
    return m._rm;
  }
  function modDone(m) { return m.keyIdeas.length > 0 && ticks(m.id).length >= m.keyIdeas.length; }

  /* ---------- helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function fieldBadge(fk) {
    var f = FIELDS[fk]; if (!f) return "";
    return '<span class="fbadge" style="color:' + f.color + ';border-color:' + f.color + '44;background:' + f.color + '14">' + f.name + '</span>';
  }
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

  /* ---------- stats ---------- */
  function totals() {
    var ideas = 0, done = 0, modsDone = 0, timeLeft = 0;
    MODS.forEach(function (m) {
      ideas += m.keyIdeas.length;
      done += Math.min(ticks(m.id).length, m.keyIdeas.length);
      if (modDone(m)) modsDone++; else timeLeft += readMins(m);
    });
    return { ideas: ideas, done: done, modsDone: modsDone, timeLeft: timeLeft, total: MODS.length };
  }
  function renderStats() {
    var t = totals();
    var pct = t.ideas ? Math.round(t.done / t.ideas * 100) : 0;
    $("#sFields").innerHTML = t.modsDone + '<small> / ' + t.total + '</small>';
    $("#sIdeas").innerHTML = t.done + '<small> / ' + t.ideas + '</small>';
    if (t.timeLeft >= 60) $("#sTime").innerHTML = (t.timeLeft / 60).toFixed(1) + '<small> hrs</small>';
    else $("#sTime").innerHTML = t.timeLeft + '<small> min</small>';
    $("#sFluency").innerHTML = pct + '<small>%</small>';
    var C = 2 * Math.PI * 22;
    $("#ringfg").setAttribute("stroke-dashoffset", (C * (1 - pct / 100)).toFixed(1));
    $("#ringpct").textContent = pct + "%";
    renderPace(t.timeLeft);
  }
  function renderPace(timeLeft) {
    var wk = state.pace;
    $("#pace").value = wk;
    var label = wk + " min / week";
    if (timeLeft <= 0) label += " · all covered 🎉";
    else {
      var weeks = Math.ceil(timeLeft / wk);
      label += " · finish in ~" + (weeks <= 1 ? "1 week" : weeks < 8 ? weeks + " weeks" : (weeks / 4.33).toFixed(1) + " months");
    }
    $("#paceval").textContent = label;
  }

  /* ---------- filters ---------- */
  function usedFields() {
    var seen = {}; var order = Object.keys(FIELDS);
    MODS.forEach(function (m) { m.fields.forEach(function (f) { seen[f] = true; }); });
    return order.filter(function (f) { return seen[f]; });
  }
  function renderFilters() {
    var box = $("#filters"); box.innerHTML = "";
    var all = el("button", "chip" + (state.filter === "all" ? " on" : ""), "All fields");
    all.onclick = function () { state.filter = "all"; save(); renderFilters(); renderTracks(); };
    box.appendChild(all);
    usedFields().forEach(function (fk) {
      var f = FIELDS[fk];
      var c = el("button", "chip" + (state.filter === fk ? " on" : ""),
        '<span class="dot" style="background:' + f.color + '"></span>' + f.name);
      c.onclick = function () { state.filter = fk; save(); renderFilters(); renderTracks(); };
      box.appendChild(c);
    });
  }

  /* ---------- tracks & cards ---------- */
  function visibleMods(trackId) {
    return MODS.filter(function (m) { return m.track === trackId; })
      .filter(function (m) { return state.filter === "all" || m.fields.indexOf(state.filter) !== -1; })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }
  function card(m) {
    var c = el("div", "mod" + (modDone(m) ? " done" : ""));
    var badges = m.fields.map(fieldBadge).join("");
    c.innerHTML =
      '<div class="mh">' +
        '<div class="badges">' + badges + '<span class="doneflag">✓ Absorbed</span></div>' +
        '<h4>' + esc(m.title) + '</h4>' +
        '<p class="msum">' + esc(m.summary) + '</p>' +
        '<div class="meta"><span>📖 ' + readMins(m) + ' min read</span><span>🧠 ' + m.keyIdeas.length + ' big ideas</span><span>' + modPct(m) + '%</span></div>' +
        '<div class="mprog"><i style="width:' + modPct(m) + '%"></i></div>' +
      '</div>';
    c.onclick = function () { openReader(m); };
    return c;
  }
  function renderTracks() {
    var root = $("#tracks"); root.innerHTML = "";
    TRACKS.forEach(function (tk) {
      var mods = visibleMods(tk.id);
      if (!mods.length) return;
      var doneCt = mods.filter(modDone).length;
      var wrap = el("div", "track" + (state.collapsed[tk.id] ? " collapsed" : ""));
      var head = el("div", "trackhead");
      head.innerHTML =
        '<div class="ic">' + tk.icon + '</div>' +
        '<div><h3>' + esc(tk.title) + '</h3><div class="sub">' + esc(tk.sub) + '</div></div>' +
        '<div class="tp">' + doneCt + ' / ' + mods.length + ' <span class="caret">▾</span></div>';
      head.onclick = function () { state.collapsed[tk.id] = !state.collapsed[tk.id]; save(); wrap.classList.toggle("collapsed"); };
      wrap.appendChild(head);
      var grid = el("div", "modules");
      mods.forEach(function (m) { grid.appendChild(card(m)); });
      wrap.appendChild(grid);
      root.appendChild(wrap);
    });
  }

  /* ---------- search index, glossary, related modules ---------- */
  var STOP = {"the":1,"and":1,"that":1,"this":1,"with":1,"from":1,"what":1,"which":1,"they":1,"their":1,
    "there":1,"than":1,"then":1,"them":1,"when":1,"where":1,"have":1,"been":1,"were":1,"into":1,"only":1,
    "also":1,"more":1,"most":1,"some":1,"such":1,"very":1,"just":1,"like":1,"does":1,"about":1,"other":1,
    "physics":1,"theory":1,"quantum":1};

  function stripTags(s) { return String(s || "").replace(/<[^>]*>/g, " ").replace(/&[a-z]+;|&#\d+;/gi, " "); }
  function tokens(s) {
    var out = [], m = String(s || "").toLowerCase().match(/[a-z]{4,}/g) || [];
    m.forEach(function (w) { if (!STOP[w]) out.push(w); });
    return out;
  }

  /* Flat searchable text per module, built once. */
  var INDEX = MODS.map(function (m) {
    var t = m.talk || {};
    var terms = (t.terms || []).map(function (x) { return x.term + " " + x.def; }).join("  ");
    var tests = (m.test || []).map(function (x) { return x.q + " " + x.a; }).join("  ");
    return {
      m: m,
      title: m.title.toLowerCase(),
      summary: m.summary.toLowerCase(),
      ideas: (m.keyIdeas || []).join("  ").toLowerCase(),
      terms: terms.toLowerCase(),
      body: (stripTags(m.lesson) + "  " + tests + "  " + (t.oneliners || []).join("  ")).toLowerCase(),
      plain: (m.summary + "  " + (m.keyIdeas || []).join("  ") + "  " + stripTags(m.lesson)).replace(/\s+/g, " ")
    };
  });

  /* Glossary: every vocabulary term across the library, deduped. */
  var GLOSSARY = (function () {
    var seen = {}, list = [];
    MODS.forEach(function (m) {
      ((m.talk || {}).terms || []).forEach(function (x) {
        var k = x.term.toLowerCase().replace(/\s*\(.*?\)\s*/g, "").trim();
        if (seen[k]) { if (seen[k].also.indexOf(m.title) === -1) seen[k].also.push(m.title); return; }
        seen[k] = { term: x.term, def: x.def, mod: m, also: [] };
        list.push(seen[k]);
      });
    });
    return list.sort(function (a, b) { return a.term.toLowerCase() < b.term.toLowerCase() ? -1 : 1; });
  })();

  /* Related modules, computed from shared field tags and shared vocabulary. */
  var KW = {};
  MODS.forEach(function (m) {
    var s = {};
    (m.fields || []).forEach(function (f) { s["field:" + f] = 3; });
    ((m.talk || {}).terms || []).forEach(function (x) { tokens(x.term).forEach(function (w) { s[w] = 2; }); });
    tokens(m.title).forEach(function (w) { s[w] = 2; });
    KW[m.id] = s;
  });
  function relatedFor(m) {
    var mine = KW[m.id] || {};
    return MODS.filter(function (o) { return o.id !== m.id; })
      .map(function (o) {
        var s = 0, theirs = KW[o.id] || {};
        for (var k in mine) if (theirs[k]) s += mine[k];
        return { m: o, s: s };
      })
      .filter(function (r) { return r.s >= 6; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 4);
  }

  function highlight(text, words) {
    var out = esc(text);
    words.forEach(function (w) {
      if (w.length < 2) return;
      out = out.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>");
    });
    return out;
  }
  function snippet(plain, words) {
    var lc = plain.toLowerCase(), at = -1;
    for (var i = 0; i < words.length && at === -1; i++) at = lc.indexOf(words[i]);
    if (at === -1) at = 0;
    var from = Math.max(0, at - 80), to = Math.min(plain.length, at + 170);
    return (from > 0 ? "… " : "") + highlight(plain.slice(from, to), words) + (to < plain.length ? " …" : "");
  }

  function search(q) {
    var words = q.toLowerCase().split(/\s+/).filter(function (w) { return w.length > 1; });
    if (!words.length) return null;
    var hits = [];
    INDEX.forEach(function (ix) {
      var score = 0, all = true;
      words.forEach(function (w) {
        var s = 0;
        if (ix.title.indexOf(w) !== -1) s += 12;
        if (ix.summary.indexOf(w) !== -1) s += 6;
        if (ix.terms.indexOf(w) !== -1) s += 5;
        if (ix.ideas.indexOf(w) !== -1) s += 4;
        if (ix.body.indexOf(w) !== -1) s += 1;
        if (!s) all = false; else score += s;
      });
      if (all) hits.push({ ix: ix, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    var terms = GLOSSARY.filter(function (g) {
      var t = (g.term + " " + g.def).toLowerCase();
      return words.every(function (w) { return t.indexOf(w) !== -1; });
    }).slice(0, 6);
    return { words: words, hits: hits, terms: terms };
  }

  function renderResults(q) {
    var box = $("#results"), tracksEl = $("#tracks"), filters = $("#filters");
    var wrap = $("#searchwrap");
    if (q) wrap.classList.add("has"); else wrap.classList.remove("has");
    var r = q ? search(q) : null;
    if (!r) { box.innerHTML = ""; tracksEl.style.display = ""; filters.style.display = ""; return; }
    tracksEl.style.display = "none"; filters.style.display = "none";

    var h = "";
    if (r.terms.length) {
      h += '<div class="rescount">' + r.terms.length + ' matching term' + (r.terms.length === 1 ? '' : 's') + '</div>';
      h += '<div class="talkcard" style="margin-top:0">';
      r.terms.forEach(function (g, i) {
        h += '<div class="gitem" data-gid="' + i + '" style="' + (i === 0 ? 'border-top:none' : '') + '">' +
          '<div class="gterm">' + highlight(g.term, r.words) + '</div>' +
          '<div class="gdef">' + highlight(g.def, r.words) + '</div>' +
          '<div class="gsrc">from ' + esc(g.mod.title) + '</div></div>';
      });
      h += '</div>';
    }
    if (!r.hits.length) {
      h += '<div class="nores">No lessons match <b>' + esc(q) + '</b>. Try a single word, or a physicist\'s name.</div>';
    } else {
      h += '<div class="rescount" style="margin-top:18px">' + r.hits.length + ' lesson' + (r.hits.length === 1 ? '' : 's') + '</div><div class="resgrid">';
      r.hits.forEach(function (hit) {
        var m = hit.ix.m;
        h += '<div class="mod' + (modDone(m) ? " done" : "") + '" data-mid="' + esc(m.id) + '"><div class="mh">' +
          '<div class="badges">' + m.fields.map(fieldBadge).join("") + '<span class="doneflag">✓ Absorbed</span></div>' +
          '<h4>' + highlight(m.title, r.words) + '</h4>' +
          '<p class="msum">' + highlight(m.summary, r.words) + '</p>' +
          '<div class="snip">' + snippet(hit.ix.plain, r.words) + '</div>' +
          '<div class="meta"><span>📖 ' + readMins(m) + ' min read</span><span>🧠 ' + m.keyIdeas.length + ' big ideas</span><span>' + modPct(m) + '%</span></div>' +
          '</div></div>';
      });
      h += '</div>';
    }
    box.innerHTML = h;

    Array.prototype.forEach.call(box.querySelectorAll(".mod"), function (c) {
      c.onclick = function () { openById(c.getAttribute("data-mid")); };
    });
    Array.prototype.forEach.call(box.querySelectorAll(".gitem"), function (c) {
      c.onclick = function () { openReader(r.terms[+c.getAttribute("data-gid")].mod); };
    });
  }

  function openById(id) {
    var m = MODS.filter(function (x) { return x.id === id; })[0];
    if (m) openReader(m);
  }

  function renderGlossary(filter) {
    var f = (filter || "").toLowerCase().trim();
    var list = GLOSSARY.filter(function (g) {
      return !f || (g.term + " " + g.def).toLowerCase().indexOf(f) !== -1;
    });
    var h = "", letter = "";
    if (!list.length) h = '<div class="nores">Nothing matches that.</div>';
    list.forEach(function (g, i) {
      var L = g.term.charAt(0).toUpperCase();
      if (L !== letter) { letter = L; h += '<div class="galpha">' + esc(letter) + '</div>'; }
      h += '<div class="gitem" data-gi="' + i + '">' +
        '<div class="gterm">' + esc(g.term) + '</div>' +
        '<div class="gdef">' + esc(g.def) + '</div>' +
        '<div class="gsrc">' + esc(g.mod.title) + (g.also.length ? ' · also in ' + g.also.length + ' more' : '') + '</div></div>';
    });
    var box = $("#glossList");
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll(".gitem"), function (c) {
      c.onclick = function () {
        $("#glossary").classList.remove("open");
        openReader(list[+c.getAttribute("data-gi")].mod);
      };
    });
  }

  /* ---------- reader ---------- */
  var current = null;
  function openReader(m) {
    current = m;
    var tk = TRACKS.filter(function (t) { return t.id === m.track; })[0] || {};
    $("#rTrack").textContent = (tk.icon || "") + " " + (tk.title || "");
    $("#rTitle").textContent = m.title;
    $("#rBadges").innerHTML = m.fields.map(fieldBadge).join("") + '<span class="fbadge" style="color:var(--ink3);border-color:var(--line)">' + readMins(m) + ' min</span>';
    $("#lessonBody").innerHTML = m.lesson;
    renderKeyIdeas(m);
    renderRelated(m);
    renderTalk(m);
    renderTest(m);
    renderRes(m);
    switchPane("lesson");
    var r = $("#reader"); r.classList.add("open");
    $(".rpanel").scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
  function closeReader() { $("#reader").classList.remove("open"); document.body.style.overflow = ""; current = null; }

  function renderKeyIdeas(m) {
    var box = $("#keyideasBox");
    var rows = m.keyIdeas.map(function (txt, i) {
      var on = isTicked(m.id, i);
      return '<label class="idea' + (on ? " done" : "") + '" data-i="' + i + '">' +
        '<input type="checkbox"' + (on ? " checked" : "") + '><span>' + esc(txt) + '</span></label>';
    }).join("");
    box.innerHTML = '<h4>The big ideas</h4><p class="hint">Tick each one once it genuinely clicks — that\'s what drives your fluency score.</p>' + rows;
    Array.prototype.forEach.call(box.querySelectorAll(".idea"), function (row) {
      row.addEventListener("click", function (e) {
        e.preventDefault();
        var i = +row.getAttribute("data-i");
        toggleTick(m.id, i);
        row.classList.toggle("done");
        $("input", row).checked = isTicked(m.id, i);
        renderStats(); renderTracks();
      });
    });
  }
  function renderRelated(m) {
    var box = $("#relatedBox"), rel = relatedFor(m);
    if (!rel.length) { box.innerHTML = ""; return; }
    box.innerHTML = '<div class="related"><h4>Where to go next</h4>' +
      rel.map(function (r) {
        var tk = TRACKS.filter(function (t) { return t.id === r.m.track; })[0] || {};
        return '<div class="rel" data-mid="' + esc(r.m.id) + '">' +
          '<div class="rr">' + (tk.icon || "📄") + '</div>' +
          '<div><div class="rt">' + esc(r.m.title) + '</div>' +
          '<div class="rw">' + esc(tk.title || "") + ' · ' + readMins(r.m) + ' min</div></div></div>';
      }).join("") + '</div>';
    Array.prototype.forEach.call(box.querySelectorAll(".rel"), function (c) {
      c.onclick = function () { openById(c.getAttribute("data-mid")); };
    });
  }

  function renderTalk(m) {
    var t = m.talk || {}, h = "";
    if (t.oneliners && t.oneliners.length) {
      h += '<div class="talkcard"><h4>Say it in one breath</h4>' +
        t.oneliners.map(function (o) { return '<div class="oneliner">' + esc(o) + '</div>'; }).join("") + '</div>';
    }
    if (t.myths && t.myths.length) {
      h += '<div class="talkcard"><h4>Myths to avoid</h4>' +
        t.myths.map(function (x) { return '<div class="myth"><div class="m">' + esc(x.m) + '</div><div class="t">' + esc(x.t) + '</div></div>'; }).join("") + '</div>';
    }
    if (t.terms && t.terms.length) {
      h += '<div class="talkcard"><h4>Vocabulary</h4>' +
        t.terms.map(function (x) { return '<div class="term"><b>' + esc(x.term) + '</b> — ' + esc(x.def) + '</div>'; }).join("") + '</div>';
    }
    $("#talkBody").innerHTML = h || '<p style="color:var(--ink3)">No talking points for this one.</p>';
  }
  function renderTest(m) {
    var box = $("#testBody");
    box.innerHTML = (m.test || []).map(function (qa) {
      return '<div class="qa"><div class="q"><span class="qi">▸</span><span>' + esc(qa.q) + '</span></div><div class="a">' + esc(qa.a) + '</div></div>';
    }).join("");
    Array.prototype.forEach.call(box.querySelectorAll(".qa"), function (qa) {
      $(".q", qa).addEventListener("click", function () { qa.classList.toggle("open"); });
    });
  }
  function renderRes(m) {
    $("#resList").innerHTML = (m.resources || []).map(function (r) {
      return '<a class="res" href="' + r.url + '" target="_blank" rel="noopener">' +
        '<div class="ri">' + (r.icon || "🔗") + '</div>' +
        '<div><div class="rn">' + esc(r.name) + '</div><div class="rd">' + esc(r.desc || "") + '</div></div>' +
        '<span class="rtype">' + esc(r.type || "link") + '</span></a>';
    }).join("");
  }
  function switchPane(name) {
    Array.prototype.forEach.call(document.querySelectorAll(".rtab"), function (t) { t.classList.toggle("on", t.getAttribute("data-pane") === name); });
    Array.prototype.forEach.call(document.querySelectorAll(".rpane"), function (p) { p.classList.toggle("on", p.id === "pane-" + name); });
    $(".rpanel").scrollTop = 0;
  }

  /* ---------- settings / backup ---------- */
  function exportData() {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "physicists-mind-progress.json"; a.click();
    URL.revokeObjectURL(a.href);
  }
  function importData(file) {
    var fr = new FileReader();
    fr.onload = function () {
      try { var d = JSON.parse(fr.result); state = Object.assign({ absorbed: {}, pace: 45, collapsed: {}, filter: "all" }, d); save(); boot(); $("#settings").classList.remove("open"); }
      catch (e) { alert("That file could not be read as a valid backup."); }
    };
    fr.readAsText(file);
  }

  /* ---------- wire up ---------- */
  function boot() { renderFilters(); renderTracks(); renderStats(); }
  document.addEventListener("DOMContentLoaded", function () {
    boot();
    $("#rClose").onclick = closeReader;
    $("#reader").addEventListener("click", function (e) { if (e.target === $("#reader")) closeReader(); });
    Array.prototype.forEach.call(document.querySelectorAll(".rtab"), function (t) {
      t.onclick = function () { switchPane(t.getAttribute("data-pane")); };
    });
    $("#pace").addEventListener("input", function () { state.pace = +this.value; save(); renderStats(); });

    var qEl = $("#q"), qTimer = null;
    qEl.addEventListener("input", function () {
      var v = this.value;
      clearTimeout(qTimer);
      qTimer = setTimeout(function () { renderResults(v.trim()); }, 120);
    });
    $("#clearq").onclick = function () { qEl.value = ""; renderResults(""); qEl.focus(); };
    $("#btnGlossary").onclick = function () {
      renderGlossary($("#gq").value);
      $("#glossary").classList.add("open");
    };
    $("#btnCloseGlossary").onclick = function () { $("#glossary").classList.remove("open"); };
    $("#glossary").addEventListener("click", function (e) { if (e.target === $("#glossary")) $("#glossary").classList.remove("open"); });
    $("#gq").addEventListener("input", function () { renderGlossary(this.value); });
    $("#btnSettings").onclick = function () { $("#settings").classList.add("open"); };
    $("#btnCloseSettings").onclick = function () { $("#settings").classList.remove("open"); };
    $("#settings").addEventListener("click", function (e) { if (e.target === $("#settings")) $("#settings").classList.remove("open"); });
    $("#btnExport").onclick = exportData;
    $("#btnImport").onclick = function () { $("#fileImport").click(); };
    $("#fileImport").addEventListener("change", function () { if (this.files[0]) importData(this.files[0]); });
    $("#btnReset").onclick = function () {
      if (confirm("Reset all your progress? This cannot be undone (export a backup first if unsure).")) {
        state = { absorbed: {}, pace: 45, collapsed: {}, filter: "all" }; save(); boot(); $("#settings").classList.remove("open");
      }
    };
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeReader();
        $("#settings").classList.remove("open");
        $("#glossary").classList.remove("open");
      }
      /* "/" focuses search, the way it works everywhere else */
      if (e.key === "/" && document.activeElement && document.activeElement.tagName !== "INPUT") {
        e.preventDefault(); $("#q").focus();
      }
    });
  });
})();
