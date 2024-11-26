// let valueDisplays = document.querySelectorAll(".num");
// let interval = 3000; 

// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = interval; // Total duration
//     let increment = endValue / (duration / 100); // Increment value based on time
//     let counter = setInterval(function() {
//         startValue += increment; // Increment by calculated value
//         if (startValue >= endValue) {
//             startValue = endValue; // Ensure we don't exceed endValue
//             clearInterval(counter);
//         }
//         valueDisplay.textContent = Math.floor(startValue); // Update display
//     }, 100); // Update every 100 milliseconds
// });

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000; 

// Function to start the counter animation
function startCounter() {
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = interval; // Total duration
        let increment = endValue / (duration / 100); // Increment value based on time
        let counter = setInterval(function() {
            startValue += increment; // Increment by calculated value
            if (startValue >= endValue) {
                startValue = endValue; // Ensure we don't exceed endValue
                clearInterval(counter);
            }
            valueDisplay.textContent = Math.floor(startValue); // Update display
        }, 100); // Update every 100 milliseconds
    });
}

// Function to handle intersection
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(); // Start the counter when #stats is in view
            observer.unobserve(entry.target); // Stop observing after starting the counter
        }
    });
}

// Create an Intersection Observer
let options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the target is visible
};

let observer = new IntersectionObserver(handleIntersection, options);
let statsSection = document.querySelector('#stats'); // Select the #stats section

if (statsSection) {
    observer.observe(statsSection); // Start observing the #stats section
}