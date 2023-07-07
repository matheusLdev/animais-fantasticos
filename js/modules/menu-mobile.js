import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(btnMenu, listMenu, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.listMenu = document.querySelector(listMenu);
    this.activeClass = "active";
    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu() {
    [this.listMenu, this.btnMenu].forEach((item) => {
      item.classList.toggle(this.activeClass);
    });
    outsideClick(this.listMenu, this.events, () => {
      this.listMenu.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => this.btnMenu.addEventListener(event, this.toggleMenu));
  }

  init() {
    if (this.btnMenu && this.listMenu) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
