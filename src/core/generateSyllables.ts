import parseStruct from "./parseStruct";

export default function generateSyllable(consonants: string[], vowels: string[], exclusions: string[], struct: string): string {
    const parsed = parseStruct(struct);

    let syllable: string = "";

    for (let i = 0; i < parsed.length; i++) {
        const keys = Object.keys(parsed[i]);
        const values = Object.values(parsed[i]);

        if (keys[0] == "V") {
            if (values[0] == true) {
                syllable += vowels[Math.floor(Math.random() * vowels.length)];
            } else {
                if (Math.floor(Math.random() * 10) >= 5) {
                    syllable += vowels[Math.floor(Math.random() * vowels.length)];
                }
            }
        }
        else if (keys[0] == "C") {
            if (values[0] == true) {
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

const c = [ 'p', 't', 'k', 'm', 'n', 'l', 's' ];
const v = [ 'a', 'i', 'u' ];
const e = [ 'ti' ];

const r = generateSyllable(c, v, e, "CVC");
console.log(r);
