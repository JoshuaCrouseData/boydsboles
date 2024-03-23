document.addEventListener('DOMContentLoaded', function() {
    // Temporarily hide horizontal scrollbar
    document.body.style.overflowX = 'hidden';

    // Select the hero section title
    const heroTitle = document.querySelector('.hero-section h1');

    // Apply a fade-in effect to the hero title
    heroTitle.style.opacity = '0'; // Set initial opacity to 0
    setTimeout(() => {
        heroTitle.style.opacity = '1'; // Change opacity to 1 to make it visible
        heroTitle.style.transition = 'opacity 2s ease-in-out'; // Transition effect for the opacity change
    }, 500); // Delay the effect to make it noticeable when the page loads

    // Select all paragraphs with the class 'animation-from-right'
    const rightElements = document.querySelectorAll('.animation-from-right');

    rightElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(100px)'; // Start 100px to the right
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
            el.style.transition = 'opacity 3s ease-in-out, transform 2s ease-in-out';
        }, 500);
    });

    // Select all elements with the class 'animation-from-bottom'
    const bottomElements = document.querySelectorAll('.animation-from-bottom');

    bottomElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(100px)'; // Start 100px below
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 4s ease-in-out, transform 2s ease-in-out';
        }, 500);
    });

    // Select the "Shop Now" button
    const shopNowButton = document.querySelector('.hero-section .btn-primary');

    // Add an event listener for the "Shop Now" button
    shopNowButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the button
        // Display an alert or perform any action when the button is clicked
        alert('Ready to shop? Let\'s explore our products!');
        // Here you can implement more complex interactions like scrolling to a section, opening a modal, etc.
    });

    // unhide the horizontal scrollbar
    // Set a timeout that matches your longest animation duration
    // plus the initial delay if any
    setTimeout(() => {
        // Revert overflowX back to default after animations are complete
        document.body.style.overflowX = '';
    }, 5000); // Adjust the time according to your animation duration + delay

});
