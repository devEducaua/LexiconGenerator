
export default function generateSyllable(groups: Record<string, string[]>, struct: string, exclusions: string[]) {
    const possibleStructs = struct.split("/");

    let syllable: string = "";

    const choice = possibleStructs[Math.floor(Math.random() * possibleStructs.length)]

    for (const [key, value] of Object.entries(groups)) {
        for (const letter of choice) {
            if (letter.toUpperCase() == key.toUpperCase()) {
                syllable += value[Math.floor(Math.random() * value.length)];
            }
        }
    }

    for (let i = 0; i < exclusions.length; i++) {
        if (syllable == exclusions[i] && syllable.trim() != "") {
            syllable = generateSyllable(groups, struct, exclusions);
        }
    }

    return syllable;
}
