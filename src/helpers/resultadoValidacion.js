import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ errores: errors.array() });
  }
  next();
};

export default resultadoValidacion;