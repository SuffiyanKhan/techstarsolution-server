import express from 'express';
import { addProjectCategoryController, deleteAllProjectCategoryController, getAllProjectCategoryController, updateProjectCategoryController } from '../controllers/projectCategory.controller.js';

const projectCategoryRoute=express.Router();


projectCategoryRoute.post('/addProjectCategory',addProjectCategoryController)
projectCategoryRoute.get('/getAllProjectCategory',getAllProjectCategoryController)
projectCategoryRoute.post('/deleteAllProjectCategory',deleteAllProjectCategoryController)
projectCategoryRoute.post('/updateProjectCategory',updateProjectCategoryController)
export default projectCategoryRoute;