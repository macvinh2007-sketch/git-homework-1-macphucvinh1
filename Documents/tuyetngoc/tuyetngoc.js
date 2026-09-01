// Tabs for 7-day menu
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector('.tab-panel[data-day="' + btn.dataset.day + '"]').classList.add('active');
    });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
} else {
    revealEls.forEach(el => el.classList.add('in'));
}

// Quote form (front-end only demo)
const form = document.getElementById('quoteForm');
const success = document.getElementById('formSuccess');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    success.style.display = 'block';
    form.reset();
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});