/* Bascule clair / sombre via le bouton « RT ». Le choix est mémorisé dans le navigateur. */
(function () {
  "use strict";
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function sync() {
    var dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("title", dark ? "Passer en mode clair" : "Passer en mode sombre");
    btn.setAttribute("aria-label", btn.getAttribute("title"));
  }

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
    window.setTimeout(function () { root.classList.remove("theme-anim"); }, 500);
  });

  sync();
})();
