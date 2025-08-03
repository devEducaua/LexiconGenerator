import { Context } from "hono";
import generateWords from "../core/generateWords";
import { bodyDto } from "./bodyDto";

async function wordsController(c: Context) {
    const dto: bodyDto = await c.req.json();
    return c.json(generateWords(dto));
}

export default wordsController;
