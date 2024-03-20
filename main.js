function checkPassword() {
  let password = document.getElementById("Password").value;
  let confirmPassword = document.getElementById("Confirm-Password").value;
  //   to show password in consol
  console.log(password, confirmPassword);
  let passwordLength = password.length;
  let message = document.getElementById("message");
  // if message not empty
  if (password.length !== 0) {
    // if password equal confirmPassword
    if (password === confirmPassword) {
      message.textContent = "Correct password" + ` & password length is ${passwordLength}`;
      message.style.background = "green";
      // if password not equal confirmPassword
    } else {
      message.textContent = "Passwords do not match";
      message.style.background = "red";
    }
    // if password is empty
  } else {
    message.textContent = "input password";
    message.style.background = "red";
  }
}
