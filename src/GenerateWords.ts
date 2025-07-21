import { bodyDto } from "./bodyDto";

class GenerateWords {
    private words: string[];

    constructor(dto: bodyDto) {
        const { consonants, vowels, numberWords, maxLength } = dto;
        this.words = this.genWords(consonants, vowels, numberWords, maxLength);
    }

    public getWords(): string[] {
        return this.words;
    }

    private genSyllable(consonants: string[], vowels: string[]): string {
        const c: string = consonants[Math.floor(Math.random() * consonants.length)];
        const v: string = vowels[Math.floor(Math.random() * vowels.length)];

        return `${c}${v}`;
    }

    private genWords(consonants: string[], vowels: string[], numberWords: number, maxLength: number): string[] {
        const out: string[] = [];

        for (let i = 0; i < numberWords; i++) {
            const numSyllables: number = Math.floor(Math.random() * maxLength) + 1;

            let word: string = "";

            for (let j = 0; j < numSyllables; j++) {
                word += this.genSyllable(consonants, vowels);
            }
            out.push(word)
        }
        return out;
    }
}

export default GenerateWords;
