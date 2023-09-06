document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const thankYouSection = document.querySelector(".thank-you");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add JavaScript validation here if needed.
        contactForm.style.display = "none";
        thankYouSection.style.display = "block";
    });
});
