import express from 'express';
import { contacUsDataSaveController, getAllDataController } from '../controllers/contact.controllers.js';

const contactRouting=express.Router();
// getAllDataController
contactRouting.post("/contacUsDataSave",contacUsDataSaveController)
contactRouting.get("/getAllData",getAllDataController)



export default contactRouting;