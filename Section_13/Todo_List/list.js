var todos = [];

window.setTimeout(function () {
	var input = prompt("What would you like to do?");

	while (input !== "quit") {
		if (input === "list") {
			listTodo();
		} else if (input === "new") {
			addTodo();
		} else if (input === "delete") {
			deleteTodo();
		}

		input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP");
}, 500);

function listTodo() {
	console.log("**********");
	todos.forEach(function (todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Deleted Todo");
}
