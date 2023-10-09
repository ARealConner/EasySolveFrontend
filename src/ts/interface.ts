const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark"; // Changed 'light' to 'dark' here

document.documentElement.setAttribute("data-theme", currentTheme);

if (themeToggle) {
    if (currentTheme === "light") {
        themeToggle.textContent = "Dark Mode";
    } else {
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggle.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggle.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}
