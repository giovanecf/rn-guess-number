import Sentences from "../constants/sentences";

const generateRandomSentences = (typeSentence, min, max, index) => {
  let sentences = Sentences.onGameTextChat;

  if (typeSentence === "ONGAMEOVERTEXT") {
    sentences = Sentences.onGameOverTextChat;
  }

  if (typeSentence === "ONGAMETITLECHAT") {
    sentences = Sentences.onGameTitleChat;
  }

  if (index !== "") {
    return sentences[index];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  index = Math.floor(Math.random() * (max - min)) + min;

  return sentences[index];
};

module.exports = { generateRandomSentences };
