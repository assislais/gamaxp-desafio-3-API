const { Atendimentos, Psicologos } = require("../models")

const atendimentoController = {
    async listar(req, res){
        try{
            const listaDeAtendimentos = await Atendimentos.findAll();
            return res.status(200).json(listaDeAtendimentos);
        }catch (error){
            console.log(error)
            return res.status(500).json("Erro ao processar...");
        }
    },

    async buscarPorId(req, res){
        try{
            const {id}=req.params
            const atendimento = await Atendimentos.findOne({ 
                where: { id }
            });
            if (!atendimento) {
                return res.status(404).json("Id não encontrado")
            }
            return res.status(200).json(atendimento);
        }catch(error){
            return res.status(500).json("Erro ao processar...");
        }
        
    },

    async criar(req, res){
        try{
            const { paciente_id, data_atendimento, observacao} = req.body

            const psicologo_id = req.AUTH.id
            
            const novoAtendimento = await Atendimentos.create({
                paciente_id,data_atendimento,observacao,psicologo_id
            })

            res.status(201).json(novoAtendimento);
        }catch(error){
            res.status(500).json("Erro ao processar...")
        }
    },

    async contar(req, res){
        try {
            const quantidade = await Atendimentos.count();
            res.status(200).json(quantidade);
        } catch (error) {
            res.status(500).json("Erro ao processar...");
        }     
    },

    async media(req, res){
        try {
            const atendimentoQtd = await Atendimentos.count();
            const psicologoQtd = await Psicologos.count();
            const media = atendimentoQtd / psicologoQtd;
            res.status(200).json(media);
        } catch (error) {
            res.status(500).json("Erro ao processar...");
        }     
    },
}

module.exports = atendimentoController;