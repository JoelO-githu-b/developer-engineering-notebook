const parallax = document.getElementById("parallaxImage");
const expandContainer = document.getElementById("container-1");
const expandContainer2 = document.getElementById("container-2");
const pleadful = document.getElementById("pleadful");
const pleadful2 = document.getElementById("pleadful-2");
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

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

    // 5. Apply the new size to the box
    expandContainer.style.width = 0.1 * clamp(900-scrollValue, 0, 700) + '%';
    expandContainer2.style.width = 0.1 * clamp(scrollValue, 0, 700) + '%';

    pleadful.style.transform = "rotate(" + (scrollValue * 0.04) + "deg) translateX(" + (-45 + scrollValue * 0.5) +"px)";
    pleadful2.style.transform = "rotate(" + ((scrollValue * 0.04) - 24) + "deg) translateX(" + clamp((-245 + scrollValue * 0.5), -700, 45) +"px)";

});