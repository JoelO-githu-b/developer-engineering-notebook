const parallax = document.getElementById("parallaxImage");
const dark_light_switch = document.getElementById("dark-light-switch")
const navlinkcontainer = document.getElementById("nav-link-container")
const wave_wrapper = document.getElementById("wave-wrapper");
const wave_wrapper2 = document.getElementById("wave-wrapper-2");
const wavy_banner = document.getElementById("wavy-banner");
const banner_content = document.getElementById("banner-content");
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  toggleDarkMode(true)
}

function toggleDarkMode(dontFlip) {
  parallax.classList.toggle("light-parallax-bg");
  navlinkcontainer.classList.toggle("nav-link-container-light");
  dark_light_switch.classList.toggle("dark-light-switch-alt")
wave_wrapper.classList.toggle("dark-wave-wrapper-2")
  wave_wrapper2.classList.toggle("dark-wave-wrapper")
  wavy_banner.classList.toggle("wavy-banner-dark")
  banner_content.classList.toggle("banner-content-light")
  if (dontFlip) return;
  if (currentTheme === "dark") {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}