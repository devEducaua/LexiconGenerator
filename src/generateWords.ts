import { bodyDto } from "./bodyDto";

class GenerateWords {
    private words: string[];

    constructor(dto: bodyDto) {
        const { consonants, vowels, numberWords, maxLength, exclusions, rewrites } = dto;
        this.words = this.genWords(consonants, vowels, numberWords, maxLength, exclusions, rewrites);
    }

    public getWords(): string[] {
        return this.words;
    }

    private genSyllable(consonants: string[], vowels: string[], exclusions: string[], rewrites: Record<string, string>): string {
        const c: string = consonants[Math.floor(Math.random() * consonants.length)];
        const v: string = vowels[Math.floor(Math.random() * vowels.length)];

        const random = Math.floor(Math.random() * 4) + 1;

        let syllable: string = random < 4 ? `${c}${v}` : `${v}`;

        for (let i = 0; i < exclusions.length; i++) {
            if (syllable == exclusions[i]) {
                syllable = this.genSyllable(consonants, vowels, exclusions, rewrites);
            }
        }

        // for (const [ key, value ] of Object.entries(rewrites)) {
        //     if (syllable === key) {
        //         syllable = value;
        //         break;
        //     }
        // }
        
        for (const k in rewrites) {
            if (syllable == k) {
                syllable = rewrites[k];
                break;
            }
        }

        return syllable;
    }

    private genWords(consonants: string[], vowels: string[], numberWords: number, maxLength: number, exclusions: string[], rewrites: { }): string[] {
        const out: string[] = [];

        for (let i = 0; i < numberWords; i++) {
            const numSyllables: number = Math.floor(Math.random() * maxLength) + 1;

            let word: string = "";

            for (let j = 0; j < numSyllables; j++) {
                word += this.genSyllable(consonants, vowels, exclusions, rewrites);
            }
            out.push(word)
        }
        return out;
    }
}

export default GenerateWords;
