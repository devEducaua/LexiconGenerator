import { Hono } from "hono/tiny";
import { lexiconController, frequenController } from "./controller";

const app = new Hono().basePath("/api");

app.post('/generate', (c) => lexiconController(c));
app.post('/frequen', (c) => frequenController(c));

export default {
    port: 8080,
    fetch: app.fetch
};
