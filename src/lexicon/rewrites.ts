
export default function applyRewrites(rewrites: Map<string, string>, word: string) {
    for (let i = 0; i < word.length -1; i++) {

        for (const [key, value] of rewrites) {

            if (word.slice(i, i + word.length) == key) {
                word = word.replace(`${word[i]}${word[i+1]}`, value);
            }
        }
    }
    return word;
}
