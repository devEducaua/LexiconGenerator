import { describe, expect, it } from 'bun:test';
import { bodyDto } from "./bodyDto";
import GenerateWords from "./generateWords";

describe("GenerateWords", () => {
    const con: string[] = ['p', 't', 'k', 's', 'm', 'n', 'l'];
    const vow: string[] = ['a', 'i', 'u'];

    const numberWords = 20;
    const maxLength = 5

    it("should generate the correct number of words", () => {
        const dto: bodyDto = { consonants: con, vowels: vow, numberWords: numberWords, maxLength: maxLength };
        const gen = new GenerateWords(dto);
        const words = gen.getWords();

        expect(words).toBeArray();
        expect(words).toHaveLength(numberWords);
    })

    it("should generate words with maximum of syllables determined", () => {
        const dto: bodyDto = { consonants: con, vowels: vow, numberWords: numberWords, maxLength: maxLength };
        const gen = new GenerateWords(dto);
        const words = gen.getWords();

        words.forEach(word => {
            expect(word.length).toBeLessThanOrEqual(maxLength * 2);
        })

    })
});
