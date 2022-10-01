// oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
function numbersOnly(input) {
	let regex = /[^0-9]/g;
	input.value = input.value.replace(regex,"");
}
    