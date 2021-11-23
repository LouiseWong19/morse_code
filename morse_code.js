// Start off with a Morse Code dictionary
let input = document.querySelector("#translator__english");
let output = document.querySelector("#translator__morse_code");
let translateBtn = document.querySelector("#translator__btn");

// Translate English to Morse Code
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
  " ": " ",
  "!": "/",
  "?": "/"
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

// Accept input
const translation = () =>{
  input.value = input.value.toLowerCase();
  let translated = translateSentence(input.value);
  output.innerHTML = translated;
}

translateBtn.addEventListener("click",translation);

/*************************************************************************/
// Translate Morse Code to English
// Build a morse code to english 
export const toEnglish = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  " ": " "
}









