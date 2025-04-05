import db from '../module/index.js';

const { projectCategory: ProjectCategory } = db;


export const addProjectCategoryServices = async (paylaod) => {
    try {
        const response = await ProjectCategory({ ...paylaod });
        return response.save();
    } catch (error) {
        throw error;
    }
}

export const getProjectCategoryServices = async () => {
    try {
        const resposne = await ProjectCategory.find({}).exec();
        return resposne;
    } catch (error) {
        throw error;
    }
}

export const updateProjectCategoryServices = async (_id, payload) => {
    try {
        const response = await ProjectCategory.findByIdAndUpdate(
            _id,
            payload,
            { new: true }
        );
        return response;
    } catch (error) {
        console.error("Error updating project category:", error.message);
        throw error;
    }
}

export const deleteProjectCategoryServices = async (_id) => {
    try {
        const resposne = await ProjectCategory.findByIdAndDelete(_id);
        return resposne
    } catch (error) {
        throw error;
    }
}



