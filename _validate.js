/* Validation harness — run via:
     cd ~/physics-masters-portal && cat _shim.js curriculum.js content-*.js _validate.js > /tmp/_pm.js && osascript -l JavaScript /tmp/_pm.js
   Checks every module for structural correctness before shipping. */
(function () {
  var F = window.PHYS_FIELDS, T = window.PHYS_TRACKS, M = window.PHYS_MODULES;
  var errs = [], warns = [], seen = {};
  var trackIds = {}; T.forEach(function (t) { trackIds[t.id] = 0; });

  function isStr(v) { return typeof v === "string" && v.length > 0; }
  function hasHtml(v) { return /<[a-zA-Z/!]/.test(v); }

  M.forEach(function (m, n) {
    var tag = "[" + (m.id || "module#" + n) + "]";
    if (!isStr(m.id)) errs.push(tag + " missing id");
    if (seen[m.id]) errs.push(tag + " DUPLICATE id"); seen[m.id] = 1;
    if (!isStr(m.title)) errs.push(tag + " missing title");
    if (!isStr(m.summary)) errs.push(tag + " missing summary");
    if (isStr(m.summary) && hasHtml(m.summary)) errs.push(tag + " summary contains HTML");
    if (!isStr(m.track) || !(m.track in trackIds)) errs.push(tag + " bad track: " + m.track);
    else trackIds[m.track]++;
    if (typeof m.order !== "number") errs.push(tag + " missing numeric order");
    if (typeof m.readMins !== "number" || m.readMins < 5) errs.push(tag + " bad readMins");
    if (!Array.isArray(m.fields) || !m.fields.length) errs.push(tag + " missing fields");
    else m.fields.forEach(function (f) { if (!(f in F)) errs.push(tag + " unknown field: " + f); });

    if (!isStr(m.lesson)) errs.push(tag + " missing lesson");
    else {
      if (m.lesson.indexOf("${") !== -1) errs.push(tag + " lesson contains a template placeholder");
      if (m.lesson.indexOf("<h3>The big picture</h3>") === -1) warns.push(tag + " lesson has no 'The big picture' opener");
      var words = m.lesson.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
      if (words < 900) warns.push(tag + " lesson short: " + words + " words");
      if (words > 2400) warns.push(tag + " lesson long: " + words + " words");
      var open = (m.lesson.match(/<(h3|h4|p|div|span|ul|ol|li|strong|em|b|sub|sup)\b/g) || []).length;
      var close = (m.lesson.match(/<\/(h3|h4|p|div|span|ul|ol|li|strong|em|b|sub|sup)>/g) || []).length;
      if (open !== close) errs.push(tag + " unbalanced tags: " + open + " open vs " + close + " close");
      var eqOpen = (m.lesson.match(/<div class="eq">/g) || []).length;
      var whys = (m.lesson.match(/<span class="why">/g) || []).length;
      if (eqOpen !== whys) warns.push(tag + " " + eqOpen + " eq blocks but " + whys + " why glosses");
    }

    if (!Array.isArray(m.keyIdeas) || m.keyIdeas.length < 5) errs.push(tag + " needs 5+ keyIdeas");
    else m.keyIdeas.forEach(function (k, i) {
      if (!isStr(k)) errs.push(tag + " keyIdea " + i + " not a string");
      else if (hasHtml(k)) errs.push(tag + " keyIdea " + i + " contains HTML");
    });

    var t = m.talk || {};
    if (!Array.isArray(t.oneliners) || t.oneliners.length < 3) errs.push(tag + " needs 3+ oneliners");
    if (!Array.isArray(t.myths) || t.myths.length < 2) errs.push(tag + " needs 2+ myths");
    else t.myths.forEach(function (x, i) { if (!isStr(x.m) || !isStr(x.t)) errs.push(tag + " myth " + i + " malformed"); });
    if (!Array.isArray(t.terms) || t.terms.length < 4) errs.push(tag + " needs 4+ terms");
    else t.terms.forEach(function (x, i) { if (!isStr(x.term) || !isStr(x.def)) errs.push(tag + " term " + i + " malformed"); });
    (t.oneliners || []).forEach(function (o, i) { if (hasHtml(o)) errs.push(tag + " oneliner " + i + " contains HTML"); });

    if (!Array.isArray(m.test) || m.test.length < 3) errs.push(tag + " needs 3+ test items");
    else m.test.forEach(function (x, i) { if (!isStr(x.q) || !isStr(x.a)) errs.push(tag + " test " + i + " malformed"); });

    if (!Array.isArray(m.resources) || m.resources.length < 2) errs.push(tag + " needs 2+ resources");
    else m.resources.forEach(function (r, i) {
      if (!isStr(r.name) || !isStr(r.url)) errs.push(tag + " resource " + i + " malformed");
      else if (r.url.indexOf("http") !== 0) errs.push(tag + " resource " + i + " bad url: " + r.url);
    });
  });

  /* duplicate order within a track */
  var byTrack = {};
  M.forEach(function (m) {
    byTrack[m.track] = byTrack[m.track] || {};
    if (byTrack[m.track][m.order]) errs.push("[" + m.track + "] duplicate order " + m.order + " (" + m.id + " and " + byTrack[m.track][m.order] + ")");
    byTrack[m.track][m.order] = m.id;
  });

  /* unused fields */
  var used = {}; M.forEach(function (m) { (m.fields || []).forEach(function (f) { used[f] = 1; }); });
  Object.keys(F).forEach(function (f) { if (!used[f]) warns.push("field '" + f + "' is declared but unused"); });

  var mins = 0, ideas = 0;
  M.forEach(function (m) { mins += m.readMins || 0; ideas += (m.keyIdeas || []).length; });

  var out = [];
  out.push("MODULES: " + M.length + "   TRACKS: " + T.length + "   BIG IDEAS: " + ideas);
  out.push("TOTAL READING: " + mins + " min (" + (mins / 60).toFixed(1) + " hrs)");
  T.forEach(function (t) { out.push("  " + t.id + ": " + (trackIds[t.id] || 0) + " modules"); });
  out.push("");
  out.push("ERRORS (" + errs.length + ")");
  errs.forEach(function (e) { out.push("  x " + e); });
  out.push("WARNINGS (" + warns.length + ")");
  warns.forEach(function (w) { out.push("  ! " + w); });
  console.log(out.join("\n"));
})();
