import db from '../module/index.js';

const {projectCategory:ProjectCategory}=db;


export const addProjectCategoryServices=async(paylaod)=>{
    try {
        const response = await ProjectCategory({...paylaod});
        return response.save();
    } catch (error) {
        throw error;
    }
}

export const getProjectCategoryServices=async()=>{
    try {
        const resposne = await ProjectCategory.find({}).exec();
        return resposne;
    } catch (error) {
        throw error;
    }
}