import outsideClick from "./outside-click.js";

export default function menuMobile() {
  const btnMenu = document.querySelector("[data-menu='button']");
  const listMenu = document.querySelector("[data-menu= 'list']");
  const events = ["click", "touchstart"];
  
  function toggleMenu() {
    [listMenu, btnMenu].forEach((item) => {
      item.classList.toggle("active");
    });
    outsideClick(listMenu, ["click", "touchstart"], () => {
      listMenu.classList.remove("active");
      btnMenu.classList.remove("active");
    });
  }

  if (btnMenu) {  
    events.forEach((event) => btnMenu.addEventListener(event, toggleMenu));
  };
}
