const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const nav = document.querySelector(".bg-dark");
const card = document.querySelector(".card");
const img = document.querySelector(".card img");
const h1 = document.querySelector(".card h1");
const form = document.querySelector(".card form");



const tl = new TimelineMax();

tl.fromTo(hero,1, {x: 500, width: "0%" }, {x: -200, width: "90%", ease: Power2.easeInOut })
    .fromTo(
        hero,
        1.2,
        { height: "100%", y: -500, right: "-50%"},
        { height: "23%", y: 0, right: "0%", ease: Power2.easeInOut }
    )
    .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
    )   
  .fromTo(logo, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo(hamburger, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo(nav, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo(img, 1, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(h1, 1.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=1")
  .fromTo(form, 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=1.5");

 

