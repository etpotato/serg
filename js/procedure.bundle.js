!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return c}));const n=e=>new Promise(t=>{e.style.opacity=1,function r(){if((e.style.opacity-=.1)<=0)return t();requestAnimationFrame(r)}()}),c=e=>new Promise(t=>{e.style.opacity=0,function r(){let n=parseFloat(e.style.opacity);if((n+=.1)>=1.1)return t();e.style.opacity=n,requestAnimationFrame(r)}()})},function(e,t){const r=document.querySelector(".header__nav-wrapper"),n=r.querySelector(".header__nav-link--current"),c=r.querySelector(".header__nav-toggle"),o=e=>{e.preventDefault(),r.classList.remove("header__nav-wrapper--opened"),c.setAttribute("aria-expanded","false")};(()=>{const e=document.createElement("div");e.classList.add("header__nav-underlay"),r.prepend(e),e.addEventListener("click",o)})(),r.classList.remove("header__nav-wrapper--no-js"),c.addEventListener("click",e=>{e.preventDefault(),r.classList.toggle("header__nav-wrapper--opened");const t="true"===c.getAttribute("aria-expanded");c.setAttribute("aria-expanded",!t)}),n&&n.addEventListener("click",o)},,function(e,t,r){"use strict";r.r(t);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){if(!("string"==typeof e||e instanceof String)){var t=n(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r,n;c(e),"object"===i(t)?(r=t.min||0,n=t.max):(r=arguments[1],n=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=r&&(void 0===n||o<=n)}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};var s="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",u="(".concat(s,"[.]){3}").concat(s),d=new RegExp("^".concat(u,"$")),_="(?:[0-9a-fA-F]{1,4})",m=new RegExp("^("+"(?:".concat(_,":){7}(?:").concat(_,"|:)|")+"(?:".concat(_,":){6}(?:").concat(u,"|:").concat(_,"|:)|")+"(?:".concat(_,":){5}(?::").concat(u,"|(:").concat(_,"){1,2}|:)|")+"(?:".concat(_,":){4}(?:(:").concat(_,"){0,1}:").concat(u,"|(:").concat(_,"){1,3}|:)|")+"(?:".concat(_,":){3}(?:(:").concat(_,"){0,2}:").concat(u,"|(:").concat(_,"){1,4}|:)|")+"(?:".concat(_,":){2}(?:(:").concat(_,"){0,3}:").concat(u,"|(:").concat(_,"){1,5}|:)|")+"(?:".concat(_,":){1}(?:(:").concat(_,"){0,4}:").concat(u,"|(:").concat(_,"){1,6}|:)|")+"(?::((?::".concat(_,"){0,5}:").concat(u,"|(?::").concat(_,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(c(e),!(t=String(t)))return f(e,4)||f(e,6);if("4"===t){if(!d.test(e))return!1;var r=e.split(".").sort((function(e,t){return e-t}));return r[3]<=255}return"6"===t&&!!m.test(e)}var p={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},v=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,g=/^[a-z\d]+$/,b=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,L=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function x(e,t){if(c(e),(t=o(t,p)).require_display_name||t.allow_display_name){var r=e.match(v);if(r){var n=r[1];if(e=e.replace(n,"").replace(/(^<|>$)/g,""),n.endsWith(" ")&&(n=n.substr(0,n.length-1)),!function(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;if(/[\.";<>]/.test(t)){if(t===e)return!1;if(!(t.split('"').length===t.split('\\"').length))return!1}return!0}(n))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>254)return!1;var i=e.split("@"),s=i.pop(),u=i.join("@"),d=s.toLowerCase();if(t.domain_specific_validation&&("gmail.com"===d||"googlemail.com"===d)){var _=(u=u.toLowerCase()).split("+")[0];if(!a(_.replace(".",""),{min:6,max:30}))return!1;for(var m=_.split("."),x=0;x<m.length;x++)if(!g.test(m[x]))return!1}if(!(!1!==t.ignore_max_length||a(u,{max:64})&&a(s,{max:254})))return!1;if(!function(e,t){c(e),(t=o(t,l)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var r=e.split("."),n=r[r.length-1];if(t.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(n))return!1}return!(!t.allow_numeric_tld&&/^\d+$/.test(n))&&r.every((function(e){return!(e.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)&&(!/[\uff01-\uff5e]/.test(e)&&(!/^-|-$/.test(e)&&!(!t.allow_underscores&&/_/.test(e)))))}))}(s,{require_tld:t.require_tld})){if(!t.allow_ip_domain)return!1;if(!f(s)){if(!s.startsWith("[")||!s.endsWith("]"))return!1;var S=s.substr(1,s.length-2);if(0===S.length||!f(S))return!1}}if('"'===u[0])return u=u.slice(1,u.length-1),t.allow_utf8_local_part?L.test(u):b.test(u);for(var q=t.allow_utf8_local_part?h:y,E=u.split("."),k=0;k<E.length;k++)if(!q.test(E[k]))return!1;return!t.blacklisted_chars||-1===u.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))}const S=/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{2}[\s-]?([0-9][\s-]?){3}[0-9]{2}$/,q="Отправить",E="Отправлено!",k=document.querySelector(".contact__form"),F=Array.from(k.querySelectorAll(".contact__form-input")),w=k.querySelector("#contact-name"),A=k.querySelector("#contact-address"),j=k.querySelector("#contact-message"),O=k.querySelector(".contact__form-submit-wrapper"),D=O.querySelector(".contact__form-submit"),$=e=>{const t=e.parentElement.querySelector(".contact__form-label-invalid");if(e.classList.add("contact__form-input--invalid"),t)return;const r=document.createElement("span");r.classList.add("contact__form-label-invalid"),r.textContent=e.dataset.error,e.parentNode.append(r)},C=e=>{const t=e.parentNode.querySelector(".contact__form-label-invalid");t&&t.remove(),e.classList.remove("contact__form-input--invalid")},N=()=>{const e=w.value;if(""===e)return!1;const t=""!==e.trim();return t?C(w):$(w),t},P=()=>{const e=A.value;if(""===e)return!1;const t=x(e)||S.test(e.trim());return t?C(A):$(A),t},z=()=>{const e=j.value;if(""===e)return!1;const t=""!==e.trim();return t?C(j):$(j),t},R=()=>{O.querySelector(".contact__form-submitted").remove(),D.classList.remove("contact__form-submit--success"),D.textContent=q,D.disabled=!1,k.removeEventListener("click",R)},I=e=>{(()=>{const e=document.createElement("p");e.classList.add("contact__form-submitted"),e.textContent="Мы свяжемся с вами в ближайшее время",O.append(e)})(),D.classList.add("contact__form-submit--success"),D.textContent=E,k.reset(),D.disabled=!0,k.addEventListener("click",R),e.text().then(e=>{window.open().document.write(e)})},T=()=>{const e=document.createElement("p");e.classList.add("contact__form-submit-error"),e.textContent="Ошибка отправки данных. Попробуйте еще раз.",k.append(e),setTimeout(()=>{e.remove()},5e3)};F.forEach(e=>e.required=!1),w.addEventListener("blur",N),A.addEventListener("blur",P),j.addEventListener("blur",z),k.addEventListener("submit",e=>{if(e.preventDefault(),D.blur(),[N(),P(),z()].every(e=>!0===e))t=new FormData(e.target),r=I,n=T,fetch("https://echo.htmlacademy.ru/courses",{method:"POST",body:t}).then(e=>{if(e.ok)return r(e);throw new Error(`${e.status} ${e.statusText}`)}).catch(n);else{Array.from(k.querySelectorAll("*:placeholder-shown")).forEach(e=>$(e)),k.querySelector(".contact__form-input--invalid").focus()}var t,r,n})},,function(e,t,r){r(1),r(6),r(3),e.exports=r(10)},function(e,t,r){"use strict";r.r(t);var n=r(0);const c=document.querySelector(".header__region-list"),o=document.querySelector(".procedure"),i={navList:null,price:null},a=e=>{if(e.preventDefault(),"procedure__nav-link"!==e.target.className)return;i.navList.removeEventListener("click",a);const t=i.navList.querySelector(".procedure__nav-link--current"),r=e.target;t.classList.remove("procedure__nav-link--current"),r.classList.add("procedure__nav-link--current");const c=(o=e.target.href).slice(o.indexOf("#"));var o;const l=i.price.querySelector(".procedure__section--current"),s=i.price.querySelector(""+c);Object(n.b)(l).then(()=>(l.classList.remove("procedure__section--current"),s.classList.add("procedure__section--current"),Object(n.a)(s))).then(()=>{i.navList.addEventListener("click",a)})},l=e=>{if(e.preventDefault(),!e.target.matches(".header__region-link")||e.target.matches(".header__region-link--current"))return;c.removeEventListener("click",l);const t=c.querySelector(".header__region-link--current"),r=e.target;t.classList.remove("header__region-link--current"),r.classList.add("header__region-link--current");const s=e.target.href.slice(e.target.href.indexOf("#")),u=o.querySelector(".procedure__unit--current"),d=u.querySelector(".procedure__nav-list"),_=o.querySelector(""+s),m=_.querySelector(".procedure__nav-list");Object(n.b)(u).then(()=>(u.classList.remove("procedure__unit--current"),_.classList.add("procedure__unit--current"),Object(n.a)(_))).then(()=>{c.addEventListener("click",l)}),i.navList=m,i.price=_.querySelector(".procedure__price"),d.removeEventListener("click",a),m.addEventListener("click",a)};(()=>{const e=(()=>{const e=sessionStorage.getItem("regionId");return sessionStorage.removeItem("regionId"),e||"#head"})(),t=c.querySelector(`.header__region-link[href="${e}"]`),r=o.querySelector(""+e);t.classList.add("header__region-link--current"),r.classList.add("procedure__unit--current"),i.navList=r.querySelector(".procedure__nav-list"),i.price=r.querySelector(".procedure__price"),o.classList.remove("procedure--no-js"),i.navList.addEventListener("click",a)})(),c.addEventListener("click",l)},,,,function(e,t,r){"use strict";r.r(t);var n=r(0);const c=["Escape","Esc"],o=document.querySelector(".result"),i=o.querySelector(".result__list"),a=i.childNodes,l=o.querySelector(".result__swipe--prev"),s=o.querySelector(".result__swipe--next");let u=i.querySelector(".result__item--current"),d=u.querySelector(".result__gallery"),_=d.querySelector(".result__gallery-list"),m=Array.from(_.childNodes),f=_.querySelector(".result__gallery-item--current"),p=d.querySelector(".result__pagination-list"),v=Array.from(p.childNodes),y=p.querySelector(".result__pagination-item--current"),g=y.querySelector(".result__pagination-item-underline--current");const b=e=>{d=e.querySelector(".result__gallery"),_=d.querySelector(".result__gallery-list"),m=Array.from(_.childNodes),f=_.querySelector(".result__gallery-item--current"),p=d.querySelector(".result__pagination-list"),v=Array.from(p.childNodes),y=p.querySelector(".result__pagination-item--current"),g=y.querySelector(".result__pagination-item-underline--current")},h=e=>{const t=Array.from(e.querySelectorAll(".result__gallery-image img")),r=Array.from(e.querySelectorAll(".result__pagination-button"));t[0].removeAttribute("loading"),t.forEach((e,t)=>{const n=e.srcset.slice(0,e.srcset.indexOf(" 200w"));r[t].style.backgroundImage=`url("${n}")`}),_.addEventListener("click",S),p.addEventListener("click",q)},L=()=>{const e=o.querySelector(".result__underlay");o.classList.remove("result--popup-open"),Object(n.b)(e).then(()=>{e.remove(),o.style.height="auto",_.addEventListener("click",S)}),document.body.classList.remove("no-scroll"),e.removeEventListener("click",L),document.removeEventListener("keydown",x)},x=e=>{e.preventDefault(),(e=>c.some(t=>e.key===t))(e)&&L()},S=e=>{if(e.preventDefault(),"result__gallery-link"===!e.target.className)return;const t=document.createElement("div");t.classList.add("result__underlay"),o.prepend(t),Object(n.a)(t).then(()=>{t.addEventListener("click",L),document.addEventListener("keydown",x)});const r=o.getBoundingClientRect().height;o.style.height=r+"px",o.classList.add("result--popup-open"),document.body.classList.add("no-scroll"),_.removeEventListener("click",S)},q=e=>{if(e.preventDefault(),"result__pagination-button"!==e.target.className||e.target.closest(".result__pagination-item--current"))return;p.removeEventListener("click",q);const t=y.getBoundingClientRect().x,r=e.target.closest(".result__pagination-item"),c=r.querySelector(".result__pagination-item-underline"),o=r.getBoundingClientRect().x,i=v.indexOf(r),a=m[i];y.classList.remove("result__pagination-item--current"),r.classList.add("result__pagination-item--current"),y=r,a.querySelector("img").removeAttribute("loading");let l=0;const s=()=>{l+=1,2===l&&p.addEventListener("click",q)};Object(n.b)(f).then(()=>(f.classList.remove("result__gallery-item--current"),a.classList.add("result__gallery-item--current"),f=a,Object(n.a)(a))).then(()=>{s()}),g.addEventListener("transitionend",()=>{c.classList.add("result__pagination-item-underline--current"),g.classList.remove("result__pagination-item-underline--current"),g.style.transform="none",g=c,s()},{once:!0}),g.style.transform=`translateX(${o-t}px)`},E=e=>{e.preventDefault(),s.removeEventListener("click",E),l.removeEventListener("click",k);const t=u.nextSibling?u.nextSibling:a[0];Object(n.b)(u).then(()=>(u.classList.remove("result__item--current"),t.classList.add("result__item--current"),u=t,Object(n.a)(t))).then(()=>{s.addEventListener("click",E),l.addEventListener("click",k)}),_.removeEventListener("click",S),p.removeEventListener("click",q),b(t),h(d)},k=e=>{e.preventDefault(),s.removeEventListener("click",E),l.removeEventListener("click",k);const t=u.previousSibling?u.previousSibling:a[a.length-1],r=t.querySelector(".result__gallery-list"),c=t.querySelector(".result__pagination-list");d=t.querySelector(".result__gallery"),m=Array.from(r.childNodes),v=Array.from(c.childNodes),Object(n.b)(u).then(()=>(u.classList.remove("result__item--current"),t.classList.add("result__item--current"),u=t,Object(n.a)(t))).then(()=>{s.addEventListener("click",E),l.addEventListener("click",k)}),_.removeEventListener("click",S),p.removeEventListener("click",q),b(t),h(d)};o.classList.remove("result--no-js"),h(d),s.addEventListener("click",E),l.addEventListener("click",k)}]);
//# sourceMappingURL=procedure.bundle.js.map