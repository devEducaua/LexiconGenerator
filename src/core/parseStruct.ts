
export default function parseStruct(struct: string): Map<string, boolean> {
    struct = struct.toUpperCase();
    const letters: string[] = struct.split("");

    const output = new Map<string, boolean>();

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != ")" && letters[i] != "(") {
            if (letters[i-1] == "(" && letters [i+1] == ")" ) {
                output.set(letters[i], false);
            } else {
                output.set(letters[i], true);
            }
        }
    }

    return output;
}
