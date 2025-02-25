import db from '../module/index.js';

const {Visitor:Visitor}=db
export const getAllTrackingData=async()=>{
    try {
        const response = await Visitor.find({}).exec();
        return response
    } catch (error) {
        throw error;
    }
}