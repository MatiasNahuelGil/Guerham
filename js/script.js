const header = document.querySelector("header");

//Evento que al bajar el scroll en el Eje Y, muestra de forma diferente el header, agregandole la clase sticky.
window.addEventListener("scroll", ()=>{
    header.classList.toggle('sticky', this.window.scrollY > 80);
})


//Abrir menu

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
})

//Menu arreglo
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}

// ScrollReveal

const sr = ScrollReveal({
    origin: 'top',
    distance : '85px',
    duration : 2500,
    reset: false
});

sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:300});

sr.reveal('.middle-text',{});
sr.reveal('.row.btn,shop-content',{delay:300});

sr.reveal('.review,.contact',{delay:300});