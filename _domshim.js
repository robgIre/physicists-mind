/* Minimal DOM shim so app.js can be executed headlessly in JavaScriptCore.
   Enough of document/localStorage to exercise boot() and openReader().
   Run: cat _shim.js curriculum.js content-*.js _domshim.js app.js _rendertest.js > /tmp/_r.js
        osascript -l JavaScript /tmp/_r.js                                                     */
var window = this;

function El(tag) {
  this.tagName = tag; this.className = ""; this.children = []; this.style = {};
  this._html = ""; this._text = ""; this._attrs = {}; this._listeners = {};
  this.checked = false; this.value = "";
}
El.prototype = {
  get innerHTML() { return this._html; },
  set innerHTML(v) { this._html = String(v); },
  get textContent() { return this._text; },
  set textContent(v) { this._text = String(v); },
  appendChild: function (c) { this.children.push(c); return c; },
  setAttribute: function (k, v) { this._attrs[k] = v; },
  getAttribute: function (k) { return this._attrs[k]; },
  addEventListener: function (ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
  querySelector: function () { return new El("div"); },
  querySelectorAll: function () { return []; },
  classList: null
};
Object.defineProperty(El.prototype, "classList", {
  get: function () {
    var self = this;
    if (!self._cl) {
      self._cl = {
        add: function (c) { if (self.className.indexOf(c) === -1) self.className = (self.className + " " + c).trim(); },
        remove: function (c) { self.className = self.className.split(/\s+/).filter(function (x) { return x !== c; }).join(" "); },
        toggle: function (c) { if (self.className.indexOf(c) === -1) self._cl.add(c); else self._cl.remove(c); },
        contains: function (c) { return self.className.indexOf(c) !== -1; }
      };
    }
    return self._cl;
  }
});

var _byId = {};
["sFields", "sIdeas", "sTime", "sFluency", "ringfg", "ringpct", "pace", "paceval", "filters",
 "tracks", "reader", "rClose", "rTrack", "rTitle", "rBadges", "lessonBody", "keyideasBox",
 "talkBody", "testBody", "resList", "btnSettings", "btnCloseSettings", "settings", "btnExport",
 "btnImport", "fileImport", "btnReset", "pane-lesson", "pane-talk", "pane-test", "pane-res"
].forEach(function (id) { _byId[id] = new El("div"); _byId[id].id = id; });

var _rtabs = ["lesson", "talk", "test", "res"].map(function (p) {
  var e = new El("button"); e.className = "rtab"; e.setAttribute("data-pane", p); return e;
});
var _rpanel = new El("div"); _rpanel.className = "rpanel"; _rpanel.scrollTop = 0;

var document = {
  _boot: null,
  body: { style: {} },
  createElement: function (t) { return new El(t); },
  addEventListener: function (ev, fn) { if (ev === "DOMContentLoaded") document._boot = fn; },
  querySelector: function (sel) {
    if (sel.charAt(0) === "#") return _byId[sel.slice(1)] || new El("div");
    if (sel === ".rpanel") return _rpanel;
    return new El("div");
  },
  querySelectorAll: function (sel) {
    if (sel === ".rtab") return _rtabs;
    if (sel === ".rpane") return [_byId["pane-lesson"], _byId["pane-talk"], _byId["pane-test"], _byId["pane-res"]];
    return [];
  }
};

var _store = {};
var localStorage = {
  getItem: function (k) { return Object.prototype.hasOwnProperty.call(_store, k) ? _store[k] : null; },
  setItem: function (k, v) { _store[k] = String(v); },
  removeItem: function (k) { delete _store[k]; }
};
