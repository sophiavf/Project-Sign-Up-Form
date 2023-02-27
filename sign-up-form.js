const passwordInputs = document.getElementsByClassName("error");
const pw1 = document.getElementById("user_password");
const pw2 = document.getElementById("confirm_password");
const error = pw1.nextElementSibling;
const allInputs = document
	.getElementById("form")
	.querySelectorAll("[required]");

var passwordValidity = false;

function matchPassword() {
	// if the confirm?password input is onfocus, this function is run to check if the passwords match
	if (pw1.value != pw2.value) {
		error.className = "errorMessage active";
		passwordInputs.className = "error invalid";
		error.textContent = "*Passwords do not match";
		passwordValidity = false;
	} else {
		//if the passwords match, the error message is removed
		error.textContent = "";
		error.className = "error";
		passwordInputs.className = "error";
		passwordValidity = true;
	}
}

const submitButton = document.querySelector('button[type="submit"]');
const popupWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const formElement = document.querySelector("form");

submitButton.addEventListener("click", () => {
	popupWindow.style.display = "block";
});

closeButton.addEventListener("click", () => {
	popupWindow.style.display = "none";
	formElement.reset();
});

allInputs.forEach((input) => {
	input.addEventListener("input", () => {
		updateSubmitButton();
	});
});

function updateSubmitButton() {
	const firstName = document.getElementById("first_name").validity.valid;
	const lastName = document.getElementById("last_name").validity.valid;
	const email = document.getElementById("user_email").validity.valid;

	if (firstName && lastName && email && passwordValidity) {
		submitButton.removeAttribute("disabled");
	} else {
		submitButton.setAttribute("disabled", "disabled");
	}
}
