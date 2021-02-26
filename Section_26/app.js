const p1 = {
	score: 0,
	button: document.querySelector("#p1Btn"),
	scoreDisplay: document.querySelector("#p1ScoreDisplay"),
};

const p2 = {
	score: 0,
	button: document.querySelector("#p2Btn"),
	scoreDisplay: document.querySelector("#p2ScoreDisplay"),
};

const resetBtn = document.querySelector("#resetBtn");
const playingTo = document.querySelector("#playingTo");

let gameOver = false;

function updateScores(player, opponent) {
	if (!gameOver) {
		player.score++;
		let winningScore = parseInt(playingTo.value);
		if (player.score === winningScore) {
			gameOver = true;
			player.scoreDisplay.classList.add("has-text-success");
			opponent.scoreDisplay.classList.add("has-text-danger");
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.scoreDisplay.textContent = player.score;
	}
}

p1.button.addEventListener("click", () => {
	updateScores(p1, p2);
});

p2Btn.addEventListener("click", () => {
	updateScores(p2, p1);
});

resetBtn.addEventListener("click", reset);

playingTo.addEventListener("change", () => {
	reset();
});

function reset() {
	gameOver = false;
	for (const p of [p1, p2]) {
		p.score = 0;
		p.scoreDisplay.textContent = p.score;
		p.scoreDisplay.classList.remove("has-text-success");
		p.scoreDisplay.classList.remove("has-text-danger");
		p.button.disabled = false;
	}
}
