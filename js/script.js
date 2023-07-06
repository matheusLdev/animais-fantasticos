import accordionList from "./modules/accordion-list.js";
import tabNav from "./modules/navegation-tabs.js";
import scrollAnimate from "./modules/scroll-animate.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropdown from "./modules/dropdown.js";
import menuMobile from "./modules/menu-mobile.js";
import businessHours from "./modules/business-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";

document.documentElement.className += " js";

const scrollSmooth = new ScrollSmooth("[data-menu='smooth'] a[href^='#']");
scrollSmooth.init();

accordionList();
tabNav();
scrollAnimate();
modal();
tooltip();
dropdown();
menuMobile();
businessHours();
fetchAnimals();