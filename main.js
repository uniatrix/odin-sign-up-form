document.addEventListener("DOMContentLoaded", function (event) {
  let error = document.querySelector("#error");
  let password = document.querySelector("#pass");
  let confirmPassword = document.querySelector("#confpass");

  password.addEventListener("input", function () {
    if (password.value === "" && confirmPassword.value === "") {
      error.innerHTML = "*Password and confirmation are required";
    } else if (password.value !== confirmPassword.value) {
      error.innerHTML = "*Password confirmation doesn't match";
    } else {
      error.innerHTML = "";
    }
  });

  confirmPassword.addEventListener("input", function () {
    if (password.value === "" && confirmPassword.value === "") {
      error.innerHTML = "*Password and confirmation are required";
    } else if (password.value !== confirmPassword.value) {
      error.innerHTML = "*Password confirmation doesn't match";
    } else {
      error.innerHTML = "";
    }
  });
});
