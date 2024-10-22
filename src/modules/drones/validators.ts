import { body } from "express-validator";

export const createDrone = [
  body("name")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .notEmpty()
    .withMessage("El nombre es requerido."),
];

export const updateDrone = [
  body("name")
    .isString()
    .withMessage("El nombre debe ser un texto."),
  body("status")
    .isString()
    .withMessage("El estado debe ser un texto."),
  body("deliveryObject") // es string o null
    .optional()
    .custom((value) => value === null || typeof value === "string")
    .withMessage("El objeto de entrega debe ser un texto."),
];