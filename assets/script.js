// Shorthand for image elements
const powerBIImage = document.getElementById("powerBIImage");
const powerAppImage = document.getElementById("powerAppImage");
const webDevImage = document.getElementById("webDevImage");

// Function definition to enlarge image 
const enlargeImage = (event) => {
    if (window.innerWidth < 600) {
        
    }
    else {
    event.target.style.transition = "transform 0.5s ease";
    event.target.style.width = "45%"
    event.target.style.zIndex = 1000;
    }
};
// Function to reset image to original size
const resetImage = (event) => {
    if (window.innerWidth < 600) {
    }
    else {
        event.target.style.width = "25%";
    }
    event.target.style.zIndex = 1;
};


// Add event listener for mouseenter of hero images
powerBIImage.addEventListener("mouseenter", enlargeImage);
powerBIImage.addEventListener("mouseleave", resetImage);

powerAppImage.addEventListener("mouseenter", enlargeImage);
powerAppImage.addEventListener("mouseleave", resetImage);

webDevImage.addEventListener("mouseenter", enlargeImage);
webDevImage.addEventListener("mouseleave", resetImage);