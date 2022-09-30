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
			let dynamicTr = "<tr><td>" + serialNumber + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + number + "</td><td>" + address + "</td><td>" + email + "</td> <td> <button class='btn btn__edit'> Edit </button><button class='btn btn-sm btn__delete'> Delete </button> </td><tr>";
			$("#tblData tbody").append(dynamicTr); //appending dynamic string to the table
			$("#firstName").val("");
			$("#lastName").val("");
			$("#number").val("");
			$("#address").val("");
			$("#email").val("");
			$(".btn-sm").click(function () {
				$(this).parent().parent().remove();
			});
		} 
	})
})