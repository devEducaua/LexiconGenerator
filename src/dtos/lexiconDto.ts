export interface lexiconDto {
    groups: Record<string, string[]>;
    maxLength: number;
    minLength: number;
    numberWords: number;
    exclusions: string[];
    structs: string;
    rewrites: Map<string, string>;
}
