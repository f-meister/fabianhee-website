function initGameCarousel(id) {
    const container = document.getElementById(id);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    const slides = container.querySelectorAll('.carousel-slide');
    let index = 0;

    const update = () => {
        // Simple 100% shift per slide
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    container.querySelector('.nav-next').onclick = (e) => {
        e.preventDefault();
        index = (index + 1) % slides.length;
        update();
    };

    container.querySelector('.nav-prev').onclick = (e) => {
        e.preventDefault();
        index = (index - 1 + slides.length) % slides.length;
        update();
    };

    // Auto-slide every 5s
    setInterval(() => {
        index = (index + 1) % slides.length;
        update();
    }, 5000);
}
