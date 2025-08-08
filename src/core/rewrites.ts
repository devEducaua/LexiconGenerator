export default function applyRewrites(rewrites: {[index: string]: string}, word: string) {
    for (let i = 0; i < word.length; i++) {
        for (const [key, value] of Object.entries(rewrites)) {
            if (word[i] + word[i+1] == key) {
                word = word.replace(`${word[i]}${word[i+1]}`, value);
            }
        }
    }
    return word;
}
