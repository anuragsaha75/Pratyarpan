document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle visibility of the dropdown menu when the hamburger is clicked
    hamburgerMenu.addEventListener("click", function() {
        dropdownMenu.classList.toggle("visible");
    });

    // Alert for Donate Button
    const donateButton = document.querySelector(".btn");
    donateButton.addEventListener("click", function() {
        alert("Thank you for your generosity! Donation options will be available soon.");
    });
});
