confirm("You're on Consumer Side")

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const button = document.querySelector('.button');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Move carousel-inner to show the active slide
        document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Show button only on the first slide
        button.style.display = (index === 0) ? 'block' : 'none';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial slide
    showSlide(currentSlide);

    // Auto-slide every 3 seconds
    const autoSlideInterval = setInterval(nextSlide, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(autoSlideInterval); // Reset auto-slide timer if manual navigation is used
        });
    });
});