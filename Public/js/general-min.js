document.addEventListener("DOMContentLoaded",()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,l=document.getElementById(t);e.classList.toggle("is-active"),l.classList.toggle("is-active"),document.body.classList.toggle("frozen")})})});const panels=document.querySelectorAll(".dropdown-arrow");function toggleOpen(){console.log("Hello"),this.classList.toggle("activate"),this.nextElementSibling.nextElementSibling.classList.toggle("activate"),this.parentElement.classList.toggle("activate")}panels.forEach(e=>e.addEventListener("click",toggleOpen)),window.sr=ScrollReveal(),sr.reveal(".hero-body, .header-body",{duration:1e3,interval:400});