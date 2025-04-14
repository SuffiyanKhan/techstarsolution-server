import express from 'express';
import { newProjectLeadsController } from '../controllers/ourprojects.controller.js';

const newprojectsRouting = express.Router();

newprojectsRouting.post("/newProjectLeads",newProjectLeadsController);

export default newprojectsRouting;