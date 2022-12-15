const express = require("express");
const routes = express.Router();

const psicologoController = require("../controllers/psicologoController.js");
const pacienteController = require("../controllers/pacienteController.js");
const atendimentoController = require("../controllers/atendimentoController.js");

const pacientesValidation = require("../validations/pacientes");
const psicologosCreateValidation = require("../validations/psicologos/create");

routes
    .get("/psicologos", psicologoController.listar)
    .get("/psicologos/:id", psicologoController.buscarPorId)
    .post("/psicologos", psicologosCreateValidation, psicologoController.criar)
    .put("/psicologos/:id", psicologoController.atualizar)
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
    .post("/atendimentos", atendimentoController.criar);

module.exports = routes;