import {translate} from "./morse_code.js";
import {expect, it, describe} from "@jest/globals";

// a .-
// b -- 

// describe - have to import
describe("Translate single letters top morse", () =>{
  it("it should translate 'a' to '.-", () =>{
    const result = translate("a");
    expect(result).toBe(".-");
  })
  it("it should translate 'b' to '-...", () =>{
    const result = translate("b");
    expect(result).toBe("-...");
  })
  it("it should translate 'c' to '-.-.", () =>{
    const result = translate("c");
    expect(result).toBe("-.-.");
  })
  it("it should translate 'd' to '--..", () =>{
    const result = translate("d");
    expect(result).toBe("--..");
  })
  it("it should translate 'e' to '.", () =>{
    const result = translate("e");
    expect(result).toBe(".");
  })
  it("it should translate 'f' to '..-.", () =>{
    const result = translate("f");
    expect(result).toBe("..-.");
  })

}) 

// it should translate a to .-
// it should translate b to --
// it should translate hello to ??


// it should translate ! to unavailable
// it should translate . to ??
// it should translate space to ??