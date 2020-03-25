const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomAnswer = isPredictor => {
  const answerList = ["O", "C"];
  let answer = "";
  for (let index = 0; index < 2; index++) {
    const randomInt = Math.floor(Math.random() * Math.floor(2));
    answer += answerList[randomInt];
  }
  let countO = 0;
  for (let index = 0; index < 2; index++) {
    if (answer[index] === "O") countO++;
  }
  if (isPredictor) {
    const randomPrediction = Math.floor(Math.random() * 3) + countO;
    answer += randomPrediction;
  }
  return answer;
};

const isInvalidInput = (player, playerPrediction) => {
  const prediction = playerPrediction.trim();
  if (player.isPredictor) {
    if (/(O|C)(O|C)/g.exec(prediction) && prediction.length === 2) {
      return "Bad input: Need prediction and should be in the range of 0-4";
    } else if (prediction.length === 3 && /(O|C)(O|C)([^01234])/g.exec(prediction)) {
      return "Bad input: prediction should be in the range of 0-4.";
    } else if (
      (prediction[0] !== "O" && prediction[0] !== "C") ||
      (prediction[1] !== "O" && prediction[1] !== "C") ||
      (/(O|C)(O|C)/g.exec(prediction) && prediction.length > 3)
    ) {
      return "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).";
    }
  } else {
    if (prediction.length === 3 && /(O|C)(O|C)([01234])/g.exec(prediction)) {
      return "Bad input: no prediction expected, you are not the predictor.";
    } else if (
      (prediction[0] !== "O" && prediction[0] !== "C") ||
      (prediction[1] !== "O" && prediction[1] !== "C") ||
      (/(O|C)(O|C)([^01234])/g.exec(prediction) && prediction.length >= 3)
    ) {
      return "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand";
    }
  }
};

module.exports = { readline, randomAnswer, isInvalidInput };
