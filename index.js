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
    $title.textContent = `player Ones turn`;
    $subtitle.textContent = `player One rolled a ${diceRoll}`;
    $player1Dice.textContent = diceRoll;
    $player1Dice.classList.remove("active");
    $player2Dice.classList.add("active");
    playerOneScore += diceRoll;
    $player1Scoreboard.textContent = playerOneScore;
  } else {
    $title.textContent = `player Two turn`;
    $subtitle.textContent = `player Two rolled a ${diceRoll}`;
    $player2Dice.textContent = diceRoll;
    $player2Dice.classList.remove("active");
    $player1Dice.classList.add("active");
    playerTwoScore += diceRoll;
    $player2Scoreboard.textContent = playerTwoScore;
  }

  if (playerOneScore > 20 || playerTwoScore > 20) {
    $title.textContent =
      playerOneScore > 20 ? "Player One Has Won!" : "Player Two Has Won!";
    $rollBtn.style.display = "none";
    $resetBtn.style.display = "flex";
  }
  isPlayerOneTurn = !isPlayerOneTurn;
});

$resetBtn.addEventListener("click", function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  $player1Scoreboard.textContent = playerOneScore;
  $player2Scoreboard.textContent = playerTwoScore;
  $title.textContent = `Player One's turn`;
  isPlayerOneTurn = true;

  $subtitle.textContent = "";
  $player1Dice.textContent = "-";
  $player2Dice.textContent = "-";
  $rollBtn.style.display = "flex";
  $resetBtn.style.display = "none";
});
