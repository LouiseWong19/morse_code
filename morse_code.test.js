import {translateLetter, toMorseCode, translateWord, translateSentence, 
  translateMorseCodeLetter, translateMorseCodeWord} from "./morse_code.js";
import {expect, it, describe} from "@jest/globals";


// Test for letters
// it should translate a to .-
// it should translate b to --
describe("Translate single letters to morse", () =>{
  it("it should translate 'a' to '.-'", () =>{
    const result = translateLetter("a");
    expect(result).toBe(".-");
  })
  it("it should translate 'b' to '-...'", () =>{
    const result = translateLetter("b");
    expect(result).toBe("-...");
  })
  it("it should translate 'c' to '-.-.'", () =>{
    const result = translateLetter("c");
    expect(result).toBe("-.-.");
  })
  it("it should translate 'd' to '--..'", () =>{
    const result = translateLetter("d");
    expect(result).toBe("-..");
  })
  it("it should translate 'e' to '.'", () =>{
    const result = translateLetter("e");
    expect(result).toBe(".");
  })
  it("it should translate 'f' to '..-.'", () =>{
    const result = translateLetter("f");
    expect(result).toBe("..-.");
  })
    it("it should translate ' ' to '/'", () =>{
    const result = translateLetter(" ");
    expect(result).toBe("/");
  })

}) 

// it should translate hello to ??
describe("Translate a word to morse", () =>{
  it("it should translate 'an' to '.- -.'", () =>{
    const result = translateWord("an");
    expect(result).toBe(".- -.");
  })
  it("it should translate 'hello' to '.... . .-.. .-.. ---'", () =>{
    const result = translateWord("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  })

})

// it should translate sentence 
describe("Translate a sentence to morse", () =>{
  it("it should translate 'i like cat' to '.. .-.. .. -.- . -.-. .- -'", () =>{
    const result = translateSentence("i like cat");
    expect(result).toBe(".. .-.. .. -.- . -.-. .- -");
  })
  it("it should translate 'hello cat' to '.... . .-.. .-.. --- -.-. .- -'", () =>{
    const result = translateSentence("hello cat");
    expect(result).toBe(".... . .-.. .-.. --- -.-. .- -");
  })
  it("it should translate 'cross the no mans land' to '-.-. .-. --- ... ... - .... . -. --- -- .- -. ... .-.. .- -. -..'", () =>{
    const result = translateSentence("cross the no mans land");
    expect(result).toBe("-.-. .-. --- ... ... - .... . -. --- -- .- -. ... .-.. .- -. -..");
  })

})

// it should translate ! to unavailable
describe("Translate unknown characters to '/'", () =>{
  it("it should translate '!' to '/'", () =>{
    const result = translateLetter("!");
    expect(result).toBe("/");
  })
  it("it should translate '?' to '/'", () =>{
    const result = translateLetter("?");
    expect(result).toBe("/");
  })
})

// it should translate Morse code to english 
// it should translate ".-" to "a"
// it should translate "/" to " "
describe("Translate Morse Code to single letter", () =>{
  it("it should translate '.-' to 'a'", () =>{
    const result = translateLetter(".-");
    expect(result).toBe("a");
  })
  it("it should translate '-...' to 'b'", () =>{
    const result = translateLetter("-...");
    expect(result).toBe("b");
  })
  it("it should translate '/' to ' '", () =>{
    const result = translateLetter("/");
    expect(result).toBe(" ");
  })
})

// it should translate ".-/-..." to "a b"
describe("Translate Morse Code to word", () =>{
  it("it should translate '.- -.' to 'an'", () =>{
    const result = translateWord(".- -.");
    expect(result).toBe("an");
  })
})