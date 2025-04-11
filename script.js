// Initialize variables
let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

// Initialize the presentation
document.addEventListener('DOMContentLoaded', function() {
    // Set the first slide as active
    document.getElementById('slide1').classList.add('active');
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});

// Navigation functions
function nextSlide() {
    if (currentSlide < totalSlides) {
        changeSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        changeSlide(currentSlide - 1);
    }
}

function goToSlide(slideNumber) {
    changeSlide(slideNumber);
}

function changeSlide(newSlide) {
    // Remove active class from current slide
    document.getElementById('slide' + currentSlide).classList.remove('active');
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        if (index + 1 === newSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Set new slide as active
    document.getElementById('slide' + newSlide).classList.add('active');
    
    // Update current slide
    currentSlide = newSlide;
}
