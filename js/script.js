import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/anima-scroll.js";
import initTabNav from "./modules/tabnav.js";
import initAccordion from "./modules/accordion.js";
import initFuncionamento from "./modules/funcionamento.js";
import initTooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initTabNav();
initAccordion();
initFuncionamento();
initTooltip();
initMenuMobile();
