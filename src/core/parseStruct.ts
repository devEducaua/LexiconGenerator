
export type letterType =  { [index: string]: boolean};

export default function parseStruct(struct: string): letterType[] {
    struct = struct.toUpperCase();
    const letters: string[] = struct.split("");

    const output: letterType[] = []

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != ")" && letters[i] != "(") {
            if (letters[i-1] == "(" && letters [i+1] == ")" ) {
                const lt: letterType = { [letters[i]]: false };
                output.push(lt);
            } else {
                const lt: letterType = { [letters[i]]: true };
                output.push(lt);
            }
        }
    }

    return output;
}
