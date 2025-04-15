document.addEventListener('DOMContentLoaded', () => {
    // Page load animation
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    }, 1000);

    // Parallax effect for banner
    const banner = document.querySelector('.channel-banner');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        banner.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });

    // Scroll reveal for video cards
    const videoCards = document.querySelectorAll('.video-card');
    const revealCards = () => {
        videoCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
                card.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealCards);
    revealCards(); // Initial check
});
