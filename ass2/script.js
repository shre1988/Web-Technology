document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Name validation
        if (name === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        // Email validation
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Message validation
        if (message === "") {
            alert("Please enter a message.");
            isValid = false;
        }

        if (isValid) {
            // Simulate saving process (You can replace this with an actual AJAX request)
            setTimeout(function () {
                alert("Successfully saved!"); // Show success message
                form.reset(); // Clear form fields
            }, 500); // Simulated delay for better UX
        }
    });
});
