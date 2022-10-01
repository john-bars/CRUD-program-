function myFunction() {
	let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// Disabled the button upon input
	let button = document.getElementById("btn")
	button.disabled = true;

	// enabled the button once the input match the email format
	let x = document.getElementById("email")
	if (x.value.match(emailFormat)) {
		button.disabled = false
	}
}
