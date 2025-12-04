document.addEventListener('DOMContentLoaded', function () {
    const userName = document.getElementById('name');
    const email = document.getElementById('email');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error')
    const name_error = document.getElementById('name_error');
    const email_error = document.getElementById('email_error');
    const date_error = document.getElementById('date_error');
    const time_error = document.getElementById('time_error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        name_error.innerHTML = ""; // Clear previous errors
       email_error.innerHTML = "";
        date_error.innerHTML = "";
        time_error.innerHTML = "";

        if (userName.value === '' || userName.value == null) {
            name_error.innerHTML = "Name is required";            // Validate name
            isValid = false;
        }
        if (email.value === '' || email.value == null) {
            email_error.innerHTML = "Email is required";            // Validate name
            isValid = false;
        }
         if (date.value === '' || date.value == null) {
            date_error.innerHTML = "Input a date";            // Validate name
            isValid = false;
        }
         if (time.value === '' || time.value == null) {
            time_error.innerHTML = "Select a time";            // Validate name
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");    // Only submit if all validations pass
        }
    });
});