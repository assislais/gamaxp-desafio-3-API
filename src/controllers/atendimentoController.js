const atendimentoController = {
    async listar(req, res){
        res.status(200).json("atendimento - LISTAR");
    },

    async buscarPorId(req, res){
        res.status(200).json("atendimento - Buscar Por Id");
    },

    async criar(req, res){
        res.status(201).json("atendimento - CRIAR");
    },

    async atualizar(req, res){
        res.status(200).json("atendimento - ATUALIZAR");
    },

    async excluir(req, res){
        res.status(204).json("atendimento - EXCLUIR");
    },
}

module.exports = atendimentoController;