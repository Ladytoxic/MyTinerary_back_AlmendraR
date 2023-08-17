import express from "express";
import cityController from "../controllers/city.controller.js";

const router = express.Router();

// Crear cuidad
router.post('/', cityController.postCity);

// Obtener todas las cuidades
router.get('/', cityController.getCities);

// Obtener una ciudad por su ID
router.get('/:id', cityController.getCityById);

// Modificar ciudad
router.put('/:id', cityController.updateCity);

// Borrar cuidad
router.delete('/:id', cityController.deleteCity);

export default router;