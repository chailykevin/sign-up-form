const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpass");
const errorBox = document.querySelector("p.error1");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  if (password.value != confirmpassword.value) {
    e.preventDefault();
    errorBox.textContent = "* Passwords do not match";
    password.classList.add("notsame");
    confirmpassword.classList.add("notsame");
  } else {
    password.classList.remove("notsame");
    confirmpassword.classList.remove("notsame");
  }
});
