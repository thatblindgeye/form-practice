!function(){"use strict";const e=document.querySelector("#theme-switch"),t=t=>{"light"===document.documentElement.getAttribute("theme")?(e.setAttribute("aria-checked","false"),document.documentElement.setAttribute("theme","dark")):(e.setAttribute("aria-checked","true"),document.documentElement.setAttribute("theme","light"))},r=(document.querySelector('input[type="submit"]'),document.querySelectorAll(".password-visibility"));t(),e.addEventListener("click",t),e.addEventListener("keydown",(e=>{" "===e.key&&(e.preventDefault(),t())})),Array.from(r).forEach((e=>{e.addEventListener("click",(e=>{(e=>{"password"===e.target.previousElementSibling.type?e.target.previousElementSibling.type="text":e.target.previousElementSibling.type="password"})(e),console.log(e.target)}))}))}();