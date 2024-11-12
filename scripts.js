// Show Home Section
function showHome() {
  document.getElementById("home-content").classList.remove("hidden");
  document.getElementById("dynamic-content").classList.add("hidden");
}

// Load Specific Section from navItems.html
function loadSection(sectionId) {
  fetch("navItems.html")
    .then((response) =>
      response.ok ? response.text() : Promise.reject("Failed to load content")
    )
    .then((data) => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, "text/html");
      const section = htmlDoc.getElementById(sectionId);

      if (section) {
        document.getElementById("dynamic-content").innerHTML =
          section.outerHTML;
        document.getElementById("dynamic-content").classList.remove("hidden");
        document.getElementById("home-content").classList.add("hidden");
      }
    })
    .catch((error) => console.error("Error loading section:", error));
}

// Toggle Mobile Menu
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Set Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();
