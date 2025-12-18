
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

/* Back to top visibility */
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

/* Scroll to top */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
