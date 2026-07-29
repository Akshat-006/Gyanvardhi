document.getElementById("registerForm").addEventListener("submit", function (event) {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();


    let nameRegex = /^[A-Za-z\s]{5,}$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (only letters, minimum 5 characters).");
        event.preventDefault();
        return;
    }


    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    alert("Registration successful ✅");
});
