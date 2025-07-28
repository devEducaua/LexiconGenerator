import { Hono } from "hono";

import wordsController from "./web/wordsController";

const app = new Hono().basePath("/api");;

app.post('/', (c) => wordsController(c));

export default {
    port: 8080,
    fetch: app.fetch
};
