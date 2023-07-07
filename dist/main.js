/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var o=n(698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var r=e&&e.prototype instanceof p?e:p,i=Object.create(r.prototype),s=new O(o||[]);return a(i,"_invoke",{value:L(t,n,s)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function p(){}function y(){}function m(){}var g={};h(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==n&&i.call(w,c)&&(g=w);var k=m.prototype=p.prototype=Object.create(g);function M(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(r,a,s,c){var u=v(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;a(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function L(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var c=v(t,e,n);if("normal"===c.type){if(o=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=v(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return y.prototype=m,a(k,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=h(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},M(E.prototype),h(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new E(f(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},M(k),h(k,l,"Generator"),h(k,c,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var o=n(61)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(a)?a:String(a)),r)}var i,a}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n){t(this,e),this.listAccordion=document.querySelectorAll(n),this.activeClass="active"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.listAccordion.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.listAccordion.length&&(this.toggleAccordion(this.listAccordion[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,o){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="active"}return r(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var c=function(){function e(n){var o,r;t(this,e),this.sections=document.querySelectorAll(n),this.halfWindow=window.innerHeight/2,this.checkDistance=(o=this.checkDistance.bind(this),200,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r&&clearTimeout(r),r=setTimeout((function(){o.apply(void 0,e),r=null}),200)})}return r(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.halfWindow)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("active"):t.element.classList.contains("active")&&t.element.classList.remove("active")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),u=function(){function e(n,o){t(this,e),this.internalLinks=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.internalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.internalLinks.length&&this.addLinkEvent(),this}}]),e}(),l=function(){function e(n,o,r){t(this,e),this.btnOpen=document.querySelector(n),this.btnClose=document.querySelector(o),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutsideModal=this.clickOutsideModal.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("active")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutsideModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvents",value:function(){this.btnOpen.addEventListener("click",this.eventToggleModal),this.btnClose.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutsideModal)}},{key:"init",value:function(){return this.btnOpen&&this.btnClose&&this.containerModal&&this.addModalEvents(),this}}]),e}(),h=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-180,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function f(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(){o.removeEventListener("click",i)})),n())}t.hasAttribute(r)||(e.forEach((function(){setTimeout((function(){return o.addEventListener("click",i)}))})),t.setAttribute(r,""))}var v=function(){function e(n,o){t(this,e),this.menuDropdown=document.querySelectorAll(n),this.activeClass="active",this.events=void 0===o?["touchstart","click"]:o,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return r(e,[{key:"activeDropdownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),f(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropdownMenuEvent",value:function(){var t=this;this.menuDropdown.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.menuDropdown.length&&this.addDropdownMenuEvent(),this}}]),e}(),d=function(){function e(n,o,r){t(this,e),this.btnMenu=document.querySelector(n),this.listMenu=document.querySelector(o),this.activeClass="active",this.events=void 0===r?["click","touchstart"]:r,this.toggleMenu=this.toggleMenu.bind(this)}return r(e,[{key:"toggleMenu",value:function(){var t=this;[this.listMenu,this.btnMenu].forEach((function(e){e.classList.toggle(t.activeClass)})),f(this.listMenu,this.events,(function(){t.listMenu.classList.remove(t.activeClass),t.btnMenu.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){return t.btnMenu.addEventListener(e,t.toggleMenu)}))}},{key:"init",value:function(){return this.btnMenu&&this.listMenu&&this.addMenuMobileEvents(),this}}]),e}(),p=function(){function e(n,o){t(this,e),this.openingHours=document.querySelector(n),this.activeClass=o}return r(e,[{key:"operatingData",value:function(){this.daysWeek=this.openingHours.dataset.week.split(",").map(Number),this.hourWeek=this.openingHours.dataset.schedule.split(",").map(Number)}},{key:"nowData",value:function(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.hourNow=this.dateNow.getUTCHours()-3}},{key:"open",value:function(){return this.weekOpen=-1!==this.daysWeek.indexOf(this.dayNow),this.hourOpen=this.hourNow>=this.hourWeek[0]&&this.hourNow<this.hourWeek[1],this.weekOpen&&this.hourOpen}},{key:"onOpen",value:function(){this.open()&&this.openingHours.classList.add(this.activeClass)}},{key:"init",value:function(){return this.openingHours&&(this.operatingData(),this.nowData(),this.onOpen()),this}}]),e}();function y(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}var m=n(687),g=n.n(m),b=function(){function e(n,o,r){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(o),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animateNumbers",value:function(){var t=this;this.numbers.forEach((function(e){return t.constructor.incrementNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animateNumbers())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementNumber",value:function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}]),e}();document.documentElement.className+=" js",new u("[data-menu='smooth'] a[href^='#']").init(),new i("[data-anime='accordion'] dt").init(),new a("[data-tab='menu'] li","[data-tab='content'] section").init(),new l("[data-modal='open']","[data-modal='close']","[data-modal='container']").init(),new h("[data-tooltip]").init(),new c("[data-anime='scroll']").init(),new v("[data-dropdown]").init(),new d("[data-menu='button']","[data-menu= 'list']").init(),new p("[data-week]","open").init(),function(){function t(t){var e=document.createElement("div");return e.classList.add("number-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-number>").concat(t.total,"</span>"),e}function e(){var n;return n=g().mark((function e(n){var o,r,i;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return o=e.sent,e.next=6,o.json();case 6:r=e.sent,i=document.querySelector(".numbers-grid"),r.forEach((function(e){var n=t(e);i.appendChild(n)})),new b("[data-number]",".numbers","active").init(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})),e=function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function a(t){y(i,o,r,a,s,"next",t)}function s(t){y(i,o,r,a,s,"throw",t)}a(void 0)}))},e.apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animalsapi.json")}()})()})();