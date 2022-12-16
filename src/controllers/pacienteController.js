const {Paciente} = require("../models");

const pacienteController = {
    async listar(req, res){
        try {
            const pacientes = await Paciente.findAll();
            return res.status(200).json(pacientes);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }        
    },

    async buscarPorId(req, res){
        try {
            const {id} = req.params;

            const paciente = await Paciente.findByPk(id);

            if(!paciente){
                return res.status(404).json("Id não encontrado.");
            }

            return res.status(200).json(paciente);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async criar(req, res){
        try {
            const {nome, idade, email} = req.body;

            const paciente = await Paciente.findOne({ where: { email } });

            if(paciente){
                return res.status(400).json({message: "Email já cadastrado"});
            }

            const novoPaciente = await Paciente.create({
                nome,
                idade,
                email
            });

            return res.status(201).json(novoPaciente);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async atualizar(req, res){
        try {
            const {id} = req.params;
            const {nome, idade, email} = req.body;

            const paciente = await Paciente.findByPk(id);

            if(!paciente){
                return res.status(404).json("Id não encontrado.");
            }

            await Paciente.update({
                nome,
                idade,
                email
            }, {where: {id}});

            const pacienteAtualizado = await Paciente.findByPk(id);

            return res.status(200).json(pacienteAtualizado);
        } catch (error) {
           return res.status(500).json("Erro ao processar...");
        }  
    },

    async excluir(req, res){
        try {
            const {id} = req.params;

            const paciente = await Paciente.findByPk(id);

            if(!paciente){
                return res.status(404).json("Id não encontrado.");
            }

            await Paciente.destroy({
                where: {id}
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }
    },

    async contar(req, res){
        try {
            const quantidade = await Paciente.count();
            res.status(200).json(quantidade);
        } catch (error) {
            res.status(500).json("Erro ao processar...");
        }     
    },
}

module.exports = pacienteController;
