document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMeChecked = document.getElementById("rememberMe").checked;

    // Reset error message
    document.getElementById("errorMessage").innerText = "";

    // Example of basic validation
    if (emailIsValid(email) && passwordIsValid(password)) {
        alert("Signup successful! You can now login.");
    } else {
        if (!passwordIsValid(password)) {
            document.getElementById("errorMessage").innerText = "Password does not meet requirements.";
        } else if (!emailIsValid(email)) {
            document.getElementById("errorMessage").innerText = "Invalid email format.";
        } else if (!rememberMeChecked) {
            document.getElementById("errorMessage").innerText = "Please select 'Remember Me'.";
        }
    }
});

function emailIsValid(email) {
    return /^[a-zA-Z0-9._-]+@gmail\.com$/i.test(email.trim());
}


function passwordIsValid(password) {
    // Password validation criteria:
    // At least 8 characters
    // Includes uppercase, lowercase, digit, and special character

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
