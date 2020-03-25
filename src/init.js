const initialPlayer = () => {
  return { name: "Player", prediction: "", isPredictor: true, isWon: false };
};

const initialAI = () => {
  return { name: "AI", prediction: "", isPredictor: false, isWon: false };
};

module.exports = { initialPlayer, initialAI };
