import { Context } from "hono";
import GenerateWords from "./GenerateWords";
import { bodyDto } from "./bodyDto";

async function wordsController(c: Context) {
    const { consonants, vowels, numberWords, maxLength } = await c.req.json()

    const dto: bodyDto = { consonants: consonants, vowels: vowels, numberWords: numberWords, maxLength: maxLength };

    const gen = new GenerateWords(dto);

    const words = gen.getWords()

    return c.json(words);
}

export default wordsController;
