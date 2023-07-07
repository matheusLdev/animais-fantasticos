import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import ScrollAnimate from "./modules/scroll-animate.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";
import BusinessHours from "./modules/business-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";

document.documentElement.className += " js";

const scrollSmooth = new ScrollSmooth("[data-menu='smooth'] a[href^='#']");
scrollSmooth.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabnav.init()

const modal = new Modal("[data-modal='open']", "[data-modal='close']", "[data-modal='container']");
modal.init()

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnimate = new ScrollAnimate("[data-anime='scroll']");
scrollAnimate.init();

const dropdown = new Dropdown("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu= 'list']");
menuMobile.init();

const businessHours = new BusinessHours("[data-week]", "open");
businessHours.init();

fetchAnimals();