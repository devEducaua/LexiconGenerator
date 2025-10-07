import { lexiconDto } from "../dtos/lexiconDto";
import generateSyllable from "./syllables";
import applyRewrites from "./rewrites";

export default function generateWords(dto: lexiconDto): string[] {
    const outputArr: string[] = [];
    const { groups, numberWords, maxLength, minLength, exclusions, structs, rewrites } = dto;

    for (let i = 0; i < numberWords; i++) {
        const numSyllables: number = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

        let word: string = "";

        for (let j = 0; j < numSyllables; j++) {
            word += generateSyllable(groups, structs, exclusions);
        }

        const mapRewrites = new Map(Object.entries(rewrites));

        word = applyRewrites(mapRewrites, word);

        outputArr.push(word);
    }
    return outputArr;
}
