import { bodyDto } from "../web/bodyDto";
import generateSyllable from "./generateSyllables";

export default function generateWords(dto: bodyDto) {
    const { consonants, vowels, numberWords, maxLength, exclusions, struct } = dto;

    return Array.from({ length: numberWords } , () => {
        const numSyllables: number = Math.floor(Math.random() * maxLength) + 1;

        return Array.from({ length: numSyllables }, () => 
            generateSyllable(consonants, vowels, exclusions, struct)
        ).join("");
    });
}
