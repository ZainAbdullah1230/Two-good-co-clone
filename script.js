// locomotive JS for smoothness
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation()

//Navbar Svg animation
function navbarAnimation() {
    gsap.to("#navpart-1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
 });
}
navbarAnimation()


//Navbar Links animation 
function navbarAnimation2() {
    gsap.to("#navpart-2 #links", {
      transform: "translateY(-100%)",
      opacity:0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
 });
}
navbarAnimation2()

//Navbar icons animation
function navbarAnimation3() {
    gsap.to("#navpart-2 #icons", {

        backgroundColor:"#fff",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
 });
}
navbarAnimation3()



//Page 1 Image Cursor animation
function imgeAnimation (){
    var img = document.querySelector("#image-container")
var view = document.querySelector("#view")
img.addEventListener("mouseenter" , function(){
    gsap.to(view, {
        scale: 1,
        opacity: 1
    })
})
img.addEventListener("mouseleave" , function(){
    gsap.to(view, {
        scale: 0,
        opacity: 0
    })
})
img.addEventListener("mousemove" , function(dets){
    gsap.to(view , {
        left: dets.x,
        top: dets.y,
        
    })
})
}
imgeAnimation()

//Page1's h1 and image down to upwards animation
function loadinganimation (){
    gsap.from("#page1 h1" , {
        y:200,
        delay: 0.5,
        duration:0.5,
        stagger:0.3,
        opacity:0
    })
    gsap.from("#page1 #image-container" , {
        scale:0.9,
        delay: 1.3,
        duration:0.5,
        opacity:0
    })
}
loadinganimation()

//Page4 coursor animation 
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter" , function(){
            gsap.to("#cursor",{
                transform: `translate(-50%,-50%) scale(1)`,
            });
        });
        elem.addEventListener("mouseleave", function(elem){
            gsap.to("#cursor",{
                transform: `translate(-50%,-50%) scale(0)`,
            });
        });
    });
}
cursorAnimation()

