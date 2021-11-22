import {translateLetter, toMorseCode, translateWord} from "./morse_code.js";
import {expect, it, describe} from "@jest/globals";


// Test for letters
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
    it("it should translate ' ' to ' '", () =>{
    const result = translateLetter(" ");
    expect(result).toBe(" ");
  })

}) 

// it should translate a to .-
// it should translate b to --

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

// it should translate ! to unavailable
// it should translate . to ??
// it should translate space to ??