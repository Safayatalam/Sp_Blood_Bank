const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 200)
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true,
});

// sr.reveal('.page-text',{origin: 'top'});
sr.reveal('.home-text',{origin: 'top'});
sr.reveal('.box1,.box3,.box5',{origin: 'top'});
sr.reveal('.box2,.box4',{origin: 'bottom'});
sr.reveal('.left-content',{origin: 'left'});
sr.reveal('.right-content',{origin: 'right'});
sr.reveal('.join-us-animate',{origin: 'bottom'});
sr.reveal('footer',{origin: 'bottom'});

// script for button work to go another page

function redirectToHomePage() {
    window.location.href = 'login.html';
}
 
function redirectToRegisterPage() {
    window.location.href = 'login.html';
}

function redirectToAboutPage() {
    window.location.href = 'about.html';
}
function redirectToRegisterPage() {
    window.location.href = 'register.html';
}
function redirectTobabdPage() {
    window.location.href = 'Become a blood doner.html';
}
function redirectTobamPage() {
    window.location.href = 'Become a member.html';
}