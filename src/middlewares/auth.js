const JWT = require("jsonwebtoken");
require("dotenv").config()

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "O token não especificado" });
  }
  ("Bearer token");

  const partsToken = authorization.split(" ");

  if (partsToken.length !== 2) {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  const [key, token] = partsToken;

  if (key.indexOf("Bearer") < 0) {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  try {
    const data = JWT.verify(token, process.env.SECRET_KEY);
    req.AUTH = data;
    return next();
  } catch (e) {
    return res
      .status(401)
      .json({ message: "Token invalido! Faça login novamente!" });
  }
};