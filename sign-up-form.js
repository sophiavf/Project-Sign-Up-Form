const passwordInputs = document.getElementsByClassName("error");
const pw1 = document.getElementById("user_password");
const pw2 = document.getElementById("confirm_password");
const error = pw1.nextElementSibling;
const allInputs = document
	.getElementById("form")
	.querySelectorAll("[required]");

const form = document.getElementById("form");
const popupWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const formElement = document.querySelector("form");

var passwordValidity = false;

function matchPassword() {
	// if the confirm?password input is onfocus, this function is run to check if the passwords match
	if (pw1.value !== pw2.value || pw1.value === undefined) {
		error.className = "errorMessage active";
		passwordInputs.className = "error invalid";
		error.textContent = "*Passwords do not match";
		pw1.setCustomValidity("*Passwords do not match");
		return false;
	} else {
		//if the passwords match, the error message is removed
		error.textContent = "";
		error.className = "error";
		passwordInputs.className = "error";
		pw1.setCustomValidity("");
		return true;
	}
}
form.addEventListener("submit", function () {
	popupWindow.style.display = "block";
});
closeButton.addEventListener("click", () => {
	popupWindow.style.display = "none";
	formElement.reset();
});
