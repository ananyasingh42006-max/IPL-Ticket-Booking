
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


// Booking Form Submission
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your booking details have been submitted successfully!");

        bookingForm.reset();

    });

}
