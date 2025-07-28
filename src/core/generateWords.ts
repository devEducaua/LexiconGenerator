import { bodyDto } from "../web/bodyDto";
import genSyllable from "./generateSyllables";

export default function generateWords(dto: bodyDto): string[] {
    const outputArr: string[] = [];
    const { consonants, vowels, numberWords, maxLength, exclusions, struct } = dto;

    for (let i = 0; i < numberWords; i++) {
        const numSyllables: number = Math.floor(Math.random() * maxLength) + 1;

        let word: string = "";

        for (let j = 0; j < numSyllables; j++) {
            word += genSyllable(consonants, vowels, exclusions, struct);
        }

        outputArr.push(word);
    }
    return outputArr;
}
