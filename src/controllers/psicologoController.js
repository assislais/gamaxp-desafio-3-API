const Psicologos = require("../models/Psicologos");

const psicologoController = {
    async listar(req, res) {
        try {
            const listaPsicologos = await Psicologos.findAll();
            
            return res.status(200).json(listaPsicologos);

        } catch (error) {
            
            return  res.status(500).json("Erro ao processar...");
        }             
    },

    async buscarPorId(req, res){
        try {
            const {id} = req.params;
            const psicologo = await Psicologos.findByPk(id);
            
            if(!psicologo){
                return res.status(404).json("Id não encontrado.");
            }
            return res.status(200).json(psicologo);
            
        } catch (error) {
            return req.status(500).json("Erro ao processar...");
            }            
        },

    async criar(req, res) {
        try {
            const {nome, email, apresentacao, senha} = req.body;
        
            const psicologo = await Psicologos.findOne({ where: { email } });

            if(psicologo){
                return res.status(400).json({message: "Email já cadastrado."});
            }

            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                apresentacao,
                senha,
            });

            return res.status(201).json(novoPsicologo);

        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }          
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, apresentacao, senha } = req.body;
            const psicologo = await Psicologos.findByPk(id);

            if(!psicologo){
                return res.status(404).json("Id não encontrado.");
            }
            await Psicologos.update ({
                nome,
                email,
                apresentacao,
                senha,
            },
            { where: { id } });

            const psicologoAtualizado = await Psicologos.findByPk(id);
            return res.status(200).json(psicologoAtualizado);  

        } catch (error) {
            return res.status(500).json("Erro ao processar...")
        }
    },
        
    
    async excluir(req, res) {
        try {
            const { id } = req.params;
            const psicologo = await Psicologos.findByPk(id);

            if(!psicologo){
                return res.status(404).json("Id não encontrado.");
            }
            await Psicologos.destroy({
                where: { id } });

            return res.status(204).json();

        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }      
    },
}

module.exports = psicologoController;