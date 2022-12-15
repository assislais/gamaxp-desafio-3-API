const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string(),
        apresentacao: Joi.string(),
        email: Joi.string().email(),
        senha: Joi.string()
    }),
});
