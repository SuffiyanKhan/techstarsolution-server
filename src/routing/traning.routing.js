import express from 'express';
import { traningDataSaveController } from '../controllers/traning.controllers.js';

const traningRouting=express.Router();

traningRouting.post('/traningData',traningDataSaveController)



export default traningRouting;