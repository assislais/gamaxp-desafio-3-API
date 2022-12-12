const psicologoController = {
    async listar(req, res){
        res.status(200).json("psicologo - LISTAR");
    },

    async buscarPorId(req, res){
        res.status(200).json("psicologo - Buscar Por Id");
    },

    async criar(req, res){
        res.status(201).json("psicologo - CRIAR");
    },

    async atualizar(req, res){
        res.status(200).json("psicologo - ATUALIZAR");
    },

    async excluir(req, res){
        res.status(204).json("psicologo - EXCLUIR");
    },
}

module.exports = psicologoController;