import { describe, expect, it } from 'bun:test';
import { bodyDto } from "../src/bodyDto";
import GenerateWords from "../src/generateWords";

describe("GenerateWords", () => {
    const con: string[] = ['p', 't', 'k', 's', 'm', 'n', 'l'];
    const vow: string[] = ['a', 'i', 'u'];

    const numberWords = 20;
    const maxLength = 5
    const exclusions: string[] = [ 'ti', 'ki' ]
    const rewrites = {
        "mn": "m",
        "nn": "n"
    } 
    const dto: bodyDto = { consonants: con, vowels: vow, numberWords: numberWords, maxLength: maxLength, rewrites: rewrites, exclusions: exclusions };
    const gen = new GenerateWords(dto);
    const words = gen.getWords();

    it("should generate the correct number of words", () => {

        expect(words).toBeArray();
        expect(words).toHaveLength(numberWords);
    })

    it("should remove the exclusions of the words", () => {

        for (let i = 0; i < exclusions.length; i++) {
            words.forEach(word => {
                for (let j = 0; j < word.length - 1; j++) {
                    expect(word[j] + word[j+1]).not.toBe(exclusions[i])
                } 
            })
        }
    })
});
