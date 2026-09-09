const parallax = document.getElementById("parallaxImage");
const expandContainer = document.getElementById("container-1");
const expandContainer2 = document.getElementById("container-2");
const expandContainer3 = document.getElementById("container-3");
const wave_wrapper = document.getElementById("wave-wrapper");
const wave_wrapper2 = document.getElementById("wave-wrapper-2");
const wavy_banner = document.getElementById("wavy-banner");
const banner_content = document.getElementById("banner-content");
const pleadful = document.getElementById("pleadful");
const pleadful2 = document.getElementById("pleadful-2");
const pleadful3 = document.getElementById("pleadful-3");
const dark_light_switch = document.getElementById("dark-light-switch")
const navlinkcontainer = document.getElementById("nav-link-container")
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  toggleDarkMode(true)
}

document.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    
    /* 
    Multiply by a decimal to control the speed.
    0.5 = Background moves at half-speed.
    0.2 = Background moves very slowly.
    */
    parallax.style.transform = "translateY(" + (scrollPosition * 0.5) + "px)";
    // 3. Get the current vertical scroll position
    const scrollValue = window.scrollY;

    // 4. Calculate the new size (Base size of 100px + scroll amount)

    expandContainer.style.width = 0.1 * 800 + '%';
    expandContainer2.style.width = 0.1 * clamp(scrollValue * 1.25, 0, 700) + '%';
    expandContainer3.style.width = 0.1 * clamp((scrollValue * 1.25) - 700, 0, 700)  + '%';

    let scrollAdjust = (scrollValue * 0.04)
    pleadful.style.transform = "rotate(" + scrollAdjust + "deg) translateX(" + (-45 + scrollValue * 0.5) +"px)";
    pleadful2.style.transform = "rotate(" + clamp(scrollAdjust - 24, -50, 0) + "deg) translateX(" + clamp((-245 + scrollValue * 0.5), -700, 45) +"px)";
    pleadful3.style.transform = "rotate(" + clamp(scrollAdjust - 42, 0, 50) + "deg) translateX(" + clamp((-490 + scrollValue * 0.5), -700, 45) +"px)";

});
function toggleDarkMode(dontFlip) {
  parallax.classList.toggle("light-parallax-bg");
  expandContainer.classList.toggle("light-expand-container");
  expandContainer2.classList.toggle("light-expand-container");
  expandContainer3.classList.toggle("light-expand-container");
  navlinkcontainer.classList.toggle("nav-link-container-light");
  
  wave_wrapper.classList.toggle("dark-wave-wrapper-2")
  wave_wrapper2.classList.toggle("dark-wave-wrapper")
  wavy_banner.classList.toggle("wavy-banner-dark")
  banner_content.classList.toggle("banner-content-light")
  dark_light_switch.classList.toggle("dark-light-switch-alt")
  
  if (dontFlip) return;
  if (currentTheme === "dark") {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}