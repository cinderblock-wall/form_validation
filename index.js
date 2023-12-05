const regForm = document.getElementById("registration");
const username = document.getElementsByName("username");
const email = document.getElementsByName("email");
const password = document.getElementsByName("password");
const terms = document.getElementsByName("terms");
const submit = document.getElementsByName("submit");

function validateEmail() {
    let emailVal = email.value;
  
    if (emailVal === "") {
      alert("Please provide an email.");
      email.focus();
      return false;
    }
  
    const atPos = emailVal.indexOf("@");
    const dotPos = emailVal.lastIndexOf(".");
  
    if (atPos < 1) {
      alert(
        "Your email must include an @ symbol which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotPos - atPos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
  
    return emailVal;
  }