import { Router } from "express";

const cursos = Router();

cursos.get("/cursos", (req, res) => res.json("cursos!!"));

export default cursos;
