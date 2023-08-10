import express from "express";
import cityRouter from "./city.router.js"

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo');
});

router.use('/cities', cityRouter);

export default router;