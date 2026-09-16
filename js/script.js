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

const bridalConnectProject = document.querySelector('.project-card:nth-child(1)');
if (bridalConnectProject) {
    bridalConnectProject.querySelector('h3').textContent = 'BridalConnect';
    bridalConnectProject.querySelector('p').textContent = 'An intelligent bridal rental and booking platform for dresses, jewellery, footwear, makeup, and mehendi services. Users can browse products, book services, pay securely, and visualize outfits with an AI-based Virtual Try-On feature.';
    bridalConnectProject.querySelector('img').alt = 'BridalConnect bridal rental and booking platform preview';
}

const talentScreenProject = document.querySelector('.project-card:nth-child(2)');
if (talentScreenProject) {
    const talentScreenRepository = 'https://github.com/rameeshamajeed2000-spec/resume-screening-final';
    talentScreenProject.querySelector('h3').textContent = 'Talent Screen 360';
    talentScreenProject.querySelector('p').textContent = 'A full-stack recruitment and resume screening application built with Python, Flask, HTML, CSS, JavaScript, Bootstrap, and MySQL. It helps companies post jobs, manage applications, and evaluate resumes with rule-based scoring and skill matching.';
    talentScreenProject.querySelector('img').alt = 'Talent Screen 360 recruitment and resume screening platform preview';
    talentScreenProject.querySelector('.project-info span:nth-child(2) strong').textContent = 'Resume scoring · Skill matching';
    talentScreenProject.querySelector('.project-info').insertAdjacentHTML('beforeend', '<span>Stack <strong>Python · Flask · HTML · CSS · JavaScript · Bootstrap · MySQL</strong></span>');
    talentScreenProject.querySelectorAll('a').forEach((link) => {
        link.href = talentScreenRepository;
        link.target = '_blank';
        link.rel = 'noreferrer';
    });
}

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
