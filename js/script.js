import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/anima-scroll.js";
import TabNav from "./modules/tabnav.js";
import initFuncionamento from "./modules/funcionamento.js";
import initTooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initAnimacaoScroll();
initFuncionamento();
initTooltip();
initMenuMobile();
