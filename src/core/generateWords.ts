import { bodyDto } from "../web/bodyDto";
import genSyllable from "./generateSyllables";
import applyRewrites from "./rewrites";

export default function generateWords(dto: bodyDto): string[] {
    const outputArr: string[] = [];
    const { consonants, vowels, numberWords, maxLength, minLength, exclusions, struct, rewrites } = dto;

    for (let i = 0; i < numberWords; i++) {
        const numSyllables: number = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

        let word: string = "";

        for (let j = 0; j < numSyllables; j++) {
            word += genSyllable(consonants, vowels, exclusions, struct);
        }

        const mapRewrites = new Map(Object.entries(rewrites));

        word = applyRewrites(mapRewrites, word);

        outputArr.push(word);
    }
    return outputArr;
}
