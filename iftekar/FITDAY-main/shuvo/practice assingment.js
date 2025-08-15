document.addEventListener("DOMContentLoaded", () => {
  console.log("FITDAY page loaded.");

  
  document.querySelectorAll('a.nav-link, footer a').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
 
  document.querySelectorAll("button").forEach(button => {
    const btnText = button.textContent.trim().toLowerCase();
    if (btnText.includes("more details")) {
      button.addEventListener("click", () => {
      
      });
    }
    if (btnText.includes("place order")) {
      button.addEventListener("click", () => {
        alert("Order feature is coming soon!");
      });
    }
  });
}); 