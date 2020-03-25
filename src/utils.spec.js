const { isInvalidInput } = require("./utils");

describe("utils", () => {
  describe("isInvalidInput", () => {
    describe("Player is a predictor", () => {
      const player = { name: "Player", prediction: "", isPredictor: true };
      describe("Correct input", () => {
        it("Player's prediction is CC0", () => {
          expect(isInvalidInput(player, "CC0")).toBeUndefined();
        });
        it("Player's prediction is CC1", () => {
          expect(isInvalidInput(player, "CC1")).toBeUndefined();
        });
        it("Player's prediction is OC2", () => {
          expect(isInvalidInput(player, "OC2")).toBeUndefined();
        });
        it("Player's prediction is OC3", () => {
          expect(isInvalidInput(player, "OC3")).toBeUndefined();
        });
        it("Player's prediction is OC4", () => {
          expect(isInvalidInput(player, "OC4")).toBeUndefined();
        });
        it("Player's prediction is OO4", () => {
          expect(isInvalidInput(player, "OO4")).toBeUndefined();
        });
        it("Player's prediction is OO4 with whitespace", () => {
          expect(isInvalidInput(player, "OO4 ")).toBeUndefined();
        });
        it("Player's prediction is OO2 with whitespace", () => {
          expect(isInvalidInput(player, "     OO2 ")).toBeUndefined();
        });
      });
      describe("Bad input: Need prediction and should be in the range of 0-4", () => {
        it("Player's prediction is OO", () => {
          expect(isInvalidInput(player, "OO")).toEqual(
            "Bad input: Need prediction and should be in the range of 0-4"
          );
        });
        it("Player's prediction is CO", () => {
          expect(isInvalidInput(player, "CO")).toEqual(
            "Bad input: Need prediction and should be in the range of 0-4"
          );
        });
        it("Player's prediction is CC", () => {
          expect(isInvalidInput(player, "CC")).toEqual(
            "Bad input: Need prediction and should be in the range of 0-4"
          );
        });
        it("Player's prediction is OC", () => {
          expect(isInvalidInput(player, "OC")).toEqual(
            "Bad input: Need prediction and should be in the range of 0-4"
          );
        });
        it("Player's prediction is OC with whitespace", () => {
          expect(isInvalidInput(player, "OC ")).toEqual(
            "Bad input: Need prediction and should be in the range of 0-4"
          );
        });
      });
      describe("Bad input: prediction should be in the range of 0-4.", () => {
        it("Player's prediction is OO8", () => {
          expect(isInvalidInput(player, "OO8")).toEqual(
            "Bad input: prediction should be in the range of 0-4."
          );
        });
        it("Player's prediction is OOC", () => {
          expect(isInvalidInput(player, "OOC")).toEqual(
            "Bad input: prediction should be in the range of 0-4."
          );
        });
        it("Player's prediction is OCA", () => {
          expect(isInvalidInput(player, "OCA")).toEqual(
            "Bad input: prediction should be in the range of 0-4."
          );
        });
        it("Player's prediction is OOO", () => {
          expect(isInvalidInput(player, "OOO")).toEqual(
            "Bad input: prediction should be in the range of 0-4."
          );
        });
        it("Player's prediction is OOO with whitespace", () => {
          expect(isInvalidInput(player, "OOO   ")).toEqual(
            "Bad input: prediction should be in the range of 0-4."
          );
        });
      });
      describe("Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).", () => {
        it("Player's prediction is chicken", () => {
          expect(isInvalidInput(player, "chicken")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is a", () => {
          expect(isInvalidInput(player, "a")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is add", () => {
          expect(isInvalidInput(player, "add")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is zxczxc", () => {
          expect(isInvalidInput(player, "zxczxc")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is oo", () => {
          expect(isInvalidInput(player, "oo")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is oo2", () => {
          expect(isInvalidInput(player, "oo2")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is oo2", () => {
          expect(isInvalidInput(player, "Co2")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is OOOOOO", () => {
          expect(isInvalidInput(player, "OOOOOO")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is OC16", () => {
          expect(isInvalidInput(player, "OC16")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
        it("Player's prediction is OC126 with wih whitespace", () => {
          expect(isInvalidInput(player, "OC126     ")).toEqual(
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4)."
          );
        });
      });
    });
    describe("Player is not a predictor", () => {
      const player = { name: "Player", prediction: "", isPredictor: false };
      describe("Correct input", () => {
        it("Player's prediction is CC", () => {
          expect(isInvalidInput(player, "CC")).toBeUndefined();
        });
        it("Player's prediction is OC", () => {
          expect(isInvalidInput(player, "OC")).toBeUndefined();
        });
        it("Player's prediction is OO with whitespace", () => {
          expect(isInvalidInput(player, "     OO ")).toBeUndefined();
        });
      });
      describe("Bad input: no prediction expected, you are not the predictor.", () => {
        it("Player's prediction is OO4", () => {
          expect(isInvalidInput(player, "OO4")).toEqual(
            "Bad input: no prediction expected, you are not the predictor."
          );
        });
        it("Player's prediction is OO2", () => {
          expect(isInvalidInput(player, "OO4")).toEqual(
            "Bad input: no prediction expected, you are not the predictor."
          );
        });
        it("Player's prediction is OO4 with whitespace", () => {
          expect(isInvalidInput(player, "OO4  ")).toEqual(
            "Bad input: no prediction expected, you are not the predictor."
          );
        });
      });
      describe("Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand", () => {
        it("Player's prediction is chicken", () => {
          expect(isInvalidInput(player, "chicken")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is a", () => {
          expect(isInvalidInput(player, "a")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is add", () => {
          expect(isInvalidInput(player, "add")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is zxczxc", () => {
          expect(isInvalidInput(player, "zxczxc")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is oo", () => {
          expect(isInvalidInput(player, "oo")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is oo2", () => {
          expect(isInvalidInput(player, "oo2")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is oo2", () => {
          expect(isInvalidInput(player, "Co2")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is OOOOOO", () => {
          expect(isInvalidInput(player, "OOOOOO")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is OOO", () => {
          expect(isInvalidInput(player, "OOO")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
        it("Player's prediction is OOO wih whitespace", () => {
          expect(isInvalidInput(player, "OOO    ")).toEqual(
            "Bad input: correct input should be of the form CC, where the first two letters indicate [O]pen or [C]losed state for each hand"
          );
        });
      });
    });
  });
});
