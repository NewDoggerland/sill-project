/* Privacy-respecting analytics: GoatCounter (no cookies, no personal data collected).
   Site: https://sill.goatcounter.com */
(function () {
  var s = document.createElement("script");
  s.async = true;
  s.dataset.goatcounter = "https://sill.goatcounter.com/count";
  s.dataset.goatcounterSettings = JSON.stringify({ path: "/sill-project/" });
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
