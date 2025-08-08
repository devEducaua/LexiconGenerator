export interface bodyDto {
    consonants: string[];
    vowels: string[];
    maxLength: number;
    minLength: number;
    numberWords: number;
    exclusions: string[];
    struct: string;
    rewrites: {[index: string]: string};
}
