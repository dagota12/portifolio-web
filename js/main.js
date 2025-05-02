console.log("hello world");

// Mobile Navigation Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("#laptop_nav ul");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("mobile-nav-active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll("#laptop_nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      if (nav.classList.contains("mobile-nav-active")) {
        nav.classList.remove("mobile-nav-active");
      }
    });
  });

  // Add footer animation on scroll
  const footer = document.querySelector("#footer");
  const contactSection = document.querySelector("#contact");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footer.offsetTop;
    const contactPosition = contactSection.offsetTop;

    if (scrollPosition > footerPosition - 100) {
      footer.classList.add("footer-visible");
    }

    if (scrollPosition > contactPosition - 100) {
      contactSection.classList.add("contact-visible");
    }
  });
});
