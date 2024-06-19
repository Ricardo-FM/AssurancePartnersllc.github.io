var initialTrigger,activeModal,firstFocus,lastFocus,firstFocusClass="a11y-modal-first-focus",lastFocusClass="a11y-modal-last-focus",modal=null,body=document.body,focusElements='button:not([hidden]):not([disabled]), [href]:not([hidden]), input:not([hidden]):not([type="hidden"]):not([disabled]), select:not([hidden]):not([disabled]), textarea:not([hidden]):not([disabled]), [tabindex="0"]:not([hidden]):not([disabled]), summary:not([hidden]), [contenteditable]:not([hidden]), audio[controls]:not([hidden]), video[controls]:not([hidden])';setupModal=function(){for(var e=0;e<modal.length;e++){var t=modal[e],o=t.querySelector(".a11y-modal-title:first-of-type").textContent,a=t.querySelectorAll(focusElements);t.setAttribute("role","dialog"),t.hidden=!0,t.setAttribute("aria-labelledby",o),setupClose(t),a.length>0&&(a[0].classList.add(firstFocusClass),a[a.length-1].classList.add(lastFocusClass))}},setupTrigger=function(){for(var e,t=document.querySelectorAll(".a11y-modal-trigger"),o=0;o<t.length;o++){var a=(e=t[o]).getAttribute("data-target");e.id=a+"_trigger-"+e.nodeName,e.addEventListener("click",openModal),e.addEventListener("keydown",keyEvents,!1)}},setupClose=function(e){for(var t=e.querySelectorAll(".a11y-modal-close"),o=0;o<t.length;o++)t[o].setAttribute("aria-label","Close"),t[o].addEventListener("click",closeModal);document.addEventListener("keydown",keyEvents,!1)},moveModal=function(){for(var e=body.firstElementChild||null,t=0;t<modal.length;t++)body.insertBefore(modal[t],e);body.insertAdjacentHTML("beforeend",'<div class="a11y-modal-overlay"></div>')},openModal=function(){var e=this.getAttribute("data-target"),t=(activeModal=document.getElementById(e)).querySelector(".a11y-modal-close");initialTrigger=this.id;var o=document.querySelectorAll("body > *:not(.a11y-modal)");if(!body.classList.contains("a11y-modal-open")){body.classList.add("a11y-modal-open");for(var a=0;a<o.length;a++)o[a].setAttribute("aria-hidden","true")}return activeModal.removeAttribute("hidden"),t.focus(),document.addEventListener("click",outsideClose,!1),document.addEventListener("touchend",outsideClose,!1),[initialTrigger,activeModal]},closeModal=function(){for(var e=document.getElementById(initialTrigger),t=document.querySelectorAll("body > *:not(.a11y-modal)"),o=document.querySelectorAll(".a11y-modal"),a=0;a<t.length;a++)t[a].setAttribute("aria-hidden","false");body.classList.remove("a11y-modal-open");for(var s=0;s<o.length;s++)o[s].hasAttribute("hidden")||(o[s].hidden=!0);return e.focus(),[initialTrigger=void 0,activeModal=void 0]},outsideClose=function(e){body.classList.contains("a11y-modal-open")&&!e.target.classList.contains("a11y-modal-trigger")&&(activeModal.querySelector(".a11y-modal-dialog").contains(e.target)||closeModal())},keyEvents=function(e){var t=e.keyCode||e.which,o=27,a=13,s=32,l=9;if(e.target.classList.contains("a11y-modal-trigger"))switch(t){case a:case s:e.preventDefault(),e.target.click()}if(body.classList.contains("a11y-modal-open")){switch(t){case o:closeModal()}body.classList.contains("a11y-modal-open")&&(firstFocus=$(activeModal)[0].getElementsByClassName(firstFocusClass)[0],lastFocus=$(activeModal)[0].getElementsByClassName(lastFocusClass)[0]),document.activeElement.classList.contains(lastFocusClass)&&(t!==l||e.shiftKey||(e.preventDefault(),$(firstFocus).focus())),document.activeElement.classList.contains(firstFocusClass)&&t===l&&e.shiftKey&&(e.preventDefault(),$(lastFocus).focus())}},initModal=function(){moveModal(),setupModal(),setupTrigger()},document.addEventListener("DOMContentLoaded",(function(){modal=document.querySelectorAll(".a11y-modal"),initModal()}));