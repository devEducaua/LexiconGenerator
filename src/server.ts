import { Hono } from "hono/tiny";
import { cors } from "hono/cors";

import wordsController from "./web/wordsController";

const app = new Hono().basePath("/api");;

app.use("*", cors());

app.post('/', (c) => wordsController(c));

export default {
    port: 8080,
    fetch: app.fetch
};
