/*
gsap.to(".wwaWrapperPragFa", {
    //duration:10,
    y:30,
    ease: "ease", 
    scrollTrigger: {
        trigger: ".wwaWrapper",
        start: "top top%",
        end:  "bottom 20%",
        scrub:true,
        //markers: true,
    }
});
*/
gsap.to("body", {
    duration:1,
    ease: "ease", 
    scrollTrigger: {
        trigger: ".wg",
        start: "top 20%",
        end:  "100% 100",
        scrub:1,
        toggleClass:  { targets: 'body', className: 'black' },
        //markers: true,
    }
});  
gsap.utils.toArray('.dark').forEach(dark => {
    ScrollTrigger.create({
        trigger: dark,
        start: 'top 1px',
        end: 'bottom top',
        toggleClass:  { targets: '.header', className: 'white' },
        //markers: true,
    });
});

let movement = document.querySelector(".wg_list").clientWidth - window.innerWidth;
gsap.to(".wg_list", {
    //duration:10,
    x:() => `+=${-1*(window.innerWidth + movement + 48 )}`,
    ease: "ease", 
    scrollTrigger: {
        trigger: ".wg",
        start: "top top",
        //end:  "bottom 20%",
        scrub:2,
        markers: true,
        pin:true,
        pinspacing:false,
        invalidateOnRefresh: true,
    }
});