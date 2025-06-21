document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC CONTENT ---
    const whoWeAreData = [
        { icon: 'https://i.ibb.co/N73dZy3/icon-about.png', title: 'About INLIGHN TECH', text: 'We believe that the future of education lies in bridging the gap between academic learning and industry needs...' },
        { icon: 'https://i.ibb.co/K7v7rDk/icon-mission.png', title: 'Our Mission', text: 'To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs.' },
        { icon: 'https://i.ibb.co/4P2pB2h/icon-vision.png', title: 'Our Vision', text: 'To equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.' }
    ];
    const statsData = [
        { target: 5000, label: 'INTERNS ENROLLED', suffix: '+' }, { target: 9000, label: 'PROJECTS COMPLETED', suffix: '+' },
        { target: 93, label: 'SATISFACTION RATE', suffix: '%' }, { target: 30, label: 'TOP INSTRUCTORS', suffix: '+' }
    ];
    const testimonialsData = [
        { name: 'Surendra Kumar', role: 'Data Science Intern', text: 'I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization, and AI Models. The structured guidance and expert mentorship improved my problem-solving and analytical skills.', img: 'https://i.ibb.co/L5hY5Yk/surendra.jpg' },
        { name: 'Mrunalini R', role: 'Data Analyst Intern', text: 'During my Data Analytics internship, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making.', img: 'https://i.ibb.co/b3gYfKq/mrunalini.jpg' },
        { name: 'Vignesh', role: 'Business Analyst Intern', text: 'I interned in Business Analysis where I gained hands-on experience in Market Research and Financial Analysis. The training and projects provided deep insights into business strategies. The experience was incredibly valuable.', img: 'https://i.ibb.co/GvxYkP6/vignesh.jpg' }
    ];
    const footerData = {
        about: { logo: 'https://i.ibb.co/6rC6hC4/logo.png', text: 'At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.' },
        menu: { title: 'Menu', links: ['Home', 'About Us', 'Programs', 'Contact Us', 'Login To Portal'] },
        quickLinks: { title: 'Quick Links', links: ['Privacy Policy', 'Term & Conditions', 'Disclaimer', 'FAQ\'s'] },
        contact: { title: 'Follow Us', address: 'Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', phone: '+91 9368842663', email: 'info@inlighntech.com' }
    };

    function populateHTML() {
        // Populate Who We Are, Stats, Testimonials, Footer
        const whoWrapper = document.querySelector('.who-we-are-slider .swiper-wrapper');
        whoWrapper.innerHTML = whoWeAreData.map(item => `<div class="swiper-slide who-card"><div class="who-card-icon"><img src="${item.icon}" alt=""></div><h3>${item.title}</h3><p>${item.text}</p></div>`).join('');
        
        const statsContainer = document.querySelector('.stats-container');
        statsContainer.innerHTML = statsData.map(stat => `<div class="stat-item"><h3 class="count" data-target="${stat.target}">0</h3><span>${stat.suffix}</span><p>${stat.label}</p></div>`).join('');

        const testimonialsWrapper = document.querySelector('.testimonials-slider .swiper-wrapper');
        testimonialsWrapper.innerHTML = testimonialsData.map(t => `<div class="swiper-slide"><div class="testimonial-card"><div class="testimonial-img"><img src="${t.img}" alt="${t.name}"></div><div class="testimonial-text"><p>"${t.text}"</p><h4>${t.name}</h4><span>${t.role}</span></div></div></div>`).join('');
        
        const footerContainer = document.querySelector('.footer-container');
        footerContainer.innerHTML = `
            <div class="footer-about" data-animation="fade-in-up"><img src="${footerData.about.logo}" alt="Inlighn Tech"><p>${footerData.about.text}</p></div>
            <div class="footer-links" data-animation="fade-in-up" data-animation-delay="100"><h4>${footerData.menu.title}</h4><ul>${footerData.menu.links.map(l=>`<li><a href="#">${l}</a></li>`).join('')}</ul></div>
            <div class="footer-links" data-animation="fade-in-up" data-animation-delay="200"><h4>${footerData.quickLinks.title}</h4><ul>${footerData.quickLinks.links.map(l=>`<li><a href="#">${l}</a></li>`).join('')}</ul></div>
            <div class="footer-contact" data-animation="fade-in-up" data-animation-delay="300"><h4>${footerData.contact.title}</h4><div class="social-icons"><a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a><a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a><a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a></div><p><i class="fas fa-map-marker-alt"></i> ${footerData.contact.address}</p><p><i class="fas fa-phone"></i> ${footerData.contact.phone}</p><p><i class="fas fa-envelope"></i> ${footerData.contact.email}</p></div>
        `;
    }
    populateHTML();
    
    // --- INITIALIZATION ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hidden'), 500));

    // --- CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', e => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: 'forwards' });
    });
    document.querySelectorAll('a, button, .swiper-navigation div, .swiper-pagination-bullet').forEach(el => {
        el.addEventListener('mouseover', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)');
        el.addEventListener('mouseout', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)');
    });

    // --- UI & INTERACTIONS ---
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- SCROLL ANIMATIONS ---
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.hasAttribute('data-animation-stagger')) {
                    const items = el.querySelectorAll('[data-animation]');
                    items.forEach((item, index) => {
                        setTimeout(() => item.classList.add('is-visible'), index * 150);
                    });
                } else {
                    const delay = el.getAttribute('data-animation-delay') || 0;
                    setTimeout(() => el.classList.add('is-visible'), delay);
                }
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-animation], [data-animation-stagger]').forEach(el => animationObserver.observe(el));

    // --- STATS COUNTER ---
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.count');
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = target / 200; // speed
                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    if(document.querySelector('.stats-container')) statsObserver.observe(document.querySelector('.stats-container'));

    // --- SWIPER SLIDERS ---
    new Swiper('.who-we-are-slider', { slidesPerView: 1, spaceBetween: 30, navigation: { nextEl: '.who-we-are-next', prevEl: '.who-we-are-prev' }, breakpoints: { 640: { slidesPerView: 2 }, 992: { slidesPerView: 3 } } });
    new Swiper('.testimonials-slider', { loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', clickable: true } });
});