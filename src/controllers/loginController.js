const { Psicologos } = require('../models')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

const loginController = {
    async login(req,res){
        const {email,senha} = req.body

        const psicologo = await Psicologos.findOne({
            where:{
                email
            }
        })

        if(!psicologo){
            return res.status(401).json("E-mail ou senha inválida, verifique e tente novamente")
        }

        if(!bcrypt.compareSync(senha,psicologo.senha)){
            return res.status(401).json("E-mail ou senha inválida, verifique e tente novamente")
        }

        const key = process.env.SECRET_KEY

        const token = jwt.sign({id:psicologo.id, email:psicologo.email, nome:psicologo.nome},key)

        return res.status(200).json(token)
    }
}

module.exports = loginController