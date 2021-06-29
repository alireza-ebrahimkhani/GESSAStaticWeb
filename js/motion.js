
  gsap.registerPlugin(ScrollTrigger);

    let animation = gsap.timeline({repeat:-1})
    animation.from(".videoWrapperSpan", {opacity:0, stagger:2.5})
            .to(".videoWrapperSpan", {opacity:0, stagger:2.5}, 2)

    gsap.from(".aboutWrapper_enPrag", {
        //duration:100,
        y:'100vh',
        ease: "ease", 
        scrollTrigger: {
            trigger: ".aboutWrapper",
            start: "top 80%",
            end:  "80% 80%",
            scrub:true,
            //markers: true,
        }
    });

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
            trigger: ".aboutWrapper",
            start: "10% 50%",
            end:  "40% 50%",
            scrub:true,
            //markers: true,
        }
    });
    
    gsap.utils.toArray('.dark').forEach(dark => {
        ScrollTrigger.create({
            trigger: dark,
            start: 'top top',
            end: 'bottom top',
            toggleClass:  { targets: '.header', className: 'white' },
            //markers: true,
        });
    });
      
    gsap.to(".sloganWrapper", {
        duration:1, 
        scrollTrigger: {
            trigger: ".sloganWrapper",
            start: "0 0",
            end:  "bottom 100",
            scrub:2,
            pin:true,
            markers: true,
        }
    }); 
    gsap.to(".sloganWrapper span", {
        duration:1,
        x:document.querySelector('.sloganWrapper span').clientWidth * -1 ,
        scrollTrigger: {
            trigger: ".sloganWrapper",
            start: "top top",
            end:  "bottom 100",
            scrub:2,
            //markers: true,
        }
    }); 
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sloganWrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      
      gsap.utils.toArray(".sloganImg").forEach(layer => {
        const left = layer.dataset.left;
        tl.to(layer, {x: left, ease: "ease"}, 0)
      });


    gsap.to("body", {
        duration:1,
        ease: "ease", 
        scrollTrigger: {
            trigger: ".turnBlack",
            start: "top 10%",
            end:  "bottom 100",
            scrub:1,
            toggleClass:  { targets: 'body', className: 'black' },
            //markers: true,
        }
    });  
    