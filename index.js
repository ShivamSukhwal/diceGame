let playerOneScore = 0;
let playerTwoScore = 0;
let isPlayerOneTurn = true;

const $title = document.getElementById("title");
const $subtitle = document.getElementById("subtitle");
const $player1Scoreboard = document.getElementById("player-one-score");
const $player2Scoreboard = document.getElementById("player-two-score");
const $player1Dice = document.getElementById("player-one-dice");
const $player2Dice = document.getElementById("player-two-dice");
const $rollBtn = document.getElementById("rollBtn");
const $resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  let diceRoll = Math.floor(Math.random() * 6) + 1;

  if (isPlayerOneTurn) {
    $title.textContent = `player 1's turn`;
    $subtitle.textContent = `player 1 rolled a ${diceRoll}`;
    $player1Dice.textContent = diceRoll;
    $player1Dice.classList.remove("active");
    $player2Dice.classList.add("active");
    playerOneScore += diceRoll;
    $player1Scoreboard.textContent = playerOneScore;
  } else {
    $title.textContent = `player 1's turn`;
    $subtitle.textContent = `player 2 rolled a ${diceRoll}`;
    $player2Dice.textContent = diceRoll;
    $player2Dice.classList.remove("active");
    $player1Dice.classList.add("active");
    playerTwoScore += diceRoll;
    $player2Scoreboard.textContent = playerTwoScore;
  }

  if (playerOneScore > 20) {
    $title.textContent = `player 1 has won`;
    $rollBtn.style.display = "none";
    $resetBtn.style.display = "flex";
  } else if (playerTwoScore > 20) {
    $title.textContent = `player 2 has won`;
    $rollBtn.style.display = "none";
    $resetBtn.style.display = "flex";
  }
  isPlayerOneTurn = !isPlayerOneTurn;
});
