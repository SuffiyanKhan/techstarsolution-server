import express from 'express';
import { getTraningDataController, trainingVideoAccessController, trainingVideoDeniedController, traningDataSaveController } from '../controllers/traning.controllers.js';

const traningRouting=express.Router();
// trainingVideoAccessController
traningRouting.post('/traningData',traningDataSaveController)
traningRouting.get('/getTraningData',getTraningDataController)
traningRouting.post('/updateaccessfeild',trainingVideoAccessController)
traningRouting.post('/updatedeniedfeild',trainingVideoDeniedController)




export default traningRouting;