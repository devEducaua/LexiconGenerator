export interface bodyDto {
    consonants: string[];
    vowels: string[];
    maxLength: number;
    numberWords: number;
    exclusions: string[];
    struct: string;
    rewrites: {[index: string]: string};
}
