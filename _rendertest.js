/* Headless render test: boots app.js against the DOM shim, then opens every
   module in the reader to prove no lesson blows up on render. */
(function () {
  var out = [], fails = 0;

  if (typeof document._boot !== "function") { console.log("FAIL: app.js never registered DOMContentLoaded"); return; }
  try { document._boot(); } catch (e) { console.log("FAIL: boot() threw: " + e); return; }

  var tracksEl = document.querySelector("#tracks");
  out.push("boot() ok — track sections rendered: " + tracksEl.children.length);
  var cards = 0;
  tracksEl.children.forEach(function (tw) {
    tw.children.forEach(function (kid) { cards += kid.children.length; });
  });
  out.push("module cards rendered: " + cards);
  out.push("filter chips rendered: " + document.querySelector("#filters").children.length);
  out.push("stats: modules=" + document.querySelector("#sFields").innerHTML.replace(/<[^>]*>/g, "") +
           "  ideas=" + document.querySelector("#sIdeas").innerHTML.replace(/<[^>]*>/g, "") +
           "  timeleft=" + document.querySelector("#sTime").innerHTML.replace(/<[^>]*>/g, "") +
           "  fluency=" + document.querySelector("#sFluency").innerHTML.replace(/<[^>]*>/g, ""));
  out.push("pace label: " + document.querySelector("#paceval").textContent);

  /* Open every module through the real card click handler. */
  var opened = 0;
  window.PHYS_MODULES.forEach(function (m) {
    try {
      /* find the rendered card for this module and fire its onclick */
      var hit = null;
      tracksEl.children.forEach(function (tw) {
        tw.children.forEach(function (grid) {
          (grid.children || []).forEach(function (c) {
            /* match on summary — unique per module, unlike titles which also
               appear as field-badge labels (Electromagnetism, Cosmology). */
            if (c._html && c._html.indexOf(m.summary.slice(0, 40).replace(/&/g, "&amp;")) !== -1) hit = c;
          });
        });
      });
      if (!hit) { out.push("  ! no card found for " + m.id); fails++; return; }
      hit.onclick();
      opened++;
      var body = document.querySelector("#lessonBody").innerHTML;
      if (!body || body.length < 500) { out.push("  ! " + m.id + " rendered an empty lesson"); fails++; }
      if (document.querySelector("#rTitle").textContent !== m.title) { out.push("  ! " + m.id + " wrong title in reader"); fails++; }
      if (!document.querySelector("#keyideasBox").innerHTML) { out.push("  ! " + m.id + " no key ideas"); fails++; }
      if (!document.querySelector("#testBody").innerHTML) { out.push("  ! " + m.id + " no test items"); fails++; }
      if (!document.querySelector("#resList").innerHTML) { out.push("  ! " + m.id + " no resources"); fails++; }
      if (!document.querySelector("#talkBody").innerHTML) { out.push("  ! " + m.id + " no talk section"); fails++; }
    } catch (e) { out.push("  ! " + m.id + " THREW: " + e); fails++; }
  });
  out.push("modules opened in reader: " + opened + " / " + window.PHYS_MODULES.length);

  /* --- related modules --- */
  var noRel = window.PHYS_MODULES.filter(function (m) {
    var hit = null;
    tracksEl.children.forEach(function (tw) {
      tw.children.forEach(function (grid) {
        (grid.children || []).forEach(function (c) {
          if (c._html && c._html.indexOf(m.summary.slice(0, 40).replace(/&/g, "&amp;")) !== -1) hit = c;
        });
      });
    });
    if (!hit) return false;
    hit.onclick();
    return !document.querySelector("#relatedBox").innerHTML;
  });
  out.push("modules with no related links: " + noRel.length +
           (noRel.length ? " (" + noRel.map(function (m) { return m.id; }).join(", ") + ")" : ""));
  if (noRel.length > 3) { out.push("  ! too many modules are orphaned from the cross-link graph"); fails++; }

  /* --- search --- */
  var qEl = document.querySelector("#q");
  var inputFns = qEl._listeners["input"] || [];
  if (!inputFns.length) { out.push("  ! search input has no handler"); fails++; }
  else {
    [["hawking", "bh-hawking"], ["entropy", null], ["lorentz", "frames"], ["zzzznotathing", null]]
      .forEach(function (pair) {
        qEl.value = pair[0];
        inputFns[0].call(qEl);
        var html = document.querySelector("#results").innerHTML;
        if (pair[0] === "zzzznotathing") {
          if (html.indexOf("No lessons match") === -1) { out.push("  ! empty search did not show a no-results state"); fails++; }
          else out.push('search "' + pair[0] + '": correctly reported no matches');
          return;
        }
        var n = (html.match(/class="mod/g) || []).length;
        if (!n) { out.push('  ! search "' + pair[0] + '" returned nothing'); fails++; return; }
        if (html.indexOf("<mark>") === -1) { out.push('  ! search "' + pair[0] + '" did not highlight'); fails++; }
        if (pair[1] && html.indexOf('data-mid="' + pair[1] + '"') === -1) {
          out.push('  ! search "' + pair[0] + '" missed expected module ' + pair[1]); fails++;
        }
        out.push('search "' + pair[0] + '": ' + n + ' lessons' + (pair[1] ? ", found " + pair[1] : ""));
      });
    qEl.value = "";
    inputFns[0].call(qEl);
    if (document.querySelector("#results").innerHTML !== "") { out.push("  ! clearing search left results behind"); fails++; }
  }

  /* --- glossary --- */
  var gBtn = document.querySelector("#btnGlossary");
  if (typeof gBtn.onclick !== "function") { out.push("  ! glossary button not wired"); fails++; }
  else {
    gBtn.onclick();
    var g = document.querySelector("#glossList").innerHTML;
    var terms = (g.match(/class="gterm"/g) || []).length;
    var letters = (g.match(/class="galpha"/g) || []).length;
    out.push("glossary: " + terms + " unique terms across " + letters + " letters");
    if (terms < 200) { out.push("  ! glossary looks too small"); fails++; }
    var gq = document.querySelector("#gq");
    var gFns = gq._listeners["input"] || [];
    if (!gFns.length) { out.push("  ! glossary filter not wired"); fails++; }
    else {
      gq.value = "horizon"; gFns[0].call(gq);
      var filtered = (document.querySelector("#glossList").innerHTML.match(/class="gterm"/g) || []).length;
      out.push('glossary filter "horizon": ' + filtered + " terms");
      if (!filtered) { out.push("  ! glossary filter returned nothing for a term that should exist"); fails++; }
    }
  }

  out.push(fails === 0 ? "ALL TESTS PASSED" : "TESTS FAILED (" + fails + " problems)");
  console.log(out.join("\n"));
})();
