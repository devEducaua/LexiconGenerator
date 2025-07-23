import { Hono } from "hono/tiny";
import wordsController from "./wordsController";

const app = new Hono().basePath("/api");;

app.post('/', (c) => wordsController(c));

export default {
    port: 8080,
    fetch: app.fetch
};
