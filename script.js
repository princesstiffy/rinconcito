// fade page transitions using Barba.js 

barba.init({
  transitions: [
    {
      name: 'fade',
      leave({ current }) {
        return gsap.to(current.container, {
          opacity: 0,
          duration: 0.3, 
          ease: 'expo.out'
        });
      },
      enter({ next }) {
        return gsap.from(next.container, {
          opacity: 0,
          duration: 0.5, // make fade-in slower
          ease: 'expo.out' // smoother than linear
        });
      }
    }
  ]
});

