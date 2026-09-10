const parallax = document.getElementById("parallaxImage");
const dark_light_switch = document.getElementById("dark-light-switch")
const navlinkcontainer = document.getElementById("nav-link-container")
const wave_wrapper = document.getElementById("wave-wrapper");
const wave_wrapper2 = document.getElementById("wave-wrapper-2");
const wavy_banner = document.getElementById("wavy-banner");
const banner_content = document.getElementById("banner-content");
const tbl = document.getElementById("tbl")
const currentTheme = localStorage.getItem('theme');
const all_tables = document.querySelectorAll('table');
const all_rows = document.querySelectorAll('tr');
const all_headers = document.querySelectorAll('th');
const all_cells = document.querySelectorAll('td');
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
  
  all_tables.forEach(table => {
      table.classList.toggle('table-dark-mode')
  });
  all_headers.forEach(table => {
      table.classList.toggle('table-header-dark-mode')
  });
  all_cells.forEach(table => {
      table.classList.toggle('table-cell-dark-mode')
  });
  if (dontFlip) return;
  if (currentTheme === "dark") {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}