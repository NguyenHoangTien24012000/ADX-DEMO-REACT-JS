window.addEventListener("load",(e=>{!function(e){const t=document.querySelector(`#${e}`),o=t.querySelector("#slider"),n=t.querySelectorAll("#slider-item").length;let r=0;0===r&&(t.querySelector("#prev").style.opacity=.5),t.querySelector("#next").addEventListener("click",(function(){r<n-1&&(r+=1),t.querySelector("#prev").style.opacity=1,r===n-1&&(t.querySelector("#next").style.opacity=.5),o.style.transform=`translateX(-${100/3*r}%)`})),t.querySelector("#prev").addEventListener("click",(function(){t.querySelector("#next").style.opacity=1,r>0&&(r-=1),0===r&&(t.querySelector("#prev").style.opacity=.5),o.style.transform=`translateX(-${100/3*r}%)`}))}("carousel"),function(){const e=document.querySelector("#scrollMobile"),t=document.querySelector("#scrollPC"),o=document.querySelector("#scrollSpo"),n=document.querySelector("#scrollEco"),r=document.querySelector("#scrollMobile_screenSmall"),l=document.querySelector("#scrollPC_screenSmall"),c=document.querySelector("#scrollSpo_screenSmall"),a=document.querySelector("#scrollEco_screenSmall"),s=document.querySelector(".content-left");function i(){let i=document.querySelector(".header").offsetHeight,d=document.querySelector("#pc").offsetTop-i,u=document.querySelector("#mobile").offsetTop-i,y=document.querySelector("#sponsor").offsetTop-i,v=document.querySelector("#ecom").offsetTop-i;e.addEventListener("click",(function(){s.scrollTo({top:u,behavior:"smooth"})})),t.addEventListener("click",(function(){s.scrollTo({top:d,behavior:"smooth"})})),o.addEventListener("click",(function(){s.scrollTo({top:y,behavior:"smooth"})})),n.addEventListener("click",(function(){s.scrollTo({top:v,behavior:"smooth"})})),r.addEventListener("click",(function(){s.scrollTo({top:u,behavior:"smooth"}),navbarMobile.style.transform="translateX(100%)",navOverlay.style.display="none"})),l.addEventListener("click",(function(){s.scrollTo({top:d,behavior:"smooth"}),navbarMobile.style.transform="translateX(100%)",navOverlay.style.display="none"})),c.addEventListener("click",(function(){s.scrollTo({top:y,behavior:"smooth"}),navbarMobile.style.transform="translateX(100%)",navOverlay.style.display="none"})),a.addEventListener("click",(function(){s.scrollTo({top:v,behavior:"smooth"}),navbarMobile.style.transform="translateX(100%)",navOverlay.style.display="none"}))}window.addEventListener("load",i()),window.addEventListener("resize",i)}(),function(){const e=document.querySelector("#sidebarScreenSmall"),t=document.querySelector(".navbar_mobile"),o=document.querySelector(".nav__overlay"),n=document.querySelector(".button-close-sidebar");e.addEventListener("click",(function(){t.style.transform="translateX(-0px)",o.style.display="block"})),o.addEventListener("click",(function(){t.style.transform="translateX(100%)",o.style.display="none"})),n.addEventListener("click",(function(){t.style.transform="translateX(100%)",o.style.display="none"}))}(),document.querySelectorAll(".navbar .navbar-list .navbar-item").forEach(((e,t)=>{e.addEventListener("click",(function(){document.querySelector(".navbar .navbar-list .active").classList.remove("active"),e.classList.add("active")}))})),document.querySelectorAll(".navbar_mobile ul li").forEach(((e,t)=>{e.addEventListener("click",(function(){document.querySelector(".navbar_mobile .active").classList.remove("active"),e.classList.add("active")}))})),document.querySelectorAll(".content-left .content-common .content-item").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".content-left .content-common .active1").classList.remove("active1"),e.classList.add("active1")}))}))}));
