import Curso from "../models/curso.model.js";

export const create = (req, res) => {
  console.log("create", req.body);
  const {
    body: { titulo, descripcion, imagen },
  } = req;
  const curso = {
    titulo,
    descripcion,
    imagen,
  };

  Curso.create(curso)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

export const list = (req, res) => {
  console.log("list method called");
  Curso.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

export const detail = (req, res) => {
  console.log("detalle", req.params);
  Curso.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
