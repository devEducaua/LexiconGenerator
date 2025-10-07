import { describe, expect, it } from "bun:test";
import generateSyllable from "../src/lexicon/syllables";

describe("generate syllables", () => {
    const groups = { c: ['p'], v: ['a']}

    const exclusions = [];
    const struct = "CV";

    it("should generate the correct syllable", () => {
        expect(generateSyllable(groups, struct, exclusions)).toBe('pa');
    })
})
