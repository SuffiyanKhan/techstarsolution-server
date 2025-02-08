import express from 'express';
import { contacUsDataSaveController, deleteContactForm, getAllDataController } from '../controllers/contact.controllers.js';

const contactRouting=express.Router();
// getAllDataController
contactRouting.post("/contacUsDataSave",contacUsDataSaveController)
contactRouting.get("/getAllData",getAllDataController)
contactRouting.delete('/deleteContactForm/:id',deleteContactForm)


export default contactRouting;