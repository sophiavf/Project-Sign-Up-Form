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

const submitButton = document.querySelector('button[type="submit"]');
const popupWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const formElement = document.querySelector("form")

submitButton.addEventListener("click", () => {
	popupWindow.style.display = "block";
});

closeButton.addEventListener("click", () => {
	popupWindow.style.display = "none";
	formElement.reset(); 
});

