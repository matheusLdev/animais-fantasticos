export default function scrollAnimate() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const halfWindow = window.innerHeight / 2;

    function livenScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - halfWindow) < 0;
        if (sectionVisible) {
          section.classList.add("active");
        };
      });
    };
    livenScroll();
    
    window.addEventListener("scroll", livenScroll);
  };
};