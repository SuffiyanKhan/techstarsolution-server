import express from 'express';
import { signupcontroller } from '../controllers/auth.controllers.js';

const authRouting = express.Router();

authRouting.post('/signupapi', signupcontroller);  // Correct way

export default authRouting;
