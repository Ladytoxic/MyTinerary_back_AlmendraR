import express from "express";
import userControllers from "../controllers/user.controller.js"

const router = express.Router();

// Crear une usuarie
router.post('/', userControllers.postUser);

// Obtener todos les usuaries
router.get('/', userControllers.getUsers);

// Obtener une usuarie por el ID
router.get('/:id', userControllers.getUser);

// Actulizar datos de une Usuarie
router.put('/:id', userControllers.updateUser);

// Borrar une usuarie
router.delete('/:id', userControllers.deleteUser);

export default router;