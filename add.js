// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and trigger animations
function handleScroll() {
    const animatedElements = document.querySelectorAll('.animated');

    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('animate__animated', 'animate__slideInUp'); // Add fade-in animation classes
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
