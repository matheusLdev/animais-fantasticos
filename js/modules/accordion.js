export default class Accordion {
  constructor(list) {
    this.listAccordion = document.querySelectorAll(list);
    this.activeClass = "active"
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // add events accordion
  addAccordionEvent() {
    this.listAccordion.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  
  // start function
  init() {
    if (this.listAccordion.length) {
      // active first item
      this.toggleAccordion(this.listAccordion[0]);
      this.addAccordionEvent();
    };
    return this
  }
}
