const { isWon, resetGame } = require("./gameplay");

describe("gameplay", () => {
  describe("isWon", () => {
    describe("Player is a predictor", () => {
      let player;
      let AI;
      beforeEach(() => {
        player = { name: "Player", prediction: "", isPredictor: true };
        AI = { name: "AI", prediction: "", isPredictor: false };
      });
      describe("Player win", () => {
        it("Player's prediction is OO4 and AI's prediction is OO", () => {
          player.prediction = "OO4";
          AI.prediction = "OO";
          expect(isWon(player, AI)).toEqual("You WIN!!");
          expect(player.isWon).toBeTruthy();
        });
        it("Player's prediction is OO2 and AI's prediction is CC", () => {
          player.prediction = "OO2";
          AI.prediction = "CC";
          expect(isWon(player, AI)).toEqual("You WIN!!");
          expect(player.isWon).toBeTruthy();
        });
        it("Player's prediction is OC1 and AI's prediction is CC", () => {
          player.prediction = "OO4";
          AI.prediction = "OO";
          expect(isWon(player, AI)).toEqual("You WIN!!");
          expect(player.isWon).toBeTruthy();
        });
        it("Player's prediction is CC0 and AI's prediction is CC", () => {
          player.prediction = "CC0";
          AI.prediction = "CC";
          expect(isWon(player, AI)).toEqual("You WIN!!");
          expect(player.isWon).toBeTruthy();
        });
        it("Player's prediction is CO2 and AI's prediction is CO", () => {
          player.prediction = "CO2";
          AI.prediction = "CO";
          expect(isWon(player, AI)).toEqual("You WIN!!");
          expect(player.isWon).toBeTruthy();
        });
      });
      describe("No winner", () => {
        it("Player's prediction is OO3 and AI's prediction is OO", () => {
          player.prediction = "OO3";
          AI.prediction = "CC";
          expect(isWon(player, AI)).toEqual("No winner");
          expect(player.isPredictor).toBeFalsy();
          expect(AI.isPredictor).toBeTruthy();
        });
        it("Player's prediction is OO2 and AI's prediction is OO", () => {
          player.prediction = "OO2";
          AI.prediction = "OC";
          expect(isWon(player, AI)).toEqual("No winner");
          expect(player.isPredictor).toBeFalsy();
          expect(AI.isPredictor).toBeTruthy();
        });
        it("Player's prediction is CO2 and AI's prediction is OO", () => {
          player.prediction = "CO2";
          AI.prediction = "CC";
          expect(isWon(player, AI)).toEqual("No winner");
          expect(player.isPredictor).toBeFalsy();
          expect(AI.isPredictor).toBeTruthy();
        });
        it("Player's prediction is CC1 and AI's prediction is OO", () => {
          player.prediction = "CC1";
          AI.prediction = "OO";
          expect(isWon(player, AI)).toEqual("No winner");
          expect(player.isPredictor).toBeFalsy();
          expect(AI.isPredictor).toBeTruthy();
        });
      });
    });
    describe("AI is a predictor", () => {
      let player;
      let AI;
      beforeEach(() => {
        player = { name: "Player", prediction: "", isPredictor: false };
        AI = { name: "AI", prediction: "", isPredictor: true };
      });
      describe("AI WIN!!!", () => {
        it("AI's prediction is OO4 and player's prediction is OO", () => {
          AI.prediction = "OO4";
          player.prediction = "OO";
          expect(isWon(AI, player)).toEqual("AI WIN!!");
          expect(AI.isWon).toBeTruthy();
        });
        it("AI's prediction is OO2 and player's prediction is CC", () => {
          AI.prediction = "OO2";
          player.prediction = "CC";
          expect(isWon(AI, player)).toEqual("AI WIN!!");
          expect(AI.isWon).toBeTruthy();
        });
        it("AI's prediction is OC1 and player's prediction is CC", () => {
          AI.prediction = "OO4";
          player.prediction = "OO";
          expect(isWon(AI, player)).toEqual("AI WIN!!");
          expect(AI.isWon).toBeTruthy();
        });
        it("AI's prediction is CC0 and player's prediction is CC", () => {
          AI.prediction = "CC0";
          player.prediction = "CC";
          expect(isWon(AI, player)).toEqual("AI WIN!!");
          expect(AI.isWon).toBeTruthy();
        });
        it("AI's prediction is CO2 and player's prediction is CO", () => {
          AI.prediction = "CO2";
          player.prediction = "CO";
          expect(isWon(AI, player)).toEqual("AI WIN!!");
          expect(AI.isWon).toBeTruthy();
        });
      });
      describe("No winner", () => {
        it("AI's prediction is OO3 and player's prediction is OO", () => {
          AI.prediction = "OO3";
          player.prediction = "CC";
          expect(isWon(AI, player)).toEqual("No winner");
          expect(player.isPredictor).toBeTruthy();
          expect(AI.isPredictor).toBeFalsy();
        });
        it("AI's prediction is OO2 and player's prediction is OO", () => {
          AI.prediction = "OO2";
          player.prediction = "OC";
          expect(isWon(AI, player)).toEqual("No winner");
          expect(player.isPredictor).toBeTruthy();
          expect(AI.isPredictor).toBeFalsy();
        });
        it("AI's prediction is CO2 and player's prediction is OO", () => {
          AI.prediction = "CO2";
          player.prediction = "CC";
          expect(isWon(AI, player)).toEqual("No winner");
          expect(player.isPredictor).toBeTruthy();
          expect(AI.isPredictor).toBeFalsy();
        });
        it("AI's prediction is CC1 and player's prediction is OO", () => {
          AI.prediction = "CC1";
          player.prediction = "OO";
          expect(isWon(AI, player)).toEqual("No winner");
          expect(player.isPredictor).toBeTruthy();
          expect(AI.isPredictor).toBeFalsy();
        });
      });
    });
  });
  describe("resetGame", () => {
    let player;
    let AI;
    beforeEach(() => {
      player = { name: "Player", prediction: "", isPredictor: false };
      AI = { name: "AI", prediction: "", isPredictor: true };
    });
    it("Player's information and AI's information should be reset", () => {
      resetGame(player, AI);
      expect(player.isWon).toBeFalsy();
      expect(AI.isWon).toBeFalsy();
      expect(player.isPredictor).toBeTruthy();
      expect(AI.isPredictor).toBeFalsy();
      expect(player.prediction).toEqual("");
      expect(AI.prediction).toEqual("");
    });
  });
});
