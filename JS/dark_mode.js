const chk = document.getElementById("chk");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// load dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

chk.addEventListener("change", () => {
  toggleDarkMode();

  // salvando dark mode
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark", 1);
  }
});
