import express from "express";
import passport from "../middlewares/passport.js";
import authController from '../controllers/auth.controller.js';
import { accountExistsSignup } from '../middlewares/auth/accountExistsSignup.middleware.js';
import { accountExistsSignin } from "../middlewares/auth/accountExistsSignin.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";


const router = express.Router();

// Registrar un usuarie
router.post('/signup',
    accountExistsSignup,
    authController.signup
);

// Logear un usuarie
router.post('/signin',
    accountExistsSignin,
    passwordIsOk,
    authController.signin
);

// Deslogear un usuarie
router.post('/signout',
    passport.authenticate('jwt', { session: false }),
    authController.signout
);

export default router;
