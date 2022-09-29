let emptyRow = "<tr><td>No Records Available</td></tr>" >

	$(document).ready(function () {
		$("#tblData tbody").append(emptyRow) // add empty row

		$("#btnAdd").click(function () {
			let firstName = $("#firstName").val().trim();
			let lastName = $("#lastName").val().trim();
			let number = $("#number").val().trim();
			let address = $("#address").val().trim();
			let email = $("#email").val().trim();

			if (firstName != "" && lastName != "" && number != "" && address != "" && email != "") {
				if ($("tblData tbody").children().children().length == 1) {
					$("#tblData tbody").html("");
				}

				let serialNumber = $("#tblData tbody").children().length + 1;
				// let serialNumber = $("#tblData tbody").children().length + 1;
				// creating dynamic html string
				let dynamicTr = "<tr><td>" + serialNumber + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + number + "</td><td>" + address + "</td><td>" + email + "</td>  <td> <button class='btn btn-sm'> Delete </button> </td><tr>";

				$("#tblData tbody").append(dynamicTr); //appending dynamic string to the table
				$("#firstName").val("");
				$("#lastName").val("");
				$("#number").val("");
				$("#address").val("");
				$("#email").val("");
				$(".btn-sm").click(function () {
					$(this).parent().parent().remove();
					if ($("#tblData tbody").children().children().length == 0) {
						$("#tblData tbody").append(emptyRow);
					}
				});
			} else {
				// alert ("Please provide values");
			}


		})

	})