var passwordInputs = document.getElementsByClassName("error");
var pw1 = document.getElementById("user_password");
var pw2 = document.getElementById("confirm_password");
const error = pw1.nextElementSibling;

function matchPassword() {
	// if the confirm?password input is onfocus, this function is run to check if the passwords match
	if (pw1.value != pw2.value) {
		error.className = "errorMessage active";
		passwordInputs.className = "error invalid";
		error.textContent = "*Passwords do not match";
	} else {
		//if the passwords match, the error message is removed
		error.textContent = "";
		error.className = "error";
		passwordInputs.className = "error";
		return;
	}
}
