import parseStruct from "./parseStruct";

export default function generateSyllable(consonants: string[], vowels: string[], exclusions: string[], struct: string): string {
    const parsed: Map<string, boolean> = parseStruct(struct);

    let syllable: string = "";

    for (const [key, value] of parsed) {
        if (key == "V") {
            if (value == true) {
                syllable += vowels[Math.floor(Math.random() * vowels.length)];
            } else {
                if (Math.floor(Math.random() * 10) >= 5) {
                    syllable += vowels[Math.floor(Math.random() * vowels.length)];
                }
            }
        }
        else if (key == "C") {
            if (value == true) {
                syllable += consonants[Math.floor(Math.random() * consonants.length)];
            } else {
                if (Math.floor(Math.random() * 10) >= 5) {
                    syllable += consonants[Math.floor(Math.random() * consonants.length)];
                }
            }
        } 
    }

    for (let i = 0; i < exclusions.length; i++) {
        if (syllable == exclusions[i] && syllable.trim() != "") {
            syllable = generateSyllable(consonants, vowels, exclusions, struct);
        }
    }

    return syllable
}
