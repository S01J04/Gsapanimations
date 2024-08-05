gsap.registerPlugin(ScrollTrigger);

// Animations for images
gsap.to(".img", {
    y: 40,
    repeat: -1,
    yoyo: true
});
gsap.to(".s", {
    duration: 30,
    rotate: "360",
    repeat: -1,
    yoyo: true,
    ease: "none"
});
gsap.to(".star1", {
    duration: 20,
    rotate: "-360",
    repeat: -1,
    ease: "none"
});
gsap.to(".star2", {
    duration: 10,
    rotate: "360",
    repeat: -1,
    ease: "none"
});
gsap.to(".topnavanimation", {
    duration: 10,
    x: 400,
    repeat: -1,
    ease: "none"
});

// Timeline for horizontal scrolling and image animations

const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");

let tl = gsap.timeline({
  defaults: {
    ease: "none"
  },
  scrollTrigger: {
    trigger: slider,
    scrub: 2,
    pin: true,
    end: () => "+=" + slider.offsetWidth
  }
});

tl.to(slider, {
  xPercent: -50 * (sections.length - 1) // Adjust based on the number of sections
});
// tl.from(document.querySelector(".content"), {
//     yPercent: -50,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: section,
//       start: "top center",
//       end: "top top",
//       containerAnimation: tl,
//       scrub: true,
//       
//     }
//   });
function getRandomHexColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
sections.forEach((section, index) => {
    if(index===0){
        tl.to(section.querySelector(".content"), {
            yPercent: 50,
            opacity: 0,
            scrollTrigger: {
              trigger: section,
              start: "end end",
              end: "bottom center",
              containerAnimation: tl,
              scrub: true,
              
        
            }
          })
          tl.to(section.querySelector(".inner img"), {
            yPercent: -50,
            xPercent:100,
            rotate:360,
            ease:index===0?"none": "bounce.out"
            ,
            opacity: 0,
            scrollTrigger: {
              trigger: section,
              start: "end end",
              end: "bottom center",
              containerAnimation: tl,
              scrub: true,
              
        
            }})
    }
  tl.from(section.querySelector(".content"), {
    yPercent: index===1?0:index===2?50:-50,
    xPercent:index===1?50:0,ease: "bounce.out",
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "left center",
      end: "center center",
      containerAnimation: tl,
      scrub: true,
      

    }
  } ) 
  ,tl.to(section.querySelector(".inner"),{
    backgroundColor:getRandomHexColor(),
    scrollTrigger: {
        trigger: section,
        start: "left center",
        end: "center center",
        containerAnimation: tl,
        scrub: true,
        
  
      }
  }),
  tl.from(section.querySelector(".inner img"), {
    yPercent: -50,
    xPercent:index===2?0:100,
    rotate:index===2?0:360,
    ease:index===2?"none":"bounce.out"
    ,
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "left center",
      end: "center center",
      containerAnimation: tl,
      scrub: true,
      

    }})
});
let t2 = gsap.timeline({
    defaults: {
      ease: "none"
    }
  });
  
  // Select the elements to animate
  const section4 = gsap.utils.toArray(".section4 .sec4sidetext");
  
  // Add all animations to the timeline
  section4.forEach((section, index) => {
    gsap.from(section, {
      ease: "bounce.in",
      yPercent:index==0?100:index==1?100:index==2?-100:-100,
      xPercent:index==0?250:index==1?-250:index==2?250:-250,
      opacity: 0,        // Start with opacity 0
      duration: 1,       // Animation duration start: "top center",  // Animation starts when the top of the section hits the center of the viewport
      start: "top center",    // Animation ends when the bottom of the section hits the top of the viewp
     scrollTrigger: { trigger: section, start: "top bottom",toggleActions: "restart none none none" }
    }, 0,"a"); // Adjust timing overlap as needed
  });
gsap.from(".textfirstpart h1",{
    yPercent:100,
    opacity:0,
    ease: "bounce.inOut",
    duration: 2,       // Animation duration start: "top center",  // Animation starts when the top of the section hits the center of the viewport
    start: "top center",    // Animation ends when the bottom of the section hits the top of the viewp
   scrollTrigger: { trigger: ".section4header", start: "top bottom",toggleActions: "restart none none none" }

}, 0,"a")
gsap.from(" .textsecondpart h1",{
    yPercent:-100,
    opacity:0,
    ease: "bounce.inOut",
    duration: 2,       // Animation duration start: "top center",  // Animation starts when the top of the section hits the center of the viewport
    start: "top center",    // Animation ends when the bottom of the section hits the top of the viewp
   scrollTrigger: { trigger: ".section4header", start: "top bottom",toggleActions: "restart none none none" }

}, 0,"a")
gsap.to(" .section6 img",{
    scale:1.4,
    ease: "none",
    duration: 1,       // Animation duration start: "top center",  // Animation starts when the top of the section hits the center of the viewport
    start: "top center",    // Animation ends when the bottom of the section hits the top of the viewp
   scrollTrigger: { trigger: ".section6 img", start: "top bottom",scrub:2 }

}, 0)