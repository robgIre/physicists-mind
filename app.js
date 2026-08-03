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
      if (modDone(m)) modsDone++; else timeLeft += (m.readMins || 0);
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
        '<div class="meta"><span>📖 ' + (m.readMins || 0) + ' min read</span><span>🧠 ' + m.keyIdeas.length + ' big ideas</span><span>' + modPct(m) + '%</span></div>' +
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

  /* ---------- reader ---------- */
  var current = null;
  function openReader(m) {
    current = m;
    var tk = TRACKS.filter(function (t) { return t.id === m.track; })[0] || {};
    $("#rTrack").textContent = (tk.icon || "") + " " + (tk.title || "");
    $("#rTitle").textContent = m.title;
    $("#rBadges").innerHTML = m.fields.map(fieldBadge).join("") + '<span class="fbadge" style="color:var(--ink3);border-color:var(--line)">' + (m.readMins || 0) + ' min</span>';
    $("#lessonBody").innerHTML = m.lesson;
    renderKeyIdeas(m);
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
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeReader(); $("#settings").classList.remove("open"); } });
  });
})();
