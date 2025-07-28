import { describe, expect, it } from "bun:test";
import generateSyllable from "../src/core/generateSyllables";

describe("generate syllables", () => {
    const consonants = ['p'];
    const vowels = ['a'];
    const exclusions = [];
    const struct = "CV";

    it("should generate the correct syllable", () => {
        expect(generateSyllable(consonants, vowels, exclusions, struct)).toBe('pa');
    })
})
