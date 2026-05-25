/* Privacy-respecting analytics: GoatCounter (no cookies, no personal data collected).
   One-time setup: create site at https://www.goatcounter.com with code "sill-diary"
   and allowed URL https://newdoggerland.github.io/sill-project/ */
(function () {
  var s = document.createElement("script");
  s.async = true;
  s.dataset.goatcounter = "https://sill-diary.goatcounter.com/count";
  s.dataset.goatcounterSettings = JSON.stringify({ path: "/sill-project/" });
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
