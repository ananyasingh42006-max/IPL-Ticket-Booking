
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


// Select all Book buttons
const bookButtons = document.querySelectorAll(".book-btn");

// Select booking section
const bookingSection = document.getElementById("booking");


// Book Button Click Event
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


// Activity 7 - Selector Forms and Live Interaction


// Select booking form elements using DOM selectors
const matchSelect = document.getElementById("match");

const standSelect = document.getElementById("stand");

const quantityInput = document.querySelector("#quantity");


// Select Booking Summary elements
const summaryMatch = document.getElementById("summaryMatch");

const summaryStand = document.getElementById("summaryStand");

const summaryQuantity = document.getElementById("summaryQuantity");

const ticketPrice = document.getElementById("ticketPrice");

const totalPrice = document.getElementById("totalPrice");


// Ticket prices for each match and stand category
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


// Function to update Booking Summary
function updateBookingSummary() {

    // Read selected values
    const selectedMatch = matchSelect.value;

    const selectedStand = standSelect.value;

    const quantity = Number(quantityInput.value);

    // Get ticket price
    let price = 0;

    if (
        selectedMatch &&
        selectedStand &&
        ticketPrices[selectedMatch]
    ) {

        price = ticketPrices[selectedMatch][selectedStand];

    }

    // Calculate total amount
    const total = price * quantity;

    // Update Booking Summary Card
    summaryMatch.textContent = selectedMatch || "Not selected";

    summaryStand.textContent = selectedStand || "Not selected";

    summaryQuantity.textContent = quantityInput.value || "0";

    ticketPrice.textContent = price;

    totalPrice.textContent = total;

    // Show notification
    showToast("Booking summary updated!");

}


// Add Change Event Listeners

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

        // Update summary before submission
        updateBookingSummary();

        showToast("Your booking details have been submitted successfully!");

        bookingForm.reset();

        // Reset Booking Summary
        summaryMatch.textContent = "Not selected";

        summaryStand.textContent = "Not selected";

        summaryQuantity.textContent = "0";

        ticketPrice.textContent = "0";

        totalPrice.textContent = "0";

    });

}
