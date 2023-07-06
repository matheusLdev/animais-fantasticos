export default function accordionList() {
  const listAccordion = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "active";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (listAccordion.length) {
    listAccordion[0].classList.add(activeClass);
    listAccordion[0].nextElementSibling.classList.add(activeClass);

    listAccordion.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  };
}
