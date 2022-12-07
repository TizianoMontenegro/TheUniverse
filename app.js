gsap.registerPlugin(ScrollTrigger);

const spacecraft = document.querySelector(".spacecraft");
const planet_1 = document.querySelector(".item1");
const planet_2 = document.querySelector(".item2");
const planet_3 = document.querySelector(".item3");
const planet_4 = document.querySelector(".item4");
const planet_5 = document.querySelector(".item5");
const planet_6 = document.querySelector(".item6");
const planet_7 = document.querySelector(".item7");
const planet_8 = document.querySelector(".item8");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        // markers: true,
        start: "top top",
        end: "100% 100%",
        scrub: true,
    }
})
tl.to(spacecraft, {scale: .5,y: "40vh",duration: 10});
tl.to(planet_1, {y: "-50vh",duration: 4,scale: 1.2,opacity: 1});
tl.to(planet_2, {y: "-90vh", duration: 4, scale: 1, opacity: 1});
tl.to(spacecraft, {rotate: 160, duration: 3});
tl.to(planet_2, {y: "-160vh", duration: 4, scale: 1, opacity: .4});
tl.to(spacecraft, {x: "-35vw", duration: 4}, "-=5");
tl.to(spacecraft, {x: "0vw", rotate: 90, duration: 4});
tl.to(planet_1, {y: "-150vh", duration: 6, scale: 1, opacity: .4}, "-=2");
tl.to(spacecraft, {x: "-20vw", rotate: 135, duration: 2}, "-=4");
tl.to(planet_3, {y: "-94vh", duration: 6, scale: 1.4, opacity: 1});
tl.to(spacecraft, {x: 30, duration: 4});
tl.to(planet_4, {y: "-60vh", duration: 6, scale: 1.1, opacity: 1});
tl.to(planet_3, {y: "-150vh", duration: 6, opacity: 0});
tl.to(spacecraft, {x: "30vw", duration: 4, rotate: 90});
tl.to(planet_4, {y: "-100vh", duration: 6});
tl.to(spacecraft, {x: "30vw", duration: 10, rotate: 200}, "-=8");
tl.to(spacecraft, {x: "-20vw", duration: 10});
tl.to(planet_4, {y: "-90vw", duration: 6}, "-=5");
tl.to(planet_5, {y: "-70vh", duration: 4, opacity: 1, scale: 1.3});
tl.to(spacecraft, {rotate: 135, duration: 10, scale: .4}, "-=4");
tl.to(planet_5, {y: "-200vh", duration: 6, opacity: .7, scale: 1});
tl.to(planet_6, {y: "-80vh", duration: 7, opacity: 1, scale: 1.2});
tl.to(planet_6, {y: "-220vh", duration: 7, opacity: .5, scale: 1.2, delay: 1});
tl.to(spacecraft, {rotate: 40, x: "30vw", duration: 8}, "-=6.8");
tl.to(spacecraft, {rotate: 100, y: "-5vh", duration: 5}, "-=3");
tl.to(planet_7, {y: "-80vh", duration: 6, opacity: 1, scale: 1.2});
tl.to(spacecraft, {y: "20vh", duration: 4, rotate: 135});
tl.to(planet_7, {y: "-180vh", duration: 4, opacity: .8, scale: 1});
tl.to(spacecraft, {x: "-20vw", duration: 8, rotate: 165});
tl.to(spacecraft, {y: "60vh", duration: 8, rotate: 100});
tl.to(spacecraft, {x: "0vw", duration: 8, rotate: 40});
tl.to(spacecraft, {x: "10vw",y: "20vh", duration: 8, rotate: -90});
tl.to(spacecraft, {x: "11.5vw", y: "27vh",duration: 6});
tl.to(planet_8, {y: "-50vh", opacity: 1, duration: 7}, "-=40")