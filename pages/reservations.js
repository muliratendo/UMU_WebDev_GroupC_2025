// Booking Modal Functionality
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const closeBookingBtn = document.querySelector('.close-booking');
const bookNowButtons = document.querySelectorAll('.btn-outline-warning');

// Open modal when any 'BOOK NOW' button is clicked
bookNowButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
    });
});

// Function to open booking modal
function openBookingModal() {
    bookingModal.classList.add('active');
}

// Function to close booking modal
function closeBookingModal() {
    bookingModal.classList.remove('active');
    bookingForm.reset();
}

// Close button click event
closeBookingBtn.addEventListener('click', closeBookingModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
    }
});

// Handle form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cvv = document.getElementById('cvv').value;
    
    // Simple validation and alert
    if (fullName && cardNumber && cvv) {
        alert(`Booking Successful!\nName: ${fullName}\nCard: ${cardNumber.slice(-4)}\nThank you for booking!`);
        closeBookingModal();
    } else {
        alert('Please fill in all fields');
    }
});

// reservations.js — local page script
// Basic startup check so we can confirm the file is loaded.
document.addEventListener('DOMContentLoaded', () => {
    console.log('reservations.js loaded');

    // Example: fill current year in footer (if element exists)
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // TODO: Add reservation-specific JS here (form handlers, calendar, validation)
});
