import db from '../module/index.js';

const {courses:Courses}=db;

export const addCoursesService=async(payload)=>{
    try {
        const response = await Courses({...payload});
        return response.save()
    } catch (error) {
        throw error;
    }
}

export const getAllCoursesServices=async()=>{
    try {
        const response = await Courses.find({}).exec();
        return response;
    } catch (error) {
        throw error;
    }
}