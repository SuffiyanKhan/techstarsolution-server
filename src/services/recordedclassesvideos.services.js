import db from '../module/index.js';

const { recordedclassesvideos: RecordedClassessVideos } = db;

export const addClassesVideoServices = async (payload) => {
    try {
        const response = await RecordedClassessVideos({ ...payload });
        return response.save()
    } catch (error) {
        throw error;
    }
}


export const getallrecordedclassesvideos = async () => {
    try {
        const response = await RecordedClassessVideos.find({}).exec();
        return response
    } catch (error) {
        throw error;
    }
}

export const deleterecordedvideoservices = async (_id) => {
    try {
        const response = await RecordedClassessVideos.findByIdAndDelete({ _id })
        return response
    } catch (error) {
        throw error;
    }
}

export const editRecordedVideosService = async (_id, payload) => {
    try {
        const response = await RecordedClassessVideos.findByIdAndUpdate(
            _id,
            { ...payload },
            { new: true } 
        );
        if (!response) {
            throw new Error("Video not found!");
        }
        return response;
    } catch (error) {
        console.error("Error updating recorded video:", error);
        throw error;
    }
};