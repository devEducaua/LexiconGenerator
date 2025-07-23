import { Context } from "hono";
import GenerateWords from "./generateWords";
import { bodyDto } from "./bodyDto";

async function wordsController(c: Context) {
    const { consonants, vowels, numberWords, maxLength, exclusions, rewrites } = await c.req.json()

    const dto: bodyDto = { consonants: consonants, vowels: vowels, numberWords: numberWords, maxLength: maxLength, exclusions: exclusions, rewrites: rewrites };

    const gen = new GenerateWords(dto);

    const words = gen.getWords()

    return c.json(words);
}

export default wordsController;
