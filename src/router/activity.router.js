import express from "express";
import activityControllers from "../controllers/activity.controller.js"

const router = express.Router();

// Crear una Actividad
router.post('/', activityControllers.postActivity);

// Obtener todos las Actividades
router.get('/', activityControllers.getActivities);

// Obtener un Actividade por el ID
router.get('/:id', activityControllers.getActivityById);

// Actulizar datos de un Actividad
router.put('/:id', activityControllers.updateActivity);

// Borrar una Actividad
router.delete('/:id', activityControllers.deleteActivity);

export default router;