import express from "express";
import indexRoutes from "./routes/index.routes.js";
import cursoRoutes from "./routes/curso.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({}));

app.use(indexRoutes);
app.use(cursoRoutes);
app.use(usuarioRoutes);

export default app;
