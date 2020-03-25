const { initialPlayer, initialAI } = require("./init");

describe("init", () => {
  describe("initialPlayer", () => {
    it("should return player's information", () => {
      expect(initialPlayer()).toEqual({
        name: "Player",
        prediction: "",
        isPredictor: true,
        isWon: false,
      });
    });
  });
  describe("initialAI", () => {
    it("should return AI's information", () => {
      expect(initialAI()).toEqual({
        name: "AI",
        prediction: "",
        isPredictor: false,
        isWon: false,
      });
    });
  });
});
