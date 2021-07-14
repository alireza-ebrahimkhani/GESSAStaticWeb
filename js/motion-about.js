
gsap.to("body", {
    duration:1,
    ease: "ease", 
    scrollTrigger: {
        trigger: ".whyGessa",
        start: "top top",
        end:  "100% 100",
        scrub:1,
        toggleClass:  { targets: 'body', className: 'black' },
        //markers: true,
    }
});  
gsap.to("body", {
    duration:1,
    ease: "ease", 
    scrollTrigger: {
        trigger: ".whyGessaM",
        start: "top top",
        end:() => `+=${document.querySelector('.whyGessaM').clientHeight+100}`,
        scrub:1,
        toggleClass:  { targets: 'body', className: 'black' },
        markers: true,
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
gsap.to(".whyGessa_titleWrapper", {
    ease: "ease", 
    scrollTrigger: {
        trigger: ".whyGessa_titleColumn",
        start: "top top",
        end:() => `+=${document.getElementById('whyGessa').clientHeight - 100}`,
        scrub:2,
        //markers: true,
        pin:true,
        pinSpacing:false,
        invalidateOnRefresh: true,
        
    }
});

gsap.utils.toArray('.whyGessa_item').forEach(thisWhyGessaItem => {
    let wgAnimation = gsap.timeline({scrollTrigger: {
        trigger: thisWhyGessaItem,
            start: "top top",
            end:() => `+=${thisWhyGessaItem.clientHeight}`,
            scrub:-1,
            //markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"},
            pin:true,
            pinSpacing:false,
            invalidateOnRefresh: true,
    }});
    wgAnimation.to(thisWhyGessaItem, {opacity:1,ease: "ease", duration:3 })
    wgAnimation.to(thisWhyGessaItem, {ease: "ease", duration:3 })
    wgAnimation.to(thisWhyGessaItem, {opacity:0,ease: "ease", duration:3 })
        
});




gsap.to(".whyGessaM_titleWrapper", {
    duration:1, 
    x:() => `+=${-1*(document.querySelector('.whyGessaM_titleWrapper').clientWidth + window.innerWidth + 48)}`,
    scrollTrigger: {
        trigger: ".whyGessaM_titleColumn",
        start: "top top",
        //end: "bottom bottom",
        end:() => `+=${(document.querySelector(".whyGessaM_titleColumn").clientHeight)}`,
        scrub:2,
        pin:true,
        pinSpacing:false,
        invalidateOnRefresh: true,
        //markers: true,
    }
}); 
   
gsap.utils.toArray('.whyGessaM_item').forEach(thisWhyGessaMItem => {
    let wgmAnimation = gsap.timeline({scrollTrigger: {
        trigger: thisWhyGessaMItem,
            start: "top top",
            //end:() => `+=${thisWhyGessaMItem.clientHeight}`,
            scrub:-1,
            //markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"},
            pin:true,
            pinSpacing:false,
            invalidateOnRefresh: true,
    }});
    wgmAnimation.to(thisWhyGessaMItem, {opacity:1,ease: "ease", duration:2 })
    wgmAnimation.to(thisWhyGessaMItem, {ease: "ease", duration:5 })
    wgmAnimation.to(thisWhyGessaMItem, {opacity:0,ease: "ease", duration:2 })
        
});