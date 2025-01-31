import express from 'express';
import { logincontroller, signupcontroller } from '../controllers/auth.controllers.js';

const authRouting = express.Router();

authRouting.post('/signupapi', signupcontroller);  // Correct waylogincontroller
authRouting.post('/loginapi', logincontroller);  // Correct waylogincontroller

export default authRouting;
