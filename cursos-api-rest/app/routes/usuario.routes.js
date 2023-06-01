import { Router } from "express";

import { create, list, detail } from "../controllers/usuario.controller.js";
const usuarios = Router();

usuarios.post("/usuarios", create);
usuarios.get("/usuarios", list);

usuarios.get("/usuarios/:id", detail);

export default usuarios;
