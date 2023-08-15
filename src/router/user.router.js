import express from "express";
import userControllers from "../controllers/user.controller.js"

const router = express.Router();

router.get('/', userControllers.getUsers);

router.get('/:id', userControllers.getUser);

router.get('/', userControllers.postUser);

router.get('/', userControllers.deleteUser);

router.get('/', userControllers.putUser);

export default router;