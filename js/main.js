// Theme toggle: cycles system -> light -> dark, remembered per browser.
(function () {
  const root = document.documentElement;
  const order = ["system", "light", "dark"];

  function read() {
    try { return localStorage.getItem("theme") || "system"; } catch { return "system"; }
  }

  function apply(theme) {
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }

  apply(read());

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    if (!button) return;

    const label = (t) => (button.title = `Theme: ${t}`);
    label(read());
    button.addEventListener("click", () => {
      const next = order[(order.indexOf(read()) + 1) % order.length];
      try { localStorage.setItem("theme", next); } catch {}
      apply(next);
      label(next);
    });
  });
})();
