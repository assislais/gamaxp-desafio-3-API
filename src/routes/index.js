const express = require("express");
const routes = express.Router();

const psicologoController = require("../controllers/psicologoController.js");
const pacienteController = require("../controllers/pacienteController.js");
const atendimentoController = require("../controllers/atendimentoController.js");
const loginController = require("../controllers/loginController.js");

const pacientesValidation = require("../validations/pacientes");
const psicologosCreateValidation = require("../validations/psicologos/create");
const psicologosUpdateValidation = require("../validations/psicologos/update");
const loginValidation = require("../validations/login");
const atendimentoValidation = require("../validations/atendimentos");

const auth = require("../middlewares/auth");


routes
    .get("/psicologos", psicologoController.listar)
    .get("/psicologos/:id", psicologoController.buscarPorId)
    .post("/psicologos", psicologosCreateValidation, psicologoController.criar)
    .put("/psicologos/:id", psicologosUpdateValidation, psicologoController.atualizar)
    .delete("/psicologos/:id", psicologoController.excluir);

routes
    .get("/pacientes", pacienteController.listar)
    .get("/pacientes/:id", pacienteController.buscarPorId)
    .post("/pacientes", pacientesValidation, pacienteController.criar)
    .put("/pacientes/:id", pacienteController.atualizar)
    .delete("/pacientes/:id", pacienteController.excluir);

routes
    .get("/atendimentos", atendimentoController.listar)
    .get("/atendimentos/:id", atendimentoController.buscarPorId)
    .post("/atendimentos",auth, atendimentoValidation, atendimentoController.criar);

routes
    .post("/login", loginValidation,loginController.login);

module.exports = routes;