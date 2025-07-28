import  { describe, expect, it } from "bun:test";
import generateWords from "../src/core/generateWords";
import { bodyDto } from "../src/web/bodyDto";

describe("generate words", () => {
    const consonants = ['p', 't', 'k'];
    const vowels = ['a', 'i', 'u'];
    const numberWords = 10;
    const maxLength = 4;
    const exclusions = ['pi'];
    const struct = "CV";
    const dto: bodyDto = { consonants, vowels, numberWords, maxLength, exclusions, struct };
    const words = generateWords(dto);

    it("should generate the correct number of words", () => {
        expect(words).toBeArray();
        expect(words).toHaveLength(numberWords);
    })

    it("should generate the correct number of syllables", () => {
        words.forEach(word => {
            expect(word.length).toBeLessThanOrEqual(maxLength * 2);
        })
    })
})
