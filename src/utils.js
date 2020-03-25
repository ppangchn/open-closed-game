const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomAnswer = isPredictor => {
  const answerList = ["O", "C"];
  let answer = "";
  for (let index = 0; index < 2; index++) {
    const randomInt = Math.floor(Math.random() * Math.floor(1));
    answer += answerList[randomInt];
  }
  let countO = 0;
  for (let index = 0; index < 2; index++) {
    if (answer[index] === "O") countO++;
  }
  if (isPredictor) {
    const randomPrediction = Math.floor(Math.random() * Math.floor(5 - countO) + countO + 1);
    answer += randomPrediction;
  }
  return answer;
};

const isInvalidInput = (player, playerPrediction) => {
  if (player.isPredictor) {
    if (
      (playerPrediction[0] === "O" || playerPrediction[0] === "C") &&
      (playerPrediction[1] === "O" || playerPrediction[1] === "C") &&
      playerPrediction.length === 2
    ) {
      return "Bad input: Need prediction and should be in the range of 0-4";
    } else if (
      playerPrediction.length === 3 &&
      (playerPrediction[0] === "O" || playerPrediction[0] === "C") &&
      (playerPrediction[1] === "O" || playerPrediction[1] === "C") &&
      parseInt(playerPrediction[playerPrediction.length - 1]) !== 0 &&
      parseInt(playerPrediction[playerPrediction.length - 1]) !== 1 &&
      parseInt(playerPrediction[playerPrediction.length - 1]) !== 2 &&
      parseInt(playerPrediction[playerPrediction.length - 1]) !== 3 &&
      parseInt(playerPrediction[playerPrediction.length - 1]) !== 4
    ) {
      return "Bad input: prediction should be in the range of 0-4.";
    } else if (parseInt(playerPrediction[playerPrediction.length - 1]) > 4) {
      return "Bad input: prediction should be in the range of 0-4.";
    } else if (
      (playerPrediction[0] !== "O" && playerPrediction[0] !== "C") ||
      (playerPrediction[1] !== "O" && playerPrediction[1] !== "C") ||
      ((playerPrediction[0] === "O" || playerPrediction[0] === "C") &&
        (playerPrediction[1] === "O" || playerPrediction[1] === "C") &&
        playerPrediction.length > 3)
    ) {
      return "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).";
    }
  } else {
    if (
      (playerPrediction[0] !== "O" && playerPrediction[0] !== "C") ||
      (playerPrediction[1] !== "O" && playerPrediction[1] !== "C") ||
      ((playerPrediction[0] === "O" || playerPrediction[0] === "C") &&
        (playerPrediction[1] === "O" || playerPrediction[1] === "C") &&
        playerPrediction.length >= 3 &&
        parseInt(playerPrediction[playerPrediction.length - 1]) !== 0 &&
        parseInt(playerPrediction[playerPrediction.length - 1]) !== 1 &&
        parseInt(playerPrediction[playerPrediction.length - 1]) !== 2 &&
        parseInt(playerPrediction[playerPrediction.length - 1]) !== 3 &&
        parseInt(playerPrediction[playerPrediction.length - 1]) !== 4)
    ) {
      return "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand";
    } else if (
      (playerPrediction[0] === "O" || playerPrediction[0] === "C") &&
      (playerPrediction[1] === "O" || playerPrediction[1] === "C") &&
      playerPrediction.length === 3
    ) {
      return "Bad input: no prediction expected, you are not the predictor.";
    }
  }
};

module.exports = { readline, randomAnswer, isInvalidInput };
