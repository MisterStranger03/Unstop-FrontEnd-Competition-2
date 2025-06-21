document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC CONTENT ---
    function populateHTML() {
        const whoWeAreData = [
            { icon: 'https://i.imgur.com/B7mI54j.png', title: 'About INLIGHN TECH', text: 'We believe that the future of education lies in bridging the gap between academic learning and industry needs.' },
            { icon: 'https://i.imgur.com/6jws3v6.png', title: 'Our Mission', text: 'To empower students by providing immersive, real-world learning experiences through tailored internship programs.' },
            { icon: 'https://i.imgur.com/Gz9R1xP.png', title: 'Our Vision', text: 'To equip participants with practical skills and confidence they need to succeed in the fast-evolving tech industry.' }
        ];
        const statsData = [
            { target: 5000, label: 'INTERNS ENROLLED', suffix: '+' }, { target: 9000, label: 'PROJECTS COMPLETED', suffix: '+' },
            { target: 93, label: 'SATISFACTION RATE', suffix: '%' }, { target: 30, label: 'TOP INSTRUCTORS', suffix: '+' }
        ];
        const testimonialsData = [
            { name: 'Surendra Kumar', role: 'Data Science Intern', text: 'I completed my Data Science internship at INLIGHN TECH, gaining hands-on experience in Machine Learning & AI Models. The guidance improved my problem-solving skills.', img: 'https://i.imgur.com/5JpZJ0R.jpg' },
            { name: 'Mrunalini R', role: 'Data Analyst Intern', text: 'During my internship, I learned SQL, Power BI, and Tableau. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making.', img: 'https://i.imgur.com/yN0rqcT.jpg' },
            { name: 'Vignesh', role: 'Business Analyst Intern', text: 'I interned in Business Analysis where I gained experience in Market Research and Financial Analysis. The training and projects provided deep insights into business strategies. Incredibly valuable.', img: 'https://i.imgur.com/D4sLz2X.jpg' }
        ];
        const footerHTML = `
            <div class="container footer-container">
                <div class="footer-about" data-animation="fade-in-up"><img src="https://i.imgur.com/82f2Ipx.png" alt="Inlighn Tech"><p>At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.</p></div>
                <div class="footer-links" data-animation="fade-in-up" data-animation-delay="100"><h4>Menu</h4><ul><li><a href="#home">Home</a></li><li><a href="#about">About Us</a></li><li><a href="#programs">Programs</a></li><li><a href="#contact">Contact Us</a></li><li><a href="#">Login To Portal</a></li></ul></div>
                <div class="footer-links" data-animation="fade-in-up" data-animation-delay="200"><h4>Quick Links</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Term & Conditions</a></li><li><a href="#">Disclaimer</a></li><li><a href="#">FAQ's</a></li></ul></div>
                <div class="footer-contact" data-animation="fade-in-up" data-animation-delay="300"><h4>Follow Us</h4><div class="social-icons"><a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a><a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a><a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a></div><p><i class="fas fa-map-marker-alt"></i> VO-301, WeWork Prestige Central, 36, Infantry Rd, Bengaluru, Karnataka 560001</p><p><i class="fas fa-phone"></i> +91 9368842663</p><p><i class="fas fa-envelope"></i> info@inlighntech.com</p></div>
            </div>
            <div class="footer-bottom"><p>Copyright 2025 INLIGHN TECH | All Rights Reserved | Design By <a href="#">Gdscreatives</a></p></div>`;

        document.querySelector('.who-we-are-slider .swiper-wrapper').innerHTML = whoWeAreData.map(d => `<div class="swiper-slide who-card"><div class="who-card-icon"><img src="${d.icon}" alt=""></div><h3>${d.title}</h3><p>${d.text}</p></div>`).join('');
        document.querySelector('.stats-container').innerHTML = statsData.map(d => `<div class="stat-item"><h3 class="count" data-target="${d.target}">0</h3><span>${d.suffix}</span><p>${d.label}</p></div>`).join('');
        document.querySelector('.testimonials-slider .swiper-wrapper').innerHTML = testimonialsData.map(d => `<div class="swiper-slide"><div class="testimonial-card"><div class="testimonial-img"><img src="${d.img}" alt="${d.name}"></div><div class="testimonial-text"><p>"${d.text}"</p><h4>${d.name}</h4><span>${d.role}</span></div></div></div>`).join('');
        document.querySelector('.footer').innerHTML = footerHTML;
    }
    populateHTML();
    
    // --- INITIALIZATION & UI ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hidden'), 500));

    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    const chatWidget = document.querySelector('.chat-widget');
    document.querySelector('.chat-bubble').addEventListener('click', () => chatWidget.classList.toggle('open'));
    document.querySelector('.chat-close').addEventListener('click', () => chatWidget.classList.remove('open'));
    
    // --- CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', e => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: 'forwards' });
    });
    document.querySelectorAll('a, button, .swiper-navigation div, .swiper-pagination-bullet, .chat-bubble').forEach(el => {
        el.addEventListener('mouseover', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)');
        el.addEventListener('mouseout', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)');
    });

    // --- SCROLL ANIMATIONS ---
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.dataset.animationDelay || 0;
                setTimeout(() => el.classList.add('is-visible'), delay);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-animation]').forEach(el => animationObserver.observe(el));

    // --- STATS COUNTER ---
    const statsObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.dataset.target;
                    const count = +counter.innerText;
                    const inc = Math.max(target / 100, 1);
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            observer.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });
    if(document.querySelector('.stats-container')) statsObserver.observe(document.querySelector('.stats-container'));

    // --- SWIPER SLIDERS ---
    new Swiper('.who-we-are-slider', { slidesPerView: 1, spaceBetween: 30, navigation: { nextEl: '.who-we-are-next', prevEl: '.who-we-are-prev' }, breakpoints: { 640: { slidesPerView: 2 }, 992: { slidesPerView: 3 } } });
    new Swiper('.testimonials-slider', { loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', clickable: true }, slidesPerView: 1, spaceBetween: 30, centeredSlides: true, effect: 'coverflow', coverflowEffect: { rotate: 0, stretch: 80, depth: 200, modifier: 1, slideShadows: false } });
});