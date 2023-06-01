import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define("usuarios", {
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  celular: {
    type: DataTypes.STRING,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Usuario;
