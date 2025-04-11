// Authentication credentials (for demo purposes only - in production, use server-side authentication)
const AUTH_CREDENTIALS = {
    username: 'elcielo',
    password: 'miami2025'
};

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

    // Initialize authentication
    initAuth();
    
    // Initialize video controls
    initVideoControls();
});

// Authentication functions
function initAuth() {
    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');

    // Check if user is already authenticated (using session storage)
    if (sessionStorage.getItem('authenticated') === 'true') {
        showPresentation();
        return;
    }

    // Handle form submission
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validate credentials
        if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
            // Set authentication in session storage
            sessionStorage.setItem('authenticated', 'true');
            showPresentation();
        } else {
            // Show error message
            authError.textContent = 'Invalid username or password. Please try again.';
            // Clear password field
            document.getElementById('password').value = '';
        }
    });
}

function showPresentation() {
    // Hide auth overlay
    document.getElementById('auth-overlay').style.display = 'none';
    // Show presentation content
    document.getElementById('presentation-content').style.display = 'block';
}

// Video controls
function initVideoControls() {
    const videoOverlay = document.querySelector('.video-overlay');
    const terraceVideo = document.querySelector('.terrace-video');
    
    if (videoOverlay && terraceVideo) {
        videoOverlay.addEventListener('click', function() {
            if (terraceVideo.paused) {
                terraceVideo.play();
                videoOverlay.style.opacity = '0';
            } else {
                terraceVideo.pause();
                videoOverlay.style.opacity = '1';
            }
        });
        
        // Show overlay when video ends
        terraceVideo.addEventListener('ended', function() {
            videoOverlay.style.opacity = '1';
        });
        
        // Show overlay when video is paused
        terraceVideo.addEventListener('pause', function() {
            videoOverlay.style.opacity = '1';
        });
        
        // Hide overlay when video is playing
        terraceVideo.addEventListener('play', function() {
            videoOverlay.style.opacity = '0';
        });
    }
}

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
