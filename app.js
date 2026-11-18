
// Activity 5 - JavaScript Basics

console.log("JavaScript is connected successfully!");

// Reusable Toast Function
function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) {
        alert(message);
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Activity 5 - Smooth Scrolling for Book Buttons

const bookButtons = document.querySelectorAll(".book-btn");
const bookingSection = document.getElementById("booking");

bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {

        event.preventDefault();

        bookingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        showToast("Please fill in your booking details!");
    });
});


// Activity 7 - Selector Forms and Live Booking Summary

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.querySelector("#quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const ticketPrice = document.getElementById("ticketPrice");
const totalPrice = document.getElementById("totalPrice");

const ticketPrices = {
    "RCB vs CSK": {
        General: 800,
        Premium: 1500,
        VIP: 3000
    },

    "MI vs KKR": {
        General: 900,
        Premium: 1800,
        VIP: 3500
    },

    "CSK vs MI": {
        General: 700,
        Premium: 1600,
        VIP: 3200
    },

    "KKR vs RCB": {
        General: 800,
        Premium: 1700,
        VIP: 3300
    }
};


// Function to Update Booking Summary

function updateBookingSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(quantityInput.value);

    let price = 0;

    if (
        selectedMatch &&
        selectedStand &&
        ticketPrices[selectedMatch]
    ) {
        price = ticketPrices[selectedMatch][selectedStand];
    }

    const total = price * quantity;

    summaryMatch.textContent = selectedMatch || "Not selected";
    summaryStand.textContent = selectedStand || "Not selected";
    summaryQuantity.textContent = quantityInput.value || "0";

    ticketPrice.textContent = price;
    totalPrice.textContent = total;

    showToast("Booking summary updated!");
}


// Change Events

if (matchSelect && standSelect && quantityInput) {

    matchSelect.addEventListener("change", updateBookingSummary);

    standSelect.addEventListener("change", updateBookingSummary);

    quantityInput.addEventListener("input", updateBookingSummary);

}


// Booking Form Submission

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        updateBookingSummary();

        showToast("Your booking details have been submitted successfully!");

        bookingForm.reset();

        summaryMatch.textContent = "Not selected";
        summaryStand.textContent = "Not selected";
        summaryQuantity.textContent = "0";
        ticketPrice.textContent = "0";
        totalPrice.textContent = "0";

    });

}


// Activity 8 - Team Filter

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

const noMatches = document.getElementById("noMatches");

if (teamFilter) {

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;

        let visibleCount = 0;

        matchCards.forEach(function (card) {

            const teams = card.dataset.teams.split(" ");

            if (
                selectedTeam === "all" ||
                teams.includes(selectedTeam)
            ) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        if (noMatches) {
            noMatches.hidden = visibleCount !== 0;
        }

    });

}


// Activity 8 - Grid and List View Toggle

const gridView = document.getElementById("gridView");

const listView = document.getElementById("listView");

const matchContainer = document.getElementById("matchContainer");

if (gridView && listView && matchContainer) {

    gridView.addEventListener("click", function () {

        matchContainer.classList.remove("list-layout");

        gridView.classList.add("active");

        listView.classList.remove("active");

        showToast("Grid view selected!");

    });


    listView.addEventListener("click", function () {

        matchContainer.classList.add("list-layout");

        listView.classList.add("active");

        gridView.classList.remove("active");

        showToast("List view selected!");

    });

}


// Activity 8 - Mobile Hamburger Menu

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a navigation link

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
