import express from 'express';
import { addProjectCategoryController, deleteAllProjectCategoryController, getAllProjectCategoryController } from '../controllers/projectCategory.controller.js';

const projectCategoryRoute=express.Router();


projectCategoryRoute.post('/addProjectCategory',addProjectCategoryController)
projectCategoryRoute.get('/getAllProjectCategory',getAllProjectCategoryController)
projectCategoryRoute.post('/deleteAllProjectCategory',deleteAllProjectCategoryController)

export default projectCategoryRoute;