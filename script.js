const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');
    siteNav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.filter').forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
        const category = filterButton.dataset.filter;
        document.querySelectorAll('.filter').forEach((button) => button.classList.remove('active'));
        filterButton.classList.add('active');
        document.querySelectorAll('.project-card').forEach((project) => {
            project.classList.toggle('is-hidden', category !== 'all' && project.dataset.category !== category);
        });
    });
});
