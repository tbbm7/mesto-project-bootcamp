(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.addEventListener("click",(function(e){e.target.removeAttribute("disabled",!0)}))):(t.classList.add(n.inactiveButtonClass),t.addEventListener("click",(function(e){e.target.setAttribute("disabled",!0)})))}function n(e){var t=document.querySelector(".popup_is-opened");t.classList.contains("popup_is-opened")&&"Escape"===e.key&&r(t)}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function r(e){e.classList.remove("popup_is-opened")}e.d({},{bG:()=>L,Rm:()=>q,KM:()=>U,O9:()=>x,gB:()=>h,Hf:()=>S,hD:()=>C,rC:()=>E});var c={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-6",headers:{authorization:"740e5163-c9a1-46d5-933d-03893aa484e5","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var a=function(e){return fetch("".concat(c.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:c.headers}).then((function(e){return u(e)}))},i=function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:c.headers}).then((function(e){return u(e)}))},l=function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:c.headers}).then((function(e){return u(e)}))};function s(e,t){var n=L.querySelector(".element").cloneNode(!0),r=n.querySelector(".element__button-like"),c=n.querySelector(".element__delete"),u=n.querySelector(".element__image"),s=n.querySelector(".element__like-number");u.src=e.link,u.alt=e.name;var d=t,p=e.owner._id,f=e._id,m=e.likes;return s.textContent=m.length,n.querySelector(".element__title").textContent=e.name,r.addEventListener("click",(function(e){!function(e,t,n){t.classList.contains("button_active")?l(n).then((function(n){e.textContent=n.likes.length,t.classList.remove("button_active")})).catch((function(e){console.log(e)})):i(n).then((function(n){e.textContent=n.likes.length,t.classList.add("button_active")})).catch((function(e){console.log(e)}))}(s,r,f)})),p!==d?c.classList.add("button_nonactive"):c.addEventListener("click",(function(e){a(f),c.closest(".element").remove()})),m.forEach((function(e){e._id==d&&r.classList.add("button_active")})),u.addEventListener("click",(function(t){o(S);var n=u;E.setAttribute("src",n.src),E.setAttribute("alt",n.alt),C.textContent=e.name})),n}var d,p=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__add-button"),m=document.querySelector(".profile__title"),_=document.querySelector(".profile__subtitle"),v=document.querySelector("#edit-profile"),h=document.querySelector("#new-location"),y=document.querySelector('[name="edit_form"]'),b=document.querySelector('[name="add_form"]'),S=document.querySelector("#popup__image"),q=document.querySelector(".elements__list"),L=document.querySelector("#element-template").content,E=document.querySelector(".popup__image"),C=document.querySelector(".popup__about"),k=document.querySelectorAll(".popup__button-close"),g=y.querySelector('[name="firstname"]'),A=y.querySelector('[name="subtitle"]'),x=b.querySelector('[name="title"]'),U=b.querySelector('[name="link"]'),O=(document.querySelector(".elements__list"),document.querySelector("#edit_avatar")),P=document.querySelector('[name="avatar_edit_form"]'),T=document.querySelector(".profile__edit_avatar"),w=(document.querySelector(".profile__subtitle"),P.querySelector('[name="avatar"]')),B=document.querySelector(".profile__avatar");d={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__text_error_visible"},Array.from(document.querySelectorAll(d.formSelector)).forEach((function(e){!function(e,n){var o=e.querySelectorAll(n.inputSelector),r=Array.from(o),c=e.querySelector(n.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector("#".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector("#".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,o,n),t(r,c,n)}))})),t(r,c,n)}(e,d)})),p.addEventListener("click",(function(){g.value=m.textContent,A.value=_.textContent,o(v)})),f.addEventListener("click",(function(){o(h)})),T.addEventListener("click",(function(){o(O)})),y.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=document.querySelector(".popup_is-opened").querySelector(".popup__button");o.setAttribute("value","Сохранение..."),(t=g.value,n=A.value,fetch("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return u(e)}))).then((function(e){m.textContent=e.name,_.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){o.setAttribute("value","Сохранить")})),r(v)})),b.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=document.querySelector(".popup_is-opened").querySelector(".popup__button");o.setAttribute("value","Сохранение..."),(t=x.value,n=U.value,fetch("".concat(c.baseUrl,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return u(e)}))).then((function(e){var t=s(e,e.owner._id);q.prepend(t)})).finally((function(){o.setAttribute("value","Сохранить")})),e.target.reset(),r(h)})),P.addEventListener("submit",(function(e){e.preventDefault();var t,n=document.querySelector(".popup_is-opened").querySelector(".popup__button");n.setAttribute("value","Сохранение..."),(t=w.value,fetch("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:t})}).then((function(e){return u(e)}))).then((function(e){B.setAttribute("src",e.avatar)})).catch((function(e){console.log(e)})).finally((function(){n.setAttribute("value","Сохранить")})),r(O)})),k.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return r(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup_is-opened")&&r(e)}))})),Promise.all([fetch("".concat(c.baseUrl,"/users/me"),{headers:c.headers}).then((function(e){return u(e)})),fetch("".concat(c.baseUrl,"/cards"),{headers:c.headers}).then((function(e){return u(e)}))]).then((function(e){var t,n;!function(e){m.textContent=e.name,_.textContent=e.about,B.setAttribute("src",e.avatar)}(e[0]),t=e[1],n=e[0]._id,t.forEach((function(e){var t=s(e,n);q.append(t)}))})).catch((function(e){console.log(e)}))})();