const db = require("../database")
const {DataTypes} = require("sequelize")
const Paciente = require("./Paciente")
const Psicologos = require("./Psicologos")

const Atendimentos = db.define("Atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    paciente_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Paciente,
            key:'id'
        }
    },
    psicologo_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Psicologos,
            key:'id'
        }
    },
    observacao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_atendimento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    },
},{
    tablename:'atendimentos'
}
)

module.exports = Atendimentos