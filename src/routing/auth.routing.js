import express from 'express';
import { deleteUserController, getAllUsers, logincontroller, signupcontroller } from '../controllers/auth.controllers.js';

const authRouting = express.Router();

authRouting.post('/signupapi', signupcontroller);   
authRouting.post('/loginapi', logincontroller); 
authRouting.get('/getallusers', getAllUsers); 
authRouting.delete('/deletusers/:id', deleteUserController); 

export default authRouting;
