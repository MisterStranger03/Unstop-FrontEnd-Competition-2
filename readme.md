# Inlighn Tech - Tech Website Replication

This project is a high-fidelity, pixel-perfect replication of the Inlighn Tech promotional website, as demonstrated in the provided video. The primary goal was to meticulously recreate every visual element, animation, transition, and interactive feature to produce an identical user experience.

## ✨ Features

-   **Pixel-Perfect & Responsive Design:** The layout is a faithful replication of the original design, fully responsive and optimized for desktop, tablet, and mobile devices.
-   **Advanced Animations & Transitions:**
    -   **Preloader:** An initial loading animation with the company logo and progress bar that gracefully fades out.
    -   **Scroll-Triggered Animations:** Elements elegantly fade in and slide up as they enter the viewport.
    -   **Staggered Animations:** Components in a list (like feature cards) animate in sequence for a smoother visual flow.
    -   **Animated Statistics:** The numbers in the stats section count up to their final value when visible.
-   **Interactive UI Elements:**
    -   **Custom Cursor:** A unique circular cursor that follows the mouse and expands on hover over interactive elements.
    -   **Dynamic Header:** A glassmorphism-style header that becomes opaque and adds a shadow on scroll for better visibility.
    -   **Draggable Testimonial Slider:** A fully functional, draggable, and auto-playing slider for testimonials, built with Swiper.js.
    -   **"Who We Are" Card Slider:** A multi-item card slider with custom navigation controls.
    -   **Functional Chat Widget:** A floating chat bubble that opens a pop-up window on click.
-   **Complete Component Replication:** Includes all sections from the video, such as the hero section with background effects, recognitions bar, about section, "Why Choose Us" grid, testimonials, and contact form.

## 🛠️ Tech Stack

-   **HTML5:** For the semantic structure of the website.
-   **CSS3:** For all styling, including:
    -   Flexbox and Grid for layout.
    -   Custom Properties (CSS Variables) for a maintainable color theme.
    -   Keyframe animations for scroll effects and the preloader.
    -   Advanced selectors and pseudo-elements for UI details.
-   **JavaScript (ES6+):** For all dynamic functionality, including:
    -   DOM manipulation to create and manage elements.
    -   Intersection Observer API for efficient scroll-triggered animations.
    -   Event handling for all interactive components (cursor, sliders, chat widget).
-   **Swiper.js:** A powerful, modern library for creating touch-enabled and responsive sliders.

## 📁 File Structure

The project is organized into three core files for simplicity:
/
|-- index.html # The main HTML file containing the website structure.
|-- style.css # All CSS for styling, layout, and animations.
|-- script.js # All JavaScript for interactivity and dynamic content.
|-- README.md # This file.


## 🚀 How to Run Locally

No build steps or local server are required. You can run this project directly in your browser.

1.  **Download the Files:** Make sure you have `index.html`, `style.css`, and `script.js` in the same folder.
2.  **Open in Browser:** Open the `index.html` file in any modern web browser (e.g., Google Chrome, Firefox, Microsoft Edge).

That's it! The website will be fully functional.

---

## 🤖 AI Tool Acknowledgment

The HTML, CSS, and JavaScript code for this project was generated by a large language model from **Google AI Studio**.

The development process was iterative, involving detailed prompts and feedback to achieve the desired level of fidelity. This included:
-   Translating the visual design from the video into a structured HTML layout.
-   Implementing complex CSS animations and interactive states (hover, active, scroll-based changes).
-   Writing JavaScript logic to handle all interactive components, such as the custom cursor, sliders, and scroll-triggered events.
-   Troubleshooting and correcting issues, such as broken image links and missing components, based on user feedback.