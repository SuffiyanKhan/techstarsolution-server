import express from 'express';
import { addCoursesController, deleteCoursesControllers, getAllCoursesControllers, updateCoursesController } from '../controllers/courses.controllers.js';

const coursesRouting= express.Router();

coursesRouting.post('/addCourses',addCoursesController);
coursesRouting.get('/getAllCourses',getAllCoursesControllers);
coursesRouting.delete('/deleteCourses/:id',deleteCoursesControllers)
coursesRouting.post('/updateCourse',updateCoursesController)

export default coursesRouting;