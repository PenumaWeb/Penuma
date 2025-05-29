// Highlight nav links based on URL hash (Header nav)
document.addEventListener("DOMContentLoaded", () => {
  const headerLinks = document.querySelectorAll("#nav-links a");
  const currentHash = window.location.hash;

  headerLinks.forEach(link => {
    if (link.getAttribute("href") === currentHash) {
      link.classList.add("text-blue-950", "font-semibold", "border-b-2", "border-blue-950");
    }
  });

  // Highlight footer quick links based on scroll position (Homepage)
  const sectionIds = ["Section1", "Section2", "Podcast", "paid-resources", "Section3"];
  const quickLinks = document.querySelectorAll("#Quickcenter a");

  window.addEventListener("scroll", () => {
    let current = "";
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 120) {
        current = id;
      }
    });

    quickLinks.forEach(link => {
      link.classList.remove("text-blue-950", "font-semibold");
      if (link.getAttribute("href") === `/#${current}`) {
        link.classList.add("text-blue-950", "font-semibold");
      }
    });
  });
});
