import "./index.0a71c0d5.js";
import "./index.cb5358d2.js";
import { t as themeSwitcher } from "./theme-switcher-9ede3823.43047733.js";
import "./init.a795f47e.js";
import "./icon-f54a8bc4.dd777044.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./modal-68c6d3f6.b6b54fe0.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./animation-268dce50.df0d8da4.js";
(async function() {
  const themes = ["theme-classic-light", "theme-classic-dark"];
  let selectedTheme = themes[1];
  setTimeout(() => {
    themeSwitcher.setTheme(selectedTheme);
  });
  const toggleModeButton = document.getElementById("toggle-mode");
  toggleModeButton.addEventListener("click", () => {
    themeSwitcher.toggleMode();
  });
  const themeSelect = document.getElementById("select-theme");
  themes.forEach((theme) => {
    const item = document.createElement("ix-select-item");
    item.label = theme;
    item.value = theme;
    themeSelect.appendChild(item);
  });
  themeSelect.selectedIndices = selectedTheme;
  themeSelect.addEventListener(
    "itemSelectionChange",
    ({ detail: [theme] }) => {
      themeSwitcher.setTheme(theme);
      selectedTheme = theme;
    }
  );
  const toggleSystem = document.getElementById("system");
  toggleSystem.addEventListener("change", ({ target }) => {
    if (target.checked) {
      themeSwitcher.setVariant();
      return;
    }
    themeSwitcher.setTheme(selectedTheme);
  });
})();
