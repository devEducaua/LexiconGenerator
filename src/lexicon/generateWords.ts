import { lexiconDto } from "../dtos/lexiconDto";
import generateSyllable from "./syllables";

function applyRewrites(rewrites: Map<string, string>, word: string) {
    for (let i = 0; i < word.length -1; i++) {

        for (const [key, value] of rewrites) {

            if (word.slice(i, i + word.length) == key) {
                word = word.replace(`${word[i]}${word[i+1]}`, value);
            }
        }
    }
    return word;
}
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
