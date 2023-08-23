import express from "express";
import itineraryControllers from "../controllers/itinerary.controller.js"

const router = express.Router();

// Crear une Itinerario
router.post('/', itineraryControllers.postItinerary);

// Obtener todos los Itinerarios
router.get('/', itineraryControllers.getItineraries);

// Obtener un Itinerario por el ID
router.get('/:id', itineraryControllers.getItineraryById);

// Actulizar datos de un Itinerario
router.put('/:id', itineraryControllers.updateItinerary);

// Borrar un Itinerario
router.delete('/:id', itineraryControllers.deleteItinerary);

export default router;