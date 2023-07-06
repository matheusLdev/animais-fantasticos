import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
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

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabnav.init()

scrollAnimate();
modal();
tooltip();
dropdown();
menuMobile();
businessHours();
fetchAnimals();