//event slider
function carousel(selector) {
    const carousel = document.querySelector(`#${selector}`);
    const slider = carousel.querySelector('#slider');


    //so luong the con
    const countItem = carousel.querySelectorAll('#slider-item').length;


    let current = 0;
    if (current === 0) {
        carousel.querySelector('#prev').style.opacity = 0.5;
    }
    function next() {
        carousel.querySelector('#next').addEventListener('click', function () {
            if (current < countItem - 1) {
                current += 1;
            }
            carousel.querySelector('#prev').style.opacity = 1;
            if (current === countItem - 1) {
                carousel.querySelector('#next').style.opacity = 0.5;
            }
            slider.style.transform = `translateX(-${100 / 3 * current}%)`;
        });
    }

    function prev() {
        carousel.querySelector('#prev').addEventListener('click', function () {
            carousel.querySelector('#next').style.opacity = 1;
            if (current > 0) {
                current -= 1;
            }
            if (current === 0) {
                carousel.querySelector('#prev').style.opacity = 0.5;
            }
            slider.style.transform = `translateX(-${100 / 3 * current}%)`;
        });
    }
    return next(), prev();
}

//sidebar
const sidebarScreenSmall = document.querySelector('#sidebarScreenSmall');
const navbarMobile = document.querySelector('.navbar_mobile');
const navOverlay = document.querySelector('.nav__overlay');
const buttonCloseSidebar = document.querySelector('.button-close-sidebar')
function openSideBar(){
    navbarMobile.style.transform =`translateX(-0px)`;
    navOverlay.style.display = 'block';
}
sidebarScreenSmall.addEventListener('click', openSideBar);
navOverlay.addEventListener('click',function(){
    navbarMobile.style.transform =`translateX(100%)`;
    navOverlay.style.display = 'none';
})
buttonCloseSidebar.addEventListener('click',function(){
    navbarMobile.style.transform =`translateX(100%)`;
    navOverlay.style.display = 'none';
})



//Event scroll
const scrollMobile = document.querySelector('#scrollMobile');
const scrollPC = document.querySelector('#scrollPC');
const scrollSpo = document.querySelector('#scrollSpo');
const scrollEco = document.querySelector('#scrollEco');
const scrollMobileScreenSmall = document.querySelector('#scrollMobile_screenSmall');
const scrollPCScreenSmall = document.querySelector('#scrollPC_screenSmall');
const scrollSpoScreenSmall = document.querySelector('#scrollSpo_screenSmall');
const scrollEcoScreenSmall = document.querySelector('#scrollEco_screenSmall');
const contentLeft = document.querySelector('.content-left');
const heightHeader = document.querySelector('.header').offsetHeight;
const contentPC = document.querySelector('#pc').offsetTop -heightHeader;
const contentMobile = document.querySelector('#mobile').offsetTop - heightHeader;
const contentSpo = document.querySelector('#sponsor').offsetTop - heightHeader;
const contentEco = document.querySelector('#ecom').offsetTop - heightHeader;
function scollToContent() {
    scrollMobile.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentMobile,
            behavior: 'smooth'
        })
    })
    scrollPC.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentPC,
            behavior: 'smooth'
        })
    })
    scrollSpo.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentSpo,
            behavior: 'smooth'
        })
    })
    scrollEco.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentEco,
            behavior: 'smooth'
        })
    })
    // screenSmall 
    scrollMobileScreenSmall.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentMobile,
            behavior: 'smooth'
        })
        navbarMobile.style.transform =`translateX(100%)`;
        navOverlay.style.display = 'none';
    })
    scrollPCScreenSmall.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentPC,
            behavior: 'smooth'
        })
        navbarMobile.style.transform =`translateX(100%)`;
        navOverlay.style.display = 'none';
    })
    scrollSpoScreenSmall.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentSpo,
            behavior: 'smooth'
        })
        navbarMobile.style.transform =`translateX(100%)`;
        navOverlay.style.display = 'none';
    })
    scrollEcoScreenSmall.addEventListener('click', function () {
        contentLeft.scrollTo({
            top: contentEco,
            behavior: 'smooth'
        })
        navbarMobile.style.transform =`translateX(100%)`;
        navOverlay.style.display = 'none';
    })
}

//Event Active
const itemsLi = document.querySelectorAll('.navbar ul li a');
itemsLi.forEach((item,index) =>{
    item.addEventListener('click', function(){
        document.querySelector('.navbar li .active').classList.remove('active');
        item.classList.add('active');
    })
})

const itemsLiScreenSmall = document.querySelectorAll('.navbar_mobile ul li');
itemsLiScreenSmall.forEach((item,index) =>{
    item.addEventListener('click', function(){
        document.querySelector('.navbar_mobile .active').classList.remove('active');
        item.classList.add('active');
    })
})



window.addEventListener('load', (event) => {
    carousel('carousel');
    scollToContent();
});
