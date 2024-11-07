document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.add('flex-col', 'space-y-4');
});

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = mobileMenu.classList.toggle('hidden');
    backdrop.style.display = isHidden ? 'none' : 'block';

    if (isHidden) {
        // Close the menu
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    } else {
        // Open the menu
        mobileMenu.classList.remove('close');
        mobileMenu.classList.add('open');
    }
});

// Close the mobile menu when clicking outside of it
backdrop.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    backdrop.style.display = 'none';
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('close');
});

// Close mobile menu when clicking on a menu item
const menuItems = document.querySelectorAll('#mobile-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.add('hidden');
        backdrop.style.display = 'none';
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    });
});

// Close mobile menu when clicking outside of the menu and button
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    // If the click was outside the menu and not on the button, close the menu
    if (!isClickInsideMenu && !isClickInsideButton) {
        mobileMenu.classList.add('hidden');
        backdrop.style.display = 'none';
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    }
});



document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link

        const parent = button.closest('.carousel-item'); // Find the parent card
        const shortText = parent.querySelector('.text-short'); // The shortened text
        const fullText = parent.querySelector('.text-full'); // The full text

        // Toggle visibility of text
        shortText.classList.toggle('hidden'); // Hide/show the short text
        fullText.classList.toggle('hidden'); // Hide/show the full text

        // Change the "Read More" to "Read Less"
        if (fullText.classList.contains('hidden')) {
            button.textContent = 'Read More'; // If full text is hidden, show "Read More"
        } else {
            button.textContent = 'Read Less'; // If full text is shown, show "Read Less"
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalItems = document.querySelectorAll('.service-card').length;
    let currentIndex = 0;

    // Function to move the carousel
    function updateCarousel() {
        // Move the carousel based on the current index
        const cardWidth = document.querySelector('.service-card').offsetWidth;
        const offset = -(cardWidth + 6) * currentIndex; // 6px for the space between cards
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }

    // Next button click handler
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first item
        }
        updateCarousel();
    });

    // Prev button click handler
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Loop back to the last item
        }
        updateCarousel();
    });

    // Initial call to set carousel position
    updateCarousel();
});


