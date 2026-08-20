 document.addEventListener('scroll', function() {
    const parallax = document.getElementById("parallaxImage");
    let scrollPosition = window.pageYOffset;
    
    /* 
    Multiply by a decimal to control the speed.
    0.5 = Background moves at half-speed.
    0.2 = Background moves very slowly.
    */
    parallax.style.transform = "translateY(" + (scrollPosition * 0.5) + "px)";
});