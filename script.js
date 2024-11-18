// script.js
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelector(".tab.active").classList.remove("active");
      tab.classList.add("active");
  
      // Filter logic (placeholder for now)
      const filter = tab.getAttribute("data-filter");
      console.log("Filtering by:", filter); // Add dynamic content display logic here
    });
  });
  