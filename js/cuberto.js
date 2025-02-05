Shery.mouseFollower();
Shery.makeMagnet('.magnet');

gsap.to(".fimages-leftElm",{
    scrollTrigger:{
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y:"-300%",
    ease: Power1
});


// let elem = document.querySelectorAll(".fimages-leftElm");
// Shery.imageEffect(".images", {
//     style: 4,
//     config: { onMouse: { value: 1 } },
//     slideStyle: (setScroll) => {
//         elem.forEach(function (elm, index) {
//           ScrollTrigger.create({
//             trigger: elm,
//             start: "top top",
//             scrub: 1,
//             onUpdate: function (prog) {
//               setScroll(prog.progress + index);
//                 },
//             });
//         });
//     },
// });