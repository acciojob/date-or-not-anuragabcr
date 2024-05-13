var isDate = function (input) {
  //   write your code here
	date = new Date(input)
	return date=="Invalid Date" ? false : true
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
