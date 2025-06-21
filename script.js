document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.style.left = `${e.clientX}px`;
        cursorOutline.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .swiper-navigation div').forEach(el => {
        el.addEventListener('mouseover', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)');
        el.addEventListener('mouseout', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)');
    });

    // Header Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    // Animated Stats Counter
    const counters = document.querySelectorAll('.count');
    const speed = 200; 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
    
    // Testimonials Data
    const testimonials = [
        { name: 'Surendra Kumar', role: 'Data Science Intern', text: 'I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization, and AI Models. The structured guidance and expert mentorship improved my problem-solving and analytical skills.', img: 'https://i.ibb.co/L5hY5Yk/surendra.jpg' },
        { name: 'Mrunalini R', role: 'Data Analyst Intern', text: 'During my Data Analytics internship, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making.', img: 'https://i.ibb.co/b3gYfKq/mrunalini.jpg' },
        { name: 'Vignesh', role: 'Business Analyst Intern', text: 'I interned in Business Analysis where I gained hands-on experience in Market Research and Financial Analysis. The training and projects provided deep insights into business strategies. The experience was incredibly valuable.', img: 'https://i.ibb.co/GvxYkP6/vignesh.jpg' }
    ];

    const testimonialsWrapper = document.querySelector('.testimonials-slider .swiper-wrapper');
    testimonials.forEach(t => {
        const slide = `
            <div class="swiper-slide">
                <div class="testimonial-card">
                    <div class="testimonial-img"><img src="${t.img}" alt="${t.name}"></div>
                    <div class="testimonial-text">
                        <p>"${t.text}"</p>
                        <h4>${t.name}</h4>
                        <span>${t.role}</span>
                    </div>
                </div>
            </div>`;
        testimonialsWrapper.innerHTML += slide;
    });

    // Swiper Sliders
    new Swiper('.who-we-are-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.who-we-are-next',
            prevEl: '.who-we-are-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
        }
    });

    new Swiper('.testimonials-slider', {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});