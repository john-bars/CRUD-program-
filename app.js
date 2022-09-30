function autoCapitalize () {
	let firstName = document.getElementById("firstName")
	firstName.value=firstName.value.toUpperCase();

	let lastName = document.getElementById("lastName")
	lastName.value=lastName.value.toUpperCase();

	let address = document.getElementById("address")
	address.value=address.value.toUpperCase();
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