// Function to show the Home section
function showHome() {
  document.getElementById("home-content").classList.remove("hidden");
  document.getElementById("dynamic-content").classList.add("hidden");
}

// Function to load a specific section from navItems.html
function loadSection(sectionId) {
  fetch("navItems.html")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load content");
      return response.text();
    })
    .then((data) => {
      // Parse the HTML and extract the requested section
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

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
