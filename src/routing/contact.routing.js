import express from 'express';
import { contacUsDataSaveController } from '../controllers/contact.controllers.js';

const contactRouting=express.Router();

contactRouting.post("/contacUsDataSave",contacUsDataSaveController)



export default contactRouting;