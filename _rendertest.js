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
  out.push(fails === 0 ? "RENDER TEST PASSED" : "RENDER TEST FAILED (" + fails + " problems)");
  console.log(out.join("\n"));
})();
