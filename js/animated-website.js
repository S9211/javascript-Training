let cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x+30+'px'; 
    cursor.style.top = dets.y+'px'; 
});

let h4 = document.querySelectorAll('#nav h4');
h4.forEach((elm)=>{
    elm.addEventListener('mouseenter', function(){
        // preventDefault(elm)
        cursor.style.scale = 3;
        cursor.style.border = '1px solid #fff';
        cursor.style.backgroundColor = 'transparent';
    })

    elm.addEventListener('mouseleave', function(){
        // preventDefault(elm)
        cursor.style.scale = 1;
        cursor.style.border = '0px solid #95C11E';
        cursor.style.backgroundColor = '#95C11E';
    })


})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
