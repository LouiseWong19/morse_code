// Start off with a Morse Code dictionary
export const toMorseCode = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  " ": " "
}

// Function to translate alphabet letter to morse code
export const translateLetter = (letter) =>{
  return toMorseCode[letter];
}

// Function to translate word to morse code
// split the word to letters first
// translate every letter to morse code and rejoin
export const translateWord = (word)=>{
  let splitWord = word.split("")
  let translatedWord = splitWord.map(translateLetter).join(" ");
  return translatedWord;
}

// Function to translate sentence to morse code
// split sentence to word
// use translateWord function to translate word
export const translateSentence = (sentence)=>{
  let splitsentence = sentence.split(" ");
  let translatedSentence = splitsentence.map(translateWord).join(" ");
  return translatedSentence;
}




