// script.js

// ==========================
// AMAZON WEBSITE JAVASCRIPT
// ==========================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // --------------------------
    // IMAGE CAROUSEL
    // --------------------------

    const slides = document.querySelectorAll(".slide");
    const slidesContainer = document.querySelector(".slides-container");

    let currentSlide = 0;
    let autoSlide;

    // Function to move to a specific slide
    function goToSlide(index) {
        currentSlide = index;

        slidesContainer.scrollTo({
            left: slides[index].offsetLeft,
            behavior: "smooth"
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        goToSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        goToSlide(currentSlide);
    }

    // Auto slide every 4 seconds
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            nextSlide();
        }, 4000);
    }

    // Stop auto sliding
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Start carousel
    startAutoSlide();

    // Pause on hover
    slidesContainer.addEventListener("mouseenter", stopAutoSlide);

    // Resume on mouse leave
    slidesContainer.addEventListener("mouseleave", startAutoSlide);

    // --------------------------
    // SEARCH FUNCTIONALITY
    // --------------------------

    const searchBox = document.querySelector(".search-box");
    const itemCards = document.querySelectorAll(".item-card");

    searchBox.addEventListener("keyup", () => {

        const searchText = searchBox.value.toLowerCase();

        itemCards.forEach((card) => {

            const title = card.querySelector("h2")
                .innerText
                .toLowerCase();

            if (title.includes(searchText)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });

    // --------------------------
    // BACK TO TOP BUTTON
    // --------------------------

    const backToTop = document.querySelector(".back-option");

    backToTop.addEventListener("click", (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --------------------------
    // ITEM CARD HOVER EFFECT
    // --------------------------

    itemCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.transition = "0.3s ease";
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // --------------------------
    // CART CLICK MESSAGE
    // --------------------------

    const cartOption = document.querySelector(".cart-option");

    cartOption.addEventListener("click", () => {
        alert("Your cart is currently empty.");
    });

    // --------------------------
    // ACCOUNT DROPDOWN MESSAGE
    // --------------------------

    const accountSelect = document.querySelector(".select-account");

    accountSelect.addEventListener("change", () => {
        alert("Account section selected.");
    });

    // --------------------------
    // LANGUAGE CHANGE
    // --------------------------

    const languageSelect = document.querySelector(".select-language");

    languageSelect.addEventListener("change", () => {

        const selectedLanguage =
            languageSelect.options[languageSelect.selectedIndex].text;

        alert(`Language changed to ${selectedLanguage}`);
    });
});