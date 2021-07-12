
  gsap.registerPlugin(ScrollTrigger);

  let animation = gsap.timeline({repeat:-1})
  animation.from(".videoWrapperSpan", {opacity:0, stagger:2.5})
          .to(".videoWrapperSpan", {opacity:0, stagger:2.5}, 2)

 

  gsap.from(".aboutWrapper_faPrag", {
      //duration:10,
      y:'100vh',
      ease: "ease", 
      scrollTrigger: {
          trigger: ".aboutWrapper",
          start: "top 50%",
          end:  "bottom 50%",
          scrub:true,
          //markers: true,
      }
  });
  
  gsap.to(".videoWrapper", {
      duration:10,
      opacity:0,
      ease: "ease", 
      scrollTrigger: {
          trigger: ".videoWrapper",
          start: "20% top",
          end:  "70% 30%",
          scrub:true,
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
  /*
  gsap.utils.toArray('.darkii').forEach(dark => {
      ScrollTrigger.create({
          trigger: dark,
          start: 'top 1px',
          end: '200% top',
          toggleClass:  { targets: '.header', className: 'white' },
          //markers: true,
      });
  });
  */
  
  
console.log(window.innerWidth + document.querySelector(".sloganWrapper span").clientWidth)
  gsap.to(".sloganWrapper span", {
      duration:4,
      x:() => `+=${-1*(window.innerWidth + document.querySelector(".sloganWrapper span").clientWidth)}`,
      scrollTrigger: {
          trigger: ".sloganWrapper",
          start: "top top",
          scrub:2,
          pin:true,
          pinSpacing: false,
          invalidateOnRefresh: true,
          //markers: true,
      }
  }); 
  
  console.log(window.innerWidth + document.querySelector(".sloganImgWrapper").clientWidth)
  gsap.to(".sloganImgWrapper", {
      duration:1, 
      x:() => `+=${-1*(window.innerWidth + document.querySelector(".sloganImgWrapper").clientWidth)}`,

      scrollTrigger: {
          trigger: ".sloganWrapper",
          start: "top top",
          //end:() => `+=${(window.innerWidth + document.querySelector(".sloganWrapper span").clientWidth)}`,
          scrub:2,
          invalidateOnRefresh: true,
          //markers: true,
      }
  }); 
  
  gsap.to("body", {
      duration:1,
      ease: "ease", 
      scrollTrigger: {
          trigger: ".sloganWrapper",
          start: "top 20%",
          //end:  "200% 100",
          //scrub:1,
          toggleClass:  { targets: 'body', className: 'black' },
          //markers: true,
      }
  });  
 