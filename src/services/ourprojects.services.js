import db from '../module/index.js';

const {ourprojects:OurProjects}=db;

export const newOurProjectLeadsServices=async(data)=>{
    try {
        const ourprojects=await OurProjects(data);
        return ourprojects.save();
    } catch (error) {
        throw error;
    }
};