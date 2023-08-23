import express from "express";
import cityRouter from "./city.router.js";
import userRouter from "./user.router.js";
import itineraryRouter from "./itinerary.router.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo');
});

router.use('/cities', cityRouter);
router.use('/users', userRouter);
router.use('/itinerary', itineraryRouter);

export default router;