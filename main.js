function greeting () {
	let a = document.getElementById("name").value; 
	let b = "Hi, " +a+ "!";
	alert (b);
	console.log (b)
	}

function compare () {
	let a = document.getElementById("number1").value;
	let b = document.getElementById("number2").value;
	if (a>b) {
	alert("They are not equal, " + document.getElementById("number1").value + " is greater than " + document.getElementById("number2").value)
	console.log("They are not equal, " + document.getElementById("number1").value + " is greater than " + document.getElementById("number2").value)
	}
	else if (a == b) {
	alert("They are equal")
	console.log("They are equal")
	}
	else {
	alert("They are not equal, " + document.getElementById("number1").value + " is less than " + document.getElementById("number2").value)
	console.log("They are not equal, " + document.getElementById("number1").value + " is less than " + document.getElementById("number2").value)
	}
}
function oden () {
	let a = document.getElementById("number").value;
	if (a % 2 == 0) {
	alert(document.getElementById("number").value + " is even")
	console.log(document.getElementById("number").value + " is even")
	}
	else {
	alert(document.getElementById("number").value + " is odd")
	console.log(document.getElementById("number").value + " is odd")
	}
}