import express from "express";
import cityController from "../controllers/city.controller.js"

const router = express.Router();

router.get('/', cityController.getCities);

// router.get('/', cityController.postCity);

router.post('/', cityController.postCity);

// router.delete('/', cityController.postCity);

// router.put('/', cityController.postCity);


export default router;