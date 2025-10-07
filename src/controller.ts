import { Context } from "hono";
import generateWords from "./lexicon/generateWords";
import frequen from "./frequen/frequen";
import { lexiconDto } from "./dtos/lexiconDto";
import { frequenDto } from "./dtos/frequenDto";

export async function lexiconController(c: Context) {
    const { groups, numberWords, maxLength, minLength, exclusions, structs, rewrites } = await c.req.json();

    const dto: lexiconDto = { groups, numberWords, maxLength, minLength, exclusions, structs, rewrites };

    const words: string[] = generateWords(dto);

    return c.json(words);
}

export async function frequenController(c: Context) {
    const { phonemes, text } = await c.req.json();

    const dto: frequenDto = { phonemes, text };

    const results = frequen(dto);

    return c.json(results);
}
