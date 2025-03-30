import express from 'express';
import { addProjectCategoryController, getAllProjectCategoryController } from '../controllers/projectCategory.controller.js';

const projectCategoryRoute=express.Router();


projectCategoryRoute.post('/addProjectCategory',addProjectCategoryController)
projectCategoryRoute.get('/getAllProjectCategory',getAllProjectCategoryController)


export default projectCategoryRoute;