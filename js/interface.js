const themeToggle = document.getElementById("themeToggle");
let currentTheme = localStorage.getItem("theme") || "dark";

// Apply theme to document
document.documentElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "dark") {
  themeToggle.textContent = "Light Mode";
} else {
  themeToggle.textContent = "Dark Mode";
}

// Function to update iframe themes
const updateIframeThemes = (newTheme) => {
  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      iframe.contentWindow.document.documentElement.setAttribute(
        "data-theme",
        newTheme,
      );
    } catch (e) {
      console.error("Could not set theme for iframe:", e);
    }
  });
};

// Event listener for theme toggle button
themeToggle.addEventListener("click", () => {
  currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", newTheme);
  updateIframeThemes(newTheme);
});

// Event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const hideHeader = urlParams.get("hideHeader");
  if (hideHeader === "true") {
    document.querySelector("header").style.display = "none";
  }
  updateIframeThemes(currentTheme);
});

// Update theme for embedded iframes if this page is within an iframe
if (window.self !== window.top) {
  try {
    const parentTheme =
      window.parent.document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", parentTheme);
  } catch (e) {
    console.error("Could not get theme from parent:", e);
  }
}
