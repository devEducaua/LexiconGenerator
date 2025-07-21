import { Hono } from "hono";
import wordsController from "./wordsController";

const app = new Hono();

// app.post('/', async (c) => {
//     return await wordsController(c);
// });

app.post('/', (c) => wordsController(c));

const port = 8080;
console.log(`Server running in ${port}`)

export default {
    port,
    fetch: app.fetch
};
