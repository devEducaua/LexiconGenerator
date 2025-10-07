import  { describe, expect, it } from "bun:test";
import generateWords from "../src/lexicon/generateWords";
import { lexiconDto } from "../src/dtos/lexiconDto";

describe("generate words", () => {
    const groups = { 
        c: ['p', 't', 'k'],
        v: ['a', 'i', 'u']
    };
    const structs = "CV";

    const numberWords = 10;
    const maxLength = 4;
    const minLength = 1;

    const exclusions = ['pi'];
    const rewrites = new Map<string, string>;

    const dto: lexiconDto = { groups, numberWords, maxLength, minLength, exclusions, structs, rewrites };
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
