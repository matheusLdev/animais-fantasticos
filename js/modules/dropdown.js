import outsideClick from "./outside-click.js";

export default class Dropdown {
  constructor(menuDropdown, events) {
    this.menuDropdown = document.querySelectorAll(menuDropdown);
    this.activeClass = "active";
    if (events === undefined) { 
      this.events = ["touchstart", "click"];
    } else { 
      this.events = events;
    };
    
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.menuDropdown.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.menuDropdown.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
