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

// hamburger menu toggle
function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.contains("responsive")
    ? nav.classList.remove("responsive")
    : nav.classList.add("responsive");
}



// hamburger anims

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  const icon = document.querySelector(".icon i");

  nav.classList.toggle("responsive");
  icon.classList.toggle("active"); 
}
