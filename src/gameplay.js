const { readline, randomAnswer, isInvalidInput } = require("./utils");
const { initialPlayer, initialAI } = require("./init");

const startGame = () => {
  console.log("Welcome to The Open-Closed Game!\n");
  console.log(
    "Rules of the game:\n- This game is played between two players.\n- One player will be the predictor.\n- To play the game, the players will need to simultaneously show their hands with each hand either open or closed, and the predictor need to shout out how many hands they think will be open on total.\n- If the predictor is correct, they win, otherwise the other player becomes the predictor and they go again. This continues until the game is won.\n- The first two characters will show how you will play your hands, O for open or C for closed. If you are the predictor, you also need to enter a third character which is your prediction for how many open hands in total."
  );
  console.log("\nStart the game!");
  const player = initialPlayer();
  const AI = initialAI();
  play(player, AI);
};

const isWon = (player, enemy) => {
  const playerPrediction = player.prediction;
  const enemyPrediction = enemy.prediction;
  let countO = 0;
  for (let index = 0; index < 3; index++) {
    if (playerPrediction[index] === "O") countO++;
    if (enemyPrediction[index] === "O") countO++;
  }
  if (countO === parseInt(playerPrediction[playerPrediction.length - 1])) {
    player.isWon = true;
    return `${player.name} WIN!!`;
  }
  player.isPredictor = false;
  enemy.isPredictor = true;
  return "No winner";
};

const resetGame = (player, AI) => {
  player.isWon = false;
  AI.isWon = false;
  player.isPredictor = true;
  AI.isPredictor = false;
  player.prediction = "";
  AI.prediction = "";
};

const retryGame = (player, AI) => {
  readline.question("\nDo you want to play again? (Y/N) ", ans => {
    if (/(N|n)(o|O)?/g.exec(ans)) {
      console.log("\nOk, bye!\n");
      readline.close();
    } else if (/(Y|y)(es|Es|eS|ES)?/g.exec(ans)) {
      resetGame(player, AI);
      play(player, AI);
    } else {
      retryGame();
    }
  });
};

const play = (player, AI) => {
  let question = `\n${player.name} are the predictor, what is your input? `;
  if (!player.isPredictor) question = `\n${AI.name} is the predictor, what is your input? `;
  readline.question(question, prediction => {
    if (isInvalidInput(player, prediction)) {
      console.log("\n" + isInvalidInput(player, prediction));
      play(player, AI);
    } else {
      player.prediction = prediction.trim();
      AI.prediction = randomAnswer(AI.isPredictor);
      console.log(`\n:${AI.name}`, AI.prediction + "\n");
      if (player.isPredictor) console.log(isWon(player, AI));
      else if (AI.isPredictor) console.log(isWon(AI, player));
      if (player.isWon || AI.isWon) {
        retryGame(player, AI);
      } else play(player, AI);
    }
  });
};

startGame();

module.exports = { isWon, isInvalidInput, resetGame };
