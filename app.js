function autoCapitalize() {
	let firstNameInput = document.getElementById("firstName");
	firstName.value = firstNameInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,   // "^" = first string; "\w{1}" = first letter of the word
		(letter) => letter.toUpperCase()
	);

	let lastNameInput = document.getElementById("lastName");
	lastName.value = lastNameInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,  // "|" = or ; "\s+" = white spaces between the words
		(letter) => letter.toUpperCase()
	);

	let addressInput = document.getElementById("address");
	address.value = addressInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,
		(letter) => letter.toUpperCase()
	);
}

function nameInput(input) {
	let regex = /[^a-zA-Z ]/g;
	input.value = input.value.replace(regex, "");
}

function addressCharacters(input) {
	let regex = /([^a-zA-Z,.])/g;
	input.value = input.value.replace(regex, "").replace (/\s+/, '');
}

function phoneInput(input) {
	let phone = document.querySelector("#number");

	// Disabled the button upon input
	let button = document.getElementById("btnAdd")
	button.disabled = true;
	if (phone.value.length >= 10) { // minLength
		button.disabled = false
	}
	
	input.value = phone.value.replace(/\D/g, "")
		.replace(/(\d{1,4})(\d{1,3})?(\d{1,4})?/g, function (txt, p1, p2, p3) {
			if (p3) {
				return `${p1} ${p2} ${p3}`;
			}
			else if (p2) {
				return `${p1} ${p2}`;
			} 
			else if (p1) {
				return `${p1}`;
			} 
		});
}

function validateEmail(input) {
	let emailFormat = /^[a-zA-Z][a-zA-Z0-9.-_]+@[a-z]+\.+[a-z]{2,4}$/;

	// Disabled the button upon input
	let button = document.getElementById("btnAdd")
	button.disabled = true;

	// enabled the button once the input match the email format
	let x = document.getElementById("email")
	if (x.value.match(emailFormat)) {
		button.disabled = false
		console.log("button disabled")
	} else {
		// alert ("input valid email")
	}
}

$(document).ready(function () {

	$("#btnAdd").click(function () {
		let firstName = $("#firstName").val().trim();
		let lastName = $("#lastName").val().trim();
		let number = $("#number").val().trim();
		let address = $("#address").val().trim();
		let email = $("#email").val().trim();

		if (firstName != "" && lastName != "" && number != "" && address != "" && email != "") {
			let serialNumber = $("#tblData tbody").children().length + 1;

			// creating dynamic html string
			let dynamicTr = "<tr><td>" + serialNumber + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + number + "</td><td>" + address + "</td><td>" + email + "</td> <td> <button class='btn btn__edit'> Edit </button><button class='btn btn__delete'> Delete </button> </td><tr>";
			$("#tblData tbody").append(dynamicTr); //appending dynamic string to the table

			// removing the last typed data on the input tag 
			$("#firstName").val("");
			$("#lastName").val("");
			$("#number").val("");
			$("#address").val("");
			$("#email").val("");

			// DELETE
			$(".btn__delete").click(function () {
				$(this).parent().parent().remove();
			});
			
			// EDIT
		}
	})
})