const Atendimentos = require("./Atendimentos")
const Paciente = require("./Paciente")
const Psicologos = require("./Psicologos")

Paciente.belongsToMany(Psicologos,{
    foreignKey:"paciente_id",
    through:Atendimentos
})

Psicologos.belongsToMany(Paciente,{
    foreignKey:"psicologo_id",
    through:Atendimentos
})


module.exports = {
    Atendimentos,
    Paciente,
    Psicologos
}