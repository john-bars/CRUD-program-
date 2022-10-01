function autoCapitalize() {
	let firstNameInput = document.getElementById("firstName");
	firstName.value = firstNameInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,   // "^" = first string; "\w{1}" = first letter of the word
		(letter) => letter.toUpperCase()
	);

	let lastNameInput = document.getElementById("lastName");
	lastName.value = lastNameInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,  // "|" = or ; "\s+" = white space between the words
		(letter) => letter.toUpperCase()
	); 

	let addressInput = document.getElementById("address");
	address.value = addressInput.value.replace(
		/(^\w{1})|(\s+\w{1})/g,
		(letter) => letter.toUpperCase()
	);
}

function nameInput(input) {
	let regex = /([^a-zA-Z\s])/g;
	// let regex = /^(\w+\s)*\w+$/g;
	input.value = input.value.replace(regex, "");
}

function addressCharacters(input) {
	let regex = /([^a-zA-Z,.\s])/g;
	input.value = input.value.replace(regex, "");
}

function phoneInput(input) {
	let regex = /[^0-9+]/g; //do global search for characters NOT inside "[]"
	input.value = input.value.replace(regex, "");
	
	// Disabled the button upon input
	let button = document.getElementById("btnAdd")
	button.disabled = true;

	let x = document.getElementById("number")
	if (x.value.length >= 10) { // minLength
		button.disabled = false
		// console.log("button disabled")
	}
}

function validateEmail() {
	let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// Disabled the button upon input
	let button = document.getElementById("btnAdd")
	button.disabled = true;

	// enabled the button once the input match the email format
	let x = document.getElementById("email")
	if (x.value.match(emailFormat)) {
		button.disabled = false
		console.log("disabled")
	} else {
		// alert ("input valid email")
	}
}

$(document).ready(function () {

	$("#btnAdd").click(function () {
		// let firstName = $("#firstName").val().trim();
		// let lastName = $("#lastName").val().trim();
		// let number = $("#number").val().trim();
		// let address = $("#address").val().trim();
		// let email = $("#email").val().trim();

		let firstName = $("#firstName").val();
		let lastName = $("#lastName").val();
		let number = $("#number").val();
		let address = $("#address").val();
		let email = $("#email").val();

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
			$(".btn__delete").click(function () {
				$(this).parent().parent().remove();
			});
		}
	})
})