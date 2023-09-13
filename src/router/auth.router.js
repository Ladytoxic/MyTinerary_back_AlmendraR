import express from "express";
import passport from "../middlewares/passport.js";
import authController from '../controllers/auth.controller.js';
import { accountExistsSignup } from '../middlewares/auth/accountExistsSignup.middleware.js';
import { accountExistsSignin } from "../middlewares/auth/accountExistsSignin.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";
import { userSignUp } from "../schemas/user.Schema.js";
import { validator } from "../middlewares/validator.js";


const router = express.Router();

// Registrar un usuarie
router.post('/signup',
    accountExistsSignup,
    validator(userSignUp),
    authController.signup
);

// Logear un usuarie
router.post('/signin',
    accountExistsSignin,
    passwordIsOk,
    authController.signin
);

// Logear usuarie con google
router.post('/google_signin',
    authController.googleSignin);

// Deslogear un usuarie
router.post('/signout',
    passport.authenticate('jwt', { session: false }),
    authController.signout
);


export default router;
