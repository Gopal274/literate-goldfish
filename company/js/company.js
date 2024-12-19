// Select the buttons and boxes
var signupBtn = document.querySelector(".signup-btn"); // Assuming you have a class for the signup button
var loginBtn = document.querySelector(".login-btn"); // Assuming you have a class for the login button
var loginBox = document.querySelector(".login-box");
var signupBox = document.querySelector(".signup-box");

// Function to show the signup box and hide the login box
signupBtn.addEventListener("click", function() {
  signupBox.style.display = "block"; // Show signup box
  loginBox.style.display = "none"; // Hide login box
});

// Function to show the login box and hide the signup box
loginBtn.addEventListener("click", function() {
  loginBox.style.display = "block"; // Show login box
  signupBox.style.display = "none"; // Hide signup box
});

// Optional: Initialize the display state
loginBox.style.display = "block"; // Show login box by default
signupBox.style.display = "none"; // Hide signup box by default