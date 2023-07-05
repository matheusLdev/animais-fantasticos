import outsideClick from "./outside-click.js";

export default function dropdown() {
  const menuDropdown = document.querySelectorAll("[data-dropdown]");

  menuDropdown.forEach(menu => {
    ["touchstart", "click"].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  };
};