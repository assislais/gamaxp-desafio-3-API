const pacienteController = {
    async listar(req, res){
        res.status(200).json("paciente - LISTAR");
    },

    async buscarPorId(req, res){
        res.status(200).json("paciente - Buscar Por Id");
    },

    async criar(req, res){
        res.status(201).json("paciente - CRIAR");
    },

    async atualizar(req, res){
        res.status(200).json("paciente - ATUALIZAR");
    },

    async excluir(req, res){
        res.status(204).json("paciente - EXCLUIR");
    },
}

module.exports = pacienteController;