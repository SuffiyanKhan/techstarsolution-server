import express from 'express';
import { addCoursesController, getAllCoursesControllers } from '../controllers/courses.controllers.js';

const coursesRouting= express.Router();

coursesRouting.post('/addCourses',addCoursesController);
coursesRouting.get('/getAllCourses',getAllCoursesControllers);


export default coursesRouting;