document.addEventListener("DOMContentLoaded", function (event) {
  let password = document.querySelector("#pass").value;
  let confirmPassword = document.querySelector("#confpass").value;

  let error = document.querySelector("#error");

  if (password == "" && confirmPassword == "") {
    error.innerHTML = "*Password confirmation doesn't match";
  } else if (password === confirmPassword) {
    error.innerHTML = "";
  }

  console.log("Hello from index.html");
});
