import db from '../module/index.js';

const { training: Traning } = db;

const saveTraningDataService = async (payload) => {
    try {
        const response = await Traning({ ...payload });
        return response.save();
    } catch (error) {
        throw error;
    }
}

export {
    saveTraningDataService
}