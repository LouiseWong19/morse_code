# Morse Code Translator
### Author - Louise Wong

## Introduction 
A Morse Code translator ,created with JavaScript, HTML and SCSS, that is able to translate English sentence to Morse Code.

### Technology Used:
- HTML
- SCSS
- JavaScript
- JEST
- BABEL

### Design
Aimed to achieved the old looking theme, hence, used a tea stained image as the background.

## Description
### Morse Code Dictionary
An object `toMorseCode` is created to include the a-z morse code dictionary.

### Translate Letter
Function `translateLetter` allows to translate English alphabetic letter to morse code. 

### Translate Word
Function `translateWord` takes the input word and split the word into individual letters (`splitWord`). The `splitWord` has been then checked through all the letters and translate those letters into morse code using `.map()`. The word is then joined (using `.join()`and saved back into the function `translateWord`.

### Translate Sentence
Same principle as above has been applied here with translating a sentence. The sentence is split into words using `.split()`, then passed through the `translateWord` function.

### Translation button
A `translator__btn` has been added in between the input and output display. `translation` function allows the `translateSentence` function to read the `input.value` and translate it. The translation will then be printed out using `.innerHTML` onto the output display.

## Roadmap
### Features to add
- numbers translation
- response to unknown characters
- consider upper case letter

## Known Bug
