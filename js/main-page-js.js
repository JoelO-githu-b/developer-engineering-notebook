const parallax = document.getElementById("parallaxImage");
const expandContainer = document.getElementById("container-1");
const expandContainer2 = document.getElementById("container-2");

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
    expandContainer.style.width = (1100 - scrollValue) + 'px';
    
    expandContainer2.style.width = (scrollValue-200) + 'px';

});