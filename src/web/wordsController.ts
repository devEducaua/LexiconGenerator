import { Context } from "hono";
import generateWords from "../core/generateWords";
import { bodyDto } from "./bodyDto";

async function wordsController(c: Context) {
    const { consonants, vowels, numberWords, maxLength, exclusions, struct } = await c.req.json();

    const dto: bodyDto = { consonants, vowels, numberWords, maxLength, exclusions, struct };

    const words: string[] = generateWords(dto);

    return c.json(words);
}

export default wordsController;
