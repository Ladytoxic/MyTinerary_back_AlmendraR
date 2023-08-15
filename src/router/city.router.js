import express from "express";
import cityController from "../controllers/city.controller.js";

const router = express.Router();

router.get('/', cityController.getCities);

router.get('/:id', cityController.getCityById);

router.post('/', cityController.postCity);

router.delete('/', cityController.deleteCity);

router.put('/', cityController.putCity);


export default router;