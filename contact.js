// =========================
// MOBILE MENU TOGGLE
// =========================
const mobileMenuBtn = document.querySelector(".mobile-menu");
const mainNav = document.querySelector("nav");

if (mobileMenuBtn && mainNav) {
  // Toggle menu on hamburger click
  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileMenuBtn.classList.toggle("open");
  });

  // Close menu when a link is clicked
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      mobileMenuBtn.classList.remove("open");
    });
  });
}

// =========================
// CONTACT FORM SUBMISSION
// =========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const phone = document.getElementById("phone").value;

    alert(
      `Thank you ${firstName}! We have received your inquiry and will contact you at ${phone} within 24 hours.`
    );

    contactForm.reset();
  });
}

// =========================
// FAQ ACCORDION
// =========================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other items
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });
    // Toggle current item
    item.classList.toggle("active");
  });
});

// =========================
// SMOOTH SCROLLING
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// =========================
// HEADER SCROLL EFFECT
// =========================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

// =========================
// METHOD CARD HOVER EFFECT
// =========================
document.querySelectorAll(".method-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
