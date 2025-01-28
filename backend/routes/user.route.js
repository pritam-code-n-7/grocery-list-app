import express from "express";
import { authLimiter } from "../config/rateLimits.js";
import {userLogin, userSignup} from "../controllers/user.controller.js"

const router = express.Router();


router.post('/signup',authLimiter, userSignup)
router.post('/login',authLimiter, userLogin)


export default router;