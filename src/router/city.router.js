import express from "express";
import cityController from "../controllers/city.controller.js";

const router = express.Router();

// Obtener todas las cuidades
router.get('/', cityController.getCities);

// Obtener una ciudad por su ID
router.get('/:id', cityController.getCityById);

router.post('/', cityController.postCity);

router.delete('/', cityController.deleteCity);

router.put('/', cityController.putCity);


export default router;