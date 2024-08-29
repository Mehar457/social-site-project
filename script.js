function toggleLoginForm() {
    var modal = document.getElementById("login-form");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

function login(event) {
    event.preventDefault();
    alert("Login successful!");
    toggleLoginForm(); // Close the modal after login
}

function logout() {
    alert("Logged out!");
}
