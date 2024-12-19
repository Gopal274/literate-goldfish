document.addEventListener("DOMContentLoaded", function() {
  var signupBtn = document.querySelector(".signup-btn");
  var loginBtn = document.querySelector(".login-btn");
  var loginBox = document.querySelector(".login-box");
  var signupBox = document.querySelector(".signup-box");

  signupBtn.onclick = function() {
    signupBox.classList.add("active");
    loginBox.classList.remove("active");
    loginBtn.classList.remove("d-none");
    signupBtn.classList.add("d-none");
  };

  loginBtn.onclick = function() {
    signupBox.classList.remove("active");
    loginBox.classList.add("active");
    loginBtn.classList.add("d-none");
    signupBtn.classList.remove("d-none");
  };

  var registerForm = document.querySelector(".signup-form");
  var allInput = registerForm.querySelectorAll("INPUT");
  var textArea = registerForm.querySelector("textarea");

  registerForm.onsubmit = function(e) {
    e.preventDefault();
    registrationData();
  };

  const registrationData = () => {
    // Check if brand code already exists in localStorage
    if(localStorage.getItem(allInput[0].value + "_brand") == null) {
      const userData = {
        brandcode: allInput[0].value,
        brandname: allInput[1].value,
        website: allInput[2].value,
        contact: allInput[3].value,
        address: textArea.value,  // Assuming the address is in the first textarea
        username: allInput[4].value,
        password: allInput[5].value
      };

      let userString = JSON.stringify(userData);
      localStorage.setItem(allInput[0].value + "_brand", userString);
    } else {
      alert("This brand code already exists");
    }
  };
});
