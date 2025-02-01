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

const getTraningDataServices=async()=>{
    try {
        const response = await Traning.find({}).exec();
        return response;
    } catch (error) {
        throw error;
    }
}

const accessTrainingVideosServices = async (_id) => {
    try {
        const response = await Traning.findByIdAndUpdate(
            _id,
            { access: true },
            { new: true } // Returns the updated document
        );
        return response;
    } catch (error) {
        console.error("Error updating training access:", error);
        throw error;
    }
};
const accessDeniedTrainingVideosServices = async (_id) => {
    try {
        const response = await Traning.findByIdAndUpdate(
            _id,
            { access: false },
            { new: true } // Returns the updated document
        );
        return response;
    } catch (error) {
        console.error("Error updating training access:", error);
        throw error;
    }
};

export {
    saveTraningDataService,
    getTraningDataServices,
    accessTrainingVideosServices,
    accessDeniedTrainingVideosServices
}