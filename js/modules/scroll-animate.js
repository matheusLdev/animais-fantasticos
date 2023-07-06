export default function scrollAnimate() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  function livenScroll() {
    const halfWindow = window.innerHeight / 2;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - halfWindow) < 0;
      if (sectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      };
    });
  }
  
  if (sections.length) { 
    livenScroll();
    window.addEventListener("scroll", livenScroll);
  };
}
