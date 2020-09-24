function isEven(num) {
	if (isNaN(num)) {
		return "Error: Not A Number";
	}
	return num % 2 === 0;
}

function isFactorial(num) {
	if (isNaN(num)) {
		return "Error: Not A Number";
	}
	for (var i = 2, answer = 1; i <= num; i++) {
		answer *= i;
	}
	return answer;
}

function kebabToSnake(str) {
	if (!isNaN(str)) {
		return "Error: Not A String";
	}
	var newStr = str.replace(/-/g, "_");
	return newStr;
}
