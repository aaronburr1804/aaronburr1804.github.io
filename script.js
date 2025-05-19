// Shorthand for image elements
const powerBIImage = document.getElementById("powerBIImage");
const powerAppImage = document.getElementById("powerAppImage");

// Function definition to enlarge image 
const enlargeImage = (event) => {
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "transform 0.5s ease";
    event.target.style.zIndex = 1000;
};
// Function to reset image to original size
const resetImage = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 1;
};


// Add event listener for mouseenter of hero images
powerBIImage.addEventListener("mouseenter", enlargeImage);
powerBIImage.addEventListener("mouseleave", resetImage);

powerAppImage.addEventListener("mouseenter", enlargeImage);
powerAppImage.addEventListener("mouseleave", resetImage);