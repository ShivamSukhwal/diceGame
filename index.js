let playerOneScore = 0;
let playerTwoScore = 0;
let isPlayerOneTurn = true;

const $message = document.getElementById("message");
const $player1Scoreboard = document.getElementById("player-one-score");
const $player2Scoreboard = document.getElementById("player-two-score");
const $player1Dice = document.getElementById("player-one-dice");
const $player2Dice = document.getElementById("player-two-dice");
const $rollBtn = document.getElementById("rollBtn");
const $resetBtn = document.getElementById("resetBtn");

function rollButtonEventListener(event) {
  let diceRoll = Math.floor(Math.random() * Math.floor(7));
  if (isPlayerOneTurn) {
    playerOneScore += diceRoll;
    $player1Scoreboard.innerText = playerOneScore;
    $player1Dice.innerText = diceRoll;
    isPlayerOneTurn = false;
  } else {
    playerTwoScore += diceRoll;
    $player2Scoreboard.innerText = playerOneScore;
    $player2Dice.innerText = diceRoll;
    isPlayerOneTurn = true;
  }
}

$rollBtn.addEventListener("click", rollButtonEventListener);
